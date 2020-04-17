var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("#winScore");
var addButton = document.querySelector("#addPlayer");
var removeButton = document.querySelector("#removePlayer");

var p1Point = 0;
var p2Point = 0;
var winPoint = 5;
var gameOver = false;

var p1Display = document.getElementById("p1Score");
var p2Display = document.getElementById("p2Score");

var playerList = document.querySelector("ul");

p1Button.addEventListener("click",function() {
  if(!gameOver){
    p1Point++;
    p1Display.textContent = p1Point;
    if(p1Point === winPoint){
      p1Display.classList.add("winner");
      gameOver = true;
    }
  }
});

p2Button.addEventListener("click",function() {
  if(!gameOver){
    p2Point++;
    p2Display.textContent = p2Point;
    if(p2Point === winPoint){
      p2Display.classList.add("winner");
      gameOver = true;
    }
  }
});

resetButton.addEventListener("click",function() {
  reset();
});

function reset(){
  p1Display.textContent = p2Display.textContent = p1Point = p2Point = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change",function(){
  winPoint = Number(this.value);
  if(winPoint < 0){this.value = winPoint = 0;}
  document.querySelector("#endScore").textContent = winPoint;
  reset();
});

//Player LIST

var winnerList  = document.querySelectorAll("li");

for(i = 0; i < winnerList.length; i++){
  winnerList[i].addEventListener("mouseover",function(){
    this.classList.add("gold");
  });
  winnerList[i].addEventListener("mouseout",function(){
    this.classList.remove("gold");
  });
  winnerList[i].addEventListener("click",function(){
    this.classList.toggle("off");
  });
}

addButton.addEventListener("click",function() {
  var nameInput = document.getElementById("namePlayer").value;
  if(nameInput === ''){
      alert("Get a player name");
  } else {
    var newPlayer = document.createElement("li");
    newPlayer.textContent = nameInput;
    playerList.appendChild(newPlayer);
  }
});

removeButton.addEventListener("click",function(){
  if(playerList.childElementCount > 0){
    playerList.removeChild(playerList.lastChild);
  }
});
