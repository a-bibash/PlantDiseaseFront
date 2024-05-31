
from django.urls import path, include
from . import views
urlpatterns = [
    
    path('' , views.login_page, name='login'),
    path('register/' , views.register, name='register'),
    path('app/', views.app, name='app'),
    path('logout/', views.logout_page, name='logout'),
    ]