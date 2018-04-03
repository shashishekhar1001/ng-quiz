from django.db import models

# Create your models here.
class Turtles(models.Model):
    turtle_type = models.CharField(max_length=40)
    image_url = models.ImageField(upload_to='turtle_pics/')
    locations = models.CharField(max_length=200)
    size = models.CharField(max_length=200)
    lifespan = models.CharField(max_length=200)
    diet = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.turtle_type

    class Meta:
        verbose_name = "Turtle"
        verbose_name_plural = "Turtles"