import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3ContrasenaPageRoutingModule } from './tab3-contrasena-routing.module';

import { Tab3ContrasenaPage } from './tab3-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3ContrasenaPageRoutingModule
  ],
  declarations: [Tab3ContrasenaPage]
})
export class Tab3ContrasenaPageModule {}
