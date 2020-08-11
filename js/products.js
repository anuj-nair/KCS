
var currLoc = window.location.hash;

if (currLoc != '') {
    $('#AC_tab').removeClass('active');
    $('#AC').removeClass('active show');
	if (currLoc == '#ROS') {
		$('#ROS_tab').addClass('active');
		$('#ROS').addClass('active show');
	} else if (currLoc == '#RP') {
		$('#RP_tab').addClass('active');
		$('#RP').addClass('active show');
	}
} 

$('#sub_products a').on('click', function (e) {
	e.preventDefault();
    $(this).tab('show');
});
