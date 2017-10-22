

/************ GAMEPLAY *************/


//Watch if someone wins
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
  if(brick.length - undestructibleBricks == 0){

    if(player1.score > player2.score){
      alert(player1.name + ' IS THE WINNER !!!');
    }
    else if(player1.score < player2.score){
      alert(player2.name + ' IS THE WINNER !!!');
    }
    else
      alert('!!! DRAW !!!');

    restart()
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

  slowball(ball)
}


function cloneball(ball){

}


function teleport(startBrick, endBrick, ball){

}