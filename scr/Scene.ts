enum Mode {
    Default, 
    Editor
}

class Scene {
    static mode = Mode.Default;
    static parlor: Scene;

    static Menus: {
        Main: Menu,
        None: Menu,
        Products: Menu
    }
    static menu: keyof typeof Scene.Menus = "None";

	static changeMenu() {};
    static changeMode() {};

	clause = (...menus: (typeof Scene.menu)[]) => menus.some((menu) => menu == Scene.menu) || Scene.menu == "None";
	constructor(
		public objects: GameObject[] = [],
        public buttons: GameButton[] = [],
	) {
		document.addEventListener("click", () => {
			if (this.clause()) buttons.forEach((btn) => btn.click());
		});
	}
	render() {
		if (this.clause("Products")) this.objects.forEach((object) => object.render());
	}
}


class Menu {};