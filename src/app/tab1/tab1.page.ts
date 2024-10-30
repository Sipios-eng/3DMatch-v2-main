import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


declare var google: any;  // Declarar la variable global de Google Maps

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  username: string = 'Invitado';
  userEmail: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {this.loadMap();
    this.userEmail = localStorage.getItem('userEmail') || 'Usuario';
  }
  loadUsername() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }
  

  loadMap() {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -33.5138, lng: -70.5983 },  // Coordenadas iniciales
      zoom: 16,
    });

    // Puedes agregar más configuraciones aquí
  }
}