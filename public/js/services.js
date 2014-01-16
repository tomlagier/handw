//Handle animation of text areas.
$('.services-nav-item').on('click', function(){
	var target = $('#' + $(this).attr('data-anchor'));
	$('.services-nav-item').removeClass('active');
	$('.services-item').removeClass('active');
	target.addClass('active');
	$(this).addClass('active');
});

$('#services-nav > ol').css({
							'font-size' : $('#main-nav .nav-item').css('font-size'),
							'line-height' : $('#main-nav .nav-item').css('line-height')
							});