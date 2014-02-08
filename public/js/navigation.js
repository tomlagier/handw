//Enable smooth scrolling
$(document).ready(function(){
	$('#main-nav > div > .nav-item, #side-nav > ul > .nav-item').on('click touchstart', function(){

		//Get scroll target
		var target = $($(this).attr('data-anchor'));
		
		//Animate scroll to that position over 1 second
		$('html,body').animate({
        	scrollTop: target.modOffset().top
        }, 1000);
	});

    $('#portfolio-subnav .nav-item').on('click touchstart', function(){
        var target=$('#portfolio');
        portfolioPage = $(this).attr('data-portfolio-anchor');
        var targetNav = $('.portfolio-nav-item[data-href=' + portfolioPage + ']');
        $('html, body').animate({
            scrollTop: target.modOffset().top
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
            var mostVisible = 0, target = false;
            $('.navigation .active').removeClass('active');
            $.each($('.page-contents'), function(index, element){
                if($(element).percentVisible() > mostVisible){
                    mostVisible = $(element).percentVisible();
                    target = $(element).attr('id');
                }
            });
            if(target){
                $('.navigation [data-anchor=#' + target + ']').addClass('active');
            }
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
        if($(element).isPercentVisible(0.25) && !window.preventSnap){

            $('html,body').stop().animate({
                scrollTop: $(element).modOffset().top
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

//Enable snap to page if page is correct height
    $(window).on('scroll.snap', snap);

//Modification of http://upshots.org/javascript/jquery-test-if-element-is-in-viewport-visible-on-screen 
//Returns "true" if more than 70% of an element is onscreen
$.fn.percentVisible = function(){
    if (this.isOnScreen()){
        var win = $(window);
     
        var viewport = {
            top : win.scrollTop()
        };

        viewport.bottom = viewport.top + win.height();
         
        var bounds = this.modOffset();

        //Element is fully contained by viewport - return 1 for "100% visible"
        if(bounds.top >= viewport.top && bounds.bottom <= viewport.bottom){
            var percentVisible = 1;
        }
        //Bottom of element is below viewport
        else if(bounds.bottom >= viewport.bottom){
            //Top of the window is within viewport
            if (bounds.top >= viewport.top){
                var percentVisible = Math.abs((bounds.top - viewport.bottom) / win.height());
            //Top of the window is outside of viewport : object fills viewport
            } else {
                var percentVisible = 1;
            }
        //Top of element is above viewport
        } else if (bounds.top <= viewport.top){
            //Bottom of element is within viewport
            if (bounds.bottom <= viewport.bottom){
                var percentVisible = Math.abs((viewport.top - bounds.bottom) / win.height());
            //Bottom of the window is outside of viewport : object fills viewport
            } else {
                var percentVisible = 1;
            }
        }
        //Get the percentage of the element that's visible
        return percentVisible;        
    }
    return false;
};

//Returns whether an element consumes over a specified percentage of the viewport

$.fn.isPercentVisible = function(percent){
    return (this.percentVisible() >= percent);
}

//Returns the modified offset for screens > than 800px wide
$.fn.modOffset = function(){
    if($(window).height() > 800){
        var addlOffset = parseInt($('.page').css('margin-top').match(/^\d*/)[0]);
        return { top : this.offset().top - addlOffset, left : this.offset().left, bottom: this.offset().top + this.outerHeight() + addlOffset, right: this.offset().left + this.outerWidth() }
    } else {
        var bounds = this.offset();
        bounds.bottom = bounds.top + this.outerHeight();
        bounds.right = bounds.left + this.outerWidth();
        return bounds;
    }
}
