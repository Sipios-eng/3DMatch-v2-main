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
    return this.firestore.collection('chats').valueChanges().pipe(
      map((chats: any[]) =>
        chats.map((chat) => ({
          ...chat,
          timestamp: chat.timestamp?.toDate() || new Date(), // Conversión de timestamp
        }))
      )
    );
  }

  getMessages(chatId: string): Observable<any[]> {
    return this.firestore
      .collection('messages', (ref) => ref.where('chatId', '==', chatId))
      .valueChanges()
      .pipe(
        map((messages: any[]) =>
          messages.map((message) => ({
            ...message,
            timestamp: message.timestamp?.toDate() || new Date(),
          }))
        )
      );
  }

  async sendMessage(chatId: string, text: string): Promise<void> {
    const senderId = this.authService.getCurrentUser()?.uid;

    if (!senderId) {
      throw new Error('No se puede enviar el mensaje porque el usuario no está autenticado.');
    }

    const messageData = {
      chatId,
      senderId,
      text,
      timestamp: new Date(),
    };

    return this.firestore.collection('messages').add(messageData).then(() => {
      return this.firestore.collection('chats').doc(chatId).update({
        lastMessage: text,
        timestamp: new Date(),
      });
    });
  }

  createChat(participants: string[]): Promise<any> {
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
