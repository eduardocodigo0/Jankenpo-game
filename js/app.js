//html elements
var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissor = document.getElementById("scissor");
var button = document.getElementById("action");
var player_score = document.getElementById("play-score");
var computer_score = document.getElementById("comp-score");
var computer_hand = document.getElementById("computer-hand");
var h4_comp = document.getElementById("comp-h4");
var h4_play = document.getElementById("play-h4");

//Sounds
var win = new Audio("sound/coin.mp3");
var lose = new Audio("sound/dead.wav");
var draw = new Audio("sound/bump.mp3");


var player_points = 0;
var computer_points = 0;

var choice = 0;
paper.style.border = "4px solid #F7FF16";
paper.style.borderRadius = "5px";





//player choices
paper.addEventListener("click", function(){
  choice = 0;
  makeBorder(choice);
});

rock.addEventListener("click", function(){
  choice = 2;
  makeBorder(choice);
});

scissor.addEventListener("click", function(){
  choice = 1;
  makeBorder(choice);
});

function makeBorder(choice){
  paper.style.border = "";
  rock.style.border = "";
  scissor.style.border = "";

  if(choice == 0){
    paper.style.border = "4px solid #F7FF16";
    paper.style.borderRadius = "5px";
  }else if(choice == 1){
    scissor.style.border = "4px solid #F7FF16";
    scissor.style.borderRadius = "5px";
  }else{
    rock.style.border = "4px solid #F7FF16";
    rock.style.borderRadius = "5px";
  }
}

//Main

function backToNormalColor(){
  h4_comp.style.backgroundColor = "#1B1B1B";
  h4_play.style.backgroundColor = "#1B1B1B";
}


button.addEventListener("click", function(){

  computer_choice = Math.floor(Math.random()*3);
  computer_hand.src = "img/hand-"+computer_choice+".png";

  if(choice == computer_choice){
    h4_comp.style.backgroundColor = "gray";
    h4_play.style.backgroundColor = "gray";
    draw.play();
  }else if((choice == 0 && computer_choice == 2) || (choice == 1 && computer_choice == 0) || (choice == 2 && computer_choice == 1) ){
    h4_comp.style.backgroundColor = "red";
    h4_play.style.backgroundColor = "green";
    win.play();


    ++player_points;
  }else{
    h4_comp.style.backgroundColor = "green";
    h4_play.style.backgroundColor = "red";
    lose.play();


    ++computer_points;
  }

  player_score.innerHTML = "Player: "+ player_points;
  computer_score.innerHTML= "Computer: "+computer_points;
  setTimeout(backToNormalColor, 500);
});
