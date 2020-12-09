function postToPage(name, image, message, date){
    if (message){
        let messageLineElement = document.createElement("div");
        messageLineElement.setAttribute('class', 'messageLine');
        let messageLineProfileImageElement = document.createElement("img");
        messageLineProfileImageElement.setAttribute('src', image);
        messageLineProfileImageElement.setAttribute('alt', name + ' Profile Image');
        let messageLineNameElement = document.createElement("h4");
        messageLineNameElement.innerHTML = name + " - " + (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        let messageLineMessageElement = document.createElement("p");
        messageLineMessageElement.innerHTML = message;
        messageLineElement.appendChild(messageLineProfileImageElement);
        messageLineElement.appendChild(messageLineNameElement);
        messageLineElement.appendChild(messageLineMessageElement);
        document.getElementById("textChat").appendChild(messageLineElement);
        document.getElementById("message").value = "";
    }
} 

document.getElementById('messagePostButton').addEventListener('click', function(event){
    let userName = currentUser.username;
    let userProfileImage = currentUser.profileImageSrc;
    let messageContent = document.getElementById("message").value;
    let date = new Date()
    postToPage(userName, userProfileImage, messageContent, date)

    // Pseudo Fake Response - Remove after presentation
    setTimeout(function(){
        let userPrajvirdeep = user3
        let nameP = userPrajvirdeep.username
        let imageP = userPrajvirdeep.profileImageSrc
        let messageP = "All good man"
        let date = new Date()
        postToPage(nameP, imageP, messageP, date)
    }, 2500);
});