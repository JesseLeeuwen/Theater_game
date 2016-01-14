function PlayerEquipment( positions )
{    
    this.arm;
   
    this.Start = function(object)
    {
        this.arm = GetImage("arm");
    }
   
    this.Update = function(dt, object)
    {        
    }
   
    this.Draw = function(ctx, object)   
    {
        ctx.save();        
        ctx.translate(object.x, object.y);
        
        for ( var i = 0; i < positions.length; ++i )
        {      
            for ( var j =  0; j < positions[i].length; ++j )                
                this.DrawLimb(ctx, i, j, j + 1);            
        }
        ctx.restore();
    }; 
    
    this.DrawLimb = function(ctx, i, from, to)
    {
        var pos1 = positions[i][from];
        var pos2 = positions[i][to];                       
        
        ctx.beginPath();
        ctx.fillStyle="#000";
        ctx.arc(pos1[0], -pos1[1], 4, 0, Math.PI * 2, false);
        ctx.fill()
        ctx.closePath();
        
        if ( pos2 != undefined )
        {                        
            ctx.beginPath();
            ctx.strokeStyle="#000";
            ctx.lineWidth=2;
            ctx.moveTo(pos1[0], -pos1[1]);
            ctx.lineTo(pos2[0], -pos2[1]);
            ctx.stroke();
            ctx.closePath();
        }               
    }
    
}

function Combat()
{
    this.Start =function()
    {
        
    };
    
    this.DrawGUI = function(ctx, object)
    {
        ctx.fillstyle = "#e33aaa";
        ctx.fillRect(5, 5, 100, 10);
    }
    
}