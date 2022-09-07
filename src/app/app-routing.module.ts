import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaiaComponent } from './gaia/gaia.component';
import { HomeComponent } from './home/home.component';
import { LhumusComponent } from './lhumus/lhumus.component';
import { MamboretaComponent } from './mamboreta/mamboreta.component';
import { UkupachaComponent } from './ukupacha/ukupacha.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'gaia', component: GaiaComponent},
  {path:'lhumus', component: LhumusComponent},
  {path:'mamboreta', component: MamboretaComponent},
  {path:'ukupacha', component: UkupachaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
