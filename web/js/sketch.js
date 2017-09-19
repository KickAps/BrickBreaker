function setup() {

  createCanvas(1000, 500);
}

var height = 500;
var width = 1000;

var marge = 8;

//Barre player 1
var x1 = width/4 - 40;
var y1 = 470;

//Barre player 2
var x2 = width*3/4 - 40;
var y2 = 470;


//Balle
var x3 = 250;
var y3 = 250;
var x3speed = 0;
var y3speed = +5;


function draw(){

    //Color 
    background(0);
    stroke(255);

    line(width/2, height-50, width/2, height);


    //Barre player 1
    fill(255, 0, 0); //RED
    rect(x1, y1, 80, 20);

    //Barre player 2
    fill(0, 0, 255); //BLUE
    rect(x2, y2, 80, 20);

    //Balle
    fill(0, 255, 0); //GREE
    ellipse(x3, y3, 20, 20);

    
    if (keyIsDown(81)){// Q
      x1-=5;
      if(x1 < 0)
        x1 = 0;
    }
    
    if (keyIsDown(68)){// D
      x1+=5;
      if(x1 > 420)
        x1 = 420;
    }

    if (keyIsDown(LEFT_ARROW)){// <
      x2-=5;
      if(x2 < width/2+1)
        x2 = width/2+1;
    }
    if (keyIsDown(RIGHT_ARROW)){// >
      x2+=5;
      if(x2 > width-80)
        x2 = width-80;
    }

    bounce();
//x1, y1, x2, y2
}

//var x1, var y1, var x2, var y2
function bounce(){
  x3 += x3speed;
  y3 += y3speed;

  var ylimit = height-30-marge; 

  //PLAYER 1
  if(y3>=ylimit && (x3>x1 && x3<=x1+25)){
    y3speed = -y3speed;
    x3speed -= 2;
  }
  else if(y3>=ylimit && (x3>x1+25 && x3<=x1+55)){
    y3speed = -y3speed;
  }
  else if(y3>=ylimit && (x3>x1+55 && x3<=x1+80)){
    y3speed = -y3speed;
    x3speed += 2
  }

  //PLAYER 2
  if(y3>=ylimit && (x3>x2 && x3<=x2+25)){
    y3speed = -y3speed;
    x3speed -= 2;
  }
  else if(y3>=ylimit && (x3>x2+25 && x3<=x2+55)){
    y3speed = -y3speed;
  }
  else if(y3>=ylimit && (x3>x2+55 && x3<=x2+80)){
    y3speed = -y3speed;
    x3speed += 2
  }

  //SIDE
  if(y3<8)
    y3speed = -y3speed;

  if(y3>510){
    init();
    redraw();
  }
  
  if(x3<8 || x3>width-marge){
    x3speed = -x3speed;
     
  }
}

function init(){
  x3 = 250;
  y3 = 250;
  x3speed = 0;

  var x1 = 50;
  var y1 = 470;

  var x2 = 400;
  var y2 = 470;
}
