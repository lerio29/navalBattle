import {Ship} from "./ship";
import { Dictionary }  from 'typescript-collections';
import {MatriceCase} from "./matriceCase"; 
import {EnumShip} from "./enumShip";
import {EnumStatus} from "./enumStatus";
import {EnumOrientation} from "./enumOrientation";

/**
 * Create an Submarine object
 * @class <p>A Submarine is a Ship with a lenght of 3</p>
 * @author Vincent VILERIO
 */
export class Submarine  extends Ship{

	/**
	 * [Submarine constructor]
	 * @constructor
	 * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
	 * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
	 */
	constructor(shipPosition: Dictionary<string,MatriceCase>, shipOrient: EnumOrientation){

		const name :string = 'Sous-marin';

		super(name, EnumShip.SHIP_SUBMARINE, 3, shipOrient ,shipPosition);
	}

	
	
	
}