import * as Collections from 'typescript-collections';
import { MatriceCase } from "./matriceCase"; 
import { EnumStatus } from "./enumStatus";
import {BattleUtils} from "./battleUtils";
import {Ship} from "./ship";



/**
 * Classe de generation de matrice/grille de bataille navale
 */
export class BattleMatrice {

	
	// private  _matrice: Collections.Set<MatriceCase.MatriceCase>;
	private  _matrice: Collections.Dictionary<string,MatriceCase>;


	/**
	 * [constructor description]
	 * @param {number} sizeMatrice [description]
	 */
	constructor(sizeMatrice: number){

		
		let initLoopH: number = 1;	

		let hMatrice: number = sizeMatrice;
		let vMatrice: number = sizeMatrice;

		this._matrice = new Collections.Dictionary<string,MatriceCase>();

		let caseMat: MatriceCase;


		while(initLoopH <= hMatrice ){
			
			let initLoopV: number = 1;	
			while(initLoopV <= vMatrice){

				caseMat = new MatriceCase(initLoopV,initLoopH,EnumStatus.STATUS_EMPTY);

				console.log("GenKey: " + BattleUtils.generateKeyGridByVal(initLoopV,initLoopH));
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

	/**
	 * [getMatrice Retourne un set de MatriceCase correspondant à la grille de la bataille navale]
	 * @return {Collections.Set<MatriceCase>} [description]
	 */
	get getMatrice() :Collections.Dictionary<string,MatriceCase>{
		return this._matrice;
	}
}

