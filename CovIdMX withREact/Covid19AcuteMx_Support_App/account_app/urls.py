from django.urls import include, path
from .views import PatientRegisterView, DoctorRegisterView, SignUpView, home, register,profile
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('profile/', profile, name='profile'),
    path('register/', register, name='register'),
    path('accounts/signup/', SignUpView.as_view(), name='signup'),
    path('accounts/signup/patient/', PatientRegisterView.as_view(), name='register_patient'),
    path('accounts/signup/doctor/', DoctorRegisterView.as_view(), name='register_doctor'),
    path('login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(template_name='registration/logout.html'), name='logout'),
]

