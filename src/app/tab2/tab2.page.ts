import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private navCtrl: NavController,private animationCtrl: AnimationController) {}


  ionViewWillEnter() {
    this.animateMessages();

  }

  animateMessages() {
    const itemElements = document.querySelectorAll('ion-item');
    
    if (itemElements.length > 0) {  // Verificar que haya mensajes
      itemElements.forEach((element, index) => {
        const itemAnimation = this.animationCtrl.create()
          .addElement(element)
          .duration(1000)
          .delay(index * 200)
          .fromTo('transform', 'translateY(100%)', 'translateY(0)')
          .fromTo('opacity', '0', '1');
        
        itemAnimation.play();
      });
    }
  }

}
