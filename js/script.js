$('.navbar-collapse a').on('click', function () {
	$('navbar-collapse').collapse('hide');
});
$(window).scroll(function () {
	if ($('.navbar').offset().top > 50) {
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
	}
});
/*
$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});*/
