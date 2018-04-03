from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.quiz_home, name='quiz_home'),
]