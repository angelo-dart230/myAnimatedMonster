let blinkSpeed = 0.1;    
let bounce = 0;          
let bounceDir = 1;      

function setup() {
  createCanvas(400, 600); 
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(30, 30, 60);

  // Bounce animation
  bounce += bounceDir * 1.5;
  if (bounce > 20 || bounce < -20) {
    bounceDir *= -1; //
  }

  // Blinking animation
  let blink = abs(sin(frameCount * blinkSpeed));

  push();
  translate(width / 2, height / 2 + bounce);

  // HEAD
  fill(100, 200, 255);
  rect(0, 0, 220, 250, 40);

  // EYES
  fill(255); // White
  ellipse(-50, -40, 60, 40 * blink);
  ellipse(50, -40, 60, 40 * blink); 

  // Pupils
  fill(0);
  ellipse(-50, -40, 20, 20 * blink);
  ellipse(50, -40, 20, 20 * blink);

  // MOUTH
  fill(255, 100, 100);
  rect(0, 60, 100, 30, 10);

  // Teeth
  fill(255);
  triangle(-30, 45, -20, 60, -40, 60);
  triangle(30, 45, 40, 60, 20, 60);

  // HORNS
  push();
  rotate(-PI / 6);
  fill(255, 200, 0); 
  triangle(-100, -150, -70, -60, -40, -150);
  pop();

  push();
  rotate(PI / 6);
  fill(255, 200, 0);
  triangle(100, -150, 70, -60, 40, -150);
  pop();

  // EARS
  fill(200, 100, 255);
  ellipse(-120, -20, 40, 60);
  ellipse(120, -20, 40, 60);

  // NOSE
  fill(255, 180, 0);
  triangle(0, -10, -10, 10, 10, 10);

  // EXTRA DETAIL: ANTENNA
  stroke(255);
  strokeWeight(3);
  line(0, -130, 0, -180); 
  noStroke();
  fill(255, 255, 0);
  ellipse(0, -185, 20, 20); 

  pop();
}
