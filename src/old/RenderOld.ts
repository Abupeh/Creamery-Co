render();
function render() {
    Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    window.requestAnimationFrame(render);
}
