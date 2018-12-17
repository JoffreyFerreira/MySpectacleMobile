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
	items = ["Spectacle 1", "Spectacle 2"];

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
