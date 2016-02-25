var tritype = function(side1, side2, side3) {
  if ((side1 === side2) && (side1 === side3)) {
      // $("#equil").show();
      return "equilateral"
} else if ((side1 === side2) || (side2 === side3) || (side1 === side3)) {
      // $("#iso").show();
      return "ioceles"
} else if ((side1 + side2 > side3) || (side1 + side3 > side2) || (side2 + side3 > side1)) {
      // $("#scalene").show();
      return "scalene"
} else   {
      // $("#error").show();
      return "this is not a triangle"
  }

$(document).ready(function() {
  $("form#triangles").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = tritype(side1, side2, side3);
    event.preventDefault();
  })
};
});
