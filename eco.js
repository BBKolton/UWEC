"use strict";

(function() {
	var ADDRESS = "common.xml";

	window.addEventListener("load", function() {

		var ajax = new XMLHttpRequest();
		ajax.onload = postdata;
		ajax.open("GET", ADDRESS, true);
		ajax.send();
	} );

	function postdata() {
		var frags = jQuery.parseHTML(this.responseText);

		//puts links into the html head
		$("head").append(frags[0].innerHTML);

		//puts content into the document header
		$("body").prepend(frags[2].innerHTML);
	}

} )();