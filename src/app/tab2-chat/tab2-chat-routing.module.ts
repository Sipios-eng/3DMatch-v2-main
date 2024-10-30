import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2ChatPage } from './tab2-chat.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2ChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2ChatPageRoutingModule {}
