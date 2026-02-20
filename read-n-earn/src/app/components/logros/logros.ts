import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Logro {
  id: number;
  titulo: string;
  descripcion: string;
  exp: number;
  completado: boolean;
}

@Component({
  selector: 'app-logros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logros.html',
  styleUrls: ['./logros.css']
})
export class Logros {

  logros: Logro[] = [
    { id: 1, titulo: 'Lee 10 minutos', descripcion: 'Lee durante 10 minutos seguidos', exp: 20, completado: true },
    { id: 2, titulo: 'Lee 2 libros', descripcion: 'Completa la lectura de 2 libros', exp: 200, completado: false },
    { id: 3, titulo: 'Inicia sesión 7 días', descripcion: 'Inicia sesión durante 7 días consecutivos', exp: 50, completado: false },
    { id: 4, titulo: 'Supera en % de lectura a un amigo', descripcion: 'Lee más que uno de tus amigos en porcentaje de progreso', exp: 100, completado: false }
  ];

  mostrarCompletados: boolean = false;

  toggleCompletados(): void {
    this.mostrarCompletados = !this.mostrarCompletados;
  }

  get logrosFiltrados(): Logro[] {
    if (this.mostrarCompletados) {
      return this.logros;
    } else {
      return this.logros.filter(l => !l.completado);
    }
  }
}