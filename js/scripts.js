$(document).ready(function() {
  $("form#questions").submit(function(event) {
  var distance = $("select#distance").val();
  var setting = $("select#setting").val();
  var company = $("select#company").val();
  var drinks = $("select#drinks").val();
  var passport = $("select#passport").val();

  if (distance === "far" && setting === "desolate" && company === "romantic" || "friends" && drinks === "booze" || "tea" && passport === "pp"){
  $("#foam-lake").show();
  }

  else if (distance === "close" && setting === "desolate") {
  $("#bend").show();
  }

  else if (distance === "close" && setting === "urban") {
  $("#portland").show();
  }

  event.preventDefault();
 });
});
