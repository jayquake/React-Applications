from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect, render
from .forms import SimpleForm, ChecklistForm
from django.contrib.auth import login
from django.shortcuts import redirect

# Create your views here.


def index(request):

    context = {
        'form': ChecklistForm
    }
    return render(request, 'assessment/index.html', context)

def information(request):
    return render(request, 'assessment/information.html')

def patients(request):
    return render(request, 'assessment/patients.html')

def navigator(request):
    return render(request, 'assessment/navigator.html')

