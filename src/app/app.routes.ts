import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'habs', component: HabitacionesComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
