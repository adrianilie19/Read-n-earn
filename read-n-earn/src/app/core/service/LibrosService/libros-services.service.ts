import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Libro {
  cover_image?: string;
  title: string;
  authors: string[];
  status?: string;
  progress?: number;
  id: number;
  generos: string[];
  enlace_descarga: string;
  contenido_url: string;
  descripcion: string;
  paginas: number | string;
}

@Injectable({ providedIn: 'root' })
export class LibrosService {
  private URL = 'http://127.0.0.1:8000/api/libros/';

  constructor(private http: HttpClient) {}

  obtenerLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.URL);
  }
}