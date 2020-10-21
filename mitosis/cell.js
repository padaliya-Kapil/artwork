function Cell(pos,r,c){
  if(pos){
    this.pos = pos.copy();
    this.pos.x += random(-r,r);
    this.pos.y += random(-r,r);
  }else{
    this.pos = createVector(random(width),random(height));
  }

    this.r = r || 25 ;
    this.c = c || color(0,random(100,255),random(100,255),100);
    this.birth = new Date().getTime();

    this.move = function(){
      var velocity = p5.Vector.random2D();
      this.pos.add(velocity);
    };

    this.show = function(){
      noStroke();
      fill(this.c);
      var ageFactor = 1 + 0.0001* Math.floor((new Date().getTime() - this.birth)/1000);
      this.r = this.r*ageFactor;
      circle(this.pos.x, this.pos.y, this.r*2);
    }
    this.mitosis = function(){
      return new Cell (this.pos, this.r/2 , this.c);
    }
    this.clicked = function(x,y){
      var d = dist(this.pos.x ,this.pos.y,x,y);
      if(d<this.r) return true;
      return false;
    }
}