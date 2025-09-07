from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('product/<int:pk>/', views.product_detail, name='product_detail'),
    path('add-to-cart/', views.add_to_cart, name='add_to_cart'),
    path('cart/', views.cart_view, name='cart_view'),
    path('cart/update/<int:cart_id>/', views.update_cart, name='update_cart'),
    path('cart/remove/<int:cart_id>/', views.remove_cart, name='remove_cart'),

    path('order/<int:product_id>/', views.order_view, name='order_view'),
    path('cart/checkout/', views.cart_checkout_view, name='cart_checkout'),
    path('order-success/<int:order_id>/', views.order_success, name='order_success'),

    path('categories/', views.category_view, name='category_view'),
    path('categories/<int:category_id>/', views.category_view, name='category_filter'),

    path('search/', views.search_view, name='search_view'),

    path('orders/', views.order_list, name='order_list'),

]
