$(document).ready(function() {
  $("form#questions").submit(function(event) {
  var distance = $("select#distance").val();
  var setting = $("select#setting").val();
  var company = $("select#company").val();
  var drinks = $("select#drinks").val();
  var passport = $("select#passport").val();

  if (distance === "far" && setting === "desolate" && passport === "pp" ) {
  $("#foam-lake").show();
  }

  else if (distance === "close" && setting === "desolate" && drinks === "tea") {
  $("#mt-hood").show();
  }

  else if (distance === "far" && setting === "urban" && company === "friends" && drinks === "booze") {
  $("#reno").show();
  }

  else if (distance === "far" && setting === "urban" && passport === "pp") {
  $("#brit-columbia").show();
  }

  else if (distance === "close" && setting === "desolate") {
  $("#bend").show();
  }

  else if (distance === "far" && setting === "urban") {
  $("#chicago").show();
  }

  else if (distance === "close") {
  $("#portland").show();
  }

  else {
    alert ("I need some more information");
  }
  event.preventDefault();
 });
});
