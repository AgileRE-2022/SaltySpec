# https://www.pythonstacks.com/blog/post/create-single-page-application/
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("documentation", views.documentation, name='documentation'),
]