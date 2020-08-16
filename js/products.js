
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
