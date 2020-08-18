(function ($) {
    "use strict";
   
    // // jQuery counterUp (used in Whu Us section)
    // $('[data-toggle="counter-up"]').counterUp({
    //   delay: 10,
    //   time: 1000
    // });
  
    // Gallery isotope and filter
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
  
    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
      margin: 10, 
      autoplay: true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      dots: false,
      nav: true,
      navText:["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
      loop: true,
      center: true,
      autoWidth: true,
      lazyLoad:true
    });
  
  })(jQuery);
 
 
  if(992>window.innerWidth){
    $('a[href="#products"]').attr('href','');
  }
  window.onresize=()=>{
    if(992>window.innerWidth){
      $('a[href="#products"]').attr('href','');
    }else{
      $('#prodDrop').attr('href','#products');
    }
  };
  
  