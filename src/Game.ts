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


    export let gravityX = 0;
    export let gravityY = 0;

    window.addEventListener('deviceorientation', handleOrientationEvent, true);

    let ballx = 0;
    let bally = 0;
    let initialX: any = null;
    let initialY: any = null;
    function handleOrientationEvent(event: any) {

        var x = event.beta ? event.beta : event.y * 90;
        var y = event.gamma ? event.gamma : event.x * 90;
  
        window.console && console.info('Raw position: x, y: ', x, y);
  
        if (!initialX && !initialY) {
  
          initialX = x;
          initialY = y;
  
        } else {
  
          var positionX = initialX - x;
          var positionY = initialY - y;
  
          ballx = (90 + positionX * 5);
          bally = (90 + positionY * 5);

        }
      }



    render()
    export function render() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText(gravityX.toString(), 10, 10)
        ctx.fillText(gravityY.toString(), 20, 10);

        ctx.beginPath();
        ctx.arc(ballx, bally, 10, 0, 2 * Math.PI, false);

        ctx.arc(100, 100, 10, 0, 2 * Math.PI, false);
        ctx.fill();




        window.requestAnimationFrame(render)
    }
}