import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-comentarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registro-comentarios.component.html',
  styleUrls: ['./registro-comentarios.component.css']
})
export class RegistroComentariosComponent {
  comentarios: {
    nombre: string;
    email: string;
    nacionalidad: string;
    mensaje: string;
  }[] = [];

  constructor() {
    const datos = localStorage.getItem('comentarios');
    if (datos) {
      try {
        this.comentarios = JSON.parse(datos);
      } catch (e) {
        console.error('Error leyendo localStorage', e);
        this.comentarios = [];
      }
    }
  }
}
