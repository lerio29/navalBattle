
import * as Collections from 'typescript-collections';
import * as BattleMatrice from "./battleMatrice"; 
import * as MatriceCase from "./matriceCase"; 
import * as Ship from "./ship";
import * as Pa from "./porteAvion";

//ajout des @types pour TypeScript
import * as Jsdom from "jsdom";
import * as Angular from "angular";
import * as $ from "jquery";




let grillePlayer1: BattleMatrice.BattleMatrice = new BattleMatrice.BattleMatrice(10);
// let player1pa: Ship.Ship = new Pa.PorteAvion();

// grillePlayer1.addShip(new Pa.PorteAvion(new Collections.Dictionary<string,MatriceCase.MatriceCase>()));

// let grillePlayer2: BattleMatrice.BattleMatrice = new BattleMatrice.BattleMatrice(10);




// let documentFragment:any = Jsdom.jsdom();

// let elem:any = documentFragment.querySelector(".grid");



//TODO
for(let item in grillePlayer1.getMatrice.values) {
	console.log("item : " + item.toString);
}


// console.log($(".grid").attr("toto-data"));

// console.log("eleme : "+ elem);

