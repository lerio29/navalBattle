import * as Player from "./player";
import * as BattleMatrice from "./battleMatrice"; 
import * as BattleUtils from "./battleUtils";
import * as EnumStatus from "./enumStatus";
import * as MatriceCase from "./matriceCase"; 

export class Party {
	
	private _players :Array<string> = [];
	private _timestamp :number =  undefined;
	private _id :string = undefined;

	constructor(player1:Player.Player, player2 :Player.Player){

		this._timestamp = Date.now();
		this._players.push(player1.getName);
		this._players.push(player2.getName);

		this._id = this._players.toString().trim() + this._timestamp.toString();

	}

	get getId() :string{
		return  this._id;
	}

	hit(fromPlayer :Player.Player, intoPlayer :Player.Player, hor :number, vert :number) :void{
		 let grilleFromPlayer :BattleMatrice.BattleMatrice = fromPlayer.getGrid();
		 let grilleIntoPlayer :BattleMatrice.BattleMatrice = intoPlayer.getGrid();

		 

		 if(grilleIntoPlayer.getMatrice.getValue(BattleUtils.BattleUtils.generateKeyGridByVal(vert, hor)).state === EnumStatus.EnumStatus.STATUS_EMPTY){
		 	grilleIntoPlayer.getMatrice.getValue(BattleUtils.BattleUtils.generateKeyGridByVal(vert, hor)).updateStatus(EnumStatus.EnumStatus.STATUS_FAIL);
		 }else{
		 	grilleIntoPlayer.getMatrice.getValue(BattleUtils.BattleUtils.generateKeyGridByVal(vert, hor)).updateStatus(EnumStatus.EnumStatus.STATUS_HIT);
		 }

	}



}