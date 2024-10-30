import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular'; // Import ToastController

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router,
    private navCtrl: NavController,
    private toastController: ToastController // Inject ToastController
  ) {}

  // Method to show toast messages
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
    });
    await toast.present();
  }

  // Method to log in
  async onLogin() {
    try {
      await this.authService.login(this.email, this.password);
      console.log('Login exitoso');
      localStorage.setItem('userEmail', this.email); // Save the email in localStorage
      await this.showToast('Logged in successfully'); // Show toast
      this.navCtrl.navigateRoot('/tabs/tab1');
    } catch (error) {
      console.error('Error en onLogin: ', error);
      await this.showToast('Login failed, please try again'); // Show toast on error
    }
  }

  // Method to register
  async onRegister() {
    try {
      await this.authService.register(this.email, this.password);
      await this.showToast('Registration successful'); // Show toast
    } catch (error) {
      console.error('Problemas al registrar el usuario: ', error);
      await this.showToast('Registration failed, please try again'); // Show toast on error
    }
  }

  ngOnInit() {}
}
