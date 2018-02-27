import { Dictionary, Set }  from 'typescript-collections';
import { MatriceCase } from "./matriceCase"; 
import { EnumStatus } from "./enumStatus";
import {BattleUtils} from "./battleUtils";
import {Ship} from "./ship";
import {Logger} from "./logger";




/**
 * Create a battle matrix 
 * @class <p>A BattleMatrice is the war floor</p>
 */
export class BattleMatrice {

	private _logger :Logger  = new Logger();


	// private  _matrice: Collections.Set<MatriceCase.MatriceCase>;
	private  _matrice: Dictionary<string,MatriceCase>;
	private _size: number;
	private _ships: Set<Ship>;


	/**
	 * [BattleMatrice constructor]
	 * @param {number}  sizeMatrice [The size of th war floor : a square of value x value]
	 * @param {boolean} silent      [Enable or disable logger]
	 */
	constructor(sizeMatrice :number, silent :boolean){

		if(!silent){
			this._logger.silent = false;
		}
			
		let initLoopH: number = 1;	

		let hMatrice: number = sizeMatrice;
		let vMatrice: number = sizeMatrice;
		this._size = sizeMatrice;

		this._matrice = new Dictionary<string,MatriceCase>();
		this._ships = new Set<Ship>();

		let caseMat: MatriceCase;


		while(initLoopH <= hMatrice ){
			
			let initLoopV: number = 1;	
			while(initLoopV <= vMatrice){

				caseMat = new MatriceCase(initLoopH, initLoopV,EnumStatus.STATUS_EMPTY);
				this._logger.debug("test", "GenKey: " + BattleUtils.generateKeyGridByVal(initLoopH, initLoopV));
				
				this._matrice.setValue(BattleUtils.generateKeyGridByVal(initLoopH, initLoopV) ,caseMat);
		
				initLoopV++ ;
			}

			initLoopH++;
		    
		}
		
	}


	/**
	 * [updateMatrice method update a box values]
	 * @param {MatriceCase} status [Update box datas from the key]
	 */
	updateMatrice(status :MatriceCase){
		
		//on MAJ la case qui correspond à la cle 
		let tmpKey: string = BattleUtils.generateKeyGridByVal(status.hor, status.vert)
		this._matrice.setValue(tmpKey,status);
		
	}

	/**
	 * [addShip description]
	 * @param {Ship.Ship} ship [description]
	 */
	addShip(ship :Ship){
		//associer des bateau à une grille
		this._ships.add(ship);
	}

	/**
	 * [addShips description]
	 * @param {Set<Ship>} ships [description]
	 */
	addShips(ships :Set<Ship>){
		for(let ship of ships.toArray()){
			this.addShip(ship);
		}
	}

	/**
	 * [getSize description]
	 * @return {number} [description]
	 */
	get getSize() :number{
		return  this._size;
	}

	/**
	 * [getShips description]
	 * @return {Set<Ship>} [description]
	 */
	get getShips() :Set<Ship>{
		return this._ships;
	}

	/**
	 * [getMatrice Retourne un set de MatriceCase correspondant à la grille de la bataille navale]
	 * @return {Dictionary<MatriceCase>} [description]
	 */
	get getMatrice() :Dictionary<string,MatriceCase>{
		return this._matrice;
	}
}

