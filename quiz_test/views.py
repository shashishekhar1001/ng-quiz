from django.shortcuts import render

# Create your views here.
def quiz_home(request):
    return render(request, "quiz_home.html", {})