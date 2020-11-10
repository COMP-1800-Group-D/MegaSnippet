class user {
    constructor(name, className, src, friends, achievements, titles, servers){
        this.name = name;
        this.className = className;
        if (src == undefined || src == "none"){
            this.profileImageSrc = "#";
        }
        else {
            this.profileImageSrc = src;
        }
        this.gameScores = {ticTacToe: 0, hangman: 0, sudoku: 0, connect4: 0, rps: 0, poker: 0, blackjack: 0, wordSearch: 0, snake: 0, pacman: 0, frogger: 0, cookieClicker: 0};
        if (friends == undefined || friends == "none"){
            this.friends = [];
        }
        else {
            this.friends = friends;
        }
        if (achievements == undefined || achievements == "none"){
            this.achievements = [];
        }
        else {
            this.achievements = achievements;
        }
        if (titles == undefined || titles == "none"){
            this.titles = [];
        }
        else {
            this.titles = titles;
        }
        if (servers == undefined || servers == "none"){
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
    addPokerGameScore(score) {
        this.gameScores[poker] += score;
    }
    addBlackjackGameScore(score) {
        this.gameScores[blackjack] += score;
    }
    addWordSearchGameScore(score) {
        this.gameScores[wordSearch] += score;
    }
    addSnakeGameScore(score) {
        this.gameScores[snake] += score;
    }
    addPacmanGameScore(score) {
        this.gameScores[pacman] += score;
    }
    addFroggerGameScore(score) {
        this.gameScores[frogger] += score;
    }
    addCookieClickerGameScore(score) {
        this.gameScores[cookieClicker] += score;
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
    addChatServer(server){
        this.chatServers.push(server)
    }
}

let testUser = new user("Spencer", "CST1E", "test")
let outputString = testUser.profileImageSrc;
document.write(outputString)
