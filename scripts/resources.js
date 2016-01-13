var images = [];
var imageCount = 0;
var sounds = [];
var soundCount = 0;

function loadResources()
{
    loadImage( "trunk", "sprites/trunk.png" );
    loadImage( "treeleaves", "sprites/treeleaves.png" );
    loadImage( "treeleavesshadow", "sprites/treeleavesshadow.png");
}

function ResourcesReady()
{
    for ( var i = 0; i < images.length; ++i )
        if ( images[i].ready == false )
            return false;
  
    for ( var i = 0; i < sounds.length; ++i )
        if ( sounds[i].ready == false )
            return false;
            
    return true;
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