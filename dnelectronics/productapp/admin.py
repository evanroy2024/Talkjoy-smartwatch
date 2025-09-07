from django.contrib import admin
from .models import MainCategory, TagCategory, Product

@admin.register(MainCategory)
class MainCategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)


@admin.register(TagCategory)
class TagCategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'tag')
    search_fields = ('tag',)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'main_category', 'tag_category', 'price', 'discount', 'final_price')
    list_filter = ('main_category', 'tag_category')
    search_fields = ('name', 'description')
    readonly_fields = ('final_price',)

from django.contrib import admin
from .models import Cart

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'quantity', 'total_price')
    list_filter = ('user',)
    search_fields = ('product__name', 'user__username')

from .models import Order
from django.contrib import admin
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'id', 'user', 'product', 'quantity', 'full_name', 'phone',
        'city', 'state', 'pincode', 'delivery_time', 'payment_method',
        'total_amount', 'created_at','transaction_id' , 'transaction_proof',
    )
    list_filter = ('state', 'delivery_time', 'payment_method', 'created_at')
    search_fields = ('full_name', 'phone', 'city', 'pincode')
    readonly_fields = ('created_at',)
