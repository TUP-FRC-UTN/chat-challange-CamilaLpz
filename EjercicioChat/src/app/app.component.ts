import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaComponent } from './sala/sala.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaComponent, UsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjercicioChat';

}
