function World()
{
    this.scrollX = 0;
    this.thresshold = 320;
    this.entities = [];
    
    this.Start = function()
    {
        
        // load map
        this.entities[0] = new GameObject();
        this.entities[0].Start(bush, 0, 0, 20, 0, 1, 1, 0, 1, []);
        
        this.entities[1] = new GameObject();
        this.entities[1].Start(bush, 100, 0, 20, 0, 1, 1, 0, 1, []);    
        
        this.entities[2] = new GameObject();
        this.entities[2].Start(bush, 200, 0, 20, 0, 1, 1, 0, 1, []); 
    };
    
    this.Update = function(dt)
    {
        if ( keys[40] == true )
            --this.scrollX;
            
        if ( keys[38] == true )
            ++this.scrollX;                       
    };
    
    this.Draw = function(ctx)
    {                        
        var offset = 90 * (Math.PI / 180);                
         
        for ( var i = 0; i < this.entities.length; ++i )
        {
            var d = this.scrollX - this.entities[i].x ;
            console.log(d);
            
            if ( Math.abs( d ) < 220 )
            {   
                var tanAngle = Math.tan( -d / 200 ) - offset;
                ctx.fillStyle = "#888";
                ctx.fillRect( 
                   (canvas.width / 2) + ( Math.cos ( tanAngle ) * 320) - 20,
                    canvas.height * 1.20 + (Math.sin ( tanAngle ) * Math.min(100, 100 + (d / 10))) - 40, 
                    40, 40
                );
                ctx.fillStyle="#222";
                ctx.fillRect( 
                   (canvas.width / 2) + ( Math.cos ( tanAngle ) * 320) - 5,
                    canvas.height * 1.20 + (Math.sin ( tanAngle ) * Math.min(100, 100 + (d / 10))) - 5, 
                    10, 10
                );
            }
        }
        
    };
}