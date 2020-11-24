let gameDefault = true;
let gameDifficultyWordNumber;
let words3LettersLong = ['cat', 'dog', 'ace', 'bug', 'fan', 'joy', 'elf', 'zoo', 'art', 'bat', 'bed', 'bee', 'dad', 'mom', 'car', 'map', 'pie']
let words4LettersLong = ['bake', 'arid', 'arks', 'bank', 'camp', 'crow', 'food', 'fire', 'gate', 'hive', 'icon', 'lava', 'lamp', 'mask', 'pink']
let words5LettersLong = ['pizza', 'black', 'alarm', 'chart', 'field', 'fruit', 'grape', 'label', 'medal', 'novel', 'pedal', 'pasta']
let words6LettersLong = ['carpet', 'shrimp', 'accept', 'burger', 'buzzer', 'candle', 'emblem', 'goblin', 'shape', 'water', 'tower', 'morale', 'pencil', 'points', 'rabbit', 'ticket', 'window', 'supply', 'spider', 'purple', 'number']
let words7LettersLong = ['gobblet', 'balloon', 'bananas', 'capital', 'shields', 'gorilla', 'inverse', 'leaders', 'martial', 'message']
let words8LettersLong = ['accurate', 'creation', 'equality', 'engineer', 'language', 'medieval', 'powerful', 'tomorrow', 'workshop', 'triangle']
let words9LettersLong = ['chocolate', 'beautiful', 'christmas', 'adventure', 'important', 'education', 'crocodile', 'invisible', 'vegetable', 'halloween', 'president', 'knowledge']
let words10LettersLong = ['additional', 'appearance', 'basketball', 'literature', 'technology', 'government', 'strawberry', 'university', 'apocalypse']
let wordsArray = [words3LettersLong, words4LettersLong, words5LettersLong, words6LettersLong, words7LettersLong, words8LettersLong, words9LettersLong, words10LettersLong]

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

    console.log(selectWords(difficultyWordNumber))
}

function selectWords(numberWords){
    let selectedWords = []
    for (let i = 0; i < numberWords; i++){
        maxWordLength = wordsArray.length; // Length 8
        if (numberWords > maxWordLength-2){
            maxWordLength -= 2;
        }
        chooseWordLength = Math.floor(Math.random() * maxWordLength);
        word = Math.floor(Math.random() * wordsArray[chooseWordLength].length);
        selectedWords.push(wordsArray[chooseWordLength][word]);
    }
    return selectedWords;
}
