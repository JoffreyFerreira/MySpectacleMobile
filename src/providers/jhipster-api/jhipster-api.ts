import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JhipsterApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  entities to have : ouvreur user spectacle reservation salle
*/
@Injectable()
export class JhipsterApiProvider {

	private isConnected:boolean;
	private idUser:number;

	constructor(public http: HttpClient) {
		this.isConnected = false;
		this.idUser = null;
	}

	checkLogin(){

	}

	getSalle(){

	}

	getSpectacleList(){

	}

	addReservation(){

	}

	getReservation(){

	}

}
