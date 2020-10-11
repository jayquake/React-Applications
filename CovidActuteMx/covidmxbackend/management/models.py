from django.db.models import *

# Create your models here.


class InitialCheckList(Model):
    symptoms = BooleanField(default=False)
    vitals = BooleanField(default=False)
    risks = BooleanField(default=False)
    hypoxia = BooleanField(default=False)


class Assessment(Model):
    respiratory_distress = BooleanField(default=False)
    appearance = BooleanField(default=False)
    risk_factor = BooleanField(default=False)
    oxy_saturation = BooleanField(default=False)
    respiratory_rate = BooleanField(default=False)
