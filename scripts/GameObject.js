function GameObject()
{    
    this.x = 0;
    this.y = 0;
    this.centerX;
    this.centerY;
    this.scaleX;
    this.scaleY;
    this.rot = 0;
    this.sprite;
    this.frames = 1;
    this.frame;  
    this.width;
    this.height;
    
    this.components = [];
       
    this.Init = function( sprite, x, y, centerX, centerY, scaleX, scaleY, rot, frames, components )
    {
        this.x = x;
        this.y = y;
        this.centerX = centerX;
        this.centerY = centerY;
        this.scaleX = scaleY;
                
        while( Math.abs(rot) > 360 )
        {
            rot = rot < 0 ? 360 - rot : rot - 360
        }
        this.rot = rot;
        this.sprite = sprite;
        
        this.frames = frames;
        this.frame = 0;
        
        this.components = components;
        
        this.height = this.sprite.height;
        this.width = this.sprite.width / this.frames;    
        
        for ( var i = 0; i < this.components.length; ++i )
            this.components[i].Init(this);           
    };    
    
    this.Update = function( dt )
    {             
        while( Math.abs(this.rot) > 360 )
        {
            this.rot = this.rot < 0 ? 360 - this.rot : this.rot - 360
        }                
        
        for ( var i = 0; i < this.components.length; ++i )
            this.components[i].Update(dt, this);    
            
        if ( this.frames > 1 )    
            this.frame = (this.frame + 1) % this.frames;
    }
    
    this.Draw = function( ctx )
    {        
        ctx.save();
        
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot * (Math.PI / 180))
        ctx.drawImage(this.sprite, this.frame * this.width, 0, this.width, this.height, -this.width / 2, -this.height / 2, this.width, this.height);
        
        ctx.restore();
    }
}   