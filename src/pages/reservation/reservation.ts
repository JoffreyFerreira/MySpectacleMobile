import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
	selector: 'page-reservation',
	templateUrl: 'reservation.html'
})

export class ReservationPage {

	constructor(public navCtrl: NavController, private alertCtrl: AlertController, private viewController: ViewController) {

	}

	reserv = {spectacle:null, nbrPlace:null};
	items = ["Les chevaliers du fiel : Camping-car forever", "Gotaga barriere show : Masterkill"];

	logForm(){
		console.log(this.reserv);
		this.closeModal();
	}

	closeModal() {
    	this.viewController.dismiss();
  	}

  	itemSelected(item){
  		// api add reservation
		this.closeModal();
  	}
}
