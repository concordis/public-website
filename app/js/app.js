// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


$(function() {

	$('.dig-in-shared-success').hide();
	$('.btn-dig-in').show(100);

	$('.btn-dig-in a').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.btn-dig-in').first().offset().top - $('nav').height();
		// Note this does not animate in Firefox.
		// If we place html,body in the selector then it does not work properly in all other browsers.
		$('body').stop().animate({ scrollTop: scrollTarget }, 300, function() {
			$('.dig-in-shared-success').slideToggle(300, function() {
				$('.btn-dig-in a').html(($('.btn-dig-in').first().find('a').html() == 'Show More') ? 'Show Less' : 'Show More');
			});
		});
	});

	$('.link-to').on('click', function(e) {
		e.preventDefault();
		var navHeightOffset = $('nav').height();
		var whichSection = $(this).attr('href');
		var scrollTarget = $('section' + whichSection).offset().top - navHeightOffset;

		$('html, body').stop().animate({ scrollTop: scrollTarget }, 500, function() {
			$('html, body').stop().animate({ scrollTop: scrollTarget - 50 }, 100, function() {
				$('html, body').stop().animate({ scrollTop: scrollTarget }, 500);
			});
		});
	});

});

