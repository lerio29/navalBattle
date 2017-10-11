import * as EnumStatus from "./enumStatus";


export class MatriceCase{

	hor: number;
	vert: number;
	state: EnumStatus.EnumStatus;


	constructor(hor: number,vert: number,state: EnumStatus.EnumStatus){
		this.hor = hor;
		this.vert = vert;
		this.state = state;
	}	

	updateStatus(state: EnumStatus.EnumStatus){
		this.state = state;
	}


	toString() {
		return "hor: " + this.hor + ", vert: " + this.vert + ", state: " + this.state;
	}
}
