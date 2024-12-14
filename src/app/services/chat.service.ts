import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  getCurrentUser(): Observable<any> {
    return this.authService.getUserObservable();
  }

  getChats(): Observable<any[]> {
    return this.firestore
      .collection('chats')
      .valueChanges()
      .pipe(
        map((chats: any[]) => {
          // Agregar lógica para mostrar al usuario contrario
          return chats.map((chat) => {
            const currentUserEmail = this.authService.getCurrentUser()?.email;
            const otherParticipant = chat.participants.find(
              (email: string) => email !== currentUserEmail
            );
            return { ...chat, receiverName: otherParticipant };
          });
        })
      );
  }

  getMessages(chatId: string): Observable<any[]> {
    return this.firestore
      .collection('messages', (ref) => ref.where('chatId', '==', chatId))
      .valueChanges();
  }

  async sendMessage(chatId: string, text: string): Promise<void> {
    const senderId = this.authService.getCurrentUser()?.uid;
    if (!senderId) {
      throw new Error('Usuario no autenticado.');
    }

    const messageData = {
      chatId,
      senderId,
      text,
      timestamp: new Date(),
    };

    // Agregar mensaje a la colección 'messages' y actualizar último mensaje en 'chats'
    await this.firestore.collection('messages').add(messageData);
    await this.firestore.collection('chats').doc(chatId).update({
      lastMessage: text,
      timestamp: new Date(),
    });
  }

  createChat(participants: string[]): Promise<void> {
    const chatId = this.firestore.createId();
    const chatData = {
      id: chatId,
      participants,
      lastMessage: '¡Inicia una conversación!',
      timestamp: new Date(),
    };

    return this.firestore.collection('chats').doc(chatId).set(chatData);
  }
}
