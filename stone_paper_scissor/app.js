let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice()
{
    const choices=['r','p','s'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function convertToWord(letter)
{
    if(letter==="r") return "Rock";
    if(letter==="p") return "paper";
    return "scissors";
}
function win(userChoice,computerChoice)
{
   userScore++;
   userScore_span.innerHTML=userScore;
   const userChoice_div=document.getElementById(userChoice);
   computerScore_span.innerHTML=computerScore;
   const smallUserWord="user".fontsize(3).sub();
   const smallCompWord="comp".fontsize(3).sub();
   result_div.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You Wins!`;
   userChoice_div.classList.add('green-glow');
   setTimeout( function(){ userChoice_div.classList.remove('green-glow')},300);
}

function draw(userChoice,computerChoice)
{
    const userChoice_div=document.getElementById(userChoice);
     const smallUserWord="user".fontsize(3).sub();
const smallCompWord="comp".fontsize(3).sub();
result_div.innerHTML=`${convertToWord(userChoice)}${smallUserWord} Equals to ${convertToWord(computerChoice)}${smallCompWord} it Draw the GAME...`;
userChoice_div.classList.add('grey-glow');
setTimeout(function(){ userChoice_div.classList.remove('grey-glow')},300);
}

function lose(userChoice,computerChoice)
{
    
    const userChoice_div=document.getElementById(userChoice);
    
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord="user".fontsize(3).sub();
   const smallCompWord="comp".fontsize(3).sub();
   result_div.innerHTML=`${convertToWord(userChoice)}${smallUserWord} losses to ${convertToWord(computerChoice)}${smallCompWord} You lost..`;
   userChoice_div.classList.add('red-glow');
   setTimeout(function(){ userChoice_div.classList.remove('red-glow')},300);
}
function game(userChoice)
{
    const computerChoice=getComputerChoice();
    switch(userChoice + computerChoice){
       case "pr":
       case "sp":
       case "rs":
           win(userChoice,computerChoice);
           break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
            case "rr":
            case "pp":
            case "ss":
            draw(userChoice,computerChoice);
            break;                     
    }
}
function main()
{
    rock_div.addEventListener('click',function(){
    
        game("r");
    }
    )
    paper_div.addEventListener('click',function(){
    
        game("p");
    })
    scissor_div.addEventListener('click',function(){
    
        game("s");
    })

}
main();
