class Sling
{
    constructor(body1,pointB)
    {
      var options=
      {
        bodyA:body1,
        pointB:pointB,
        stiffness:0.04,
        length:10
      }
      this.pointB=pointB;
      this.slingshot=Constraint.create (options);
      World.add(world,this.slingshot);
    }
    fly()
    {
      this.slingshot.bodyA=null;
    }
    display()
    {
        if(this.slingshot.bodyA)
        { 
        var pointA=this.slingshot.bodyA.position;
        var pointB=this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
  }
}