from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout

def login_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('mainapp:dashboard')
    return render(request, 'login.html')

def logout_view(request):
    logout(request)
    return redirect('login')

from django.contrib.auth.models import User
def register_view(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = User.objects.create_user(username=username, password=password)
        login(request, user)
        return redirect('character_prompt')
    return render(request, 'register.html')

from botapp.models import Character


def dashboard(request):
    return render(request, 'ui/dashboard.html')

def ai_builder(request):
    return render(request, 'ui/ai_builder.html')

def bills(request):
    return render(request, 'user/bills.html')

def create_workflow(request):
    return render(request, 'workflow/create.html')


from django.shortcuts import render, redirect
from .models import Credential
from django.contrib.auth.decorators import login_required
@login_required
def credentials(request):
    models = ["OpenAI", "Claude", "Gemini", "DeepSeek", "Mistral", "Groq", "Cohere", "Anthropic", "Yi", "LLaMA"]

    if request.method == "POST":
        name = request.POST.get("name")
        key = request.POST.get("key")
        model = request.POST.get("model")

        if name and key and model:
            Credential.objects.create(
                user=request.user,
                name=name,
                key=key,
                model=model
            )
        return redirect('mainapp:credentials')  # Redirect to avoid form resubmission

    credentials = Credential.objects.filter(user=request.user)
    return render(request, "userpages/credentials.html", {
        "models": models,
        "credentials": credentials
    })

from django.shortcuts import get_object_or_404
from django.contrib.auth.decorators import login_required
@login_required
def delete_credential(request, credential_id):
    credential = get_object_or_404(Credential, id=credential_id, user=request.user)
    if request.method == "POST":
        credential.delete()
    return redirect('mainapp:credentials')

def user_plans(request):
    return render(request, 'userpages/userplans.html')

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

@login_required
def account_settings(request):
    if request.method == "POST":
        action = request.POST.get("action")
        if action == "update_email":
            email = request.POST.get("email")
            request.user.email = email
            request.user.save()
        elif action == "update_username":
            username = request.POST.get("username")
            request.user.username = username
            request.user.save()
        elif action == "update_password":
            password = request.POST.get("password")
            request.user.set_password(password)
            request.user.save()
        elif action == "delete_account":
            request.user.delete()
            return redirect("home")  # or your logout page

    return render(request, "userpages/settings.html")

def guide(request):
    return render(request, 'userpages/guidance.html')

from botapp.models import Bot

@login_required
def agents(request):
    agents = Bot.objects.filter(owner=request.user).order_by('-created_at')
    return render(request, "userpages/my_agents.html", {"agents": agents})



from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib import messages
from botapp.models import Character, Bot
import json


def templates(request):
    # Get all characters
    characters = Character.objects.all()
    
    # Get unique categories for filter buttons
    categories = Character.CATEGORY_CHOICES
    
    # Filter by category if provided
    selected_category = request.GET.get('category', 'all')
    if selected_category != 'all':
        characters = characters.filter(category=selected_category)
    
    context = {
        'characters': characters,
        'categories': categories,
        'selected_category': selected_category,
    }
    
    return render(request, 'ui/template.html', context)

@login_required
@require_POST
def create_bot_from_template(request):
    """
    Create a new bot from a character template
    """
    try:
        data = json.loads(request.body)
        character_id = data.get('character_id')
        bot_name = data.get('bot_name', '').strip()
        
        if not bot_name:
            return JsonResponse({
                'success': False, 
                'error': 'Bot name is required'
            }, status=400)
        
        # Get the character template
        character = get_object_or_404(Character, id=character_id)
        
        # Check if user already has a bot with this name
        if Bot.objects.filter(owner=request.user, name=bot_name).exists():
            return JsonResponse({
                'success': False, 
                'error': 'You already have a bot with this name'
            }, status=400)
        
        # Create new bot
        bot = Bot.objects.create(
            owner=request.user,
            name=bot_name,
            system_prompt=character.description
        )
        
        return JsonResponse({
            'success': True,
            'message': f'Bot "{bot_name}" created successfully!',
            'bot_id': bot.id,
            'redirect_url': f'/chat/{bot.id}/'  # Adjust URL as needed
        })
        
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False, 
            'error': 'Invalid JSON data'
        }, status=400)
    except Character.DoesNotExist:
        return JsonResponse({
            'success': False, 
            'error': 'Character template not found'
        }, status=404)
    except Exception as e:
        return JsonResponse({
            'success': False, 
            'error': 'An error occurred while creating the bot'
        }, status=500)
    
from botapp.models import Bot, BotUsages
from django.db.models import Count, Q
from django.utils import timezone
from datetime import timedelta

@login_required
def analytics(request):
    # Get user's bots
    user_bots = Bot.objects.filter(owner=request.user)
    
    # Get selected bot or default to first bot
    selected_bot_id = request.GET.get('bot_id')
    selected_bot = None
    
    if selected_bot_id:
        try:
            selected_bot = user_bots.get(id=selected_bot_id)
        except Bot.DoesNotExist:
            selected_bot = user_bots.first() if user_bots.exists() else None
    else:
        selected_bot = user_bots.first() if user_bots.exists() else None
    
    analytics_data = {}
    
    if selected_bot:
        # Get usage statistics for selected bot
        usages = BotUsages.objects.filter(bot=selected_bot)
        
        # Basic stats - exact numbers from fields
        total_messages = int(usages.first().bot_messages) if usages.exists() and usages.first().bot_messages else 0
        total_words = int(usages.first().bot_words) if usages.exists() and usages.first().bot_words else 0
        
        # Since there's no timestamp field, show total usage count as recent
        recent_usages = usages.count()
        
        # Daily usage - without timestamps, we'll show a simple distribution
        daily_usage = []
        avg_per_day = usages.count() / 7 if usages.count() > 0 else 0
        now = timezone.now()
        
        for i in range(7):
            date = now - timedelta(days=i)
            # Simple distribution since no timestamps available
            daily_count = round(avg_per_day) if i < usages.count() else 0
            daily_usage.append({
                'date': date.strftime('%m/%d'),
                'count': daily_count
            })
        daily_usage.reverse()
        
        analytics_data = {
            'total_messages': total_messages,
            'total_words': total_words,
            'recent_usages': recent_usages,
            'daily_usage': daily_usage,
            'avg_words_per_message': round(total_words / total_messages, 1) if total_messages > 0 else 0,
        }
    
    context = {
        'user_bots': user_bots,
        'selected_bot': selected_bot,
        'analytics_data': analytics_data,
    }
    
    return render(request, 'userpages/analytics.html', context)