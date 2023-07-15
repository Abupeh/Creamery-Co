interface Vector {
	x: number;
	y: number;
}


class GameTexture {
	image = new Image();
	constructor(
		src: string,
		public text?: GameText
	) {
		this.image.src = `../assets/${src}.png`;
	}
}

type Clause = () => boolean;

interface GameText {
	text: string;
	x: number,
	y: number
	size: number;
}


interface GameType {
    texture: GameTexture, 
    clauses: Clause[]
}

const gridSize = 50;

class GameObject {
    constructor(
        public vector: Vector[] = [{ x: 0, y: 0 }],
        public variations: GameType[],
        public selected: number = 0
    ) {

    }
    get texture() {
        return this.variations[this.selected].texture;
    }
    set texture(texture: GameTexture) {
        this.variations[this.selected].texture = texture;
    }

    render() {
        
    }
}

class GameButton {
    click() {
        
    }
};

const grid: GameObject[] = [];
