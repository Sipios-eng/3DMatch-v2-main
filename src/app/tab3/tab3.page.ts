import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userEmail: string = '';

  constructor(private navCtrl: NavController) {}

  ionViewWillEnter() {
    
    this.loadUsername(); 
    
  }
  loadUsername() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.userEmail = storedUsername;
    }
  }

  IrALogin() {
    this.navCtrl.navigateForward('/tab3-login'); // Navega a la página de login
  }
  IrAEnlistar() {
    this.navCtrl.navigateForward('/tab3-enlistar'); // Navega a la página de login
  }
  CambiarContra() {
    this.navCtrl.navigateForward('/tab3-contrasena');
  }


ngOnInit() {
  this.userEmail = localStorage.getItem('userEmail') || 'Usuario';
}
}
