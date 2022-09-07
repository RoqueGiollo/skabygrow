import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GaiaComponent } from './gaia/gaia.component';
import { LhumusComponent } from './lhumus/lhumus.component';
import { MamboretaComponent } from './mamboreta/mamboreta.component';
import { UkupachaComponent } from './ukupacha/ukupacha.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GaiaComponent,
    LhumusComponent,
    MamboretaComponent,
    UkupachaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
