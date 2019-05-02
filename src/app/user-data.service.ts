import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private db: AngularFirestore) { }

  getUserData() {
      return this.db.collection("userList").valueChanges();
  }

  addUserData(data) {
    return this.db.collection('userList').doc(data.id).set(data);
  }

  updateUserData(data) {
    return this.db.collection('userList').doc(data.id).ref.set(data, {merge:true});
  }

  deleteUserData(data){
    return this.db.collection('userList').doc(data).delete();
  } 
}
