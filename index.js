let roll=document.getElementById("button");
let dice=document.getElementById("buttonLabel");

roll.onclick=function(){
    dice.textContent=Math.floor((Math.random()*6+1));
}
