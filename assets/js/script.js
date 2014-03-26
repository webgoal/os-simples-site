var windowHeight = 0

function getWindowSize() {
	windowHeight = $(window).height()
	windowWidth = $(window).width()
}

$(document).ready(function(){
	getWindowSize()
	// SCROLL EASING
	$('nav a, #footer a, #hero a, .grid-12 a').bind('click',function(event){ 
		var $anchor = $(this)
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1200,'easeInOutExpo')
		event.preventDefault()
	})
})
