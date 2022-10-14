from django.db import migrations


def create_data(apps, schema_editor):
    Emotion = apps.get_model('wellness_app', 'Emotion')
    Emotion(
        name = "Calm",
    ).save()
    Emotion(
        name = "Happy",
    ).save()
    Emotion(
        name = "Energetic",
    ).save()
    Emotion(
        name = "Irritated",
    ).save()
    Emotion(
        name = "Sad",
    ).save()
    Emotion(
        name = "Anxious",
    ).save()
    Emotion(
        name = "Depressed",
    ).save()
    Emotion(
        name = "Apathetic",
    ).save()
    Emotion(
        name = "Confused",
    ).save()
    Emotion(
        name = "Angry",
    ).save()

    WellnessType = apps.get_model('wellness_app', 'WellnessType')
    WellnessType(
        name = "Physical",
    ).save()
    WellnessType(
        name = "Mental",
    ).save()
    WellnessType(
        name = "Social",
    ).save()
    WellnessType(
        name = "Emotional",
    ).save()
    WellnessType(
        name = "Spiritual",
    ).save()
    WellnessType(
        name = "Financial",
    ).save()

class Migration(migrations.Migration):

    dependencies = [
        ('wellness_app', '0003_create_additional_models'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
