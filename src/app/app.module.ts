import { MbscModule } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// Import Firebase modules + environment

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
//import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire/compat'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth'
import { getFirestore } from 'firebase/firestore';
import { from } from 'rxjs';


const firebaseConfig = {
  apiKey: "AIzaSyCyhWnG7QEm7mREbarlNojsc9Ncf0wSBpQ",
  authDomain: "ionic-project-muslim-guide.firebaseapp.com",
  projectId: "ionic-project-muslim-guide",
  storageBucket: "ionic-project-muslim-guide.appspot.com",
  messagingSenderId: "975293651580",
  appId: "1:975293651580:web:fafb2bc9b8b1917f5507f9",
  measurementId: "G-DRCYLTXDRG"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    // AngularFireModule.initializeApp(firebaseConfig),
    MbscModule,   
    FormsModule, 
    ToastrModule.forRoot({
      closeButton:true,
      progressBar:true
    }),
    provideAuth(()=>getAuth()),
    provideFirebaseApp(()=>initializeApp(firebaseConfig)), 
    provideFirestore(()=>getFirestore()),
    BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
