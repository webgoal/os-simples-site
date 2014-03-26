(function($) {

		function getWindowSize() {
			windowHeight = $(window).height();
			windowWidth = $(window).width();

		}

		var windowHeight = 0;

		
		$(document).ready(function(){
			
			mixpanel.track("access_page", {
		  		"page": "home"
			});

			mixpanel.track("access_page", {
		  		"page": "thanks"
			});

			getWindowSize();
			
			// SCROLL EASING
			$('nav a, #footer a, #hero a, .grid-12 a')
				.bind('click',function(event){ 
					var $anchor = $(this);
		        	$('html, body').stop().animate({
		            	scrollTop: $($anchor.attr('href')).offset().top
	        		}, 1200,'easeInOutExpo');
		        	
	        		event.preventDefault();
	    		});


	    	$('#btn-one').click(function() {

	    		mixpanel.track("click", {
			  		"botao": "topo"
				});
			});

			$('#btn-two').click(function() {

	    		mixpanel.track("click", {
			  		"botao": "meio"
				});
			});

			$('#btn-submit').click(function() {

	    		mixpanel.track("click", {
			  		"botao": "form"
				});
			});			

		});

})( jQuery );
