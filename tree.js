//This program generates a random colorful tree.
var points = [];

penColor("black");
dot(100000);

/*
Generates a "pallette" - all colors of our lines, squares, and triangles
will be based off of this color.
*/
var r = randomNumber(50, 205);
var g = randomNumber(50, 205);
var b = randomNumber(50, 205);

for(var i=0; i<1;i++){
  pushCoords(getX(), 2*getY()-30, 0);
}

//We're going to iterate through each plotted point 10 times.
for(var m = 0; m < 10; m++){
points.forEach(function(array){
  var x = array.x;
  var y = array.y;
  var a = array.a;
  penUp();
  moveTo(x,y);
  turnTo(a);
  setRandomColor();
  penDown();
  
  turnRight(randomNumber(-40, 40));
  moveForward(randomNumber(2,50));
  
  if(randomNumber(100) == 5){
    setRandomColor();
    drawTriangle(randomNumber(100));
    return; //We return because we don't want to
            //plot a triangle where a square is, or push the coords twice.
  }
  
  if(randomNumber(100) == 5){
    setRandomColor();
    drawSquare(randomNumber(100));
    return;
  }
  pushCoords(getX(), getY(), getDirection());

  
});
}


function setRandomColor(){
    //Each color will be set based off of the pallette we had.
    //Keep in mind no color value will never go over or under the original range of 0-255
    //This is because our original pallette was between 50 and 205.
    var rl = r + randomNumber(-50,50);
    var gl = g + randomNumber(-50,50);
    var bl = b + randomNumber(-50,50);
    penRGB(rl,gl,bl);
}

function drawTriangle(x){
  for(var i = 0; i < 3; i++){
    moveForward(x);
    turnRight(120);
    //Push the coords for each direction cause why not.
    //pushCoords(getX(), getY(), getDirection());
  }

}

function drawSquare(x){
  for(var i = 0; i < 4; i++){
    moveForward(x);
    turnRight(90);
      //Push the coords for each direction cause why not.
      //pushCoords(getX(), getY(), getDirection());
  }
}

function pushCoords(x,y, a){
  points.push({x: x, y:y, a:a});
}
