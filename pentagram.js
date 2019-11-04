//This program generates a colorful pentagram!

hide();
//Set the background.
penColor("black");
dot(1000);

//Draw the circle and the outer ring.
var radius = randomNumber(75, 150);
penColor("white");
dot(radius+5);
penColor("black");
dot(radius);
penColor("white");

//Move to the end of the circle and turn around.
penUp();
turnRight(randomNumber(0,360));
moveForward(radius);
turnRight(162);
penDown();
penWidth(randomNumber(3, 10));

//Now we're gonna draw each line of the pentagram.
var previousColor = randomColor();
for(var i=0;i<5;i++){
  //Generate a new color
  var newColor = randomColor();
  drawLine(radius, previousColor,newColor);
  previousColor = newColor;
  turnRight(144);

}

function randomColor(){
  return [randomNumber(0,255),randomNumber(1,255),randomNumber(0,255)];
}


function drawLine(r, c1, c2){
  for(var i=0;i<0.95*(radius*2); i+=5){
    moveForward(5);
    var stage = i / (0.95*radius*2);
    var currentColor = colorMorph(c1, c2, stage);
    penRGB(currentColor[0], currentColor[1], currentColor[2]);
  }
}

function colorMorph(c1, c2, stage){
  var r3 = Math.round(c1[0]- ((c1[0]-c2[0])*stage));
  var g3 = Math.round(c1[1]- ((c1[1]-c2[1])*stage));
  var b3 = Math.round(c1[2]- ((c1[2]-c2[2])*stage));
  return [r3,b3,g3];
}
