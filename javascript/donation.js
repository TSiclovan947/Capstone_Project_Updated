var onPayment = false;

var payment = {
    fieldSet: '<fieldset id="payment"></fieldset>',
    legend: '<legend>Payment Details</legend>',
    cardName: "<label class='details' for='name'>Name</label><input class='details' type='text' name='name' id='name'>",
    cardContainer: "<fieldset id='cards'></fieldset>",
    cardRow: '<div class="row" id="cardRow"></div>',
    cardColumn: "<div class='col-3 cardCols'></div>",
    card1: "<input name='credit' value='amex' type='radio' required/><img src='images/card_amex.png' alt='American Express'/>",
    card2: '<input name="credit" value="discover" type="radio"/><img src="images/card_discover.png" alt="Discover"/>',
    card3: '<input name="credit" value="master" type="radio"/><img src="images/card_master.png" alt="MasterCard"/>',
    card4: '<input name="credit" value="visa" type="radio"/><img src="images/card_visa.png" alt="Visa"/>',
    cardNumber: '<label for="cardNumber">Credit Card Number*</label><input name="cardNumber" id="cardNumber" required type="text" pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|b?:2131|1800|35\d{3})\d{11})$"/>',
    expirationDate: '<label for="expMonth">Expiration Date*</label><select id="expMonth" name="expMonth"><option value="mm">mm</option><option value="01">01</option><option value="01">02</option><option value="01">03</option><option value="01">04</option><option value="01">05</option><option value="01">06</option><option value="01">07</option><option value="01">08</option><option value="01">09</option><option value="01">10</option><option value="01">11</option><option value="01">12</option></select><span> / </span><select id="expYear" name="expYear"><option value="yy">yy</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option></select>',
    cvc: '<label for="cvc">CVC*</label><input name="cvc" id="cvc" required pattern="^\d{3,4}$" type="text"/>',
    backButton: '<input type="button" name="backButton" id="backButton" value="Back">',
    createPayment: function() {
        $("#details").remove();
        $("#inputs").append(payment.fieldSet)
        $("#payment").append(payment.legend, payment.cardName, payment.cardContainer, payment.cardNumber, payment.expirationDate, payment.cvc);
        $("#cards").append(payment.cardRow)
        $("#cardRow").append(payment.cardColumn, payment.cardColumn, payment.cardColumn, payment.cardColumn);
        $(".cardCols")[0].innerHTML = payment.card1;
        $(".cardCols")[1].innerHTML = payment.card2;
        $(".cardCols")[2].innerHTML = payment.card3;
        $(".cardCols")[3].innerHTML = payment.card4;
        $("#backSpace").append($(payment.backButton).on("click", details.createDetails));
        $("#submitButton").attr("value", "Submit");
        $("#submitButton").on("click", function() {alert('Thank you for your donation!')});
        var onPayment = true;        
    }
};

var details = {
    fieldset: '<fieldset id="details"></fieldset>',
    legend: '<legend>Donation Details</legend>',
    donation: '<label class="details" for="donationAmount">Donation Amount</label><input class="details" type="number" name="donationAmount" id="donationAmount">',
    name: '<label class="details" for="name">Name</label><input class="details" type="text" name="name" id="name">',
    date: '<label class="details" for="date">Date</label><input class="details" type="text" name="date" id="date">',
    createDetails: function() {
        // document.getElementById("inputs").removeChild(document.getElementById("inputs").childNodes[0]);
        // document.getElementById("inputs").innerHTML = details.fieldset;
        // document.getElementById("details").innerHTML = details.donation;
        // document.getElementById("details").innerHTML = details.name;
        // document.getElementById("details").innerHTML = details.date;
        // document.getElementById("submitButton").setAttribute("value", "Next");
        onPayment = false;        
        $("#payment").remove();
        $("#inputs").append(details.fieldset);
        $("#details").append(details.legend, details.donation, details.name, details.date);
        $("#backButton").remove();
        $("#submitButton").attr("value", "Next");
        $("#submitButton").attr("onclick", "");
    }
};

$(document).ready(function() {
    var details = $("#details").detach()
    $("#inputs").append(details);
    $("#submitButton").click(function() {
        if (onPayment === false) {
            payment.createPayment();
            onPayment = true;
            };
        });
    $("#backButton").click = function() {
        if (onPayment === true) {
            details.createDetails();
            onPayment = false;
        };
    };
});