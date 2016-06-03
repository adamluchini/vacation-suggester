$(document).ready(function() {
  $("form#questions").submit(function(event) {
  var distance = $("select#distance").val();
  var setting = $("select#setting").val();
  var company = $("select#company").val();
  var drinks = $("select#drinks").val();
  var passport = $("select#passport").val();

  if (distance === "far" && setting === "desolate" && company === ("romantic" || "friends") && drinks === ("booze" || "tea") && passport === "pp") {
  $("#foam-lake").show();
  }

  else if (distance === "far" && setting === "urban" && company === ("romantic" || "friends" ) && drinks === ("booze" || "tea") && passport === "no-pp") {
  $("#chicago").show();
  }

  else if (distance === "close" && setting === "desolate" && company === ("romantic" || "friends") && drinks === ("booze" || "tea") && passport === ("pp" || "no-pp")) {
  $("#bend").show();
  }

  else if (distance === "far" && setting === ("urban" || "desolate") && company === ("romantic" || "friends") && drinks === ("booze" || "tea") && passport === "pp") {
  $("#brit-columbia").show();
  }

  else if (distance === "close" && setting === ("urban" || "desolate") && company === ("romantic" || "friends") && drinks === ("booze" || "tea") && passport === ("pp" || "no-pp")) {
  $("#portland").show();
  }

  event.preventDefault();
 });
});
