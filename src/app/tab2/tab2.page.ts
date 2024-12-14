import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  chats: any[] = [];
  participant1: string = '';
  participant2: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.loadChats();
  }

  loadChats() {
    this.chatService.getChats().subscribe((chats) => {
      this.chats = chats;
      console.log('Chats cargados:', chats);
    });
  }

  createChat() {
    if (this.participant1 && this.participant2) {
      this.chatService.createChat([this.participant1, this.participant2]).then(() => {
        console.log('Chat creado');
        this.participant1 = '';
        this.participant2 = '';
      });
    }
  }

  selectChat(chatId: string) {
    // Redirigir al chat seleccionado
    console.log('Redirigiendo al chat:', chatId);
  }
}
