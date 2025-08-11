from django.contrib import admin
from .models import Donation

@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'cause', 'amount', 'payment_method', 'date')
    search_fields = ('full_name', 'email')
    list_filter = ('cause', 'payment_method', 'date')
