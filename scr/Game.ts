namespace Game {
	export const canvas = document.createElement("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	export const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
	document.body.append(canvas);
	document.body.style.overflow = "hidden";
	
	export const mousePos = {
		x: 0,
		y: 0,
	};


}

// enum Menu {
// 	None,
// 	Reviews,
// 	Advertisements,
// 	Ingredients,
// 	Store,
// 	Selling,
// }
