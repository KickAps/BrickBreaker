
//The ball
var ballTab = []

//The players
var player1
var player2

//The bricks tab (game)
var brick = []

//Number of undestructible bricks (brick.hp == -1)
var undestructibleBricks = 0

//The bricks tab (BDD)
var bricksTab = []

//Canvas size
var height = 500
var width = 1000

//Margin for the ball collision
var margin = 10

//For the heart(life points) icon
var heart_ico

var idDest = -1

function setup() {

  createCanvas(1000, 500)
  frameRate(60)

  ballTab.push(new Ball() )
  player1 = new Player(1)
  player2 = new Player(2)

  // choose players names
  player1.choosePlayerName('Player1')
  player2.choosePlayerName('Player2')

  ballTab[0].init()

  //Get the bricksTab from HTML
  bricksTab = jQuery('.class-bricks').data('bricks')

  for (var i = 0; i < bricksTab.length; i++) {

    brick.push(new Brick(bricksTab[i]))

    if(brick[i].hp == -1){
      undestructibleBricks++
    }

    //seek for the 2 teleport bricks, if they exist. Always in pair.
    if(brick[i].power == 'teleport'){
       idDest = teleportDestination(i, idDest)
    }
  }

  heart_ico = loadImage("heart.ico")
}




//main loop
function draw(){
 
  background(0) //BLACK
  stroke(255) //WHITE
  fill(255) //WHITE

  //display names&scores&lifes
  textSize(32);

  textAlign(RIGHT);
  title = text(player2.score, width/2 + 100, height-15)

  textAlign(CENTER);
  title = text(player1.name, width/4, height-15)
  title = text(player2.name, width*3/4, height-15)

  textAlign(LEFT);
  title = text(player1.score, width/2 - 100, height-15)

  //test powers
  // title = text('Supertouch : ' + ball[0].supertouch, 50, height/2 + 50)
  // title = text('Slowtouch : ' + ball[0].slowtouch, 50, height/2 + 100)

  //hearts displayaing
  for(var i = 0; i < player1.life; i++){

    image(heart_ico, 15 + i*30, height-38, width/40, height/20)
  }

  for(var i = 0; i < player2.life; i++){

    image(heart_ico, width - (40 + i*30), height-38, width/40, height/20)
  }
  

  //Test the end of the game
    win()

  //Middle line
  line(width/2, height-100, width/2, height)
  //Score&names&life line
  line(0, height-50, width, height-50)

  //Show all bricks
  for (var i = 0; i < brick.length; i++) {

    brick[i].show()
  }

  //Update and show players 
  player1.update(1)
  player1.show('RED')
  
  player2.update(2)
  player2.show('BLUE')


  //Players, edges and bricks collissions
  for( i=0 ; i<ballTab.length ; i++){

    ballTab[i].playerBounce(player1, player2)
    ballTab[i].playerBounce(player2, player1)

    if(player1.iHaveBall == true){
      ballTab[i].brickBounce2(brick, player1)
    }
    else{
      ballTab[i].brickBounce2(brick, player2)
    }

    var lastBallTabLength = ballTab.length
    ballTab[i].edgeBounce(i)

    if(lastBallTabLength == ballTab.length){
      //Update and show the ball
      ballTab[i].update()
      ballTab[i].show()
    }
  }
  
}


//Empty/delete all tabs and objects, to restart
function restart(){
  
  alert("!!! New Game !!!")

  brick = []
  ballTab = []
  delete player1
  delete player2
  noCanvas()

  setup()
}