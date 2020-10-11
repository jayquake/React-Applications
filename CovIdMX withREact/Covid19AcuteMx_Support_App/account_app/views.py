from django.views.generic import CreateView, TemplateView
from .models import User, DoctorProfile, PatientProfile, EMTProfile
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth import login
from django.shortcuts import redirect
from django.views.generic import CreateView
from .forms import DoctorRegisterForm, DoctorUpdateFrom, PatientRegisterForm, PatientProfileUpdateForm, \
    DoctorProfileUpdateForm, PatientUpdateFrom
from .models import User


class SignUpView(TemplateView):
    template_name = 'account_app/account_type.html.html'


def home(request):
    return render(request, 'home.html')


def register(request):
    return render(request, 'account_app/account_type.html')


class PatientRegisterView(CreateView):
    model = User
    form_class = PatientRegisterForm
    template_name = 'account_app/register_patient.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'patient'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('login')


class DoctorRegisterView(CreateView):
    model = User
    form_class = DoctorRegisterForm
    template_name = 'account_app/register_doctor.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'doctor'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        return redirect('login')


@login_required
def profile(request):
    # CREATING doctor PROFILE
    if request.user.is_doctor:
        user_profile, created = DoctorProfile.objects.get_or_create(user=request.user)
        if request.method == 'GET':
            user_profile, created = DoctorProfile.objects.get_or_create(user=request.user)
        if request.method == "POST":
            doctor_update_form = DoctorUpdateFrom(request.POST, instance=request.user.doctorprofile)
            doctor_profile_form = DoctorProfileUpdateForm(request.POST, request.FILES, instance=request.user.doctorprofile)
            if doctor_update_form.is_valid() or doctor_profile_form.is_valid():
                first = doctor_update_form.cleaned_data['first_name']
                last = doctor_update_form.cleaned_data['last_name']
                email = doctor_update_form.cleaned_data['email']

                request.user.first_name = first
                request.user.last_name = last
                request.user.email = email
                request.user.save()
                doctor_update_form.save()
                doctor_profile_form.save()
                messages.success(request, f'Your account has been updated!')
                return redirect('profile')
        else:
            doctor_update_form = DoctorUpdateFrom(instance=request.user.doctorprofile)
            doctor_profile_form = DoctorProfileUpdateForm(instance=request.user.doctorprofile)
        context = {
            'u_form': doctor_update_form,
            'p_form': doctor_profile_form,

        }
        return render(request, 'account_app/doctor_profile.html', context)
    # CREATING patient USERS
    elif request.user.is_patient:
        if request.method == 'GET':
            user_profile, created = PatientProfile.objects.get_or_create(user=request.user)
        if request.method == "POST":
            patient_update_form = PatientUpdateFrom(request.POST, instance=request.user.patientprofile)
            patient_profile_form = PatientProfileUpdateForm(request.POST, request.FILES, instance=request.user.patientprofile)
            if patient_update_form.is_valid() or patient_profile_form.is_valid():
                patient_update_form.save()
                patient_profile_form.save()
                messages.success(request, f'Your account has been updated!')
                return redirect('profile')
        else:
            patient_update_form = PatientUpdateFrom(instance=request.user.patientprofile)
            patient_profile_form = PatientProfileUpdateForm(instance=request.user.patientprofile)
        context = {
            'u_form': patient_update_form,
            'p_form': patient_profile_form,

        }
        return render(request, 'account_app/patient_profile.html', context)
    return




