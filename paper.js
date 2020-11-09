class paper {
    constructor(x,y,r)
    {
        var paper_options={
            isStatic:false,
            restitution:0.2,
            friction:0.5,
            density:1.2
        }

        this.body= Bodies.circle(x,y,r,paper_options);
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position
        ellipse(pos.x,pos.y,20,20);

    }
}