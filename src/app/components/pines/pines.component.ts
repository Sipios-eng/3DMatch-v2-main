import { Component } from '@angular/core';
import { PinesService, Pin } from 'src/app/services/pines.service';
import { ToastController } from '@ionic/angular';

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

  constructor(private pinesService: PinesService, private toastController: ToastController) {}

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

      // Mostrar mensaje de éxito
      await this.presentToast('Pin añadido con éxito', 'success');

      // Cerrar el formulario al agregar la ubicación
      this.closeForm();
    } catch (error) {
      console.error('Error al añadir el pin:', error);

      // Mostrar mensaje de error
      await this.presentToast('No se pudo añadir el pin, por favor intenta nuevamente', 'danger');
    }
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top'
    });
    await toast.present();
  }

  // Método para cerrar el formulario
  closeForm() {
    const closeButton = document.querySelector('.close-button') as HTMLElement;
    if (closeButton) {
      closeButton.click();  // Simulamos un clic en el botón de cerrar
    }
  }
}
