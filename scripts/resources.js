var images = [];
var imageCount = 0;
var sounds = [];
var soundCount = 0;
var readyAssets = 0;

function loadResources()
{
    LoadImage( "trunk" );
    LoadImage( "trunkshadow" );
    LoadImage( "darktrunk" );
    LoadImage( "darktrunkshadow" );
    
    LoadImage( "treeleaves" );
    LoadImage( "treeleavesshadow" );
    LoadImage( "darktreeleaves" );
    
    LoadImage( "ground" );
    LoadImage( "bush" );
    LoadImage( "star" );
    LoadImage( "star2" );
    LoadImage( "stars" );
    LoadImage( "planks" );
    LoadImage( "stick" );
    LoadImage( "rail" );  
    LoadImage( "curtain" );
    LoadImage( "tekstbalon" );
    LoadImage( "coollettertype" );
    LoadImage( "gradient" );   
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

function LoadImage(name)
{
    images[imageCount] = new Image();
    images[imageCount].src = "sprites/" + name + ".png";
    images[imageCount].name = name;
    images[imageCount].ready = false;
    images[imageCount].onload = ResourceLoaded;
    imageCount++;    
}

function LoadSound(name, path)
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

function ResourceLoaded()
{
    console.log ("ready");
    ++readyAssets;
    this.ready = true;
}