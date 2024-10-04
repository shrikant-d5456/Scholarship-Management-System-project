# serializers.py
from rest_framework import serializers
from .models import Services

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = '__all__'

class ServicesPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ['name', 'description', 'price', 'is_active']
