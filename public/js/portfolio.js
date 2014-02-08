setTimeout(function(){

  $('#portfolio').waypoint({
    handler: function(){
      setupPortfolioNav();
    },
    offset: 0 + $('.page').css('margin-top').match(/^\d*/),
    triggerOnce: true
  });
}, 0);

  var toggleState = function(){
    setTimeout(function(){
      var state = $('#portfolio-nav').attr('data-active'); 
      if (state === "true"){
        if(!$('#portfolio').isPercentVisible(0.35)){
          $('#portfolio-nav').css('opacity', '0');
          $('#portfolio-nav').attr('data-active', '');
        }
      } else {
        if($('#portfolio').isPercentVisible(0.35) && $('#portfolio').isOnScreen()){
          $('#portfolio-nav').css('opacity', '1');
          $('#portfolio-nav').attr('data-active', 'true');

        }
      }
    }, 300);
  };

  function setupPortfolioNav(){

    $('#portfolio-nav').appendTo('.right-nav-block');

    $('.portfolio-nav-item, #portfolio-nav .spacer').css({
        'font-size' : window.gHeaderSize + 'px',
        'line-height' : window.gHeaderSize + 'px'
      });
    $('#portfolio-nav').height(window.gHeaderSize);

    toggleState();

    setTimeout(function(){
      if($('#portfolio-nav').attr('data-active') === 'true'){
        $('#portfolio-nav').css('opacity', '1');
      }
    }, 0);
    
    $(window).on('scroll', toggleState);

    $('.portfolio-nav-item').on('click touchstart', function(){

        var target = $('#' + $(this).attr('data-href'));
        
        $('.portfolio-nav-item').removeClass('active');
        $(this).addClass('active');

        if(!target.hasClass('active')){
          $('.active.portfolio-carousel').fadeOut(400, function(){
            $('.active.portfolio-carousel').removeClass('active');
            target.fadeIn(400, function(){
              $(this).addClass('active');
            });
          });
        }
    });

    if(portfolioPage !== ''){
      $('.portfolio-nav-item').removeClass('active');
      $('.portfolio-carousel').removeClass('active');
      $('.portfolio-nav-item[data-href=' + portfolioPage + ']').addClass('active');
      $('#' + portfolioPage).addClass('active');
    }

  }

var setupSecondaryNav = function(){
    $('.carousel').on('slid.bs.carousel', function(){
      var targetIndex = $(this).find('.carousel-inner .item.active').index();
      $(this).find('.carousel-indicators.secondary li').removeClass('alternate-active');
      var targetNav = $(this).find('.carousel-indicators.secondary li:eq(' + targetIndex + ')');
      targetNav.addClass('alternate-active');
    });
}();

$('#portfolio .portfolio-thumb-caption').css('font-size', $('#main-nav .nav-item').css('font-size'));

$('#portfolio .scale-text').scaleText();

setTimeout(function(){
  $('.carousel-indicators.fadein-fast').css('opacity', 1);
}, 950);