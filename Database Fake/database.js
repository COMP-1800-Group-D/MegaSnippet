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
            this.profileImageSrc = "#";
        }
        else {
            this.profileImageSrc = src;
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
        console.log(this.profileImageSrc)
        console.log(this.gameScores)
        console.log(this.friends)
        console.log(this.achievements)
        console.log(this.titles)
        console.log(this.setTitle)
        console.log(this.chatServers)
    }
}

let user1 = new User(
    username = "User1", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage1.jpg",
    gameScores = {
        ticTacToe: 1000, 
        hangman: 1000, 
        sudoku: 1000, 
        connect4: 1000, 
        rps: 1000, 
        wordSearch: 1000
    },
    friends = [],
    achievement = [],
    titles = ["Emperor / Empress of MegaSnippet"],
    setTitle = "Emperor / Empress of MegaSnippet",
    servers = []
    )

let user2 = new User(
    username = "User2", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage2.jpg",
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
    username = "User3", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage3.jpg",
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
    username = "User4", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage4.jpg",
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
    username = "User5", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage5.jpg",
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
    username = "User6", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage6.jpg",
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
    username = "User7", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage7.jpg",
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
    username = "User8", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage8.jpg",
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
    username = "User9", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage9.jpg",
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
    username = "User10", 
    password = "12345",
    className = "CST1E", 
    src = "./Images/userProfileImages/profileImage10.jpg",
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
    username = "User11", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage11.jpg",
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
    username = "User12", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage12.png",
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
    username = "User13", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage13.jpg",
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
    username = "User14", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage14.png",
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
    username = "User15", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage15.png",
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
    username = "User16", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage16.png",
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
    username = "User17", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage17.png",
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
    username = "User18", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage18.jpg",
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
    username = "User19", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage19.jpg",
    gameScores = {
        ticTacToe: 100, 
        hangman: 100, 
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
    username = "User20", 
    password = "12345",
    className = "CST1F", 
    src = "./Images/userProfileImages/profileImage20.jpg",
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
user11, user12, user13, user14, user15, user16, user17, user18, user19, user20];
let targetClassName = "CST1E";