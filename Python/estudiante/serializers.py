from rest_framework import serializers
from .models import Estudiante, Requisito, EstudiantePorRequisito

class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = '__all__'

class RequisitoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requisito
        fields = '__all__'

class EstudiantePorRequisitoSerializer(serializers.ModelSerializer):
    class Meta:
        model = EstudiantePorRequisito
        fields = '__all__'
