from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('resume-download/', views.download_resume),
    path('projects/', views.project_list, name='project_list'),
   
]
