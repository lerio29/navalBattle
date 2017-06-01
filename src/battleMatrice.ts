import * as Collections from 'typescript-collections';
import * as MatriceCase from "./matriceCase"; 
import * as EnumStatus from "./enumStatus";

export class BattleMatrice {

	matrice: Collections.Set<MatriceCase.MatriceCase>;

	constructor(sizeMatrice: number){

		let initLoopH: number = 1;	

		let hMatrice: number = sizeMatrice;
		let vMatrice: number = sizeMatrice;

		this.matrice = new Collections.Set<MatriceCase.MatriceCase>();

		let caseMat: MatriceCase.MatriceCase;


		while(initLoopH <= hMatrice ){
			
			let initLoopV: number = 1;	
			while(initLoopV <= vMatrice){

				
				caseMat = new MatriceCase.MatriceCase(initLoopV,initLoopH,EnumStatus.EnumStatus.STATUS_EMPTY);
				this.matrice.add(caseMat);
				console.log("caseMat : " + caseMat.hor);
				// console.log( "(initLoopH:" + initLoopH + "|initLoopV:" + initLoopV + ")" );
				initLoopV++ ;
			}
			initLoopH++;
		    
		}
	}

	get getMatrice():Collections.Set<MatriceCase.MatriceCase>{
		return this.matrice;
	}
}