from django.db import models

# Create your models here.

from django.db import models
from django.contrib.auth.models import User

class PersonalDetails(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=10, choices=[
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other')
    ])
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"