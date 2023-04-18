import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MascotaComponent } from './mascota/mascota.component';
import { ClienteComponent } from './cliente/cliente.component';
import { TipoidComponent } from './tipoid/tipoid.component';
import { EspecieComponent } from './especie/especie.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'mascota',
  component: MascotaComponent
}, {
  path: 'especie',
  component: EspecieComponent
}, {
  path: 'tipoid',
  component: TipoidComponent
}, {
  path: 'cliente',
  component: ClienteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
