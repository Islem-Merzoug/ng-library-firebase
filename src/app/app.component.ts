import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyC_vBulDxJYjSd3zoLlweGGVXyPa1HrkX4",
      authDomain: "angular8-library-ocr.firebaseapp.com",
      databaseURL: "https://angular8-library-ocr.firebaseio.com",
      projectId: "angular8-library-ocr",
      storageBucket: "angular8-library-ocr.appspot.com",
      messagingSenderId: "286798912658",
      appId: "1:286798912658:web:17a51f039dc10a35059a4b",
      measurementId: "G-HP1FKKWPCP"
    };
    firebase.initializeApp(config);
  }
}
