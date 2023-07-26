import { Scenes } from "../Config";
export class Menu extends Phaser.Scene {
    constructor() {
        super({
            key: Scenes.Menu
        })
    }
    font = "Menu"

    init(data: { text: string }) {
        console.log(data.text)
    }
    create() {
        this.add.text(10, 10, "SHIFT", { font: this.font })
    }
}
