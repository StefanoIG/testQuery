from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import CarreraViewSet

router = DefaultRouter()
router.register(r'carreras', CarreraViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
