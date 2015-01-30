$('.social').hover(function() {
  $(this).toggleClass('animated wobble');
});

$('.main-menu li').hover(function() {
  $(this).toggleClass('animated pulse');
});

$('#reset-button').on("click" , function() {location.reload()});
