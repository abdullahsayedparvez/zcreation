# accounts/urls.py
from django.urls import path
from .views import login_view, home_view , intro_view, signup_view ,dashboard, profile, settings
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', intro_view, name='intro'),
    path('login/', login_view, name='login'),  # This will show the login page
    path('home/', home_view, name='home'),    # Home page after successful login
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),  # Logout
    path('signup/', signup_view, name='signup'),
    path('dashboard/', dashboard, name='dashboard'),
    path('profile/', profile, name='profile'),
    path('settings/', settings, name='settings'),
]