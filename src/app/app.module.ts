import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { UserDataService } from './user-data.service';

import * as $ from 'jquery';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { FeTableComponent } from './fe-table/fe-table.component';
import { FeSlideComponent } from './fe-slide/fe-slide.component';

const firebaseConfig = {
  apiKey: "AIzaSyDIEec_eqV5u3a5svfCwl2tQyg_CV6fFz4",
  authDomain: "financial-express-app.firebaseapp.com",
  databaseURL: "https://financial-express-app.firebaseio.com",
  projectId: "financial-express-app",
  storageBucket: "financial-express-app.appspot.com",
  messagingSenderId: "584794970868"
};

const routes: Routes = [
  { path: '', redirectTo: 'user-dashboard', pathMatch: 'full' },
  { path: 'user-dashboard', component: UserDataComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    FeTableComponent,
    FeSlideComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    RouterModule.forRoot(routes)
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
