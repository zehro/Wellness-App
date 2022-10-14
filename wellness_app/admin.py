from django.contrib import admin

# Register your models here.
from .models import User
from .models import WellnessType
from .models import Emotion

admin.site.register(User)
admin.site.register(WellnessType)
admin.site.register(Emotion)