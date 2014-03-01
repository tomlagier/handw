  imagesLoaded( $('body'), function(instance){
    setTimeout(function(){
      $('#home-carousel').css('opacity', '1');

      $('#home-carousel').carousel({
        interval: 5000
      });

      $('#home-carousel').on('slide.bs.carousel', function(){        
        var currentItem = $(this).find('.item.active');
        var nextItem = $(this).find('.item.active').next();
        if(nextItem.length === 0){
        	nextItem = $(this).find('.item').first();
        }
        currentItem.fadeOut(1000);
        setTimeout(function(){
        	nextItem.fadeIn(1000);
        });
      });

    }, 1100);
  });

  $('#home .green-line').width($('#home').width() - 96);