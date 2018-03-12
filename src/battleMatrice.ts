import { Dictionary, Set }  from 'typescript-collections';
import { MatriceCase } from "./matriceCase"; 
import { EnumStatus } from "./enumStatus";
import { EnumShip } from "./enumShip";
import {BattleUtils} from "./battleUtils";
import {Ship} from "./ship";
import {Logger} from "./logger";




/**
 * Create a battle matrix 
 * @class <p>A BattleMatrice is the war floor</p>
 * @author Vincent VILERIO
 */
export class BattleMatrice {

	private _logger :Logger  = new Logger();

	private  _matrice: Dictionary<string,MatriceCase>;
	private _size: number;
	private _ships: Set<Ship>;
	private _idHash: string;


	/**
	 * [BattleMatrice constructor]
	 * @param {number}  sizeMatrice [The size of th war floor : a square of value x value]
	 * @param {boolean} silent      [Enable or disable logger]
	 *
	 * 
	 */
	constructor(sizeMatrice :number, silent :boolean){

		if(!silent){
			this._logger.silent = false;
		}
			
		let initLoopH: number = 1;	

		let hMatrice: number = sizeMatrice;
		let vMatrice: number = sizeMatrice;
		this._idHash =  BattleUtils.createUniqueId();
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

	autoInstallShip(){
		//TODO
	}


	/**
	 * @description [updateMatrice method update a box values]
	 * @param {MatriceCase} status [Update box datas from the key]
	 */
	updateMatrice(status :MatriceCase) :Dictionary<string,MatriceCase>{
		
		//on MAJ la case qui correspond à la cle 
		let tmpKey: string = BattleUtils.generateKeyGridByVal(status.hor, status.vert)
		this._matrice.setValue(tmpKey,status);
		return this._matrice;
		
	}

	/**
	 * @description [addShip add a ship to the matrix]
	 * @param {Ship.Ship} ship [A ship]
	 */
	addShip(ship :Ship){
		//associer des bateau à une grille
		this._ships.add(ship);
	}

	/**
	 * @description [addShips add a ships set to the matrix]
	 * @param {Set<Ship>} ships [ships set]
	 */
	addShips(ships :Set<Ship>){
		for(let ship of ships.toArray()){
			this.addShip(ship);
		}
	}

	/**
	 * [checkShipIsSet description]
	 * @param  {number}   hor  [description]
	 * @param  {number}   vert [description]
	 * @return {EnumShip}      [description]
	 */
	checkShipIsSet(hor :number, vert :number) :EnumShip {

		let result :EnumShip = undefined;

		//on parcourt les navires presents
		this._ships.forEach(ship => {

			//on verifie les coordonnees
    		if(ship.shipPosition.containsKey(BattleUtils.generateKeyGridByVal(hor,vert))){
    			result = ship.shipType;
    		}
    			
    		
		});

		return result;    		

	}

	/**
	 * [getSize Size of matrix]
	 * @return {number} [Size of matrix]
	 */
	get getSize() :number{
		return  this._size;
	}

	/**
	 * [getShips Return all ships hooked in the matrix]
	 * @return {Set<Ship>} [A ships set]
	 */
	get getShips() :Set<Ship>{
		return this._ships;
	}

	/**
	 * [getMatrice Return all boxes in the matrix]
	 * @return {Dictionary<MatriceCase>} [A boxes dictionnary]
	 */
	get getMatrice() :Dictionary<string,MatriceCase>{
		return this._matrice;
	}

	get getIdHash() :string {
		return this._idHash;
	}
}

