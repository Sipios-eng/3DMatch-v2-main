import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss']
})
export class ChatPage implements OnInit {
  messages: any[] = [];
  chatId: string = '';
  userId: string = 'current_user_id'; // Reemplázalo con el ID del usuario actual

  constructor(private route: ActivatedRoute, private chatService: ChatService) {}

  ngOnInit() {
    // Obtener el chatId desde la URL
    this.chatId = this.route.snapshot.paramMap.get('chatId')!;

    // Obtener los mensajes del chat en tiempo real
    this.chatService.getMessages(this.chatId).subscribe(data => {
      this.messages = data;
    });
  }

  handleSendMessage(text: string) {
    // Enviar el mensaje usando el servicio
    this.chatService.sendMessage(this.chatId, this.userId, text);
  }
}
