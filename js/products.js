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
		if($('.prod-pic h2').html() !=''){
			$('.prod-deat h2').html($('.prod-pic h2').html());
			$('.prod-pic h2').html('');
		}

	} else {
		$('#header .logo h1').removeClass('mtop-head');
		$('.main-nav').removeClass('mtop-nav');
		if($('.prod-deat h2').html() !=''){
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
moreButton.click(function () {
	if($(this).text()==lessText){
		$("html, body").animate({ scrollTop: "0" },'fast');
	}
	$(this).text($(this).text() == moreText ? lessText : moreText);
});

// $('li.drop-down a').click(function(){
// 	// $(this).parent().toggleClass('active');
// 	// if($(this).html()!=$("li.drop-down.active").html()){
// 	// 	console.log('did it')
// 	// 	$('li.drop-down.active').toggleClass('active');
// 	// }
// 	if($(this).html() !== $("li.drop-down.active a").html()){
// 		$('li.drop-down.active').slideToggle(300);
// 		$('li.drop-down.active').toggleClass('active');
// 	}

// });

// $(document).on('click', '.mobile-nav .drop-down a', function(e) {
// 	e.preventDefault()

// 	if($(this).html() !== $("li.drop-down.active a").html() && $("li.drop-down.active a").html() !== undefined){
// 		$('li.drop-down.active a').next().slideToggle(300);
// 		$('li.drop-down.active a').parent().toggleClass('active');
// 		console.log('html');
// 	}
// 	$(this).next().slideToggle(300);
// 	$(this).parent().toggleClass('active');
//   });

// var $window = $(window),
//     $trigger = $('.btn-bk a'),
//     fallback = $('.btn-bk a').attr('href');
//     hasHistory = false;

// $window.on('beforeunload', function(){
//     hasHistory = true;
// });

// $trigger.on('click', function(){

//     window.history.go(-1);

//     setTimeout(function(){
//         if (!hasHistory){
//             window.location.href = fallback;
//         }
//     }, 200);

//     return false;
// });

// $('.btn-bk a').click(function (e) {
//   e.preventDefault();
//   back_btn($('.btn-bk a').attr('href'))
// });

// function back_btn(fallbackUrl) {
//   fallbackUrl = fallbackUrl || '/';
//   var prevPage = window.location.href;

//   if(window.document.referrer ==''){
//     window.history.go(-1);
//   }else{
//     l= window.document.referrer;
//     l.split('/');
//     l = l.slice(-1)
//     fallback
//   }

//   setTimeout(function(){
//       if (window.location.href == prevPage) {
//           window.location.href = fallbackUrl;
//       }
//   }, 200);
// }
