function postToPage(name, image, message){
    if (message){
        let messageLineElement = document.createElement("div");
        messageLineElement.setAttribute('class', 'messageLine');
        let messageLineProfileImageElement = document.createElement("img");
        messageLineProfileImageElement.setAttribute('src', image);
        messageLineProfileImageElement.setAttribute('alt', name + ' Profile Image');
        let messageLineNameElement = document.createElement("h4");
        messageLineNameElement.innerHTML = name;
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
    postToPage(userName, userProfileImage, messageContent)
});