//I'm using a star function from my flag assignment. It's pretty much the same though I'll set different, varying parameters to make a new composition.

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("purple");
  //for more options for color choice I'm using RGB notation again instead of HSLA (because it's many parameters) or just "named" colors
  colorMode(RGB);

  //multi-point star woop!

  push();
  translate(width * 0.5, height * 0.5);
  starBuilder(0, 0, 32, 75, 10, "#FF9933", 0.95);
  pop();

  //adding another smaller one in the center for a lil' compositional depth

  push();
  translate(width * 0.5, height * 0.5);
  starBuilder(0, 0, 22, 65, 10, "#FFFF99", 0.95);
  pop();

  //chunky star to make a 'new' shape

  push();
  translate(400, 400);
  starBuilder(0, 0, 60, 75, 7, "#0000CC", 1.5);
  pop();

  push();
  translate(400, 400);
  starBuilder(0, 0, 50, 65, 7, "#999FFC", 1.5);
  pop();

  //roatated the third reproduction of my 'chunky' star for fun

  push();
  translate(400, 400);
  starBuilder(0, 0, 30, 45, 7, "#33FFFF", 2);
  pop();

  //symmetrically translated stars for the purpose of proving I can rotate/translate the same sized and pointed star

  push();
  translate(100, 200);
  starBuilder(10, 10, 32, 100, 5, "#999FFF", 1.1);
  pop();

  push();
  translate(400, 200);
  starBuilder(10, 10, 32, 100, 5, "#FFF000", 0.80);
  pop();
}

//this is the function I worked up for a star loop (pretty much the same from the flag assignment)

function starBuilder(x, y, radius1, radius2, npoints, color, flip) {
  push();
  fill(color);
  rotate(flip);
  noStroke();
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let one = x + cos(a) * radius2;
    let two = y + sin(a) * radius2;
    vertex(one, two);
    one = x + cos(a + halfAngle) * radius1;
    two = y + sin(a + halfAngle) * radius1;
    vertex(one, two);
  }
  endShape(CLOSE);
  pop();
}
