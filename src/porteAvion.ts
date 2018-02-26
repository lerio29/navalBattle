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




	
}