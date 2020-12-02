// let users = require('../Database Fake/database');
let isGlobalLeaderboard = true;
let currentLeaderboard = 0
let possibleLeaderboards = ["overallButton", "ticTacToeButton", "hangmanButton", "sudokuButton", "connect4Button", "rpsButton", "pokerButton", 
"blackjackButton", "wordSearchButton", "snakeButton", "pacmanButton", "froggerButton", "cookieClickerButton"]

function selectAButton(buttonElement){
    let listOfButtons = buttonElement.parentNode.parentNode.querySelectorAll("button");
    for (let buttonIndex = 0; buttonIndex < listOfButtons.length; buttonIndex++){
        if (listOfButtons[buttonIndex] == buttonElement){
            buttonElement.style.backgroundColor = "lavender";
        }
        else {
            listOfButtons[buttonIndex].style.backgroundColor = "whiteSmoke";
        }
    }
}

document.getElementById("globalButton").addEventListener('click', function (event){
    let button = document.getElementById("globalButton");
    selectAButton(button);
});

document.getElementById("classButton").addEventListener('click', function (event){
    let button = document.getElementById("classButton");
    selectAButton(button);
});

document.getElementById("overallButton").addEventListener('click', function (event){
    let button = document.getElementById("overallButton");
    selectAButton(button);
});

document.getElementById("ticTacToeButton").addEventListener('click', function (event){
    let button = document.getElementById("ticTacToeButton");
    selectAButton(button);
});

document.getElementById("hangmanButton").addEventListener('click', function (event){
    let button = document.getElementById("hangmanButton");
    selectAButton(button);
});

document.getElementById("sudokuButton").addEventListener('click', function (event){
    let button = document.getElementById("sudokuButton");
    selectAButton(button);
});

document.getElementById("connect4Button").addEventListener('click', function (event){
    let button = document.getElementById("connect4Button");
    selectAButton(button);
});

document.getElementById("rpsButton").addEventListener('click', function (event){
    let button = document.getElementById("rpsButton");
    selectAButton(button);
});

document.getElementById("wordSearchButton").addEventListener('click', function (event){
    let button = document.getElementById("wordSearchButton");
    selectAButton(button);
});

function setGlobalOrLocalLeaderboard(buttonID){
    let buttonReference = ["globalButton", "classButton"]
    if (isGlobalLeaderboard && buttonID == 1){
        document.getElementById(buttonReference[0]).style.backgroundColor = "whiteSmoke";
        document.getElementById(buttonReference[1]).style.backgroundColor = "lavender";
        isGlobalLeaderboard = false;
    }
    else{
        document.getElementById(buttonReference[0]).style.backgroundColor = "lavender";
        document.getElementById(buttonReference[1]).style.backgroundColor = "whiteSmoke";
        isGlobalLeaderboard = true;
    }
}

function getLeaderboard(leaderboardReference){
    if (isGlobalLeaderboard){
        if (currentLeaderboard != leaderboardReference){
            document.getElementById(possibleLeaderboards[leaderboardReference]).style.backgroundColor = "lavender";
            document.getElementById(possibleLeaderboards[currentLeaderboard]).style.backgroundColor = "whiteSmoke";
            currentLeaderboard = leaderboardReference;
        }
    }
    else{
        if (currentLeaderboard != leaderboardReference){
            document.getElementById(possibleLeaderboards[leaderboardReference]).style.backgroundColor = "lavender";
            document.getElementById(possibleLeaderboards[currentLeaderboard]).style.backgroundColor = "whiteSmoke";
            currentLeaderboard = leaderboardReference;
        }
    }
}