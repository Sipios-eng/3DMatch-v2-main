import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3EnlistarPage } from './tab3-enlistar.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3EnlistarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3EnlistarPageRoutingModule {}
