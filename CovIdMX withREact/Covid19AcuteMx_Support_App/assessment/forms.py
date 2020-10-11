from django import forms
from .models import InitalCheckList

Patient_Stats = [
    ('Vitals', 'vitals'),
    ('Ask About Risk Factors', 'risk factors'),
    ('Level Of Hypoxia', 'hypoxia?'),
]

class SimpleForm(forms.Form):
    new_patient_checklist = forms.MultipleChoiceField(
        required=False,
        widget=forms.CheckboxSelectMultiple,
        choices=Patient_Stats,)


class ChecklistForm(forms.ModelForm):
    class Meta:
        model = InitalCheckList
        fields = ["vitals", "hypoxia", "risks","symptoms"]
        labels = {"Take Vitals": "", "Level of Hypoxia": "", "Risk Factors": "","Any Symptoms":""}