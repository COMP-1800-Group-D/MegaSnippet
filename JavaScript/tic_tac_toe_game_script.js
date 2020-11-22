function playGame(gameSetupData){
    // Switch display from the game setup page to the game play page
    document.getElementById("gameSetupMain").style.display = "none";
    document.getElementById("gamePlayMain").style.display = "block";

    // Read the game setup data
    const gameSides = ['X', 'O'];
    let playerSide = (gameSetupData[0] != -1) ? gameSides[gameSetupData[0]]:gameSides[0];
    let computerSide = (gameSides.indexOf(playerSide) == 0) ? gameSides[1]:gameSides[0]
    const gameDifficultyLevels = [50, 75, 90];
    let gameDifficulty = (gameSetupData[1] != -1) ? gameDifficultyLevels[gameSetupData[1]]:gameDifficultyLevels[0];

    // Setup the game tiles
    let availableTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let userTiles = [];
    let computerTiles = [];
    let gameEnd = false;

    // Check if player or computer is playing first
    if (playerSide == 'O'){
        document.getElementById("messagePrompt").textContent = "You're playing as O, so the computer has picked first!";
        computerPick(computerSide, gameDifficulty, availableTiles, userTiles, computerTiles);
    }
    else {
        document.getElementById("messagePrompt").textContent = "You're playing as X, so you can pick first!";
    }

    // Create the event listener for each tile
    let ticTacToeBoard = document.getElementById("ticTacToeBoard");
    let boardTiles = ticTacToeBoard.querySelectorAll("div");
    for (let tile = 0; tile < boardTiles.length; tile++){
        boardTiles[tile].addEventListener('click', function(event){
            if (!gameEnd && pickTile(tile, availableTiles, userTiles, playerSide)) {
                gameEnd = getGameState(computerSide, gameDifficulty, availableTiles, userTiles, computerTiles);
            }
        });
    }

    document.getElementById("playAgainButton").addEventListener('click', function(event){
        clearBoard()
        document.getElementById("messageWarning").innerHTML = '';
        document.getElementById("playAgainButton").style.visibility = "hidden";
        document.getElementById("newGameButton").style.visibility = "hidden";
        playGame(gameSetupData);
    });
        
    document.getElementById("newGameButton").addEventListener('click', function(event){
        clearBoard()
        document.getElementById("messageWarning").innerHTML = '';
        document.getElementById("playAgainButton").style.visibility = "hidden";
        document.getElementById("newGameButton").style.visibility = "hidden";
        document.getElementById("gameSetupMain").style.display = "block";
        document.getElementById("gamePlayMain").style.display = "none";
        setupGame();
    });
}

function clearBoard(){
    document.getElementById('tile0').innerHTML = '';
    document.getElementById('tile1').innerHTML = '';
    document.getElementById('tile2').innerHTML = '';
    document.getElementById('tile3').innerHTML = '';
    document.getElementById('tile4').innerHTML = '';
    document.getElementById('tile5').innerHTML = '';
    document.getElementById('tile6').innerHTML = '';
    document.getElementById('tile7').innerHTML = '';
    document.getElementById('tile8').innerHTML = '';
}

function getGameState(computerSide, gameDifficulty, availableTiles, userTiles, computerTiles){
    if (didWin(userTiles)){
        document.getElementById("messageWarning").innerHTML = 'Congradulations, you won! If you want to play again, please press the button below!';
        document.getElementById("playAgainButton").style.visibility = "visible";
        document.getElementById("newGameButton").style.visibility = "visible";
        return true;
    }
    else if (didTie(availableTiles)){
        document.getElementById("messageWarning").innerHTML = 'Good game, it was a tie! If you want to play again, please press the button below!';
        document.getElementById("playAgainButton").style.visibility = "visible";
        document.getElementById("newGameButton").style.visibility = "visible";
        return true;
    }
    else {
        // Add a 4000 milisecond wait before executing
        computerPick(computerSide, gameDifficulty, availableTiles, userTiles, computerTiles);
    }
    if (didWin(computerTiles)){
        document.getElementById("messageWarning").innerHTML = 'Unfortunately, you lost! If you want to play again, please press the button below!';
        document.getElementById("playAgainButton").style.visibility = "visible";
        document.getElementById("newGameButton").style.visibility = "visible";
        return true;
    }
    else if (didTie(availableTiles)){
        document.getElementById("messageWarning").innerHTML = 'Good game, it was a tie! If you want to play again, please press the button below!';
        document.getElementById("playAgainButton").style.visibility = "visible";
        document.getElementById("newGameButton").style.visibility = "visible";
        return true;
    }
    else {
        return false;
    }
}

function pickTile(tile, availableTiles, userTiles, playerSide){
    if (availableTiles.includes(tile)) {
        document.getElementById("messageWarning").innerHTML = '';
        let tileID = "tile" + tile;
        document.getElementById(tileID).innerHTML = playerSide;
        userTiles.push(tile);
        removeElementFromArray(tile, availableTiles);
        return true;
    }
    document.getElementById("messageWarning").innerHTML = 'Pease pick an empty tile!';
    return false;
}

function didWin(targetTiles){
    if (targetTiles.includes(0) && targetTiles.includes(1) && targetTiles.includes(2)){
        return true;
    }
    else if (targetTiles.includes(3) && targetTiles.includes(4) && targetTiles.includes(5)){
        return true;
    }
    else if (targetTiles.includes(6) && targetTiles.includes(7) && targetTiles.includes(8)){
        return true;
    }
    else if (targetTiles.includes(0) && targetTiles.includes(3) && targetTiles.includes(6)){
        return true;
    }
    else if (targetTiles.includes(1) && targetTiles.includes(4) && targetTiles.includes(7)){
        return true;
    }
    else if (targetTiles.includes(2) && targetTiles.includes(5) && targetTiles.includes(8)){
        return true;
    }
    else if (targetTiles.includes(0) && targetTiles.includes(4) && targetTiles.includes(8)){
        return true;
    }
    else if (targetTiles.includes(2) && targetTiles.includes(4) && targetTiles.includes(6)){
        return true;
    }
    else{
        return false;
    }
}

function didTie(availableTiles){
    if (availableTiles.length == 0)
    {
        return true;
    }
    return false;
}

function computerPick(computerSide, gameDifficulty, availableTiles, userTiles, computerTiles){
    let pick;
    if (Math.random() * 100 < gameDifficulty){
        pick = bestTicTacToePick(availableTiles, userTiles, computerTiles);
    }
    else {
        pick = availableTiles[Math.floor(Math.random() * availableTiles.length)];
    }
    let compTileID = "tile" + pick;
    document.getElementById(compTileID).innerHTML = computerSide;
    computerTiles.push(pick);
    removeElementFromArray(pick, availableTiles)
}

function bestTicTacToePick(available, userSelected, computerSelected){
    let winningMove = canWin(available, computerSelected);
    let blockingMove = canWin(available, userSelected);
    if (winningMove != -1){
        return winningMove;
    }
    else if (blockingMove != -1){
        return blockingMove;
    }
    return bestMove(available, userSelected, computerSelected);
}

function canWin(available, alreadySelected){
    let winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for (let winningOptionIndex = 0; winningOptionIndex < winningCombos.length; winningOptionIndex++){
        let countInList = 0;
        let missingTile = -1;
        for (let tileInQuestionIndex = 0; tileInQuestionIndex < winningCombos[winningOptionIndex].length; tileInQuestionIndex++){
            let tileInQuestion = winningCombos[winningOptionIndex][tileInQuestionIndex];
            if (alreadySelected.includes(tileInQuestion)){
                countInList++;
            }
            else if (available.includes(tileInQuestion)){
                missingTile = tileInQuestion;
            }
        }
        if (countInList == 2 && missingTile != -1){
            return missingTile;
        }
    }
    return -1;
}

function bestMove(available, userSelected, computerSelected){
    let middleTile = 4
    if (available.includes(middleTile)){
        return middleTile;
    }
    else if (available.includes(0)){
        return 0;
    }
    else if (available.includes(2)){
        return 2;
    }
    else if (available.includes(6)){
        return 6;
    }
    else if (available.includes(8)){
        return 8;
    }
    return available[Math.floor(Math.random() * available.length)];
}

function getBoardState(){
    console.log(document.getElementById('tile0'))
    console.log(document.getElementById('tile1'))
    console.log(document.getElementById('tile2'))
    console.log(document.getElementById('tile3'))
    console.log(document.getElementById('tile4'))
    console.log(document.getElementById('tile5'))
    console.log(document.getElementById('tile6'))
    console.log(document.getElementById('tile7'))
    console.log(document.getElementById('tile8'))
}