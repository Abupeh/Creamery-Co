"use strict";
var UnitType;
(function (UnitType) {
    UnitType[UnitType["Unit"] = 0] = "Unit";
    UnitType[UnitType["Wall"] = 1] = "Wall";
    UnitType[UnitType["Player"] = 2] = "Player";
})(UnitType || (UnitType = {}));
class Unit {
    pos;
    type;
    constructor(pos) {
        this.pos = pos;
    }
}
class Wall extends Unit {
    type = UnitType.Wall;
    collide() { }
}
class Player extends Unit {
    pos;
    speed;
    type = UnitType.Player;
    constructor(pos, speed) {
        super(pos);
        this.pos = pos;
        this.speed = speed;
    }
    move() {
        this.pos.map(pos => {
        });
    }
}
