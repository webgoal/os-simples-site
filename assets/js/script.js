(function($) {

		function getWindowSize() {
			windowHeight = $(window).height();
			windowWidth = $(window).width();

		}

		var windowHeight = 0;

		
		$(document).ready(function(){
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

			$('form').on('submit', function() {
	    		mixpanel.track("submit", {
			  		"form": "cadastro"
				}, function() {
					return true
				});
			});			
		});

})( jQuery );
