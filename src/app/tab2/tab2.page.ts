import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  chats: any[] = []; // Lista de chats con datos adicionales
  participant1: string = ''; // Campo para el email del Usuario 1
  participant2: string = ''; // Campo para el email del Usuario 2
  currentUserEmail: string = ''; // Email del usuario actual

  constructor(
    private chatService: ChatService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener el email del usuario actual
    this.authService.getUserObservable().subscribe((user) => {
      if (user && user.email) {
        this.currentUserEmail = user.email;

        // Cargar los chats una vez que tenemos el email del usuario actual
        this.loadChats();
      }
    });
  }

  loadChats() {
    this.chatService.getChats().subscribe((chats) => {
      console.log('Chats cargados:', chats);

      // Añadir información del participante contrario a cada chat
      this.chats = chats.map((chat) => {
        const otherParticipant = chat.participants.find(
          (participant: string) => participant !== this.currentUserEmail
        );
        return { ...chat, receiverName: otherParticipant || 'Desconocido' };
      });
    });
  }

  createChat() {
    if (this.participant1 && this.participant2) {
      const participants = [this.participant1, this.participant2];
      this.chatService.createChat(participants).then(() => {
        console.log('Chat creado');
        this.participant1 = ''; // Limpiar el campo después de crear el chat
        this.participant2 = ''; // Limpiar el campo después de crear el chat
      });
    } else {
      console.error('Por favor, completa ambos campos de email.');
    }
  }

  selectChat(chatId: string) {
    console.log('Redirigiendo al chat:', chatId);
    this.router.navigate([`/chat/${chatId}`]);
  }
}
