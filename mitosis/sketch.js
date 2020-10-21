var cells = []
function setup() {
    var canvas = createCanvas(800 , 450 );
    canvas.parent('parent');

    cells.push(new Cell());
  }

function draw() {
  background(39,48,67);

  for (var i = cells.length - 1 ; i >=0 ; i--){
    cells[i].move();
    cells[i].show();
    console.log(cells[i].r);
    if(cells[i].r >50){
     
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i,1);
    }
  }
}

  function mousePressed(){
    for (var i = cells.length - 1 ; i >=0 ; i--){
      if(cells[i].clicked(mouseX,mouseY)){
        cells.push(cells[i].mitosis());
        cells.push(cells[i].mitosis());
        cells.splice(i,1);
      }
  }
}