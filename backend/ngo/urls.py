from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VolunteerApplicationViewSet
from .views import ContactMessageViewSet

router = DefaultRouter()
router.register(r'volunteers', VolunteerApplicationViewSet)
router.register(r'contact-messages', ContactMessageViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

