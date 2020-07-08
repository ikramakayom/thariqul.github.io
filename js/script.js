
//event pada saat diklik
(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.page-scroll[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 50)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });


//paralax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();


$('.jumbotron img').css({
    'transform' : 'translate (0px, '+ wScroll/4 +'%)'
});

$('.jumbotron h1').css({
    'transform' : 'translate (0px, '+ wScroll/4 +'%)'
});

$('.jumbotron p').css({
    'transform' : 'translate (0px, '+ wScroll/4 +'%)'
});

});


})(jQuery);
var aboutColor = $('#about').css('backgroundColor');

	$('#skills').waypoint(function(){
		$('.chart').each(function(){
		$(this).easyPieChart({
				size:170,
				animate: 2000,
				lineCap:'butt',
				scaleColor: false,
				barColor: aboutColor,
				lineWidth: 10
			});
		});
	},{offset:'80%'});