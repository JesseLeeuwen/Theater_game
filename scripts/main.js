var timer;
var delay = 1000.0 / 30.0;

var objects = [];
var objectCount = 0;

var keys = [];

var canvas;
var ctx;

var background;

var bush = new Image();
bush.src = "sprites/bush.png";

var world;

function Start()
{
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    
    canvas.addEventListener('keyup', keyUpListener,false);
    canvas.addEventListener('keydown', keyDownListener,false);     
    canvas.setAttribute('tabindex','0');
    canvas.focus();
    
    loadResources();
    world = new World();
    world.Start();
    background = new Stage();
    
    Instantiate(undefined, 50, 91, 0, 0, 1,1,0, 0, [new PlayerEquipment(player), new Combat()]);
    
    timer = setTimeout(GameLoop, delay);
} 

function Update()
{   
    background.Update()
    
    world.Update(); // woerttel
    
    for(var i=0; i < objectCount; ++i)
        objects[i].Update(delay / 1000.0);       
} 

function Draw()
{
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    //background.Draw(ctx);
    world.Draw(ctx);
    
    //for ( var i=0; i < objectCount; ++i )
        //objects[i].Draw(ctx);
    
    /*for ( var i=0; i < objectCount; ++i )
        objects[i].DrawGUI(ctx);*/
} 

function GameLoop()
{
    if ( ResourcesReady() == false )
    {
        timer = setTimeout(GameLoop, delay);
        return;
    }
    
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