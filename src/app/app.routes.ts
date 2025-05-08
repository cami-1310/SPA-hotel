import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'habs', component: HabitacionesComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
