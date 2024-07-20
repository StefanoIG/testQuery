from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import EstudianteViewSet, RequisitoViewSet, EstudiantePorRequisitoViewSet

router = DefaultRouter()
router.register('estudiantes', EstudianteViewSet)
router.register('requisitos', RequisitoViewSet)
router.register('estudiantes-requisitos', EstudiantePorRequisitoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
