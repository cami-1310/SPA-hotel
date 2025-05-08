






import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  formData = {
    nombre: '',
    email: '',
    nacionalidad: '',
    mensaje: ''
  };

  paises: string[] = ['México', 'Argentina', 'Colombia', 'Chile', 'Perú'];

  guardarDatos(form: any) {
    if (form.invalid) {
      form.form.markAllAsTouched(); 
      Swal.fire({
        icon: 'error',
        title: 'Formulario inválido',
        text: 'Por favor, corrige los errores antes de enviar.'
      });

      return;
    }

    let comentarios = JSON.parse(localStorage.getItem('comentarios') || '[]');
    comentarios.push(this.formData);
    localStorage.setItem('comentarios', JSON.stringify(comentarios));

    Swal.fire({
      icon: 'success',
      title: 'Comentario enviado',
      text: 'Gracias por tu mensaje'
    });

    form.resetForm();
  }
}
