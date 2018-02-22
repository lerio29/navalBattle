import {EnumStatus} from "./enumStatus";

/**
 * Représentation d'une case de la grille de jeu
 */
export class MatriceCase{

	private _hor: number;
	private _vert: number;
	private _state: EnumStatus;


	constructor(hor: number,vert: number,state: EnumStatus){
		this.hor = hor;
		this.vert = vert;
		this.state = state;
	}	

	updateStatus(state: EnumStatus){
		this.state = state;
	}


	toString() :string{
		return "hor: " + this._hor + ", vert: " + this._vert + ", state: " + this._state;
	}


	get hor() :number{
		return this._hor;
	}

	get vert() :number{
		return this._vert;
	}

	get state() :EnumStatus{
		return this._state;
	}

	set hor(val :number){
		this._hor = val;
	}

	set vert(val :number){
		this._vert = val;
	}

	set state(val :EnumStatus){
		this._state = val;
	}


}
