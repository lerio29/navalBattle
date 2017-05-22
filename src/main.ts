import * as BattleMatrice from "./battleMatrice"; 
import * as Jsdom from "jsdom";



let grille: BattleMatrice.BattleMatrice = new BattleMatrice.BattleMatrice(12);

let documentFragment:any = Jsdom.jsdom();

let elem:any = documentFragment.querySelector("#grid");

console.log(elem);