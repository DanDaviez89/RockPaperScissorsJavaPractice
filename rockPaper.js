function computerPlay () 
{
    var randomNumber = 0;
    var computerChoice = "NULL";

    //Generate random number between 1-3
    randomNumber = Math.floor(Math.random()*(3-1+1)+1);

    //Assign computerChoice corrisponding to random number
    if (randomNumber == 1)
    {
        computerChoice = "rock";
    }

    if (randomNumber == 2)
    {
        computerChoice = "paper";
    }

    if (randomNumber == 3)
    {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function checkWinner (computerChoice, playChooice)
{
    if (computerChoice == playChooice)
    {
        console.log("Draw");
        return 2;
    }

    if (computerChoice == "paper" && playChooice == "rock"){
        console.log("Computer Wins");
        return 0;
    }

    if (computerChoice == "rock" && playChooice == "scissors") {
        console.log("Computer Wins");
        return 0;
    }

    if (computerChoice == "scissors" && playChooice == "paper") {
        console.log("Computer Wins");
        return 0;
    }

    else {
        console.log("Player Wins");
        return 1;
    }
}

var computerChoice = "NULL";
var playChooice = "rock";

var gameoverCheck = 0;

var maxPoints = 5;
var playerPoints = 0;
var computerPoints = 0;
var roundWinner = 0;

while (gameoverCheck == 0)
{
    //Generate computer chooice and puts it in a string
    computerChoice = computerPlay();

    //Checks to see who won (returns 0 computer win returns 1 player win)
    roundWinner = checkWinner(computerChoice, playChooice);

    if (roundWinner == 0)
    {
        computerPoints++;
    }
    if (roundWinner == 1)
    {
        playerPoints++;
    }

    console.log(playerPoints);
    console.log(computerPoints);

    //Check if game is over
    if (playerPoints == maxPoints || computerPoints == maxPoints)
    {
        gameoverCheck = 1;

        console.log("Game Finish");

        if (playerPoints == maxPoints){
            console.log("Player Wins");
        }
        else {
            console.log("Computer Wins");
        }
    }
}

const container = document.querySelector('#container');

const content = document.createElement(div);

content.classList.add('content');
content.textContent = 'This is the Text';

container.appendChild(content);