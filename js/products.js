// For the Product Title
var title = $(".prod-deat h2").html().toLowerCase();
title = title.replace(/acs/gi, 'ACs');
title = title.replace(/vrf/gi, 'VRF');
title = title.replace(/iv/gi, 'IV');
title = title.replace(/dx/gi, 'DX');
title = title.replace(/lph/gi, 'LPH');
$(".prod-deat h2").html(title);
var title = $(".prod-pic h2").html().toLowerCase();
title = title.replace(/acs/gi, 'ACs');
title = title.replace(/vrf/gi, 'VRF');
title = title.replace(/iv/gi, 'IV');
title = title.replace(/dx/gi, 'DX');
title = title.replace(/lph/gi, 'LPH');
$(".prod-pic h2").html(title);

// For Product Image Pop-Up Animation
$('.pop-s-img').magnificPopup({
    type: 'image',
});

$('.pop-m-img').magnificPopup({
    delegate: 'a',
    gallery: {
        enabled: true,
    },
    type: 'image',
});

// For Product Details Read more/less switch 
var moreText = 'Read More',
    lessText = 'Read Less',
    moreButton = $('.readMore');
moreButton.click(function () {
    if ($(this).text() == lessText) {
        $('html, body').animate({
            scrollTop: '0'
        }, 'fast');
    }
    $(this).text($(this).text() == moreText ? lessText : moreText);
});
// Form restriction
$('#phone').on('input propertychange', function () {
    this.value = this.value.replace(/[^0-9+]/gi, '').replace(/([0-9+].*)\+/gi, '$1');
});
$('#length, #with, #height').on('input propertychange', function () {
    this.value = this.value.replace(/[^0-9.]/gi, '').replace(/(\..*)\./gi, '$1');
});
$('#temp-min, #temp-max').on('input propertychange', function () {
    this.value = this.value.replace(/[^0-9+.\-]/gi, '').replace(/([0-9+\-].*)(\+|\-)/gi, '$1').replace(/(\..*)\./gi, '$1');
});

// For Window Resize based Changes
if (window.innerWidth > 991) {
    $('#header .logo h1').addClass('mtop-head');
    $('.main-nav').addClass('mtop-nav');
} else {
    $('#header .logo h1').removeClass('mtop-head');
    $('.main-nav').removeClass('mtop-nav');
    $('.prod-pic h2').html($('.prod-deat h2').html());
    $('.prod-deat h2').html('');

}

window.onresize = () => {
    if (window.innerWidth > 991) {
        $('#header .logo h1').addClass('mtop-head');
        $('.main-nav').addClass('mtop-nav');
        if ($('.prod-pic h2').html() != '') {
            $('.prod-deat h2').html($('.prod-pic h2').html());
            $('.prod-pic h2').html('');
        }
    } else {
        $('#header .logo h1').removeClass('mtop-head');
        $('.main-nav').removeClass('mtop-nav');
        if ($('.prod-deat h2').html() != '') {
            $('.prod-pic h2').html($('.prod-deat h2').html());
            $('.prod-deat h2').html('');
        }
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