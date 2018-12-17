import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
	selector: 'page-explore-qr',
	templateUrl: 'explore-qr.html'
})

export class ExploreQrPage {

	constructor(public navCtrl: NavController, private alertCtrl: AlertController, private viewController: ViewController) {

	}
	
	closeModal() {
    	this.viewController.dismiss();
  	}
}
