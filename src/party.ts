import {Player} from "./player";
import {BattleMatrice} from "./battleMatrice"; 
import {BattleUtils} from "./battleUtils";
import {EnumStatus} from "./enumStatus";
import {MatriceCase} from "./matriceCase"; 
import {Logger} from "./logger";

/**
 * Create an Party object
 * @class <p>A Party</p>
 */
export class Party {
	
	public _logger :Logger  = new Logger();

	private _players :Array<string> = [];
	private _timestamp :number =  undefined;
	private _id :string = undefined;


	/**
	 * [Party constructor]
	 * @constructor 
	 * @param {Player} player1 [The first player]
	 * @param {Player} player2 [The second player]
	 */
	constructor(player1:Player, player2 :Player){

		this._timestamp = Date.now();
		this._players.push(player1.name);
		this._players.push(player2.name);

		this._id = this._players.toString().trim() + this._timestamp.toString();

	}

/**
 * [hit For to shoot on a enemy ship ]
 * @param {Player} fromPlayer [Player behind the shot]
 * @param {Player} intoPlayer [Player undergoing shooting]
 * @param {number} hor        [Horizontal target]
 * @param {number} vert       [Vertical targer]
 */
	hit(fromPlayer :Player, intoPlayer :Player, hor :number, vert :number) :void{
		 let grilleFromPlayer = fromPlayer.grid;
		 let grilleIntoPlayer :BattleMatrice = intoPlayer.grid;

		 

		 if(grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).state === EnumStatus.STATUS_EMPTY){
		 	grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).updateStatus(EnumStatus.STATUS_FAIL);
		 }else{
		 	grilleIntoPlayer.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).updateStatus(EnumStatus.STATUS_HIT);
		 }

	}

	get getId() :string{
		return  this._id;
	}


}