$(function () {
	// ======= Manubar toggle
	$('.navbar-toggler').on('click', function () {
		$('.navbar-toggler').toggleClass("active");
	});

	// ======= Sticky menu
	$(window).on('scroll', function (event) {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header_area").removeClass("sticky");
		} else {
			$(".header_area").addClass("sticky");
		}
	});
	// ======= countdown clock
	var now = new Date();
	var day = now.getDate();
	var month = now.getMonth() + 1;
	var year = now.getFullYear() + 1;

	var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

	$('#countdown_wrap').countdown({
		date: nextyear, // TODO Date format: 07/27/2017 17:00:00
		offset: +2, // TODO Your Timezone Offset
		day: 'Day',
		days: 'Days'
	}, function () {
		alert('Done!');
	});
	// ======= Updates Slides 
	$('.updates_slide').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '.arrow_right',
		prevArrow: '.arrow_left',
		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
				}
			}
		]

	});

	// ======= Back to top
	$(window).on('scroll', function (event) {
		if ($(this).scrollTop() > 600) {
			$('.back_to_top').fadeIn(200)
		} else {
			$('.back_to_top').fadeOut(200)
		}
	})
	// ======= Animate the scroll to top
	$('.back_to_top').on('click', function (event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0,
		}, 1000)

	});

});