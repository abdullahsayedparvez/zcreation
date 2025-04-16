from django.contrib.auth.models import User

# Get all users
users = User.objects.all()
for user in users:
    print(user.username, user.email)