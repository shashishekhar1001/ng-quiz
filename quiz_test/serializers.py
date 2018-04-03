from .models import Turtles
from rest_framework import serializers


class TurtlesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Turtles
        fields = ('url', 'turtle_type', 'image_url', 'locations', 'size', 'lifespan', 'diet', 'description')