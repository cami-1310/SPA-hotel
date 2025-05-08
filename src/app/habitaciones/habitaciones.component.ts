import { Component, ViewChild, ElementRef } from '@angular/core';
import { Habitaciones } from '../habitaciones';
import { Habitacion } from '../habitacion';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-habitaciones',
  imports: [CarouselComponent],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  habitaciones: Habitacion[]=Habitaciones;
  habitacionSeleccionada?: Habitacion;
  indiceHabitacion?: number;

  openModal(habitacion: Habitacion, index: number) {
    this.habitacionSeleccionada=habitacion;
    this.indiceHabitacion=index;

    const modal = new (window as any).bootstrap.Modal(document.getElementById('contModal')!);
    modal.show();
  }
}