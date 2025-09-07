from django.contrib import admin

# Register your models here.
from .models import PersonalDetails

@admin.register(PersonalDetails)
class PersonalDetailsAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'phone_number', 'gender', 'date_of_birth')
    search_fields = ('first_name', 'last_name', 'phone_number')