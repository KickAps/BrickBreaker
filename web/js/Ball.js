function Ball(){

	this.x = width/4
	this.y = height *3/4
	this.diameter = 20
	this.xspeed = 0
	this.yspeed = 5

	//Show the ball
	this.show = function(){

		fill(0, 255, 0) //GREEN
		ellipse(this.x, this.y, this.diameter, this.diameter)
	}

	//Update the ball position 
	this.update = function(){

		this.x += this.xspeed
		this.y += this.yspeed
	}

	//Edges collisions 
	this.edgeBounce = function(){

		if(this.x<margin || this.x>width-margin)
			this.xspeed *= -1

		if(this.y<margin)
			this.yspeed *= -1

		if(this.y>height+this.diameter/2){
			this.init()
		}
	}

	//Ball initialization 
	this.init = function(){
		this.x = width/4
		this.y = height *3/4
		this.xspeed = 0
	}

	//Players collisions 
	this.playerBounce = function(playerTrue, playerFalse){ 

		if(this.y >= playerTrue.y - margin && this.y <= playerTrue.y + playerTrue.h/2 - margin ){

			if(this.x >= playerTrue.x - margin && this.x <= playerTrue.x + playerTrue.w + margin){

				this.yspeed *= -1
				playerTrue.iHaveBall = true
				playerFalse.iHaveBall = false

				switch (true) {

	                case (this.x <= playerTrue.x + playerTrue.w / 5):
	                    this.xspeed = -4
	                    break

	                case (this.x <= playerTrue.x + playerTrue.w * 2/5):
	                    this.xspeed = -2
	                    break

	                case (this.x <= playerTrue.x + playerTrue.w * 3/5):
	                    
						this.xspeed = 0
	                    break

	                case (this.x <= playerTrue.x + playerTrue.w * 4/5):
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
					brick[i].hp --
					player.score += 10
				}

			//LEFT / RIGHT
			if(this.y >= brick[i].y && this.y <= brick[i].y + brick[i].h)
				if(this.x >= brick[i].x - margin && this.x <= brick[i].x + brick[i].w + margin){
				
					this.xspeed *= -1
					brick[i].hp --
					player.score += 10
				}
				

			brick[i].update(i)
 		}
	}
}