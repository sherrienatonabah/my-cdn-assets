document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      autoplay: 'play',
      type   : 'loop',
      arrows: false,
      pagination: false,
    } );
    splide.mount();
  } );


(function($) {
$(function() {
  $("#game").load("https://cdn.jsdelivr.net/gh/sherrienatonabah/my-cdn-assets@main/game.html");
})
})(jQuery)
