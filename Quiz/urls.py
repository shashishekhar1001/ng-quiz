"""Quiz URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import include, path, re_path

from . import views


from rest_framework import routers
from quiz_test import api_views

router = routers.DefaultRouter()
router.register(r'turtles', api_views.TurtlesViewSet)

urlpatterns = [
    re_path(r'^api/', include(router.urls)),
    re_path('^$', views.test, name="test"),
    path('admin/', admin.site.urls),
    path('quiz/', include('quiz_test.urls')),
    re_path(r'^api-auth/', include('rest_framework.urls')),
]

if settings.DEBUG:
	urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
	urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
