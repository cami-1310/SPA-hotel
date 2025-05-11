import { Component } from '@angular/core';
import { BarraBusquedaComponent } from '../barra-busqueda/barra-busqueda.component';
import { ZonasHorariasComponent } from '../zonas-horarias/zonas-horarias.component';

@Component({
  selector: 'app-padre-busqueda',
  imports: [BarraBusquedaComponent, ZonasHorariasComponent],
  templateUrl: './padre-busqueda.component.html',
  styleUrl: './padre-busqueda.component.css'
})
export class PadreBusquedaComponent {
  terminoBusqueda: string='';

  recibirBusqueda(termino: string){
    this.terminoBusqueda=termino;
  }
}
