from django.http import JsonResponse
from django.shortcuts import render
from .models import Pais, Ciudad

# Create your views here.


def index(request):
    return render(request, 'index.html')


def get_paises(_request):
    paises = list(Pais.objects.values())

    if (len(paises) > 0):
        data = {'message': "Success", 'paises': paises}
    else:
        data = {'message': "Not Found"}

    return JsonResponse(data)


def get_ciudades(_request, pais_id):
    ciudades = list(Ciudad.objects.filter(pais_id=pais_id).values())

    if (len(ciudades) > 0):
        data = {'message': "Success", 'ciudades': ciudades}
    else:
        data = {'message': "Not Found"}

    return JsonResponse(data)
