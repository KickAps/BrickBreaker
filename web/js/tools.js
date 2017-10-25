

/************ GAMEPLAY *************/


function isTheWinner(player){

  restart()

  textAlign(CENTER);
  fill('WHITE')

  title = text(player.name + ' WINS !', width/2, height/2 - 120)

  title = text("PRESS ENTER\nTO EXIT", width/2, height/2 - 50)
  // var playerName = createElement('h2', player.name)
  // var playerScore = createElement('h2', player.score)

  //window.location.href = '/'
  

  //a = jQuery(document).find('h2');

  jQuery(document).ready(function() {

      var z = document.getElementById('menu');
      
      z.innerHTML = "<li><a>"+player.name+" : "+player.score+"</a></li>";

  });
  

  
  // for (i=0; i<a.length; i++){
  //     alert(a[i])
  // }
  
}


//Watch if someone wins
function win(){

  // if no life anymore
  if(player2.life <= 0){
    isTheWinner(player1)
  }
  else if(player1.life <= 0){
    isTheWinner(player2)
  }

  // if no bricks anymore
  if(brick.length - undestructibleBricks == 0){

    if(player1.score > player2.score){
      isTheWinner(player1)
    }
    else if(player1.score < player2.score){
      isTheWinner(player2)
    }
    else
      alert('!!! DRAW !!!')
  }

  if(keyIsDown(13)){ // ENTER
    
   started = false
    noCanvas()
  
    setup()
  }
}


//Ball & players moving authorization
unfreezeGame = function(ball, player1, player2){

  if(keyIsDown(32)){ // SPACE
    ball.canMove = true
    player1.canMove = true
    player2.canMove = true
  }
}

//unable ball & players to move + reset combos
freezeGame = function(ball, player1, player2){

      player1.combo = 0
      player2.combo = 0
      player1.canMove = false
      player2.canMove = false
      ball.canMove = false
}


/************ POWERS *************/


//yspeed is divided by two (in brick.seekPower())
//until the ball have slowtouch slots
//nothing happen if ball.slowtouch < 0
function slowball(ball){

  //slowtouch
  if(ball.slowtouch > 0){
    ball.slowtouch --
  }
  //back to classic speed
  else if(ball.slowtouch == 0){
    ball.slowtouch = -1
    ball.yspeed *= 2
  }
}

//Destroy brick even if brick.hp is greater than 1
//if the ball have no supertouch slot anymore, do classic bounce
//also ask for slowball() power
function superball(player, ball, brick){

  //supertouch
  if(ball.supertouch > 0){
    player.score += 10* brick.hp + player.combo
    player.combo += brick.hp
    brick.hp = 0
    ball.supertouch --
  }
  //classic touch
  else{
    brick.hp --
    player.score += 10 + player.combo
    player.combo ++
  }
}


//Create a 2nd (or n-th) ball
//Directly allowed to move
function cloneball(ballTab){

  ballTab.push(new Ball() )

  var i = ballTab.length -1
  ballTab[i].init()
  ballTab[i].canMove = true
}


function teleport(startBrick, ball, bottomOrTop){

  var delta = 0
  // alert("hey start teleport\nball.x = " + ball.x + "\nball.y = " + ball.y
  //                         + "\nstart.x = " + startBrick.x + "\nstart.y = " + startBrick.y
  //                         + "\ndest.x = " + startBrick.teleportDestX + "\n dest.y = " + startBrick.teleportDestY
  //                         )

  if(bottomOrTop == true){

    //Reset ySpeed
    ball.yspeed *= -1   


    // x is at the opposit position on the opposit side of the destination brick
    delta = ball.x - startBrick.x
    ball.x = startBrick.teleportDestX + startBrick.w - delta
    //alert("delta = " + delta + "\ndestX = " + startBrick.teleportDestX + "\nw = " + startBrick.w)

    if(ball.y < startBrick.y){
    // if TOP go to BOTTOM edge
      ball.y = startBrick.teleportDestY + startBrick.h + margin
    }
    else{
    // if BOTTOM go to TOP edge
      ball.y = startBrick.teleportDestY - margin
    }
  }
  // RIGHT or LEFT
  else {

    //Reste xSpeed
    ball.xspeed *= -1


    // y is at the opposit position on the opposit side of the destination brick
    delta = ball.y - startBrick.y
    ball.y = startBrick.teleportDestY + startBrick.h - delta


    if(ball.x < startBrick.x){
    // if LEFT go to RIGHT edge
      ball.x = startBrick.teleportDestX + startBrick.w + margin
    }
    else{
    // if RIGHT go to LEFT edge
      ball.x = startBrick.teleportDestX - margin
    }
  }
}

//seek for the 2 teleport bricks, if they exist. Always in pair.
function teleportDestination(i, idDest){

  //if brick[i] is the first teleport birck founded...
  if(idDest == -1){
    idDest = i
    return idDest;
  }
  //... else we can set the destBrick in the 2 teleport bricks
  else{
    
    brick[i].teleportDestX = brick[idDest].x
    brick[i].teleportDestY = brick[idDest].y


    brick[idDest].teleportDestX = brick[i].x
    brick[idDest].teleportDestY = brick[i].y
    //alert(brick[i].teleportDestX)
    return -1;
  }
}