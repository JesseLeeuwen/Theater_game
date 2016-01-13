function World()
{
    this.scrollX = 0;
    this.thresshold = 320;
    this.entities = [];
    
    this.offset = 90 * (Math.PI / 180);              
    
    this.Start = function()
    {
        
        // load map
        for ( var i = 0; i < 16; ++i )
        {            
            this.entities[i] = new GameObject();
            this.entities[i].Start(bush, -100 + i * 50, 0, 20, 0, 1, 1, 0, 1, []);
        }                 
    };
    
    this.Update = function(dt)
    {
        if ( keys[37] == true && this.scrollX > 0)
            this.scrollX -= 0.5;
            
        if ( keys[39] == true )
            this.scrollX += 0.5;                       
    };
    
    this.Draw = function(ctx)
    {                                          
        ctx.fillStyle = "#3F48CC";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
         ctx.save();
        ctx.translate(canvas.width/2, canvas.height*0.9);
        ctx.rotate(background.time/20*Math.PI/180);
        ctx.drawImage(background.stars, -background.stars.width/2, -background.stars.height/2);
        ctx.restore();
        ctx.drawImage(background.gradient, 0, 0);
        
        ctx.fillStyle = "#888";
        for ( var i = 0; i < this.entities.length; ++i )
        {
            var d = this.scrollX - this.entities[i].x ;            
            
            if ( Math.abs( d ) < 220 )
            {   
                var tanAngle = Math.tan( -d / 200 ) - this.offset;
                ctx.fillRect( 
                   (canvas.width / 2) + ( Math.cos ( tanAngle ) * 320) - 20,
                    canvas.height * 1.20 + (Math.sin ( tanAngle ) * Math.min(100, 100 + (d / 10))) - 40, 
                    40, 40
                );                
            }
        }
                
        // draw background
        ctx.fillstyle = "#FFF";
        
        ctx.drawImage(background.ground, canvas.width/2 - background.ground.width/2, canvas.height*0.9 - background.ground.height/2);
        ctx.drawImage(background.rail, canvas.width/2 - background.rail.width/2, canvas.height - background.rail.height*0.6);
        
        ctx.drawImage(background.curtain, -background.curtain.width*0.3, 0);
        
        ctx.save();
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(background.curtain, -background.curtain.width*0.3, 0);
        ctx.restore();
    };
}