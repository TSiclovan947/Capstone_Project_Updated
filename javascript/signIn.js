"use strict";

formValidity = true;

function validateUsernamePassword() {
    var user = document.getElementById("usernameIn");
    usernameElement.style.background = "white";
    var invColor = "rgb(255,233,233)";
    var fieldsetValidity = true;
    alert("hey");
    try {
        //Loop required select elements
        if (document.getElementById("usernameIn")) {
            throw "Please enter your Message text.";
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
            msgBox.style.background = "white";
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        msgBox.style.background = "rgb(255,233,233)";
        formValidity = false;
    }
}

function setUpPage() {
    validateUsernamePassword();
}

//Function to create our event listeners
function createEventListeners() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

//Enable load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}