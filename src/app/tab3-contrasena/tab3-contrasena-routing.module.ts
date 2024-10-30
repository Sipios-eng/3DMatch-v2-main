import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3ContrasenaPage } from './tab3-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3ContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3ContrasenaPageRoutingModule {}
