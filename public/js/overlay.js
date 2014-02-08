$(document).ready(function(){
	
	$('.overlay-link').on('click', function(e){
		var targetOverlay = $("#" + $(this).attr("data-overlay"));
		targetOverlay.removeClass('bottom hidden');
		$('#overlays').removeClass('bottom hidden');
		$('body').addClass('noscroll');
		e.preventDefault();
	});

	$('.overlay .close, #overlays').on('click', function(e){
			if($(e.target).closest('.overlay').length > 0 && !$(e.target).hasClass('close')){
			console.log('true');
			return false;
		}
		$('.overlay, #overlays').addClass('hidden');
		$('body').removeClass('noscroll');
		setTimeout(function(){
			$('.overlay, #overlays').addClass('bottom');
		}, 400);
	});

})