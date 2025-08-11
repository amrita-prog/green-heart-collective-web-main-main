from rest_framework import viewsets
from .models import VolunteerApplication
from .serializers import VolunteerApplicationSerializer
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from rest_framework import generics
from donation.models import Donation


class VolunteerApplicationViewSet(viewsets.ModelViewSet):
    queryset = VolunteerApplication.objects.all()
    serializer_class = VolunteerApplicationSerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

