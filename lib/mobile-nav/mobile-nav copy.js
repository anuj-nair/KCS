(function ($) {
  "use strict";

  // Mobile Navigation
  if ($('.main-nav').length) {
    var $mobile_nav = $('.main-nav').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('.mobile-nav-overly').toggle();
    });
    
    $(document).on('click', '.mobile-nav .drop-down.par > a', function(e) {
      e.preventDefault();
      if($(this).html() !== $("li.drop-down.par.active a").html() && $("li.drop-down.par.active a").html() !== undefined){
        $('li.drop-down.par.active a').next().slideToggle(300);
        $('li.drop-down.par.active a').parent().toggleClass('active');
        $('li.drop-down.par li.drop-down.sub.active a').next().slideToggle(300);
        $('li.drop-down.par li.drop-down.sub.active a').parent().removeClass('active');
      }
      // $('li.drop-down.sub.active a').parent().removeClass('active');
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });
    $(document).on('click', '.mobile-nav li.drop-down.par.active li.drop-down.sub > a', function(e) {
      e.preventDefault();
      if($(this).html() !== $("li.drop-down.sub.active a").html() && $("li.drop-down.sub.active a").html() !== undefined){
        $('li.drop-down.sub.active a').next().slideToggle(300);
        $('li.drop-down.sub.active a').parent().toggleClass('active');
      }
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

})(jQuery);
