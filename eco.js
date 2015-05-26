"use strict";

/*
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
 //$("body").prepend(frags[2].innerHTML);
 }

 } )();
*/

$(document).ready(function() {
  $('#submit').click(function() {
     alert('Message has been sent. Thank you for contacting us');
     document.getElementById('contactname').value = "";
     document.getElementById('contactemail').value = "";
     document.getElementById('message').value = "";
  });
});
