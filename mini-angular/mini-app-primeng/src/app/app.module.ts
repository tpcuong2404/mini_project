import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppInputPrimeNGRoutingModule } from './myComponent/input-primeng/input-primeng-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { DashboardComponent } from './myComponent/dashboard/dashboard.component';
import { HeroesComponent } from './myComponent/heroes/heroes.component';
import { HeroDetailComponent } from './myComponent/hero-detail/hero-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppInputPrimeNGRoutingModule,
    InputTextModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
