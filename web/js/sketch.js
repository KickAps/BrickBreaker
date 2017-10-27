
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

var started = false

var schema = 0

var button = []

function setup() {

  player1_input = createInput('Player1')
  player1_input.size(120, 40)
  player1_input.position(500, 250)

  player2_input = createInput('Player2')
  player2_input.size(120, 40)
  player2_input.position(620, 250)

  var nbSchema = jQuery('script[src*=sketch]').attr('nbSchema')

  // for(var i = 0; i < nbSchema; i++){
  //   schema = i+1;
  //   button[i] = createButton('Level : ' + (schema))
  //   button[i].position(player2_input.x + player2_input.width, 250 + i*50)
  //   button[i].mousePressed(function() { start(schema) })
  // }  

  level1 = createButton('Level : ' + 1)
  level1.position(player2_input.x + player2_input.width, 250)
  level1.mousePressed(function() { start(1) })
 
  level2 = createButton('Level : ' + 2)
  level2.position(player2_input.x + player2_input.width, 300)
  level2.mousePressed(function() { start(2) }) 

  level3 = createButton('Level : ' + 3)
  level3.position(player2_input.x + player2_input.width, 350)
  level3.mousePressed(function() { start(3) })

  level4 = createButton('Level : ' + 4)
  level4.position(player2_input.x + player2_input.width, 400)
  level4.mousePressed(function() { start(4) })
   
  createCanvas(1000, 500)
  frameRate(60)

  ballTab.push(new Ball())
  player1 = new Player(1)
  player2 = new Player(2)

  ballTab[0].init(width/2, height/2)

  //Get the bricksTab from HTML
  bricksTab = jQuery('.class-bricks').data('bricks')

  // for (var i = 0; i < bricksTab.length; i++) {

  heart_ico = loadImage("heart.ico")

}


//main loop
function draw(){
 
  var bounce = false

  if(started){

    background(0) //BLACK
    stroke(255) //WHITE
    fill(255) //WHITE

    //display names&scores&lifes
    textSize(25);

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
    line(width/2, height-80, width/2, height)
    //Score&names&life line
    line(0, height-50, width, height-50)

    //Show all bricks
    for (var i = 0; i < brick.length; i++) {

      brick[i].show()
      //alert(brick.length)
    }

    //Update and show players 
    player1.update(1)
    player1.show('RED')
    
    player2.update(2)
    player2.show('BLUE')



    //Players, edges and bricks collissions
    for( i=0 ; i<ballTab.length ; i++){

      var lastBallTabLength = ballTab.length

      switch (true) {

            //Bounce on player 1
            case ( ballTab[i].playerBounce(player1, player2) ):
                break

            //Bounce on player 2
            case ( ballTab[i].playerBounce(player2, player1) ):
                break

            case ( ballTab[i].edgeBounce(i) ):
                break

            // case (player1.iHaveBall == true && player2.iHaveBall == false):
            //     if( ballTab[i].brickBounce(brick, player1, i) )
            //       break

            // case (player2.iHaveBall == true && player1.iHaveBall == false):
            //     if( ballTab[i].brickBounce(brick, player2, i) )
            //       break

            case (player1.iHaveBall == true && player2.iHaveBall == false):
                if( ballTab[i].brickBounce2(brick, player1, i) )
                  break

            case (player2.iHaveBall == true && player1.iHaveBall == false):
                if( ballTab[i].brickBounce2(brick, player2, i) )
                  break

            default:
       }

      if(lastBallTabLength == ballTab.length){
        //Update and show the ball
        ballTab[i].update()
        ballTab[i].show()
      }




      // ballTab[i].playerBounce(player1, player2)
      // ballTab[i].playerBounce(player2, player1)


      // // if(player1.iHaveBall == true){
      // //   ballTab[i].brickBounce(brick, player1)
      // // }
      // // else{
      // //   ballTab[i].brickBounce(brick, player2)
      // // }

      // if(player1.iHaveBall == true){
      //   ballTab[i].brickBounce2(brick, player1, i)
      // }
      // else if(player2.iHaveBall == true){
      //   ballTab[i].brickBounce2(brick, player2, i)
      // }

      // var lastBallTabLength = ballTab.length
      // ballTab[i].edgeBounce(i)

      // if(lastBallTabLength == ballTab.length){
      //   //Update and show the ball
      //   ballTab[i].update()
      //   ballTab[i].show()
      // }
    }

  }
  else{

    clear()
  }
}


//Empty/delete all tabs and objects, to restart
function restart(){

  brick = []
  ballTab = []
  delete player1
  delete player2
  
  
}

function start(p_schema){

  started = true

  this.loadSchema(p_schema)

  //Choose players names
  player1.choosePlayerName(player1_input.value())
  player2.choosePlayerName(player2_input.value())

  player1_input.hide()
  player2_input.hide()
  
  level1.hide()
  level2.hide()
  level3.hide()
  level4.hide()

  loop()
}

function loadSchema(p_schema){

  var i = 0;

  console.log(bricksTab.length)

  bricksTab.forEach(function(element){


    if(element.schema_number == p_schema){

      brick.push(new Brick(element))

      if(this.power == 'teleport' || this.power == 'undestructible'){
        undestructibleBricks++
      }

      //seek for the 2 teleport bricks, if they exist. Always in pair.
      if(brick[i].power == 'teleport'){
         idDest = teleportDestination(i, idDest)
      }

      i++;
    }

  })
}