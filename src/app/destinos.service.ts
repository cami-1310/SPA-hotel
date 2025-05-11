import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Destino {
  nombre: string;
  descripcion: string;
  actividades: string[];
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class DestinosService {
  private apiUrl = 'https://destinosuizza.free.beeceptor.com/todos';

  constructor(private http: HttpClient) {}

  obtenerDestinos(): Observable<Destino[]> {
    return this.http.get<Destino[]>(this.apiUrl);
  }
}
