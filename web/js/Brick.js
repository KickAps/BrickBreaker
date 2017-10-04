function Brick(bricks){

	this.w = 60
	this.h = 15

	this.x = bricks.xAxis
	this.y = bricks.yAxis

	this.hp = bricks.hp
		
	this.show = function(){

		fill(255) //WHITE
		rect(this.x, this.y, this.w, this.h)
	}

	this.update = function(i){
		if(brick[i].hp <= 0){
			brick.splice(i, 1)
		}
	}

	//this.end = function(){
		
	//}
}