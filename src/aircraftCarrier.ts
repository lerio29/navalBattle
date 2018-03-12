import {Ship} from "./ship";
import { Dictionary }  from 'typescript-collections';
import {MatriceCase} from "./matriceCase"; 
import {EnumShip} from "./enumShip";
import {EnumStatus} from "./enumStatus";
import {EnumOrientation} from "./enumOrientation";


/**
 * Create an AircraftCarrier object
 * @class <p>A AircraftCarrier is a Ship with a lenght of 5</p>
 * @author Vincent VILERIO
 */
export class AircraftCarrier extends Ship{

	/**
	 * [AircraftCarrier constructor]
	 * @constructor
	 * @param {Dictionary<string,MatriceCase>} shipPosition [The shipPosition is a Dictionary of all the boxes corresponding to the ship ]
	 * @param {EnumOrientation}                shipOrient   [The ship orientation horizontal or vertical]
	 */
	constructor(shipPosition: Dictionary<string,MatriceCase>, shipOrient: EnumOrientation){

		const name :string = 'PorteAvion';

		super(name, EnumShip.SHIP_PORTE_AVION, 5, shipOrient , shipPosition);
	}




	
}