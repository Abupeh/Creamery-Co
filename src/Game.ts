import Phaser from "phaser";
import { Load } from "./scenes/Load";
import { Menu } from "./scenes/Menu";

export const Game = new Phaser.Game({
	width: 600,
	height: 600,
	backgroundColor: 0x000000,
	scene: [Load],
});
