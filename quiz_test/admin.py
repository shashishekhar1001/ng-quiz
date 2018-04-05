from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Turtles)
admin.site.register(Answer_Options)
admin.site.register(Quiz)
admin.site.register(Quiz_Question)