from django.urls import path
from . import views


app_name = 'mainapp'


urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('templates/', views.templates, name='templates'),
    path('bills/', views.bills, name='bills'),
    path('ai_builder/', views.ai_builder, name='ai_builder'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', views.register_view, name='register'),

    path('analysis/',views.analytics, name='analytics'),

    path('create_workflow/', views.create_workflow, name='create_workflow'),
    path('credentials/', views.credentials, name='credentials'),
    path('credentials/delete/<int:credential_id>/', views.delete_credential, name='delete_credential'),
    path('userplans/', views.user_plans, name='user_plans'),
    path('settings/', views.account_settings, name='account_settings'),
    path('guide/', views.guide, name='guide'),
    path("agents/", views.agents, name="agents"),
    path("create_bot_from_templat/", views.create_bot_from_template, name="create_bot_from_template"),




]
