class dustbin 
	{
	constructor(x,y)
	{
	this.x=x;
	this.y=y;
	this.dustbinWidth=200;
	this.dustbinHeight=200;
	this.wallThickness=20;
	this.angle=0; 

	this.bottomBody=Bodies.rectangle(1100, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
	this.leftWallBody=Bodies.rectangle(1016,600, this.wallThickness,50, {isStatic:true})
	Matter.Body.setAngle(this.leftWallBody, this.angle);
    this.image = loadImage("dustbin.png");
	this.rightWallBody=Bodies.rectangle(1181,600, this.wallThickness, this.dustbinHeight, {isStatic:true})
	Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
	World.add(world, this.bottomBody)
	World.add(world, this.leftWallBody)
	World.add(world, this.rightWallBody);
	
	}
	display()
	{
	var posBottom=this.bottomBody.position;
	var posLeft=this.leftWallBody.position;
	var posRight=this.rightWallBody.position;
	
	push()
	translate(posLeft.x, posLeft.y);
	rectMode(CENTER)
	//strokeWeight(4);
	angleMode(RADIANS)
	fill("green")
	stroke("green")
	rotate(this.angle)
	rect(0,0,this.wallThickness, this.dustbinHeight);
	
	pop();
	
	push()
	translate(posRight.x, posRight.y);
	rectMode(CENTER)
	//strokeWeight(4);
	stroke("green")
	angleMode(RADIANS)
	fill("green")
	rotate(-1*this.angle)
	rect(0,0,this.wallThickness, this.dustbinHeight);
	pop();
	
	push()
	translate(posBottom.x, posBottom.y);
	rectMode(CENTER)
	//strokeWeight(4);
	stroke("green")
	angleMode(RADIANS)
	fill("green")
	rect(0,0,this.dustbinWidth, this.wallThickness);
	imageMode(CENTER);
	image(this.image,0,0,this.dustbinWidth,this.dustbinHeight);
	pop();
	
	}
	
	}
