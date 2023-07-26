import { Scenes } from "../Config";
import { Menu } from "./Menu";
export class Load extends Phaser.Scene {
    constructor() {
        super({
            key: Scenes.Load
        })
    }

    init() {
        
    }
    preload() {
        this.load.bitmapFont("Menu", "./assets/fonts/ZealotLight")
    }
    create() {
        this.scene.add(Scenes.Menu, Menu, true, {text: 'hello'})

    }
    update() {
    }
}

