import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

declare var google: any;  // Declarar la variable global de Google Maps

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  username: string = 'Invitado';
  userEmail: string = '';
  showForm: boolean = false;
  

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadUsername();
    this.loadMap();
    this.userEmail = localStorage.getItem('userEmail') || 'Usuario';
  }

  loadUsername() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  async loadMap() {
    // Obtener la posición actual del usuario
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);

      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude }, // Coordenadas actuales
        zoom: 16,
      });

      // Añadir marcador en la ubicación del usuario
      new google.maps.Marker({
        position: { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude },
        map: map,
        title: "Tu ubicación",
      });

    } catch (error) {
      console.error('Error obteniendo la ubicación', error);

      // En caso de error, cargar el mapa con coordenadas por defecto
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        center: { lat: -33.5138, lng: -70.5983 },  // Coordenadas iniciales (Santiago)
        zoom: 16,
      });
    }
  }
  toggleForm() {
    this.showForm = !this.showForm; // Alterna la visibilidad del formulario
  }
}
