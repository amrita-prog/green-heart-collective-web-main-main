from django.db import models

class Donation(models.Model):
    CAUSES = [
        ('Education for All', 'Education for All'),
        ('Green Plantation', 'Green Plantation'),
        ('Slum Development', 'Slum Development'),
        ('General Fund', 'General Fund'),
    ]

    PAYMENT_METHODS = [
        ('UPI', 'UPI Payment'),
        ('Card', 'Credit/Debit Card'),
        ('Bank', 'Bank Transfer'),
    ]

    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    cause = models.CharField(max_length=50, choices=CAUSES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_method = models.CharField(max_length=20, choices=PAYMENT_METHODS)
    message = models.TextField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - ₹{self.amount} ({self.cause})"
