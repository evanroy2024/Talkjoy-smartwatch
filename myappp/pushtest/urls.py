from django.urls import path
from . import views

urlpatterns = [
    path("api/save-token/", views.save_token, name="save-token"),
    path("api/send-notification/", views.send_notification, name="send-notification"),
]
