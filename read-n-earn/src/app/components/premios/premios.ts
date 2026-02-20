import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Premio {
  id: number;
  titulo: string;
  autor: string;
  exp: number;
  disponible: boolean;
}

@Component({
  selector: 'app-premios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './premios.html',
  styleUrls: ['./premios.css']
})
export class Premios {
  premios: Premio[] = [
    {
      id: 1, titulo: 'El señor de las moscas', autor: 'William Golding', exp: 2000, disponible: true
    },
    {
      id: 2, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', exp: 1500, disponible: false
    },
    {
      id: 3, titulo: '1984', autor: 'George Orwell', exp: 1800, disponible: true
    },
    {
      id: 4, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', exp: 2500, disponible: true
    },
    {
      id: 5, titulo: 'El Quijote', autor: 'Miguel de Cervantes', exp: 1200, disponible: false
    },
    {
      id: 6, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', exp: 1600, disponible: true
    }
  ];

  canjearPremio(premio: Premio) {
    console.log('Canjeando:', premio.titulo);
  }
}
