import * as Collections from 'typescript-collections';
import * as MatriceCase from "./matriceCase"; 
import * as EnumStatus from "./enumStatus";
import * as BattleUtils from "./battleUtils";




/**
 * Classe de generation de matrice/grille de bataille navale
 */
export class BattleMatrice {

	private  _matrice: Collections.Set<MatriceCase.MatriceCase>;

	constructor(sizeMatrice: number){
		
		let initLoopH: number = 1;	

		let hMatrice: number = sizeMatrice;
		let vMatrice: number = sizeMatrice;

		this._matrice = new Collections.Set<MatriceCase.MatriceCase>();

		let caseMat: MatriceCase.MatriceCase;


		while(initLoopH <= hMatrice ){
			
			let initLoopV: number = 1;	
			while(initLoopV <= vMatrice){

				caseMat = new MatriceCase.MatriceCase(BattleUtils.BattleUtils.positionToAlpha(initLoopV),initLoopH,EnumStatus.EnumStatus.STATUS_EMPTY);

				this._matrice.add(caseMat);
		
				initLoopV++ ;
			}
			initLoopH++;
		    
		}
		console.log("size : " + this._matrice.toArray().length);
		console.log("toString : " + this._matrice.toArray().toString());
	}

	updateCase(status :MatriceCase.MatriceCase){

	}

/**
 * [getMatrice Retourne un set de MatriceCase correspondant à la grille de la bataille navale]
 * @return {Collections.Set<MatriceCase.MatriceCase>} [description]
 */
	get getMatrice():Collections.Set<MatriceCase.MatriceCase>{
		return this._matrice;
	}
}

