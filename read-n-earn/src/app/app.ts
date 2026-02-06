import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, Login],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

}
