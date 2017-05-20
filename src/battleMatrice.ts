import * as Collections from 'typescript-collections';
import * as MatriceCase from "./matriceCase"; 
import * as EnumStatus from "./enumStatus";

export class BattleMatrice {

	battleMatrice: Collections.Set<MatriceCase.MatriceCase>;

	constructor(sizeMatrice: number){

		let initLoopH: number = 1;	

		let hMatrice: number = sizeMatrice;
		let vMatrice: number = sizeMatrice;

		this.battleMatrice = new Collections.Set<MatriceCase.MatriceCase>();

		let caseMat: MatriceCase.MatriceCase;


		while(initLoopH <= hMatrice ){
			
			let initLoopV: number = 1;	
			while(initLoopV <= vMatrice){

				
				caseMat = new MatriceCase.MatriceCase(initLoopV,initLoopH,EnumStatus.EnumStatus.STATUS_EMPTY);
				this.battleMatrice.add(caseMat);//çàdeconne
				console.log(caseMat);
				console.log( "(initLoopH:" + initLoopH + "|initLoopV:" + initLoopV + ")" );
				initLoopV++ ;
			}
			initLoopH++;
		    
		}
		
		console.log(this.battleMatrice);
	}
}