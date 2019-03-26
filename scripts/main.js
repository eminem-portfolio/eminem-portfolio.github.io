//selecting the join form and necessary buttons
var joinForm = document.querySelector('.join');
var joinButton = document.querySelector('.top-nav-right');
var closeButton = document.querySelector('#close');
var ctaBUTTON = document.querySelector('.joinButton');

//adding event listeners to join and close buttons
joinButton.addEventListener("click", displayJoinForm);
closeButton.addEventListener("click", closeJoinForm);
ctaBUTTON.addEventListener("click", displayJoinForm);

//showing the join form on click
function displayJoinForm(){
    joinForm.style.display = "block";
}

//hiding the join form
function closeJoinForm(){
    joinForm.style.display = "none";
}