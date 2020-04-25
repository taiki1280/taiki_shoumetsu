$(function () {
  $("#hope dt").on("click", function () {
    $('.close').hide();
    $(this).nextUntil("dt", "dd").slideToggle("fast");
  });
});