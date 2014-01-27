//Handle animation of text areas.
$('.services-nav-item').on('click', function(){
	var target = $('#' + $(this).attr('data-anchor'));
	$('.services-nav-item').removeClass('active');
	$('.services-item').removeClass('active');
	target.addClass('active');
	$(this).addClass('active');
});

var servicesFontSize = window.gHeaderSize;

var servicesLineHeight = servicesFontSize + 5; 


$('#services-nav > ol').css({
							'font-size' : servicesFontSize + 'px',
							'line-height' : servicesLineHeight + 'px'
							});