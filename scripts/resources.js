var images = [];
var imageCount = 0;
var sounds = [];
var soundCount = 0;

function loadResources()
{
    loadImage( "arm", "sprites/arm.png" );
}

function loadImage(name, path)
{
    images[imageCount] = new Image();
    images[imageCount].src = path;
    images[imageCount].name = name;
    images[imageCount].ready = false;
    images[imageCount].onload = resourceLoaded;
    imageCount++;    
}

function loadSound(name, path)
{
    
}

function GetSound(name)
{
     for ( var i = 0; i < soundCount; ++i )
    {
        if ( sounds[i].name == name )
            return sounds[i];
    }
}

function GetImage(name)
{
    for ( var i = 0; i < imageCount; ++i )
    {
        if ( images[i].name == name )
            return images[i];
    }
}

function resourceLoaded()
{
    console.log ("ready");
    this.ready = true;
}