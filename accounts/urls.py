# accounts/urls.py
from django.urls import path
from .views import login_view, home_view , intro_view, signup_view ,order_now, about_us, contact_us
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', intro_view, name='intro'),
    path('login/', login_view, name='login'),  # This will show the login page
    path('home/', home_view, name='home'),    # Home page after successful login
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),  # Logout
    path('signup/', signup_view, name='signup'),
    path('order_now/', order_now, name='order_now'),
    path('about_us/', about_us, name='about_us'),
    path('contact_us/', contact_us, name='contact_us'),
]