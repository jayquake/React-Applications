from .models import Assessment
from .serializers import AssessmentSerializer
from rest_framework import generics


class AssessmentListCreate(generics.ListCreateAPIView):
    queryset = Assessment.objects.all()
    serializer_class = AssessmentSerializer
