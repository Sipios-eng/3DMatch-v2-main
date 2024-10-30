import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

import { IonicModule } from '@ionic/angular';

import { Tab3EnlistarPageRoutingModule } from './tab3-enlistar-routing.module';

import { Tab3EnlistarPage } from './tab3-enlistar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Tab3EnlistarPageRoutingModule
  ],
  declarations: [Tab3EnlistarPage]
})
export class Tab3EnlistarPageModule {}
