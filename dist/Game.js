"use strict";
var Game;
(function (Game) {
    Game.canvas = document.createElement("canvas");
    Game.canvas.width = window.innerWidth;
    Game.canvas.height = window.innerHeight;
    Game.ctx = Game.canvas.getContext("2d");
    document.body.append(Game.canvas);
    document.body.style.overflow = "hidden";
    Game.mousePos = {
        x: 0,
        y: 0,
    };
})(Game || (Game = {}));
// enum Menu {
// 	None,
// 	Reviews,
// 	Advertisements,
// 	Ingredients,
// 	Store,
// 	Selling,
// }
