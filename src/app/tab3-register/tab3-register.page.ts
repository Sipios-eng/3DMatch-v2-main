import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-tab3-register',
  templateUrl: './tab3-register.page.html',
  styleUrls: ['./tab3-register.page.scss'],
})
export class Tab3RegisterPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  Registrarse() {
    this.navCtrl.back();
  }
}
