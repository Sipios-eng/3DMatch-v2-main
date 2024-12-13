import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(private afAuth: AngularFireAuth) {
    // Escuchar cambios en el estado del usuario
    this.afAuth.authState.subscribe(user => {
      this.userSubject.next(user as User | null);
    });
  }

  // Iniciar sesión con correo y contraseña
  async login(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }

  // Registrarse con correo y contraseña
  async register(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error en register:', error);
      throw error;
    }
  }

  // Cerrar sesión
  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.error('Error en logout:', error);
      throw error;
    }
  }

  // Obtener el estado del usuario autenticado como observable
  getUserObservable(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  // Obtener el usuario actual (instantáneo, no observable)
  getCurrentUser(): User | null {
    return this.userSubject.value;
  }
}
