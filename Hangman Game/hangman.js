difficulty_level = prompt("Enter your preferred difficulty level (1 for easy, 2 for medium, and 3 for hard")
difficulty_level = parseInt(difficulty_level)
var words_easy = [
    "lion",
    "tiger",
    "bat",
    "apple",
    "pear",
    "water",
    "table",
    "chair",
    "school",
    "pencil",
]


var words_medium = [
    "airport",
    "parliament",
    "skyscraper",
    "educational",
    "compiler",
    "javascript",
    "python",
    "csharp",
    "database",
    "gigabyte"
]

var words_hard = [
    "supercalifragilisticexpialidocious",
    "antiestablishmentarianism",
    "oceanographer",
    "xylophone",
    "authoritarianism",
    "climatologist",
    "caligraphy",
    "hippomonstrosesquippedaliophobia",
    "psychoneuroendocrinological",
    "spectrophotofluorometrically"

]
function setMaxWrong() {
    var n = 0; 
    if (difficulty_level == 1) {
        n = 10;
    }
    else if (difficulty_level == 2) {
        n = 6;
    }
    else if (difficulty_level == 3) {
    n= 4; 
    }
return n
}
let answer = '';
let maxWrong = setMaxWrong()
let mistakes =0;
let quessed = [] 

function randomWord() {
    if (difficulty_level == 1) {
        answer = words_easy[Math.floor(Math.random() * words_easy.length)]
    } 
    else if (difficulty_level == 2) {
        answer = words_medium[Math.floor(Math.random() * words_medium.length)]
    }

    else if (difficulty_level == 3)  {
        answer = words_hard[Math.floor(Math.random() * words_hard.length)]
    }
}

function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 
        `
        <button
            class="btn btn-lg btn-primary m-2"
            id='`+ letter + `
            onClick="handleGuess('`+ letter +`')"
        >
         `+ letter +`

        </button>
        
        `).join("");

    document.getElementById('keyboard').innerHTML = buttonsHTML; 
}

randomWord();
generateButtons();
document.getElementById('maxWrong').innerHTML = maxWrong; 

