import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3LoginPage } from './tab3-login.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3LoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3LoginPageRoutingModule {}
