"use strict";

function modify(elem) {
  var range = elem.id;
  var val = elem.value;
  var result = document.getElementById("result");
  var resultStyle = result.style;
  switch(range) {
    case "rgb": 
      resultStyle.background="rgb("+val+","+val+","+val+")";
      var c= 255-val;
      resultStyle.color="rgb("+c+","+c+","+c+")";
      break;
    case "padding": resultStyle.padding = val+"px";break;
    case "height": resultStyle.height = val+"px";break;
    case "width": resultStyle.width = val+"px";break;
    case "arrondi": resultStyle.borderRadius = val+"px";break;
    case "rotation": 
      resultStyle.transform = "rotate("+val+"deg)"
      break;
  }
}