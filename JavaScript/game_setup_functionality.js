/*
Function to setup a game
The setup screen must 
*/

function setupGame(){
    numButtonLists = document.getElementById("gameSettingsColumn").querySelectorAll("ul").length
    let setupData = []
    for (let buttonListIndex = 0; buttonListIndex < numButtonLists; buttonListIndex++){
        setupData.push(-1)
        numButtons = document.getElementById("gameSettingsColumn").querySelectorAll("ul")[buttonListIndex].querySelectorAll("button").length
        for (let buttonIndex = 0; buttonIndex < numButtons; buttonIndex++){
            document.getElementById("gameSettingsColumn").querySelectorAll("ul")[buttonListIndex].querySelectorAll("button")[buttonIndex].addEventListener("click", function(event){
                setupData[buttonListIndex] = buttonIndex
            });
        }
    }
    document.getElementById("playButton").addEventListener("click", function(event){
        playGame(setupData)
    });
}

setupGame()