import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  chatId: string = '';
  messages: any[] = [];
  newMessage: string = '';
  userId: string = ''; // Definir la propiedad userId

  constructor(private route: ActivatedRoute, private chatService: ChatService) {}

  ngOnInit() {
    this.chatId = this.route.snapshot.paramMap.get('id')!;
    this.loadCurrentUser();
    this.loadMessages();
  }

  // Método para cargar el usuario actual
  loadCurrentUser() {
    this.chatService.getCurrentUser().subscribe((user) => {
      if (user) {
        this.userId = user.uid; // Asigna el userId del usuario autenticado
      }
    });
  }

  loadMessages() {
    this.chatService.getMessages(this.chatId).subscribe((messages) => {
      this.messages = messages;
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage(this.chatId, this.newMessage).then(() => {
        this.newMessage = '';
      });
    }
  }
}
