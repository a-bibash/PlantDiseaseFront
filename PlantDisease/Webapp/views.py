from urllib import response
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import *
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache

# Create your views here.



def register(request):
    if request.method == "POST":
        data = request.POST
        first_name = data.get("first_name")
        last_name = data.get("last_name")
        username = data.get("username")
        password = data.get("password")

        user = User.objects.filter(username=username)
        if user.exists():
            messages.info(request, "Username already exists!")
            return redirect("/register")

        else:
            user = User.objects.create_user(
                first_name=first_name,
                last_name=last_name,
                username=username,
                password=password,
            )
        user.save()
        messages.success(request, "Account registerd successfully!")
        return redirect("login")

    return render(request, "register.html")


def login_page(request):
    if request.method == "POST":
        data = request.POST
        username = data.get("username")
        password = data.get("password")

        user = authenticate(username=username,password=password)

        if user is not None:
            login(request, user)
            return redirect('/app')
        else:
            messages.error(request, "Invalid credentials!")
            return redirect('login')

    return render(request, "login.html")


@never_cache
def logout_page(request):
    logout(request)
    return redirect('/')



@login_required(login_url='/')
def app(request):
    return render(request, "app.html")





