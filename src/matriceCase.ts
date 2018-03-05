import {EnumStatus} from "./enumStatus";

/**
 * Create a matrix box object
 * @class <p>A MatriceCase contains all information for a matrix box.</p>
 */
export class MatriceCase{

	private _hor: number;
	private _vert: number;
	private _state: EnumStatus;

	/**
	 * [MatriceCase constructor]
	 * @param {number}  hor [The horizontal value]
	 * @param {number}  vert [The vertical value]
	 * @param {EnumStatus} state [The state value]
	 */
	constructor(hor: number,vert: number,state: EnumStatus){
		this.hor = hor;
		this.vert = vert;
		this.state = state;
	}	

	/**
	 * [updateStatus Update a box state]
	 * @param {EnumStatus} state ][The update state}
	 */
	updateStatus(state: EnumStatus){
		this.state = state;
	}


	/**
	 * [toString Informations about a MatriceCase object ]
	 * @return {string} [MatriceCase informations]
	 */
	toString() :string{
		return "MatriceCase Infos, hor: " + this._hor + ", vert: " + this._vert + ", state: " + this._state;
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
