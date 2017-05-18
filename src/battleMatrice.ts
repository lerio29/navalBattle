import * as MatriceCase from "matriceCase"; 

export default class BattleMatrice {

	let battleMatrice = '{"battleCases":[]}';

	constructor(sizeMatrice){

		let initLoopH: number = 0;			

		let hMatrice: number = sizeMatrice,
		vMatrice: number = sizeMatrice;


		while(initLoopH <= hMatrice ){
			let initLoopV: number = 0,
			vMatrice = sizeMatrice;		

			while(initLoopV <= vMatrice){
				//battleMatrice.battleMatrice.put;;;;//ajouter case dans la matrice
				console.log("(" + initLoopH + ":" + initLoopV + ")");
				initLoopV++;
			}
			initLoopH++;
		}
	}
}