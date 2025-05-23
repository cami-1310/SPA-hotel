import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { ReservarComponent } from './reservar/reservar.component';
import { RegistroComentariosComponent } from './registro-comentarios/registro-comentarios.component';
import { RegistroReservasComponent } from './registro-reservas/registro-reservas.component';
import { DevsComponent } from './devs/devs.component';
import { DevComponent } from './dev/dev.component';
import { VistaAPIComponent } from './vista-api/vista-api.component';
import { DestinosComponent } from './destinos/destinos.component';
import { SwitchLocalComponent } from './switch-local/switch-local.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent },
    {path: 'habs', component: HabitacionesComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'reservar', component: ReservarComponent},
    {path: 'registroComentarios',component: RegistroComentariosComponent},
    {path: 'registroReservas',component: RegistroReservasComponent},
    {path: 'sobreSitio', component: DevsComponent},
    {path: 'dev/:id', component: DevComponent},
    {path: 'destinos', component: DestinosComponent},
    {path: 'switch',component:SwitchLocalComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];