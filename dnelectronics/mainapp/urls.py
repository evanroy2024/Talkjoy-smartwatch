from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('', views.home_view, name='home'),
    path('account/', views.account_details, name='account_details'),

    path('about/', views.about_us, name='about_us'),
    path('contact/', views.contact_us, name='contact_us'),
]
