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


$(document).on('click', '.mobile-nav .drop-down a', function(e) {
	if($(this).html() !== $("li.drop-down.active a").html() && $("li.drop-down.active a").html() != undefined){
		$('li.drop-down.active a').next().slideToggle(300);
		$('li.drop-down.active a').parent().toggleClass('active');
	}
  });
















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
