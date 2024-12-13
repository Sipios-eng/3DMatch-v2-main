import { Injectable, Inject, forwardRef } from '@angular/core';
import { Firestore, collection, addDoc, query, where, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private currentUser: User | null = null;

  constructor(
    private firestore: Firestore,
    @Inject(forwardRef(() => AuthService)) private authService: AuthService // Inyección diferida
  ) {
    // Suscribirse al estado del usuario desde AuthService
    this.authService.getUserObservable().subscribe(user => {
      this.currentUser = user;
    });
  }

  // Crear un nuevo chat
  async createChat(user1Id: string, user2Id: string, user1Name: string, user2Name: string): Promise<void> {
    const chatsCollection = collection(this.firestore, 'chats');
    await addDoc(chatsCollection, {
      users: {
        [user1Id]: { name: user1Name },
        [user2Id]: { name: user2Name }
      },
      lastMessage: '',
      timestamp: new Date().toISOString()
    });
  }

  // Obtener mensajes de un chat
  getMessages(chatId: string): Observable<any[]> {
    const messagesCollection = collection(this.firestore, 'messages');
    const q = query(messagesCollection, where('chatId', '==', chatId));
    return collectionData(q, { idField: 'id' });
  }

  // Enviar un mensaje
  async sendMessage(chatId: string, senderId: string, text: string): Promise<void> {
    const messagesCollection = collection(this.firestore, 'messages');
    await addDoc(messagesCollection, {
      chatId,
      senderId,
      text,
      timestamp: new Date().toISOString()
    });
  }
}
