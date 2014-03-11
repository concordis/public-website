// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


$(function() {

	// I do not know if testing for flexbox is the best way to test browser but it seems to work.
	var bodyOrHTML = (Modernizr.flexbox) ? 'body' : 'html';
	var navHeightOffset = $('.top-bar').height() + 10;

	$('.dig-in-shared-success').hide();
	$('.btn-dig-in').show(100);

	$('.btn-dig-in a').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.btn-dig-in').first().offset().top - navHeightOffset;
		$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, function() {
			$('.dig-in-shared-success').slideToggle(300, function() {
				$('.btn-dig-in a').html(($('.btn-dig-in').first().find('a').html() == 'Show More') ? 'Show Less' : 'Show More');
			});
		});
	});

	// All these .link-to- functions should be rewritten to a single variable function.
	$('.link-to-concordis-way').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.detail-concordis-way h1').first().offset().top - navHeightOffset;
		$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, function() {
			$(bodyOrHTML).animate({ scrollTop: scrollTarget - 50 }, 100, function() {
				$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, 'easeInBack');
			});
		});
	});

	$('.link-to-recruiting-process').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.detail-recruiting-process h1').first().offset().top - navHeightOffset;
		$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, function() {
			$(bodyOrHTML).animate({ scrollTop: scrollTarget - 50 }, 100, function() {
				$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, 'easeInBack');
			});
		});
	});

	$('.link-to-model-shared-success').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.detail-shared-success h1').first().offset().top - navHeightOffset;
		$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, function() {
			$(bodyOrHTML).animate({ scrollTop: scrollTarget - 50 }, 100, function() {
				$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, 'easeInBack');
			});
		});
	});

	$('.link-to-virtuous-cycle').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.detail-virtuous-cycle h1').first().offset().top - navHeightOffset;
		$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, function() {
			$(bodyOrHTML).animate({ scrollTop: scrollTarget - 50 }, 100, function() {
				$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, 'easeInBack');
			});
		});
	});

	$('.link-to-industry-secrets').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.detail-industry-secrets h1').first().offset().top - navHeightOffset;
		$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, function() {
			$(bodyOrHTML).animate({ scrollTop: scrollTarget - 50 }, 100, function() {
				$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, 'easeInBack');
			});
		});
	});

	$('.link-to-service-offering').on('click', function(e) {
		e.preventDefault();
		var scrollTarget = $('.detail-service-offering h1').first().offset().top - navHeightOffset;
		$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, function() {
			$(bodyOrHTML).animate({ scrollTop: scrollTarget - 50 }, 100, function() {
				$(bodyOrHTML).animate({ scrollTop: scrollTarget }, 300, 'easeInBack');
			});
		});
	});

});

