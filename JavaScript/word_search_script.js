let gameDefault = true;
let gameDifficultyWordNumber;

// Event listeners
document.getElementById("easyButton").addEventListener('click', function (event) {
    gameDefault = false;
    let gameDifficultyButtons = ["easyButton", "mediumButton", "hardButton"]
    gameDifficultyWordNumber = 8;
    selectAButtonFromListDeselectAllOtherButtons(0, gameDifficultyButtons)
});

document.getElementById("mediumButton").addEventListener('click', function (event) {
    gameDefault = false;
    let gameDifficultyButtons = ["easyButton", "mediumButton", "hardButton"]
    gameDifficultyWordNumber = 15;
    selectAButtonFromListDeselectAllOtherButtons(1, gameDifficultyButtons)
});

document.getElementById("hardButton").addEventListener('click', function (event) {
    gameDefault = false;
    let gameDifficultyButtons = ["easyButton", "mediumButton", "hardButton"]
    gameDifficultyWordNumber = 20;
    selectAButtonFromListDeselectAllOtherButtons(2, gameDifficultyButtons)
    console.log("test")
});

document.getElementById("playButton").addEventListener('click', function (event) {
    if (gameDefault){
        gameDifficultyWordNumber = 8; 
    }
    document.getElementById("gameSetupMain").style.display = "none";
    document.getElementById("gamePlayMain").style.display = "block";
    generateBoard(gameDifficultyWordNumber);
});

function addTile(tile_width, tile_height, refNumber){
    let tile = document.createElement("div");
    let tileId = "tile_" + refNumber;
    tile.setAttribute("class","letterTiles");
    console.log(tile_width)
    console.log(tile_height)
    tile.style.width = tile_width.toString() + "px";
    tile.style.height = tile_height.toString() + "px";
    tile.id = tileId;
    let letter = document.createElement("p");
    letter.style.fontSize = (tile_height * 0.8).toString() + "px"
    letter.textContent = "A";
    tile.appendChild(letter);
    document.getElementById("wordSearchBoard").appendChild(tile);
}
        
function generateBoard(difficultyWordNumber){
    document.getElementById("wordSearchBoard").style.display = "grid";
    document.getElementById("wordSearchBoard").style.justifyContent = "space-evenly";
    document.getElementById("wordSearchBoard").style.alignContent = "space-evenly";
    tile_width = Math.floor((document.getElementById("wordSearchBoard").offsetWidth - 20) / difficultyWordNumber);
    tile_height = Math.floor((document.getElementById("wordSearchBoard").offsetHeight - 20) / difficultyWordNumber);
    let columns = ""
    for (let count = 0; count < difficultyWordNumber; count++){
        columns += "auto "
    }
    columns = columns.slice(0, columns.length)
    document.getElementById("wordSearchBoard").style.gridTemplateColumns = columns;

    for (let count = 0; count < difficultyWordNumber**2; count++){
        addTile(tile_width, tile_height, count);
    }
}