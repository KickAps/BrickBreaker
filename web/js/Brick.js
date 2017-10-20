function Brick(bricks){

	this.w = 80
	this.h = 25

	this.x = bricks.xAxis
	this.y = bricks.yAxis

	this.hp = bricks.hp
		
	//Show the brick
	this.show = function(){

		fill(122) //GREY
		rect(this.x, this.y, this.w, this.h)
	}

	//Update the brick state 
	this.update = function(i){
		if(brick[i].hp <= 0){
			brick.splice(i, 1)
		}
	}
}