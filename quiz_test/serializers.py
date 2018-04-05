from .models import *
from rest_framework import serializers


class TurtlesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Turtles
        fields = ('url', 'turtle_type', 'image_url', 'locations', 'size', 'lifespan', 'diet', 'description')


class Answer_OptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer_Options
        fields = ('url', 'text')

class QuizSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Quiz
        fields = ('url', 'quiz_name')


class Quiz_QuestionSerializer(serializers.HyperlinkedModelSerializer):
    possible_answers = Answer_OptionsSerializer(many=True, read_only=True)
    correct = Answer_OptionsSerializer(read_only=True)
    class Meta:
        model = Quiz_Question
        fields = ('url', 'quiz', 'q_type', 'text', 'possible_answers', 'selected', 'correct')