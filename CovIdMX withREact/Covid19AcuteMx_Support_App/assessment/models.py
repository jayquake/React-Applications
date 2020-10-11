from django.db.models import *

# Create your models here.


class InitalCheckList(Model):
    vitals = BooleanField(default=False)
    symptoms = BooleanField(default=False)
    hypoxia = BooleanField(default=False)
    risks = BooleanField(default=False)
