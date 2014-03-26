(function($) {

		function getWindowSize() {
			windowHeight = $(window).height();
			windowWidth = $(window).width();

		}

		var windowHeight = 0;

		
		$(document).ready(function(){
			getWindowSize();
			
			// SCROLL EASING
			$('nav a, #footer a, #hero a')
				.bind('click',function(event){ 
					var $anchor = $(this);
		        	$('html, body').stop().animate({
		            	scrollTop: $($anchor.attr('href')).offset().top
	        		}, 1200,'easeInOutExpo');
		        	
	        		event.preventDefault();
	    		});


		});

})( jQuery );
