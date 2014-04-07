var scrolledToBottom = false
var focusOnNome = false
var keyboardPressedForNome = false
var focusOnEmail = false
var keyboardPressedForEmail = false

$(function() {
	if (window.location.host == "www.ossimples.com.br") {
		mixpanel.track("Acesso a Home")
		mixpanel.set_config({ track_links_timeout:10000 })

		mixpanel.track_links(".cadastre_se", "CallToAction do menu")
		mixpanel.track_forms("#cadastro", "Envio do formulário")

		$('#btn-one').on('click', function() {
			mixpanel.track("CallToAction do topo")
		})
		$('#btn-two').click(function() {
			mixpanel.track("CallToAction do meio")
		})

		$('#nome').on('focus', function() {
			if (!focusOnNome) {
				mixpanel.track("Foco no nome")
				focusOnNome = true
			}
		})

		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() == $(document).height()) {
				if (!scrolledToBottom) {
					mixpanel.track("Visualizou o formulário")
					scrolledToBottom = true
				}
			}
		})

		$('#cadastro').submit(function() {
			var email = $('#cadastro #email').val()
			var name = $('#cadastro #name').val()
			var phone = $('#cadastro #phone').val()
			mixpanel.identify(email)
			mixpanel.people.set({
				"$first_name": name,
				"$created": new Date(),
				"$email": email,
				"$phone": phone
			})
		})
	} else {
		alert("Ops! Mixpanel só funciona em produção!")
	}
})
