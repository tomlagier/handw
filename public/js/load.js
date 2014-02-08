/**
 * ImagesLoaded plugin, to ensure that image heights are accurate.
 */

/*!
 * imagesLoaded PACKAGED v3.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e){function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===f.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var c=this;setTimeout(function(){c.check()})}function f(e){this.img=e}function a(e){this.src=e,h[e]=this}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&c&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))}),f.prototype=new e,f.prototype.check=function(){var e=h[this.img.src]||new a(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var h={};return a.prototype=new e,a.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},a.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},a.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},a.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},a.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},a.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},r}var o=e.jQuery,s=e.console,c=s!==void 0,f=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);


function bindWaypoints(){

	//Sets up lazy loading views. Load occurs when element is 5% of the viewport from the bottom of the window. 
	//Will fire once, and only if it's the last waypoint during a scroll.
	
	$('.page-load').waypoint({
		handler: function(){
			setTimeout(loadPage, 400, $(this).attr('data-contents'));
		},
		offset: -1
	});

	$('.page-load').waypoint({
		handler: function(){
			setTimeout(loadPage, 400, $(this).attr('data-contents'));
		},
		offset: 0 + $('.page').css('margin-top').match(/^\d*/)
	});

	$('.page-load').waypoint({
		handler: function(){
			setTimeout(loadPage, 400, $(this).attr('data-contents'));
		},
		offset: 0 - $('.page').css('margin-top').match(/^\d*/)
	});

	//Bind to the bottom of the page as well
	$('.page-load').waypoint({
		handler: function(){
			setTimeout(loadPage, 400, $(this).attr('data-contents'));
		},
		offset: $('.page').height() + (2 * $('.page').css('margin-top').match(/^\d*/)) + ($('.page').height() * .1)
	});

}

//Need to make sure that when the page is greater than 1600px wide, the height doesn't get all fucked up.
//Target proportion width:height is 2:1
function setHeights(){
	if($(window).height() > 800){
		$('.page').height(800);
		var marginTopBot = parseInt((($(window).height() - 800) / 2) - 5);
		$('.page').css('margin', marginTopBot + 'px 0');
		
		if($('#header').attr('data-sized') === 'false'){
			var headerPadding = parseInt($('#header').css('padding-top').match(/^\d*/)) + marginTopBot + 'px';
			var headerHeight = parseInt($('#header').css('height').match(/^\d*/)) + marginTopBot + 'px';

			$('#header').css({
								'padding-top' : headerPadding, 
								'height' : headerHeight
							}).attr('data-sized', 'true');				
		}

		if($('#footer').attr('data-sized') === 'false'){
			var footerHeight = parseInt($('#footer').css('height').match(/^\d*/)) + marginTopBot + 'px';
			$('#footer').css({
				'height' : footerHeight	
			}).attr('data-sized', 'true');
		}

		if($('#side-nav').attr('data-sized') === 'false'){
			var sideNavBot = parseInt($('#side-nav').css('bottom').match(/^\d*/)) + marginTopBot + 'px';
			$('#side-nav').css({
				'bottom' : sideNavBot
			}).attr('data-sized', 'true');
		}

		$('body').height($(window).height() * 6 - 75);
	} else {
		$('.page').height($(window).height());
	    $('body').height($('.page').height() * 6 - 75);
	}
}

/**
 * Ensure that our header, footer, and side nav are positioned correctly on screens wider than 1600px
 */

function widthCheck(){
	if($(window).width() > 1600){

        //Window width - 1600px / 2 = body margin, + 40 for correct right offset
        var offset = ($(window).width() - 1600) / 2;
        var rightOffset = offset + 25;
        $('#side-nav').css('right', rightOffset + 'px');
        $('#header, #footer').css('left', offset + 'px');
        $('#header').css('top')
    }
}

$(document).ready(function(){
	imagesLoaded( $('body'), function(instance){
		setHeights();
		widthCheck();
	});
});

//Set individual page height to window height, then (re)bind waypoints
$(window).on('load resize', function(){
    setHeights();
    $('.page').waypoint('destroy');
    bindWaypoints();
    setGlobalHeaderSize();
    $('.left-nav-block').css('opacity', '1');
});

$(window).on('load', function(){
	loadServices();
});

//Load the Services section, set global font size
function loadServices(){
	var pageObj = $('#services');
	console.log('loading services');
		
	//Prevent both events from firing and content from loading multiple times
	pageObj.attr('data-loaded', 'true');
		
	//Load in content, then fade out loader and fade in content
	pageObj.load('/services', function(response, status){

		//Reset loaded flag if error status occurs
		if(status === "error"){
			pageObj.attr('data-loaded', 'false');

		//Otherwise fade in content
		} else {
			imagesLoaded( pageObj, function( instance ) {
				
				$.each(pageObj.find('.scale-parent'), function(index, element){
				 	setGlobalFontSize($(element));
				 });

				$('#services .scale-body').scaleBody();

				pageObj.parent().find('.loader').fadeOut('fast', function(){
					pageObj.addClass('visible');
				});
			});
		}
	});
}

//Sets the global font size from scaling a particular element.
function setGlobalFontSize(element){
	element.scaleContents();
	window.gFontSize = parseInt(element.children().css('font-size').match(/^\d*/));
}

//Sets the global header font size from scaling the main navigation
function setGlobalHeaderSize(){
	$('#main-nav .scale-parent').scaleContents();
	window.gHeaderSize = parseInt($('#main-nav .nav-item').css('font-size').match(/^\d*/));
	$('#main-nav').height(window.gHeaderSize);
}

//Sets the scalable text to the global font size
$.fn.scaleBody = function(){
	this.css({
		'font-size' : window.gFontSize + 'px',
		'line-height' : window.gFontSize + 4 + 'px'
	})
}

//Sets the scalable header to the global header size
$.fn.scaleHeader = function(){
	this.css({
		'font-size' : window.gHeaderSize + 'px'
	});
}

//Sets scalable images to proper dimensions by calculating the overflow and adjusting the offset appropriately.
$.fn.scaleImage = function(){

	var images = this.find('.image');

	var scaleImage = this.find('.image:visible').first();
	var scaleWrapper = this.find('.scale-image-wrapper:visible').first();

	console.log(scaleImage.width(), scaleWrapper.width());


	//If the element is constrained by height
	if(scaleImage.width() >= scaleWrapper.width()){

		//Half the difference between the element and the wrapper
		var leftOffset = -((scaleImage.width() - scaleWrapper.width())/2);

		images.css({
			'left': leftOffset
		});

	//Else element is constrained by width
	} else {
		this.removeClass('height-constrain').addClass('width-constrain'); 

		var topOffset = -((scaleImage.height() - scaleWrapper.height())/2);

		images.css({
			'top' : topOffset
		});
	}
}

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
				imagesLoaded( pageObj, function( instance ) {
					
					//Scale the body text
					$.each(pageObj.find('.scale-body'), function(index, element){
					 	$(element).scaleBody();
					 });
					
					//Scale the header text
					$.each(pageObj.find('.scale-header'), function(index, element){
					 	$(element).scaleHeader();
					 });

					//Position the images
					$.each(pageObj.find('.scale-image'), function(index, element){
						$(element).scaleImage();
					});

					//Fade out the loading gif
					pageObj.parent().find('.loader').fadeOut('fast', function(){
						pageObj.addClass('visible');
					});

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
     
    var bounds = this.modOffset();
    bounds.right = bounds.left + this.outerWidth() - 1;
     
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
     
};

//Adapted from http://www.metaltoad.com/blog/resizing-text-fit-container
//
//

$.fn.scaleText = function() {
      var fontstep = 2;
      if (this.height()>this.parent().height() || this.width()>this.parent().width()) {
      	var targetFontSize = parseInt(this.css('font-size').match(/^\d*/)) - fontstep;
      	var targetLineHeight = targetFontSize + 6;

      	if(targetFontSize > 6){
      		this.css('font-size',targetFontSize + 'px').css('line-height', targetLineHeight + 'px');
        	this.scaleText();
      	}
      }
    }


$.fn.scaleContents = function(){

	var items = this.children();

	var target = this.find('.scale-target');
	target.right = target.offset().left + target.width() - 1;
	target.bottom = target.offset().top + target.height() - 1;

	var parent = this.parent();
	parent.right= parent.offset().left + parent.outerWidth();
	parent.bottom = parent.offset().top + parent.outerHeight();

	var fontstep = 1;
	if(target.right > parent.right || target.bottom > parent.bottom){
		var targetFontSize = parseInt(target.css('font-size').match(/^\d*/)) - fontstep;
		var targetLineHeight = targetFontSize + 6;

		if (targetFontSize > 6){
			items.css('font-size',targetFontSize + 'px').css('line-height', targetLineHeight + 'px');
        	this.scaleContents();
		}
	}
}