console.log("Test");
	var tiGreen = "#839383"
	var tiBlack = "#1d1b1b"
function startDraw() {
	var myGamePiece = new Array(96);
	drawArea.start();
	for (i=0;i<=95;i++){
		myGamePiece[i] = new Array(63);
		for (j=0;j<=63;j++){
			myGamePiece[i][j] = new component(i,j, tiGreen);
			myGamePiece[i][j].update();
			
			
		}
	}

addEventListener('click',function(evt){
var rect = document.getElementsByTagName('canvas')[0].getBoundingClientRect();
	myGamePiece[Math.round((evt.clientX-(rect.left))/4)-1][Math.round((evt.clientY-(rect.top))/4)-1].change();
	console.log("test");
});	
}
function post(){
var canvas = document.getElementsByTagName('canvas')[0];
var img    = canvas.toDataURL("image/png");
document.getElementById("testimage").insertAdjacentHTML("afterbegin",'<img style="margin-bottom: 5px" src="'+img+'"/>');
startDraw();

}

var drawArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 380;
        this.canvas.height = 252;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
    },
    clear : function() {
        startDraw();
    }

}
function component(x, y, color) {
	this.x = x*4;
	this.y = y*4;
	this.color = color;
	this.update = function() {
		ctx = drawArea.context;
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, 4, 4);
	}
	this.change = function() {
		ctx = drawArea.context;
		if (this.color == tiBlack){
			this.color = tiGreen;
			color = tiGreen;
			ctx.fillStyle = tiGreen;
		}
		else {
			this.color = tiBlack;
			ctx.fillStyle = tiBlack;
		}
		ctx.fillRect(this.x, this.y, 4, 4);
		console.log(this.color);
	}
		

	
}
startDraw();
