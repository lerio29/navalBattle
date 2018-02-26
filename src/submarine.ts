import {Ship} from "./ship";
import { Dictionary }  from 'typescript-collections';
import {MatriceCase} from "./matriceCase"; 
import {EnumShip} from "./enumShip";
import {EnumStatus} from "./enumStatus";
import {EnumOrientation} from "./enumOrientation";


export class Submarine  extends Ship{

	constructor(shipPosition: Dictionary<string,MatriceCase>, shipOrient: EnumOrientation){

		const name :string = 'Sous-marin';

		super(name, EnumShip.SHIP_SUBMARINE, 3, shipOrient ,shipPosition);
	}

	
	
	
}