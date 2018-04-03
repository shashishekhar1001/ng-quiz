from .models import Turtles
from rest_framework import viewsets
from .serializers import TurtlesSerializer

class TurtlesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Turtles.objects.all()
    serializer_class = TurtlesSerializer