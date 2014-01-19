//Handle animation of text areas.
$('.services-nav-item').on('click', function(){
	var target = $('#' + $(this).attr('data-anchor'));
	$('.services-nav-item').removeClass('active');
	$('.services-item').removeClass('active');
	target.addClass('active');
	$(this).addClass('active');
});

var servicesFontSize = parseInt($('#main-nav .nav-item').css('font-size').match(/^\d*/));

var servicesLineHeight = servicesFontSize + 10; 


$('#services-nav > ol').css({
							'font-size' : servicesFontSize + 'px',
							'line-height' : servicesLineHeight + 'px'
							});