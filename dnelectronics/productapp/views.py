from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
# Create your views here.
from .models import Product
from .models import MainCategory, Cart

# Updated view
def dashboard(request):
    products = Product.objects.all()
    categories = MainCategory.objects.all()
    
    # Get cart items for current user
    cart_items = []
    if request.user.is_authenticated:
        cart_items = list(Cart.objects.filter(user=request.user).values_list('product_id', flat=True))
    
    return render(request, 'productapp/dashboard.html', {
        'products': products, 
        'categories': categories,
        'cart_items': cart_items
    })

from .models import Product


def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    
    # Get recommended products from same category, excluding current product
    products = Product.objects.filter(main_category=product.main_category).exclude(pk=pk)[:8]
    
    # Get cart items for current user
    cart_items = []
    if request.user.is_authenticated:
        cart_items = list(Cart.objects.filter(user=request.user).values_list('product_id', flat=True))
    
    return render(request, 'productapp/product_detail.html', {
        'product': product,
        'products': products,
        'cart_items': cart_items
    })

from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
from .models import Cart
from productapp.models import Product

@require_POST
@login_required
def add_to_cart(request):
    product_id = request.POST.get('product_id')
    product = Product.objects.get(id=product_id)

    cart_item, created = Cart.objects.get_or_create(user=request.user, product=product)
    if not created:
        cart_item.quantity += 1
        cart_item.save()

    return JsonResponse({'status': 'success', 'message': 'Item added to cart'})


def cart_view(request):
    if request.user.is_authenticated:
        cart_items = Cart.objects.filter(user=request.user).select_related('product')
        
        # Calculate totals
        from decimal import Decimal
        subtotal = sum(item.total_price for item in cart_items)
        tax_rate = Decimal('0.10')  # 10% tax
        tax_amount = subtotal * tax_rate
        total_amount = subtotal + tax_amount
        
        context = {
            'cart_items': cart_items,
            'subtotal': subtotal,
            'tax_amount': tax_amount,
            'total_amount': total_amount,
            'items_count': cart_items.count(),
        }
    else:
        context = {
            'cart_items': [],
            'subtotal': 0,
            'tax_amount': 0,
            'total_amount': 0,
            'items_count': 0,
        }
    
    return render(request, 'productapp/cart.html', context)


# Add these views to your views.py
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Cart
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.http import JsonResponse
from decimal import Decimal
import json
from .models import Cart

@login_required
def update_cart(request, cart_id):
    if request.method == 'POST':
        cart_item = get_object_or_404(Cart, id=cart_id, user=request.user)
        data = json.loads(request.body)
        action = data.get('action')
        
        removed = False
        if action == 'increase':
            cart_item.quantity += 1
            cart_item.save()
        elif action == 'decrease':
            if cart_item.quantity > 1:
                cart_item.quantity -= 1
                cart_item.save()
            else:
                cart_item.delete()
                removed = True
        
        # Recalculate totals
        cart_items = Cart.objects.filter(user=request.user)
        subtotal = sum(item.total_price for item in cart_items)
        tax_rate = Decimal('0.10')
        tax_amount = subtotal * tax_rate
        total_amount = subtotal + tax_amount
        
        return JsonResponse({
            'success': True,
            'removed': removed,
            'quantity': cart_item.quantity if not removed else 0,
            'item_total': float(cart_item.total_price) if not removed else 0,
            'subtotal': float(subtotal),
            'tax_amount': float(tax_amount),
            'total_amount': float(total_amount),
            'items_count': cart_items.count()
        })
    
    return JsonResponse({'success': False})

@login_required
def remove_cart(request, cart_id):
    if request.method == 'POST':
        cart_item = get_object_or_404(Cart, id=cart_id, user=request.user)
        cart_item.delete()
        
        # Recalculate totals
        cart_items = Cart.objects.filter(user=request.user)
        subtotal = sum(item.total_price for item in cart_items)
        tax_rate = Decimal('0.10')
        tax_amount = subtotal * tax_rate
        total_amount = subtotal + tax_amount
        
        return JsonResponse({
            'success': True,
            'subtotal': float(subtotal),
            'tax_amount': float(tax_amount),
            'total_amount': float(total_amount),
            'items_count': cart_items.count()
        })
    
    return JsonResponse({'success': False})


from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Product, Order
from django.contrib.auth.models import User
def order_view(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    
    if request.method == 'POST':
        # Get form data
        full_name = request.POST.get('fullName')
        phone = request.POST.get('phone')
        address = request.POST.get('address')
        city = request.POST.get('city')
        state = request.POST.get('state')
        pincode = request.POST.get('pincode')
        delivery_time = request.POST.get('deliveryTime')
        payment_method = request.POST.get('paymentMethod')
        quantity = int(request.POST.get('quantity', 1))
        transaction_id = request.POST.get('transaction_id')
        transaction_proof = request.FILES.get('transaction_proof')
        
        # Calculate total amount
        from decimal import Decimal
        delivery_charges = Decimal('5.00')
        tax = Decimal('2.50')
        cod_charge = Decimal('2.00') if payment_method == 'cod' else Decimal('0.00')
        
        total_amount = (product.final_price * quantity) + delivery_charges + tax + cod_charge
        
        # Create order
        order = Order.objects.create(
            user=request.user if request.user.is_authenticated else None,
            product=product,
            quantity=quantity,
            full_name=full_name,
            phone=phone,
            address=address,
            city=city,
            state=state,
            pincode=pincode,
            delivery_time=delivery_time,
            payment_method=payment_method,
            total_amount=total_amount,
            transaction_id=transaction_id,
            transaction_proof=transaction_proof
        )
        
        messages.success(request, 'Order placed successfully!')
        return redirect('order_success', order_id=order.id)
    
    context = {
        'product': product
    }
    return render(request, 'productapp/order.html', context)
def cart_checkout_view(request):
    # Get cart items for the user
    if request.user.is_authenticated:
        cart_items = Cart.objects.filter(user=request.user)
    else:
        # Handle anonymous users if you have session-based cart
        cart_items = []
        
    if not cart_items.exists():
        messages.error(request, 'Your cart is empty!')
        return redirect('cart_view')  # or wherever your cart page is
        
    if request.method == 'POST':
        # Get form data
        full_name = request.POST.get('fullName')
        phone = request.POST.get('phone')
        address = request.POST.get('address')
        city = request.POST.get('city')
        state = request.POST.get('state')
        pincode = request.POST.get('pincode')
        delivery_time = request.POST.get('deliveryTime')
        payment_method = request.POST.get('paymentMethod')
        
        # Get transaction proof data
        transaction_id = request.POST.get('transaction_id', '').strip()
        transaction_proof = request.FILES.get('transaction_proof')
        
        # Validate transaction proof - at least one should be provided
        if not transaction_id and not transaction_proof:
            messages.error(request, 'Please provide either transaction ID or upload payment screenshot.')
            return render(request, 'productapp/cart_order.html', get_cart_context(cart_items))
        
        # Calculate total amount for all cart items
        from decimal import Decimal
        delivery_charges = Decimal('5.00')
        tax = Decimal('2.50')
        cod_charge = Decimal('2.00') if payment_method == 'cod' else Decimal('0.00')
        
        subtotal = sum(item.product.final_price * item.quantity for item in cart_items)
        total_amount = subtotal + delivery_charges + tax + cod_charge
        
        # Create orders for each cart item
        orders_created = []
        for item in cart_items:
            # Calculate proportional charges for each item
            item_total = item.product.final_price * item.quantity
            item_delivery = delivery_charges * (item_total / subtotal)
            item_tax = tax * (item_total / subtotal)
            item_cod = cod_charge * (item_total / subtotal)
            item_final_total = item_total + item_delivery + item_tax + item_cod
            
            order = Order.objects.create(
                user=request.user if request.user.is_authenticated else None,
                product=item.product,
                quantity=item.quantity,
                full_name=full_name,
                phone=phone,
                address=address,
                city=city,
                state=state,
                pincode=pincode,
                delivery_time=delivery_time,
                payment_method=payment_method,
                total_amount=item_final_total,
                transaction_id=transaction_id if transaction_id else '',
                transaction_proof=transaction_proof if transaction_proof else None
            )
            orders_created.append(order)
        
        # Clear cart after successful order
        cart_items.delete()
        
        messages.success(request, 'Orders placed successfully!')
        return redirect('order_success', order_id=orders_created[0].id)  # or create a cart success page
    
    # GET request - show checkout form
    context = get_cart_context(cart_items)
    return render(request, 'productapp/cart_order.html', context)


def get_cart_context(cart_items):
    """Helper function to get cart context data"""
    from decimal import Decimal
    delivery_charges = Decimal('5.00')
    tax = Decimal('2.50')
    
    subtotal = sum(item.product.final_price * item.quantity for item in cart_items)
    total_amount = subtotal + delivery_charges + tax
    
    context = {
        'cart_items': cart_items,
        'subtotal': subtotal,
        'delivery_charges': delivery_charges,
        'tax': tax,
        'total_amount': total_amount,
        'is_cart_checkout': True  # Flag to identify this is cart checkout
    }
    return context
def order_success(request, order_id):
    order = get_object_or_404(Order, id=order_id)
    return render(request, 'productapp/order_success.html', {'order': order})
# views.py
from django.shortcuts import render, get_object_or_404
from .models import Product, MainCategory

def category_view(request, category_id=None):
    categories = MainCategory.objects.all()
    
    if category_id:
        selected_category = get_object_or_404(MainCategory, id=category_id)
        products = Product.objects.filter(main_category=selected_category)
    else:
        selected_category = None
        products = Product.objects.all()
    
    context = {
        'categories': categories,
        'products': products,
        'selected_category': selected_category,
    }
    return render(request, 'productapp/category.html', context)

from django.shortcuts import render
from django.db.models import Q
from .models import Product, MainCategory

def search_view(request):
    query = request.GET.get('search', '')
    products = []
    
    if query:
        products = Product.objects.filter(
            Q(name__icontains=query) | 
            Q(description__icontains=query) |
            Q(main_category__name__icontains=query)
        )
    
    context = {
        'products': products,
        'query': query,
        'categories': MainCategory.objects.all(),
    }
    return render(request, 'productapp/search_results.html', context)

def order_list(request):
    orders = Order.objects.select_related('product').order_by('-created_at')
    
    # Add progress percentage for each order
    for order in orders:
        if order.status == 'pending':
            order.progress = 25
        elif order.status == 'processing':
            order.progress = 50
        elif order.status == 'shipped':
            order.progress = 75
        elif order.status == 'delivered':
            order.progress = 100
        else:  # cancelled
            order.progress = 0
    
    return render(request, 'productapp/order_list.html', {
        'orders': orders,
        'total_orders': orders.count()
    })