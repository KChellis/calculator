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
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#add1").val());
    var number2 = parseFloat($("#add2").val());

    var result = add(number1, number2).toFixed(2);
    $(".result").text(number1 + "+" + number2 + "=" + result);
  });
  $("form#sub").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#sub1").val());
    var number2 = parseFloat($("#sub2").val());

    var result = subtract(number1, number2).toFixed(2);
    $(".result").text(number1 + "-" + number2 + "=" + result);
  });
  $("form#mult").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#mult1").val());
    var number2 = parseFloat($("#mult2").val());

    var result = multiply(number1, number2).toFixed(2);
    $(".result").text(number1 + "*" + number2 + "=" + result);
  });
  $("form#divi").submit(function(event) {
    event.preventDefault();
    var number1 = parseFloat($("#divi1").val());
    var number2 = parseFloat($("#divi2").val());

    var result = divide(number1, number2).toFixed(2);
    $(".result").text(number1 + "/" + number2 + "=" + result);
  });
});
