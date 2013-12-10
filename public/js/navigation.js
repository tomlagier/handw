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

//Enable scroll spying
$(document).ready(function(){
    $(window).on('scroll load resize', function(){
        setTimeout(function(context){
            $.each($('.page-contents'), function(index, element){
                var target = $(element).attr('id');
                if($(element).isNearScreen(0.51)){
                    $('li[data-anchor=#' + target + ']').addClass('active');
                }
                else{
                    $('li[data-anchor=#' + target + ']').removeClass('active');
                }
            });
        });
    });
});


//To stop window from scrolling during successive snap calls
//window.preventScroll = false;

//Snaps the screen to a page after scroll input has stopped arriving.
var snap = _.debounce(function(event){

    if(window.preventSnap){
        event.preventDefault();
    }

    //Check each page view            
    $.each($('.page-contents'), function(index, element){
        
        //If the page view is 70% of the screen and we are allowed to snap, snap into view
        if($(element).isNearScreen(0.3) && !window.preventSnap){

            $('html,body').stop();
            $('html,body').animate({
                scrollTop: $(element).offset().top
            }, 200);


            window.preventSnap = true;
            $(window).off('scroll.snap');
             setTimeout(function(){
                 window.preventSnap = false;
                 $(window).on('scroll.snap', snap);
             }, 600);
        }
    });  
}, 500);

    //Modification of http://upshots.org/javascript/jquery-test-if-element-is-in-viewport-visible-on-screen 
    //Returns "true" if more than 70% of an element is onscreen
    $.fn.isNearScreen = function(percent){
         
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
        	return (percentage > (1 - percent) && percentage < (1 + percent));
        }
        return false;
         
    };

window.preventSnap = false;

//Enable snap to page
$(window).on('scroll.snap', snap);