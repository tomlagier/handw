  $('#home-carousel .item.not-active').hide();

  setTimeout(function(){
    $('#home-carousel').css('opacity', '1');

    $('#home-carousel').carousel({
      interval: 5000
    });

    $('#home-carousel').on('slide.bs.carousel', function(){
      $(this).find('.item').fadeOut('1000');
    });

    $('#home-carousel').on('slid.bs.carousel', function(){
      $(this).find('.item.active').fadeIn('1000');
    });

  }, 1100);

  $('#home .green-line').width($('#home').width() - 96);