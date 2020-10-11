from rest_framework import serializers
from .models import Assessment


class AssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assessment
        fields = ('respiratory_distress', 'appearance', 'risk_factor', 'oxy_saturation', 'respiratory_rate')