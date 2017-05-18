import * as MatriceCase from "matriceCase"; 

export default class BattleMatrice {

	let battleMatrice = '{"battleCases":[]}';

	constructor(sizeMatrice){

		let initLoopH = 0;			

		let hMatrice = sizeMatrice,
		vMatrice = sizeMatrice;


		while(initLoopH <= hMatrice ){
			let initLoopV = 0,
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