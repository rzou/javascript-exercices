"use strict";
document.body.onload = setStyle();

function setStyle() {
  var text = document.getElementById("result");
  //text.style.color = rgb(0,0,0);
  text.style.padding = 0;
  text.style.height = 0;
  text.style.width = 0;
  //text.style.radius = 0;
  //text.style.rotation = 0;

}

function modify(elem) {
  var range = elem.id;
  var val = elem.value;
  //alert(range);
  switch(range) {
    case "rgb": 
      document.getElementById("result").style.background="rgb("+val+","+val+","+val+")";
      var c= 255-val;
      document.getElementById("result").style.color="rgb("+c+","+c+","+c+")";
      break;
    case "padding": document.getElementById("result").style.padding = val+"px";break;
    case "height": document.getElementById("result").style.height = val+"px";break;
    case "width": document.getElementById("result").style.width = val+"px";break;
    case "arrondi": document.getElementById("result").style.borderRadius = val+"px";break;
    case "rotation": 
      document.getElementById("result").style.transform = "rotate("+val+"deg)"
      break;
  }
}