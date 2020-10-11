from django.urls import include, path
from .views import index, information, patients, navigator
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', index, name='index'),
    path('info/', information, name='information'),
    path('patients/', patients, name='patients'),
    path('navigation/', navigator, name='navigation'),

]
