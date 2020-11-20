let available_tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let user_tiles = [];
let computer_tiles = [];
let game_end = false;
let gameSides = ['xButton', 'oButton']

const gameDifficultyButtons = ["easyButton", "mediumButton", "hardButton"]
const gameDifficultyLevels = [50, 75, 90]
let gameDefault = true;
let gameDifficulty;
let playerSide = 'X';

function setSide(sideRefIndex){
    selectAButtonFromListDeselectAllOtherButtons(sideRefIndex, gameSides)
    playerSide = gameSides[sideRefIndex][0].toUpperCase();
}

function setupGame(difficultyIndex){
    gameDefault = false;
    selectAButtonFromListDeselectAllOtherButtons(difficultyIndex, gameDifficultyButtons)
    gameDifficulty = gameDifficultyLevels[difficultyIndex];
}

function play_game(){
    if (gameDefault){
        setupGame(0);
    }
    document.getElementById("gameSetupMain").style.display = "none";
    document.getElementById("gamePlayMain").style.display = "block";
}

function pick_tile(tile){
    if (!game_end && was_pick_acceptable(tile)) {
        if (did_win(user_tiles)){
            document.getElementById("message").innerHTML = 'Congradulations, you won! If you want to play again, please press the button below!';
            game_end = true;
            document.getElementById("play_again_button").style.visibility = "visible";
            document.getElementById("new_game_button").style.visibility = "visible";
        }
        else if (did_tie()){
            document.getElementById("message").innerHTML = 'Good game, it was a tie! If you want to play again, please press the button below!';
            game_end = true;
            document.getElementById("play_again_button").style.visibility = "visible";
            document.getElementById("new_game_button").style.visibility = "visible";
        }
        else {
            // Add a 400 milisecond wait before executing
            computer_pick()
        }
        if (did_win(computer_tiles)){
            document.getElementById("message").innerHTML = 'Unfortunately, you lost! If you want to play again, please press the button below!';
            game_end = true;
            document.getElementById("play_again_button").style.visibility = "visible";
            document.getElementById("new_game_button").style.visibility = "visible";
        }
    }
}

function was_pick_acceptable(tile){
    if (is_in_list(tile, available_tiles)) {
        document.getElementById("message").innerHTML = '';
        let tile_ID = "tile_" + tile;
        document.getElementById(tile_ID).innerHTML = 'X';
        user_tiles.push(tile);
        remove_from_list(tile, available_tiles);
        return true;
    }
    document.getElementById("message").innerHTML = 'Pease pick an empty tile!';
    return false;
}

function did_win(target_tiles){
    if (is_in_list(0, target_tiles) && is_in_list(1, target_tiles) && is_in_list(2, target_tiles)){
        return true;
    }
    else if (is_in_list(3, target_tiles) && is_in_list(4, target_tiles) && is_in_list(5, target_tiles)){
        return true;
    }
    else if (is_in_list(6, target_tiles) && is_in_list(7, target_tiles) && is_in_list(8, target_tiles)){
        return true;
    }
    else if (is_in_list(0, target_tiles) && is_in_list(3, target_tiles) && is_in_list(6, target_tiles)){
        return true;
    }
    else if (is_in_list(1, target_tiles) && is_in_list(4, target_tiles) && is_in_list(7, target_tiles)){
        return true;
    }
    else if (is_in_list(2, target_tiles) && is_in_list(5, target_tiles) && is_in_list(8, target_tiles)){
        return true;
    }
    else if (is_in_list(0, target_tiles) && is_in_list(4, target_tiles) && is_in_list(8, target_tiles)){
        return true;
    }
    else if (is_in_list(2, target_tiles) && is_in_list(4, target_tiles) && is_in_list(6, target_tiles)){
        return true;
    }
    else{
        return false;
    }
}

function did_tie(){
    if (available_tiles.length == 0)
    {
        return true;
    }
    return false;
}

function computer_pick(){
    // let pick_index = Math.floor(Math.random() * available_tiles.length);
    // let pick = available_tiles[pick_index]
    let pick;
    if (Math.random() * 100 < gameDifficulty){
        pick = bestTicTacToePick(available_tiles, user_tiles, computer_tiles);
    }
    else {
        pick = available_tiles[Math.floor(Math.random() * available_tiles.length)];
    }
    let comp_tile_ID = "tile_" + pick;
    document.getElementById(comp_tile_ID).innerHTML = 'O';
    computer_tiles.push(pick);
    remove_from_list(pick, available_tiles)
}

function bestTicTacToePick(available, userSelected, computerSelected){
    let winningMove = canWin(available, computerSelected);
    console.log(winningMove);
    let blockingMove = canWin(available, userSelected);
    console.log(blockingMove)
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
            console.log(tileInQuestion)
            if (is_in_list(tileInQuestion, alreadySelected)){
                countInList++;
            }
            else if (is_in_list(tileInQuestion, available)){
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
    if (is_in_list(middleTile, available)){
        return middleTile;
    }
    else if (is_in_list(0, available)){
        return 0;
    }
    else if (is_in_list(2, available)){
        return 2;
    }
    else if (is_in_list(6, available)){
        return 6;
    }
    else if (is_in_list(8, available)){
        return 8;
    }
    return available_tiles[Math.floor(Math.random() * available_tiles.length)];
}

function is_in_list(num, num_list){
    for (i = 0; i < num_list.length; i++){
        if (num_list[i] == num){
            return true;
        }
    }
    return false;
}

function remove_from_list (num, num_list) {
    for (i = 0; i < num_list.length; i++){
        if (num_list[i] == num){
            num_list.splice(i, 1)
        }
    }
}

function play_again(){
    document.getElementById('tile_0').innerHTML = '';
    document.getElementById('tile_1').innerHTML = '';
    document.getElementById('tile_2').innerHTML = '';
    document.getElementById('tile_3').innerHTML = '';
    document.getElementById('tile_4').innerHTML = '';
    document.getElementById('tile_5').innerHTML = '';
    document.getElementById('tile_6').innerHTML = '';
    document.getElementById('tile_7').innerHTML = '';
    document.getElementById('tile_8').innerHTML = '';
    available_tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    user_tiles = []
    computer_tiles = []
    game_end = false;
    document.getElementById("message").innerHTML = '';
    document.getElementById("play_again_button").style.visibility = "hidden";
    document.getElementById("new_game_button").style.visibility = "hidden";
}

function new_game(){
    play_again();
    document.getElementById("gameSetupMain").style.display = "block";
    document.getElementById("gamePlayMain").style.display = "none";
}