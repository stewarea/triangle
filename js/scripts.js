// var leapYear = function(year) {
//   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };


$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = tritype(parameters);


    var tritype = function() {
      if ((side1 === side2) && (side1 === side3) && (side2 === side3))
        $(form#tritype).show();
      else if ((side1 != side2) && (side1 != side3) && (side2 != side3))
        $(())
    }

    $(".year").text(year);



    var result = leapYear(year);

    if  {


    } else if (result) {


    } else {

    }


    event.preventDefault();
  });
});
