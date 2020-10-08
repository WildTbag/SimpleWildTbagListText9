// ==UserScript==
// @name                TEN Search Links
// @namespace           https://github.com/WildTbag/SimpleWildTbagListText9/blob/master/TEN_Search_Links.USER.JS
// @version             1.4
// @description         Change color of visited links on search sites
// @author              TEN
// @icon                https://github.com/WildTbag/SimpleWildTbagListText9/blob/master/Konsole.png
// @grant               GM_addStyle
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_deleteValue

// @exclude             http*://www.google.com/recaptcha/*
// @exclude             http*://www.startpage.com/*/ads?*
// @include             https://www.google.*/*
// @include             https://www.google.co*.*/*
// @include             https://news.google.*/*
// @include             https://encrypted.google.*/*
// @include             https://startpage.com/*
// @include             https://*.startpage.com/*
// @include             https://duckduckgo.com/*
// @include             https://start.duckduckgo.com/*
// @include             https://safe.duckduckgo.com/*
// @include             https://3g2upl4pq6kufc4m.onion/*
// @include             https://www.bing.com/*
// @include             https://*search.yahoo.com/*
// @include             https://search.yahoo.co.jp/*
// @include             https://www.yandex.com/*
// @include             https://yandex.com/*
// @include             https://searx.*/*
// @include             https://www.qwant.com/*
// @include             https://www.qwantjunior.com/*
// @include             https://www.baidu.com/*
// @include             https://www.ecosia.org/search*

// ==/UserScript==

(function() {
'use strict';

// Visited Link Color change to DeepSkyBlue
GM_addStyle('a:visited {color:DeepSkyBlue !important;}');
GM_addStyle('.mblink:visited, a:visited {color:DeepSkyBlue !important;}');

})
();
