import { Injectable } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Pin{
  id?:string;
  Name:string;
  region:string;
  imageUrl:string;
  desc:string;

}

@Injectable({
  providedIn: 'root'
})
export class PinesService {
  private collectionName="pins";
  constructor(private firestore:AngularFirestoreModule) { }

  addCar(pin:Pin): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection<Pin>(this.collectionName).doc(id).set(...pin,id)
  }
}
