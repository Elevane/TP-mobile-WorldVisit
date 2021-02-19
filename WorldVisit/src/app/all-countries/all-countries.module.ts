import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCountriesPageRoutingModule } from './all-countries-routing.module';

import { AllCountriesPage } from './all-countries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCountriesPageRoutingModule
  ],
  declarations: [AllCountriesPage]
})
export class AllCountriesPageModule {}
