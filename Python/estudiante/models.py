from django.db import models
from carrera.models import Carrera

class Estudiante(models.Model):
    carrera = models.ForeignKey(Carrera, on_delete=models.CASCADE)
    nombre_estudiante = models.CharField(max_length=30)
    apellido_estudiante = models.CharField(max_length=30)
    correo_estudiante = models.EmailField(max_length=60)
    fecha_nacimiento = models.DateField()

    def __str__(self):
        return f'{self.nombre_estudiante} {self.apellido_estudiante}'

class Requisito(models.Model):
    nombre_requisito = models.CharField(max_length=150)

    def __str__(self):
        return self.nombre_requisito

class EstudiantePorRequisito(models.Model):
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE)
    requisito = models.ForeignKey(Requisito, on_delete=models.CASCADE)
    es_cumplido = models.BooleanField()

    def __str__(self):
        return f'{self.estudiante} - {self.requisito}'
