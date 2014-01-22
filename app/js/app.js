// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


$(function() {

	var navHeightOffset = $('.top-bar').height() + 10;

	$('.dig-in-shared-success').hide();
	$('.btn-dig-in').show(100);

	$('.btn-dig-in a').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.btn-dig-in').first().offset().top - navHeightOffset;
		$('body').animate({ scrollTop: scrollTarget }, 300, function() {
			// Note, might need browser detection to run animate() on html rather than body for IE8
			$('.dig-in-shared-success').slideToggle(300, function() {
				$('.btn-dig-in a').html(($('.btn-dig-in').first().find('a').html() == 'Show More') ? 'Show Less' : 'Show More');
			});
		});
	});

	$('.link-to-recruiting-process').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.detail-recruiting-process h1').first().offset().top - navHeightOffset;
		$('body').animate({ scrollTop: scrollTarget }, 300);
	});

	$('.link-to-model-shared-success').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.detail-shared-success h1').first().offset().top - navHeightOffset;
		$('body').animate({ scrollTop: scrollTarget }, 300);
	});

	$('.link-to-virtuous-cycle').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.detail-virtuous-cycle h1').first().offset().top - navHeightOffset;
		$('body').animate({ scrollTop: scrollTarget }, 300);
	});

	$('.btn-open-positions a').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.detail-open-positions h1').first().offset().top - navHeightOffset;
		$('body').animate({ scrollTop: scrollTarget }, 300);
	});

	// $('.btn-contact a').on('click', function(e) {
	// 	e.preventDefault();
	// 	var scrollTarget = $('footer').offset().top - navHeightOffset;
	// 	$('body').animate({ scrollTop: scrollTarget }, 300);
	// });

	$('.btn-services a').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.detail-service-offering h1').offset().top - navHeightOffset;
		$('body').animate({ scrollTop: scrollTarget }, 300);
	});

});

