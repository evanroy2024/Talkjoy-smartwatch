from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from django.db.models import Q

def register_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if User.objects.filter(Q(username=username) | Q(email=email)).exists():
            messages.error(request, 'Username or email already taken')
        else:
            User.objects.create_user(username=username, email=email, password=password)
            messages.success(request, 'Registration successful')
            return redirect('login')

    return render(request, 'auths/register.html')

def login_view(request):
    if request.method == 'POST':
        identifier = request.POST.get('identifier')
        password = request.POST.get('password')

        # Try login via username or email
        user = authenticate(request, username=identifier, password=password)
        if not user:
            try:
                username = User.objects.get(email=identifier).username
                user = authenticate(request, username=username, password=password)
            except User.DoesNotExist:
                user = None

        if user:
            login(request, user)
            return redirect('dashboard')
        else:
            messages.error(request, 'Invalid username/email or password')

    return render(request, 'auths/login.html')

def logout_view(request):
    logout(request)
    return redirect('login')

def home_view(request):
    return render(request, 'home/home1.html')

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import PersonalDetails

@login_required
def account_details(request):
    try:
        personal_details = PersonalDetails.objects.get(user=request.user)
        has_details = True
    except PersonalDetails.DoesNotExist:
        personal_details = None
        has_details = False
    
    # Handle form submission for add/update/delete
    if request.method == 'POST':
        action = request.POST.get('action')
        
        if action == 'add':
            if has_details:
                messages.warning(request, 'You already have personal details.')
            else:
                personal_details = PersonalDetails(
                    user=request.user,
                    first_name=request.POST.get('first_name'),
                    last_name=request.POST.get('last_name'),
                    phone_number=request.POST.get('phone_number'),
                    address=request.POST.get('address'),
                    date_of_birth=request.POST.get('date_of_birth'),
                    gender=request.POST.get('gender')
                )
                personal_details.save()
                messages.success(request, 'Personal details added successfully!')
                return redirect('account_details')
        
        elif action == 'update':
            if has_details:
                personal_details.first_name = request.POST.get('first_name')
                personal_details.last_name = request.POST.get('last_name')
                personal_details.phone_number = request.POST.get('phone_number')
                personal_details.address = request.POST.get('address')
                personal_details.date_of_birth = request.POST.get('date_of_birth')
                personal_details.gender = request.POST.get('gender')
                personal_details.save()
                messages.success(request, 'Personal details updated successfully!')
                return redirect('account_details')
        
        elif action == 'delete':
            if has_details:
                personal_details.delete()
                messages.success(request, 'Personal details deleted successfully!')
                return redirect('account_details')
    
    context = {
        'personal_details': personal_details,
        'has_details': has_details,
    }
    return render(request, 'home/account_details.html', context)

def about_us(request):
    return render(request, 'home/about.html')

def contact_us(request):
    return render(request, 'home/contact.html')