(function ($) {
    "use strict";
   
    // jQuery counterUp (used in Whu Us section)
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });
  
    // // Gallery isotope and filter
    // $(window).on('load', function () {
    //   var galleryIsotope = $('.gallery-container').isotope({
    //     itemSelector: '.gallery-item'
    //   });
    //   $('#gallery-flters li').on( 'click', function() {
    //     $("#gallery-flters li").removeClass('filter-active');
    //     $(this).addClass('filter-active');
    
    //     galleryIsotope.isotope({ filter: $(this).data('filter') });
    //   });
    // });
  
    // // Testimonials carousel (uses the Owl Carousel library)
    // $(".testimonials-carousel").owlCarousel({
    //   autoplay: true,
    //   dots: true,
    //   loop: true,
    //   items: 1
    // });
    
    //Certificates (uses Lightbox library)
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
      margin: 10, 
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      dots: false,
      nav: true,
      navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
      loop: true,
      center: true,
      autoWidth: true,
      lazyLoad: true
    });
  
  })(jQuery);
//  var mob_prod='<li class="drop-down"><a id="prodDrop" href="#products">Products</a><ul><li><a href="ac.html">Room Air Conditioners</a></li><li><a href="ac.html#CAC">Central Air Conditioners</a></li><li><a href="rp.html">Cold Storage</a></li><li><a href="rp.html#RP">Refrigeration Products</a></li><li><a href="rp.html#MRP">Medical Refrigeration Products</a></li><li><a href="ros.html">Commercial RO Systems</a></li></ul></li>'
//  var desk_prod='<li class="btn-group"><a href="<li class="btn-group"><a id="prodDrop" href="#products">Products</a><a href="#" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" style="margin-left:-20px;"aria-haspopup="true" aria-expanded="false"><span class="sr-only">Toggle Dropdown</span></a><ul class="dropdown-menu"><li><a href="ac.html">Room Air Conditioners</a></li><li><a href="ac.html#CAC">Central Air Conditioners</a></li><li><a href="rp.html">Cold Storage</a></li><li><a href="rp.html#RP">Refrigeration Products</a></li><li><a href="rp.html#MRP">Medical Refrigeration Products</a></li><li><a href="ros.html">Commercial RO Systems</a></li></ul></li>'

   
  if(992>window.innerWidth){
    $('a[href="#products"]').attr('href','');
   
  }
  window.onresize=()=>{
    if(992>window.innerWidth){
      $('a[href="#products"]').attr('href','');
    }else{
      $('#prodDrop').attr('href','#products');
    }
    if (768 > window.innerWidth) {
      $('header .logo h1 span').html('KCS');
      $('header .logo h1 span').css({
        'font-family': "'Heebo', sans-serif",
        'font-size': '36px',
      });
    } else {
      $('header .logo h1 span').html('Krishna Cooling Solutions');
      $('header .logo h1 span').css({
        'font-family': "'Montserrat', sans-serif",
        'font-weight': '900',
        'letter-spacing': '1px',
        'font-size': '30px',
      });
    }
  };
  
  