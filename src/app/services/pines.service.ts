import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Pin{
  id?:string;
  Name:string;
  region:string;
  imageUrl:string;
  desc:string;
  latitude: number;
  longitude: number;

}

@Injectable({
  providedIn: 'root'
})
export class PinesService {
  private collectionName="pins";
  constructor(private firestore:AngularFirestore) { }

  addPin(pin:Pin): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection<Pin>(this.collectionName).doc(id).set({...pin,id}) //si no funciona elim <pin>
  }

  getPin():Observable<Pin[]>{
    return this.firestore.collection<Pin>(this.collectionName).valueChanges();
  }
}
