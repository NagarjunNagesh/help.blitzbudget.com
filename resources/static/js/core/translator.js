"use strict";
// Translate page
translatePage(getLanguage());

function translatePage(locale) {
    fetch('/i18n/' + locale + '.json')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    // Add to a cache
                    window.translationData = data;
                    replaceText(data);
                    // Replace all anchor tage in home page
                    replaceAnchors();
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function getLanguage() {
    let languagespreferred = ["en", "es", "fr", "ja", "pt", "ru", "zh"];
    let lang = navigator.languages ? navigator.languages[0] : navigator.language;
    lang = lang.substr(0, 2);
    lang = includesStr(languagespreferred, lang) ? lang : "en";
    window.currentLanguage = lang;
    return lang;
}

function replaceText(translation) {
    let elements = document.querySelectorAll("[data-i18n]");
    for (let i = 0, len = elements.length; i < len; i++) {
        let el = elements[i];
        let keys = el.dataset.i18n.split(".");
        let text = keys.reduce((obj, i) => obj[i], translation);
        if (isNotEmpty(text)) {
            el.textContent = text;
        }
    }
}

// Replace anchors
function replaceAnchors() {
    let elements = document.querySelectorAll("[data-href-i18n]");
    for (let i = 0, len = elements.length; i < len; i++) {
        let el = elements[i];
        let keys = el.dataset.hrefI18n.split(".");
        let text = keys.reduce((obj, i) => obj[i], window.translationData);
        if (isNotEmpty(text)) {
            el.href = text;
        }
    }
}
