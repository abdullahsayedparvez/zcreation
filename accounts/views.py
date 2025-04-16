from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')  # You can define a home page later
        else:
            messages.error(request, 'Invalid username or password.')

    return render(request, 'accounts/login.html')


def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

        # Check if the passwords match
        if password != confirm_password:
            messages.error(request, 'Passwords do not match.')
            return redirect('signup')

        # Check if the username already exists
        if User.objects.filter(username=username).exists():
            messages.error(request, 'Username already exists.')
            return redirect('signup')

        # Create a new user if everything is valid
        user = User.objects.create_user(username=username, password=password)
        user.save()

        # Automatically log the user in after successful signup
        login(request, user)

        messages.success(request, 'Signup successful! You are now logged in.')
        return redirect('home')  # Redirect to home after successful signup

    return render(request, 'accounts/signup.html')  # Render signup page


@login_required
def home_view(request):
    return render(request, 'home.html') 


def intro_view(request):
    return render(request, 'intro.html')


def dashboard(request):
    return render(request, 'dashboard_placeholder.html')  # Placeholder page

def profile(request):
    return render(request, 'profile_placeholder.html')  # Placeholder page

def settings(request):
    return render(request, 'settings_placeholder.html')  # Placeholder page
