
var currLoc = window.location.hash;
console.log(currLoc);


if (currLoc == '#ROS' || currLoc == '#RP') {
    $('#AC_tab').removeClass('active');
    $('#AC').removeClass('active show');
	if (currLoc == '#ROS') {
		$('#ROS_tab').addClass('active');
		$('#ROS').addClass('active show');
	} else if (currLoc == '#RP') {
		$('#RP_tab').addClass('active');
		$('#RP').addClass('active show');
	}
}else if(currLoc == "#win" || currLoc == "#port" || currLoc == "#cac" || currLoc == "#vert") {
	$('#split_tab').removeClass('active');
    $('#split').removeClass('active show');
	if (currLoc == '#win') {
		$('#win_tab').addClass('active');
		$('#win').addClass('active show');
	} else if (currLoc == '#port') {
		$('#port_tab').addClass('active');
		$('#port').addClass('active show');
	} else if (currLoc == '#cac') {
		$('#cac_tab').addClass('active');
		$('#cac').addClass('active show');
	} else if (currLoc == '#vert') {
		$('#vert_tab').addClass('active');
		$('#vert').addClass('active show');
	}
}else if(currLoc == "#duct" || currLoc == "#chiller"){
	$('#vrf_tab').removeClass('active');
    $('#vrf').removeClass('active show');
	if (currLoc == '#duct') {
		$('#duct_tab').addClass('active');
		$('#duct').addClass('active show');
	} else if (currLoc == '#chiller') {
		$('#chiller_tab').addClass('active');
		$('#chiller').addClass('active show');
	}
}

$('#sub_products a').on('click', function (e) {
	e.preventDefault();
    $(this).tab('show');
});
