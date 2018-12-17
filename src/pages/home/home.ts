import { Component } from '@angular/core';
import {ModalController, NavController, ToastController} from 'ionic-angular';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private scanSub: any ;
  constructor(public navCtrl: NavController,
              private qrScanner: QRScanner,
              private modalController: ModalController,
              private toastCtrl: ToastController) {

  }


  ionViewWillEnter(){
    this.hideCamera();
  }


  scanOnclick() {
    let modal = this.modalController.create('ScanQrPage');
    modal.present();
  }

  loginOnClick() {
    let modal = this.modalController.create('LoginPage');
    modal.present();
  }

  reservationOnClick() {
    let modal = this.modalController.create('ReservationPage');
    modal.present();    
  }

  // presentToast(text:string) {
  //   let toast = this.toastCtrl.create({
  //     message: text,
  //     duration: 3000,
  //     position: 'top'
  //   });

  //   toast.onDidDismiss(() => {
  //     console.log('Dismissed toast');
  //   });

  //   toast.present();
  // }

  // ionViewWillLeave(){
  //   this.qrScanner.hide(); // hide camera preview
  //   this.scanSub.unsubscribe(); // stop scanning
  //   this.hideCamera();
  // }

  // showCamera() {
  //   (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  // }

  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

}
