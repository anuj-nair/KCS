"use strict";

currHash = localStorage.hash;

if (currHash === '#df' || currHash === '#fs' || currHash === '#i3' || currHash === '#wc' || currHash === '#RP' || currHash === '#bwd' || currHash === '#cac' || currHash === '#vrf' || currHash === '#CAC' || currHash === '#MRP' || currHash === '#ROS' || currHash === '#duct' || currHash === '#port' || currHash === '#vert' || currHash === '#screw' || currHash === '#cooler' || currHash === '#scroll' || currHash === '#chiller') {
  if (currHash === '#MRP' || currHash === '#RP') {
    $('#CS_tab').removeClass('active');
    $('#CS').removeClass('active show');
  } else if (currHash === '#CAC') {
    $('#RAC_tab').removeClass('active');
    $('#RAC').removeClass('active show');
  } else if (currHash === '#duct' || currHash === '#chiller') {
    $('#vrf_tab').removeClass('active');
    $('#vrf').removeClass('active show');
  } else if (currHash === '#cac') {
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
  } else if (currHash === '#screw' || currHash === '#scroll') {
    $('#cc_tab').removeClass('active');
    $('#cc').removeClass('active show');
  }

  $(currHash + '_tab').addClass('active');
  $(currHash).addClass('active show');
}