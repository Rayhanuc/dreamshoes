jQuery(document).ready(function($) {
	$(".homepage-slides").owlCarousel({
		items: 1,		
		loop: true,
		nav: true,
		dots: true,
		navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
		autoplay: true,
		navSpeed:1200,
		autoplaySpeed:1200,
	});
});