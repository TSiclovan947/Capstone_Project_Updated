$(document).ready(function() {
  var password = $("#password").val();
  if ($("#passwordConfirm".val() !== password)) {
    alert("Please Confirm Your Password")
  }
});
