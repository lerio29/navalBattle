import {Ship} from "./ship";
import { Dictionary }  from 'typescript-collections';
import {MatriceCase} from "./matriceCase"; 
import {EnumShip} from "./enumShip";
import {EnumStatus} from "./enumStatus";
import {EnumOrientation} from "./enumOrientation";


export class Destroyer  extends Ship{

	constructor(shipPosition: Dictionary<string,MatriceCase>, shipOrient: EnumOrientation){

		const name :string = 'Destroyer';

		super(name, EnumShip.SHIP_CONTRE_TORPILLEUR, 3, shipOrient ,shipPosition);
	}

	
	
	
}