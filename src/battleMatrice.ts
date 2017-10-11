import * as Collections from 'typescript-collections';
import * as MatriceCase from "./matriceCase"; 
import * as EnumStatus from "./enumStatus";
import * as BattleUtils from "./battleUtils";
import * as Ship from "./ship";



/**
 * Classe de generation de matrice/grille de bataille navale
 */
export class BattleMatrice {

	static readonly separator :string = "-";

	// private  _matrice: Collections.Set<MatriceCase.MatriceCase>;
	private  _matrice: Collections.Dictionary<string,MatriceCase.MatriceCase>;


	/**
	 * [constructor description]
	 * @param {number} sizeMatrice [description]
	 */
	constructor(sizeMatrice: number){

		
		let initLoopH: number = 1;	

		let hMatrice: number = sizeMatrice;
		let vMatrice: number = sizeMatrice;

		this._matrice = new Collections.Dictionary<string,MatriceCase.MatriceCase>();

		let caseMat: MatriceCase.MatriceCase;


		while(initLoopH <= hMatrice ){
			
			let initLoopV: number = 1;	
			while(initLoopV <= vMatrice){

				caseMat = new MatriceCase.MatriceCase(initLoopV,initLoopH,EnumStatus.EnumStatus.STATUS_EMPTY);

				console.log("GenKey: " + BattleUtils.BattleUtils.positionToAlpha(initLoopV) + BattleMatrice.separator + initLoopH );
				this._matrice.setValue(BattleUtils.BattleUtils.positionToAlpha(initLoopV) + BattleMatrice.separator + initLoopH ,caseMat);
		
				initLoopV++ ;
			}
			initLoopH++;
		    
		}
		
	}

	/**
	 * [updateMatrice description]
	 * @param {MatriceCase.MatriceCase} status [description]
	 */
	updateMatrice(status :MatriceCase.MatriceCase){
		
		//on MAJ la case qui correspond à la cle 
		let tmpKey: string = status.hor + BattleMatrice.separator + status.vert;
		this._matrice.setValue(tmpKey,status);
		
	}

	/**
	 * [addShip description]
	 * @param {Ship.Ship} ship [description]
	 */
	addShip(ship :Ship.Ship){
		//associer des bateau à une grille
	}

	/**
	 * [getMatrice Retourne un set de MatriceCase correspondant à la grille de la bataille navale]
	 * @return {Collections.Set<MatriceCase.MatriceCase>} [description]
	 */
	get getMatrice() :Collections.Dictionary<string,MatriceCase.MatriceCase>{
		return this._matrice;
	}
}

