from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('saltyspec/index.html')
    return HttpResponse(template.render())
def documentation(request):
    template = loader.get_template('saltyspec/documentation.html')
    return HttpResponse(template.render())