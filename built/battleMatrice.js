"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collections = require("typescript-collections");
var MatriceCase = require("./matriceCase");
var EnumStatus = require("./enumStatus");
var BattleMatrice = (function () {
    function BattleMatrice(sizeMatrice) {
        var initLoopH = 1;
        var hMatrice = sizeMatrice;
        var vMatrice = sizeMatrice;
        this.battleMatrice = new Collections.Set();
        var caseMat;
        while (initLoopH <= hMatrice) {
            var initLoopV = 1;
            while (initLoopV <= vMatrice) {
                caseMat = new MatriceCase.MatriceCase(initLoopV, initLoopH, EnumStatus.EnumStatus.STATUS_EMPTY);
                this.battleMatrice.add(caseMat); //çàdeconne
                console.log(caseMat);
                console.log("(initLoopH:" + initLoopH + "|initLoopV:" + initLoopV + ")");
                initLoopV++;
            }
            initLoopH++;
        }
        console.log(this.battleMatrice);
    }
    return BattleMatrice;
}());
exports.BattleMatrice = BattleMatrice;
