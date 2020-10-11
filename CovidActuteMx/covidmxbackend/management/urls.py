from django.urls import path
from . import views

urlpatterns = [
    path('api/assessment/', views.AssessmentListCreate.as_view()),

]