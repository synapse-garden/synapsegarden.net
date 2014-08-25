var i=0;
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.fillStyle = "rgba(0, 0, 255, .5)";
anim();

function anim() {

  while(true)
  {
    if( i > 175 )
      i=0;
    i+=1;
    context.fillRect(25, 25, 25+i, 25+i);
    setTimeout(doMove,20);
  }
}
