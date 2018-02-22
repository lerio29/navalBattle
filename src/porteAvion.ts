import {Ship} from "./ship";
import { Dictionary }  from 'typescript-collections';
import {MatriceCase} from "./matriceCase"; 
import {EnumShip} from "./enumShip";
import {EnumStatus} from "./enumStatus";
import {EnumOrientation} from "./enumOrientation";



export class PorteAvion extends Ship{

	constructor(shipPosition: Dictionary<string,MatriceCase>, shipOrient: EnumOrientation){

		const name :string = 'PorteAvion';

		super(name, EnumShip.SHIP_PORTE_AVION, 5, shipOrient , shipPosition);
	}

	
	/**
	 * [calCulStartCase description]
	 */
	calculStartCase(): MatriceCase {

		let min :number = -10; //valeur simplement plus grande que la taille de la grille

		if(this._shipOrient === EnumOrientation.OR_HORIZONTAL){

			for(let itemHor of this._shipPosition.values()){
				
				if(min <= Math.min(min, itemHor.hor)){
					this._startCase = itemHor;
				}else{
					min = Math.min(min, itemHor.hor);
				}

			}			
		
		}else{

			for(let itemVert of this._shipPosition.values()){
				

				if(min <= Math.min(min, itemVert.vert)){
					this._startCase = itemVert;
				}else{
					min = Math.min(min, itemVert.vert);
				}
				
			}	
		
		}

		return this._startCase;
		
	}

	/**
	 * [calCulEndCase description]
	 */
	calculEndCase(): MatriceCase {

		let max :number = -10; //valeur simplement plus petite que la taille de la grille

		if(this._shipOrient === EnumOrientation.OR_HORIZONTAL){

			for(let itemHor of this._shipPosition.values()){
				
				if(max <= Math.min(max, itemHor.hor)){
					this._endCase = itemHor;
				}else{
					max = Math.min(max, itemHor.hor);
				}

			}	
			
		
		}else{

			for(let itemVert of this._shipPosition.values()){
				if(max <= Math.min(max, itemVert.hor)){
					this._endCase = itemVert;
				}else{
					max = Math.min(max, itemVert.hor);
				}
				
			}	
			
		}

		return this._endCase;
	}


	
}