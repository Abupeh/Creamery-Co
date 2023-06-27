render();
function render() {
    Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
    Scene.counter.render();
    window.requestAnimationFrame(render);
}
