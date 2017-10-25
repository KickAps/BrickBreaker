function Ball(){

	//ball location/dimensions
	this.x = width/2
	this.y = height /2
	this.diameter = 20

	this.xspeed = 0
	this.yspeed = 0
	this.canMove = false

	//Powers features
	this.supertouch = 0 // normal is 0
	this.slowtouch = -1 // normal is -1

	//Last position
	this.lastx = this.x
	this.lasty = this.y

	//Debuging help
	this.displayParam = function(){
		alert("Ball :"
				+ "\nx = " + this.x
				+ "\ny = " + this.y
				+ "\ndiameter = " + this.diameter
				+ "\nlast x = " + this.lastx
				+ "\nlast y = " + this.lasty
				+ "\nxspeed = " + this.xspeed
				+ "\nyspeed = " + this.yspeed
				+ "\ncanMove = " + this.canMove
				+ "\nsupertouch = " + this.supertouch
				+ "\nslowtouch = " + this.slowtouch
			)
	}	

	//Ball movement initialization 
	//Speeds are defined, but the ball can't move...
	this.init = function(initX, initY){

		this.x = initX // width/2
		this.y = initY // height/2

		while (this.xspeed == 0){
			this.xspeed = floor(random(-5, 5))
		}
		
		this.yspeed = 3
		this.canMove = false
		this.supertouch = 0
		this.slowtouch = -1
	}

	//Show the ball
	this.show = function(){

		fill(0, 255, 0) //GREEN
		ellipse(this.x, this.y, this.diameter, this.diameter)
	}

	//Update the ball position 
	this.update = function(){

		unfreezeGame(this, player1, player2)

		if(this.canMove == true){
			this.lastx = this.x
			this.lasty = this.y
			this.x += this.xspeed
			this.y += this.yspeed
		}
		else{
			textAlign(CENTER);
			fill('WHITE')
			title = text("PRESS SPACE\nTO START", width/2, height/2 + 50)
		}
	}

	//Edges collisions 
	this.edgeBounce = function(i){

		// Bounce on canvas Edges
		// Bounce left & right
		if(this.x<margin || this.x>width-margin)
			this.xspeed *= -1

		// Bounce Top
		if(this.y<margin) //  || this.y>height-margin
			this.yspeed *= -1

		//Under player cursors (bottom edge), out of the game
		if(this.y>height - 50){

			//Players life management
			if(this.x < width/2){
				player1.life --
			}
			else if(this.x > width/2){
				player2.life --
			}

			//Restart the sketch with a freeze screen if this is the last ball to disappear ...
			if(ballTab.length < 2){
				freezeGame(this, player1, player2)
				this.init()
			}
			//... only destroy a ball in the tab
			else{
				//alert("hey else start")
				ballTab.splice(i, 1)

				//alert("hey else end")
			}
		}
	}

	//Players collisions 
	this.playerBounce = function(currentPlayer, previousPlayer){ 

		if(this.y >= currentPlayer.y - margin && this.y <= currentPlayer.y + currentPlayer.h/2 - margin ){

			if(this.x >= currentPlayer.x - margin && this.x <= currentPlayer.x + currentPlayer.w + margin){

				this.yspeed *= -1
				currentPlayer.iHaveBall = true
				previousPlayer.iHaveBall = false
				previousPlayer.combo = 0

				switch (true) {

	                case (this.x <= currentPlayer.x + currentPlayer.w / 6):
	                    this.xspeed = -5
	                    break

	                case (this.x <= currentPlayer.x + currentPlayer.w * 2/6):
	                    this.xspeed = -3
	                    break

	                case (this.x <= currentPlayer.x + currentPlayer.w * 3/6):
	                    
						this.xspeed = -1
	                    break

	                case (this.x <= currentPlayer.x + currentPlayer.w * 4/6):
	                    this.xspeed = 1
	                    break

                    case (this.x <= currentPlayer.x + currentPlayer.w * 5/6):
	                    this.xspeed = 3
	                    break

	                default:
	                    this.xspeed = 5
	            }
			}
		}
	}

	//Bricks collisions ( in development ) 
	this.brickBounce = function(brick, player, ballID){

		for (var i = 0; i < brick.length; i++) {

			//BOTTOM / TOP
			if(this.x >= brick[i].x && this.x <= brick[i].x + brick[i].w)

				if(this.y >= brick[i].y - margin && this.y <= brick[i].y + brick[i].h + margin){

	    			this.yspeed *= -1

					brick[i].seekPower(this, true, false, ballID)

					if(brick[i].hp > -1){
						superball(player, this, brick[i])
						slowball(this)
					}
				}

			//LEFT / RIGHT
			if(this.y >= brick[i].y && this.y <= brick[i].y + brick[i].h)

				if(this.x >= brick[i].x - margin && this.x <= brick[i].x + brick[i].w + margin){

	    			this.xspeed *= -1

					brick[i].seekPower(this, false, false, ballID)

					if(brick[i].hp > -1){
						superball(player, this, brick[i])
						slowball(this)
					}
				}

			brick[i].update(i)
 		}
	}

	// Method 
	// use this web page : https://yal.cc/rectangle-circle-intersection-test/
	this.brickBounce2 = function(brick, player, ballID){

		var nearestX
		var nearestY
		var deltaX
		var deltaY


		for (var i = 0; i < brick.length; i++) {

			//Seek the nearest point on the brick to the ball
			nearestX = max(brick[i].x, min(this.x, brick[i].x + brick[i].w) )
			nearestY = max(brick[i].y, min(this.y, brick[i].y + brick[i].h) )

			//Seek delta distance between the center of the ball and the nearest point
			deltaX = this.x - nearestX
			deltaY = this.y - nearestY

			//If delta <= ball radius, their is a collision at the nearest point or more
			//   (deltaX^2 + deltaY^2) <= radius^2
			if( pow(deltaX, 2) + pow(deltaY, 2) <= pow(this.diameter/2, 2) ){

				//Collision !!!

				if( (nearestY == brick[i].y || nearestY == brick[i].y + brick[i].h)
						&& nearestX > brick[i].x && nearestX < brick[i].x + brick[i].w){

					//BOTTOM or TOP

					//reverse yspeed for bounce
					this.yspeed *= -1

					//or Teleport brick : 	BOTTOM or TOP ? true.		CORNER ? false.
					brick[i].seekPower(this, true, false, ballID)

					teleport(brick[i], this)

					if(brick[i].hp > -1){

						//Check if there are remaining supertouchs, else it's a classic touch
						superball(player, this, brick[i])
						//Check if there are remaining slowtouchs, else speed*2
						slowball(this)
					}

				}
				else if( (nearestX == brick[i].x || nearestX == brick[i].x + brick[i].w)
						&& nearestY > brick[i].y && nearestY < brick[i].y + brick[i].h){

					//RIGHT or LEFT

					//reverse xspeed for bounce
					this.xspeed *= -1

					//or Teleport brick : 	BOTTOM or TOP ? false.		CORNER ? false.
					brick[i].seekPower(this, false, false, ballID)

					if(brick[i].hp > -1){

						//Check if there are remaining supertouchs, else it's a classic touch
						superball(player, this, brick[i])
						//Check if there are remaining slowtouchs, else speed*2
						slowball(this)
					}
				}
				else{

					//CORNER

					switch(true){
						case(this.lastx > brick[i].x
								&& this.lastx < brick[i].x + brick[i].w):

							//TOP & BOTTOM
							this.yspeed *= -1

							break

						case(this.lasty > brick[i].y
								&& this.lasty < brick[i].y + brick[i].h):

							//RIGHT & LEFT
							this.xspeed *= -1

							break

						default:

							//was in CORNER area
							this.xspeed *= -1
							this.yspeed *= -1

							break
					}


					//for Teleport brick : 	BOTTOM or TOP ? false.		CORNER ? true.
					brick[i].seekPower(this, false, true, ballID)

					if(brick[i].hp > -1){

						//Check if there are remaining supertouchs, else it's a classic touch
						superball(player, this, brick[i])
						//Check if there are remaining slowtouchs, else speed*2
						slowball(this)
					}

				}
			}

			brick[i].update(i)
		}
	}

}