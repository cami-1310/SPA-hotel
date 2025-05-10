import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservar',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './reservar.component.html',
  styleUrl: './reservar.component.css'
})
export class ReservarComponent {
  form: FormGroup;
  datos=JSON.parse(localStorage.getItem('datosReserva') || '[]');
  tiposHabitacion = ['Cabaña sencilla', 'Cabaña doble', 'Cabaña triple', 'Cabaña familiar'];

  constructor(private fb: FormBuilder){
    this.form=this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern("^[A-Za-zÁÉÍÓÚÑáéíóúñ]+(?: [A-Za-zÁÉÍÓÚÑáéíóúñ]+)*$")]],
      fechaIngreso: ['', [Validators.required, this.fechaNoPasada]],
      fechaSalida: ['', [Validators.required, this.fechaNoPasada]],
      tipoHab: ['', Validators.required],
      numPersonas: ['', [Validators.required, Validators.min(1), Validators.max(8)]]
    }, { validators: this.fechasCoherentes });
  }

  fechaNoPasada(control: AbstractControl): Validators | null {
    const valor = control.value;
    if (!valor) return null;

    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    const fechaIngresada = new Date(valor);

    return fechaIngresada < hoy ? { fechaPasada: true } : null;
  }

  fechasCoherentes(formGroup: AbstractControl): { [key: string]: any } | null {
    const ingreso = formGroup.get('fechaIngreso')?.value;
    const salida = formGroup.get('fechaSalida')?.value;

    if (!ingreso || !salida) return null;

    const fechaIngreso = new Date(ingreso);
    const fechaSalida = new Date(salida);

    return fechaSalida <= fechaIngreso ? { fechasInvalidas: true } : null;
  }

  enviarFormulario() {
    if (this.form.valid) {
      const datosForm = this.form.value;
      this.datos.push(datosForm);
      localStorage.setItem('datosReserva', JSON.stringify(this.datos)); 
      this.form.reset();

      Swal.fire({
        title: "Formulario enviado!",
        text: "Datos guardados con exito",
        icon: "success"
      });

    } else {
      this.form.markAllAsTouched();
    }
  }
}