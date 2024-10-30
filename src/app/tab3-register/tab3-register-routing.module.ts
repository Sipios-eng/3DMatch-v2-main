import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3RegisterPage } from './tab3-register.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3RegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3RegisterPageRoutingModule {}
