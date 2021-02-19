import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCountriesPage } from './all-countries.page';

const routes: Routes = [
  {
    path: '',
    component: AllCountriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCountriesPageRoutingModule {}
