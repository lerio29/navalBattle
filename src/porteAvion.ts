import * as Ship from "./ship";
import * as Collections from 'typescript-collections';
import * as MatriceCase from "./matriceCase"; 
import * as EnumShip from "./enumShip";
import * as EnumStatus from "./enumStatus";

export class PorteAvion extends Ship.Ship{

	constructor(shipPosition: Collections.Dictionary<string,MatriceCase.MatriceCase>,
			startCase?: MatriceCase.MatriceCase, endCase?: MatriceCase.MatriceCase){

		const name :string = 'PorteAvion';

		super(name, EnumShip.EnumShip.SHIP_PORTE_AVION, 5, shipPosition, startCase, endCase);
	}

	calStartCase(): void {

		for(let item in this._shipPosition.values){
			let tmpValHor: number;
			let tmpValVert: number;
		}
	}

	calEndCase(): void {

		for(let item in this._shipPosition.values){
			let tmpValHor: number;
			let tmpValVert: number;
		}
	}
	
}