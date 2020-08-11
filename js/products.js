$('#sub_products a').on('click', function (e) {
	e.preventDefault();
	$(this).tab('show');
});
console.log(window.location);
var loc = window.location.hash;

if (loc != '') {
	if (loc == '#ROS') {
		$('#AC_tab').removeClass('active');
		$('#AC').removeClass('active show');
		$('#ROS_tab').addClass('active');
		$('#ROS').addClass('active show');
	} else if (loc == '#RP') {
		$('#AC_tab').removeClass('active');
		$('#AC').removeClass('active show');g
		$('#RP_tab').addClass('active');
		$('#RP').addClass('active show');
		window.location.href = window.location.href.slice(0, -loc.length);
	}
}
