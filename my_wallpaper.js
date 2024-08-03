//your parameter variables go here!

let rectone1X = 0; //controls rect shape on 1/8 tile
let rectone1Y = 0;
let rectone2X = 250; //controls rect shape on 4/8 tile
let rectone2Y = 250; 
let rectone3X = 0; //controls rect shape on 5/8 tile
let rectone3Y = 500; 
let rectone4X = 250; //controls rect shape on 8/8 tile
let rectone4Y = 750; 

let rectthree1X = 250; //controls rect shape on 2/8 tile
let rectthree1Y = 0;
let rectthree2X = 0; //controls rect shape on 3/8 tile
let rectthree2Y = 250;
let rectthree3X = 250; //controls rect shape on 6/8 tile
let rectthree3Y = 500;
let rectthree4X = 0; //controls rect shape on 7/8 tile
let rectthree4Y = 750;

let arcone1X = 250; //controls arc shape on 1/8 tile
let arcone1Y = 250;
let arcone2X = 250; //controls arc shape on 5/8 tile
let arcone2Y = 750;

let arcthree1X = 500; //controls arc shape on 2/8 tile
let arcthree1Y = 0;
let arcthree2X = 500; //controls arc shape on 6/8 tile
let arcthree2Y = 500;

let arctwo1X = 250; //controls arc shape on 4/8 tile
let arctwo1Y = 500;
let arctwo2X = 250; //controls arc shape on 8/8 tile
let arctwo2Y = 1000;

let arcfour1X = 0; //controls arc shape on 4/8 tile
let arcfour1Y = 250;
let arcfour2X = 0; //controls arc shape on 7/8 tile
let arcfour2Y = 750;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 500;
  pWallpaper.grid_settings.cell_height = 1000;
  pWallpaper.grid_settings.row_offset = 0; // changed this to zero
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function


  //changing color within function of each shape
  //draw needed shapes here

  angleMode(RADIANS) // quick and dirty hack to get the angles working properly 

  DrawRectOne(rectone1X, rectone1Y);
  DrawRectOne(rectone2X, rectone2Y);
  DrawRectOne(rectone3X, rectone3Y);
  DrawRectOne(rectone4X, rectone4Y);

  DrawRectThree(rectthree1X, rectthree1Y)
  DrawRectThree(rectthree2X, rectthree2Y)
  DrawRectThree(rectthree3X, rectthree3Y)
  DrawRectThree(rectthree4X, rectthree4Y)

  DrawArcOne(arcone1X, arcone1Y);
  DrawArcOne(arcone2X, arcone2Y);

  DrawArcThree(arcthree1X, arcthree1Y);
  DrawArcThree(arcthree2X, arcthree2Y);

  DrawArcTwo(arctwo1X, arctwo1Y);
  DrawArcTwo(arctwo2X, arctwo2Y);

  DrawArcFour(arcfour1X, arcfour1Y);
  DrawArcFour(arcfour2X, arcfour2Y);

}


function DrawArcOne(arconeX, arconeY) {
  let colors = [
    [75,56,50],    // Default color for 5th (layer use if x < 0)
    [133,68,66], // Default color for 4th layer
    [255,244,230],   // Default color for 3rd layer
    [190,155,123],   // Default color for 2nd layer
    [75,56,50]     // Default color for 1st layer
  ];

  if (arconeX > 0) { //edit this to change to new color
    colors = [
      [75,56,50],   // 5th layer (from outside in)
      [133,68,66],   //  4th layer
      [255,244,230],   //  3rd layer
      [190,155,123], // 2nd layer
      [75,56,50]  // 1st layer
    ];
  }

  fill(colors[0]);
  noStroke();
  arc(arconeX, arconeY, 500, 500, radians(180), radians(270));

  fill(colors[1]);
  noStroke();
  arc(arconeX, arconeY, 400, 400, radians(180), radians(270));

  fill(colors[2]);
  noStroke();
  arc(arconeX, arconeY, 300, 300, radians(180), radians(270));

  fill(colors[3]);
  noStroke();
  arc(arconeX, arconeY, 200, 200, radians(180), radians(270));

  fill(colors[4]);
  noStroke();
  arc(arconeX, arconeY, 100, 100, radians(180), radians(270));
}

function DrawArcTwo(arctwoX, arctwoY) {
  let colors = [
    [75,56,50],    // Default color for 5th (layer use if x < 0)
    [133,68,66], // Default color for 4th layer
    [255,244,230],   // Default color for 3rd layer
    [190,155,123],   // Default color for 2nd layer
    [75,56,50]     // Default color for 1st layer
  ];

  if (arctwoX > 0) { //edit this to change to new color
    colors = [
      [75,56,50],   // 5th layer (from outside in)
      [133,68,66],   //  4th layer
      [255,244,230],   //  3rd layer
      [190,155,123], // 2nd layer
      [75,56,50]  // 1st layer
    ];
  }

  fill(colors[0]); 
  noStroke();
  arc(arctwoX, arctwoY, 500, 500, radians(270), radians(0));

  fill(colors[1]);
  noStroke();
  arc(arctwoX, arctwoY, 400, 400, radians(270), radians(0));

  fill(colors[2]);
  noStroke();
  arc(arctwoX, arctwoY, 300, 300, radians(270), radians(0));

  fill(colors[3]);
  noStroke();
  arc(arctwoX, arctwoY, 200, 200, radians(270), radians(0));

  fill(colors[4]);
  noStroke();
  arc(arctwoX, arctwoY, 100, 100, radians(270), radians(0));
}

function DrawArcThree(arcthreeX, arcthreeY) { //bottom left arc
  let colors = [
    [75,56,50],    // Default color for 5th (layer use if x < 0)
    [133,68,66], // Default color for 4th layer
    [255,244,230],   // Default color for 3rd layer
    [190,155,123],   // Default color for 2nd layer
    [75,56,50]     // Default color for 1st layer
  ];

  if (arcthreeX > 250) { //edit this to change to new color
    colors = [
      [75,56,50],   // 5th layer (from outside in)
      [133,68,66],   //  4th layer
      [255,244,230],   //  3rd layer
      [190,155,123], // 2nd layer
      [75,56,50]  // 1st layer
    ];
  }
  fill(colors[0]); // 5th layer (from outside)
  noStroke();
  arc(arcthreeX, arcthreeY, 500, 500, radians(90), radians(180));
  fill(colors[1]); //4th layer
  noStroke();
  arc(arcthreeX, arcthreeY, 400, 400, radians(90), radians(180));
  fill(colors[2]); //3rd layer
  noStroke();
  arc(arcthreeX, arcthreeY, 300, 300, radians(90), radians(180));
  fill(colors[3]); //2nd layer
  noStroke();
  arc(arcthreeX, arcthreeY, 200, 200, radians(90), radians(180));
  fill(colors[4]);  //1st layer
  noStroke();
  arc(arcthreeX, arcthreeY, 100, 100, radians(90), radians(180));
}

function DrawArcFour(arcfourX, arcfourY) { //bottom right arc
  let colors = [
    [75,56,50],    // Default color for 5th (layer use if x < 0)
    [133,68,66], // Default color for 4th layer
    [255,244,230],   // Default color for 3rd layer
    [190,155,123],   // Default color for 2nd layer
    [75,56,50]     // Default color for 1st layer
  ];

  if (arcfourX > 0) { //edit this to change to new color
    colors = [
      [75,56,50],   // 5th layer (from outside in)
      [133,68,66],   //  4th layer
      [255,244,230],   //  3rd layer
      [190,155,123], // 2nd layer
      [75,56,50]  // 1st layer
    ];
  }
  fill(colors[0]); // 5th layer (from outside)
  noStroke();
  arc(arcfourX, arcfourY, 500, 500, radians(0), radians(90));
  fill(colors[1]); //4th layer
  noStroke();
  arc(arcfourX, arcfourY, 400, 400, radians(0), radians(90));
  fill(colors[2]); //3rd layer
  noStroke();
  arc(arcfourX, arcfourY, 300, 300, radians(0), radians(90));
  fill(colors[3]) //2nd layer
  noStroke();
  arc(arcfourX, arcfourY, 200, 200, radians(0), radians(90));
  fill(colors[4]);  //1st layer
  noStroke();
  arc(arcfourX, arcfourY, 100, 100, radians(0), radians(90));
}

function DrawRectOne(rectoneX, rectoneY) {
  let colors = [
    [75,56,50],    // Default color for 5th 
    [133,68,66], // Default color for 4th layer
    [255,244,230],   // Default color for 3rd layer
    [190,155,123],   // Default color for 2nd layer
    [75,56,50]     // Default color for 1st layer
  ];

  if (rectoneX > 0) { //change value to manipulate different colors of position
    colors = [
      [75,56,50],   // 5th layer 
      [133,68,66],   //  4th layer
      [255,244,230],   //  3rd layer
      [190,155,123], // 2nd layer
      [75,56,50]  // 1st layer
    ];
  }

  fill(colors[0]);
  noStroke();
  rect(rectoneX, rectoneY, 250, 250);

  fill(colors[1]);
  noStroke();
  rect(rectoneX, rectoneY, 200, 250);

  fill(colors[2]);
  noStroke();
  rect(rectoneX, rectoneY, 150, 250);

  fill(colors[3]);
  noStroke();
  rect(rectoneX, rectoneY, 100, 250);

  fill(colors[4]);
  noStroke();
  rect(rectoneX, rectoneY, 50, 250);
}

function DrawRectTwo(recttwoX, recttwoY) {
  let colors = [
    [75,56,50],    // Default color for 5th 
    [133,68,66], // Default color for 4th layer
    [255,244,230],   // Default color for 3rd layer
    [190,155,123],   // Default color for 2nd layer
    [75,56,50]     // Default color for 1st layer
  ];

  if (recttwoX > 0) {
    colors = [
      [75,56,50],   // 5th layer 
      [133,68,66],   //  4th layer
      [255,244,230],   //  3rd layer
      [190,155,123], // 2nd layer
      [75,56,50]  // 1st layer
    ];
  }

  fill(colors[0]);
  noStroke();
  rect(recttwoX, recttwoY, 250, 250);

  fill(colors[1]);
  noStroke();
  rect(recttwoX, recttwoY, 200, 250);

  fill(colors[2]);
  noStroke();
  rect(recttwoX, recttwoY, 150, 250);

  fill(colors[3]);
  noStroke();
  rect(recttwoX, recttwoY, 100, 250);

  fill(colors[4]);
  noStroke();
  rect(recttwoX, recttwoY, 50, 250);
}

function DrawRectThree(rectthreeX, rectthreeY) {
  let colors = [
    [75,56,50],    // Default color for 5th 
    [133,68,66], // Default color for 4th layer
    [255,244,230],   // Default color for 3rd layer
    [190,155,123],   // Default color for 2nd layer
    [75,56,50]     // Default color for 1st layer
  ];

  if (rectthreeX > 0) {
    colors = [
      [75,56,50],   // 5th layer 
      [133,68,66],   //  4th layer
      [255,244,230],   //  3rd layer
      [190,155,123], // 2nd layer
      [75,56,50]  // 1st layer
    ];
  }

  fill(colors[0]);
  noStroke();
  rect(rectthreeX, rectthreeY, 250, 250);

  fill(colors[1]);
  noStroke();
  rect(rectthreeX, rectthreeY, 250, 200);

  fill(colors[2]);
  noStroke();
  rect(rectthreeX, rectthreeY, 250, 150);

  fill(colors[3]);
  noStroke();
  rect(rectthreeX, rectthreeY, 250, 100);

  fill(colors[4]);
  noStroke();
  rect(rectthreeX, rectthreeY, 250, 50);
}

function DrawRectFour(rectfourX, rectfourY) {
  let colors = [
    [75,56,50],    // Default color for 5th 
    [133,68,66], // Default color for 4th layer
    [255,244,230],   // Default color for 3rd layer
    [190,155,123],   // Default color for 2nd layer
    [75,56,50]     // Default color for 1st layer
  ];

  if (rectfourX > 0) {
    colors = [
      [75,56,50],   // 5th layer 
      [133,68,66],   //  4th layer
      [255,244,230],   //  3rd layer
      [190,155,123], // 2nd layer
      [75,56,50]  // 1st layer
    ];
  }

  fill(colors[0]);
  noStroke();
  rect(rectfourX, rectfourY, 250, 250);

  fill(colors[1]);
  noStroke();
  rect(rectfourX, rectfourY, 250, 200);

  fill(colors[2]);
  noStroke();
  rect(rectfourX, rectfourY, 250, 150);

  fill(colors[3]);
  noStroke();
  rect(rectfourX, rectfourY, 250, 100);

  fill(colors[4]);
  noStroke();
  rect(rectfourX, rectfourY, 250, 50);
}


//ignore below code, just for reference for myself
//PARAMS FOR ARC/RECT BELOW

// let rectone1X = 0; 
// let rectone1Y = 0;
// let rectone2X = 0; 
// let rectone2Y = 0; 
// let rectone3X = 0; 
// let rectone3Y = 0; 
// let rectone4X = 0; 
// let rectone4Y = 0; 

// let recttwo1X = 0; 
// let recttwo1Y = 0;
// let recttwo2X = 0; 
// let recttwo2Y = 0; 
// let recttwo3X = 0; 
// let recttwo3Y = 0; 
// let recttwo4X = 0; 
// let recttwo4Y = 0; 

// let rectthree1X = 0; 
// let rectthree1Y = 0;
// let rectthree2X = 0; 
// let rectthree2Y = 0;
// let rectthree3X = 0; 
// let rectthree3Y = 0;
// let rectthree4X = 0; 
// let rectthree4Y = 0;

// let rectfour1X = 0; 
// let rectfour1Y = 0;
// let rectfour2X = 0; 
// let rectfour2Y = 0; 
// let rectfour3X = 0; 
// let rectfour3Y = 0; 
// let rectfour4X = 0; 
// let rectfour4Y = 0; 

// let arcone1X = 0; 
// let arcone1Y = 0;
// let arcone2X = 0; 
// let arcone2Y = 0;
// let arcone3X = 0; 
// let arcone3Y = 0;
// let arcone4X = 0; 
// let arcone4Y = 0;

// let arctwo1X = 0; 
// let arctwo1Y = 0;
// let arctwo2X = 0; 
// let arctwo2Y = 0;
// let arctwo3X = 0; 
// let arctwo3Y = 0;
// let arctwo4X = 0; 
// let arctwo4Y = 0;


// let arcthree1X = 0; 
// let arcthree1Y = 0;
// let arcthree2X = 0; 
// let arcthree2Y = 0;
// let arcthree3X = 0; 
// let arcthree3Y = 0;
// let arcthree4X = 0; 
// let arcthree4Y = 0;

// let arcfour1X = 0; 
// let arcfour1Y = 0;
// let arcfour2X = 0; 
// let arcfour2Y = 0;
// let arcfour3X = 0; 
// let arcfour3Y = 0;
// let arcfour4X = 0; 
// let arcfour4Y = 0;

//DRAW REC/ARC FUNCTIONS BELOW

// DrawRectOne(rectone1X, rectone1Y)
// DrawRectOne(rectone2X, rectone2Y)
// DrawRectOne(rectone3X, rectone3Y)
// DrawRectOne(rectone4X, rectone4Y)

// DrawRectTwo(recttwo1X, recttwo1Y)
// DrawRectTwo(recttwo2X, recttwo2Y)
// DrawRectTwo(recttwo3X, recttwo3Y)
// DrawRectTwo(recttwo4X, recttwo4Y)

// DrawRectThree(rectThree1X, rectThree1Y)
// DrawRectThree(rectThree2X, rectThree2Y)
// DrawRectThree(rectThree3X, rectThree3Y)
// DrawRectThree(rectThree4X, rectThree4Y)

// DrawRectFour(rectfour1X, rectfour1Y)
// DrawRectFour(rectfour2X, rectfour2Y)
// DrawRectFour(rectfour3X, rectfour3Y)
// DrawRectFour(rectfour4X, rectfour4Y)

// DrawArcOne(arcone1X, arcone1Y)
// DrawArcOne(arcone2X, arcone2Y)
// DrawArcOne(arcone3X, arcone3Y)
// DrawArcOne(arcone2X, arcone4Y)

// DrawArcTwo(arctwo1X, arctwo1Y)
// DrawArcTwo(arctwo2X, arctwo2Y)
// DrawArcTwo(arctwo3X, arctwo3Y)
// DrawArcTwo(arctwo4X, arctwo4Y)

// DrawArcThree(arcthree1X, arcthree1Y)
// DrawArcThree(arcthree2X, arcthree2Y)
// DrawArcThree(arcthree3X, arcthree3Y)
// DrawArcThree(arcthree4X, arcthree4Y)

// DrawArcFour(arcfour1X, arcfour1Y)
// DrawArcFour(arcfour2X, arcfour2Y)
// DrawArcFour(arcfour3X, arcfour3Y)
// DrawArcFour(arcfour4X, arcfour4Y)