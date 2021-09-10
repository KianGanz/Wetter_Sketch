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
   stroke(0);
    strokeWeight(30);
  line(windowWidth * 0.2, windowHeight * 0.6, windowWidth * 0.2, windowHeight * 0.9);
  fill("white");
  stroke('red');
  strokeWeight(30);
  triangle(windowWidth * 0.13, windowHeight * 0.7, windowWidth * 0.2, windowHeight * 0.5, windowWidth * 0.27, windowHeight * 0.7); 


}
function cloud(x, y, size) {
  fill(100);
  noStroke();
  arc(x, y, 100 * size, 80 * size, PI + TWO_PI, TWO_PI);
  arc(x + 40, y, 100 * size, 160 * size, PI + TWO_PI, TWO_PI);
  arc(x + 100, y, 100 * size, 140 * size, PI + TWO_PI, TWO_PI);
  arc(x + 160, y, 120 * size, 80 * size, PI + TWO_PI, TWO_PI);

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
