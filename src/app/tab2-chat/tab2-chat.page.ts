import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab2-chat',
  templateUrl: './tab2-chat.page.html',
  styleUrls: ['./tab2-chat.page.scss'],
})
export class Tab2ChatPage implements OnInit {

  constructor(private navCtrl: NavController,private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.animateMessages();
  }

  goBack() {
    this.navCtrl.back();
  }

  animateMessages() {
    const messageElements = document.querySelectorAll('.message');
    
    if (messageElements.length > 0) {  // Verificar que haya mensajes
      messageElements.forEach((element, index) => {
        const messageAnimation = this.animationCtrl.create()
          .addElement(element)
          .duration(1000)
          .delay(index * 200)
          .fromTo('transform', 'translateY(100%)', 'translateY(0)')
          .fromTo('opacity', '0', '1');
        
        messageAnimation.play();
      });
    }
  }
}
