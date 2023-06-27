"use strict";
class GameTexture {
    text;
    image = new Image();
    constructor(src, text) {
        this.text = text;
        this.image.src = `../assets/${src}.png`;
    }
}
const gridSize = 50;
class GameObject {
    vector;
    variations;
    selected;
    constructor(vector = [{ x: 0, y: 0 }], variations, selected = 0) {
        this.vector = vector;
        this.variations = variations;
        this.selected = selected;
    }
    get texture() {
        return this.variations[this.selected].texture;
    }
    set texture(texture) {
        this.variations[this.selected].texture = texture;
    }
    render() {
    }
}
class GameButton {
    click() {
    }
}
;
const grid = [];
