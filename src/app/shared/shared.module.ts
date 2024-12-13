import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatListComponent } from '../components/chat-list/chat-list.component';
import { MessageInputComponent } from '../components/message-input/message-input.component';

@NgModule({
  declarations: [
    ChatListComponent,
    MessageInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    ChatListComponent,
    MessageInputComponent
  ]
})
export class SharedModule {}
