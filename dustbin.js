class dustbins
{
  constructor(x,y,width,height)
  {
      var op = 
      {
          isStatic:true
      }
      this.body=Bodies.rectangle(x,y,width,height,op);
      this.width=width;
      this.height=height;
      this.x=x;
      this.y=y;
      World.add(world,this.body);
  }

  display()
  {
      rect(this.x,this.y,this.width,this.height);
  }

}