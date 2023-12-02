from django.urls import path
from .views import card_list

urlpatterns = [
    path('cards/', card_list, name='card_list'),
]