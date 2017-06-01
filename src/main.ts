import * as Collections from 'typescript-collections';
import * as BattleMatrice from "./battleMatrice"; 
// import * as Jsdom from "jsdom";
import * as $ from "jquery";



let grille: BattleMatrice.BattleMatrice = new BattleMatrice.BattleMatrice(12);

// let documentFragment:any = Jsdom.jsdom();

// let elem:any = documentFragment.querySelector(".grid");


for (var horLoop in grille.getMatrice.forEach) {
	console.log("loop: " + horLoop.toString );
}


console.log($(".grid").attr("toto-data"));

// console.log("eleme : "+ elem);

