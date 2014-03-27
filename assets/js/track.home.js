var scrolledToBottom = false
var focusOnNome = false
var keyboardPressedForNome = false
var focusOnEmail = false
var keyboardPressedForEmail = false

$(function() {
	if (window.location.host == "www.ossimples.com.br") {
		mixpanel.track("Acesso a Home")
		mixpanel.set_config({ track_links_timeout:10000 })

		mixpanel.track_links(".como_funciona", "Link para Como Funciona")
		mixpanel.track_links(".funcionalidades", "Link para Funcionalidades")
		mixpanel.track_links(".cadastre_se", "Link para o Formuário")
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
		$('#nome').on('keydown', function() {
			if (!keyboardPressedForNome) {
				mixpanel.track("Escreveu o nome")
				keyboardPressedForNome = true
			}
		})

		$('#email').on('focus', function() {
			if (!focusOnEmail) {
				mixpanel.track("Foco no Email")
				focusOnEmail = true
			}
		})
		$('#email').on('keydown', function() {
			if (!keyboardPressedForEmail) {
				mixpanel.track("Escreveu o email")
				keyboardPressedForEmail = true
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
	}
})
