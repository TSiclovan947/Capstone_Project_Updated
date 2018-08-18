$("#hoodieSubmit").click(function() {
    var amount = $("#hoodieAmount option:selected").val();
    var cost =  amount * 50;
    window.open("order.html?cost=" + cost, "order.html", "width=600,height=400");    
});

$("#bottleSubmit").click(function() {
    var amount = $("#bottleAmount option:selected");
    var cost =  amount * 50;
    window.open("order.html?cost=" + cost, "order.html", "width=600,height=400");    
});

$("#sleeveSubmit").click(function() {
    var amount = $("#sleeveAmount option:selected");
    var cost =  amount * 50;
    window.open("order.html?cost=" + cost, "order.html", "width=600,height=400");    
});

$("#mugSubmit").click(function() {
    var amount = $("#mugAmount option:selected");
    var cost =  amount * 50;
    window.open("order.html?cost=" + cost, "order.html", "width=600,height=400");    
});