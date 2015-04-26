var option = {
    resGetPath: 'public/locales/__lng__/__ns__.json'
};

i18n.init(option, function(t) {
    $(document).i18n();
});
