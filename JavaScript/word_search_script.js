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
    selectAButtonFromListDeselectAllOtherButtonsByID(0, gameDifficultyButtons)
});

document.getElementById("mediumButton").addEventListener('click', function (event) {
    gameDefault = false;
    let gameDifficultyButtons = ["easyButton", "mediumButton", "hardButton"]
    gameDifficultyWordNumber = 15;
    selectAButtonFromListDeselectAllOtherButtonsByID(1, gameDifficultyButtons)
});

document.getElementById("hardButton").addEventListener('click', function (event) {
    gameDefault = false;
    let gameDifficultyButtons = ["easyButton", "mediumButton", "hardButton"]
    gameDifficultyWordNumber = 20;
    selectAButtonFromListDeselectAllOtherButtonsByID(2, gameDifficultyButtons)
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

    let wordList = selectWords(difficultyWordNumber)
    let sortedWordList = sortWordsByLength(wordList);
    postWords(sortedWordList)
}

function selectWords(numberWords){
    let selectedWords = []
    for (let i = 0; i < numberWords; i++){
        let maxWordLength = wordsArray.length; // Length 8
        if (numberWords > maxWordLength-2){
            maxWordLength -= 2;
        }
        let chooseWordLength = Math.floor(Math.random() * maxWordLength);
        let isUnique = false;
        let word;
        while (!isUnique){
            let wordIndex = Math.floor(Math.random() * wordsArray[chooseWordLength].length);
            word = wordsArray[chooseWordLength][wordIndex];
            isUnique = !selectedWords.includes(word);
        }
        selectedWords.push(word);
    }
    return selectedWords;
}

function sortWordsByLength(listOfWord){
    let result = []
    let unorderedList = []
    for (let i = 0; i < listOfWord.length; i++){
        let word = listOfWord[i];
        let wordLength = word.length;
        let tempList = [wordLength, word];
        unorderedList.push(tempList);
    }
    let orderedList = unorderedList.sort();
    for (let i = 0; i < orderedList.length; i++){
        let word = orderedList[i][1];
        result.push(word);
    }
    return result;
}

function postWords(listOfWord){
    let wordColumn = document.getElementById("wordsColumn")
    let column1 = wordColumn.querySelector("div:first-child")
    let column2 = wordColumn.querySelector("div:last-child")
    let midPoint = Math.ceil(listOfWord.length / 2)
    let wordHeight = Math.floor((document.getElementById("wordSearchBoard").offsetHeight - 20) / midPoint);
    for (let i = 0; i < midPoint; i++){
        let wordString = listOfWord[i];
        let word = document.createElement("p");
        word.style.fontSize = (wordHeight * 0.72).toString() + "px"
        let wordText = document.createTextNode(wordString);
        word.appendChild(wordText);
        column1.appendChild(word);
    }
    for (let i = midPoint; i < listOfWord.length; i++){
        let wordString = listOfWord[i];
        let word = document.createElement("p");
        word.style.fontSize = (wordHeight * 0.72).toString() + "px"
        let wordText = document.createTextNode(wordString);
        word.appendChild(wordText);
        column2.appendChild(word);
    }
}
