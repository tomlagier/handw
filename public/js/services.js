//Handle animation of text areas.
$(document).ready(function(){
	$('.services-nav-item').on('click', function(){
		var target = $('#' + $(this).attr('data-anchor'));
		$('.services-nav-item').removeClass('active');
		$('.services-item').removeClass('active');
		target.addClass('active');
		$(this).addClass('active');
	});
});