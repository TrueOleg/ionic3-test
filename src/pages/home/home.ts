import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IOSFilePicker } from '@ionic-native/file-picker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private filePicker: IOSFilePicker) {

  }


  pickFile() {
    this.filePicker.pickFile()
      .then(uri => console.log(uri))
      .catch(err => console.log('Error', err));
  }

  pickFileNext() {
    (<any>window).plugins.mediapicker.getAudio(
      function success(data) {
        console.log(JSON.stringify(data));
      },
      function error(e) {
        console.log(e);
      }, false, true, 'title');
  }
}
