from django.contrib import admin
from django.db import models

# Register your models here.
from .models import User

# create a class for the admin-model integration
class Admin(admin.ModelAdmin):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name

admin.site.register(User,Admin)