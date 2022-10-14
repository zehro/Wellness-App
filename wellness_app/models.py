from django.db import models


class User(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.name

class WellnessType(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name

class Task(models.Model):
    wellnessType = models.ForeignKey(WellnessType, on_delete=models.CASCADE)
    repeatType = (
        ('D', 'Daily'),
        ('W', 'Weekly'),
        ('M', 'Monthly'),
        ('O', 'One-Time'),
    )
    startDate = models.DateField()
    endDate = models.DateField()
    isCompleted = models.BooleanField(default=False)
    isExpired = models.BooleanField(default=False)

class Emotion(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name

class Journal(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

class Page(models.Model):
    journal = models.ForeignKey(Journal, on_delete=models.CASCADE)
    date = models.DateField()
    emotions = models.ForeignKey(Emotion, on_delete=models.CASCADE)
    tasks = models.ManyToManyField(Task)
