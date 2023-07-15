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
    Game.gravityX = 0;
    Game.gravityY = 0;
    window.addEventListener('deviceorientation', handleOrientationEvent, true);
    let ballx = 0;
    let bally = 0;
    let initialX = null;
    let initialY = null;
    function handleOrientationEvent(event) {
        var x = event.beta ? event.beta : event.y * 90;
        var y = event.gamma ? event.gamma : event.x * 90;
        window.console && console.info('Raw position: x, y: ', x, y);
        if (!initialX && !initialY) {
            initialX = x;
            initialY = y;
        }
        else {
            var positionX = initialX - x;
            var positionY = initialY - y;
            ballx = (90 + positionX * 5);
            bally = (90 + positionY * 5);
        }
    }
    render();
    function render() {
        Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
        Game.ctx.fillText(Game.gravityX.toString(), 10, 10);
        Game.ctx.fillText(Game.gravityY.toString(), 20, 10);
        Game.ctx.beginPath();
        Game.ctx.arc(ballx, bally, 10, 0, 2 * Math.PI, false);
        Game.ctx.arc(100, 100, 10, 0, 2 * Math.PI, false);
        Game.ctx.fill();
        window.requestAnimationFrame(render);
    }
    Game.render = render;
})(Game || (Game = {}));
