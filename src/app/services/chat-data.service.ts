import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatDataService {
  constructor(private firestore: AngularFirestore) {}

  getMessages(chatId: string): Observable<any[]> {
    return this.firestore.collection('messages', ref => ref.where('chatId', '==', chatId)).valueChanges();
  }

  sendMessage(chatId: string, senderId: string, text: string): Promise<void> {
    return this.firestore.collection('messages').add({
      chatId,
      senderId,
      text,
      timestamp: new Date(),
    }).then(() => {}); // Garantizar que devuelva Promise<void>
  }
}
