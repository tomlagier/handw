$(document).ready(function(){
	$('.blog-nav-item').on('click', function(){
		var target = $('#' + $(this).attr('data-anchor'));
		
		$('.blog-nav-item').removeClass('active');
		
		$('.blog-post').fadeOut('fast', function(){
			
		});
		
		setTimeout(function(target){target.fadeIn('fast');}, 300, target);
		
		$(this).addClass('active');
	});
});