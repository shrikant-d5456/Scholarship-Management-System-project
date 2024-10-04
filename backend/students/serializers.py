# file-serializers.py
from rest_framework import serializers
from .models import students

class StudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = students
        fields = ['id', 'name', 'age', 'class_name', 'school', 'roll_number', 'created_at', 'updated_at']

class StudentsPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = students
        fields = ['name', 'age', 'class_name', 'school', 'roll_number']
