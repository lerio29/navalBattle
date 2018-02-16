import {Player} from "./player";
import {BattleMatrice} from "./battleMatrice"; 
import {BattleUtils} from "./battleUtils";
import {EnumStatus} from "./enumStatus";
import {MatriceCase} from "./matriceCase"; 
import {Logger} from "./logger";

export class Party {
	
	public _logger :Logger  = new Logger();

	private _players :Array<string> = [];
	private _timestamp :number =  undefined;
	private _id :string = undefined;


	constructor(player1:Player, player2 :Player){

		this._timestamp = Date.now();
		this._players.push(player1.name);
		this._players.push(player2.name);

		this._id = this._players.toString().trim() + this._timestamp.toString();

	}

	get getId() :string{
		return  this._id;
	}

	hit(fromPlayer :Player, intoPlayer :Player, hor :number, vert :number) :void{
		 let grilleFromPlayer = fromPlayer.grid;
		 let grilleIntoPlayer :BattleMatrice = intoPlayer.grid;

		 

		 if(grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).state === EnumStatus.STATUS_EMPTY){
		 	
		 	this._logger.debug("before hit  : " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + BattleUtils.generateKeyGridByVal(hor,vert) + "; state :" + grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).state );
		 	grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).updateStatus(EnumStatus.STATUS_FAIL);
		 	this._logger.debug("hit: " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + BattleUtils.generateKeyGridByVal(hor,vert) + "; state :" + grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).state);
		 }else{
		 	this._logger.debug("before hit: " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + BattleUtils.generateKeyGridByVal(hor,vert) + "; state :" + grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).state);
		 	grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).updateStatus(EnumStatus.STATUS_HIT);
		 	this._logger.debug("hit: " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + BattleUtils.generateKeyGridByVal(hor,vert) + "; state :" + grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).state);
		 }

	}



}