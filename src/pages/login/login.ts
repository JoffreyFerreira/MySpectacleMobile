import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage {

	constructor(public navCtrl: NavController, private alertCtrl: AlertController, private viewController: ViewController) {

	}

	presentAlert() {
		let alert = this.alertCtrl.create({
			title: 'Erreur de connexion',
			subTitle: 'Mauvais email ou mot de passe',
			buttons: ['Fermer']
		});
		alert.present();
	}

	login = {password:null, mail:null};

	logForm(){
		console.log(this.login);
		if(this.login.password == "ouvreur123" && this.login.mail=="ouvreur"){
			this.closeModal();
		}
		else{
			this.presentAlert();
		}
	}

	closeModal() {
    	this.viewController.dismiss();
  	}
}
