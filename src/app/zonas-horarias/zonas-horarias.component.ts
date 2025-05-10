import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-zonas-horarias',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './zonas-horarias.component.html',
  styleUrls: ['./zonas-horarias.component.css']
})
export class ZonasHorariasComponent implements OnInit {
  horas: { ciudad: string; hora: string }[] = [];

  ciudades = [
    { nombre: 'Zürich', zona: 'Europe/Zurich' },
    { nombre: 'Geneva', zona: 'Europe/Zurich' },
    { nombre: 'Basel', zona: 'Europe/Zurich' },
    { nombre: 'Bern', zona: 'Europe/Zurich' },
    { nombre: 'Lausanne', zona: 'Europe/Zurich' },
    { nombre: 'Lucerne', zona: 'Europe/Zurich' },
    { nombre: 'St. Gallen', zona: 'Europe/Zurich' },
    { nombre: 'Lugano', zona: 'Europe/Zurich' },
    { nombre: 'Biel/Bienne', zona: 'Europe/Zurich' },
    { nombre: 'Thun', zona: 'Europe/Zurich' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.actualizarHoras();
  }

  actualizarHoras() {
    this.horas = [];
    this.ciudades.forEach(ciudad => {
      this.http.get<any>(`https://worldtimeapi.org/api/timezone/${ciudad.zona}`)
        .subscribe(data => {
          const hora = new Date(data.datetime).toLocaleTimeString();
          this.horas.push({ ciudad: ciudad.nombre, hora });
        });
    });
  }
}
