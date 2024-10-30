import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3-contrasena',
  templateUrl: './tab3-contrasena.page.html',
  styleUrls: ['./tab3-contrasena.page.scss'],
})
export class Tab3ContrasenaPage implements OnInit {
  username: string = 'Invitado';
  constructor(private navCtrl: NavController,private route: ActivatedRoute) { }

  ngOnInit() {}
  ionViewWillEnter() {
    
    this.loadUsername(); 
    
  }
  loadUsername() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }
  goBack() {
    this.navCtrl.back();
  }
}
