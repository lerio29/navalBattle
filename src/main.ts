
import * as Collections from 'typescript-collections';
import * as BattleMatrice from "./battleMatrice"; 
import * as MatriceCase from "./matriceCase"; 
import * as Ship from "./ship";
import * as Pa from "./porteAvion";
import * as EnumOrientation from "./enumOrientation";
import * as EnumStatus from "./enumStatus";
import * as BattleUtils from "./battleUtils";
import * as Player from "./player";
import * as Party from "./party";

//ajout des @types pour TypeScript
import * as Jsdom from "jsdom";
import * as Angular from "angular";
import * as $ from "jquery";


let player1 :Player.Player = new Player.Player("player1",undefined,new BattleMatrice.BattleMatrice(10));

let grillePlayer1: BattleMatrice.BattleMatrice = new BattleMatrice.BattleMatrice(10);

let paPosition: Collections.Dictionary<string,MatriceCase.MatriceCase> = new Collections.Dictionary<string,MatriceCase.MatriceCase>(); 
paPosition.setValue(BattleUtils.BattleUtils.generateKeyGridByVal(1,1),new MatriceCase.MatriceCase(1,1,EnumStatus.EnumStatus.STATUS_EMPTY));
paPosition.setValue(BattleUtils.BattleUtils.generateKeyGridByVal(2,1),new MatriceCase.MatriceCase(2,1,EnumStatus.EnumStatus.STATUS_EMPTY));
paPosition.setValue(BattleUtils.BattleUtils.generateKeyGridByVal(3,1),new MatriceCase.MatriceCase(3,1,EnumStatus.EnumStatus.STATUS_EMPTY));
paPosition.setValue(BattleUtils.BattleUtils.generateKeyGridByVal(4,1),new MatriceCase.MatriceCase(4,1,EnumStatus.EnumStatus.STATUS_EMPTY));
paPosition.setValue(BattleUtils.BattleUtils.generateKeyGridByVal(5,1),new MatriceCase.MatriceCase(5,1,EnumStatus.EnumStatus.STATUS_EMPTY));

let player1pa: Ship.Ship = new Pa.PorteAvion(paPosition,EnumOrientation.EnumOrientation.OR_HORIZONTAL);

grillePlayer1.addShip(player1pa);

//////////////////////////////

let player2 :Player.Player = new Player.Player("player2",undefined,new BattleMatrice.BattleMatrice(10));
let grillePlayer2: BattleMatrice.BattleMatrice = new BattleMatrice.BattleMatrice(10);

let paPosition2: Collections.Dictionary<string,MatriceCase.MatriceCase> = new Collections.Dictionary<string,MatriceCase.MatriceCase>(); 
paPosition2.setValue(BattleUtils.BattleUtils.generateKeyGridByVal(1,1),new MatriceCase.MatriceCase(1,1,EnumStatus.EnumStatus.STATUS_EMPTY));
paPosition2.setValue(BattleUtils.BattleUtils.generateKeyGridByVal(2,1),new MatriceCase.MatriceCase(2,1,EnumStatus.EnumStatus.STATUS_EMPTY));
paPosition2.setValue(BattleUtils.BattleUtils.generateKeyGridByVal(3,1),new MatriceCase.MatriceCase(3,1,EnumStatus.EnumStatus.STATUS_EMPTY));
paPosition2.setValue(BattleUtils.BattleUtils.generateKeyGridByVal(4,1),new MatriceCase.MatriceCase(4,1,EnumStatus.EnumStatus.STATUS_EMPTY));
paPosition2.setValue(BattleUtils.BattleUtils.generateKeyGridByVal(5,1),new MatriceCase.MatriceCase(5,1,EnumStatus.EnumStatus.STATUS_EMPTY));

let player2pa: Ship.Ship = new Pa.PorteAvion(paPosition,EnumOrientation.EnumOrientation.OR_HORIZONTAL);

grillePlayer2.addShip(player2pa);

/////////////////////////////

player1.setGrid(grillePlayer1);

player2.setGrid(grillePlayer2);

let party :Party.Party = new Party.Party(player1,player2);

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

