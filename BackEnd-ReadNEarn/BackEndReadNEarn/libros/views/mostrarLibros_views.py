import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class BooksListView(APIView):
    def get(self, request):
        search = request.query_params.get("search", "")
        page = request.query_params.get("page", "1")

        url = f"https://gutendex.com/books/?search={search}&page={page}"

        try:
            response = requests.get(url, timeout=30)
            if response.status_code == 200:
                data = response.json().get("results", [])
                books = [
                    {
                        "title": b.get("title"),
                        "authors": [a["name"] for a in b.get("authors", [])],
                        "genres": b.get("subjects", []),
                        "cover_image": b.get("formats", {}).get("image/jpeg"),
                        "download_link": b.get("formats", {}).get("text/html"),
                        "content_url": b.get("formats", {}).get("text/plain; charset=utf-8")
                                       or b.get("formats", {}).get("text/plain"),
                        "description": f"Libro del Proyecto Gutenberg con ID {b.get('id')}.",
                        "pages": b.get("download_count", "N/A")
                    }
                    for b in data
                ]
                return Response(books, status=status.HTTP_200_OK)
            return Response({"error": "Error al consultar Gutendex"}, status=response.status_code)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)