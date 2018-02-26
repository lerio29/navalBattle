import {Ship} from "./ship";
import { Dictionary }  from 'typescript-collections';
import {MatriceCase} from "./matriceCase"; 
import {EnumShip} from "./enumShip";
import {EnumStatus} from "./enumStatus";
import {EnumOrientation} from "./enumOrientation";


export class Cruiser extends Ship{

	constructor(shipPosition: Dictionary<string,MatriceCase>, shipOrient: EnumOrientation){

		const name :string = 'Croiseur';

		super(name, EnumShip.SHIP_CROISEUR, 4, shipOrient ,shipPosition);
	}

	
	
	
}