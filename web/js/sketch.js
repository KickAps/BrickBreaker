
//The ball
var ball

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



function setup() {

  createCanvas(1000, 500)
  frameRate(60)

  ball = new Ball()
  player1 = new Player(1)
  player2 = new Player(2)

  // choose players names
  player1.choosePlayerName('Player1')
  player2.choosePlayerName('Player2')

  ball.init()

  //Get the bricksTab from HTML
  bricksTab = jQuery('.class-bricks').data('bricks')

  for (var i = 0; i < bricksTab.length; i++) {

    brick.push(new Brick(bricksTab[i]))

    if(brick[i].hp == -1){
      undestructibleBricks++
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
  title = text('Supertouch : ' + ball.supertouch, 50, height/2 + 50)
  title = text('Slowtouch : ' + ball.slowtouch, 50, height/2 + 100)

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
  ball.playerBounce(player1, player2)
  ball.playerBounce(player2, player1)

  if(player1.iHaveBall == true){
    ball.brickBounce(brick, player1)
  }
  else{
    ball.brickBounce(brick, player2)
  }

  ball.edgeBounce()

  //Update and show the ball
  ball.update()
  ball.show()
  
}


//Empty/delete all tabs and objects, to restart
function restart(){
  
  alert("!!! New Game !!!")

  brick = []
  delete ball
  delete player1
  delete player2
  noCanvas()

  setup()
}