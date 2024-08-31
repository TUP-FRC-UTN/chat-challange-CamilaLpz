import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input() nombreUsuario : string = "";

  @Output() mensaje = new EventEmitter<usuario>();

  msj : string = "";
  user : usuario = {nombre : ""}
  permitido : boolean = true;

  completarUsuario(){
    return this.user = {nombre : this.nombreUsuario, mensaje : this.msj, fechaHora : new Date()}
  }

  limpiar(){
    this.msj = "";
  }

  enviarMsj(){
    this.mensaje.emit(this.completarUsuario())
    this.limpiar();
  }

  comprobarMensaje(){
    if(this.msj != ""){
      this.permitido = true;
      this.enviarMsj();
    }
    else{
      this.permitido = false;
    }
  }
}
