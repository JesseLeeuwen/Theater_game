function Movement(speed)
{   
    this.Init = function(object)    
    {
        //object.scaleX = 0;
    };
    
    this.Update = function(dt, object)
    {
        if ( keys[38] == true )
        {
            object.y -= speed * dt;
        }
        if ( keys[37] == true )
        {
            object.x -= speed * dt;
        }
        if ( keys[39] == true )
        {
            object.x += speed * dt;
        }
        if ( keys[40] == true )
        {
            object.y += speed * dt;
        }
    };
    
    this.Draw = function(ctx, object)
    {
        ctx.fillRect(object.x, object.y, 40, 40);
    };
}