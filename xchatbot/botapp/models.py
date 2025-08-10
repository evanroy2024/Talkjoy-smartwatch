from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
import uuid

class Bot(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    system_prompt = models.TextField()     # description of the bot's purpose
    
    knowledge_data = models.TextField()
    # PDF word files files
    data_files = models.FileField(upload_to='xbot/pdf_files/', blank=True, null=True)

    # Website links (comma-separated or JSON)
    website_links = models.TextField(help_text="Add URLs separated by commas", blank=True)
    public_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    bot_status = models.BooleanField(default=True)

    # New fields
    agent_nature = models.CharField(
        max_length=20, 
        choices=[
            ('flirty', 'Flirty'),
            ('professional', 'Professional'),
            ('funny', 'Funny'),
            ('friendly', 'Friendly'),
        ],
        blank=True,
        null=True
    )
    
    agent_vibe = models.CharField(
        max_length=20,
        choices=[
            ('calm', 'Calm'),
            ('energetic', 'Energetic'),
            ('serious', 'Serious'),
            ('casual', 'Casual'),
        ],
        blank=True,
        null=True
    )
    
    # Model selection
    ai_model = models.CharField(
        max_length=50,
        choices=[
            ('gpt-4o', 'GPT-4o'),
            ('gpt-4o-mini', 'GPT-4o Mini'),
            ('claude-3.5-sonnet', 'Claude 3.5 Sonnet'),
            ('claude-3-haiku', 'Claude 3 Haiku'),
            ('gemini-pro', 'Gemini Pro'),
            ('llama-3.1-70b', 'Llama 3.1 70B'),
        ],
        default='gpt-4o-mini'
    )
    
    # Server type
    server_type = models.CharField(
        max_length=20,
        choices=[
            ('shared', 'Shared'),
            ('vps', 'VPS'),
            ('dedicated', 'Dedicated'),
        ],
        default='shared'
    )
    
    # Server location
    server_location = models.CharField(
        max_length=30,
        choices=[
            ('us-east', 'US East'),
            ('us-west', 'US West'),
            ('eu-west', 'Europe West'),
            ('asia-pacific', 'Asia Pacific'),
            ('india', 'India'),
        ],
        default='us-east'
    )
    
    # Storage options
    storage_size = models.CharField(
        max_length=20,
        choices=[
            ('1gb', '1 GB'),
            ('5gb', '5 GB'),
            ('10gb', '10 GB'),
            ('25gb', '25 GB'),
            ('50gb', '50 GB'),
            ('100gb', '100 GB'),
        ],
        default='1gb'
    )
    
    # Backup frequency
    backup_frequency = models.CharField(
        max_length=20,
        choices=[
            ('daily', 'Once a day'),
            ('every_2_days', 'Every 2 days'),
            ('weekly', 'Once a week'),
            ('monthly', 'Once a month'),
        ],
        default='weekly'
    )
    
    # Performance settings
    response_speed = models.CharField(
        max_length=20,
        choices=[
            ('fast', 'Fast'),
            ('balanced', 'Balanced'),
            ('quality', 'Quality'),
        ],
        default='balanced'
    )
    
    # Memory settings
    conversation_memory = models.CharField(
        max_length=20,
        choices=[
            ('short', 'Short (10 messages)'),
            ('medium', 'Medium (50 messages)'),
            ('long', 'Long (200 messages)'),
            ('unlimited', 'Unlimited'),
        ],
        default='medium'
    )
    
    def __str__(self):
        return self.name

class BotUsages(models.Model):
    bot = models.ForeignKey(Bot, on_delete=models.CASCADE, related_name='usages')
    bot_messages = models.CharField(max_length=255)
    bot_words = models.CharField(max_length=255)
    
class BotChatLog(models.Model):
    bot = models.ForeignKey('Bot', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    chat_history = models.TextField(blank=True, default='')  # All messages in one field
    created_at = models.DateTimeField(auto_now_add=True)
    
    def add_message(self, sender, message):
        entry = f"{sender.upper()}: {message.strip()}"
        if self.chat_history:
            self.chat_history += f", {entry}"
        else:
            self.chat_history = entry
        self.save()
        
# Dropdown options for LLM brain, defined outside the model
LLM_CHOICES = [
    ('gpt-4', 'GPT-4'),
    ('gpt-3.5', 'GPT-3.5'),
    ('claude-2', 'Claude 2'),
    ('claude-3', 'Claude 3'),
    ('mistral-7b', 'Mistral 7B'),
    ('llama-3', 'LLaMA 3'),
    ('gemini-pro', 'Gemini Pro'),
    ('command-r', 'Command R'),
    ('mixtral', 'Mixtral'),
    ('zephyr', 'Zephyr'),
]

from django.db import models
from django.contrib.auth.models import User
import uuid

class XBot(models.Model):
    # Owner of the bot
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    # Bot name and description
    name = models.CharField(max_length=100)
    description = models.TextField()

    # knowlegde 
    knowledge = models.TextField(blank=True, null=True, help_text="Knowledge base for the bot")

    # PDF file uploads
    pdf_files = models.FileField(upload_to='xbot/pdf_files/', blank=True, null=True)

    # Word document uploads
    word_files = models.FileField(upload_to='xbot/word_files/', blank=True, null=True)

    # Website links (comma-separated or JSON)
    website_links = models.TextField(help_text="Add URLs separated by commas", blank=True)

    # Unique public identifier and creation time
    public_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class ChatUI(models.Model):
    CATEGORY_CHOICES = [
        ('popup_bubble', 'Popup Bubble'),
        ('dynamic_nest', 'Dynamic Nest'),
        ('corelift', 'Corelift'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='chatui_images/')
    number = models.IntegerField(choices=[(i, i) for i in range(1, 101)])
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name
    

class Character(models.Model):
    CATEGORY_CHOICES = [
        ('business', 'Business'),
        ('assistant', 'Assistant'),
        ('general', 'General'),
        ('mentor', 'Mentor'),
        ('support', 'Support'),
        ('fun', 'Fun'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='character_images/')
    vibe = models.CharField(max_length=100, null=True, blank=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name