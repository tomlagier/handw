function bindWaypoints(){

	//Sets up lazy loading views. Load occurs when element is 5% of the viewport from the bottom of the window. 
	//Will fire once, and only if it's the last waypoint during a scroll.
	$('.page').waypoint({
		handler: function(){
			setTimeout(loadPage, 100, $(this).attr('data-contents'));
		},
		offset: '90%'
	});

	//Bind to the bottom of the page as well
	$('.page').waypoint({
		handler: function(){
			setTimeout(loadPage, 100, $(this).attr('data-contents'));
		},
		offset: '-90%'
	});

}

//Set individual page height to window height, then (re)bind waypoints
$(window).on('load resize', function(){
    $('.page').height($(window).height());
    $('.page').waypoint('destroy');
    bindWaypoints();
});

//Loads a given page
function loadPage(page){

	//Grab content wrapper
	var pageObj = $('#' + page);

	//If content is not loaded and the content is still visible
	if(pageObj.attr('data-loaded') === 'false' && pageObj.parent().isOnScreen()){

		console.log('loading ' + page);
		
		//Prevent both events from firing and content from loading multiple times
		pageObj.attr('data-loaded', 'true');
		
		//Load in content, then fade out loader and fade in content
		pageObj.load('/' + page, function(response, status){

			//Reset loaded flag if error status occurs
			if(status === "error"){
				pageObj.attr('data-loaded', 'false');

			//Otherwise fade in content
			} else {
				pageObj.parent().find('.loader').fadeOut('fast', function(){
					pageObj.addClass('visible');
				});	
			}
		});
	}
}

//From http://upshots.org/javascript/jquery-test-if-element-is-in-viewport-visible-on-screen

$.fn.isOnScreen = function(){
     
    var win = $(window);
     
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
     
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
     
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
     
};

