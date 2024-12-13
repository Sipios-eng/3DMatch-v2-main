import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {
  @Input() chats: any[] = [];
  @Output() chatSelected = new EventEmitter<string>(); // Declarar el evento

  selectChat(chatId: string) {
    this.chatSelected.emit(chatId); // Emitir el evento con el ID del chat
  }
}
