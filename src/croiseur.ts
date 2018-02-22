import {Ship} from "./ship";
import { Dictionary }  from 'typescript-collections';
import {MatriceCase} from "./matriceCase"; 
import {EnumShip} from "./enumShip";
import {EnumStatus} from "./enumStatus";
import {EnumOrientation} from "./enumOrientation";


export class Croiseur extends Ship{

	constructor(shipPosition: Dictionary<string,MatriceCase>, shipOrient: EnumOrientation){

		const name :string = 'PorteAvion';

		super(name, EnumShip.SHIP_CROISEUR, 5, shipOrient ,shipPosition);
	}

	
	/**
	 * [calCulStartCase description]
	 */
	calculStartCase(): void {

		let min :number = 50; //valeur simplement plus grande que la taille de la grille

		if(this._shipOrient === EnumOrientation.OR_HORIZONTAL){

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
	calculEndCase(): void {

		let max :number = -10; //valeur simplement plus petite que la taille de la grille

		if(this._shipOrient === EnumOrientation.OR_HORIZONTAL){

			for(let itemHor of this._shipPosition.values()){
				max = Math.max(max, itemHor.hor);
				
			}	
			this._endCase.vert = max;
			
		
		}else{

			for(let itemVert of this._shipPosition.values()){
				max = Math.min(max, itemVert.vert);
				
			}	
			this._endCase.vert = max;
		}
	}
	
}