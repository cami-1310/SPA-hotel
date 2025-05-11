import { Component } from '@angular/core';
import { BarraBusquedaComponent } from '../barra-busqueda/barra-busqueda.component';
import { DestinosService,Destino } from '../destinos.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-vista-api',
  standalone:true,
  imports: [BarraBusquedaComponent],
  templateUrl: './vista-api.component.html',
  styleUrl: './vista-api.component.css'
})
export class VistaAPIComponent implements OnInit {
  destinos: Destino[] = [];

  constructor(private destinosService: DestinosService) {}

  ngOnInit(): void {
    this.destinosService.obtenerDestinos().subscribe(data => {
      this.destinos = data;
    });
  }
}
