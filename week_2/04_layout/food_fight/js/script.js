$(document).ready(function(){
  $(".hero h1").fadeIn(4000);
  $(".hero h1").removeClass("hidden");
  setTimeout(function() {
    $(".hero div").fadeIn(4000);
    $(".hero div").removeClass("hidden");
  }, 3000);
});