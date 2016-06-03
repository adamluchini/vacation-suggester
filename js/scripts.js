$(document).ready(function() {
  $("form#questions").submit(function(event) {
  var distance = $("select#distance").val();
  var setting = $("select#setting").val();
  var company = $("select#company").val();
  var drinks = $("select#drinks").val();
  var passport = $("select#passport").val();

    if (distance === "far" && setting === "desolate" && passport === "pp" ) {
    $("#foam-lake").show();
    $("#mt-hood").hide();
    $("#portland").hide();
    $("#reno").hide();
    $("#bend").hide();
    $("#chicago").hide();
    $("#brit-columbia").hide();

    }

    else if (distance === "close" && setting === "desolate" && drinks === "tea") {
    $("#mt-hood").show();
    $("#foam-lake").hide();
    $("#portland").hide();
    $("#reno").hide();
    $("#bend").hide();
    $("#chicago").hide();
    $("#brit-columbia").hide();
    }

    else if (distance === "far" && setting === "urban" && company === "friends" && drinks === "booze") {
    $("#reno").show();
    $("#foam-lake").hide();
    $("#portland").hide();
    $("#mt-hood").hide();
    $("#bend").hide();
    $("#chicago").hide();
    $("#brit-columbia").hide()
    }

    else if (distance === "far" && setting === "urban" && passport === "pp") {
    $("#brit-columbia").show();
    $("#foam-lake").hide();
    $("#portland").hide();
    $("#mt-hood").hide();
    $("#bend").hide();
    $("#chicago").hide();
    $("#reno").hide()
    }

    else if (distance === "close" && setting === "desolate") {
    $("#bend").show();
    $("#foam-lake").hide();
    $("#portland").hide();
    $("#mt-hood").hide();
    $("#brit-columbia").hide();
    $("#chicago").hide();
    $("#reno").hide()
    }

    else if (distance === "far" && setting === "urban") {
    $("#chicago").show();
    $("#foam-lake").hide();
    $("#portland").hide();
    $("#mt-hood").hide();
    $("#brit-columbia").hide();
    $("#bend").hide();
    $("#reno").hide()
    }

    else if (distance === "close") {
    $("#portland").show();
    $("#foam-lake").hide();
    $("#chicago").hide();
    $("#mt-hood").hide();
    $("#brit-columbia").hide();
    $("#bend").hide();
    $("#reno").hide()
    }

    else {
      alert ("I need some more information");
    }


  event.preventDefault();
 });
});
