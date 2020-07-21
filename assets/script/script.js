//Services Image Slider
$('.slick-slider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true,
	draggable: true,
	pauseOnHover: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
			},
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
});

//navbar on scroll
$(function () {
	$(document).scroll(function () {
		var $nav = $('.navbar.fixed-top');
		$nav.toggleClass('scrolled', $(this).scrollTop() > 200);
	});
});
// $nav.height()
