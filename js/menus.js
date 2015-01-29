// $('.social').on(mouseover).addClass('animated rubberBand');
// $(".social").mouseover(
//   function () {
//     $(this).addClass("animated rubberBand");
//   },
//   function () {
//     $(this).removeClass("animated rubberBand");
//   }
// );

$('.social').hover(function() {
  $(this).toggleClass('animated wobble');
});

$('.main-menu li').hover(function() {
  $(this).toggleClass('animated shake');
});



// {
//   -vendor-animation-duration: 3s;
//   -vendor-animation-delay: 2s;
//   -vendor-animation-iteration-count: infinite;
// }
