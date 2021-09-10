  let clouds = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(80, 0, 175);

  for (i = 0; i < clouds.length; i++) {
    let currentObj = clouds[i];
    cloud(currentObj.xpos, currentObj.ypos, currentObj.size);
    currentObj.xpos += 3;
    if (clouds[i].xpos > width+20) {
      clouds.splice(i, 1);
    }
  }
   noStroke ();
 fill(80, 0, 175);
     rect(0, windowHeight * 0.45, windowWidth, windowHeight);
 fill(0 ,155 ,0);
     rect(0, windowHeight * 0.65, windowWidth, windowHeight);
 fill(80);
   triangle(windowWidth * 0.5, windowHeight * 0.65, windowWidth * 0.25, windowHeight, windowWidth * 0.75, windowHeight);
  

}
function cloud(x, y, size) {
  fill(100);
  noStroke();
  arc(x, y, 300 * size, 240 * size, PI + TWO_PI, TWO_PI);
  arc(x + 120, y, 300 * size, 480 * size, PI + TWO_PI, TWO_PI);
  arc(x + 300, y, 300 * size, 420 * size, PI + TWO_PI, TWO_PI);
  arc(x + 480, y, 360 * size, 240 * size, PI + TWO_PI, TWO_PI);

}

function mouseClicked() {
  let newCloud = {
    xpos: mouseX,
    ypos: mouseY,
    size: random(0.8, 1.3)
  };
  clouds.push(newCloud);
}

//function keyPressed(s) {
  //background(255, 204, 0);
 // fill(255, 204, 0);
 // rect(0, 0, windowWidth, windowHeight * 0.65);
//}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}
