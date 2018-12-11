"use strict";

$(document).ready(function() {

  function resizeTriangles() {
    var margin_size =
      ($(window).width() - $("section#tabela-comparativa .container").width()) /
      2;
    $("#left-top-triangle").css({
      borderWidth: " 30px 0 0 " + (margin_size - 15) + "px"
    });
    $("#right-top-triangle").css({
      borderWidth: "0 0 30px " + (margin_size - 15) + "px"
    });
    $("#left-bottom-triangle").css({
      borderWidth: "30px " + (margin_size - 15) + "px 0 0"
    });
    $("#right-bottom-triangle").css({
      borderWidth: "0 " + (margin_size - 15) + "px 30px 0"
    });
  }

  resizeTriangles();

  $(window).on("resize", function() {
    resizeTriangles();
  });

});
