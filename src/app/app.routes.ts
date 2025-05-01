import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ServiciosComponent } from './servicios/servicios.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'servicios', component: ServiciosComponent },
    
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
