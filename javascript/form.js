/*

      form.js
      Form Validation Functions for form.html
      
      Author: Tabitha Siclovan
      Date: 21 August 2018
      
*/

"use strict";

formValidity = false;


function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

function billingAddressSame() {
    var billingInput = document.querySelectorAll("#billingAd input");
    var deliveryInput = document.querySelectorAll("#deliveryAddress input");
    // If checkbox checked - copy all fields
    if (document.getElementById("sameAddr").checked) {
        for (var i = 0; i < billingInput.length; i++) {
            deliveryInput[i + 1].value = billingInput[i].value;
        }
        document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAd select").value;
    }
    // else erase all fields
    else {
        for (var i = 0; i < billingInput.length; i++) {
            deliveryInput[i + 1].value = "";
        }
        document.querySelector("#deliveryAddress select").selectedIndex = -1;
    }
}

function validateAddress(fieldsetId) {
    var inputElements = document.querySelectorAll("#" + fieldsetId + " input");
    var errorDiv = document.querySelectorAll("#" + fieldsetId + " .errorMessage")[0];
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement = null;
    try {
        //Loop required input elements
        for (var i = 0; i < elementCount; i++) {
            currentElement = inputElements[i];
            //Test for blank
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        //Validate select listeners
        currentElement = document.querySelectorAll("#" + fieldsetId + " select")[0];
        //blank
        if (currentElement.selectedIndex === -1) {
            currentElement.style.border = "1px solid red";
            fieldsetValidity = false;
        }
        //valid
        else {
            currentElement.style.border = "white";
        }
        if (fieldsetValidity === false) {
            if (fieldsetId === "billingAd") {
                throw "Please complete all Billing Address Information";
            } else {
                throw "Please complete all Delivery Address Information";
            }
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

//Function to validate entire form
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }

    validateAddress("billingAd");
    validateAddress("deliveryAddress");
    validateDeliveryDate();

    if (formValidity === true) {
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    } else {
        document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order.";
        document.getElementById("errorText").style.display = "block";
        document.getElementsByTagName("form")[0].scroll(0, 0);
    }
}

//Enable load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}