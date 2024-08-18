from rest_framework import serializers
from .models import ContentManagement  # Import your model

# Serializer for the ContentManagement model
class PortalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentManagement
        fields = '__all__'  # Or list the fields explicitly

# Post serializer for creating ContentManagement instances
class PortalPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentManagement
        fields = ['name', 'description', 'main_content']  # List the fields to be used for POST requests
