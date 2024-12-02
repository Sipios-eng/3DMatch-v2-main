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
    desc: '',
    latitude: 0,
    longitude: 0
  };

constructor(private pinesService: PinesService) {}

  async addPin() {
    try {
      // Obtener la ubicación actual del usuario
      const coordinates = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      // Asignar latitud y longitud al objeto pin
      this.pin.latitude = coordinates.coords.latitude;
      this.pin.longitude = coordinates.coords.longitude;

      // Guardar el pin utilizando el servicio
      await this.pinesService.addPin(this.pin);
      console.log('Pin añadido con éxito');
    } catch (error) {
      console.error('Error al añadir el pin:', error);
    }
  }
}