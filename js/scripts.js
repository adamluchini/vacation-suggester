$(document).ready(function() {
  $("form#questions").submit(function(event) {
  var distance = $("select#distance").val();
  var culture = $("select#culture").val();

  if(distance==="close" && culture==="urban" || "desolate") {
  $("#portland").show();
 }


  event.preventDefault();
 });
});
