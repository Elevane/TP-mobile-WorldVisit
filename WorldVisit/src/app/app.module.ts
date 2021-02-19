import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AllCountriesPage } from './all-countries/all-countries.page';

import { FormsModule } from '@angular/forms';
import { NewPage } from './new/new.page';
import { HomePage } from './home/home.page';
@NgModule({
  declarations: [AppComponent, AllCountriesPage],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule,
  
    RouterModule.forRoot([
      { path: 'all', component: AllCountriesPage },
      {path: 'new' , component: NewPage},
      {path : 'home', component: HomePage}
    ])
  
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
