from django.db import models
from django.contrib.auth.models import User

class MainCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    image = models.ImageField(upload_to='main_categories/', null=True, blank=True)

    def __str__(self):
        return self.name


class TagCategory(models.Model):
    TAG_CHOICES = [
        ('trending', 'Trending'),
        ('new', 'New'),
        ('sales', 'Sales'),
        ('normal', 'Normal'),
    ]
    tag = models.CharField(max_length=20, choices=TAG_CHOICES, unique=True)

    def __str__(self):
        return self.get_tag_display()


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='products/')
    main_category = models.ForeignKey(MainCategory, on_delete=models.CASCADE, related_name='products')
    tag_category = models.ForeignKey(TagCategory, on_delete=models.SET_NULL, null=True, related_name='products')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.PositiveIntegerField(choices=[(i, f"{i}%") for i in range(0, 100)])
    final_price = models.DecimalField(max_digits=10, decimal_places=2, editable=False)

    def save(self, *args, **kwargs):
        self.final_price = self.price - (self.price * self.discount / 100)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name



class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.product.name} ({self.quantity})"

    @property
    def total_price(self):
        return self.product.final_price * self.quantity

from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
class Order(models.Model):
    DELIVERY_CHOICES = [
        ('6am-10am', '6:00 AM - 10:00 AM'),
        ('12pm-4pm', '12:00 PM - 4:00 PM'),
        ('4pm-10pm', '4:00 PM - 10:00 PM'),
    ]

    PAYMENT_CHOICES = [
        ('upi', 'UPI Payment'),
        ('card', 'Credit/Debit Card'),
        ('cod', 'Cash on Delivery'),
    ]

    STATE_CHOICES = [
        ('west-bengal', 'West Bengal'),
        ('maharashtra', 'Maharashtra'),
        ('delhi', 'Delhi'),
        ('karnataka', 'Karnataka'),
        ('tamil-nadu', 'Tamil Nadu'),
        ('uttar-pradesh', 'Uttar Pradesh'),
        ('gujarat', 'Gujarat'),
        ('rajasthan', 'Rajasthan'),
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    product = models.ForeignKey('Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    full_name = models.CharField(max_length=200, default="Not Provided")
    phone = models.CharField(max_length=15, default="0000000000")
    address = models.TextField(default="Not Provided")
    city = models.CharField(max_length=100, default="Not Provided")
    state = models.CharField(max_length=100, choices=STATE_CHOICES, default="west-bengal")
    pincode = models.CharField(max_length=10, default="000000")
    additional_info = models.TextField(blank=True, null=True)

    delivery_time = models.CharField(max_length=20, choices=DELIVERY_CHOICES, default='6am-10am')
    payment_method = models.CharField(max_length=10, choices=PAYMENT_CHOICES, default='cod')

    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(default=timezone.now)

    transaction_id = models.CharField(max_length=100, blank=True, null=True)
    transaction_proof = models.ImageField(upload_to='transaction_proofs/', blank=True, null=True)
    @property
    def total_price(self):
        return self.product.final_price * self.quantity

    def __str__(self):
        return f"Order #{self.id} - {self.product.name} x {self.quantity}"
