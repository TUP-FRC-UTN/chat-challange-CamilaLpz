import { Component, Input } from '@angular/core';
import { usuario } from '../interfaces/usuario';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [CommonModule, FormsModule, UsuarioComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  @Input() mensaje : usuario = {nombre : ""};

historialChat : usuario[] = [];
usuarios : usuario[] = [{nombre : "Carlos"},{nombre : "María"}]

onGuardar(evento : usuario){
  this.historialChat.push(evento)
}
}
