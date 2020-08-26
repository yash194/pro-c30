class box1
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,		
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
		 this.Visibilty=255;
	}
	display()
	{
		console.log(this.body.speed);
		if(this.body.speed<6){
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(0,255,255);
			rect(0,0,this.w, this.h);
			pop()
		}
		else{
			World.remove(world,this.body);
push();
tint(255,this.Visibility);
this.Visibility=this.Visibility-5;
rect(0,0,this.w, this.h);
pop();
		}
	}

}