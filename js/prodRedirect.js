currHash=localStorage.hash;	

if (
	currHash === '#df' ||
	currHash === '#fs' ||
	currHash === '#i3' ||
	currHash === '#wc' ||
	currHash === '#RP' ||
	currHash === '#bwd' ||
	currHash === '#cac' ||
	currHash === '#vrf' ||
	currHash === '#ROS' ||
	currHash === '#duct' ||
	currHash === '#port' ||
	currHash === '#vert' ||
	currHash === '#screw' ||
	currHash === '#cooler' ||
	currHash === '#scroll' ||
	currHash === '#chiller'
) {
	if (currHash === '#ROS' || currHash === '#RP') {
		$('#AC_tab').removeClass('active');
		$('#AC').removeClass('active show');
	} else if (
		currHash === '#duct' || 
		currHash === '#chiller' ||
		currHash === '#port' ||
		currHash === '#cac' ||
		currHash === '#vrf'
	) {
		$('#split_tab').removeClass('active');
		$('#split').removeClass('active show');
	} else if (currHash === '#wc' || currHash === '#bwd') {
		$('#cs_tab').removeClass('active');
		$('#cs').removeClass('active show');
	} else if (currHash === '#df' || currHash === '#cooler') {
		$('#kr_tab').removeClass('active');
		$('#kr').removeClass('active show');
	} else if (currHash === '#i3' || currHash === '#fs') {
		$('#i5_tab').removeClass('active');
		$('#i5').removeClass('active show');
	}else if(currHash === '#screw' || currHash === '#scroll'){
		$('#cc_tab').removeClass('active');
		$('#cc').removeClass('active show');
	}
	$(currHash + '_tab').addClass('active');
	$(currHash).addClass('active show');
}



