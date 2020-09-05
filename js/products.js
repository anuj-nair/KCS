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
var moreText = 'Read More',
    lessText = 'Read Less',
    moreButton = $('.readMore');
moreButton.click(function() {
    if ($(this).text() == lessText) {
        $('html, body').animate({ scrollTop: '0' }, 'fast');
    }
    $(this).text($(this).text() == moreText ? lessText : moreText);
});