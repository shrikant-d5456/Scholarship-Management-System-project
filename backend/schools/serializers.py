from rest_framework import serializers
from .models import Schools

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schools
        fields = ['id', 'name', 'code', 'address', 'created_at', 'updated_at']

class SchoolPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schools
        fields = ['name', 'code', 'address']
