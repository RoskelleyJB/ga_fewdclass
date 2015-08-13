$(document).ready(function(){
  $(".hero h1").fadeIn(4000);
  setTimeout(function() {
    $(".hero div").fadeIn(4000);
  }, 3000);
  // Hide the extra content initially, using JS so that if JS is disabled, no problemo:
  $('.read-more-content').addClass('hidden')

  // Set up a link to expand the hidden content:
  .before('<a class="read-more-show read-more" href="#"><p>Read More ></p></a>')
    
  // Set up a link to hide the expanded content.
  .append(' <a class="read-more-hide read-more" href="#"><p>Show Less</p></a>');

  // Set up the toggle effect:
  $('.read-more-show').on('click', function(e) {
    $(this).next('.read-more-content').removeClass('hidden');
    $(this).addClass('hidden');
    e.preventDefault();
  });

  $('.read-more-hide').on('click', function(e) {
    $(this).parent('.read-more-content').addClass('hidden').parent().children('.read-more-show').removeClass('hidden');
    e.preventDefault();
  });
});