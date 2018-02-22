
import * from 'navalBattle';

//ajout des @types pour TypeScript
import * as Jsdom from "jsdom";
import * as Angular from "angular";
import * as $ from "jquery";


let player1 :Player = new Player("player1",undefined,new BattleMatrice(10));

let grillePlayer1: BattleMatrice = new BattleMatrice(10);

let paPosition: Dictionary<string,MatriceCase> = new Dictionary<string,MatriceCase>(); 
paPosition.setValue(BattleUtils.generateKeyGridByVal(1,1),new MatriceCase(1,1,EnumStatus.STATUS_EMPTY));
paPosition.setValue(BattleUtils.generateKeyGridByVal(2,1),new MatriceCase(2,1,EnumStatus.STATUS_EMPTY));
paPosition.setValue(BattleUtils.generateKeyGridByVal(3,1),new MatriceCase(3,1,EnumStatus.STATUS_EMPTY));
paPosition.setValue(BattleUtils.generateKeyGridByVal(4,1),new MatriceCase(4,1,EnumStatus.STATUS_EMPTY));
paPosition.setValue(BattleUtils.generateKeyGridByVal(5,1),new MatriceCase(5,1,EnumStatus.STATUS_EMPTY));

let player1pa: Ship = new PorteAvion(paPosition,EnumOrientation.OR_HORIZONTAL);
if(BattleUtils.checkPosition(player1pa.calculStartCase(player1pa)) &&
	BattleUtils.checkPosition(player1pa.calculEndCase(player1pa)) ){

	grillePlayer1.addShip(player1pa);
}else{
	Console.log("Navire mal positionné");
}



//////////////////////////////

let player2 :Player = new Player("player2",undefined,new BattleMatrice(10));
let grillePlayer2: BattleMatrice = new BattleMatrice(10);

let paPosition2: Dictionary<string,MatriceCase> = new Dictionary<string,MatriceCase>(); 
paPosition2.setValue(BattleUtils.generateKeyGridByVal(1,1),new MatriceCase(1,1,EnumStatus.STATUS_EMPTY));
paPosition2.setValue(BattleUtils.generateKeyGridByVal(2,1),new MatriceCase(2,1,EnumStatus.STATUS_EMPTY));
paPosition2.setValue(BattleUtils.generateKeyGridByVal(3,1),new MatriceCase(3,1,EnumStatus.STATUS_EMPTY));
paPosition2.setValue(BattleUtils.generateKeyGridByVal(4,1),new MatriceCase(4,1,EnumStatus.STATUS_EMPTY));
paPosition2.setValue(BattleUtils.generateKeyGridByVal(5,1),new MatriceCase(5,1,EnumStatus.STATUS_EMPTY));

let player2pa: Ship = new PorteAvion(paPosition,EnumOrientation.OR_HORIZONTAL);

if(BattleUtils.checkPosition(player2pa.calculStartCase(player1pa)) &&
	BattleUtils.checkPosition(player2pa.calculEndCase(player1pa)) ){
	
	grillePlayer2.addShip(player2pa);
}else{
	Console.log("Navire mal positionné");
}


/////////////////////////////

player1.grid = grillePlayer1;

player2.grid = grillePlayer2;

let party :Party = new Party(player1,player2);

party.hit(player1, player2, 1, 1);
party.hit(player2, player1, 1, 1);






// let grillePlayer2: BattleMatrice.BattleMatrice = new BattleMatrice.BattleMatrice(10);




// let documentFragment:any = Jsdom.jsdom();

// let elem:any = documentFragment.querySelector(".grid");


for(let tmpKey  in grillePlayer1.getMatrice.keys()){
	console.log("key : " + tmpKey);
	// console.log("valhor : " + grillePlayer1.getMatrice.getValue(tmpKey).hor);
	// console.log("valvert : " + grillePlayer1.getMatrice.getValue(tmpKey).vert);
	// console.log("valstat : " + grillePlayer1.getMatrice.getValue(tmpKey).state);

}



// console.log($(".grid").attr("toto-data"));

// console.log("eleme : "+ elem);

