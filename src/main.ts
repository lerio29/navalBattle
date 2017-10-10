
import * as Collections from 'typescript-collections';
import * as BattleMatrice from "./battleMatrice"; 

//ajout des @types pour TypeScript
import * as Jsdom from "jsdom";
import * as Angular from "angular";
import * as $ from "jquery";


let grillePlayer1: BattleMatrice.BattleMatrice = new BattleMatrice.BattleMatrice(10);
// grillePlayer1.addShip(new Ship());

// let grillePlayer2: BattleMatrice.BattleMatrice = new BattleMatrice.BattleMatrice(10);

// let documentFragment:any = Jsdom.jsdom();

// let elem:any = documentFragment.querySelector(".grid");




for(let item of grillePlayer1.getMatrice.toArray()) {
	console.log("item : " + item.toString());
}


// console.log($(".grid").attr("toto-data"));

// console.log("eleme : "+ elem);

