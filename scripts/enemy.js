function Enemy()
{
    //sprites
    this.body = new Image();
    this.body.src = "sprites/crab/body.png";
    this.leftLeg = new Image();
    this.leftLeg.src = "sprites/crab/leftLeg.png";
    this.rightLeg = new Image();
    this.rightLeg.src = "sprites/crab/rightLeg.png";
    this.leftArm = new Image();
    this.leftArm.src = "sprites/crab/leftArm.png";
    this.rightArm = new Image();
    this.rightArm.src = "sprites/crab/rightArm.png";
    this.leftHand = new Image();
    this.leftHand.src = "sprites/crab/leftHand.png";
    this.rightHand = new Image();
    this.rightHand.src = "sprites/crab/rightHand.png";
    
    this.dot = new Image();
    this.dot.src = "sprites/crab/dot.png";
    
    //variables
    this.time = 0;
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    this.yspd = 0;
    this.grav = 0;
    
    this.Start = function()
    {
        
    }
    
    this.Update = function()
    {
        this.time ++;
        this.x = (1-0.23)*this.x+0.23*mouseX;
        this.y += this.grav;
        if (this.y > canvas.height*0.7)
        {
            this.grav = -5;
        }
        this.grav += 0.23;
        this.yspd = (1-0.23)*this.yspd+0.23*(-this.grav*3);
        console.log(this.grav);
    }
    
    this.Draw = function()
    {
        ctx.drawImage(this.body, this.x-this.body.width/2, this.y-this.body.height/2);
        var rot = ((this.yspd)*180/Math.PI)*0.001;//*Math.sin(this.time/20)*0.01;
        ctx.save();
        ctx.translate(this.x-this.body.width/2+3, this.y +2);
        ctx.rotate(180/Math.PI*Math.sin(this.time/20)*0.001);
        ctx.drawImage(this.leftLeg, -10, -3);
        ctx.restore();
        
        ctx.save();
        ctx.translate(this.x+this.body.width/2+3, this.y +2);
        ctx.rotate(180/Math.PI*Math.cos(this.time/25)*0.0015);
        ctx.drawImage(this.rightLeg, -10, -3);
        ctx.restore();
          
        ctx.save();
        ctx.translate(this.x+18, this.y-1);
        ctx.rotate(rot);
        
        ctx.save();
        ctx.translate(4,-14)
        ctx.rotate(-rot);
        ctx.drawImage(this.rightHand, -7,-7);
        ctx.restore();
        
        ctx.drawImage(this.rightArm, 0, -30);
        ctx.restore();

        
        ctx.save();
        ctx.translate(this.x-this.body.width/2+1,this.y-1); 
        ctx.rotate(-rot);
        
        ctx.save();
        ctx.translate(0, -11);
        ctx.rotate(-rot);
        ctx.drawImage(this.leftHand, -1, -9);
        ctx.restore();
        
        ctx.drawImage(this.leftArm, -12, -25);
        ctx.restore();
    }
}