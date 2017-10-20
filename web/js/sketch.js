
//The ball
var ball

//The players
var player1
var player2

//The bricks
var brick = []

//The bricks tab
var bricksTab = []

var height = 500
var width = 1000

//Margin for the ball collision
var margin = 8


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

  //alert('Player 1 : ' + player1.name + '\nPlayer 2 : ' + player2.name)

  //Get the bricksTab from HTML
  bricksTab = jQuery('.class-bricks').data('bricks')

  for (var i = 0; i < bricksTab.length; i++) {
    brick.push(new Brick(bricksTab[i]))
  }


  heart_ico = loadImage("heart.ico")
}

  
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

  //hearts management
  for(var i = 0; i < player1.life; i++){
    image(heart_ico, 15 + i*30, height-38, width/40, height/20)
  }
  for(var i = 0; i < player2.life; i++){
    image(heart_ico, width - (40 + i*30), height-38, width/40, height/20)
  }
  

  //Test the end of the game ( version n°1 )
    win()

  //Middle line
  line(width/2, height-100, width/2, height)

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

  if(player1.iHaveBall == true)
    ball.brickBounce(brick, player1)
  else
    ball.brickBounce(brick, player2)

  ball.edgeBounce()

  //Update and show the ball
  ball.update()
  ball.show()
  
}

function win(){

  // if no life anymore
  if(player2.life <= 0){
    alert(player1.name + ' IS THE WINNER !!!');

    restart()
  }
  else if(player1.life <= 0){
    alert(player2.name + ' IS THE WINNER !!!');

    restart()
  }

  // if no bricks anymore
  if(brick.length == 0){

    
    if(player1.score > player2.score)
      alert(player1.name + ' IS THE WINNER !!!');
    else if(player1.score < player2.score)
      alert(player2.name + ' IS THE WINNER !!!');
    else
      alert('!!! DRAW !!!');

    restart()
  }
}

function restart(){
  alert("!!! New Game !!!")

  brick = []
  delete ball
  delete player1
  delete player2
  noCanvas()

  setup()
}