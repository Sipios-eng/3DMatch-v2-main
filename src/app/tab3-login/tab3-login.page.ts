import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3-login',
  templateUrl: './tab3-login.page.html',
  styleUrls: ['./tab3-login.page.scss'],
})
export class Tab3LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private toastController: ToastController) { } // Inject ToastController

  async showToast(message: string) {
    console.log('Toast is being shown: ', message); // Debug log
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'top',
    });
    await toast.present();
  }
  

  async login() {
    if (this.username && this.password) {
      localStorage.setItem('username', this.username);
      this.showToast('Logged in correctly');
      // Delay navigation slightly
      setTimeout(() => {
        this.navCtrl.navigateForward('/tabs/tab1');
      }, 1000); // Delay for 1 second
    } else {
      await this.showToast('Error, try again');
    }
  }
  

  ngOnInit() {this.showToast('Test toast on init'); // Test toast on component load
  }

  goBack() {
    this.navCtrl.back();
  }

  goToRegister() {
    this.navCtrl.navigateForward('/tab3-register');
  }
}
