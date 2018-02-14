import {EnumStatus} from "./enumStatus";

/**
 * Représentation d'une case de la grille de jeu
 */
export class MatriceCase{

	hor: number;
	vert: number;
	state: EnumStatus;


	constructor(hor: number,vert: number,state: EnumStatus){
		this.hor = hor;
		this.vert = vert;
		this.state = state;
	}	

	updateStatus(state: EnumStatus){
		this.state = state;
	}


	toString() {
		return "hor: " + this.hor + ", vert: " + this.vert + ", state: " + this.state;
	}
}
