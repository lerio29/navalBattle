import {Player} from "./player";
import {BattleMatrice} from "./battleMatrice"; 
import {BattleUtils} from "./battleUtils";
import {EnumStatus} from "./enumStatus";
import {EnumShip} from "./enumShip";
import {MatriceCase} from "./matriceCase"; 
import {Logger} from "./logger";
import { Dictionary, Set }  from 'typescript-collections';


/**
 * Create an Party object
 * @class <p>A Party</p>
 * @author Vincent VILERIO
 */
export class Party {
	
	public _logger :Logger  = new Logger();

	private _players :Dictionary<string,Player>;
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
		this._players = new Dictionary<string,Player>();
		this._players.setValue(player1.uid,player1);
		this._players.setValue(player2.uid,player2);

		this._id = this._players.toString().trim() + this._timestamp.toString();

	}

/**
 * @description [hit For to shoot on a enemy ship ]
 * @param {Player} fromPlayer [Player behind the shot]
 * @param {Player} intoPlayer [Player undergoing shooting]
 * @param {number} hor        [Horizontal target]
 * @param {number} vert       [Vertical targer]
 */
	hit(fromPlayerUid :string, intoPlayerUid :string, hor :number, vert :number) :EnumStatus{		 
		 

		 let EnnemyStatus :EnumStatus = this._players.getValue(fromPlayerUid).targetGrid.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).state;
		 //verif si presence bateau
		 let shipIsSet :EnumShip = this._players.getValue(intoPlayerUid).grid.checkShipIsSet(hor, vert);

		 if(EnnemyStatus === EnumStatus.STATUS_EMPTY && typeof(shipIsSet) == "undefined"){
		 	const tmpBox = new MatriceCase(hor, vert, EnumStatus.STATUS_FAIL);
		 	this._players.getValue(fromPlayerUid).targetGrid.updateMatrice(tmpBox);

		 	return EnumStatus.STATUS_FAIL;
		 }else if(EnnemyStatus === EnumStatus.STATUS_EMPTY && typeof(shipIsSet) != "undefined"){	
		 	// if(EnnemyStatus != this._players.getValue(fromPlayerUid).targetGrid.getMatrice.getValue(BattleUtils.generateKeyGridByVal(hor,vert)).state ){
		 		const tmpBox = new MatriceCase(hor, vert, EnumStatus.STATUS_HIT);
		 		this._players.getValue(fromPlayerUid).targetGrid.updateMatrice(tmpBox);
		 		this._players.getValue(intoPlayerUid).grid.updateMatrice(tmpBox);

		 		
		 		return EnumStatus.STATUS_HIT;

		 	// }

		 }else if(EnnemyStatus !== EnumStatus.STATUS_EMPTY){

		 	return EnumStatus.STATUS_ALREADY;

		 }



	}

	/**
	 * [getId description]
	 * @return {string} [description]
	 */
	get getId() :string{
		return  this._id;
	}

	get getPlayers() :Dictionary<string,Player> {
		return this._players;
	}


}