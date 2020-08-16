
$('#sub_products a').on('click', function (e) {
	e.preventDefault();
    $(this).tab('show');
});


$('.pop-s-img').magnificPopup({
    type: 'image'
  });

  $('.pop-m-img').magnificPopup({
    delegate: 'a',
    gallery: {
        enabled: true
      },
    type: 'image'
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
