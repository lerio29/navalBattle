import {Ship} from "./ship";
import { Dictionary }  from 'typescript-collections';
import {MatriceCase} from "./matriceCase"; 
import {EnumShip} from "./enumShip";
import {EnumStatus} from "./enumStatus";
import {EnumOrientation} from "./enumOrientation";



export class Mine extends Ship{

	constructor(shipPosition: Dictionary<string,MatriceCase>, shipOrient: EnumOrientation){

		const name :string = 'Mine';

		super(name, EnumShip.SHIP_MINE, 1, shipOrient , shipPosition);
	}




	
}