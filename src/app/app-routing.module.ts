import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcasComponent } from './marcas/marcas.component';
import { HomeComponent } from './home/home.component';
import { TiendaComponent } from './tienda/tienda.component';
import { PremiosComponent } from './premios/premios.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'marcas', component: MarcasComponent},
  {path:'tienda', component: TiendaComponent},
  {path:'premios', component: PremiosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
