import { Component, OnInit } from '@angular/core';
import { PinesService,Pin } from 'src/app/services/pines.service';

@Component({
  selector: 'app-pines',
  templateUrl: './pines.component.html',
  styleUrls: ['./pines.component.scss'],
})
export class PinesComponent  implements OnInit {
  pin:Pin = {
    Name:"",
    region:"",
    imageUrl:"",
    desc:"",
  }

  constructor(private PinesService:PinesService) { }

  ngOnInit() {}

  addCar(){
    this.PinesService.addPin(this.pin).then(()=>{
      alert("Agregado Correctamente!")
      this.pin = {
        Name:"",
        region:"",
        imageUrl:"",
        desc:"",
      }
    }).catch(error=>{alert("error al agregar"+error)})
  }

}
