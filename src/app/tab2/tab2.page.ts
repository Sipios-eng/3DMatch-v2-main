import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  chats: any[] = [];
  currentUser: any;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    // Prueba manual de datos
    this.chats = [
      { id: '1', receiverName: 'Usuario 1', lastMessage: 'Hola', timestamp: new Date().toISOString() },
      { id: '2', receiverName: 'Usuario 2', lastMessage: '¿Qué tal?', timestamp: new Date().toISOString() },
    ];
    console.log('Chats iniciales:', this.chats);

    // Obtener usuario actual
    this.chatService.getCurrentUser().subscribe((user: any) => {
      this.currentUser = user;
      console.log('Usuario actual:', this.currentUser);
    });
  }
}
