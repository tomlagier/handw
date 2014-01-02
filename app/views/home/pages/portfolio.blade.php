<!-- Begin portfolio page -->
<!-- Begin portfolio navigation -->
<div id="portfolio-nav" class="fadein-fast" data-active="">
  <div class="nav-wrapper">
    <div class="portfolio-nav-item active" data-href="alcohol">Alcohol</div>
    <div class="spacer">|</div>
    <div class="portfolio-nav-item" data-href="packaging">Packaging</div>
    <div class="spacer">|</div>
    <div class="portfolio-nav-item" data-href="branding">Branding</div>
    <div class="spacer">|</div>
    <div class="portfolio-nav-item" data-href="clients">Clients</div>
    <div class="stretch"></div>
  </div>
</div>
<script>
  setTimeout(function(){
    $('#portfolio').waypoint({
      handler: function(){
        setupPortfolioNav();
      },
      offset: 0,
      triggerOnce: true
    });
  }, 800);

  var toggleState = function(){
    var state = $('#portfolio-nav').attr('data-active'); 
    if (state === "true"){
      if(!$('#portfolio').isNearScreen(0.35)){
        $('#portfolio-nav').css('opacity', '0');
        $('#portfolio-nav').attr('data-active', '');
      }
    } else {
      if($('#portfolio').isNearScreen(0.35) && $('#portfolio').isOnScreen()){
        console.log("showing");
        $('#portfolio-nav').css('opacity', '1');
        $('#portfolio-nav').attr('data-active', 'true');

      }
    }
  };

  function setupPortfolioNav(){

    $('#portfolio-nav').appendTo('.right-nav-block');

    var targetSize = $('#main-nav .nav-item').css('font-size');

    $('.portfolio-nav-item').css('font-size', targetSize);
    $('#portfolio-nav').height(targetSize.match(/^\d*/));

    toggleState();

    setTimeout(function(){
      $('#portfolio-nav').css('opacity', '1');
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
</script>
<!-- End portfolio navigation -->
<!-- Begin alcohol carousel -->
<div id="alcohol" class="portfolio-carousel carousel slide active" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators left-content">
    <li data-target="#alcohol" data-slide-to="0" class="active"></li>
    <li data-target="#alcohol" data-slide-to="1"></li>
    <li data-target="#alcohol" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner right-content">
    <div class="item active">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#alcohol" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#alcohol" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>
<!-- End alcohol carousel -->
<!-- Begin packaging carousel -->
<div id="packaging" class="portfolio-carousel carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators left-content">
    <li data-target="#packaging" data-slide-to="0" class="active"></li>
    <li data-target="#packaging" data-slide-to="1"></li>
    <li data-target="#packaging" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner right-content">
    <div class="item active">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#packaging" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#packaging" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>
<!-- End packaging carousel -->
<!-- Begin branding carousel -->
<div id="branding" class="portfolio-carousel carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators left-content">
    <li data-target="#branding" data-slide-to="0" class="active"></li>
    <li data-target="#branding" data-slide-to="1"></li>
    <li data-target="#branding" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner right-content">
    <div class="item active">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#branding" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#branding" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>
<!-- End branding carousel -->
<!-- Begin clients carousel -->
<div id="clients" class="portfolio-carousel carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators left-content">
    <li data-target="#clients" data-slide-to="0" class="active"></li>
    <li data-target="#clients" data-slide-to="1"></li>
    <li data-target="#clients" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner right-content">
    <div class="item active">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/900x900" alt="Placeholder">
      <div class="carousel-caption">
      </div>
    </div>
  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#clients" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#clients" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>
<!-- End clients carousel -->
<!-- End portfolio page -->