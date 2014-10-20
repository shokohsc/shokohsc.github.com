var option = {
//	lng: 'fr',
	resGetPath: 'public/locales/__lng__/__ns__.json'
};

i18n.init(option, function(t) {
	// translate nav
	$(document).i18n();
});