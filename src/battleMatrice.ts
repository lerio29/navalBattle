import * as Collections from 'typescript-collections';
import * as MatriceCase from "./matriceCase"; 
import * as EnumStatus from "./enumStatus";

export class BattleMatrice {

	battleMatrice: Collections.Set<MatriceCase.MatriceCase>;

	constructor(sizeMatrice: number){

		let initLoopH: number = 0;			

		let hMatrice: number = sizeMatrice;
		let vMatrice: number = sizeMatrice;


		while(initLoopH <= hMatrice ){
			let initLoopV: number = 0;
			let vMatrice: number = sizeMatrice;		

			while(initLoopV <= vMatrice){
				//battleMatrice.battleMatrice.put;;;;//ajouter case dans la matrice
				this.battleMatrice = new Collections.Set<MatriceCase.MatriceCase>();
				let case: MatriceCase.MatriceCase = new MatriceCase(initLoopV,initLoopH,);
				this.battleMatrice.add(case);

				console.log("(" + initLoopH + ":" + initLoopV + ")");
				initLoopV++;
			}
			initLoopH++;
		}
	}
}