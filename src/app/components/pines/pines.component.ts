import { Component } from '@angular/core';
import { PinesService, Pin } from 'src/app/services/pines.service';

@Component({
  selector: 'app-pines',
  templateUrl: './pines.component.html',
  styleUrls: ['./pines.component.scss']
})
export class PinesComponent {
  pin: Pin = {
    Name: '',
    region: '',
    imageUrl: '',
    desc: ''
  };

  constructor(private pinesService: PinesService) {}

  addPin() {
    this.pinesService.addPin(this.pin)
      .then(() => {
        console.log('Pin añadido con éxito');
      })
      .catch((error) => {
        console.error('Error al añadir el pin:', error);
      });
  }
}
