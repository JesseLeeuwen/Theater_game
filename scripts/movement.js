function Movement(speed)
{   
    this.Start = function(object)    
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
        ctx.save();
        ctx.translate(object.x, object.y);
        ctx.rotate(object.rot * (Math.PI / 180))
        ctx.fillRect(-object.centerX, -object.centerY, 40, 40);
        ctx.restore();
    };
}