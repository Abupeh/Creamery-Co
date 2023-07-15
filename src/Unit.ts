enum UnitType {
    Unit,
	Wall,
	Player,
}

abstract class Unit {
    readonly type!: UnitType;
 	constructor(public pos: Vector[]) {}
}

class Wall extends Unit {
    readonly type = UnitType.Wall;

	collide() {}
}

class Player extends Unit {
    readonly type = UnitType.Player;
    constructor(public pos: Vector[], public speed: number) {
        super(pos);
    }

    move() {
        this.pos.map(pos => {
            
        })
    }
}


interface Vector {
	x: number;
	y: number;
}
