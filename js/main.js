$(document).ready(function () {
	'use strict';
  	$('.carousel').carousel({
    	interval: 5000,
	 	pause: 'none'
  	});
	$('.toggle-menu').jPushMenu();
	$("#hireme_slide").owlCarousel({
      	navigation : true, 
      	slideSpeed : 300,
      	paginationSpeed : 400,
      	singleItem:true,
	  	autoPlay: true
  	});	
	$("#sponsor_slide").owlCarousel({
      	autoPlay: 3000, 
      	items : 5,
      	itemsDesktop : [1199,3],
      	itemsDesktopSmall : [979,3],
	  	itemsTablet : [768,3],
	  	itemsMobile :	[480,1],
	  	navigation : true,
	  	navigationText : false,
	  	pagination : false
  	});	
	 $("#testmonial_slide").owlCarousel({
      	navigation : true, 
      	autoPlay: 3000,
      	paginationSpeed : 400,
      	singleItem:true,
	  	items : 1, 
	  	navigation : false,
  	});
	$(".fancybox").fancybox();	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
  	var wow = new WOW({
    	mobile: false
  	});
  	wow.init();
  	/*function click(e) {
		if (document.all) {
			if (event.button==2||event.button==3) { 
				oncontextmenu='return false';
			}
		}
		if (document.layers) {
			if (e.which == 3) {
				oncontextmenu='return false';
			}
		}
	}
	if (document.layers) {
		document.captureEvents(Event.MOUSEDOWN);
	}
	document.onmousedown=click;
	document.oncontextmenu = new Function("return false;")
	document.onkeydown =document.onkeyup = document.onkeypress=function(){ 
		if(window.event.keyCode == 123) { 
			window.event.returnValue=false;
			return(false); 
		} 
	}*/
	var arr = ["img/link/weixin.png","img/link/qq.jpg"];
	$(".link").click(function  () {
		$(".right_link").children("img").src = arr[$(this).index()];
	})
});