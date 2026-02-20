import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosService, Libro } from '../../core/service/LibrosService/libros-services.service'

@Component({
  selector: 'app-biblioteca',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biblioteca.html',
  styleUrls: ['./biblioteca.css']
})
export class Biblioteca implements OnInit {
  libros: Libro[] = [];

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    this.librosService.obtenerLibros().subscribe(data => {
      this.libros = data;
      console.log(this.libros);
    });
  }

  agregarABiblioteca(libro: Libro) {
    console.log('Agregado a biblioteca:', libro.title);
  }
}
