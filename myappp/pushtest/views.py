# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ExpoPushToken
import requests

EXPO_PUSH_URL = "https://exp.host/--/api/v2/push/send"

@api_view(["POST"])
def save_token(request):
    token = request.data.get("token")
    if not token:
        return Response({"error": "No token provided"}, status=400)

    ExpoPushToken.objects.get_or_create(token=token)
    return Response({"message": "Token saved successfully"})


@api_view(["POST"])
def send_notification(request):
    title = request.data.get("title", "Default Title")
    body = request.data.get("body", "Default Body")

    # Get all saved tokens
    tokens = ExpoPushToken.objects.values_list("token", flat=True)
    if not tokens:
        return Response({"error": "No tokens available"}, status=400)

    messages = [
        {
            "to": token,
            "sound": "default",
            "title": title,
            "body": body,
        }
        for token in tokens
    ]

    try:
        # Expo allows sending multiple messages in one request
        response = requests.post(EXPO_PUSH_URL, json=messages)
        response.raise_for_status()
        return Response(response.json())
    except requests.RequestException as e:
        return Response({"error": str(e)}, status=500)
