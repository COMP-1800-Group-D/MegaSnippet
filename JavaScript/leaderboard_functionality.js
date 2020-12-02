let users = require('../Database Fake/database');
let isGlobalLeaderboard = true;
let currentLeaderboard = 0
let possibleLeaderboards = ["overallButton", "ticTacToeButton", "hangmanButton", "sudokuButton", "connect4Button", "rpsButton", "pokerButton", 
"blackjackButton", "wordSearchButton", "snakeButton", "pacmanButton", "froggerButton", "cookieClickerButton"]

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