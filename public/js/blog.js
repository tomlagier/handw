$('.blog-nav-item').on('click', function(){
	var target = $('#' + $(this).attr('data-anchor'));

	if(!$(this).hasClass('active')){

		var scaleParent = target.closest('.scale-parent');
		$('.blog-nav-item').removeClass('active');
		

		$('.blog-post').fadeOut('fast', function(){
			
		});
		
		setTimeout(function(target){
			target.fadeIn('fast');
			$(scaleParent).scaleContents();
		}, 300, target);
		
		$(this).addClass('active');

	}
});

$('.blog-nav-item').css('font-size', $('#main-nav .nav-item').css('font-size'));