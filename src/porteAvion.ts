import * as Ship from "./ship";
import * as Collections from 'typescript-collections';
import * as MatriceCase from "./matriceCase"; 
import * as EnumShip from "./enumShip";
import * as EnumStatus from "./enumStatus";
import * as EnumOrientation from "./enumOrientation";


export class PorteAvion extends Ship.Ship{

	constructor(shipPosition: Collections.Dictionary<string,MatriceCase.MatriceCase>, shipOrient: EnumOrientation.EnumOrientation){

		const name :string = 'PorteAvion';

		super(name, EnumShip.EnumShip.SHIP_PORTE_AVION, 5, shipOrient ,shipPosition);
	}

	
	/**
	 * [calCulStartCase description]
	 */
	calCulStartCase(): void {

		let min :number = 50; //valeur simplement plus grande que la taille de la grille

		if(this._shipOrient === EnumOrientation.EnumOrientation.OR_HORIZONTAL){

			for(let itemHor of this._shipPosition.values()){
				min = Math.min(min, itemHor.hor);
				
			}	
			this._startCase.hor = min;
			
		
		}else{

			for(let itemVert of this._shipPosition.values()){
				min = Math.min(min, itemVert.vert);
				
			}	
			this._startCase.vert = min;
		}
		
	}

	/**
	 * [calCulEndCase description]
	 */
	calCulEndCase(): void {

		let max :number = -10; //valeur simplement plus petite que la taille de la grille

		if(this._shipOrient === EnumOrientation.EnumOrientation.OR_HORIZONTAL){

			for(let itemHor of this._shipPosition.values()){
				max = Math.max(max, itemHor.hor);
				
			}	
			this._endCase.hor = max;
			
		
		}else{

			for(let itemVert of this._shipPosition.values()){
				max = Math.min(max, itemVert.vert);
				
			}	
			this._endCase.vert = max;
		}
	}
	
}