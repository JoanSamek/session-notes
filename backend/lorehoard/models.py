from django.db import models

# Create your models here.
class Compaign(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=300)
    image = models.ImageField()