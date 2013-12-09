//Enable smooth scrolling
$(document).ready(function(){
	$('.nav-item').on('click touchstart', function(){

		//Get scroll target
		var target = $($(this).attr('data-anchor'));
		
		//Animate scroll to that position over 1 second
		$('html,body').animate({
        	scrollTop: target.offset().top
        }, 1000);
	});
});


//Enable snap to page
$(document).ready(function(){
	$(window).on('scroll', function(){

        //Update window's last scrolled time
        this.then = Date.now();

        //Fire a function 500ms after every scroll
        setTimeout(function(context){

            //If the last scroll time happened 5 seconds ago
            if (Date.now() - context.then >= 499){

                console.log(Date.now() - context.then);

                //Check if any page containers are near the viewport. If one is, scroll to it.
        		$.each($('.page-contents'), function(index, element){
                    if($(element).isNearScreen()){
                        console.log('fired');
                        $('html,body').animate({
                            scrollTop: $(element).offset().top
                        }, 300);
                    }
                });  

                //Reset the timer to prevent multiple staggered firings 
                this.then = Date.now();
            }
        }, 600, this);
	});
});


//Modification of http://upshots.org/javascript/jquery-test-if-element-is-in-viewport-visible-on-screen 
//Returns "true" if more than 70% of an element is onscreen
$.fn.isNearScreen = function(){
     
    var win = $(window);
     
    var viewport = {
        top : win.scrollTop()
    };

    viewport.bottom = viewport.top + win.height();
     
    var bounds = this.offset();
    bounds.bottom = bounds.top + this.outerHeight();
    bounds.top = bounds.top;

    //If the element is visible
    if(!(viewport.bottom < bounds.top || viewport.top > bounds.bottom)){
    	
        //Get the percentage of the element that's visible
        var percentage = (viewport.bottom - bounds.top) / this.height();
    	return (percentage > .7 && percentage < 1.3);
    }
    return false;
     
};
