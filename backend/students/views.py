from django.shortcuts import render
# file-views.py
from rest_framework import generics
from .models import students
from .serializers import StudentsSerializer, StudentsPostSerializer

class StudentsListCreateView(generics.ListCreateAPIView):
    queryset = students.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return StudentsPostSerializer
        return StudentsSerializer

class StudentsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = students.objects.all()
    serializer_class = StudentsSerializer


# Create your views here.
