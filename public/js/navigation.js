//Enable smooth scrolling
$(document).ready(function(){
	$('#main-nav > div > .nav-item, #side-nav > ul > .nav-item').on('click touchstart', function(){

		//Get scroll target
		var target = $($(this).attr('data-anchor'));
		
		//Animate scroll to that position over 1 second
		$('html,body').animate({
        	scrollTop: target.offset().top
        }, 1000);
	});

    $('#portfolio-subnav .nav-item').on('click touchstart', function(){
        var target=$('#portfolio');
        portfolioPage = $(this).attr('data-portfolio-anchor');
        var targetNav = $('.portfolio-nav-item[data-href=' + portfolioPage + ']');
        $('html, body').animate({
            scrollTop: target.offset().top
        }, function(){
            targetNav.click();
        });
    });

    $('#main-nav .nav-item[data-anchor=#portfolio]').hover(function(){
        $('#portfolio-subnav').stop().fadeIn();
    }, function(){
        $('#portfolio-subnav').stop().fadeOut();
    });
});

var portfolioPage = '';

//Enable scroll spying
$(document).ready(function(){
    $(window).on('scroll load resize', function(){
        setTimeout(function(context){
            $.each($('.page-contents'), function(index, element){
                var target = $(element).attr('id');
                if($(element).isNearScreen(0.51)){
                    $('.navigation [data-anchor=#' + target + ']').addClass('active');
                }
                else{
                    $('.navigation [data-anchor=#' + target + ']').removeClass('active');
                }
            });
        });
    });
});


//To stop window from scrolling during successive snap calls
//window.preventScroll = false;

//Snaps the screen to a page after scroll input has stopped arriving.
var snap = _.debounce(function(event){

    if(window.preventScroll){
        event.preventDefault();
        return false;
    }

    //Check each page view            
    $.each($('.page-contents'), function(index, element){
        
        //If the page view is 70% of the screen and we are allowed to snap, snap into view
        if($(element).isNearScreen(0.25) && !window.preventSnap){

            $('html,body').stop().animate({
                scrollTop: $(element).offset().top
            }, 200);

            window.preventSnap = true;
            window.preventScroll = true;

             setTimeout(function(){
                window.preventScroll = false;
             }, 220);

             setTimeout(function(){
                 window.preventSnap = false;
             }, 650);
        }
    });  
}, 600);

window.preventSnap = false;
window.preventScroll = false;

//Enable snap to page
$(window).on('scroll.snap', snap);

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

/**
 * Returns "true" if the item is more than percent visible. Elements that
 * @param  {[type]}  percent [description]
 * @return {Boolean}         [description]
 */
$.fn.isPercentVisible = function(percent){

}
