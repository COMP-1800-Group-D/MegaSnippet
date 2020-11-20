/*
Function to setup a game
The setup screen must 
*/

function setupGame(){
    let setupData = [];
    let buttonLists = document.getElementById("gameSettingsColumn").querySelectorAll("ul");
    for (let buttonListIndex = 0; buttonListIndex < buttonLists.length; buttonListIndex++){
        setupData.push(-1);
        let buttonsInButtonList = buttonLists[buttonListIndex].querySelectorAll("button");
        for (let buttonIndex = 0; buttonIndex < buttonsInButtonList.length; buttonIndex++){
            buttonsInButtonList[buttonIndex].addEventListener("click", function(event){
                selectAButtonFromListOfButtonsDeselectAllOthers(buttonsInButtonList[buttonIndex]);
                setupData[buttonListIndex] = buttonIndex;
            });
        }
    }
    document.getElementById("playButton").addEventListener("click", function(event){
        playGame(setupData);
    });
}

setupGame();