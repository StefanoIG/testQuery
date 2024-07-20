from rest_framework import viewsets
from .models import Carrera
from .serializers import CarreraSerializer

class CarreraViewSet(viewsets.ModelViewSet):
    queryset = Carrera.objects.all()
    serializer_class = CarreraSerializer
