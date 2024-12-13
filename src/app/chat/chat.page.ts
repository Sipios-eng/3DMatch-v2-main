import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: any[] = [];
  chatId: string = '';
  userId: string = ''; // Agregamos la propiedad userId
  currentUser: any;

  constructor(private route: ActivatedRoute, private chatService: ChatService) {}

  ngOnInit() {
    this.chatId = this.route.snapshot.paramMap.get('chatId')!;

    // Obtener mensajes del chat
    this.chatService.getMessages(this.chatId).subscribe((messages: any[]) => {
      this.messages = messages;
    });

    // Obtener el usuario actual
    this.chatService.getCurrentUser().subscribe((user: any) => {
      this.currentUser = user;
      this.userId = user?.uid || ''; // Asignar userId desde el usuario actual
    });
  }

  // Método para manejar el envío de mensajes
  handleSendMessage(text: string) {
    if (!text.trim()) return; // Validar que el texto no esté vacío
    this.chatService.sendMessage(this.chatId, text).then(() => {
      console.log('Mensaje enviado');
    }).catch((error) => {
      console.error('Error al enviar mensaje:', error);
    });
  }
}
