import { Component, OnInit, NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder, ControlValueAccessor } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { UserDataService } from '../user-data.service'
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  providers: [UserDataService]
})
export class UserDataComponent implements OnInit {
  items: any;
  allUserData: any;
  allUserDataRes: any;
  addNewUser: any;
  submitted: any;
  ageReceived: any;
  setAge: any;
  private updateSource = new BehaviorSubject<any>(0); // Store Update Info
  data = this.updateSource.asObservable();
  constructor(private db: AngularFirestore, private userService: UserDataService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.allUserData = this.userService.getUserData().subscribe(resData => {
      this.allUserDataRes = resData;
    });

    this.addNewUser = this.fb.group({                   // FormBuilder Config
      userName: ['', [<any>Validators.required]],
      userAge: ['', []],
      userOccupation: ['', [<any>Validators.required]]
    });

  }
  getAge(age) {
    this.ageReceived = age;
  }
  addNewBtn() {                                               // reseting form fields
    this.updateSource.next(0);
    this.addNewUser.controls['userName'].setValue('');
    this.setAge = 0;
    this.addNewUser.controls['userOccupation'].setValue('');
  }
  addNewData(data, valid) {

    if (this.updateSource.value.update == true) { // Update Data
      if (valid == true) {
        data.userAge = this.ageReceived;
        data.id = this.updateSource.value.id;
        this.userService.updateUserData(data);    // Update User data HTTP Request Call
      }
    } else {                                       // Add New Data
      data.id = Date.now().toString();
      data.update = false;
      data.userAge = this.ageReceived;
      this.submitted = true;
      if (valid == true) {
        this.userService.addUserData(data);   // Add User data HTTP Request Call
      }
    }
  }

  updateUserData(data) {
    data.update = true;
    this.updateSource.next(data);
    this.addNewUser.controls['userName'].setValue(data.userName);
    this.setAge = data.userAge;
    this.addNewUser.controls['userOccupation'].setValue(data.userOccupation);
  }
  deleteUserData(data) {
    this.userService.deleteUserData(data.id);
  }

}
