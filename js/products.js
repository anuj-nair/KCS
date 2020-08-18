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
