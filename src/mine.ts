import {Ship} from "./ship";
import { Dictionary }  from 'typescript-collections';
import {MatriceCase} from "./matriceCase"; 
import {EnumShip} from "./enumShip";
import {EnumStatus} from "./enumStatus";
import {EnumOrientation} from "./enumOrientation";


/**
 * Create an Mine object
 * @class <p>A Mine is a Ship with a lenght of 1</p>
 */
export class Mine extends Ship{

	/**
	 * [Mine constructor]
	 * @constructor
	 * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
	 * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
	 */
	constructor(shipPosition: Dictionary<string,MatriceCase>, shipOrient: EnumOrientation){

		const name :string = 'Mine';

		super(name, EnumShip.SHIP_MINE, 1, shipOrient , shipPosition);
	}




	
}