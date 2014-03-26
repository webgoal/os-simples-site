var scrolledToBottom = false
var focusOnNome = false
var keyboardPressedForNome = false
var focusOnEmail = false
var keyboardPressedForEmail = false

$(function() {
	mixpanel.track("access_page", { "page": "home" })

	$('#btn-one').on('click', function() {
		mixpanel.track("click", { "botao": "topo" })
	})

	$('#nome').on('focus', function() {
		if (!focusOnNome) {
			mixpanel.track("focus", { "nome": true })
			focusOnNome = true
		}
	})
	$('#nome').on('keydown', function() {
		if (!keyboardPressedForNome) {
			mixpanel.track("keydown", { "nome": true })
			keyboardPressedForNome = true
		}
	})

	$('#email').on('focus', function() {
		if (!focusOnEmail) {
			mixpanel.track("focus", { "email": true })
			focusOnEmail = true
		}
	})
	$('#email').on('keydown', function() {
		if (!keyboardPressedForEmail) {
			mixpanel.track("keydown", { "email": true })
			keyboardPressedForEmail = true
		}
	})

	$('#btn-two').click(function() {
		mixpanel.track("click", { "botao": "meio" })
	})
	$('#btn-submit').on('click', function() {
		mixpanel.track("submit", {
			"form": "cadastro"
		}, function() {
			$('form').submit()
		})
	})
	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			if (!scrolledToBottom) {
				mixpanel.track("view", { "form": "cadastro" })
				scrolledToBottom = true
			}
		}
	})
})
