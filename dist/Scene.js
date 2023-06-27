"use strict";
var Mode;
(function (Mode) {
    Mode[Mode["Default"] = 0] = "Default";
    Mode[Mode["Editor"] = 1] = "Editor";
})(Mode || (Mode = {}));
class Scene {
    objects;
    buttons;
    static mode = Mode.Default;
    static parlor;
    static Menus;
    static menu = "None";
    static changeMenu() { }
    ;
    static changeMode() { }
    ;
    clause = (...menus) => menus.some((menu) => menu == Scene.menu) || Scene.menu == "None";
    constructor(objects = [], buttons = []) {
        this.objects = objects;
        this.buttons = buttons;
        document.addEventListener("click", () => {
            if (this.clause())
                buttons.forEach((btn) => btn.click());
        });
    }
    render() {
        if (this.clause("Products"))
            this.objects.forEach((object) => object.render());
    }
}
class Menu {
}
;
