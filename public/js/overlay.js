$(document).ready(function(){
	
	$('.overlay-link').on('click', function(e){
		e.preventDefault();
		var targetOverlay = $("#" + $(this).attr("data-overlay"));
		$('.overlay').addClass('hidden');
		
		setTimeout(function(){
			if(targetOverlay.hasClass('hidden')){
				targetOverlay.removeClass('hidden');
				$('#overlays').removeClass('hidden');
			}
		}, 220);
	
	});

	$('.overlay .close, #overlays').on('click', function(){
		$('.overlay, #overlays').addClass('hidden');
	});

})