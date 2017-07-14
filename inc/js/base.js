"use strict";


// IIFE function
(function () {

	// options
	var speed = 500; 


	var Carousel = {
		init: function () {
			//ADD INITIALIZER CODE HERE

			// add first initial active class
			$(".slide").first().addClass("active");

			// hide all slides
			$(".slide").hide();

			// show only active class slide
			$(".active").show();

			// call binding events
			Carousel.bindEvents();
	},
		bindEvents: function () {	
			// Next Event Handler
			$(".carousel-next").on("click", function () {
				Carousel.next();
			});
			
			// Previous Event Handler
			$(".carousel-prev").on("click", function () {
				Carousel.previous();
			});
		},

		// Switch to next slide
		next: function () {
			$('.active').removeClass('active').addClass('oldActive');
			if ($('.oldActive').is(':last-child')) {
				$('.slide').first().addClass('active');
			} else {
				$('.oldActive').next().addClass('active');
			}
			$('.oldActive').removeClass('oldActive');
			$('.slide').hide(200);
			$('.active').show(200);
		},

		//Switch to Previous Slide
		previous: function () {
			
		
			$('.active').removeClass('active').addClass('oldActive');
			if ($('.oldActive').is(':first-child')) {
				$('.slide').last().addClass('active');
			} else {
				$('.oldActive').prev().addClass('active');
			}
			$('.oldActive').removeClass('oldActive');
			$('.slide').hide(200);
			$('.active').show(200);
		},
	}


	$(function () {
		Carousel.init(); // intializing plugin
	})

})(window); //self calling senidng window as a parameter