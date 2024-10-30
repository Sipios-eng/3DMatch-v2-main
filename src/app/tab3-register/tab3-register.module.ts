import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3RegisterPageRoutingModule } from './tab3-register-routing.module';

import { Tab3RegisterPage } from './tab3-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3RegisterPageRoutingModule
  ],
  declarations: [Tab3RegisterPage]
})
export class Tab3RegisterPageModule {}
