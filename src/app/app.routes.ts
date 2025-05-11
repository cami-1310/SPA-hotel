import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { ReservarComponent } from './reservar/reservar.component';
import { RegistroComentariosComponent } from './registro-comentarios/registro-comentarios.component';
import { RegistroReservasComponent } from './registro-reservas/registro-reservas.component';
export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent },
    {path: 'habs', component: HabitacionesComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'reservar', component: ReservarComponent},
    {path: 'registroComentarios',component: RegistroComentariosComponent},
    {path: 'registroReservas',component: RegistroReservasComponent},
    
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
