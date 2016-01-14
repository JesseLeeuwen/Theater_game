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
    
    //variables
    this.time = 0;
    this.x = canvas.width/2;
    this.y = canvas.height/2;
    
    this.Start = function()
    {
        
    }
    
    this.Update = function()
    {
        this.time ++;
    }
    
    this.Draw = function()
    {
        ctx.drawImage(this.body, this.x-this.body.width/2, this.y-this.body.height/2);
        ctx.save();
        ctx.translate(this.x+this.body.width, this.y-this.body.height/2);
        ctx.rotate(180/Math.PI*Math.sin(this.time/100));
        ctx.drawImage(this.rightArm, 0, 0);
        ctx.restore();
    }
}