from django.db import models

class Carrera(models.Model):
    nombre_carrera = models.CharField(max_length=75)
    num_semestres = models.IntegerField()

    def __str__(self):
        return self.nombre_carrera
