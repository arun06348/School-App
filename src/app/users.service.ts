import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private angularfire:AngularFirestore) { }
  getusers(){
    return this.angularfire.collection('users').snapshotChanges()
  }
}
