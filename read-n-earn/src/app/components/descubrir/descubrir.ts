import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
}

@Component({
  selector: 'app-descubrir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './descubrir.html',
  styleUrls: ['./descubrir.css']
})
export class DescubrirComponent {
  libros: Libro[] = [
    {
      id: 1, titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien'
    },
    {
      id: 2, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen'
    },
    {
      id: 3, titulo: 'Dune', autor: 'Frank Herbert'
    },
    {
      id: 4, titulo: 'El nombre del viento', autor: 'Patrick Rothfuss'
    },
    {
      id: 5, titulo: 'Mujercitas', autor: 'Louisa May Alcott'
    },
    {
      id: 6, titulo: 'La brújula dorada', autor: 'Philip Pullman'
    }
  ];

  agregarABiblioteca(libro: Libro) {
    console.log('Agregado a biblioteca:', libro.titulo);
  }
}
