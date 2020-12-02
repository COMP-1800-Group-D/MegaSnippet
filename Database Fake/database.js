// Create the user class
class User {
    // User class constructor
    constructor(username, password, className, src, gameScores, friends, achievements, titles, setTitle, servers){
        // Must provide a username and password
        this.username = username;
        this.password = password;

        // Set remaining optional properties
        if (className == undefined || className == null){
            this.className = "";
        }
        else {
            this.className = className;
        }

        if (src == undefined || src == null){
            this.src = "#";
        }
        else {
            this.src = src;
        }

        if (gameScores == undefined || gameScores == null){
            this.gameScores = {
                ticTacToe: 0, 
                hangman: 0, 
                sudoku: 0, 
                connect4: 0, 
                rps: 0, 
                wordSearch: 0
            };
        }
        else {
            this.gameScores = {
                ticTacToe: gameScores.ticTacToe, 
                hangman: gameScores.hangman, 
                sudoku: gameScores.sudoku, 
                connect4: gameScores.connect4, 
                rps: gameScores.rps, 
                wordSearch: gameScores.wordSearch
            };
        }

        if (friends == undefined || friends == null){
            this.friends = [];
        }
        else {
            this.friends = friends;
        }

        if (achievements == undefined || achievements == null){
            this.achievements = [];
        }
        else {
            this.achievements = achievements;
        }

        if (titles == undefined || titles == null){
            this.titles = [];
        }
        else {
            this.titles = titles;
        }

        if (setTitle == undefined || setTitle == null){
            this.setTitle = "";
        }
        else {
            this.setTitle = setTitle;
        }
        
        if (servers == undefined || servers == null){
            this.chatServers = [];
        }
        else {
            this.chatServers = servers;
        }
    }

    setProfileImage(src) {
        this.profileImageSrc = src;
    }

    addTicTacToeGameScore(score) {
        this.gameScores[ticTacToe] += score;
    }

    addHangmanGameScore(score) {
        this.gameScores[hangman] += score;
    }

    addSudokuGameScore(score) {
        this.gameScores[sudoku] += score;
    }

    addconnect4GameScore(score) {
        this.gameScores[connect4] += score;
    }

    addRpsGameScore(score) {
        this.gameScores[rps] += score;
    }

    addWordSearchGameScore(score) {
        this.gameScores[wordSearch] += score;
    }

    getTotalScore(){
        let total = 0;
        total += this.gameScores.ticTacToe + this.gameScores.hangman + this.gameScores.sudoku + this.gameScores.connect4 + 
        this.gameScores.rps + this.gameScores.wordSearch;
        return total;
    }

    addFriend(friendName){
        this.friends.push(friendName)
    }

    addAchievement(achievement){
        this.achievements.push(achievement)
    }

    addTitle(title){
        this.titles.push(title)
    }

    setCurrentTitle(selectedTitle){
        this.setTitle = selectedTitle;
    }

    addChatServer(server){
        this.chatServers.push(server)
    }

    printUserInfo(){
        console.log(this.username)
        console.log(this.password)
        console.log(this.className)
        console.log(this.src)
        console.log(this.gameScores)
        console.log(this.friends)
        console.log(this.achievements)
        console.log(this.titles)
        console.log(this.setTitle)
        console.log(this.chatServers)
    }
}

let user1 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user2 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user3 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user4 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user5 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user6 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user7 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user8 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user9 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user10 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user11 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user12 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user13 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user14 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user15 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user16 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user17 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user18 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user19 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let user20 = new User(
    username = "Tman", 
    password = "12345",
    className = "CST1E", 
    src = null,
    gameScores = {
        ticTacToe: 100, 
        hangman: 900, 
        sudoku: 0, 
        connect4: 0, 
        rps: 0, 
        wordSearch: 0
    },
    friends = [],
    achievement = [],
    titles = [],
    setTitle = "",
    servers = []
    )

let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10,
user11, user12, user13, user14, user15, user16, user17, user18, user19, user20]