import {Ship} from "./ship";
import { Dictionary }  from 'typescript-collections';
import {MatriceCase} from "./matriceCase"; 
import {EnumShip} from "./enumShip";
import {EnumStatus} from "./enumStatus";
import {EnumOrientation} from "./enumOrientation";

/**
 * Create an Cruiser object
 * @class <p>A Cruiser is a Ship with a lenght of 4</p>
 */
export class Cruiser extends Ship{

	/**
	 * [Cruiser constructor]
	 * @constructor
	 * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
	 * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
	 */
	constructor(shipPosition: Dictionary<string,MatriceCase>, shipOrient: EnumOrientation){

		const name :string = 'Croiseur';

		super(name, EnumShip.SHIP_CROISEUR, 4, shipOrient ,shipPosition);
	}

	
	
	
}