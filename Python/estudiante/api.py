from rest_framework import viewsets
from .models import Estudiante, Requisito, EstudiantePorRequisito
from .serializers import EstudianteSerializer, RequisitoSerializer, EstudiantePorRequisitoSerializer

class EstudianteViewSet(viewsets.ModelViewSet):
    queryset = Estudiante.objects.all()
    serializer_class = EstudianteSerializer

class RequisitoViewSet(viewsets.ModelViewSet):
    queryset = Requisito.objects.all()
    serializer_class = RequisitoSerializer

class EstudiantePorRequisitoViewSet(viewsets.ModelViewSet):
    queryset = EstudiantePorRequisito.objects.all()
    serializer_class = EstudiantePorRequisitoSerializer
