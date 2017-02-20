
var mtag;
var arry = new Array(3);
var getcolor = document.getElementById("mydiv");
var num =getcolor.getElementsByTagName("div");
var btn = document.getElementsByClassName("buttn");

/*按钮事件*/
for(var i = 0;i<btn.length;i++){
  btn[i].onmouseover = function (){
    colorover(this);
  };
  btn[i].onmouseout = function (){
    colorout(this);
  }
}
function colorover(obj){
  obj.style.backgroundColor="orange";
  obj.style.color="white";
}
function colorout(obj){
  obj.style.backgroundColor="white";
  obj.style.color="orange";
}


/*闪*/
function flash(tag){
  for(var i=0;i<num.length;i++){
    num[i].style.backgroundColor="orange";
  }
  if(tag) {
    startf();
  }else {
    clearTimeout(mtag);
  }
}
/*得到随机不等的3个数*/
function startf(){
  for(var i=0;i<num.length;i++){
    num[i].style.backgroundColor="orange";
  }

  arry[0] = Math.floor(Math.random()*9);
  do{
    arry[1] = Math.floor(Math.random()*9);
  }while (arry[0] == arry[1]);
  do {
    arry[2] = Math.floor(Math.random()*9);
  }while (arry[2] == arry[0] || arry[2] == arry[1]);

  for(var j=0;j<arry.length;j++) {
    num[arry[j]].style.backgroundColor = getRandomColor();
  }

  mtag=setTimeout("startf()",1000);
}

/*得到随机颜色*/
function getRandomColor()
{
  return '#'+(function(color){
      return(color+='0123456789abcdef'[Math.floor(Math.random()*16)])&&
      (color.length == 6)? color : arguments.callee(color);})("")

}
