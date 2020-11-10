function selectAButtonFromListDeselectAllOtherButtons(buttonRefIndex, listOfButtons){
    for (let i = 0; i < listOfButtons.length; i++){
        if (i == buttonRefIndex){
            document.getElementById(listOfButtons[buttonRefIndex]).style["box-shadow"] = "1vh 1vh #666";
        }
        else {
            document.getElementById(listOfButtons[i]).style["box-shadow"] = "none";
        }
    }
}