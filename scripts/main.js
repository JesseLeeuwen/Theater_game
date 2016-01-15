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

var enemy;
var world;

var mouseX = 0;
var mouseY = 0;

function Start()
{
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    
    canvas.addEventListener('keyup', keyUpListener,false);
    canvas.addEventListener('keydown', keyDownListener,false);     
    canvas.addEventListener('mousemove', mouseListener,false);
    canvas.setAttribute('tabindex','0');
    canvas.focus();
    
    loadResources();
    world = new World();
    world.Start();
    background = new Stage();
    
    Instantiate(undefined, 50, 91, 0, 0, 1,1,0, 0, [new PlayerEquipment(player), new Combat()]);
    
    enemy = new Enemy();
    GameLoop();
} 

function Update()
{   
    background.Update()
    
    world.Update(); // woerttel
    
    for(var i=0; i < objectCount; ++i)
        objects[i].Update(delay / 1000.0);       
    enemy.Update();
} 

function Draw()
{
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    //background.Draw(ctx);
    world.Draw(ctx);
    
    // Objects
    for ( var i=0; i < objectCount; ++i )
        objects[i].Draw(ctx);
    
    // curtains
    ctx.drawImage(background.curtain, -background.curtain.width*0.3, 0);
        
    ctx.save();
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(background.curtain, -background.curtain.width*0.3, 0);
    ctx.restore();
    
    // GUI
    ctx.fillStyle = "#FFF";
    for ( var i=0; i < objectCount; ++i )
        objects[i].DrawGUI(ctx);
    enemy.Draw();
} 

function GameLoop()
{
    if ( ResourcesReady() == false )
    {        
        ctx.fillStyle = "#FFF";
        ctx.strokeStyle = "#888";
        ctx.rect(canvas.width * 0.25, canvas.height * 0.5 - 20, canvas.width * 0.5, 30);
        ctx.stroke();
        ctx.fillRect(
            canvas.width * 0.25 + 5, 
            canvas.height * 0.5 - 15, 
            (canvas.width * 0.5 - 10) * (readyAssets / (imageCount + soundCount)), 
            20
        );
        
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

function mouseListener(e)
{
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
}