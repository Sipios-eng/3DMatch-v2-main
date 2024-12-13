import { Injectable } from '@angular/core';
import { ChatDataService } from './chat-data.service';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    private chatDataService: ChatDataService,
    private authService: AuthService
  ) {}

  getCurrentUser(): Observable<any> {
    return this.authService.getUserObservable();
  }

  async sendMessage(chatId: string, text: string): Promise<void> {
    const senderId = this.authService.getCurrentUser()?.uid;

    if (!senderId) {
      throw new Error('No se puede enviar el mensaje porque el usuario no está autenticado.');
    }

    return this.chatDataService.sendMessage(chatId, senderId, text);
  }

  getMessages(chatId: string): Observable<any[]> {
    return this.chatDataService.getMessages(chatId);
  }
}
