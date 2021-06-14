import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/////////////////
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//FORM IMPORTS//
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//FIREBASE IMPORTS//
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment.prod'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, //FIRESTORE
    AngularFireStorageModule, //STORAGE
    AngularFireAuthModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
