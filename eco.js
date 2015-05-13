"use strict";

(function() {
	var ADDRESS = "common.xml";

/*	$("head").append("<link href='eco.css' type='text/css' rel='stylesheet' />");
*/
	window.addEventListener("load", function() {

		var ajax = new XMLHttpRequest();
		ajax.onload = postdata;
		ajax.open("GET", ADDRESS, true);
		ajax.send();
	} );

	function postdata() {
		
		$("head").append(this.responseText);
		
/*		var frags = jQuery.parseHTML(this.responseText);
		console.log(frags["head"]);
		$("head").append(frags["head"]);*/
	}

} )();