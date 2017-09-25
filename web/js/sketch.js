//The ball
var ball

//The players
var player1
var player2

//The bricks
var brick = []

//The bricks tab
var bricksTab

var height = 500
var width = 1000

var margin = 8

function setup() {

  createCanvas(1000, 500)
  frameRate(60)

  ball = new Ball()
  player1 = new Player(1)
  player2 = new Player(2)

  bricksTab = jQuery('.class-bricks').data('bricks')

  for (var i = 0; i < bricksTab.length; i++) {
    brick.push(new Brick(bricksTab[i]))
  }

  //brick.splice(10,1);
  
  
}
  
function draw(){

  //Color 
  background(0)
  stroke(255)

  line(width/2, height-50, width/2, height)

  for (var i = 0; i < brick.length; i++) {
    brick[i].update(i)
  }

  for (var i = 0; i < brick.length; i++) {
    brick[i].show()
    //brick[i].update(i)
  }



  player1.update(1)
  player1.show(1)
  
  player2.update(2)
  player2.show(2)

  ball.update()
  ball.edges()
  ball.show()
  ball.playerBounce(player1)
  ball.playerBounce(player2)

  ball.brickBounce(brick)
}


