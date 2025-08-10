from django.contrib import admin

# Register your models here.
from .models import Bot , XBot

from django.contrib import admin
from .models import Bot 
from .models import XBot 
@admin.register(Bot)
class BotAdmin(admin.ModelAdmin):
    list_display = ('name', 'owner', 'public_id', 'created_at')  # Add public_id here
    readonly_fields = ('public_id', 'created_at')  # Optional: make them read-only

admin.site.register(XBot)

from django.contrib import admin
from .models import ChatUI

@admin.register(ChatUI)
class ChatUIAdmin(admin.ModelAdmin):
    list_display = ('name', 'number', 'category', 'image')
    search_fields = ('name', 'description')
    list_filter = ('category',)

from .models import Character

admin.site.register(Character)
from .models import BotUsages

@admin.register(BotUsages)
class BotUsagesAdmin(admin.ModelAdmin):
    list_display = ('bot', 'bot_messages', 'bot_words')
    search_fields = ('bot__name', 'bot_messages', 'bot_words')