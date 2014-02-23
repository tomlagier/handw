<!-- Begin home page -->
<!-- Begin text content -->
<div id="home-text-wrapper" class="left-content">
<div id="home-text" class="scale-body">
Hello. We're Hanson & Wen, a Los Angeles-based design agency. We focus on packaging and brand management, and we've worked across many industries, having particularly strong relationships within the food, alcohol and consumer goods sectors.
<br><br>
We've brought together an exciting, experienced team of energetic professionals to build something special with our clients, so we can work with you to help you achieve your goals. Our aim is to maximize your product's potential. We can create, manage or expand your brand and work closely with you from concept to final print, overseeing each stage with experience and knowledge of the industry, allowing you to focus on your core responsibilities.
</div>
</div>
<!-- End text content -->
<!-- Begin carousel -->
<div id="home-carousel" class="carousel slide right-content fadein" data-ride="carousel" data-interval="5000">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#home-carousel" data-slide-to="0" class="active"></li>
    <li data-target="#home-carousel" data-slide-to="1"></li>
    <li data-target="#home-carousel" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner scale-image height-constrain">

    <div class="item active">
      <div class="scale-image-wrapper">
        <img src="/img/home/home-2.jpg?version=2" class="image" alt="Placeholder">
      </div>
      <div class="carousel-caption">
      </div>
    </div>

    <div class="item not-active">
      <div class="scale-image-wrapper">
        <img src="/img/home/home-3.jpg" class="image" alt="Placeholder">
      </div>
      <div class="carousel-caption">
      </div>
    </div>

    <div class="item not-active">
      <div class="scale-image-wrapper">
        <img src="/img/home/home-1.jpg" class="image" alt="Placeholder">
      </div>
      <div class="carousel-caption">
      </div>
    </div>

  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#home-carousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#home-carousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>

<script>

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

  }, 950);

  $('#home .green-line').width($('#home').width() - 96);

</script>
<div class="green-line"></div>
<!-- End carousel -->
<!-- End home page --> 
