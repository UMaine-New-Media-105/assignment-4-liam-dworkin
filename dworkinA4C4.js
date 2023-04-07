/*I want to do more to make it more fun, but I gotta get to work so I'm submitting it as is right now*/

function setup() {
  createCanvas(1000, 600);
  //noLoop to keep it from 'freaking out'
  noLoop();
  /*defining 'sprite' variables for the array like we did with the class assignment*/
  sprites = [
    "star1",
    "star2",
    "star3",
    "star4",
    "star5",
    "star6",
    "star7",
    "star8",
  ];
  /*defining the scope of the array (12) - I think they look nice w/ the spacing of 12*/
  spritesPerRow = 12;
  spritesPerRow2 = 22;
  //defining the offset- spacing of the column
  //added another offset option for row variety
  offsetLeft = 1140 / spritesPerRow;
  offsetLeft2 = 1140 / spritesPerRow2;
}

function draw() {
  /*background color, translation to get my row straighter and on screen (the only way I could figure it) and then a for loop containing the row parameters for how to count as well as well as how to draw on the array's listed assets for a 'row'*/

  //it is now straight!

  background("coral");
  push();
  translate(40, 40);
  //uses the second offset to keep less distance
  for (let counter = 0; counter < spritesPerRow2; counter++) {
    let thisSprite = sprites[counter % sprites.length];
    chooseSprite(thisSprite, counter * offsetLeft2, 0);
  }
  pop();

  //translated over again for multiple rows
  //uses the first offset to keep more distance
  push();
  translate(40, 200);
  for (let counter = 0; counter < spritesPerRow; counter++) {
    let thisSprite = sprites[counter % sprites.length];
    chooseSprite(thisSprite, counter * offsetLeft, 0);
  }
  pop();

  push();
  translate(40, 350);
  for (let counter = 0; counter < spritesPerRow2; counter++) {
    let thisSprite = sprites[counter % sprites.length];
    chooseSprite(thisSprite, counter * offsetLeft2, 0);
  }
  pop();

  push();
  translate(40, 510);
  for (let counter = 0; counter < spritesPerRow; counter++) {
    let thisSprite = sprites[counter % sprites.length];
    chooseSprite(thisSprite, counter * offsetLeft, 0);
  }
  pop();
}

/*the conditional that defines the 'star1' variables values as far as size, shape, etc...

made each row fade in and out in a harsh gradient- right now each row is the same as far as design goes.

I added in some more of the sprites to create a leaping effect from the colors that draws from the color in front of it by 2 places. The farthest right most navy star draws from the 2nd sprite to farthest left as it repeats*/

function chooseSprite(spriteName, spriteX, spriteY) {
  push();
  translate(0, 20);
  if (spriteName == "star1") {
    starBuilder1(spriteX, spriteY, 35, 55, 5, 0, "navy");
    if (spriteName == "star1") {
      starBuilder1(spriteX, spriteY, 25, 40, 5, 0, "blue");
    }
  } else if (spriteName === "star2") {
    starBuilder1(spriteX, spriteY, 35, 55, 5, 0, "blueviolet");
  } else if (spriteName == "star3") {
    starBuilder1(spriteX, spriteY, 35, 55, 5, 0, "blue");
  }
  if (spriteName == "star3") {
    starBuilder1(spriteX, spriteY, 25, 40, 5, 0, "aquamarine");
  } else if (spriteName == "star4") {
    starBuilder1(spriteX, spriteY, 35, 55, 5, 0, "skyblue");
  } else if (spriteName == "star5") {
    starBuilder1(spriteX, spriteY, 35, 55, 5, 0, "aquamarine");
  } else if (spriteName == "star6") {
    starBuilder1(spriteX, spriteY, 35, 55, 5, 0, "blue");
  }
  if (spriteName == "star6") {
    starBuilder1(spriteX, spriteY, 25, 40, 5, 0, "skyblue");
  } else if (spriteName == "star7") {
    starBuilder1(spriteX, spriteY, 35, 55, 5, 0, "blueviolet");
  } else if (spriteName == "star8") {
    starBuilder1(spriteX, spriteY, 35, 55, 5, 0, "navy");
  }
  if (spriteName == "star8") {
    starBuilder1(spriteX, spriteY, 25, 40, 5, 0, "blueviolet");
  }
  pop();
}

//three separate functions (I am now realizing I didn't have to delete color variables out of these functions but that's a later fix- it works and isn't super janky) It creates the stars and has the variables for x,y as defined by spriteX/Y variables above as well as radius and npoints (can add more points to each star if you'd like)

//the three separate function clutter has been reduced from part 2/3

//down to a single function to be called back

function starBuilder1(x, y, radius1, radius2, npoints, flip, color1) {
  push();
  fill(color1);
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
