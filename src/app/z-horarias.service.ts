
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZHorariasService {
  constructor(private http: HttpClient) {}

  getHora(ciudad: string) {
    const url = `https://worldtimeapi.org/api/timezone/${ciudad}`;
    return firstValueFrom(this.http.get<any>(url));
  }
}

