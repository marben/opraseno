$(function() {

	// smooth scrolling when clicking on navigation (not the gallery)
	$('.navbar a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash + "_content");
				if (target.length == 0) {
					// we try without the _content ending
					target = $(this.hash);
				}
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 70 //TODO: subtract actual navbar height instead of 70
					}, 500);
					return false;
				}
			}
	});

	// logo animation
	let hideDelayMs = 600;
	let showDelayMs = 200;
	// $(".logo_circle").data("size", "visible");
	// $(".logo_navbar").data("visibility", "visible");

	function markVisibility(object, visible) {
		if (visible == true) {
			object.data("visibility", "visible");
		} else {
			object.data("visibility", "invisible");
		}
	}

	function isMarkedVisible(object) {
		if (object.data("visibility") == "visible") {
			return true;
		} else {
			return false;
		}
	}

	let logoCircle = $(".logo_circle");
	let logoNavbar = $(".logo_navbar");

	markVisibility(logoCircle, true);
	markVisibility(logoNavbar, false);

	$(window).scroll(function() {
		if ($(document).scrollTop() > 0) {

			// hide the big vertical logo
			if (isMarkedVisible(logoCircle)) {
				markVisibility(logoCircle, false);
				logoCircle.stop().animate({
					opacity: "0.0"
				}, hideDelayMs);
			}

			// show the small navbar logo
			if (!isMarkedVisible(logoNavbar)) {
				markVisibility(logoNavbar, true);
				logoNavbar.stop().animate({
					opacity: "1.0"
				}, showDelayMs)
			}
		} else {

			// show the big vertical logo
			if (!isMarkedVisible(logoCircle)) {
				markVisibility(logoCircle, true);
				logoCircle.stop().animate({
					opacity: "1.0"
				}, showDelayMs);
			}

			// hide the navbar logo
			if (isMarkedVisible(logoNavbar)) {
				markVisibility(logoNavbar, false);
				logoNavbar.stop().animate({
					opacity: "0.0"
				}, hideDelayMs);
			}
		}
	});

 // end of logo animation

	var swiper = new Swiper('.swiper-container', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});

	$('.zbozi-carousel').slick({
		infinite: true,
		variableWidth: true,
		slidesToScroll: 1,	// i'd rather have it set to 2, but i can't change it on small screens..
		preloadImages: false,
		lazyLoading: true,
		breakpoints: {
			1000: {
				slidesToScroll: 1	// this doesn't seem to be working
			}
		}
	});
	$('.zbozi-carousel').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	$('.popup-link').magnificPopup({
		type: 'image'
	});
});
