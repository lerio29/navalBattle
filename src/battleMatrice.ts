import { Dictionary, Set }  from 'typescript-collections';
import { MatriceCase } from "./matriceCase"; 
import { EnumStatus } from "./enumStatus";
import {BattleUtils} from "./battleUtils";
import {Ship} from "./ship";
import {Logger} from "./logger";



/**
 * Classe de generation de matrice/grille de bataille navale
 */
export class BattleMatrice {

	private _logger :Logger;


	// private  _matrice: Collections.Set<MatriceCase.MatriceCase>;
	private  _matrice: Dictionary<string,MatriceCase>;
	private _size: number;


	/**
	 * [constructor description]
	 * @param {number} sizeMatrice [description]
	 */
	constructor(sizeMatrice: number){
		this._logger = new Logger();
		
		let initLoopH: number = 1;	

		let hMatrice: number = sizeMatrice;
		let vMatrice: number = sizeMatrice;
		this._size = sizeMatrice;

		this._matrice = new Dictionary<string,MatriceCase>();

		let caseMat: MatriceCase;


		while(initLoopH <= hMatrice ){
			
			let initLoopV: number = 1;	
			while(initLoopV <= vMatrice){

				caseMat = new MatriceCase(initLoopV,initLoopH,EnumStatus.STATUS_EMPTY);
				this._logger.debug("test", "GenKey: " + BattleUtils.generateKeyGridByVal(initLoopV,initLoopH));
				
				this._matrice.setValue(BattleUtils.generateKeyGridByVal(initLoopV,initLoopH) ,caseMat);
		
				initLoopV++ ;
			}

			initLoopH++;
		    
		}
		
	}


	/**
	 * [updateMatrice description]
	 * @param {MatriceCase} status [description]
	 */
	updateMatrice(status :MatriceCase){
		
		//on MAJ la case qui correspond à la cle 
		let tmpKey: string = BattleUtils.generateKeyGridByVal(status.vert,status.hor)
		this._matrice.setValue(tmpKey,status);
		
	}

	/**
	 * [addShip description]
	 * @param {Ship.Ship} ship [description]
	 */
	addShip(ship :Ship){
		//associer des bateau à une grille
	}

	get getSize() :number{
		return  this._size;
	}

	/**
	 * [getMatrice Retourne un set de MatriceCase correspondant à la grille de la bataille navale]
	 * @return {Dictionary<MatriceCase>} [description]
	 */
	get getMatrice() :Dictionary<string,MatriceCase>{
		return this._matrice;
	}
}

