import * as Collections from 'typescript-collections';
import * as MatriceCase from "./matriceCase"; 
import * as EnumStatus from "./enumStatus";

export class BattleMatrice {

	private _matrice: Collections.Set<MatriceCase.MatriceCase>;

	constructor(sizeMatrice: number){

		let initLoopH: number = 1;	

		let hMatrice: number = sizeMatrice;
		let vMatrice: number = sizeMatrice;

		this._matrice = new Collections.Set<MatriceCase.MatriceCase>();

		let caseMat: MatriceCase.MatriceCase;


		while(initLoopH <= hMatrice ){
			
			let initLoopV: number = 1;	
			while(initLoopV <= vMatrice){

				//verifier que le set n accepte pas les doublons du style 1:1 ou 2:2 etc...
				caseMat = new MatriceCase.MatriceCase(initLoopV,initLoopH,EnumStatus.EnumStatus.STATUS_EMPTY);
				// console.log("case :" + caseMat.toString());


				this._matrice.add(caseMat);
		
				initLoopV++ ;
			}
			initLoopH++;
		    
		}
		console.log("size : " + this._matrice.toArray().length);
		console.log("toString : " + this._matrice.toArray().toString());
	}

	get getMatrice():Collections.Set<MatriceCase.MatriceCase>{
		return this._matrice;
	}
}