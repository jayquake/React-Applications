from django import forms
from django.db import transaction
from .models import User, Subject, DoctorProfile, PatientProfile, EMTProfile
from django.contrib.auth.forms import UserCreationForm
from . import models


class PatientRegisterForm(UserCreationForm):
    interests = forms.ModelMultipleChoiceField(
        queryset=Subject.objects.all(),
        widget=forms.CheckboxSelectMultiple,
        required=False
    )

    class Meta(UserCreationForm.Meta):
        model = User

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_patient = True
        user.save()
        patient = PatientProfile.objects.create(user=user)
        patient.interests.add(*self.cleaned_data.get('interests'))
        return user


class DoctorRegisterForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User

    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_doctor = True
        if commit:
            user.save()
        return user


class PatientUpdateFrom(forms.ModelForm):
    class Meta:
        model = User
        fields = ['username', 'email']


class PatientProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = PatientProfile
        fields = ['image']


class DoctorUpdateFrom(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']


class DoctorProfileUpdateForm(forms.ModelForm):
    class Meta:
        model = models.DoctorProfile
        email = forms.EmailField()
        first_name = forms.CharField(max_length=50)
        last_name = forms.CharField(max_length=50)
        about_me = forms.Textarea()
        resume = forms.FileInput
        job_title = forms.ChoiceField
        fields = ['image', 'about_me', 'resume']






# class patientRegisterForm(UserCreationForm):
#     USER_SCHOOL_CHOICES = ((1, 'High School'),
#                            (2, 'Some College'),
#                            (3, 'Associates Degree'),
#                            (4, 'Bachelors Degree'),
#                            (5, 'Masters Degree'),
#                            (6, 'Other'),
#                            )
#     email = forms.EmailField()
#     first_name = forms.CharField(max_length=50)
#     last_name = forms.CharField(max_length=50)
#     academics = forms.Select(choices=USER_SCHOOL_CHOICES)
#
#     class Meta:
#         model = User
#         fields = ['first_name', 'last_name', 'username', 'email', 'password1', 'password2']
#
#
# class DoctorRegisterForm(UserCreationForm):
#     USER_Grade_Taught_CHOICES = ((1, 'Kindergarten'),
#                            (2, 'first grade '),
#                            (3, 'second grade '),
#                            (4, 'third grade'),
#                            (5, 'Fourth Grade'),
#                            (6, 'Fifth Grade'),
#                            (7, 'Sixth Grade'),
#                            (8, 'Seventh Grade'),
#                            (9, 'Eighth Grade'),
#                            (10, 'Ninth Grade'),
#                            (11, ' Grade'),
#                            )
#     email = forms.EmailField()
#     first_name = forms.CharField(max_length=50)
#     last_name = forms.CharField(max_length=50)
#     highest_education_level = forms.Select()
#     grade_taught = forms.SelectMultiple(USER_Grade_Taught_CHOICES)
#
#     class Meta:
#         model = User
#         form_class = DoctorRegisterForm
#         template_name = 'registration/signup_form.html'
#         fields = ['first_name', 'last_name', 'username', 'email', 'password1', 'password2',]
#
#
#     def get_context_data(self, **kwargs):
#         kwargs['user_type'] = 'Doctor'
#         return super().get_context_data(**kwargs)

#

#
#
#
#
    #
    # email = forms.EmailField()
    # first_name = forms.CharField(max_length=50)
    # last_name = forms.CharField(max_length=50)
    # about_me = forms.Textarea(max_length=150)
    # resume = forms.FileInput
    # job_title = forms.ChoiceField
    # languages = forms.LanguageField(max_length=8, blank=True)
    # region = forms.RegionField(blank=True)