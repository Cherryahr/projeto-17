var box; 


function setup() 
{
  createCanvas(400, 400);
  box = new Box(50,50,20,20,3);
}
 
function draw() 
{ 
  background(220);

box.show();
box.move();
}

