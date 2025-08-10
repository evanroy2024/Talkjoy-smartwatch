from django.urls import path
from . import views

app_name = 'xbot'

urlpatterns = [
    # Create bot
    path('', views.character_prompt, name='character_prompt'),

    # Public chat UI for specific bot
    path('chat/<uuid:public_id>/', views.public_chat_ui, name='public_chat_ui'),

    # Endpoint to send messages to specific bot
    path('send/<uuid:public_id>/', views.send_message_public, name='send_message_public'),

    path('create/', views.create_bot, name='create_bot'),     # For Bot creation --------------------
    path('upload-file/', views.upload_file, name='upload_file'),
    path('train-url/', views.train_from_url, name='train_from_url'),
    path('edit/<int:bot_id>', views.edit_agents, name='edit_bot'),
    path('edit/<int:bot_id>/upload-file/', views.edit_upload_file, name='edit_upload_file'),
    path('fetch-website/<int:bot_id>/', views.fetch_website_data, name='fetch_website_data'),
    path("toggle-bot-status/<int:bot_id>/", views.toggle_bot_status, name="toggle_bot_status"),
    path('delete-bot/<int:bot_id>/', views.delete_bot, name='delete_bot'),




]
