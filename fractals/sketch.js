
var factor = Math.random() * (0.67 - 0.5) + 0.5;
function setup() {
    var canvas = createCanvas(500 , 400 );
    canvas.parent('parent');
    noLoop()
}

function draw() {
background(217, 236, 242)
var baseLength = 200;

angle =  PI/10;
stroke(70, 51, 51)
translate(width/2,height)
branch(baseLength)


}

function branch(baseLength){

    line( 0,0,0,- baseLength)
    translate(0, -baseLength*random(0.5,1))

    if(baseLength > 4){
      
        if(baseLength < 6){
            stroke(random(100,255), random(183,255), random(197,255))
        }
        for( var i  = 0 ; i < random(1,10);i++){
        if(random(0,1) > 0.5){
            push()
            var mul = 1;
            if (Math.random() < 0.5){
                mul = -1;
            }
            rotate(mul*angle*random(0, 5))
            branch(baseLength*random(0.3,0.67));
            pop()
        }
        
        if(random(0,1) > 0.5){
        push()
        var mul = 1;
        if (Math.random() < 0.5){
            mul = -1;
        }
        rotate(mul*angle*random(0, 5))
        branch(baseLength*random(0.3,0.67));
        pop()
        }
        
        if(random(0,1) > 0.5){
        push()
        var mul = 1;
        if (Math.random() < 0.5){
            mul = -1;
        }
        rotate(mul*angle*random(0, 5))
        branch(baseLength*random(0.3,0.67));
        pop()
    }
    }

    }
  

}