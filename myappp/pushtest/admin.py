# myapp/admin.py
from django.contrib import admin
from .models import ExpoPushToken
import requests

EXPO_PUSH_URL = "https://exp.host/--/api/v2/push/send"

@admin.register(ExpoPushToken)
class ExpoPushTokenAdmin(admin.ModelAdmin):
    list_display = ("token", "created_at")
    actions = ["send_test_notification"]

    def send_test_notification(self, request, queryset):
        for obj in queryset:
            data = {
                "to": obj.token,
                "sound": "default",
                "title": "Test Notification",
                "body": "Hello from Django Admin 🚀",
            }
            requests.post(EXPO_PUSH_URL, json=data)
        self.message_user(request, "Test notification(s) sent!")
    send_test_notification.short_description = "Send test notification"
