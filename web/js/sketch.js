function setup() {
  createCanvas(500, 500);
}
var x1 = 10;
var y1 = 210;

var x2 = 470;
var y2 = 210;

var x3 = 250;
var y3 = 250;
var x3speed = -5;
var y3speed = 0;

function draw(){

    background(0);

    stroke(255);

    rect(x1, y1, 20, 80);
    rect(x2, y2, 20, 80);
    line(250, 0, 250, 500);
    ellipse(x3, y3, 20, 20);


    if (keyIsDown(65)){
      y1-=5;
      if(y1 < 10)
        y1 = 10;
    }
    if (keyIsDown(81)){
      y1+=5;
      if(y1 > 410)
        y1 = 410;
    }

    if (keyIsDown(UP_ARROW)){
      y2-=5;
      if(y2 < 10)
        y2 = 10;
    }
    if (keyIsDown(DOWN_ARROW)){
      y2+=5;
      if(y2 > 410)
        y2 = 410;
    }

    bounce();
//x1, y1, x2, y2
}
//var x1, var y1, var x2, var y2
function bounce(){
  x3 += x3speed;
  y3 += y3speed;

//PLAYER 1
  if(x3<=30 && (y3>y1 && y3<=y1+25)){
    x3speed = 5;
    y3speed -= 2;
  }
  else if(x3<=30 && (y3>y1+25 && y3<=y1+55)){
    x3speed = 5;
  }
  else if(x3<=30 && (y3>y1+55 && y3<=y1+80)){
    x3speed = 5;
    y3speed += 2
  }

//PLAYER 2
  if(x3>=470 && (y3>y2 && y3<=y2+25)){
    x3speed = -5;
    y3speed -= 2;
  }
  else if(x3>=470 && (y3>y2+25 && y3<y2+55)){
    x3speed = -5;
  }
  else if(x3>=470 && (y3>y2+55 && y3<=y2+80)){
    x3speed = -5;
    y3speed += 2
  }

//SIDE
  if(y3<0 || y3>500)
    y3speed = -y3speed;

  if(x3<0){
    x3speed = +5;
    init();
    redraw();
  }
  else if(x3>500){
    x3speed = -5;
    init();
    redraw();
  }
}

function init(){
  x3 = 250;
  y3 = 250;
  y3speed = 0;
  x1 = 10;
  y1 = 210;
  x2 = 470;
  y2 = 210;
}
