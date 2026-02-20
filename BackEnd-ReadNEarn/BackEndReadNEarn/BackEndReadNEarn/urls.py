from django.contrib import admin
from django.urls import path, include
from libros.views.mostrarLibros_views import BooksListView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/libros/', BooksListView.as_view()),
]