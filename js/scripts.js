//Back-end
var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};


var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

//front-end
$(function() {
  $("button.add").click(function() {
    $("form").hide();
    $("form#add").slideDown();
  });
  $("button.sub").click(function() {
    $("form").hide();
    $("form#sub").slideDown();
  });
  $("button.mult").click(function() {
    $("form").hide();
    $("form#mult").slideDown();
  });
  $("button.divi").click(function() {
    $("form").hide();
    $("form#divi").slideDown();
  });


  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#add1").val());
    var number2 = parseFloat($("#add2").val());

    var result = add(number1, number2);
    $(".result").prepend("<li>" + number1 + " + " + number2 + " = " + result + "</li>");
  });
  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#sub1").val());
    var number2 = parseFloat($("#sub2").val());

    var result = subtract(number1, number2);
    $(".result").prepend("<li>" + number1 + " - " + number2 + " = " + result + "</li>");
  });
  $("form#mult").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#mult1").val());
    var number2 = parseFloat($("#mult2").val());

    var result = multiply(number1, number2);
    $(".result").prepend("<li>" + number1 + " * " + number2 + " = " + result + "</li>");
  });
  $("form#divi").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#divi1").val());
    var number2 = parseFloat($("#divi2").val());

    var result = divide(number1, number2);
    $(".result").prepend("<li>" + number1 + " / " + number2 + " = " + result + "</li>");
  });
  $("#clear").click(function() {
    location.reload();
  });
});
