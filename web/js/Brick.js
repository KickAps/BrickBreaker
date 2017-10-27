function Brick(bricks){

	//Bricks dimensions
	this.w = 80
	this.h = 25

	//Bricks location
	this.x = bricks.xAxis
	this.y = bricks.yAxis

	this.hp = bricks.hp
	this.power = bricks.power

	this.teleportDestX = -1
	this.teleportDestY = -1


	//Debuging help
	this.displayParam = function(){
		alert("Brick :"
				+ "\nx = " + this.x
				+ "\ny = " + this.y
				+ "\nwidth = " + this.w
				+ "\nheight = " + this.h
				+ "\nhp = " + this.hp
				+ "\npower = " + this.power
				+ "\nDest X = " + this.teleportDestX
				+ "\nDest Y = " + this.teleportDestY
			)
	}	
		
	//Show the brick
	//RGB colors : http://www.rapidtables.com/web/color/RGB_Color.htm
	this.show = function(){

		stroke(255) //WHITE

		if(this.power != ''){
			if(this.power == 'undestructible')
	            fill(192,192,192) //SILVER
	        else
	        	//other powers
				fill(255,20,147) //DEEP PINK
		}
		else {
			switch (true) {

	            case (this.power != ''):
            	    fill(255,20,147) //DEEP PINK
	                break

	            case (this.hp == 1):
	                fill(233,150,122) //DARK SALMON
	                break

	            case (this.hp == 2):
	                fill(255,99,71) //TOMATO
	                break

	            case (this.hp == 3):
	                fill(220,20,60) //CRIMSON
	                break

	            case (this.hp == 4):
	                fill(139,0,0) //DARK RED
	                break

	            default:
	                fill(255) //WHITE
	    	}
		}	

		rect(this.x, this.y, this.w, this.h)
	}

	//Update the brick state 
	this.update = function(i){

		if(this.hp < 1){
			brick.splice(i, 1)
		}
	}


	this.seekPower = function(ball, bottomOrTop, corner, ballID){


		switch (true) {

	        case (this.power == 'superball'): //superball
	        	ball.supertouch = 5
	            break

	        case (this.power == 'slowball'): //slowball
	        	ball.slowtouch = 5
	        	ball.yspeed = ball.yspeed/2
	            break

	        case (this.power == 'cloneball'): //cloneball
	            cloneball(ballTab, ballID)
	            break

	        default:
	        	break
	                    
	    }
		
	    if(this.power != 'teleport' && this.power != 'undestructible'){
	    	this.power = ''
	    }
	}

}