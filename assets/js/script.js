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
	});

	$('#cadastro').submit(function() {
		if (window.location.host == "www.ossimples.com.br") {
			var email = $('#cadastro #email').val();
			var name = $('#cadastro #name').val();
			mixpanel.identify(email);
			mixpanel.people.set({
					"$first_name": name,
					"$created": new Date(),
					"$email": email,
			});
		} else {
			alert("Ops! Local não envia para o mixpanel!");
		}
	});
})
