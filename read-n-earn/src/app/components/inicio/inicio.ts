import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio {

  @Output() onLogout = new EventEmitter<void>();

  logout() {
    this.onLogout.emit();
  }
}
