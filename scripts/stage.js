function Stage()
{
    this.trunk = new Image();
    this.trunk.src = "sprites/trunk.png";
    this.trunkshadow = new Image();
    this.trunkshadow.src = "sprites/trunkshadow.png";
    this.treeLeaves = new Image();
    this.treeLeaves.src = "sprites/treeLeaves.png";
    this.treeLeavesshadow = new Image();
    this.treeLeavesshadow.src = "sprites/treeLeavesshadow.png";
    this.darktrunk = new Image();
    this.darktrunk.src = "sprites/darktrunk.png";
    this.darktrunkshadow = new Image();
    this.darktrunkshadow.src = "sprites/darktrunkshadow.png";
    this.darktreeLeaves = new Image();
    this.darktreeLeaves.src = "sprites/darktreeLeaves.png";
    this.ground = new Image();
    this.ground.src = "sprites/ground.png";
    this.bush = new Image();
    this.bush.src = "sprites/bush.png";
    this.star = new Image();
    this.star.src = "sprites/star.png";
    this.star2 = new Image();
    this.star2.src = "sprites/star2.png";
    this.stars = new Image();
    this.stars.src = "sprites/stars.png";
    this.planks = new Image();
    this.planks.src = "sprites/planks.png";
    this.stick = new Image();
    this.stick.src = "sprites/stick.png";
    this.rail = new Image();
    this.rail.src = "sprites/rail.png";
    this.curtain = new Image();
    this.curtain.src = "sprites/curtain.png";
    this.speachbubble = new Image();
    this.speachbubble.src = "sprites/tekstbalon.png";
    this.font = new Image();
    this.font.src = "sprites/coollettertype.png";
    this.gradient = new Image();
    this.gradient.src = "sprites/gradient.png";

    this.treeLeavesx = 0;
    this.treeLeavesy = 0;
    this.time = 0;
    var j = [];
    j[0] = 0;
    j[1] = 128;
    j[2] = 300;

    this.Start = function()
    {
        
    }
    
    this.Update = function()
    {
        this.time++;
    }
    
    this.Draw = function(ctx)
    {
        var rot = (Math.sin(this.time/100)*2)*Math.PI/180;
        var starScale = 0.05;
        for(var i = 0; i < 3; i++)
        {
            j[i] += (1+i)*0.3;
            if (j[i] > canvas.width+this.star.width)
                j[i] = -this.star.width;
        }
        
        //draw background sky
        ctx.fillStyle = "#3F48CC";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        //draw star background
        ctx.drawImage(this.planks, 0, 0);
        
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height*0.9);
        ctx.rotate(this.time/10*Math.PI/180);
        ctx.drawImage(this.stars, -this.stars.width/2, -this.stars.height/2);
        ctx.restore();
        ctx.drawImage(this.gradient, 0, 0);
        
        //draw stars
        /*ctx.save();
        var i = Math.sin(this.time/30)*8;
        ctx.translate(canvas.width*0.7-Math.cos(this.time/20)*5, canvas.height*0.5+i);
        ctx.drawImage(this.stick, -8, 0);
        //ctx.scale(1+Math.cos(this.time/100)*starScale, 1+Math.sin(this.time/100)*starScale);
        ctx.drawImage(this.star2,  -this.star.width/2,  -this.star.height/2);
        ctx.restore();
        
        ctx.save();
        var i = Math.sin(this.time/60)*6;
        ctx.translate(canvas.width*0.2-Math.cos(this.time/50)*10, canvas.height*0.5+i);
        ctx.drawImage(this.stick, 0, 0);
        //ctx.scale(1+Math.sin(this.time/100)*starScale, 1+Math.cos(this.time/100)*starScale);
        ctx.drawImage(this.star,  -this.star.width/2,  -this.star.height/2);
        ctx.restore();*/
        
        ctx.save();
        ctx.translate(canvas.width*0.5-Math.cos(this.time/40)*3, canvas.height*0.73-Math.cos(this.time/70)*2);
        ctx.drawImage(this.bush,  -this.bush.width*1.5,  -this.bush.height/2);
        ctx.drawImage(this.bush,  this.bush.width*0.6,  -this.bush.height/2);
        ctx.restore();
        
        //draw tree trunk
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height*0.9);
        ctx.rotate(rot);
        ctx.drawImage(this.trunkshadow, -this.trunk.width/2+8, -this.trunk.height);
        ctx.drawImage(this.trunk, -this.trunk.width/2, -this.trunk.height);       
        ctx.rotate(-rot*3);
        ctx.drawImage(this.darktrunkshadow, -canvas.width*0.4+8, -this.trunk.height);
        ctx.drawImage(this.darktrunk, -canvas.width*0.4, -this.trunk.height);
        ctx.rotate(rot*3);
        ctx.drawImage(this.darktrunkshadow, canvas.width*0.2+8, -this.trunk.height);
        ctx.drawImage(this.darktrunk, canvas.width*0.2, -this.trunk.height);
        ctx.restore();
        
        ctx.save();
        ctx.translate(canvas.width*0.1, canvas.height*0.9);
        ctx.translate(-Math.sin(-rot)*-this.trunk.height, Math.cos(-rot)*-this.trunk.height*0.7);
        ctx.rotate(-rot);
        ctx.drawImage(this.treeLeavesshadow, -canvas.width*0.5+8, -this.darktreeLeaves.height*0.8);
        ctx.drawImage(this.darktreeLeaves, -canvas.width*0.5, -this.darktreeLeaves.height*0.8);
        ctx.restore();
        
        ctx.save();
        ctx.translate(canvas.width*0.1, canvas.height*0.9);
        ctx.translate(-Math.sin(rot)*-this.trunk.height, Math.cos(rot)*-this.trunk.height*0.7);
        ctx.rotate(rot);
        ctx.drawImage(this.treeLeavesshadow, canvas.width*0.5+4, -this.darktreeLeaves.height*0.7+6);
        ctx.drawImage(this.darktreeLeaves, canvas.width*0.5, -this.darktreeLeaves.height*0.7);
        ctx.restore();
        
        //draw tree leaves
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height*0.9);
        ctx.translate(-Math.sin(rot)*-this.trunk.height, Math.cos(rot)*-this.trunk.height);
        ctx.rotate(-rot);
        //ctx.drawImage(this.treeLeavesshadow, -this.treeLeaves.width/2+8, -this.treeLeaves.height*0.5);
        ctx.drawImage(this.treeLeaves, -this.treeLeaves.width/2, -this.treeLeaves.height*0.5);
        ctx.restore();
        
        //draw floor
        ctx.drawImage(this.ground, canvas.width/2 - this.ground.width/2, canvas.height*0.9 - this.ground.height/2);
        ctx.drawImage(this.rail, canvas.width/2 - this.rail.width/2, canvas.height - this.rail.height*0.6);
        ctx.drawImage(this.curtain, -this.curtain.width*0.3, 0);
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.scale(1+Math.cos(this.time/40)*0.03, 1+Math.sin(this.time/70)*0.02);
        //ctx.drawImage(this.speachbubble, -this.speachbubble.width/2, -this.speachbubble.height/2);
        ctx.restore();
        ctx.save();
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(this.curtain, -this.curtain.width*0.3, 0);
        ctx.restore();
        
        var s = "i have lost the script";
		for(var i = 0; i < s.length; i++)
		{
			ctx.drawImage(this.font, (s.charCodeAt(i)-97)*24, 0, 24, 24, canvas.width/2+(i*12)-(s.length/2*12)+Math.cos((this.time/50)*2+i), canvas.height-28+Math.sin((this.time/50)*2+i), 24, 24);
		}
        console.log(s.charCodeAt(7));
    }
}