from .models import *
from rest_framework import viewsets
from .serializers import *

class TurtlesViewSet(viewsets.ModelViewSet):
    queryset = Turtles.objects.all()
    serializer_class = TurtlesSerializer


class Answer_OptionsViewSet(viewsets.ModelViewSet):
    queryset = Answer_Options.objects.all()
    serializer_class = Answer_OptionsSerializer

    
class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer


    
class Quiz_QuestionViewSet(viewsets.ModelViewSet):
    queryset = Quiz_Question.objects.all()
    serializer_class = Quiz_QuestionSerializer