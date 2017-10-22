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


	//Ball movement initialization 
	//Speeds are defined, but the ball can't move...
	this.init = function(){

		this.x = width/2
		this.y = height /2
		this.xspeed = floor(random(-5, 5))
		this.yspeed = 5
		this.canMove = false
	}

	//...Ball moving authorization
	this.move = function(){

		if(keyIsDown(32)){ // SPACE
			this.canMove = true
		}
	}

	//Show the ball
	this.show = function(){

		fill(0, 255, 0) //GREEN
		ellipse(this.x, this.y, this.diameter, this.diameter)
	}

	//Update the ball position 
	this.update = function(){

		this.move()

		if(this.canMove == true){
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
	this.edgeBounce = function(){

		if(this.x<margin || this.x>width-margin)
			this.xspeed *= -1

		if(this.y<margin)
			this.yspeed *= -1

		if(this.y>height - 50){

			//Players life management
			if(this.x < width/2){
				player1.life --
			}
			else if(this.x > width/2){
				player2.life --
			}

			player1.combo = 0
			player2.combo = 0

			this.init()
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

	                case (this.x <= currentPlayer.x + currentPlayer.w / 5):
	                    this.xspeed = -4
	                    break

	                case (this.x <= currentPlayer.x + currentPlayer.w * 2/5):
	                    this.xspeed = -2
	                    break

	                case (this.x <= currentPlayer.x + currentPlayer.w * 3/5):
	                    
						this.xspeed = 0
	                    break

	                case (this.x <= currentPlayer.x + currentPlayer.w * 4/5):
	                    this.xspeed = 2
	                    break

	                default:
	                    this.xspeed = 4
	            }
			}
		}
	}

	//Bricks collisions ( in development ) 
	this.brickBounce = function(brick, player){

		for (var i = 0; i < brick.length; i++) {

			// //BOTTOM
			// if(this.y <= brick[i].y + margin && this.y >= brick[i].y -5)
			// 	if(this.x >= brick[i].x && this.x <= brick[i].x + brick[i].w){

			// 		this.yspeed *= -1
			// 		brick[i].hp --
			// 	}

			// //TOP
			// if(this.y <= brick[i].y + brick[i].h + margin && this.y >= brick[i].y + brick[i].h -5)
			// 	if(this.x >= brick[i].x && this.x <= brick[i].x + brick[i].w){

			// 		this.yspeed *= -1
			// 		brick[i].hp --
			// 	}

			// //LEFT
			// if(this.x <= brick[i].x + margin && this.x >= brick[i].x -5)
			// 	if(this.y >= brick[i].y && this.y <= brick[i].y + brick[i].h){

			// 		this.xspeed *= -1
			// 		brick[i].hp --
			// 	}

			// //RIGHT
			// if(this.x <= brick[i].x + brick[i].w + margin && this.x >= brick[i].x + brick[i].w - 5)
			// 	if(this.y >= brick[i].y && this.y <= brick[i].y + brick[i].h){

			// 		this.xspeed *= -1
			// 		brick[i].hp --
			// 	}

			//BOTTOM / TOP
			if(this.x >= brick[i].x && this.x <= brick[i].x + brick[i].w)

				if(this.y >= brick[i].y - margin && this.y <= brick[i].y + brick[i].h + margin){

					this.yspeed *= -1

					brick[i].seekPower(this)

					if(brick[i].hp > -1){
						superball(player, this, brick[i])
					}
				}

			//LEFT / RIGHT
			if(this.y >= brick[i].y && this.y <= brick[i].y + brick[i].h)

				if(this.x >= brick[i].x - margin && this.x <= brick[i].x + brick[i].w + margin){

					this.xspeed *= -1

					brick[i].seekPower(this)

					if(brick[i].hp > -1){
						superball(player, this, brick[i])
					}
				}

			brick[i].update(i)
 		}
	}
}