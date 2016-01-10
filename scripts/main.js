var timer;
var delay = 1000.0 / 60.0;

var objects = [];
var objectCount = 0;

var keys = [];

var canvas;
var ctx;

var background;

var bush = new Image();
bush.src = "sprites/bush.png";

function Start()
{
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    
    canvas.addEventListener('keyup', keyUpListener,false);
    canvas.addEventListener('keydown', keyDownListener,false);     
    canvas.setAttribute('tabindex','0');
    canvas.focus();
    
    background = new Stage();
    
    // Instantiate(bush, 30, 30, 20, 20, 1, 1, 45, 1, [new Movement(125)]);
    
    Instantiate(undefined, 50, 91, 0, 0, 1,1,0, 0, [new PlayerEquipment(player), new Movement(125)]);
    
    timer = setTimeout(GameLoop, delay);
} 

function Update()
{
    background.Update()
    
    for(var i=0; i < objectCount; ++i)
        objects[i].Update(delay / 1000.0);       
} 

function Draw()
{
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    background.Draw(ctx);
    
    for(var i=0; i < objectCount; ++i)
        objects[i].Draw(ctx);
    
    /*ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(canvas.width * 0.5, canvas.height * 0.5, canvas.height * 0.4, 0, Math.PI, true);
    ctx.closePath();
    ctx.fill();*/
} 

function GameLoop()
{
    Update();
    Draw();
    
    timer = setTimeout(GameLoop, delay);
}

function Instantiate( sprite, x, y, centerX, centerY, scaleX, scaleY, rot, frames, components )
{
    objects[objectCount] = new GameObject();
    objects[objectCount].Start( sprite, x, y, centerX, centerY, scaleX, scaleY, rot, frames, components );     
    objectCount++;  
}

function keyDownListener(e)
{ 
    keys[e.keyCode] = true;
}

function keyUpListener(e)
{
    keys[e.keyCode] = false;
}