import {Player} from "./player";
import {BattleMatrice} from "./battleMatrice"; 
import {BattleUtils} from "./battleUtils";
import {EnumStatus} from "./enumStatus";
import {MatriceCase} from "./matriceCase"; 

export class Party {
	
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

		 

		 if(grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(vert, hor)).state === EnumStatus.STATUS_EMPTY){
		 	console.log("before hit  : " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + BattleUtils.generateKeyGridByVal(vert, hor) + "; state :" + grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(vert, hor)).state );

		 	grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(vert, hor)).updateStatus(EnumStatus.STATUS_FAIL);
		 	console.log("hit: " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + BattleUtils.generateKeyGridByVal(vert, hor) + "; state :" + grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(vert, hor)).state );
		 }else{
		 	console.log("before hit: " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + BattleUtils.generateKeyGridByVal(vert, hor) + "; state :" + grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(vert, hor)).state );

		 	grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(vert, hor)).updateStatus(EnumStatus.STATUS_HIT);
		 	console.log("hit: " + " fromPlayer : " + fromPlayer.name + " into : " + intoPlayer.name + " " + BattleUtils.generateKeyGridByVal(vert, hor) + "; state :" + grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(vert, hor)).state );
		 }

	}



}