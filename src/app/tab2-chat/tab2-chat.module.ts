import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2ChatPageRoutingModule } from './tab2-chat-routing.module';

import { Tab2ChatPage } from './tab2-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2ChatPageRoutingModule
  ],
  declarations: [Tab2ChatPage]
})
export class Tab2ChatPageModule {}
