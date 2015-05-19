var fxcm = fxcm || {};
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-multiplebgs-opacity-rgba-textshadow-cssanimations-generatedcontent-cssgradients-csstransforms-csstransforms3d-csstransitions-canvas-history-audio-video-input-inputtypes-geolocation-touch-shiv-mq-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(n.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),G(e,b,c))}function I(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)t[c[d]]=c[d]in k;return t.list&&(t.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return x("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:x(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},r.geolocation=function(){return"geolocation"in navigator},r.history=function(){return!!a.history&&!!history.pushState},r.rgba=function(){return B("background-color:rgba(150,255,150,.5)"),E(j.backgroundColor,"rgba")},r.multiplebgs=function(){return B("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},r.backgroundsize=function(){return H("backgroundSize")},r.borderimage=function(){return H("borderImage")},r.borderradius=function(){return H("borderRadius")},r.boxshadow=function(){return H("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){return C("opacity:.55"),/^0.55$/.test(j.opacity)},r.cssanimations=function(){return H("animationName")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return B((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),E(j.backgroundImage,"gradient")},r.csstransforms=function(){return!!H("transform")},r.csstransforms3d=function(){var a=!!H("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return H("transition")},r.fontface=function(){var a;return x('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},r.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c};for(var J in r)A(r,J)&&(w=J.toLowerCase(),e[w]=r[J](),u.push((e[w]?"":"no-")+w));return e.input||I(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function() {
    "use strict";

    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = (window.styleMedia || window.media);

    // For those that don't support matchMedium
    if (!styleMedia) {
        var style       = document.createElement('style'),
            script      = document.getElementsByTagName('script')[0],
            info        = null;

        style.type  = 'text/css';
        style.id    = 'matchmediajs-test';

        script.parentNode.insertBefore(style, script);

        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
        info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

        styleMedia = {
            matchMedium: function(media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }

                // Test if media query is true or false
                return info.width === '1px';
            }
        };
    }

    return function(media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    };
}());


/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function(){
    // Bail out for browsers that have addListener support
    if (window.matchMedia && window.matchMedia('all').addListener) {
        return false;
    }

    var localMatchMedia = window.matchMedia,
        hasMediaQueries = localMatchMedia('only all').matches,
        isListening     = false,
        timeoutID       = 0,    // setTimeout for debouncing 'handleChange'
        queries         = [],   // Contains each 'mql' and associated 'listeners' if 'addListener' is used
        handleChange    = function(evt) {
            // Debounce
            clearTimeout(timeoutID);

            timeoutID = setTimeout(function() {
                for (var i = 0, il = queries.length; i < il; i++) {
                    var mql         = queries[i].mql,
                        listeners   = queries[i].listeners || [],
                        matches     = localMatchMedia(mql.media).matches;

                    // Update mql.matches value and call listeners
                    // Fire listeners only if transitioning to or from matched state
                    if (matches !== mql.matches) {
                        mql.matches = matches;

                        for (var j = 0, jl = listeners.length; j < jl; j++) {
                            listeners[j].call(window, mql);
                        }
                    }
                }
            }, 30);
        };

    window.matchMedia = function(media) {
        var mql         = localMatchMedia(media),
            listeners   = [],
            index       = 0;

        mql.addListener = function(listener) {
            // Changes would not occur to css media type so return now (Affects IE <= 8)
            if (!hasMediaQueries) {
                return;
            }

            // Set up 'resize' listener for browsers that support CSS3 media queries (Not for IE <= 8)
            // There should only ever be 1 resize listener running for performance
            if (!isListening) {
                isListening = true;
                window.addEventListener('resize', handleChange, true);
            }

            // Push object only if it has not been pushed already
            if (index === 0) {
                index = queries.push({
                    mql         : mql,
                    listeners   : listeners
                });
            }

            listeners.push(listener);
        };

        mql.removeListener = function(listener) {
            for (var i = 0, il = listeners.length; i < il; i++){
                if (listeners[i] === listener){
                    listeners.splice(i, 1);
                }
            }
        };

        return mql;
    };
}());

/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});
/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
    return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/* Douglas Crockford's json2.js, 2/23/11 Snapshot (minified via closure simple optimization)
Duck-punches the JSON global and toJSON functions into existence
Falls back to native implementations where available */
var JSON;JSON||(JSON={}); (function(){function k(a){return a<10?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function l(a,j){var c,d,h,m,g=e,f,b=j[a];b&&typeof b==="object"&&typeof b.toJSON==="function"&&(b=b.toJSON(a));typeof i==="function"&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);case "object":if(!b)return"null"; e+=n;f=[];if(Object.prototype.toString.apply(b)==="[object Array]"){m=b.length;for(c=0;c<m;c+=1)f[c]=l(c,b)||"null";h=f.length===0?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&typeof i==="object"){m=i.length;for(c=0;c<m;c+=1)typeof i[c]==="string"&&(d=i[c],(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h);h=f.length===0?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+ "}";e=g;return h}}if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,j,c){var d;n=e="";if(typeof c==="number")for(d=0;d<c;d+=1)n+=" ";else typeof c==="string"&&(n=c);if((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return l("", {"":a})};if(typeof JSON.parse!=="function")JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&typeof b==="object")for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),f!==void 0?b[g]=f:delete b[g]);return e.call(a,d,b)}var d,a=String(a);q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),typeof e==="function"?c({"":d},""):d;throw new SyntaxError("JSON.parse");}})();
/*!
 * Amplify Core 1.1.2
 *
 * Copyright 2011 - 2013 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 *
 * http://amplifyjs.com
 */
(function(e,t){var n=[].slice,r={},i=e.amplify={publish:function(e){if(typeof e!="string")throw new Error("You must provide a valid topic to publish.");var t=n.call(arguments,1),i,s,o,u=0,a;if(!r[e])return!0;i=r[e].slice();for(o=i.length;u<o;u++){s=i[u],a=s.callback.apply(s.context,t);if(a===!1)break}return a!==!1},subscribe:function(e,t,n,i){if(typeof e!="string")throw new Error("You must provide a valid topic to create a subscription.");arguments.length===3&&typeof n=="number"&&(i=n,n=t,t=null),arguments.length===2&&(n=t,t=null),i=i||10;var s=0,o=e.split(/\s/),u=o.length,a;for(;s<u;s++){e=o[s],a=!1,r[e]||(r[e]=[]);var f=r[e].length-1,l={callback:n,context:t,priority:i};for(;f>=0;f--)if(r[e][f].priority<=i){r[e].splice(f+1,0,l),a=!0;break}a||r[e].unshift(l)}return n},unsubscribe:function(e,t,n){if(typeof e!="string")throw new Error("You must provide a valid topic to remove a subscription.");arguments.length===2&&(n=t,t=null);if(!r[e])return;var i=r[e].length,s=0;for(;s<i;s++)r[e][s].callback===n&&(!t||r[e][s].context===t)&&(r[e].splice(s,1),s--,i--)}}})(this)
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
var Handlebars = (function() {
// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/utils.js
var __module3__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var SafeString = __dependency1__;

  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr] || "&amp;";
  }

  function extend(obj, value) {
    for(var key in value) {
      if(Object.prototype.hasOwnProperty.call(value, key)) {
        obj[key] = value[key];
      }
    }
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;

  function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
      return string.toString();
    } else if (!string && string !== 0) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;
  return __exports__;
})(__module4__);

// handlebars/exception.js
var __module5__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var line;
    if (node && node.firstLine) {
      line = node.firstLine;

      message += ' - ' + line + ':' + node.firstColumn;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (line) {
      this.lineNumber = line;
      this.column = node.firstColumn;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module2__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "1.3.0";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 4;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '>= 1.0.0'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn, inverse) {
      if (toString.call(name) === objectType) {
        if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        if (inverse) { fn.not = inverse; }
        this.helpers[name] = fn;
      }
    },

    registerPartial: function(name, str) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        this.partials[name] = str;
      }
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(arg) {
      if(arguments.length === 2) {
        return undefined;
      } else {
        throw new Exception("Missing helper: '" + arg + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse || function() {}, fn = options.fn;

      if (isFunction(context)) { context = context.call(this); }

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        return fn(context);
      }
    });

    instance.registerHelper('each', function(context, options) {
      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            if (data) {
              data.index = i;
              data.first = (i === 0);
              data.last  = (i === (context.length-1));
            }
            ret = ret + fn(context[i], { data: data });
          }
        } else {
          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              if(data) { 
                data.key = key; 
                data.index = i;
                data.first = (i === 0);
              }
              ret = ret + fn(context[key], {data: data});
              i++;
            }
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      if (!Utils.isEmpty(context)) return options.fn(context);
    });

    instance.registerHelper('log', function(context, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, context);
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,

    // can be overridden in the host environment
    log: function(level, obj) {
      if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
          console[method].call(console, obj);
        }
      }
    }
  };
  __exports__.logger = logger;
  function log(level, obj) { logger.log(level, obj); }

  __exports__.log = log;var createFrame = function(object) {
    var obj = {};
    Utils.extend(obj, object);
    return obj;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module3__, __module5__);

// handlebars/runtime.js
var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    if (!env) {
      throw new Exception("No environment passed to template");
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
      var result = env.VM.invokePartial.apply(this, arguments);
      if (result != null) { return result; }

      if (env.compile) {
        var options = { helpers: helpers, partials: partials, data: data };
        partials[name] = env.compile(partial, { data: data !== undefined }, env);
        return partials[name](context, options);
      } else {
        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = {};
          Utils.extend(ret, common);
          Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: env.VM.programWithDepth,
      noop: env.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var namespace = options.partial ? options : env,
          helpers,
          partials;

      if (!options.partial) {
        helpers = options.helpers;
        partials = options.partials;
      }
      var result = templateSpec.call(
            container,
            namespace, context,
            helpers,
            partials,
            options.data);

      if (!options.partial) {
        env.VM.checkRevision(container.compilerInfo);
      }

      return result;
    };
  }

  __exports__.template = template;function programWithDepth(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var prog = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    prog.program = i;
    prog.depth = args.length;
    return prog;
  }

  __exports__.programWithDepth = programWithDepth;function program(i, fn, data) {
    var prog = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    prog.program = i;
    prog.depth = 0;
    return prog;
  }

  __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
    var options = { partial: true, helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;
  return __exports__;
})(__module3__, __module5__, __module2__);

// handlebars.runtime.js
var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
var __module7__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var Exception = __dependency1__;

  function LocationInfo(locInfo){
    locInfo = locInfo || {};
    this.firstLine   = locInfo.first_line;
    this.firstColumn = locInfo.first_column;
    this.lastColumn  = locInfo.last_column;
    this.lastLine    = locInfo.last_line;
  }

  var AST = {
    ProgramNode: function(statements, inverseStrip, inverse, locInfo) {
      var inverseLocationInfo, firstInverseNode;
      if (arguments.length === 3) {
        locInfo = inverse;
        inverse = null;
      } else if (arguments.length === 2) {
        locInfo = inverseStrip;
        inverseStrip = null;
      }

      LocationInfo.call(this, locInfo);
      this.type = "program";
      this.statements = statements;
      this.strip = {};

      if(inverse) {
        firstInverseNode = inverse[0];
        if (firstInverseNode) {
          inverseLocationInfo = {
            first_line: firstInverseNode.firstLine,
            last_line: firstInverseNode.lastLine,
            last_column: firstInverseNode.lastColumn,
            first_column: firstInverseNode.firstColumn
          };
          this.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo);
        } else {
          this.inverse = new AST.ProgramNode(inverse, inverseStrip);
        }
        this.strip.right = inverseStrip.left;
      } else if (inverseStrip) {
        this.strip.left = inverseStrip.right;
      }
    },

    MustacheNode: function(rawParams, hash, open, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "mustache";
      this.strip = strip;

      // Open may be a string parsed from the parser or a passed boolean flag
      if (open != null && open.charAt) {
        // Must use charAt to support IE pre-10
        var escapeFlag = open.charAt(3) || open.charAt(2);
        this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
      } else {
        this.escaped = !!open;
      }

      if (rawParams instanceof AST.SexprNode) {
        this.sexpr = rawParams;
      } else {
        // Support old AST API
        this.sexpr = new AST.SexprNode(rawParams, hash);
      }

      this.sexpr.isRoot = true;

      // Support old AST API that stored this info in MustacheNode
      this.id = this.sexpr.id;
      this.params = this.sexpr.params;
      this.hash = this.sexpr.hash;
      this.eligibleHelper = this.sexpr.eligibleHelper;
      this.isHelper = this.sexpr.isHelper;
    },

    SexprNode: function(rawParams, hash, locInfo) {
      LocationInfo.call(this, locInfo);

      this.type = "sexpr";
      this.hash = hash;

      var id = this.id = rawParams[0];
      var params = this.params = rawParams.slice(1);

      // a mustache is an eligible helper if:
      // * its id is simple (a single part, not `this` or `..`)
      var eligibleHelper = this.eligibleHelper = id.isSimple;

      // a mustache is definitely a helper if:
      // * it is an eligible helper, and
      // * it has at least one parameter or hash segment
      this.isHelper = eligibleHelper && (params.length || hash);

      // if a mustache is an eligible helper but not a definite
      // helper, it is ambiguous, and will be resolved in a later
      // pass or at runtime.
    },

    PartialNode: function(partialName, context, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type         = "partial";
      this.partialName  = partialName;
      this.context      = context;
      this.strip = strip;
    },

    BlockNode: function(mustache, program, inverse, close, locInfo) {
      LocationInfo.call(this, locInfo);

      if(mustache.sexpr.id.original !== close.path.original) {
        throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, this);
      }

      this.type = 'block';
      this.mustache = mustache;
      this.program  = program;
      this.inverse  = inverse;

      this.strip = {
        left: mustache.strip.left,
        right: close.strip.right
      };

      (program || inverse).strip.left = mustache.strip.right;
      (inverse || program).strip.right = close.strip.left;

      if (inverse && !program) {
        this.isInverse = true;
      }
    },

    ContentNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "content";
      this.string = string;
    },

    HashNode: function(pairs, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "hash";
      this.pairs = pairs;
    },

    IdNode: function(parts, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "ID";

      var original = "",
          dig = [],
          depth = 0;

      for(var i=0,l=parts.length; i<l; i++) {
        var part = parts[i].part;
        original += (parts[i].separator || '') + part;

        if (part === ".." || part === "." || part === "this") {
          if (dig.length > 0) {
            throw new Exception("Invalid path: " + original, this);
          } else if (part === "..") {
            depth++;
          } else {
            this.isScoped = true;
          }
        } else {
          dig.push(part);
        }
      }

      this.original = original;
      this.parts    = dig;
      this.string   = dig.join('.');
      this.depth    = depth;

      // an ID is simple if it only has one part, and that part is not
      // `..` or `this`.
      this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

      this.stringModeValue = this.string;
    },

    PartialNameNode: function(name, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "PARTIAL_NAME";
      this.name = name.original;
    },

    DataNode: function(id, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "DATA";
      this.id = id;
    },

    StringNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "STRING";
      this.original =
        this.string =
        this.stringModeValue = string;
    },

    IntegerNode: function(integer, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "INTEGER";
      this.original =
        this.integer = integer;
      this.stringModeValue = Number(integer);
    },

    BooleanNode: function(bool, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "BOOLEAN";
      this.bool = bool;
      this.stringModeValue = bool === "true";
    },

    CommentNode: function(comment, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "comment";
      this.comment = comment;
    }
  };

  // Must be exported as an object rather than the root of the module as the jison lexer
  // most modify the object to operate properly.
  __exports__ = AST;
  return __exports__;
})(__module5__);

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* jshint ignore:start */
  /* Jison generated parser */
  var handlebars = (function(){
  var parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"program":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"sexpr":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"partial_option0":27,"sexpr_repetition0":28,"sexpr_option0":29,"dataName":30,"param":31,"STRING":32,"INTEGER":33,"BOOLEAN":34,"OPEN_SEXPR":35,"CLOSE_SEXPR":36,"hash":37,"hash_repetition_plus0":38,"hashSegment":39,"ID":40,"EQUALS":41,"DATA":42,"pathSegments":43,"SEP":44,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},
  productions_: [0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],
  performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: return new yy.ProgramNode($$[$0-1], this._$); 
  break;
  case 2: return new yy.ProgramNode([], this._$); 
  break;
  case 3:this.$ = new yy.ProgramNode([], $$[$0-1], $$[$0], this._$);
  break;
  case 4:this.$ = new yy.ProgramNode($$[$0-2], $$[$0-1], $$[$0], this._$);
  break;
  case 5:this.$ = new yy.ProgramNode($$[$0-1], $$[$0], [], this._$);
  break;
  case 6:this.$ = new yy.ProgramNode($$[$0], this._$);
  break;
  case 7:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 8:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 9:this.$ = [$$[$0]];
  break;
  case 10: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
  break;
  case 11:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0], this._$);
  break;
  case 12:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0], this._$);
  break;
  case 13:this.$ = $$[$0];
  break;
  case 14:this.$ = $$[$0];
  break;
  case 15:this.$ = new yy.ContentNode($$[$0], this._$);
  break;
  case 16:this.$ = new yy.CommentNode($$[$0], this._$);
  break;
  case 17:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 18:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 19:this.$ = {path: $$[$0-1], strip: stripFlags($$[$0-2], $$[$0])};
  break;
  case 20:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 21:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 22:this.$ = new yy.PartialNode($$[$0-2], $$[$0-1], stripFlags($$[$0-3], $$[$0]), this._$);
  break;
  case 23:this.$ = stripFlags($$[$0-1], $$[$0]);
  break;
  case 24:this.$ = new yy.SexprNode([$$[$0-2]].concat($$[$0-1]), $$[$0], this._$);
  break;
  case 25:this.$ = new yy.SexprNode([$$[$0]], null, this._$);
  break;
  case 26:this.$ = $$[$0];
  break;
  case 27:this.$ = new yy.StringNode($$[$0], this._$);
  break;
  case 28:this.$ = new yy.IntegerNode($$[$0], this._$);
  break;
  case 29:this.$ = new yy.BooleanNode($$[$0], this._$);
  break;
  case 30:this.$ = $$[$0];
  break;
  case 31:$$[$0-1].isHelper = true; this.$ = $$[$0-1];
  break;
  case 32:this.$ = new yy.HashNode($$[$0], this._$);
  break;
  case 33:this.$ = [$$[$0-2], $$[$0]];
  break;
  case 34:this.$ = new yy.PartialNameNode($$[$0], this._$);
  break;
  case 35:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
  break;
  case 36:this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0], this._$));
  break;
  case 37:this.$ = new yy.DataNode($$[$0], this._$);
  break;
  case 38:this.$ = new yy.IdNode($$[$0], this._$);
  break;
  case 39: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
  break;
  case 40:this.$ = [{part: $$[$0]}];
  break;
  case 43:this.$ = [];
  break;
  case 44:$$[$0-1].push($$[$0]);
  break;
  case 47:this.$ = [$$[$0]];
  break;
  case 48:$$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],
  defaultActions: {3:[2,2],16:[2,1],50:[2,42]},
  parseError: function parseError(str, hash) {
      throw new Error(str);
  },
  parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
              token = self.symbols_[token] || token;
          }
          return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                  expected = [];
                  for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                          expected.push("'" + this.terminals_[p] + "'");
                      }
                  if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
              }
          }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0)
                      recovering--;
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
              if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }
  };


  function stripFlags(open, close) {
    return {
      left: open.charAt(2) === '~',
      right: close.charAt(0) === '~' || close.charAt(1) === '~'
    };
  }

  /* Jison generated lexer */
  var lexer = (function(){
  var lexer = ({EOF:1,
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  setInput:function (input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
          if (this.options.ranges) this.yylloc.range = [0,0];
          this.offset = 0;
          return this;
      },
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) this.yylloc.range[1]++;

          this._input = this._input.slice(1);
          return ch;
      },
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length-1);
          this.matched = this.matched.substr(0, this.matched.length-1);

          if (lines.length-1) this.yylineno -= lines.length-1;
          var r = this.yylloc.range;

          this.yylloc = {first_line: this.yylloc.first_line,
            last_line: this.yylineno+1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                this.yylloc.first_column - len
            };

          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
      },
  more:function () {
          this._more = true;
          return this;
      },
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
      },
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c+"^";
      },
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) this.done = true;

          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i=0;i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
              }
          }
          if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {first_line: this.yylloc.last_line,
                             last_line: this.yylineno+1,
                             first_column: this.yylloc.last_column,
                             last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                      {text: "", token: null, line: this.yylineno});
          }
      },
  lex:function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
              return r;
          } else {
              return this.lex();
          }
      },
  begin:function begin(condition) {
          this.conditionStack.push(condition);
      },
  popState:function popState() {
          return this.conditionStack.pop();
      },
  _currentRules:function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
      },
  topState:function () {
          return this.conditionStack[this.conditionStack.length-2];
      },
  pushState:function begin(condition) {
          this.begin(condition);
      }});
  lexer.options = {};
  lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  function strip(start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
  }


  var YYSTATE=YY_START;
  switch($avoiding_name_collisions) {
  case 0:
                                     if(yy_.yytext.slice(-2) === "\\\\") {
                                       strip(0,1);
                                       this.begin("mu");
                                     } else if(yy_.yytext.slice(-1) === "\\") {
                                       strip(0,1);
                                       this.begin("emu");
                                     } else {
                                       this.begin("mu");
                                     }
                                     if(yy_.yytext) return 14;
                                   
  break;
  case 1:return 14;
  break;
  case 2:
                                     this.popState();
                                     return 14;
                                   
  break;
  case 3:strip(0,4); this.popState(); return 15;
  break;
  case 4:return 35;
  break;
  case 5:return 36;
  break;
  case 6:return 25;
  break;
  case 7:return 16;
  break;
  case 8:return 20;
  break;
  case 9:return 19;
  break;
  case 10:return 19;
  break;
  case 11:return 23;
  break;
  case 12:return 22;
  break;
  case 13:this.popState(); this.begin('com');
  break;
  case 14:strip(3,5); this.popState(); return 15;
  break;
  case 15:return 22;
  break;
  case 16:return 41;
  break;
  case 17:return 40;
  break;
  case 18:return 40;
  break;
  case 19:return 44;
  break;
  case 20:// ignore whitespace
  break;
  case 21:this.popState(); return 24;
  break;
  case 22:this.popState(); return 18;
  break;
  case 23:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 32;
  break;
  case 24:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 32;
  break;
  case 25:return 42;
  break;
  case 26:return 34;
  break;
  case 27:return 34;
  break;
  case 28:return 33;
  break;
  case 29:return 40;
  break;
  case 30:yy_.yytext = strip(1,2); return 40;
  break;
  case 31:return 'INVALID';
  break;
  case 32:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[3],"inclusive":false},"INITIAL":{"rules":[0,1,32],"inclusive":true}};
  return lexer;})()
  parser.lexer = lexer;
  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  /* jshint ignore:end */
  return __exports__;
})();

// handlebars/compiler/base.js
var __module8__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var parser = __dependency1__;
  var AST = __dependency2__;

  __exports__.parser = parser;

  function parse(input) {
    // Just return if an already-compile AST was passed in.
    if(input.constructor === AST.ProgramNode) { return input; }

    parser.yy = AST;
    return parser.parse(input);
  }

  __exports__.parse = parse;
  return __exports__;
})(__module9__, __module7__);

// handlebars/compiler/compiler.js
var __module10__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;

  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, out = [], params, param;

      for (var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if (opcode.opcode === 'DECLARE') {
          out.push("DECLARE " + opcode.name + "=" + opcode.value);
        } else {
          params = [];
          for (var j=0; j<opcode.args.length; j++) {
            param = opcode.args[j];
            if (typeof param === "string") {
              param = "\"" + param.replace("\n", "\\n") + "\"";
            }
            params.push(param);
          }
          out.push(opcode.opcode + " " + params.join(" "));
        }
      }

      return out.join("\n");
    },

    equals: function(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
          return false;
        }
        for (var j = 0; j < opcode.args.length; j++) {
          if (opcode.args[j] !== otherOpcode.args[j]) {
            return false;
          }
        }
      }

      len = this.children.length;
      if (other.children.length !== len) {
        return false;
      }
      for (i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.opcodes = [];
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.accept(program);
    },

    accept: function(node) {
      var strip = node.strip || {},
          ret;
      if (strip.left) {
        this.opcode('strip');
      }

      ret = this[node.type](node);

      if (strip.right) {
        this.opcode('strip');
      }

      return ret;
    },

    program: function(program) {
      var statements = program.statements;

      for(var i=0, l=statements.length; i<l; i++) {
        this.accept(statements[i]);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var sexpr = mustache.sexpr;
      var type = this.classifySexpr(sexpr);

      if (type === "helper") {
        this.helperSexpr(sexpr, program, inverse);
      } else if (type === "simple") {
        this.simpleSexpr(sexpr);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue');
      } else {
        this.ambiguousSexpr(sexpr, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('pushHash');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        if (this.options.stringParams) {
          if(val.depth) {
            this.addDepth(val.depth);
          }
          this.opcode('getContext', val.depth || 0);
          this.opcode('pushStringParam', val.stringModeValue, val.type);

          if (val.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(val);
          }
        } else {
          this.accept(val);
        }

        this.opcode('assignToHash', pair[0]);
      }
      this.opcode('popHash');
    },

    partial: function(partial) {
      var partialName = partial.partialName;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', partialName.name);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      this.sexpr(mustache.sexpr);

      if(mustache.escaped && !this.options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousSexpr: function(sexpr, program, inverse) {
      var id = sexpr.id,
          name = id.parts[0],
          isBlock = program != null || inverse != null;

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.opcode('invokeAmbiguous', name, isBlock);
    },

    simpleSexpr: function(sexpr) {
      var id = sexpr.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperSexpr: function(sexpr, program, inverse) {
      var params = this.setupFullMustacheParams(sexpr, program, inverse),
          name = sexpr.id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
      } else {
        this.opcode('invokeHelper', params.length, name, sexpr.isRoot);
      }
    },

    sexpr: function(sexpr) {
      var type = this.classifySexpr(sexpr);

      if (type === "simple") {
        this.simpleSexpr(sexpr);
      } else if (type === "helper") {
        this.helperSexpr(sexpr);
      } else {
        this.ambiguousSexpr(sexpr);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts[0]);
      }

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      if (data.id.isScoped || data.id.depth) {
        throw new Exception('Scoped data references are not supported: ' + data.original, data);
      }

      this.opcode('lookupData');
      var parts = data.id.parts;
      for(var i=0, l=parts.length; i<l; i++) {
        this.opcode('lookup', parts[i]);
      }
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('pushLiteral', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
    },

    declare: function(name, value) {
      this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
    },

    addDepth: function(depth) {
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifySexpr: function(sexpr) {
      var isHelper   = sexpr.isHelper;
      var isEligible = sexpr.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      if (isEligible && !isHelper) {
        var name = sexpr.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.stringModeValue, param.type);

          if (param.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(param);
          }
        } else {
          this[param.type](param);
        }
      }
    },

    setupFullMustacheParams: function(sexpr, program, inverse) {
      var params = sexpr.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if (sexpr.hash) {
        this.hash(sexpr.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    }
  };

  function precompile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    }

    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }

    var ast = env.parse(input);
    var environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
  }

  __exports__.precompile = precompile;function compile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    }

    options = options || {};

    if (!('data' in options)) {
      options.data = true;
    }

    var compiled;

    function compileInput() {
      var ast = env.parse(input);
      var environment = new env.Compiler().compile(ast, options);
      var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }

    // Template is only compiled on first use and cached after that point.
    return function(context, options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, options);
    };
  }

  __exports__.compile = compile;
  return __exports__;
})(__module5__);

// handlebars/compiler/javascript-compiler.js
var __module11__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__;
  var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
  var log = __dependency1__.log;
  var Exception = __dependency2__;

  function Literal(value) {
    this.value = value;
  }

  function JavaScriptCompiler() {}

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name /* , type*/) {
      var wrap,
          ret;
      if (parent.indexOf('depth') === 0) {
        wrap = true;
      }

      if (/^[0-9]+$/.test(name)) {
        ret = parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        ret = parent + "." + name;
      }
      else {
        ret = parent + "['" + name + "']";
      }

      if (wrap) {
        return '(' + parent + ' && ' + ret + ')';
      } else {
        return ret;
      }
    },

    compilerInfo: function() {
      var revision = COMPILER_REVISION,
          versions = REVISION_CHANGES[revision];
      return "this.compilerInfo = ["+revision+",'"+versions+"'];\n";
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return {
          appendToBuffer: true,
          content: string,
          toString: function() { return "buffer += " + string + ";"; }
        };
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      log('debug', this.environment.disassemble() + "\n\n");

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        environments: [],
        aliases: { }
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = { list: [] };
      this.hashes = [];
      this.compileStack = [];
      this.inlineStack = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(var l=opcodes.length; this.i<l; this.i++) {
        opcode = opcodes[this.i];

        if(opcode.opcode === 'DECLARE') {
          this[opcode.name] = opcode.value;
        } else {
          this[opcode.opcode].apply(this, opcode.args);
        }

        // Reset the stripNext flag if it was not set by this operation.
        if (opcode.opcode !== this.stripNext) {
          this.stripNext = false;
        }
      }

      // Flush any trailing content that might be pending.
      this.pushSource('');

      if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
        throw new Exception('Compile completed with content left on stack');
      }

      return this.createFunctionContext(asObject);
    },

    preamble: function() {
      var out = [];

      if (!this.isChild) {
        var namespace = this.namespace;

        var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
        if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
        if (this.options.data) { copies = copies + " data = data || {};"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        for (var alias in this.context.aliases) {
          if (this.context.aliases.hasOwnProperty(alias)) {
            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
          }
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.pushSource("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      // Perform a second pass over the output to merge content when possible
      var source = this.mergeSource();

      if (!this.isChild) {
        source = this.compilerInfo()+source;
      }

      if (asObject) {
        params.push(source);

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
        log('debug', functionSource + "\n\n");
        return functionSource;
      }
    },
    mergeSource: function() {
      // WARN: We are not handling the case where buffer is still populated as the source should
      // not have buffer append operations as their final action.
      var source = '',
          buffer;
      for (var i = 0, len = this.source.length; i < len; i++) {
        var line = this.source[i];
        if (line.appendToBuffer) {
          if (buffer) {
            buffer = buffer + '\n    + ' + line.content;
          } else {
            buffer = line.content;
          }
        } else {
          if (buffer) {
            source += 'buffer += ' + buffer + ';\n  ';
            buffer = undefined;
          }
          source += line + '\n  ';
        }
      }
      return source;
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      this.replaceStack(function(current) {
        params.splice(1, 0, current);
        return "blockHelperMissing.call(" + params.join(", ") + ")";
      });
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      var current = this.topStack();
      params.splice(1, 0, current);

      this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      }
      if (this.stripNext) {
        content = content.replace(/^\s+/, '');
      }

      this.pendingContent = content;
    },

    // [strip]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Removes any trailing whitespace from the prior content node and flags
    // the next operation for stripping if it is a content node.
    strip: function() {
      if (this.pendingContent) {
        this.pendingContent = this.pendingContent.replace(/\s+$/, '');
      }
      this.stripNext = 'strip';
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      // Force anything that is inlined onto the stack so we don't have duplication
      // when we examine local
      this.flushInline();
      var local = this.popStack();
      this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.pushSource("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(name) {
      this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral('depth' + this.lastContext);
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.context.aliases.functionType = '"function"';

      this.replaceStack(function(current) {
        return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
      });
    },

    // [lookup]
    //
    // On stack, before: value, ...
    // On stack, after: value[name], ...
    //
    // Replace the value on the stack with the result of looking
    // up `name` on `value`
    lookup: function(name) {
      this.replaceStack(function(current) {
        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
      });
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function() {
      this.pushStackLiteral('data');
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string, type) {
      this.pushStackLiteral('depth' + this.lastContext);

      this.pushString(type);

      // If it's a subexpression, the string result
      // will be pushed after this opcode.
      if (type !== 'sexpr') {
        if (typeof string === 'string') {
          this.pushString(string);
        } else {
          this.pushStackLiteral(string);
        }
      }
    },

    emptyHash: function() {
      this.pushStackLiteral('{}');

      if (this.options.stringParams) {
        this.push('{}'); // hashContexts
        this.push('{}'); // hashTypes
      }
    },
    pushHash: function() {
      if (this.hash) {
        this.hashes.push(this.hash);
      }
      this.hash = {values: [], types: [], contexts: []};
    },
    popHash: function() {
      var hash = this.hash;
      this.hash = this.hashes.pop();

      if (this.options.stringParams) {
        this.push('{' + hash.contexts.join(',') + '}');
        this.push('{' + hash.types.join(',') + '}');
      }

      this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.inlineStack.push(expr);
      return expr;
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name, isRoot) {
      this.context.aliases.helperMissing = 'helpers.helperMissing';
      this.useRegister('helper');

      var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

      var lookup = 'helper = ' + helper.name + ' || ' + nonHelper;
      if (helper.paramsInit) {
        lookup += ',' + helper.paramsInit;
      }

      this.push(
        '('
          + lookup
          + ',helper '
            + '? helper.call(' + helper.callParams + ') '
            + ': helperMissing.call(' + helper.helperMissingParams + '))');

      // Always flush subexpressions. This is both to prevent the compounding size issue that
      // occurs when the code has to be duplicated for inlining and also to prevent errors
      // due to the incorrect options object being passed due to the shared register.
      if (!isRoot) {
        this.flushInline();
      }
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name, helperCall) {
      this.context.aliases.functionType = '"function"';
      this.useRegister('helper');

      this.emptyHash();
      var helper = this.setupHelper(0, name, helperCall);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
      var nextStack = this.nextStack();

      if (helper.paramsInit) {
        this.pushSource(helper.paramsInit);
      }
      this.pushSource('if (helper = ' + helperName + ') { ' + nextStack + ' = helper.call(' + helper.callParams + '); }');
      this.pushSource('else { helper = ' + nonHelper + '; ' + nextStack + ' = typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper; }');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.context.aliases.self = "this";
      this.push("self.invokePartial(" + params.join(", ") + ")");
    },

    // [assignToHash]
    //
    // On stack, before: value, hash, ...
    // On stack, after: hash, ...
    //
    // Pops a value and hash off the stack, assigns `hash[key] = value`
    // and pushes the hash back onto the stack.
    assignToHash: function(key) {
      var value = this.popStack(),
          context,
          type;

      if (this.options.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }

      var hash = this.hash;
      if (context) {
        hash.contexts.push("'" + key + "': " + context);
      }
      if (type) {
        hash.types.push("'" + key + "': " + type);
      }
      hash.values.push("'" + key + "': (" + value + ")");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        var index = this.matchExistingProgram(child);

        if (index == null) {
          this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context);
          this.context.environments[index] = child;
        } else {
          child.index = index;
          child.name = 'program' + index;
        }
      }
    },
    matchExistingProgram: function(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },

    programExpression: function(guid) {
      this.context.aliases.self = "this";

      if(guid == null) {
        return "self.noop";
      }

      var child = this.environment.children[guid],
          depths = child.depths.list, depth;

      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
    },

    register: function(name, val) {
      this.useRegister(name);
      this.pushSource(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      return this.push(new Literal(item));
    },

    pushSource: function(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
        this.pendingContent = undefined;
      }

      if (source) {
        this.source.push(source);
      }
    },

    pushStack: function(item) {
      this.flushInline();

      var stack = this.incrStack();
      if (item) {
        this.pushSource(stack + " = " + item + ";");
      }
      this.compileStack.push(stack);
      return stack;
    },

    replaceStack: function(callback) {
      var prefix = '',
          inline = this.isInline(),
          stack,
          createdStack,
          usedLiteral;

      // If we are currently inline then we want to merge the inline statement into the
      // replacement statement via ','
      if (inline) {
        var top = this.popStack(true);

        if (top instanceof Literal) {
          // Literals do not need to be inlined
          stack = top.value;
          usedLiteral = true;
        } else {
          // Get or create the current stack name for use by the inline
          createdStack = !this.stackSlot;
          var name = !createdStack ? this.topStackName() : this.incrStack();

          prefix = '(' + this.push(name) + ' = ' + top + '),';
          stack = this.topStack();
        }
      } else {
        stack = this.topStack();
      }

      var item = callback.call(this, stack);

      if (inline) {
        if (!usedLiteral) {
          this.popStack();
        }
        if (createdStack) {
          this.stackSlot--;
        }
        this.push('(' + prefix + item + ')');
      } else {
        // Prevent modification of the context depth variable. Through replaceStack
        if (!/^stack/.test(stack)) {
          stack = this.nextStack();
        }

        this.pushSource(stack + " = (" + prefix + item + ");");
      }
      return stack;
    },

    nextStack: function() {
      return this.pushStack();
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var inlineStack = this.inlineStack;
      if (inlineStack.length) {
        this.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
          var entry = inlineStack[i];
          if (entry instanceof Literal) {
            this.compileStack.push(entry);
          } else {
            this.pushStack(entry);
          }
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },

    popStack: function(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        if (!inline) {
          if (!this.stackSlot) {
            throw new Exception('Invalid stack pop');
          }
          this.stackSlot--;
        }
        return item;
      }
    },

    topStack: function(wrapped) {
      var stack = (this.isInline() ? this.inlineStack : this.compileStack),
          item = stack[stack.length - 1];

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        return item;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },

    setupHelper: function(paramSize, name, missingParams) {
      var params = [],
          paramsInit = this.setupParams(paramSize, params, missingParams);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        paramsInit: paramsInit,
        name: foundHelper,
        callParams: ["depth0"].concat(params).join(", "),
        helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
      };
    },

    setupOptions: function(paramSize, params) {
      var options = [], contexts = [], types = [], param, inverse, program;

      options.push("hash:" + this.popStack());

      if (this.options.stringParams) {
        options.push("hashTypes:" + this.popStack());
        options.push("hashContexts:" + this.popStack());
      }

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          this.context.aliases.self = "this";
          program = "self.noop";
        }

        if (!inverse) {
          this.context.aliases.self = "this";
          inverse = "self.noop";
        }

        options.push("inverse:" + inverse);
        options.push("fn:" + program);
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          types.push(this.popStack());
          contexts.push(this.popStack());
        }
      }

      if (this.options.stringParams) {
        options.push("contexts:[" + contexts.join(",") + "]");
        options.push("types:[" + types.join(",") + "]");
      }

      if(this.options.data) {
        options.push("data:data");
      }

      return options;
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(paramSize, params, useRegister) {
      var options = '{' + this.setupOptions(paramSize, params).join(',') + '}';

      if (useRegister) {
        this.useRegister('options');
        params.push('options');
        return 'options=' + options;
      } else {
        params.push(options);
        return '';
      }
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)) {
      return true;
    }
    return false;
  };

  __exports__ = JavaScriptCompiler;
  return __exports__;
})(__module2__, __module5__);

// handlebars.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var Handlebars = __dependency1__;

  // Compiler imports
  var AST = __dependency2__;
  var Parser = __dependency3__.parser;
  var parse = __dependency3__.parse;
  var Compiler = __dependency4__.Compiler;
  var compile = __dependency4__.compile;
  var precompile = __dependency4__.precompile;
  var JavaScriptCompiler = __dependency5__;

  var _create = Handlebars.create;
  var create = function() {
    var hb = _create();

    hb.compile = function(input, options) {
      return compile(input, options, hb);
    };
    hb.precompile = function (input, options) {
      return precompile(input, options, hb);
    };

    hb.AST = AST;
    hb.Compiler = Compiler;
    hb.JavaScriptCompiler = JavaScriptCompiler;
    hb.Parser = Parser;
    hb.parse = parse;

    return hb;
  };

  Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module10__, __module11__);

  return __module0__;
})();

// Checks for browser support
fxcm.support = new function() {
	var thatSupport = this;
	
	var _select = document.createElement('select');
	var _opt = _select.appendChild(document.createElement('option'));
	
	// Make sure that the options inside disabled selects aren't marked as disabled (WebKit marks them as disabled)
	_select.disabled = true;
	this.optDisabled = !_opt.disabled;

	// Add fallback support for Array.indexOf in older versions of IE: IE6-8 or compatibility/quirks mode
	// Code taken from https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
	(function(){
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
				"use strict";
		        if (this == null) {
					throw new TypeError();
				}
				var t = Object(this);
				var len = t.length >>> 0;
				if (len === 0) {
					return -1;
				}
		        var n = 0;
		        if (arguments.length > 1) {
					n = Number(arguments[1]);
					if (n != n) { // shortcut for verifying if it's NaN
						n = 0;
					} else if (n != 0 && n != Infinity && n != -Infinity) {
						n = (n > 0 || -1) * Math.floor(Math.abs(n));
					}
				}
				if (n >= len) {
					return -1;
				}
				var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
				for (; k < len; k++) {
					if (k in t && t[k] === searchElement) {
						return k;
					}
				}
				return -1;
			};
		}
	})();

	// Polyfill - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}
	
}();
// Library of utility functions
fxcm.lib = new function() {
	var thatLib = this;

	/* makeClass - By John Resig (MIT Licensed), modified by Anthony DiSanti
	Allows a class to be instantiated without using the new keyword and uses prototypical inheritance
	Usage:
	var className = makeClass();
	className.prototype.init = function() {
		// Constructor Function
	}

	var obj1 = new newClass(); // Correct class instantiation using the new keyword, properly returns an instance of className
	var obj2 = newClass(); // Incorrect class instantiation missing the new keyword, still properly returns an instance of className */
	this.makeClass = function() {
		return function(args) {
			if (this instanceof arguments.callee) {
				if (typeof this.init === 'function') {
					this.init.apply(this, args && args.callee ? args : arguments);
				}
			} else {
				return new arguments.callee(arguments);
			}
		};
	};


    // Retrieves a URL query parameter, null if it does not exist
	this.getURLParameter = function(parameter) {
		// Confirm that there are URL parameters at all
		if (document.location.search === '') { return false; }

		var parameters = document.location.search.substring(1).split('&');	// Strip off the leading ? and split the string into individual key/value pairs
		for (parameterIndex = 0; parameterIndex < parameters.length; parameterIndex++) {
			var parameterParts = parameters[parameterIndex].split('=');	// Split the key and the value
			if (decodeURIComponent(parameterParts[0]).toUpperCase() === parameter.toUpperCase()) {
				return parameterParts.length >= 2 ? decodeURIComponent(parameterParts[1]) : null;	// Return null if the parameter doesn't have a value
			}
		}

		return false;	// Return false if the parameter doesn't exist
	};


	// Sets a URL query parameter
	this.setURLParameter = function (URL, parameter, value) {
		var URLParts = URL.toLowerCase().match('^(.*[\?&]' + parameter.toLowerCase() + '=).*?([\?&#].*)?$');

		if (URLParts)	{
			// Use the original URL so that we don't force the URL and parameters to be lower case
			return URL.substr(0,URLParts[1].length) + value + (typeof URLParts[2] !== 'undefined' ? URL.substr(URL.length - URLParts[2].length) : '');
		} else {
			// Account for a possible anchor
			var anchorLocation = URL.indexOf('#');
			if (anchorLocation >= 0) {
				return [URL.substr(0,anchorLocation), (URL.indexOf('?') == -1 ? '?' : '&'), parameter, '=', value, URL.substr(anchorLocation)].join('');
			} else {
				return URL + (URL.indexOf('?') == -1 ? '?' : '&') + parameter + '=' + value;
			}
		}
	};


	// Prepends padChar to a string or number to reach desired length
	this.padLeft = function(string, padChar, length) {
		return _padString(string, padChar, length, true);
	};


	// Appends padChar to a string or number to reach desired length
	this.padRight = function(string, padChar, length) {
		return _padString(string, padChar, length, false);
	};


	// Pads a string with padChar to the desired length
	function _padString(string, padChar, length, left) {
		// Convert numbers to strings
		if (typeof string === 'number') { string = String(string); }
		if (typeof padChar === 'number') { padChar = String(padChar); }

		// If string isn't a string or padChar isn't a 1 character string or left isn't a boolean, bomb out
		if (typeof string !== 'string' || typeof padChar !== 'string' || padChar.length !== 1 || typeof left !== 'boolean') { return false; }

		var padFunction = left ? Array.prototype.unshift : Array.prototype.push;

		var padCount = length - string.length;
		var finalString = [string];
		while (padCount > 0) {
			padFunction.call(finalString, padChar);
			padCount--;
		}

		return finalString.join('');
	}


	// Validates an e-mail address
	_validEmail = /^[^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*@(\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,})$/i;
	this.isValidEmail = function(email) {
		if (typeof email !== 'string') { return false; }

		return _validEmail.test(email);
	}


	// Validates a date
	this.isValidDate = function(date, longDay, longMonth, longYear, delimiter, internationalFormat) {
		if (typeof date !== 'string') { return false; }

		if (typeof longDay !== 'boolean') { longDay = false; }
		if (typeof longMonth !== 'boolean') { longMonth = false; }
		if (typeof longYear !== 'boolean') { longYear = false; }


		var day = ['(0', (longDay ? '' : '?'), '[1-9]|[12][0-9]|3[01])'];
		var year = ['(19|20)', (longYear ? '' : '?'), '\\d\\d'];
		if (typeof delimiter !== 'string') { delimiter = '[-\\/.]'; }
		delimiter = [delimiter];

		var dateRegEx;
		if (typeof internationalFormat !== 'boolean') {
			// Accept both US and international formats
			dateRegEx = [].concat(['^'], day, delimiter, day, delimiter, year, ['$']);
		} else {
			var month = ['(0', (longMonth ? '' : '?'), '[1-9]|1[0-2])'];
			if (internationalFormat) {
				dateRegEx = [].concat(['^'], day, delimiter, month, delimiter, year, ['$']);
			} else {
				dateRegEx = [].concat(['^'], month, delimiter, day, delimiter, year, ['$']);
			}
		}

		console.log(dateRegEx.join(''));
		return new RegExp(dateRegEx.join('')).test(date);
	}


	// Generates Locally Unique IDs (length parameter is optional)
	this.generateNumericID = function(length) {
		if (typeof length !== 'undefined' && typeof length !== 'number') { return false; }

		if (typeof length === 'undefined') {
			length = 20;	// Maximum length before the browser uses scientific notation
		}
		return Math.floor(Math.random() * Math.pow(10, length));
	}


	/* Like typeof, but can tell different types of built-in objects apart
	Adapted from jQuery 1.5.2 */
	this.type = function(object) {
		var parameterType = typeof object;
        if (parameterType !== 'object') {
            return parameterType;
        } else {
			if (object instanceof Date) {
				return 'date';
			} else if (object instanceof Array) {
				return 'array';
			} else if (object instanceof RegExp) {
				return 'regexp';
			} else {
				return 'object';
			}
        }
	};


    /* Reads a cookie
	Adapted from JQuery Cookie: https://github.com/carhartl/jquery-cookie 7/8/11 Snapshot */
    this.readCookie = function(name) {
        if (typeof name !== 'string') { return false; }

        var cookieParts = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie);
        return cookieParts !== null ? decodeURIComponent(cookieParts[1]) : null;
    };


    // Writes a cookie (Adapted from JQuery Cookie: https://github.com/carhartl/jquery-cookie 7/8/11 Snapshot)
    this.writeCookie = function(name, value, options) {
        if (typeof name !== 'string') { return false; }

        switch (typeof value) {
            case 'string':  // Ideal
                break;

            case 'undefined':   // Parameter wasn't passed, set a cookie with no value
                value = '';
                break;

            case 'object':
                if (value === null) {   // Treat null as an intention to set a cookie with no value
                    value = '';
                } else {    // We could JSON.stringify all other objects, but then we need to duck punch JSON.stringify into older browsers, let the client app deal with that
                    return false;
                }
                break;

            default:    // Cast other primitives to string
                value = String(value);
                break;
        }

        if (typeof options !== 'object') { options = {}; }

        return (document.cookie = [
            encodeURIComponent(name) + '=' + (value !== '' ? encodeURIComponent(value) : ''),
            options.expires instanceof Date ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            typeof options.path === 'string' ? '; path=' + options.path : '',
            typeof options.domain === 'string' ? '; domain=' + options.domain : '',
            typeof options.secure !== 'undefined' && options.secure ? '; secure' : ''
        ].join(''));
    };


    // Deletes a cookie
    this.deleteCookie = function(name, options) {
        if (typeof options !== 'object') { options = {}; }

        options.expires = new Date(0);    // Set cookie expiration to epoch
        return thatLib.writeCookie(name, '', options) ? true : false;
    }


	/* A crude way of determining if an object is a window
	Taken from jQuery 1.5.2 */
	this.isWindow = function(object) {
		return object && typeof object === "object" && "setInterval" in object;
	};

	// Adapted from isPlainObject in jQuery 1.5.2
	this.isDOMElement = function(object) {
		return object && (thatLib.type(object) === 'object') && (object.nodeType || thatLib.isWindow(object));
	};


	/* typeof returns "object" for arrays, use this function instead
	Taken from jQuery 1.5.2 */
	this.isArray = function(object) {
		return thatLib.type(object) === 'array';
	};


	/* Checks if object was created using "{}" or "new Object()"
	Taken from jQuery 1.5.2 */
	this.isPlainObject = function(object) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if (typeof object !== 'object' || thatLib.type(object) !== "object" || object.nodeType || thatLib.isWindow(object)) {
			return false;
		}

		// Not own constructor property must be Object
		if (object.constructor &&
			!Object.prototype.hasOwnProperty.call(object, "constructor") &&
			!Object.prototype.hasOwnProperty.call(object.constructor.prototype, "isPrototypeOf") ) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up, if last one is own, then all properties are own.
		var key;
		for (key in object) {}

		return typeof key === 'undefined' || Object.prototype.hasOwnProperty.call(object, key);
	};

	/* Checks if object is a jquery object (as opposed to native DOM element) */
	this.isJqueryElement = function(object) {
		return jQuery && object instanceof jQuery;
	}

	/* Clones an object
	source is the object to clone
	deep is a boolean signifying whether or not to perform a recursive copy
	Adapted from jQuery 1.5.2's extend called with parameters (deep, {}, source) */
	this.cloneObject = function(source, deep) {
		if (typeof source === 'undefined' || source === null) { return source; }
		if (typeof deep === 'undefined') { deep = false; }

		var clone = (thatLib.isArray(source) ? [] : {});

		for (name in source) {
			if (typeof source[name] !== 'undefined' && source !== null) {
				if (deep && (thatLib.isArray(source[name]) || thatLib.isPlainObject(source[name]))) {
					clone[name] = thatLib.cloneObject(source[name], deep);  // Never move original objects, clone them
				} else {    // Shallow copy primitives or if in shallow copy mode
					clone[name] = source[name];
				}
			}
		}

		// Return the clone
		return clone;
	};


	/* Ignore Earlier Callbacks v1.0
	Cancels earlier callbacks that haven't been invoked yet for the given id.
	This is especially useful when UI elements can trigger async calls directly.
	Wrapping the callback in this function will prevent it from being called repeatedly.
	This becomes very important for asynchronous calls because the responses are not guaranteed to
	arrive in the same order in which the requests were sent.
	Usage:
	asyncCall(parameters, fxcm.lib.ignoreEarlierCallbacks(callback, id)); */
	var _callbacksCount = {};

	this.ignoreEarlierCallbacks = function(callback, id) {
		if (typeof id === 'undefined') { id = callback; }

		if (typeof _callbacksCount[id] === 'undefined') { _callbacksCount[id] = 0; }
		_callbacksCount[id]++;

		var callbackWrapper = {};
		callbackWrapper.index = _callbacksCount[id];
		callbackWrapper.f = function() {
			if (_callbacksCount[id] === callbackWrapper.index) {
				callback.apply(this, arguments);
			}
		};
		return callbackWrapper.f;
	};


	// Queues callback functions to be executed in FIFO order
	var _callbacksQueues = {};
	this.queueCallback = function(callback, id) {
		if (typeof id === 'undefined') { id = callback; }

		if (typeof _callbacksQueues[id] === 'undefined') { _callbacksQueues[id] = []; }
		_callbacksQueues[id].push(callback);

		return function() {
			while (_callbacksQueues[id].length > 0) {
				_callbacksQueues[id].shift().apply(this, arguments);
			}
		};
	};


	// Stacks callback functions to be executed in FILO order
	var _callbacksStacks = {};
	this.stackCallback = function(callback, id) {
		if (typeof id === 'undefined') { id = callback; }

		if (typeof _callbacksStacks[id] === 'undefined') { _callbacksStacks[id] = []; }
		_callbacksStacks[id].push(callback);

		return function() {
			while (_callbacksStacks[id].length > 0) {
				_callbacksStacks[id].pop().apply(this, arguments);
			}
		};
	};


	// Performs an AJAX POST request
	this.ajaxPost = function(URL, postData, callback) {
		if (typeof postData === 'undefined') { postData = ''; }

		if (typeof postData === 'object') {
			if (!(postData instanceof Array)) {
				var dataArray = [];

				for (var field in postData) {
					if (dataArray.length > 0) {
						dataArray.push('&');
					}
					dataArray.push(field, '=', postData[field]);
				}

				postData = dataArray;
			}

			postData = postData.join('');
		}

		if (typeof URL !== 'string' || typeof postData !== 'string') {
			return false;
		}

		if (document.location.host !== thatLib.getHost(URL)) { return false; }	// Cannot perform cross-domain POSTs

		var httpRequest = thatLib.getAJAXObject();	// The XMLHttpRequest object is recreated on every call to workaround an IE cache problem
		if(!httpRequest) { return false; }	// The browser doesn't support AJAX

		if (httpRequest.overrideMimeType) {
			httpRequest.overrideMimeType('text/xml');
		}

		// Workaround for IE caching issue
		URL+= (url.indexOf('?') === -1 ? '?' : '&') + 'cacheBuster=' + thatLib.generateNumericID();

		// Open the connection
		httpRequest.open('POST', URL, true);

		// Set the proper headers
		httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		httpRequest.setRequestHeader('Content-length', postData.length);
		httpRequest.setRequestHeader('Connection', 'close');

		httpRequest.onreadystatechange = function () {	// Callback for handling the response
			if (httpRequest.readyState === 4) {	// Response has been fully received
				if (httpRequest.status === 200) {	// Successful submission
					if (httpRequest.responseText) {
						if (typeof callback === 'function') {
							callback.call(this, httpRequest.responseText);
						}
					}
				}
			}
		}

		httpRequest.send(postData);
	};


	// Extracts the hostname from a URL
	this.getHost = function (URL) {
		if (typeof URL !== 'string') { return false; }

		var host = URL.match(/^(?:(?:.*:)?\/\/)?([^/]+)/);
		if (!host) { return false; }	// Regex didn't match

		return host[1];
	};


	// Instantiates a browser-specific AJAX communication object
	this.getAJAXObject = function() {
		if (typeof ActiveXObject !== 'undefined') {	// Check for IE's ActiveX object
			try {
				var http = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					var http = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e2) {
					var http = false;
				}
			}
		} else if (typeof XMLHttpRequest === 'function') {	// Use XMLHttpRequest if ActiveX is not available
			try {
				var http = new XMLHttpRequest();
			} catch (e) {
				var http = false;
			}
		} else {	// The browser does not support AJAX communication
			var http = false;
		}

		return http;
	};


	// Loads a script dynamically and invokes callback after it loads
	this.getScript = function(URL, callback) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		if (typeof callback === 'function') {
			thatLib.addLoadHandler(script, callback);
		}
		script.setAttribute('src', encodeURI(URL));
		thatLib.attachElement(script);
	};


	// Loads a URL dynamically and invokes callback after it loads
	this.getURL = function(URL, callback) {
		var iframe = document.createElement('iframe');
		iframe.setAttribute('style', 'display:none');
		if (typeof callback === 'function') {
			thatLib.addLoadHandler(iframe, callback);
		}
		iframe.setAttribute('src', encodeURI(URL));
		thatLib.attachElement(iframe);
	};


	/* Attaches an element to the current document
	Taken from jQuery 1.5.2
	Inspired by code by Andrea Giammarchi
	http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html */
	this.attachElement = function(element) {
		var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;

		head.appendChild(element);
	};


	/* Parses ISO-8601 dates into javascript Date objects
	Adapted from Colin Snover's <http://zetafleet.com> Date.parse with progressive enhancement for ISO-8601, version 2 */
	this.parseISO8601 = function(ISO8601) {
		var timezoneOffset = 0, dateParts;
		if (dateParts = /^(\d{4}|[+\-]\d{6})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?))?/.exec(ISO8601)) {
			if (dateParts[4]) {  // Includes the time
				if (dateParts[8] !== 'Z') {
					timezoneOffset = +dateParts[10] * 60 + (+dateParts[11]); // timezoneOffset = Timezone Hours * 60 + Timezone Minutes

					if (dateParts[9] === '+') {
						timezoneOffset*= -1;  // If the timezone is ahead of UTC, the offset must be negative
					}
				}

				dateParts[7] = +dateParts[7].substr(0, 3);
			} else {    // Date only
				dateParts[4] = 0;   // Hours
				dateParts[5] = new Date().getTimezoneOffset();   // Set minutes to offset from UTC so that resulting date will be midnight in the local time zone
				dateParts[6] = 0;   // Seconds
				dateParts[7] = 0;   // Milliseconds
			}

			// Date.UTC returns the milliseconds since epoch in UTC time, which is then used to initialize a Date object to prevent local time zone issues
			return new Date(Date.UTC(+dateParts[1], +dateParts[2] - 1, +dateParts[3], +dateParts[4], +dateParts[5] + timezoneOffset, +dateParts[6], dateParts[7]));
		} else {
			return false;   // Parameter did not meet ISO-8601 format specifications
		}
	};


    // Removes illegal characters and invalid prefixes (numbers, --, or -number) from text to generate a valid CSS class name
    this.generateCSSClassName = function(text) {
        if (typeof text !== 'string' && typeof text !== 'number') { return ''; }
		text = String(text);

        text = text.replace(/[^-a-zA-Z_0-9]/g,'_');
        var prefixTrimmed = text.replace(/^([0-9]|-[^a-zA-Z_])*/, '');

        return (prefixTrimmed.length >= 2 ? prefixTrimmed : 'class_' + text);
    };


    // Removes illegal characters and invalid prefixes (any non-letter) from text to generate a valid CSS class name
    this.generateCSSID = function(text) {
        if (typeof text !== 'string' && typeof text !== 'number') { return ''; }
		text = String(text);

        text = text.replace(/[^-a-zA-Z_0-9:.]/g,'_');
        var prefixTrimmed = text.replace(/^[^a-zA-Z]*/, '');

        return (prefixTrimmed.length >= 0 ? prefixTrimmed : 'id_' + text);
    };


	// Removes illegal characters and invalid prefixes (anything other than letters, $, or _) from text to generate a valid javascript function name
    this.generateFunctionName = function(text) {
        if (typeof text !== 'string' && typeof text !== 'number') { return ''; }
		text = String(text);

		var illegalSuffixChars = /[^a-zA-Z0-9_]/g;

		var prefix = text.charAt(0);
		if (prefix.match(/[a-zA-Z$_]/)) {
			return prefix + text.substr(1).replace(illegalSuffixChars,'_');
		} else {
			return 'function_' + text.replace(illegalSuffixChars,'_');
		}
    };


    // Calculates the timestamp for midnight of the parameter
    this.midnightTimestamp = function(date) {
        switch (typeof date) {
			case 'object':
				if (!(date instanceof Date)) {
					return false;
				}
				break;

			case 'number':
			case 'string':
				date = new Date(date);
				break;

			case 'undefined':
			default:
			    return false;
		}

        return date.getTime() - (((date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds()) * 1000 + date.getMilliseconds());
    };


    // Removes whitespace from the beginning and end of a string
    this.trim = function(text) {
        if (typeof text !== 'string') { return false; }

        if (String.prototype.trim) {    // Use native implementation if it exists
            return String.prototype.trim.call(text);
        } else {
            return text.replace(/^\s+/, '').replace(/\s+$/, '');
        }
    }


    /* Adapted from jQuery 1.6.1
    Adds one or more space-separated classes to element */
    this.addClass = function(element, classNames) {
        if (typeof classNames !== 'string') { return false; }

        switch (typeof element) {
            case 'object':
                if (!thatLib.isDOMElement(element)) {
                    return false;
                }
                break;

            case 'string':
                element = document.getElementById(element);
                if (element === null) {
                    return false;
                }
                break;

            default:
                return false;
        }

        if (classNames === '') { return true; }

        if (!element.className) {
            element.className = classNames;
        } else {
            var className = ' ' + element.className + ' ';
            var setClass = element.className;

            classNames = classNames.split(/\s+/);
            for (var classNamesIndex = 0; classNamesIndex < classNames.length; classNamesIndex++) {
                if (className.indexOf(' ' + classNames[classNamesIndex] + ' ') < 0 ) {
                    setClass += ' ' + classNames[classNamesIndex];
                }
            }

            element.className = setClass;
        }

        return true;
    };


    /* Adapted from jQuery 1.6.1
    Removes one or more space-separated classes to element */
    this.removeClass = function(element, classNames) {
        if (!(typeof classNames === 'string' || typeof classNames === 'undefined')) { return false; }

        switch (typeof element) {
            case 'object':
                if (!thatLib.isDOMElement(element)) {
                    return false;
                }
                break;

            case 'string':
                element = document.getElementById(element);
                if (element === null) {
                    return false;
                }
                break;

            default:
                return false;
        }

        if (!element.className) { return true; }
        if (typeof classNames === 'undefined' || classNames === '') {
            element.className = '';
            return true;
        }

        classNames = classNames.split(/\s+/);
        var className = (' ' + element.className + ' ').replace(/[\n\r\t]/g, ' ');

        for (var classNamesIndex = 0; classNamesIndex < classNames.length; classNamesIndex++) {
            className = className.replace(' ' + classNames[classNamesIndex] + ' ', ' ');
        }

        element.className = thatLib.trim(className);

        return true;
    };


    /* Translates Date.getDay() to the name of the day.
    If shortForm is true, only returns the first 3 characters */
    var _dayNames = {};
    _dayNames['english'] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

	this.formatDay = function(day, shortForm, language) {
		if (typeof language !== 'string' || typeof _dayNames[language.toLowerCase()] === 'undefined') {
			language = 'english';
		}

        if (typeof shortForm === 'undefined') {
            shortForm = false;
        }

        var dayName = _dayNames[language.toLowerCase()][day];
		if (shortForm) {
            return dayName.substr(0,3);
        } else {
            return dayName;
        }
	};


    /* Translates Date.getMonth() to the name of the month.
    If shortForm is true, only returns the first 3 characters */
	var _monthNames = {};
    _monthNames['english'] = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    this.formatMonth = function(month, shortForm, language) {
		if (typeof language !== 'string' && typeof _monthNames[language] === 'undefined') {
			language = 'english';
		}

        if (typeof shortForm === 'undefined') {
            shortForm = false;
        }

        var monthName = _monthNames[language.toLowerCase()][month];
		if (shortForm) {
            return monthName.substr(0,3);
        } else {
            return monthName;
        }
	};

	// Attaches events with cross-browser support, properly setting the context of this
	this.addEventHandler = function(element, event, handler, capture) {
		if (!thatLib.isDOMElement(element) || typeof event !== 'string' || typeof handler !== 'function') { return false; }
		if (event.substr(0,2) === 'on') { event = event.substr(2); }	// Strip the 'on' at the beginning of the event if it is present

		if (typeof element.addEventListener === 'function') {	// Primary way of adding event listeners
			if (typeof capture === 'undefined') { capture = false; }
			return element.addEventListener(event, handler, capture);
		} else if (typeof element.attachEvent !== 'undefined') {	// Special case for IE (also, strangely typeof element.attachEvent = 'object' in IE)
			return element.attachEvent('on' + event, function(e) { return handler.call(element, e); });
		} else {
			return false;
		}
	};


	// Adds an onload handler for script and iframe elements (supports IE)
	var _addLoadHandlerCallbackFired = {};
	this.addLoadHandler = function(element, callback) {
		if (typeof callback !== 'function') { return false; }

		var callbackID = thatLib.generateNumericID();	// Generate an ID for the callback
		_addLoadHandlerCallbackFired[callbackID] = false;	// Initialize its state as not fired
		callback = thatLib.queueCallback(callback, 'fxcm.lib.addLoadHandler:' + callbackID);	// Support multiple callbacks on the same element
		var wrappedCallback = function() {	// Wrap callback to set state to fired when called
				_addLoadHandlerCallbackFired[callbackID] = true;
				return callback.call(element);
			};

		// Attach standard load handler
		thatLib.addEventHandler(element, 'load', wrappedCallback);

		/* Hack to replicate element.onload in IE
		Adapted from Nick Spacek's code at https://gist.github.com/461797 */
		thatLib.addEventHandler(element, 'readystatechange', function() {
				if ((element.readyState === 'loaded' || element.readyState === 'complete') && _addLoadHandlerCallbackFired[callbackID] === false) {
					return wrappedCallback.call(element);
				}
			});

		return true;
	};


	/* Returns an object of name/value pairs for the contents of a form
	Inspired by jQuery 1.6.2's serializeArray() */
	var _selectTextareaRegEx = /^(?:select|textarea)/i;
	var _inputTypesRegEx = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;

	this.serializeForm = function(form) {
		// Dereference an ID
		if (typeof form === 'string') { form = document.getElementById(form); }

		// Confirm that form is a form element
		if (!(thatLib.isDOMElement(form) && form.tagName === 'FORM')) { return false; }

		var serializedForm = {};
		for (elementIndex = 0; elementIndex < form.elements.length; elementIndex++) {
			var element = form.elements[elementIndex];

			if (element.name && !element.disabled && (element.checked || _selectTextareaRegEx.test(element.tagName) || _inputTypesRegEx.test(element.type))) {
				serializedForm[element.name] = thatLib.inputValue(element);
			}
		}

		return serializedForm;
	};


	/*	Returns the value of an input (supports all types)
	Inspired by jQuery 1.6.2's val() */
	var _hardReturnRegEx = /\r/g;

	this.inputValue = function(element) {
		if (!thatLib.isDOMElement(element)) { return false; }

		switch(element.tagName) {
			case 'SELECT':
				var selectedIndex = element.selectedIndex;
				if (selectedIndex < 0) { return null; }

				if (element.type === 'select-one') {
					var option = element.options[selectedIndex];

					if (option.selected && thatLib.isEnabledOption(option)) {
						return thatLib.inputValue(option);
					} else {
						return null;
					}
				} else {
					var options = element.options;

					var values = [];
					for (var optionIndex = 0; optionIndex < options.length; optionIndex++) {
						var option = options[optionIndex];

						if (option.selected && thatLib.isEnabledOption(option)) {
							values.push(thatLib.inputValue(option));
						}
					}

					if (values.length === 0) {
						return null;
					} else if (values.length === 1) {
						return values[0];
					} else {
						return values;
					}
				}

				return null;

			case 'OPTION':
				var attrValue = element.attributes.value;
				if (!attrValue || attrValue.specified) {
					return element.value;
				} else {
					return element.text;
				}

			case 'INPUT':
				var value = element.value;
				if (typeof value === 'string') {
					return value.replace(_hardReturnRegEx, '');
				} else if (value == null) {
					return '';
				} else {
					return value;
				}

			case 'TEXTAREA':
				var value = element.value;
				if (value == null) {
					return '';
				} else {
					return value;
				}

			default:
				return false;
		}
	};


	// Checks if the option element has been disabled or is in a disabled optgroup
	this.isEnabledOption = function(option) {
		return (fxcm.support.optDisabled ? !option.disabled : option.getAttribute('disabled') === null) &&
			(!option.parentNode.disabled || option.parentNode.tagName === 'OPTGROUP');
	};


	/* Cancels events in a cross-browser compatible way
	Usage:

	return fxcm.lib.cancelEvent(event);	*/
	this.cancelEvent = function(event) {
		if (typeof event !== 'object') { return false; }

		// Cancel the default action
		if (typeof event.preventDefault === 'function') {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}

		// Stop the event from bubbling
		if (typeof event.stopPropagation === 'function') {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}

		// Return false
		return false;
	}

	// Returns a copy of the array with numberOfElements shifted off
	this.shiftArray = function(array, numberOfElements) {
		if (typeof numberOfElements === 'undefined') {
			numberOfElements = 1;
		} else 	if (typeof numberOfElements !== 'number' || numberOfElements < 0) {
			return false;
		}

		var returnArray = [];
		for (var index = numberOfElements; index < array.length; index++) {
			returnArray.push(array[index]);
		}

		return returnArray;
	};

	// Returns a copy of the array with numberOfElements popped off
	this.popArray = function(array, numberOfElements) {
		if (typeof numberOfElements === 'undefined') {
			numberOfElements = 1;
		} else 	if (typeof numberOfElements !== 'number' || numberOfElements < 0) {
			return false;
		}

		var returnArray = [];
		for (var index = array.length - numberOfElements - 1; index >= 0; index--) {
			returnArray.unshift(array[index]);
		}

		return returnArray;
	};

	// Dynamically adds style to the current document
	this.addStyle = function() {
		var styleElement = thatLib.createStyleElement.apply(this, arguments);
		return thatLib.attachElement(styleElement);
	};

	// Dynamically creates a style element
	this.createStyleElement = function(id, style) {
		var styleContent = id + ' { ' + style + ' }';

		var styleElement = document.createElement('style');
		styleElement.type = 'text/css';

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = styleContent;
		} else {
			styleElement.appendChild(document.createTextNode(styleContent));
		}

		return styleElement;
	};

    // Returns the name of the current form being validated. Tracked as eVar23
    this.getFormName = function(currentForm) {
        return currentForm.name || currentForm.id || currentForm.parentNode.name || currentForm.parentNode.id || currentForm.parentNode.className || "Form Not Named";
    };

	// Returns the name or id for the form input field
	this.getFieldName = function( field ) {
		return field.name || field.id || field.type || field.className || "Field needs identifier";
	};
}();
// The calendar class queries a Google Calendar and generates HTML
fxcm.Calendar = fxcm.lib.makeClass();
fxcm.Calendar.prototype.init = function(timeframe, displayCallback, calendarCallback, googCalendar, apiKey) {
	var thatCalendar = this;

	var _settings = {
		categories: {},
		types: {}
	};

	var _defaults = {
		months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		months_full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		days_full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],		
		text_join_title: 'Join Webinar'
	};

	/**
	 * Requests from the fxcm calendars account events relevant to the timeframe.
	 * @param timeframe: "today" | "previousWeek" | "thisWeek" | "nextWeek" | "featured"
	 * @param displayCallback: function used to display anything to the user; will be passed the start and end dates
	 * @param calendarCallback: function used to process the items retrieved from the calendar; will be passed the array of items
	 * @param googCalendar: google email address of calednar to poll, with URL-safe characters, e.g. %40
	 * @param apiKey: public API key
	 * @returns 
	 */

	function _outputTime24h(time) {
		return _padZero(time.getHours()) + ":" + _padZero(time.getMinutes());
	}

	function _eventTypeToClass(type) {
		if (typeof(type) == "undefined") return "";
		if (type.toLowerCase() == "live client") return "live_client";
		return type.toLowerCase();
	}

	/**
	 * Handle values that are undefined
	 * @param str
	 * @returns
	 */
	function _coalesceOutput(str){
		return typeof(str) == "undefined" ? "&nbsp" : str;
	}


	/**
	 * Look up translated value in the provided array, and if not found, return itself
	 */
	function _translateValue(translationArray, key) {
		var value = _coalesceOutput(key);
		if (translationArray === null) {return value;}
		var lookup = translationArray[value.toLowerCase().trim()];
		return (typeof(lookup) !== "undefined" && lookup !== "") ? lookup : value;
	}

	function _parseDateTime(string) {
		var split = string.split("T");
		var dateElements = split[0].split("-");
		var timeElements = split[1].substring(0,8).split(":");
		return new Date(dateElements[0], (parseFloat(dateElements[1]) - 1 + 12) % 12, dateElements[2], timeElements[0], timeElements[1], timeElements[2]);
	}

	function _getStartOfLastWeek() {
		var start = _getStartOfThisWeek();
		start.setDate(start.getDate() - 7);
		return start;
	}

	function _getStartOfNextWeek() {
		var start = _getStartOfThisWeek();
		start.setDate(start.getDate() + 7);
		return start;
	}

	function _getStartOfThisWeek() {
		var datetime = new Date();
		datetime.setDate(datetime.getDate() - datetime.getDay());
		_zeroOut(datetime);
		return datetime;
	}

	function _getStartOfToday() {
		var datetime = new Date();
		_zeroOut(datetime);
		return datetime;
	}

	function _getEndOfLastWeek() {
		var end = _getEndOfThisWeek();
		end.setDate(end.getDate() - 7);
		return end;
	}

	function _getEndOfNextWeek() {
		var end = _getEndOfThisWeek();
		end.setDate(end.getDate() + 7);
		return end;
	}

	function _getEndOfThisWeek() {
		var datetime = new Date();
		datetime.setDate(datetime.getDate() + (6 - datetime.getDay() + 1));
		_zeroOut(datetime);
		return datetime;
	}

	function _getEndOfToday() {
		var datetime = new Date();
		datetime.setDate(datetime.getDate() + 1);
		_zeroOut(datetime);
		return datetime;
	}

	function _zeroOut(datetime) {
		datetime.setHours(0);
		datetime.setMinutes(0);
		datetime.setSeconds(0);
		datetime.setMilliseconds(0);
	}

	function formatHours(n) {
		if (n % 12 === 0) return 12;
		return n % 12;
	}

	function _padZero(n) { return n <= 9 ? "0" + n : n; }

	function _padTwoZero(n) {
		if (n <= 9) {
			return "00" + n;
		} else if (n <= 99) {
			return "0" + n;
		} else {
			return n;
		}
	}

	this.requestEvents = function(timeframe, displayCallback, calendarCallback, googCalendar, apiKey) {
		if (typeof(googCalendar) == "undefined") googCalendar = "fxcmcalendars%40gmail.com";
		if (typeof(apiKey) == "undefined") apiKey = "AIzaSyAd-5yprrBP9QEM4fS-PWCBNeMMdv3Jrlo";
		var url = "https://www.googleapis.com/calendar/v3/calendars/" + googCalendar + "/events?key=" + apiKey + "&maxResults=200&orderBy=startTime&singleEvents=true&timeZone=" + jstz.determine().name();
		var start;
		var end;
		switch(timeframe) {
		case "today":
			start = _getStartOfToday();
			end = _getEndOfToday();
			break;
		case "previousWeek":
			start = _getStartOfLastWeek();
			end = _getEndOfLastWeek();
			break;
		case "thisWeek":
			start = _getStartOfThisWeek();
			end = _getEndOfThisWeek();
			break;
		case "nextWeek":
			start = _getStartOfNextWeek();
			end = _getEndOfNextWeek();
			break;
		case "featured":
			start = new Date();
			end = _getEndOfNextWeek();
			break;
		default:
			start = _getStartOfThisWeek();
			end = _getEndOfThisWeek();
		}
		if (start.toISOString) {
			url += "&timeMin=" + start.toISOString() + "&timeMax=" + end.toISOString();
		} else {
			var offsetStart = new Date(start.getTime());
			offsetStart.setMinutes(offsetStart.getMinutes() + offsetStart.getTimezoneOffset());
			var startString = offsetStart.getFullYear() + "-" + _padZero(offsetStart.getMonth() + 1) + "-" + _padZero(offsetStart.getDate()) + "T" + _padZero(offsetStart.getHours()) + ":" + _padZero(offsetStart.getMinutes()) + ":" + _padZero(offsetStart.getSeconds()) + "." + _padTwoZero(offsetStart.getMilliseconds()) + "Z";
			var offsetEnd = new Date(end.getTime());
			offsetEnd.setMinutes(offsetEnd.getMinutes() + offsetEnd.getTimezoneOffset());
			var endString = offsetEnd.getFullYear() + "-" + _padZero(offsetEnd.getMonth() + 1) + "-" + _padZero(offsetEnd.getDate()) + "T" + _padZero(offsetEnd.getHours()) + ":" + _padZero(offsetEnd.getMinutes()) + ":" + _padZero(offsetEnd.getSeconds()) + "." + _padTwoZero(offsetEnd.getMilliseconds()) + "Z";
			url += "&timeMin=" + startString + "&timeMax=" + endString;
		}
		displayCallback(start, end);

		$.ajax({
			async: true,
			cache: false,
			crossDomain: true,
			type: "GET",
			url: url,
			dataType: "jsonp",
			success: function (data) {
				calendarCallback(data.items);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(errorThrown); console.log(textStatus); console.log(XMLHttpRequest);
			}
		});
	};

	/**
	 * Outputs an event in HTML form.  Default for DFX; can/should be overwritten for other usage.
	 * @param event
	 * @returns {String}
	 */
	this.outputEvent = function(event) {
		var output = "";
		var eventStart = _parseDateTime(event.start.dateTime);
		var eventItems = thatCalendar.parseEventDescription(event.description);
		
		output += "<li class='event'>";
		output += "<a class='eventLink' href='" + _coalesceOutput(eventItems["room-link"]) + "' target='_blank' title='" + _defaults.text_join_title + "'></a>";
		output += "<ul class='eventDescr'>";
		output += "<li class='date'><span><strong>" + _defaults.days[eventStart.getDay()] + "</strong> " + _defaults.months[eventStart.getMonth()] + " " + eventStart.getDate() + "</span></li>";
		output += "<li class='time'>" + formatHours(eventStart.getHours()) + ":" + _padZero(eventStart.getMinutes()) + (eventStart.getHours() >= 12 ? "P" : "A") + "</li>";
		output += "<li class='title'>" + event.summary + "</li>";
		output += "<li class='host'>" + _coalesceOutput(eventItems["host"]) + "</li>";
		output += "<li class='category'>" + _translateValue(_settings.categories, eventItems["category"]) + "</li>";
		output += "<li class='type " + _eventTypeToClass(eventItems["type"]) + "'>" + _translateValue(_settings.types, eventItems["type"]) + "</li>";
		output += "</ul></li>";
		
		return output;
	};

	this.parseEventDescription = function(eventDescription) {
		if (typeof eventDescription === "undefined") {return [];}
		var descriptionItems =[];
		var tokens = eventDescription.split("\n");
		for (var i = 0; i < tokens.length; i++) {
			var split = tokens[i].split(":");
			var splitLength = split.length;
			var key = split[0].toLowerCase();
			var val = "";
			for (var j = 1; j < splitLength; j++) {
				val += $.trim(split[j]);
				if (splitLength >= 3 && j < splitLength - 1) val += ":";
			}
			descriptionItems[key] = val;
		}
		return descriptionItems;
	};

	this.outputFeaturedEvent = function(event) {
		var output = "";
		var eventStart = _parseDateTime(event.start.dateTime);
		var eventItems = thatCalendar.parseEventDescription(event.description);
		
		output += "<li class='featured-event'>";
		output += "<i class='ico ico-simple-light-grey ico-star-lg'></i>";
		output += "<span class='date'>" + _defaults.days_full[eventStart.getDay()] + ", " + _defaults.months_full[eventStart.getMonth()] + " " + eventStart.getDate() + "</span> ";
		output += formatHours(eventStart.getHours()) + ":" + _padZero(eventStart.getMinutes()) + (eventStart.getHours() >= 12 ? "P" : "A");
		output += "<a href='" + _coalesceOutput(eventItems["room-link"]) + "' target='_blank'>" + event.summary + "</a>";
		output += "</li>";
		return output;
	};

};


fxcm.Demo = fxcm.lib.makeClass();
fxcm.Demo.prototype.init = function(rb, form, successCallback, currency) {
	var thatDemo = this;

	var _settings = {};
	_settings.submissionTargets = {};
	_settings.submissionTargets.get = [];
	_settings.submissionTargets.post = [];
	_settings.submissionTargets.JSONP = [];
	_settings.submissionTargets.eloqua = [];

	var _timeoutID = null;
	var _requestsQueue = [];

	this.setRB = function(rb) {
		if (typeof rb !== 'string') { return false; }

		return _settings.rb = rb.toLowerCase();
	};

	this.getRB = function() {
		return _settings.rb;
	};

	this.setDB = function(rb, currency) {
		if (typeof rb !== 'string') { return false; }

		var _db = _dbLookup(rb, currency);

		if(!_db){
			return false;
		} else {
			return _settings.db = _db;
		}
	};

	this.getDB = function() {
		return _settings.db;
	};

	this.setCurrency = function(currency){
		if (typeof currency !== 'string') { return false; }

		return _settings.currency = currency.toUpperCase();
	};

	this.getCurrency = function(){
		return _settings.currency;
	};

	this.setConversionData = function() {
		var _rb = thatDemo.getRB();
		var _data = {};

		if (typeof fxcm.registration.demoRBMap !== 'object' || typeof fxcm.registration.demoRBMap[_rb] !== 'object')  { return false; }

		var _raw = fxcm.registration.demoRBMap[_rb];

		// feed values into object for returning
		_data.rb = _rb;
		_data.database = thatDemo.getDB();
		_data.currency = thatDemo.getCurrency();

		// check for an mt4 server
		if (typeof _raw.server === 'object' && typeof _raw.server[_data.currency] === 'string') {
			_data.server = _raw.server[_data.currency];
		}

		// check for a platform
		if (typeof _raw.platform === 'string') {
			_data.platform = _raw.platform;
		}

		return _settings.conversionData = _data;
	};

	this.getConversionData = function() {
		return _settings.conversionData;
	};

	this.setCountry = function(country) {
		if (typeof country !== 'string') { return false; }

		_settings.country = country;
		_settings.rb = _rbLookup();

		return _settings.country;
	};

	this.getCountry = function() {
		return _settings.country;
	};

	this.setAccountType = function(accountType) {
		if (typeof accountType !== 'string') { return false; }

		_settings.accountType = accountType;
		_settings.rb = _rbLookup();

		return _settings.accountType;
	};

	this.getAccountType = function() {
		return _settings.accountType;
	};

	this.setCountryAccountType = function(country, accountType) {
		if (typeof country !== 'string' || typeof accountType !== 'string') { return false; }

		_settings.country = country;
		_settings.accountType = accountType;
		_settings.rb = _rbLookup();

		return {country: _settings.country, accountType: _settings.accountType};
	};

	this.setCampaign = function(campaign) {
		if (typeof campaign !== 'string') { return false; }

		return _settings.campaign = campaign;
	};

	this.getCampaign = function() {
		return _settings.campaign;
	};

	this.setFormName = function(name) {
		if (typeof name !== 'string') { return false; }

		return _settings.formName = name;
	};

	this.getFormName = function() {
		return _settings.formName;
	};

	/* Adds another submission target submitted with HTTP GET into an iFrame
	fieldMap is an object where the keys are the clientInfo field names to map and values are the submission target's expected field names
	additionalData is an object of key/value pairs that will be submitted along with the demo data
	valueMap is an object of field names, which each are objects containing key/value pairs mapping values to aliases
	If any Personally Identifiable Information (PII, e.g. name, address) is being passed, you should use a secure link (https) otherwise the data is passed as plain text */
	this.addGetSubmissionTarget = function(target, fieldMap, additionalData, callback, valueMap, extendOriginalFields) {
		return _addSubmissionTarget('get', target, fieldMap, additionalData, callback, valueMap, extendOriginalFields);
	};

	/* Adds another submission target submitted with HTTP POST
	fieldMap is an object where the keys are the clientInfo field names to map and values are the submission target's expected field name
	additionalData is an object of key/value pairs that will be submitted along with the demo data
	valueMap is an object of field names, which each are objects containing key/value pairs mapping values to aliases
	If any Personally Identifiable Information (PII, e.g. name, address) is being passed, you should use a secure link (https) otherwise the data is passed as plain text */
	this.addPostSubmissionTarget = function(target, fieldMap, additionalData, callback, valueMap, extendOriginalFields) {
		return _addSubmissionTarget('post', target, fieldMap, additionalData, callback, valueMap, extendOriginalFields);
	};

	/* Adds another submission target submitted via a script tag
	fieldMap is an object where the keys are the clientInfo field names to map and values are the submission target's expected field names
	additionalData is an object of key/value pairs that will be submitted along with the demo data
	valueMap is an object of field names, which each are objects containing key/value pairs mapping values to aliases
	If any Personally Identifiable Information (PII, e.g. name, address) is being passed, you should use a secure link (https) otherwise the data is passed as plain text */
	this.addJSONPSubmissionTarget = function(target, fieldMap, additionalData, callback, valueMap, extendOriginalFields) {
		return _addSubmissionTarget('JSONP', target, fieldMap, additionalData, callback, valueMap, extendOriginalFields);
	};

	/* Adds another submission target submitted to Eloqua
	fieldMap is an object where the keys are the clientInfo field names to map and values are the submission target's expected field names
	additionalData is an object of key/value pairs that will be submitted along with the demo data */
	this.addEloquaSubmissionTarget = function(eloquaFormName, fieldMap, additionalData, callback, valueMap, extendOriginalFields) {
		return _addSubmissionTarget('eloqua', eloquaFormName, fieldMap, additionalData, callback, valueMap, extendOriginalFields);
	};

	function _addSubmissionTarget(type, target, fieldMap, additionalData, callback, valueMap, extendOriginalFields) {
		var submissionTarget = {};

		if (typeof target === 'string') {
			submissionTarget[type === 'eloqua' ? 'formName' : 'target'] = target;
		} else {
			return false;
		}

		if (typeof fieldMap !== 'undefined') {
			if (typeof fieldMap === 'object') {
				submissionTarget.fieldMap = fieldMap;
			} else {
				return false;
			}
		}

		if (typeof additionalData !== 'undefined') {
			if (typeof additionalData === 'object') {
				submissionTarget.additionalData = additionalData;
			} else {
				return false;
			}
		}

		if (typeof callback !== 'undefined') {
			if (typeof callback === 'function') {
				submissionTarget.callback = callback;
			} else {
				return false;
			}
		}

		if (typeof valueMap !== 'undefined') {
			if (typeof valueMap === 'object') {
				submissionTarget.valueMap = valueMap;
			} else {
				return false;
			}
		}

		submissionTarget.extendOriginalFields = typeof extendOriginalFields !== 'boolean' ? true : extendOriginalFields;

		_settings.submissionTargets[type].push(submissionTarget);
		return submissionTarget;
	}

	this.getSubmissionTargets = function() {
		return _settings.submissionTargets;
	};

	function _getCampaign() {
		return fxcm.lib.getURLParameter('CMP') ||
			(typeof jPersist === 'object' && typeof jPersist.visitor === 'object' && typeof jPersist.visitor.campaign === 'string' && 'SFS-' + jPersist.visitor.campaign);
	}

	this.setSuccessCallback = function(callback) {
		if (typeof callback !== 'function') { return false; }

		return _settings.successCallback = callback;
	};

	this.getSuccessCallback = function() {
		return _settings.successCallback;
	};

	this.setErrorCallback = function(callback) {
		if (typeof callback !== 'function') { return false; }

		return _settings.errorCallback = callback;
	};

	this.getErrorCallback = function() {
		return _settings.errorCallback;
	};

	this.checkFXTRStatus = function() {
		var callbackName = fxcm.lib.generateFunctionName(fxcm.lib.generateNumericID());

		window[callbackName] = _handleFXTRStatus;
		_timeoutID = setTimeout(_FXTRTimeout, 2000);	// Give FXTR Status 2 seconds to respond before defaulting to FXTR
		return fxcm.lib.getScript(thatDemo.FXTRStatusURL + '?callback=' + callbackName);
	}

	function _FXTRTimeout() {
		_timeoutID = null;

		_settings.submissionTarget = 'fxtr';

		_submitRequests();
	}

	function _handleFXTRStatus(status) {
		if (_timeoutID !== null) {
			clearTimeout(_timeoutID);
		}

		if (status) {
			_settings.submissionTarget = 'fxtr';
		} else {
			_settings.submissionTarget = 'eloqua';
		}

		_submitRequests();
	}

	function _rbLookup(country, accountType) {
		if (typeof country === 'undefined') { country = _settings.country; }
		if (typeof accountType === 'undefined') { accountType = _settings.accountType || 'ts'; }

		if (typeof country !== 'string' || typeof accountType !== 'string') { return false; }

		switch(country) {
			case 'united_states':
			case 'american_samoa':
			case 'guam':
			case 'puerto_rico':
				switch(accountType) {
					case 'ts':
						return 'fxcm';

					case 'at':
						return 'active_trader';

					case 'tsg':
						return 'tsg_llc';

					case 'st':
						return 'strategy_trader_llc';

					default:
						return false;
				}

			case 'australia':
			case 'new_zealand':
				switch(accountType) {
					case 'ts':
						return 'fxcmau';

					default:
						return false;
				}

			case 'united_kingdom':
			default:
				switch(accountType) {
					case 'ts':
					default:
						return 'fxcmuk';
				}
		}
	}

	this.bindCountry = function(element) {
		// Dereference an id
		if (typeof element === 'undefined') {
			if (typeof _settings.bindTarget !== 'undefined') {
				element = _settings.bindTarget;
			} else {
				return false;
			}
		} else if (typeof element === 'string') {
			element = document.getElementById(element);
		}

		// Confirm that element is an element
		if (!fxcm.lib.isDOMElement(element)) { return false; }

		switch (element.tagName) {
			case 'SELECT':
				fxcm.lib.addEventHandler(element, 'change', _countryChangeHandler);
				return true;

			case 'FORM':
				for (elementIndex = 0; elementIndex < element.elements.length; elementIndex++) {
					var formElement = element.elements[elementIndex];

					if (formElement.name.toLowerCase() === 'country' || formElement.name === 'demo.' + fxcm.Demo.prototype._demoFieldMap['country'].fxtrName || formElement.name === fxcm.Demo.prototype._demoFieldMap['country'].eloquaName) {
						fxcm.lib.addEventHandler(formElement, 'change', _countryChangeHandler);
						return true;
					}
				}
				return false;

			default:
				return false;
		}
	}

	function _countryChangeHandler(event) {
		return thatDemo.setCountry(fxcm.lib.inputValue(this));
	}

	this.bind = function(form) {
		// Dereference an id
		if (typeof form === 'string') {
			form = document.getElementById(form);
		}

		// Confirm that "form" is a form
		if (!(fxcm.lib.isDOMElement(form) && form.tagName === 'FORM')) {
			return false;
		}

		// Set the form name to the name attribute of the bind target if one hasn't been set already
		if (typeof _settings.formName === 'undefined') {
			thatDemo.setFormName(form.name);
		}

		// Attach submit handler
		_settings.bindTarget = form;
		return fxcm.lib.addEventHandler(form, 'submit', _submitHandler);
	}

	function _submitHandler(event) {
		// Set the form name to the name attribute of the bind target if one hasn't been set already
		if (typeof _settings.formName === 'undefined') {
			thatDemo.setFormName(this.name);
		}

		// Scrape data from the form
		var formData = fxcm.lib.serializeForm(this);

		// Map fxtr fields to their respective clientInfo name
		for (var field in fxcm.Demo.prototype._demoFieldMap) {
			if (typeof formData['demo.' + fxcm.Demo.prototype._demoFieldMap[field].fxtrName] !== 'undefined') {
				formData[field] = formData['demo.' + fxcm.Demo.prototype._demoFieldMap[field].fxtrName];
				delete formData['demo.' + fxcm.Demo.prototype._demoFieldMap[field].fxtrName];
			}
		}

		if (typeof event === 'object') {	// _submitHandler is handling a submit event
			thatDemo.submit(formData);	// Submit the request

			return fxcm.lib.cancelEvent(event);	// Cancel the form submission
		} else {	// _submitHandler was manually invoked by submit because a form was passed in
			return thatDemo.submit(formData, event);	// Submit the request, event is the callback in this case
		}
	}

	/* clientInfo can contain the following members:
	firstName (max of 50 characters)
	lastName (required): The client's last name (max of 50 characters)
	email (required): Must be a validly formatted email address (max of 50 characters)
	phone: May only use digits, letters, and the characters: +()_,.:-=* (max of 20 characters)
	phone2: May only use digits, letters, and the characters: +()_,.:-=* (max of 20 characters)
	imNetwork: Instant messaging network (aol, yahoo, icq, msn, other)
	imID: Instant messaging screen name (max of 255 characters)
	street (max of 50 characters)
	address2 (max of 255 characters)
	city (max of 50 characters)
	state: State or province (max of 50 characters)
	zip (max of 10 characters)
	country: Lower-case with underscores (white list)
	company (max of 255 characters)
	language: Preferred language (English, Traditional_Chinese, Simplified_Chinese, Bahasa_Malayu, Korean, Japanese, Vietnamese, Thai, Tagalog)
	accountType: Account type (individual, joint, corporate, partnership, trust)
	balance: Initial balance of the demo account (maximum of 13 digits before the decimal and 2 after)
	accounts: Number of accounts to create (1-9999)
	margin: Expected margin (0, less50000, 50000_100000, more100000)
	deposit: Intended funding amount for the future account (5000_24999, 25000_49999, 50000_99999, 100000_inf)
	traderType: Type of trader (individual_investor, high_volume_trader, manager, ib_regulated_introducing_broker, ib_service_provider)
	forexExperience: Years trading forex (0, 1, 2, 3, 4, 5+)
	equitiesExperience: Years trading equities (0, 1, 2, 3, 4, 5+)
	futuresExperience: Years trading futures (0, 1, 2, 3, 4, 5+)
	experienceLevel: Level of FX experience (Novice, Intermediate, Expert)
	tradingFrequency: How often the client will be trading FX (Never, Daily, Weekly, Occasionally)
	reference: Where the client heard about us (max of 255 characters)
	previousSignup: Whether or not the client has signed up before (yes, no)
	freeProduct: Whether or not the client wants to receive a free product (yes, no)
	emailSignup: Email opt-in (yes, no)
	*/
	this.submit = function(clientInfo, callback) {
		var errors = [];

		/**** BEGIN check for submit being called with a form as the first parameter ****/
		// Dereference an ID
		if (typeof clientInfo === 'string') {
			clientInfo = document.getElementById(clientInfo);
			if (clientInfo === null) {
				errors.push('Form ID does not exist in the DOM');
				return errors;
			}
		}

		// If clientInfo is a DOM element, confirm that it's a form then reinvoke submit with the scraped data
		if (fxcm.lib.isDOMElement(clientInfo)) {
			if (clientInfo.tagName === 'FORM') {
				return _submitHandler.call(clientInfo, callback);
			} else {
				errors.push('First parameter was a DOM element (or its id) that was not a form');
				return errors;
			}
		}
		/***** END check for submit being called with a form as the first parameter *****/

		// Check that client info was passed in
		if (typeof clientInfo !== 'object') {
			errors.push('No client info');
			return errors;
		}

		// Check for an rb being passed in with the clientInfo
		if (typeof clientInfo['rb'] === 'string') {
			thatDemo.setRB(clientInfo['rb']);
			delete clientInfo['rb'];
		}

		// Check for a currency being passed in with the clientInfo
		if (typeof clientInfo['currency'] === 'string') {
			thatDemo.setCurrency(clientInfo['currency']);
			delete clientInfo['currency'];
		}

		// Check for a broken RB and set db
		if (!_settings.rb) {
			errors.push('No RB defined');
		} else {
			var db = thatDemo.setDB(_settings.rb, _settings.currency);
			if (!db) { errors.push('No DB set for this RB'); }
		}

		// Check for a hardcoded campaign
		if (typeof clientInfo['cmp'] !== 'undefined') {
			thatDemo.setCampaign(clientInfo['cmp']);
			delete clientInfo['cmp'];
		} else if (typeof clientInfo['CAMPAIGN_ID'] !== 'undefined') {
			thatDemo.setCampaign(clientInfo['CAMPAIGN_ID']);
			delete clientInfo['CAMPAIGN_ID'];
		} else if (typeof clientInfo['campaign'] !== 'undefined') {
			thatDemo.setCampaign(clientInfo['campaign']);
			delete clientInfo['campaign'];
		}

		// Check for a hardcoded elqFormName implying that the Eloqua form should be coregistered
		if (typeof clientInfo['elqFormName'] !== 'undefined') {
			thatDemo.addEloquaSubmissionTarget(clientInfo['elqFormName']);
			delete clientInfo['elqFormName'];
		}

		// Validate clientInfo
		for (var field in fxcm.Demo.prototype._demoFieldMap) {
			if (typeof clientInfo[field] !== 'undefined') {
				if (!fxcm.Demo.prototype._demoFieldMap[field].validation.call(this, clientInfo[field])) {
					errors.push('Invalid ' + fxcm.Demo.prototype._demoFieldMap[field].humanName);
				}
			} else if (fxcm.Demo.prototype._demoFieldMap[field].required) {
				errors.push('Missing ' + fxcm.Demo.prototype._demoFieldMap[field].humanName);
			}
		}

		if (errors.length > 0) { return errors; }

		// cache conversion data to be used
		thatDemo.setConversionData(_settings.rb);

		var returnValue = _submitRequests(clientInfo, callback);

		return returnValue;
	};

	function _dbLookup(rb, currency){
		if (typeof rb === 'undefined') { rb = _settings.rb; }
		if (typeof rb !== 'string' || typeof fxcm.registration.demoRBMap[rb] !== 'object') { return false; }

		var _item,
			_databases = fxcm.registration.demoRBMap[rb].db,
			_selectedDB = _databases[currency]; // select proper database according to requested currency

		if (!_selectedDB) { // No support for requested currency. Auto-select a supported currency/db pair instead
			if (typeof _databases === 'string') { // check for rbs coded in legacy format. In this case, return "unknown" for currency
				_selectedDB = _databases;
				currency = thatDemo.setCurrency('unknown');
			} else {
				for (_item in _databases) {
					_selectedDB = _databases[_item];
					currency = thatDemo.setCurrency(_item);
					break;
				}
			}
		}

		return _selectedDB;
	}

	function _submitRequests(clientInfo, callback) {
		var returnValue, submissionTarget,
		conversionData = thatDemo.getConversionData();

		if (typeof _settings.submissionTarget !== 'string') {	// The FXTR Status Check hasn't returned nor timed out, so queue requests
			_requestsQueue.push(function() { return _submitRequests(clientInfo, callback); });

			return true;
		} else {
			returnValue = false;

			while (_requestsQueue.length > 0) {	// Earlier requests were queued while waiting for the FXTR Status Check
				returnValue = _requestsQueue.shift().call(this);
			}

			if (typeof clientInfo === 'undefined') {	// This invocation was only intended to submit the requests in the queue
				return returnValue;
			}

			// Submit requests
			if (typeof fxcmdebug === 'object' && typeof fxcmdebug.demo === 'object' && typeof fxcmdebug.demo.submissionTarget === 'string') {	// We're in debug mode
				submissionTarget = fxcmdebug.demo.submissionTarget;
			} else {	// Production use case
				submissionTarget = _settings.submissionTarget;
			}

			if (submissionTarget === 'fxtr') {
				returnValue = _submitToFXTR(clientInfo, callback);
			} else {
				returnValue = _submitToEloqua(clientInfo, callback);
			}

			if (returnValue) {
				_submitToAdditionalTargets(clientInfo);

				// Fire off tracking requests
				amplify.publish('fxcm.form.onDemoComplete', {
					'formName': _settings.formName,
					'rb': _settings.rb,
					'db': _settings.db,
					'platform': conversionData.platform || 'n/a',
					'currency': _settings.currency || 'n/a',
					'formCountry': clientInfo.country || 'n/a',
					'product': conversionData.product || 'n/a'
				});

				// TODO set siteID via GTM
			}

			return returnValue;
		}
	}

	function _submitToFXTR(clientInfo, callback) {
		// Build the request URL base
		var requestURL = [thatDemo.FXTRSubmissionURL, '&rb=', _settings.rb, '&DB=', _settings.db];

		// Add clientInfo parameters
		for (var field in fxcm.Demo.prototype._demoFieldMap) {
			if (typeof clientInfo[field] !== 'undefined' && typeof fxcm.Demo.prototype._demoFieldMap[field].fxtrName === 'string') {
				requestURL.push('&demo.', fxcm.Demo.prototype._demoFieldMap[field].fxtrName, '=', clientInfo[field]);
			}
		}

		// Add the campaign
		if (typeof _settings.campaign === 'string') {
			requestURL.push('&cmp=', _settings.campaign, '&tid=', thatDemo.generateTransactionID());
		}

		// Add the form name
		if (typeof _settings.formName === 'string' && _settings.formName !== '') {
			requestURL.push('&coReg=', _settings.formName);
		}

		// Setup the callback
		var callbackName = fxcm.lib.generateFunctionName(fxcm.lib.generateNumericID());
		window[callbackName] = callback || _FXTRCallback;
		requestURL.push('&callback=', callbackName);

		// Submit the request
		fxcm.lib.getScript(requestURL.join(''));

		return true;
	}

	function _FXTRCallback(data) {
		if (data.errors.length === 0) {
			if (typeof _settings.successCallback === 'function') {
				_settings.successCallback.call(this, data.username, data.password, thatDemo.getConversionData());
			}

			return true;
		} else {
			if (typeof _settings.errorCallback === 'function') {
				_settings.errorCallback.call(this, data.errors);
			}

			return false;
		}
	}

	function _submitToEloqua(clientInfo, callback) {
		var eloquaFormName = thatDemo.EloquaMaintenanceFormName || false;
		if (!eloquaFormName) { return false; }

		// Build the submitData object
		var submitData = {};
		for (var field in fxcm.Demo.prototype._demoFieldMap) {
			if (typeof clientInfo[field] !== 'undefined' && typeof fxcm.Demo.prototype._demoFieldMap[field].eloquaName === 'string') {
				switch(field) {
					case 'address':
						var fieldValue = clientInfo[field] + ' ' + (typeof clientInfo['address2'] === 'string' ? clientInfo['address2'] : '');
						break;

					case 'emailSignup':
						var fieldValue = clientInfo[field] === 'yes' ? 'Y' : 'N';
						break;

					default:
						var fieldValue = clientInfo[field];
						break;
				}
				submitData[fxcm.Demo.prototype._demoFieldMap[field].eloquaName] = fieldValue;
			} else if (field === 'emailSignup') {
				// Eloqua requires that we pass N if the box was unchecked, but unchecked boxes aren't passed at all by default, so we add it if it was missing
				submitData[fxcm.Demo.prototype._demoFieldMap[field].eloquaName] = 'N';
			}
		}

		// Add the RB
		if (typeof _settings.rb === 'string') {
			submitData['rb'] = _settings.rb;
		}

		// Add the DB
		if (typeof _settings.db === 'string') {
			submitData['DB'] = _settings.db;
		}

		// Add the campaign  (formatted for eloqua)
		if (typeof _settings.campaign === 'string') {
			submitData['CAMPAIGN_ID'] = _settings.campaign;
		}

		// Add the cmp and tid (formatted for FXDR)
		if (typeof _settings.campaign === 'string') {
			submitData['cmp'] = _settings.campaign;
			submitData['tid'] = thatDemo.generateTransactionID();
		}
		// Add the form name
		if (typeof _settings.formName === 'string') {
			submitData['CoReg'] = _settings.formName;
		}

		// Submit the request
		var eloquaRequest = new fxcm.Eloqua;
		eloquaRequest.setFormName(eloquaFormName);
		return eloquaRequest.submit(submitData, callback || _eloquaCallback);
	}

	function _eloquaCallback() {
		if (typeof _settings.successCallback === 'function') {
			_settings.successCallback.call(this);
		}

		return true;
	}

	function _submitToAdditionalTargets(clientInfo) {
		var submissionFunctions = {
				get: fxcm.lib.getURL,
				JSONP: fxcm.lib.getScript
			};

		for (var targetType in _settings.submissionTargets) {
			for (var targetIndex = 0; targetIndex < _settings.submissionTargets[targetType].length; targetIndex++) {
				var submissionTarget = _settings.submissionTargets[targetType][targetIndex];

				var submissionData = {};
				for (var field in clientInfo) {
					// Map field values
					if (typeof submissionTarget.valueMap === 'object' && typeof submissionTarget.valueMap[field] === 'object' && typeof submissionTarget.valueMap[field][clientInfo[field]] !== 'undefined') {
						clientInfo[field] = submissionTarget.valueMap[field][clientInfo[field]];
					}

					// Map field names
					if (typeof submissionTarget.fieldMap === 'object' && typeof submissionTarget.fieldMap[field] === 'string') {
						submissionData[submissionTarget.fieldMap[field]] = clientInfo[field];
					} else if (submissionTarget.extendOriginalFields) {
					// if extendOriginalFields is true, try to find the proper mapping for the current value, otherwise, drop the current field from this submissionTarget's data
						if (targetType === 'eloqua' && typeof fxcm.Demo.prototype._demoFieldMap[field] === 'object' && typeof fxcm.Demo.prototype._demoFieldMap[field].eloquaName === 'string') {
							submissionData[fxcm.Demo.prototype._demoFieldMap[field].eloquaName] = clientInfo[field];
						} else {
							submissionData[field] = clientInfo[field];
						}
					}
				}

				if (typeof submissionTarget.additionalData === 'object') {
					for (var field in submissionTarget.additionalData) {
						submissionData[field] = submissionTarget.additionalData[field];
					}
				}

				if (targetType === 'eloqua') {
					var eloquaSubmission = new fxcm.Eloqua();
					eloquaSubmission.setFormName(submissionTarget.formName);
					eloquaSubmission.submit(submissionData, submissionTarget.callback);
				} else if (targetType === 'get' || targetType === 'JSONP') {
					var submissionURL = [submissionTarget.target];
					if (submissionTarget.target.indexOf('?') === -1) {
						submissionURL.push('?');
					}

					for (var field in submissionData) {
						submissionURL.push('&', field, '=', submissionData[field]);
					}

					submissionFunctions[targetType].call(this, submissionURL.join(''), submissionTarget.callback);
				} else if (targetType === 'post') {
					fxcm.lib.ajaxPost(submissionTarget.target, submissionData, submissionTarget.callback);
				}
			}
		}

		return true;
	}

	function _defaultSuccessCallback(username, password) {
		/*
		if (typeof username === 'string' && typeof password === 'string') {
			console.log('user: ' + username + "\npass: " + password);
		} else {
			console.log('Successful non-FXTR submission!');
		}
		*/
	}

	function _defaultErrorCallback(errors) {
		//console.log(errors);
	}

	this.iframeLoad = function(iframe, layout) {
		// Fallback to default iframe id
		if (typeof iframe === 'undefined') {
			iframe = 'demo_reg';
		}

		// Dereference an id
		if (typeof iframe === 'string') {
			iframe = document.getElementById(iframe);
		}

		// Check that iframe is actually an iFrame
		if (!(fxcm.lib.isDOMElement(iframe) && iframe.tagName === 'IFRAME')) {
			return false;
		}

		// Check that the rb has been set
		if (!_settings.rb) { return false; }

		// Check that the db is in our list
		var db = _dbLookup(_settings.rb);
		if (!db) { return false; }

		var iframeURL = [thatDemo.FXTRiframeURL, '?ib=', _settings.rb, '&DB=', _settings.db];

		if (typeof layout === 'string') {
			iframeURL.push('&layout=', layout);
		}

		var sessionID = fxcm.lib.getURLParameter('jsessionid') || fxcm.lib.readCookie('JSESSIONID');
		var transactionID = fxcm.lib.getURLParameter('tid') || fxcm.lib.readCookie('tid') || thatDemo.generateTransactionID(sessionID);
		iframeURL.push('&tid=', transactionID);

		// Add the Campaign ID
		if (typeof _settings.campaign === 'string') {
			iframeURL.push('&cmp=', _settings.campaign);
		}

		var keyword = fxcm.lib.getURLParameter('keyword') || fxcm.lib.readCookie('keyword');
		if (keyword) {
			iframeURL.push('&keyword=', keyword);
		}

		iframe.src = iframeURL.join('');
	};

	// Constructor logic
	thatDemo.checkFXTRStatus();
	thatDemo.setRB(rb) || thatDemo.setCountryAccountType('united_kingdom', 'ts');
	thatDemo.setDB(_settings.rb, currency);
	thatDemo.setConversionData();
	thatDemo.setSuccessCallback(successCallback || _defaultSuccessCallback);
	thatDemo.setErrorCallback(_defaultErrorCallback);
	thatDemo.setCampaign(_getCampaign());
	thatDemo.bind(form);
};

fxcm.Demo.prototype.FXTRStatusURL = (document.location.protocol.substring(0,4) === 'http' ? '' : 'https:') + '//static.fxcm.co.uk/status/fxtr.php';
fxcm.Demo.prototype.FXTRSubmissionURL = 'https://secure4.fxcorporate.com/tr-demo/form/service/?format=jsonp';
fxcm.Demo.prototype.FXTRiframeURL = 'https://secure4.fxcorporate.com/fxtr/demo';
fxcm.Demo.prototype.EloquaMaintenanceFormName = 'FXCMDEMOMaintenanceUniversal';

fxcm.Demo.prototype.generateTransactionID = function(sessionID) {
	if (typeof sessionID === 'number') { sessionID = String(sessionID); }

	if (typeof sessionID !== 'string') {
		var suffixLength = 17;
		sessionID = fxcm.lib.padLeft(fxcm.lib.generateNumericID(suffixLength), '0', suffixLength);
	}

	var now = new Date();
	var transactionID = [fxcm.lib.padLeft(now.getFullYear() % 100, '0', 2),
		fxcm.lib.padLeft(now.getMonth() + 1, '0', 2),
		fxcm.lib.padLeft(now.getDate(), '0', 2),
		'_',
		sessionID];

	return transactionID.join('');
};

fxcm.Demo.prototype.isValidName = function(name) {
	return typeof name === 'string' && name.length <= 50;
};

fxcm.Demo.prototype.isValidEmail = function(email) {
	return fxcm.lib.isValidEmail(email) && email.length <= 50;
};

fxcm.Demo.prototype._demoPhoneRegEx = /^[+()_,.:a-zA-Z\-=0-9 *]{0,20}$/i;
fxcm.Demo.prototype.isValidPhone = function(phone) {
	return typeof phone === 'string' && (phone === '' || fxcm.Demo.prototype._demoPhoneRegEx.test(phone)) && phone.length <= 20;
};

fxcm.Demo.prototype._demoIMNetworks = ['', 'aol', 'yahoo', 'icq', 'msn', 'other'];
fxcm.Demo.prototype.isValidIMNetwork = function(imNetwork) {
	return typeof imNetwork === 'string' && fxcm.Demo.prototype._demoIMNetworks.indexOf(imNetwork) >= 0;
};

fxcm.Demo.prototype.isValidIMID = function(imID) {
	return typeof imID === 'string' && imID.length <= 255;
};

fxcm.Demo.prototype.isValidStreet = function(street) {
	return typeof street === 'string' && street.length <= 50;
};

fxcm.Demo.prototype.isValidAddress2 = function(address) {
	return typeof address === 'string' && address.length <= 255;
};

fxcm.Demo.prototype.isValidCity = function(city) {
	return typeof city === 'string' && city.length <= 50;
};

fxcm.Demo.prototype.isValidState = function(state) {
	return typeof state === 'string' && state.length <= 50;
};

fxcm.Demo.prototype.isValidZip = function(zip) {
	return (typeof zip === 'string' || typeof zip === 'number') && String(zip).length <= 10;
};

fxcm.Demo.prototype._demoCountryRegEx = /^[a-z_]*$/;
fxcm.Demo.prototype.isValidCountry = function(country) {
	// We don't include the white list here for forward-compatibility.  The only assumption is that all countries will continue to be lower case with _'s in place of spaces.
	return typeof country === 'string' && fxcm.Demo.prototype._demoCountryRegEx.test(country);
};

fxcm.Demo.prototype.isValidCompany = function(company) {
	return typeof company === 'string' && company.length <= 255;
};

fxcm.Demo.prototype._demoLanguages = ['', 'English', 'Traditional_Chinese', 'Simplified_Chinese', 'Bahasa_Malayu', 'Korean', 'Japanese', 'Vietnamese', 'Thai', 'Tagalog'];
fxcm.Demo.prototype.isValidLanguage = function(language) {
	return typeof language === 'string' && fxcm.Demo.prototype._demoLanguages.indexOf(language) >= 0;
};

fxcm.Demo.prototype._demoAccountTypes = ['', 'individual', 'joint', 'corporate', 'partnership', 'trust'];
fxcm.Demo.prototype.isValidAccountType = function(accountType) {
	return typeof accountType === 'string' && fxcm.Demo.prototype._demoAccountTypes.indexOf(accountType) >= 0;
};

fxcm.Demo.prototype._demoBalanceRegEx = /^\d{0,13}(\.\d{0,2})?$/;
fxcm.Demo.prototype.isValidBalance = function(balance) {
	return fxcm.Demo.prototype._demoBalanceRegEx.test(balance);
};

fxcm.Demo.prototype._demoAccountsRegEx = /^\d{1,4}$/;
fxcm.Demo.prototype.isValidAccounts = function(accounts) {
	return fxcm.Demo.prototype._demoAccountsRegEx.test(accounts) && accounts > 0;
};

fxcm.Demo.prototype._demoMargins = ['', '0', 'less50000', '50000_100000', 'more100000'];
fxcm.Demo.prototype.isValidMargin = function(margin) {
	return typeof margin === 'string' && fxcm.Demo.prototype._demoMargins.indexOf(margin) >= 0;
};

fxcm.Demo.prototype._demoDeposits = ['', '5000_24999', '25000_49999', '50000_99999', '100000_inf'];
fxcm.Demo.prototype.isValidDeposit = function(deposit) {
	return typeof deposit === 'string' && fxcm.Demo.prototype._demoDeposits.indexOf(deposit) >= 0;
};

fxcm.Demo.prototype._demoTraderTypes = ['', 'individual_investor', 'high_volume_trader', 'manager', 'ib_regulated_introducing_broker', 'ib_service_provider'];
fxcm.Demo.prototype.isValidTraderType = function(traderType) {
	return typeof traderType === 'string' && fxcm.Demo.prototype._demoTraderTypes.indexOf(traderType) >= 0;
};

fxcm.Demo.prototype._demoYearsForexExperience = ['0', '1', '2', '3', '4', '5+'];
fxcm.Demo.prototype.isValidForexExperience = function(forexExperience) {
	return typeof forexExperience === 'string' && (forexExperience === '' || fxcm.Demo.prototype._demoYearsForexExperience.indexOf(forexExperience) >=0);
};

fxcm.Demo.prototype._demoYearsEquitiesExperience = ['0', '1', '2', '3', '4', '5+'];
fxcm.Demo.prototype.isValidEquitiesExperience = function(equitiesExperience) {
	return typeof equitiesExperience === 'string' && (equitiesExperience === '' || fxcm.Demo.prototype._demoYearsEquitiesExperience.indexOf(equitiesExperience) >=0);
};

fxcm.Demo.prototype._demoYearsFuturesExperience = ['0', '1', '2', '3', '4', '5+'];
fxcm.Demo.prototype.isValidFuturesExperience = function(futuresExperience) {
	return typeof futuresExperience === 'string' && (futuresExperience === '' || fxcm.Demo.prototype._demoYearsFuturesExperience.indexOf(futuresExperience) >=0);
};

fxcm.Demo.prototype._demoExperienceLevels = ['', 'Novice', 'Intermediate', 'Expert'];
fxcm.Demo.prototype.isValidExperienceLevel = function(experienceLevel) {
	return typeof experienceLevel === 'string' && fxcm.Demo.prototype._demoExperienceLevels.indexOf(experienceLevel) >= 0;
};

fxcm.Demo.prototype._demoTradingFrequencies = ['', 'Never', 'Daily', 'Weekly', 'Occasionally'];
fxcm.Demo.prototype.isValidTradingFrequency = function(tradingFrequency) {
	return typeof tradingFrequency === 'string' && fxcm.Demo.prototype._demoTradingFrequencies.indexOf(tradingFrequency) >= 0;
};

fxcm.Demo.prototype.isValidReference = function(reference) {
	return typeof reference === 'string' && reference.length <= 255;
};

fxcm.Demo.prototype.isValidPreviousSignup = function(previousSignup) {
	return previousSignup === 'yes' || previousSignup === 'no';
};

fxcm.Demo.prototype.isValidFreeProduct = function(freeProduct) {
	return freeProduct === 'yes' || freeProduct === 'no';
};

fxcm.Demo.prototype.isValidEmailSignup = function(emailSignup) {
	return emailSignup === 'yes' || emailSignup === 'no';
};

fxcm.Demo.prototype._demoFieldMap = {
	firstName: {
		fxtrName: 'firstname',
		eloquaName: 'FNAME',
		validation: fxcm.Demo.prototype.isValidName,
		humanName: 'first name',
		required: false
	},
	lastName: {
		fxtrName: 'lastname',
		eloquaName: 'LNAME',
		validation: fxcm.Demo.prototype.isValidName,
		humanName: 'last name',
		required: true
	},
	email: {
		fxtrName: 'email_address',
		eloquaName: 'EMAIL',
		validation: fxcm.Demo.prototype.isValidEmail,
		humanName: 'e-mail address',
		required: true
	},
	phone: {
		fxtrName: 'phone',
		eloquaName: 'PHONE',
		validation: fxcm.Demo.prototype.isValidPhone,
		humanName: 'phone number',
		required: false
	},
	phone2: {
		fxtrName: 'alternative_phone',
		validation: fxcm.Demo.prototype.isValidPhone,
		humanName: 'alternative phone number',
		required: false
	},
	imNetwork: {
		fxtrName: 'im_provider',
		validation: fxcm.Demo.prototype.isValidIMNetwork,
		humanName: 'IM network',
		required: false
	},
	imID: {
		fxtrName: 'im_id',
		validation: fxcm.Demo.prototype.isValidIMID,
		humanName: 'IM screen name',
		required: false
	},
	street: {
		fxtrName: 'residental_address',  // Misspelled within the web service
		eloquaName: 'address',
		validation: fxcm.Demo.prototype.isValidStreet,
		humanName: 'street',
		required: false
	},
	address2: {
		fxtrName: 'address_misc',
		validation: fxcm.Demo.prototype.isValidAddress2,
		humanName: 'address 2',
		required: false
	},
	city: {
		fxtrName: 'city',
		eloquaName: 'city',
		validation: fxcm.Demo.prototype.isValidCity,
		humanName: 'city',
		required: false
	},
	state: {
		fxtrName: 'state_province',
		eloquaName: 'state',
		validation: fxcm.Demo.prototype.isValidState,
		humanName: 'state/province',
		required: false
	},
	zip: {
		fxtrName: 'zip_postal_code',
		eloquaName: 'zip',
		validation: fxcm.Demo.prototype.isValidZip,
		humanName: 'zip code',
		required: false
	},
	country: {
		fxtrName: 'country',
		eloquaName: 'COUNTRY',
		validation: fxcm.Demo.prototype.isValidCountry,
		humanName: 'country',
		required: true
	},
	company: {
		fxtrName: 'company_name',
		validation: fxcm.Demo.prototype.isValidCompany,
		humanName: 'company',
		required: false
	},
	language: {
		fxtrName: 'preferred_language',
		validation: fxcm.Demo.prototype.isValidLanguage,
		humanName: 'language',
		required: false
	},
	accountType: {
		fxtrName: 'desired_account_type',
		validation: fxcm.Demo.prototype.isValidAccountType,
		humanName: 'account type',
		required: false
	},
	balance: {
		fxtrName: 'initial_balance',
		validation: fxcm.Demo.prototype.isValidBalance,
		humanName: 'account balance',
		required: false
	},
	accounts: {
		fxtrName: 'number_accounts',
		validation: fxcm.Demo.prototype.isValidAccounts,
		humanName: 'number of accounts',
		required: false
	},
	margin: {
		fxtrName: 'expect_margin',
		validation: fxcm.Demo.prototype.isValidMargin,
		humanName: 'margin',
		required: false
	},
	deposit: {
		fxtrName: 'intended_amount',
		validation: fxcm.Demo.prototype.isValidDeposit,
		humanName: 'initial deposit',
		required: false
	},
	traderType: {
		fxtrName: 'which_describes_you',
		validation: fxcm.Demo.prototype.isValidTraderType,
		humanName: 'trader type',
		required: false
	},
	forexExperience: {
		fxtrName: 'trading_experiance_forex',	// Misspelled within the web service
		validation: fxcm.Demo.prototype.isValidForexExperience,
		humanName: 'years of forex trading experience',
		required: false
	},
	equitiesExperience: {
		fxtrName: 'trading_experiance_equities',	// Misspelled within the web service
		validation: fxcm.Demo.prototype.isValidEquitiesExperience,
		humanName: 'years of equities trading experience',
		required: false
	},
	futuresExperience: {
		fxtrName: 'trading_experiance_futures',	// Misspelled within the web service
		validation: fxcm.Demo.prototype.isValidFuturesExperience,
		humanName: 'years of futures trading experience',
		required: false
	},
	experienceLevel: {
		fxtrName: 'trading_experiance',	// Misspelled within the web service
		validation: fxcm.Demo.prototype.isValidExperienceLevel,
		humanName: 'forex trading experience level',
		required: false
	},
	tradingFrequency: {
		fxtrName: 'trading_frequency',
		validation: fxcm.Demo.prototype.isValidTradingFrequency,
		humanName: 'trading frequency',
		required: false
	},
	reference: {
		fxtrName: 'where_did_you_hear',
		validation: fxcm.Demo.prototype.isValidReference,
		humanName: 'reference',
		required: false
	},
	previousSignup: {
		fxtrName: 'previously_signed_up',
		validation: fxcm.Demo.prototype.isValidPreviousSignup,
		humanName: 'status of previous signup',
		required: false
	},
	freeProduct: {
		fxtrName: 'send_me_free_product',
		validation: fxcm.Demo.prototype.isValidFreeProduct,
		humanName: 'free product opt-in',
		required: false
	},
	emailSignup: {
		fxtrName: 'email_me_training_material',
		eloquaName: 'PROD_INFO_MKT',
		validation: fxcm.Demo.prototype.isValidEmailSignup,
		humanName: 'email opt-in',
		required: false
	}
};
fxcm.device = (function () {

	var settings = {

		// detect WURFL support since we're loading externally
		hasWURFL: typeof WURFL === 'object',

		// CSS breakpoints
		currentBreakpoint: undefined,
        currentState: undefined,
		breakpointMap: {
			mobile: 'screen and (max-width: 599px)',
			tablet: 'screen and (min-width: 600px) and (max-width: 1019px)',
			desktop: 'screen and (min-width: 1020px)'
		},

		// Device detection
		currentDevice: undefined,
        currentOS: undefined,
		isTouch: undefined
	},

	// public container
	devicePublic = {};

	/* ------------------------------
		PRIVATE & HELPER METHODS
	------------------------------ */

	function setBodyDataAttr(attrName, attrVal){
		$('body').attr('data-' + attrName, attrVal);
	}

	/*
	*	Verifies that we're working with a supported breakpoint name
	*	Accepts a string. Returns a boolean
	*	Valid breakpoints: 'mobile', 'tablet', 'desktop'
	*/
	function isValidBreakpoint(bp) {
		if (!bp || typeof bp !== 'string') { return false; }
		bp = bp.toLowerCase();
		return bp === 'mobile' || bp === 'tablet' || bp === 'desktop';
	}

	/*
	* 	Fire amplify event for entering or exiting a breakpoint
	*	Accepts: a valid breakpoint name (string) and a boolean to specify enter or exit event
	*	Amplify will provide the current breakpoint and current state within the callback
	*	Possible events: onEnterDesktop, onExitDesktop, onEnterTablet, onExitTablet, onEnterMobile, onExitMobile
	*/
	function publishEvent(bp, state){
		bp = bp.toLowerCase().charAt(0).toUpperCase() + bp.slice(1); // convert breakpoint to correct capitalization
		amplify.publish('fxcm.device.on' + state + bp, {breakpoint: bp, state: state});
		return true;
	}

    /**
     * Fires most current event
     * @returns {undefined}
     */
    function publishCurrentEvent() {
        publishEvent( settings.currentBreakpoint, settings.currentState );
    }

	// Sets the value of the current WURFL device.
	function setDevice(){
		var device;

		if (settings.hasWURFL) {
			switch( WURFL.form_factor ) {
				case 'Desktop':
					device = 'desktop';
					break;

				case 'Smartphone':
				case 'Feature Phone':
				case 'Other Mobile':
					device = 'phone';
					break;

				case 'Tablet':
					device = 'tablet';
					break;

				case 'Other non-Mobile':
				case 'App':
				case 'Smart-TV':
				case 'Robot':
					device = 'other';
					break;

				default:
					device = 'other';
			}
		}

		return settings.currentDevice = device;
	}

	/*
	*	Sets the WURFL is_mobile value
	*	Note - we're changing the terminology from WURFL's "is_mobile" to "isTouch" to avoid confusion with our enquire breakpoints of "mobile", "tablet", and "desktop"
	*/
	function setIsTouch(){
		if (settings.hasWURFL) {
			return settings.isTouch = WURFL.is_mobile;
		}
	}

    /*
     * Checks to see if the WURFL.complete_device_name contains "Apple" in the string and returns true or false.
     */
    function getIsApple() {
        if( settings.hasWURFL ) {
            var deviceName = WURFL.complete_device_name.toLowerCase();
            if( deviceName.indexOf( "apple" ) > -1 ) {
                return true;
            }
        }
        return false;
    }

    /*
     * Checks to see if the navigator.userAgent contains "android" in the string and returns true or false.
     */
    function getIsAndroid( ua ) {
        if( ua.indexOf( "android" ) > -1 ) {
            return true;
        }
        return false;
    }

    /*
     * Checks to see if the navigator.userAgent contains "silk" in the string and returns true or false.
     */
    function getIsKindle( ua ) {
        if( /\bsilk\b/.test(ua) ) {
            return true;
        }
        return false;
    }

    /*
     * Checks to see if the navigator.userAgent contains "windows" in the string and returns true or false.
     */
    function getIsWindows( ua ) {
        if( ua.indexOf( "windows" ) > -1 ) {
            return true;
        }
        return false;
    }

    /*
     * Checks to see if the navigator.userAgent contains "mac" in the string and returns true or false.
     */
    function getIsMacintosh( ua ) {
        if( ua.indexOf( "mac" ) > -1 ) {
            return true;
        }
        return false;
    }

    /**
     * Sets variable settings.currentOS and returns OS of device the user is viewing.
     * @returns {settings.currentOS|String}
     */
    function setOS() {
        // WURFL does a great job of simplifying touch and device names, but it doesn't return back specific cases that
        // navigator.userAgent can give us. So that's why, we are using WURFL for apple specific devices, and userAgent for everything else.
        var ua = navigator.userAgent.toLowerCase();
        var os = "unknown";

        // Check iOS
        if( getIsApple( ua ) ) {
            os = "ios";
        }
        // Check Android
        else if( getIsAndroid( ua ) ) {
            os = "android";
        }
        // Check Kindle
        else if ( getIsKindle( ua ) ) {
            os = "kindle";
        }
        // Check Windows
        else if( getIsWindows( ua ) ) {
            os = "windows";
        }
        // Check Mac
        else if( getIsMacintosh( ua ) ) {
            os = "macintosh";
        }

        return settings.currentOS = os;

    }

    /**
     * Device redirection for anchor links
     * Add the redirects you need directly onto the anchor tag by utilizing data attributes.
     * @param {object} element
     * @returns {undefined}
     */
    function registerDeviceRedirect( element ) {
        $( element ).click( function( e ) {
			$anchor = $( this );
			// First see which data parameters are passed. We need to get the object and convert it into a string to search through.
			var data = $anchor.data();
			data = JSON.stringify(data).toLowerCase();

			var url = "";
			var os = "";
			var hasRedirect = false;

			// Check if any of the parameters qualify, if so, we know we have a redirect
			if( data.indexOf( 'ios' ) > -1 && fxcm.device.getOS() === "ios" ) {
				hasRedirect = true;
				os = fxcm.device.getOS();
			}
			else if( data.indexOf( 'android' ) > -1 && fxcm.device.getOS() === "android" ) {
				hasRedirect = true;
				os = fxcm.device.getOS();
			}
			else if( data.indexOf( 'touch' ) > -1 &&  fxcm.device.isTouch() ) {
				hasRedirect = true;
				os = 'touch';
			}

			// If there is a redirect, then see if there are tablet or phone specific urls
			if( hasRedirect ) {
				if( $anchor.data( 'href-' + os + '-tablet' ) && fxcm.device.getDevice() === "tablet" ) {
					url = $anchor.data( 'href-' + os + '-tablet' );
				}
				else if( $anchor.data( 'href-' + os + '-phone' ) && fxcm.device.getDevice() === "phone" ) {
					url = $anchor.data( 'href-' + os + '-phone' );
				}
				else {
					url = $anchor.data( 'href-' + os );
				}
			}

			// If url is not empty, redirect the user
			if( url !== "" ) {
				e.preventDefault();
				// Tests whether they used ctrl+click to open in new tab or not
                // http://davidwalsh.name/window-open
                if( e.metaKey || e.ctrlKey || e.button === 1 ) {
                    window.open( url );
                }
                else {
                    window.location = url;
                }
				return false;
			}
		});
    }

	// initialize and cache WURFL values on page load
	function initialize() {
		var isTouch = setIsTouch();
		var device = setDevice();
        var os = setOS();

		$(document).ready(function(){
			setBodyDataAttr('isTouch', isTouch);
			setBodyDataAttr('device', device);
            setBodyDataAttr('os', os);
		});
	}

	/* -------------------------
		PUBLIC METHODS
	------------------------- */

	/*
	*	Sets or unset a breakpoint by passing in the string name and a boolean
	*	Usage:
	*		setBreakpoint('mobile', true) 	 ==> sets current breakpoint to mobile
	*		setBreakpoint('mobile', false) 	 ==> unsets mobile breakpoint
	*/
	devicePublic.setBreakpoint = function(bp, state){

		if ( !isValidBreakpoint(bp) ){ return false; }

		bp = bp.toLowerCase();

		if (state) { // Set body attr upon entering (but not exiting) a breakpoint
			setBodyDataAttr('breakpoint', bp);
		}

        state = state ?  'Enter' : 'Exit';

		publishEvent(bp, state); // Fire amplify event
		return settings.currentBreakpoint = bp,
               settings.currentState = state;

	};

	devicePublic.getBreakpoint = function(){
		return settings.currentBreakpoint;
	};

	/*
	*	Returns the condition attached to a particular breakpoint
	*	accepts a breakpoint name (string).
	*	returns breakpoint condition (string)
	*/
	devicePublic.getBreakpointSetting = function(bp) {
		if ( !bp || !isValidBreakpoint(bp) ) {
			return false;
		}

		return settings.breakpointMap[ bp.toLowerCase() ];
	};

	devicePublic.getDevice = function() {
		return settings.currentDevice;
	};

	// Returns a boolean value denoting whether current device is touch-enabled (mobile or tablet)
	devicePublic.isTouch = function() {
		return settings.isTouch;
	};

    devicePublic.getOS = function() {
        return settings.currentOS;
    };

    devicePublic.registerDeviceRedirect = function( element ) {
        registerDeviceRedirect( element );
    };

    devicePublic.publishCurrentEvent = function() {
        publishCurrentEvent();
    };

	// Call initialize method
	initialize();

	// Return public methods
	return devicePublic;

}());

fxcm.Eloqua = fxcm.lib.makeClass();
fxcm.Eloqua.prototype.init = function(formName, form, callback) {
	var thatEloqua = this;
	var _settings = {};
	
	this.setFormName = function(formName) {
		if (typeof formName !== 'string') { return false; }
		
		return _settings.formName = formName;
	};
	
	this.getFormName = function() {
		return _settings.formName;
	};
	
	this.setCallback = function(callback) {
		if (typeof callback !== 'function') { return false; }
		
		return _settings.callback = callback;
	};
	
	this.getCallback = function() {
		return _settings.callback;
	};
	
	this.bind = function(form, formName) {
		// Dereference an id
		if (typeof form === 'string') {
			form = document.getElementById(form);
		}
		
		// Confirm that "form" is a form
		if (!(fxcm.lib.isDOMElement(form) && form.tagName === 'FORM')) {
			return false;
		}
		
		// Capture the formName if it is present on the form or was passed in
		var formName = fxcm.lib.serializeForm(form)['elqFormName'] || formName;
		if (typeof formName === 'string') {
			thatEloqua.setFormName(formName);
		}
		
		// Attach submit handler
		return fxcm.lib.addEventHandler(form, 'submit', _submitHandler);
	};
	
	function _submitHandler(event) {
		// Scrape the form
		var formData = fxcm.lib.serializeForm(this);
		
		if (typeof event === 'object') {	// _submitHandler is handling a submit event
			thatEloqua.submit(formData);	// Submit the request
			
			return fxcm.lib.cancelEvent(event);	// Cancel the form submission
		} else {	// _submitHandler was manually invoked by submit because a form was passed in
			return thatEloqua.submit(formData, event);	// Submit the request, event is the callback in this case
		}
	}
	
	// Submits submissionData, an object of key/value pairs, and invokes callback after
	this.submit = function(submissionData, callback) {
		//**** BEGIN check for submit being called with a form as the first parameter ****
		// Dereference an ID
		if (typeof submissionData === 'string') {
			submissionData = document.getElementById(submissionData);
			if (submissionData === null) { return false; }
		}
		
		// If submissionData is a DOM element, confirm that it's a form then reinvoke submit with the scraped data
		if (fxcm.lib.isDOMElement(submissionData)) {
			if (submissionData.tagName === 'FORM') {
				return _submitHandler.call(submissionData, callback);
			} else {
				return false;
			}
		}
		//***** END check for submit being called with a form as the first parameter *****
		
		// If submissionData contains an elqFormName, override the setting
		if (typeof submissionData['elqFormName'] === 'string') {
			thatEloqua.setFormName(submissionData['elqFormName']);
			delete submissionData['elqFormName'];
		}
		
		// Confirm that formName has been set and submissionData is either undefined or a non-null object
		if (typeof _settings.formName !== 'string' ||	// The formName must be set
				!(
					typeof submissionData === 'undefined' || 	// Allow no submissionData to be passed in
					(typeof submissionData === 'object' && submissionData !== null)	// Otherwise submissionData must be a non-null object
				)
			) {
			return false;
		}
		
		// Build the request URL base
		var requestURL = [thatEloqua.submissionURL]
		
		// Add the Eloqua site ID
		requestURL.push('?elqSiteID=' + thatEloqua.elqSiteID);
		
		// Add the salesforce oid
		requestURL.push('&oid=' + thatEloqua.oid);

		// Add the Eloqua Form Name
		requestURL.push('&elqFormName=', _settings.formName);
		
		// Add submissionData parameters
		for (var field in submissionData) {
			requestURL.push('&', field, '=', submissionData[field]);
		}
		
		// Submit the request
		fxcm.lib.getURL(requestURL.join(''), callback || _settings.callback);
		
		return true;
	};
	
	// Constructor logic
	thatEloqua.setFormName(formName);
	thatEloqua.bind(form);
	thatEloqua.setCallback(callback);
};

fxcm.Eloqua.prototype.submissionURL = 'http://s202.t.eloqua.com/e/f2';
fxcm.Eloqua.prototype.elqSiteID = '202';
fxcm.Eloqua.prototype.oid = '00D30000000010t';
fxcm.iframe = new function() {
    var _settings = {};

    /**
     * Pass in any iframe object and it will determine the width and replace with an external button
     * @param {element} iframe
     * @returns {null}
     */
    this.activateResponsiveIframe = function( iframe ) {
        $iframe = iframe;
        $iframe.data( 'swapButton', '' );

        // onload, check iframe width
        if( _checkIframeWidth( $iframe ) ) {
            _swapIframe( $iframe, 'hide' );
        } else {
            _swapIframe( $iframe, 'show' );
        }

        amplify.subscribe( 'fxcm.device.onEnterDesktop', function() {
            if( _checkIframeWidth( $iframe ) ) {
                _swapIframe( $iframe, 'hide' );
            } else {
                _swapIframe( $iframe, 'show' );
            }
        } );

        amplify.subscribe( 'fxcm.device.onEnterTablet', function() {
            if( _checkIframeWidth( $iframe ) ) {
                _swapIframe( $iframe, 'hide' );
            } else {
                _swapIframe( $iframe, 'show' );
            }
        } );

        amplify.subscribe( 'fxcm.device.onEnterMobile', function() {
            if( _checkIframeWidth( $iframe ) ) {
                _swapIframe( $iframe, 'hide' );
            } else {
                _swapIframe( $iframe, 'show' );
            }
        } );

    };

    /**
     * Check Iframe width vs it's parent width
     * @param {element} iframe
     * @returns {Boolean}
     */
    function _checkIframeWidth( iframe ) {
        $iframe = iframe;
        var iframeWidth = $iframe.outerWidth( true );

        // If the iframe parent's width is less than the iframe's width, then rturn true
        if( $iframe.parent().outerWidth( true ) < iframeWidth ) {
            return true;
        }
        return false;
    }

    /**
     * Swaps Iframe out with Button
     * @param {element} iframe
     * @param {boolean} visibility
     * @returns {null}
     */
    function _swapIframe( iframe, visibility ) {
        $iframe = iframe;
        $swapButton = $iframe.data( 'swapButton' );

        if( $iframe.is( ':visible' ) && visibility === 'hide' ) {
            $iframe.hide();

            if( $swapButton !== '' ) {
                $swapButton.show();
            } else {
                $swapButton = _buildIframeSubstitute( iframe );
                $iframe.after( $swapButton );
            }
        } else if( $iframe.is( ':hidden' ) && visibility === 'show' ) {
            $iframe.show();
            $swapButton.hide();
        }
    }

    /**
     * Build Iframe external button that will substitute itself when it needs to
     * @param {element} iframe
     * @returns {fxcm.iframe._buildIframeSubstitute.buttonObject|_L1._buildIframeSubstitute.buttonObject}
     */
    function _buildIframeSubstitute( iframe ) {
        $iframe = iframe;
        var label = $iframe.data( 'label' );
        var href = $iframe.data( 'external-url' );

        // if external url is empty, grab the url from the src of the iframe.
        if( href === "" || href === undefined ) {
            href = $iframe.prop( 'src' );
        }

        // Build the button object that will replace our iframe
        var buttonObject = $( '<p />', {} );
        var buttonString = "<a href='" + href + "' class='btn btn-large btn-blue' target='_blank'>" + label + "<i class='ico ico-btn ico-external-lg'></i></a>";
        buttonObject.append( buttonString );

        // Store the button as a data variable within the iframe so we can easily reference the location later.
        $iframe.data( 'swapButton', buttonObject );

        return buttonObject;
    }

}();
"undefined"===typeof LimelightPlayerUtil&&("undefined"===typeof JSON&&(this.JSON={},function(){function z(c){return 10>c?"0"+c:c}function F(c){B.lastIndex=0;return B.test(c)?'"'+c.replace(B,function(c){var p=G[c];return"string"===typeof p?p:"\\u"+("0000"+c.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+c+'"'}function C(c,r){var p,l,s,D,m=n,h,g=r[c];g&&("object"===typeof g&&"function"===typeof g.toJSON)&&(g=g.toJSON(c));"function"===typeof u&&(g=u.call(r,c,g));switch(typeof g){case "string":return F(g);
case "number":return isFinite(g)?String(g):"null";case "boolean":case "null":return String(g);case "object":if(!g)return"null";n+=w;h=[];if("[object Array]"===Object.prototype.toString.apply(g)){D=g.length;for(p=0;p<D;p+=1)h[p]=C(p,g)||"null";s=0===h.length?"[]":n?"[\n"+n+h.join(",\n"+n)+"\n"+m+"]":"["+h.join(",")+"]";n=m;return s}if(u&&"object"===typeof u)for(D=u.length,p=0;p<D;p+=1)l=u[p],"string"===typeof l&&(s=C(l,g))&&h.push(F(l)+(n?": ":":")+s);else for(l in g)Object.hasOwnProperty.call(g,l)&&
(s=C(l,g))&&h.push(F(l)+(n?": ":":")+s);s=0===h.length?"{}":n?"{\n"+n+h.join(",\n"+n)+"\n"+m+"}":"{"+h.join(",")+"}";n=m;return s}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+z(this.getUTCMonth()+1)+"-"+z(this.getUTCDate())+"T"+z(this.getUTCHours())+":"+z(this.getUTCMinutes())+":"+z(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});
var E=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,B=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,n,w,G={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},u;"function"!==typeof JSON.stringify&&(JSON.stringify=function(c,r,p){var l;w=n="";if("number"===typeof p)for(l=0;l<p;l+=1)w+=" ";else"string"===typeof p&&(w=p);if((u=r)&&"function"!==
typeof r&&("object"!==typeof r||"number"!==typeof r.length))throw Error("JSON.stringify");return C("",{"":c})});"function"!==typeof JSON.parse&&(JSON.parse=function(c,n){function p(c,l){var m,h,g=c[l];if(g&&"object"===typeof g)for(m in g)Object.hasOwnProperty.call(g,m)&&(h=p(g,m),void 0!==h?g[m]=h:delete g[m]);return n.call(c,l,g)}var l;c=String(c);E.lastIndex=0;E.test(c)&&(c=c.replace(E,function(c){return"\\u"+("0000"+c.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(c.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return l=eval("("+c+")"),"function"===typeof n?p({"":l},""):l;throw new SyntaxError("JSON.parse");})}()),LimelightPlayerUtil=function(){function z(a,e,b,q,d){g(a,function(f){var v={service:{}};a.playlistService&&(v.service.playlistService=a.playlistService);a.metricsCollectionService&&(v.service.metricsCollectionService=a.metricsCollectionService);a.cuePointService&&(v.service.cuePointService=
a.cuePointService);a.beaconingService&&(v.service.beaconingService=a.beaconingService);return LimelightPlayer=DelvePlayer=f=f.createPlayer(e,b,q,d,v)})}function F(a,e,b,q){b.postStartSessionEvent();w(a,e,D,b,function(a,f){var e=f.mediaList[0],c=document.createElement("TABLE");c.style="border-style:none";var g=c.appendChild(document.createElement("TR")).appendChild(document.createElement("TD")).appendChild(document.createElement("A"));g.href="#";g.appendChild(document.createElement("IMG")).src=encodeURI(e.thumbnailImageUrl);
var k=c.appendChild(document.createElement("TR")).appendChild(document.createElement("TD"));k.style="text-align:center";k=k.appendChild(document.createElement("A"));k.href="#";k.appendChild(document.createTextNode("Click to play"));var t=function(){b.postPlayStateEvent(x.PLAY,0,function(){window.location=e.mobileUrls[0].mobileUrl});return!1};g.onclick=t;k.onclick=t;q(c)})}function C(a,e,b,q,d,f){w(a,q,h.htmlCodec,d,function(a,q){d.postStartSessionEvent();var c=q.mediaList[0],k=document.createElement("VIDEO");
k.src=encodeURI(c.mobileUrls[0].mobileUrl);k.width=e;k.height=b;k.poster=encodeURI(c.previewImageUrl);k.controls=!0;k.addEventListener("click",k.play);k.addEventListener("play",function(){d.postPlayStateEvent(x.PLAY,Math.round(1E3*k.currentTime));d.startHeartbeat({quality:a,getPosition:function(){return Math.round(1E3*k.currentTime)},isPlaying:function(){return!k.paused}})});k.addEventListener("pause",function(){k.ended||d.postPlayStateEvent(x.PAUSE,Math.round(1E3*k.currentTime));d.stopHeartbeat()});
k.addEventListener("ended",function(){d.postEvent(x.MEDIA_COMPLETE);d.stopHeartbeat()});var t=0;k.addEventListener("timeupdate",function(){var a=k.currentTime;if(k.seeking&&a!==t){var f=Math.round(1E3*t),e=Math.round(1E3*a);f!==e&&d.postEvent(x.SEEK,{offsetBefore:f,offsetAfter:e,heatmapDisplayed:!1,spectrumType:"",spectrumColor:0,relatedConcepts:""})}t=a});f(k)})}function E(a){a=a||{};a.wmode=a.wmode||"window";a.id=a.id||"limelight_player_"+Math.floor(1E9*Math.random());a.resources=a.resources||{};
a.resources.beaconingService=a.resources.beaconingService||p;a.resources.cuePointService=a.resources.cuePointService||r;a.resources.metricsCollectionService=a.resources.metricsCollectionService||c;a.resources.playlistService=a.resources.playlistService||u;a.resources.htmlPlayerLocation=a.resources.htmlPlayerLocation||h.loadingProtocol+l;a.resources.playerIframeLocation=a.resources.playerIframeLocation||h.loadingProtocol+s;return a}function B(a,e,b,q,d,f,v,c,g){var k=x.create(e.metricsCollectionService,
q,g);switch(g){case "iframe":return L(e,v,d,f,q,k,a);case "html":return z(e,v,d,f,null!==b?b:q);case "video":C(e,d,f,q,k,a);break;case "link":F(e,q,k,a);break;case "install-flash":h.Flash.canUpgrade?(e=!0===h.Flash.isActiveX?"ActiveX":"PlugIn",document.title=document.title.slice(0,47)+" - Flash Player Installation",n(a,"http://assets.delvenetworks.com/player/playerProductInstall.swf","MMredirectURL="+window.location+"&MMplayerType="+e+"&MMdoctitle="+document.title,d,f,v,c)):a('<table width="'+d+'" height="'+
f+'" bgcolor="black" style="background-color:black; margin-left:auto; margin-right:auto"><tr><td align="center" style="text-align:center; vertical-align:middle"><a href="http://www.adobe.com/go/getflash/" style="text-decoration:underline; color:white"><span style="font-size:12px; color:white">You need to have the latest version of Adobe Flash Player to view this content.<br/>Please click here to continue.</span></a></td></tr></table>')}return null}function n(a,e,b,q,d,f,c){var g="",h;if("string"===
typeof b)g=b;else if("object"===typeof b)for(h in b)g+=encodeURIComponent(h)+"="+encodeURIComponent(b[h])+"&";a('<object type="application/x-shockwave-flash" id="'+f+'" name="'+f+'" width="'+q+'" height="'+d+'" data="'+e+'"><param name="movie" value="'+e+'"/><param name="wmode" value="'+c+'"/><param name="allowScriptAccess" value="always"/><param name="allowFullScreen" value="true"/><param name="flashVars" value="'+g+'"/></object>');return document.getElementById(f)}function w(a,e,b,q,d){var f;e.mediaId?
f=a.playlistService+"/media/"+e.mediaId+"/getMobilePlaylistByMediaId?platform="+b:e.channelId?f=a.playlistService+"/channel/"+e.channelId+"/getFirstAvailableMobilePlaylistByChannelId?platform="+b:e.channelListId&&(f=a.playlistService+"/channel_list/"+e.channelListId+"/getFirstAvailableMobilePlaylistByChannelListId?platform="+b);M(f,function(a){a&&a.mediaList&&a.mediaList[0]?(a.id&&q.setChannelId(a.id),a.mediaList[0].mediaId&&q.setMediaId(a.mediaList[0].mediaId),0<a.mediaList[0].mobileUrls.length?
d(b,a):showError("Video Not Available For This Device")):showError("Video Not Available")})}function G(a){function e(a){return("object"===typeof a||"function"===typeof a)&&a.nodeType}if("undefined"===typeof a)return function(a){e(a)?document.body.appendChild(a):document.write(a)};"string"===typeof a&&(a=document.getElementById(a));if(e(a)){if("OBJECT"===a.nodeName){var b=a.parentNode,q=a.nextSibling,d=!1;return function(f){var c=document.createElement("DIV");e(f)?c.appendChild(f):c.innerHTML=f;d||
(b.replaceChild(c.firstChild,a),d=!0);for(;c.firstChild;)b.insertBefore(c.firstChild,q)}}return function(f){e(f)?a.appendChild(f):a.innerHTML+=f}}return null}var u="//production-ps.lvp.llnw.net/r/PlaylistService",c="//production-mcs.lvp.llnw.net/r/MetricsCollectionService",r="//cps.lvp.llnw.net/r/CuePointService",p="//production-eqbc.lvp.llnw.net",l="//videoplatform.limelight.com/player/html-player.js",s="//assets.delvenetworks.com/player/resources/iframe.html",D="Mobile3gp",m=navigator,h=function(){var a=
m.userAgent.toLowerCase(),e=m.platform.toLowerCase(),b=/android \d+\x2E\d+/.test(a),c=/android [2-9]+\x2E\d+/.test(a),d=/blackberry/.test(a);/playbook/.test(a);var f=/msie/.test(a),g=/msie\s\d\d/.test(a),h=/iemobile/.test(a),p=/ipad/.test(a),k=/iphone|ipad|ipod/.test(a),t=/silk/.test(a),H=/linux/.test(e?e:a),e=/opera mobi|opera tablet/.test(a),A=/fennec/.test(a),l=/symbian|series60/.test(a),n=/nintendo wiiu/.test(a),I=/mobile/.test(a)||b,d=b||k||t||d||l||e||A||n||h||I,h=[0,0,0];if(k&&(a=a.match(/os (.*) like mac os x/))&&
1<a.length){var h=[],a=a[1].split("_"),y;for(y in a)h.push(parseInt(a[y]));for(;3>h.length;)h.push(0)}y=function(){var a=document.createElement("VIDEO");return a.canPlayType?a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'):""}();A=(c||t||k)&&!A;c=function(){var a=document.createElement("VIDEO");return a.canPlayType?a.canPlayType("application/vnd.apple.mpegurl"):""}();t="probably"===c||k?"HttpLiveStreaming":"MobileH264";a=function(){var a=function(){var a=null;if("undefined"!==typeof m.plugins&&
"object"==typeof m.plugins["Shockwave Flash"]){if((a=m.plugins["Shockwave Flash"].description)&&("undefined"===typeof m.mimeTypes||!m.mimeTypes["application/x-shockwave-flash"]||m.mimeTypes["application/x-shockwave-flash"].enabledPlugin))return a=a.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),[parseInt(a.replace(/^(.*)\..*$/,"$1"),10),parseInt(a.replace(/^.*\.(.*)\s.*$/,"$1"),10),/[a-zA-Z]/.test(a)?parseInt(a.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0]}else if("undefined"!==typeof window.ActiveXObject)try{var f=
new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(f&&(a=f.GetVariable("$version")))return a=a.split(" ")[1].split(","),[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]}catch(e){}return[0,0,0]}();return function(f,e,b){return a[0]>f||a[0]==f&&(a[1]>e||a[1]==e&&a[2]>=b)}}();f={canUpgrade:!H&&a(6,0,65),H264:a(9,0,115),hasAdaptiveStreaming:a(10,0,0),isActiveX:f};b=f.H264&&!b?"flash":d?"probably"===y||A?e||k&&!p&&5>h[0]?"video":"html":"link":"install-flash";"install-flash"===b&&(g&&"assets.delvenetworks.com"!==
window.location.host)&&(b="iframe");return{Metrics:{H264:y,HLS:c},embedMode:b,htmlCodec:t,Flash:f,loadingProtocol:"https:"===document.location.protocol?"https:":"http:"}}(),g=function(){var a=[];return function(e,b){if(void 0!==LimelightPlayerUtil.Player)b(LimelightPlayerUtil.Player);else if(a.push(b),void 0===LimelightPlayerUtil.playerLoadedCallback){var c=document.getElementsByTagName("head")[0]||document.documentElement,d=document.createElement("SCRIPT");d.type="text/javascript";d.src=e.htmlPlayerLocation;
d.charset="utf-8";LimelightPlayerUtil.playerLoadedCallback=function(f){LimelightPlayerUtil.Player=f;delete LimelightPlayerUtil.playerLoadedCallback;c&&c.removeChild(d);a.forEach(function(a){a(f)});a=[]};d.onerror=function(){a.forEach(function(a){a(null)});a=[]};c.insertBefore(d,c.firstChild)}}}(),L=function(){var a=[];return function(e,c,g,d,f,h,p){function l(a){var f={},e;for(e in a)f[e]="object"===typeof a[e]&&a[e]?l(a[e]):a[e];return f}var k=document.createElement("IFRAME");k.id=c;k.width=g;k.height=
d;k.src=e.playerIframeLocation;k.style.border="none";p(k);var t=document.getElementById(c).contentWindow,H={},A={},n={},m=0,I={},y=0,s=1,r=null,J=null,K=void 0;window.addEventListener("message",function(c){var b,d=c.data.state;d&&(d.channelList&&(H=d.channelList),d.channel&&(A=d.channel),d.media&&(n=d.media),d.index&&(m=d.index),d.playState&&(I=d.playState),d.position&&(y=d.position),d.volume&&(s=d.volume),d.quality&&(r=d.quality),d.actualQuality&&(J=d.actualQuality),d.customEvents&&(K=d.customEvents));
switch(c.data.type){case "event":"function"===typeof limelightPlayerCallback?limelightPlayerCallback(c.data.id,c.data.eventName,c.data.data):"function"===typeof delvePlayerCallback&&delvePlayerCallback(c.data.id,c.data.eventName,c.data.data);break;case "init":t.postMessage({type:"init",embed:"../embed.js",flashVars:f,resourceLocations:e},"*");break;case "api":b={};for(var g in c.data.funcs){var d=c.data.funcs[g],h=function(a){return function(){t.postMessage({type:"func",name:a,args:Array.prototype.slice.call(arguments)},
"*")}}(d);b[d]=h}b.registerPlayer=function(){};b.getPlayers=function(){return a};b.doGetActualQuality=function(){return J?J.name:null};b.doGetQuality=function(){return r?r.name:null};b.doGetQualityDetails=function(){return l({actual:J,selected:r})};b.doGetCurrentIndex=function(){return m};b.doGetCurrentMedia=function(){return l(n)};b.doGetCurrentChannel=function(){return l(A)};b.doGetCurrentChannelList=function(){return l(H)};b.doGetCurrentPlayState=function(){return l(I)};b.doGetCustomEvents=function(){return l(K)};
b.doGetPlayheadPositionInMilliseconds=function(){return y};b.doSetVolume=function(){var a=b.doSetVolume;return function(b){b||(b=0);if("number"===typeof b)return 0>b&&(b=0),1<b&&(b=1),s=b,a(b)}}();b.doGetVolume=function(){return s};delete b.doGetChannels;delete b.doGetChannelMedia;b.getPlayer=function(){return b};b.getPlayerNodeByIdOrName=function(a){var b=document.getElementById(a);return b&&b.doPlay?b:(a=document.getElementsByName(a))&&null!=a.length?a[0]:null};LimelightPlayer=DelvePlayer=b;for(var q in b)k[q]=
b[q];a.push(b)}})}}(),x=function(){function a(a){var b=document.cookie.indexOf(a+"="),e=b+a.length+1;if(!b&&a!=document.cookie.substring(0,a.length)||-1==b)return null;a=document.cookie.indexOf(";",e);-1==a&&(a=document.cookie.length);return unescape(document.cookie.substring(e,a))}function e(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)}).toUpperCase()}function b(a,b){if(void 0!==a){var e=!1;return function(){e||
(e=!0,a.apply(b||this,arguments))}}}var c=e(),d={H264:h.Metrics.H264,HLS:h.Metrics.HLS},f=m.userAgent,g=m.platform,l=function(){var b=a("Limelight_Embed_Code_UserId");return function(){if(!b){var a=b=e(),d=365,c=new Date;c.setTime(c.getTime());d&&(d*=864E5);c=new Date(c.getTime()+d);document.cookie="Limelight_Embed_Code_UserId="+escape(a)+(d?";expires="+c.toGMTString():"")+""}return b}}(),p=function(){var a=+new Date;return function(){return new Date-a}}(),k=function(){var a=0;return function(b,e,
d){var c="_limelight_embed_ajax_"+a++,f=document.createElement("IFRAME");f.id=c;f.name=c;f.style.cssText="display:none;width:0px;height:0px;";(document.getElementsByTagName("body")[0]||document.documentElement).appendChild(f);var g=document.createElement("FORM");g.setAttribute("target",c);g.setAttribute("method","POST");g.setAttribute("action",b);for(field in e)b=document.createElement("INPUT"),b.setAttribute("type","hidden"),b.setAttribute("name",field),b.setAttribute("value",JSON.stringify(e[field])),
g.appendChild(b);f.appendChild(g);f.onload=function(){void 0!==d&&d();setTimeout(function(){f.parentNode.removeChild(f)},0)};g.submit()}}();return{HEARTBEAT:"Heartbeat",MEDIA_COMPLETE:"MediaComplete",PLAY:"Play",PAUSE:"Pause",SEEK:"Seek",START_SESSION:"StartSession",create:function(a,e,h){var n={},m=null;d.embedMode=h;var r={postEvent:function(b,d,f){var g={channelListId:n.channelListId||e.channelListId,channelId:n.channelId||e.channelId,mediaId:n.mediaId||e.mediaId,millisecondsElapsed:p()},h;for(h in g)void 0===
g[h]&&(g[h]="");for(h in d)g[h]=void 0===d[h]?"":d[h];k(a+"/recordMetricsEvent",{sourceInstanceId:c,source:"Limelight Embed Code",sourceVersion:1,eventType:b,data:g},f)},postStartSessionEvent:function(){this.postEvent(x.START_SESSION,{adConfigurationChannelId:e.adConfigurationChannelId,htmlCapabilities:JSON.stringify(d),pageURL:window.location.href,platform:g,playerProviderId:"Delve Networks",userAgent:f,userId:l(),version:"1.6"})},postPlayStateEvent:function(a,e,d){var c=b(d);this.postEvent(a,{positionInMilliseconds:e},
c);void 0!==d&&setTimeout(c,1E3)},setChannelListId:function(a){n.channelListId=a},setChannelId:function(a){n.channelId=a},setMediaId:function(a){n.mediaId=a},startHeartbeat:function(a){null!==m&&clearInterval(m);m=setInterval(function(){a.isPlaying()&&r.postEvent(x.HEARTBEAT,{droppedFrames:0,droppedFramesRatio:"",selectedMediaQuality:a.quality,positionInMilliseconds:a.getPosition(),maxBytesPerSecond:"",currentBitrate:""})},3E4)},stopHeartbeat:function(){null!==m&&clearInterval(m);m=null}};return r}}}(),
M=function(){var a=0;return function(e,b){var c="_"+a++;e+="&jsonp=LimelightPlayerUtil.jsonpCallback."+c;var d=document.getElementsByTagName("head")[0]||document.documentElement,f=document.createElement("SCRIPT");f.type="text/javascript";f.src=e;f.charset="utf-8";LimelightPlayerUtil.jsonpCallback[c]=function(a){delete LimelightPlayerUtil.jsonpCallback[c];b(a);d&&d.removeChild(f)};f.onerror=function(){b(null)};d.insertBefore(f,d.firstChild)}}();return{jsonpCallback:[],initEmbed:function(a,e){e=e||
{};var b=document.getElementById(a);if(null===b)return console&&(console.error&&"function"===typeof console.error)&&console.error("No such element: "+a),null;var c=b.width,d=b.height,f=b.firstChild;e.id=a;for(var g="",l={};null!==f;){if("PARAM"===f.nodeName)switch(f.name){case "flashVars":for(var g=f.value,l={},n=g.split("&"),k=0;k<n.length;k++){var m=n[k],p=m.indexOf("=");-1===p?l[decodeURIComponent(m)]="true":l[decodeURIComponent(m.substring(0,p))]=decodeURIComponent(m.substring(p+1))}break;case "wmode":e.wmode=
f.value}f=f.nextSibling}e=E(e);f=e.embedMode||h.embedMode;return"flash"!==f?(b=G(b),B(b,e.resources,g,l,c,d,e.id,e.wmode,f)):b},embedPlayer:function(a,c,b,g,d){d=G(d);g=E(g);var f=g.embedMode||h.embedMode;return"flash"===f?n(d,h.loadingProtocol+(h.Flash.hasAdaptiveStreaming?"//assets.delvenetworks.com/player/fp10loader.swf":"//assets.delvenetworks.com/player/fp9loader.swf"),a,c,b,g.id,g.wmode):B(d,g.resources,null,a,c,b,g.id,g.wmode,f)}}}());


fxcm.limelight = new function() {
	var _settings = {};

    /**
     * Replaces the object passed in with a rendered limelight video player
     * @param {object} videoElement
     * @returns {string} id
     */
    this.renderLimelightVideos = function( videoElement ) {

        $videoElement = videoElement;

        var id = _buildId( $videoElement );

        var video = _buildHTML( id, $videoElement.data( 'media-id' ) );

        $videoElement.replaceWith( video );

        LimelightPlayerUtil.initEmbed( id );

        $( ".LimelightEmbeddedPlayer" ).fitVids({ customSelector: "object, .limelight-player-footprint" });

        return id;
    };

    /**
     * Generate ID for the video player
     * @param {object} videoElement
     * @returns {_L39._buildId.id|String} id
     */
    function _buildId( videoElement ) {

        var id = 'limelight-player-' +  fxcm.lib.generateNumericID(7); // Limelight needs a unique id per video. Generate random ID based on date.

        if( $videoElement.data( 'autoplay' ) ) {
            id += '-limeautoplay';
        }

        return id;
    }

    /**
     * Build the html for the embedded limelight video player
     * @param {string} id
     * @param {number} mediaId
     * @returns {String|_L39._buildHTML.video} video
     */
    function _buildHTML( id, mediaId ) {
        var video = "";
        video +=        '<span class="LimelightEmbeddedPlayer ' + id + '">';
        video +=            '<object type="application/x-shockwave-flash" id="' + id + '" name="' + id + '" class="LimelightEmbeddedPlayerFlash" width="480" height="321" data="//video.limelight.com/player/loader.swf">';
        video +=                '<param name="movie" value="//video.limelight.com/player/loader.swf"/>';
        video +=                '<param name="wmode" value="transparent"/>';
        video +=                '<param name="allowScriptAccess" value="always"/>';
        video +=                '<param name="allowFullScreen" value="true"/>';
        video +=                '<param name="flashVars" value="mediaId=' + mediaId + '&amp;playerForm=0ab6003423ff4810ac7adbdc8db73be7"/>';
        video +=            '</object>';
        video +=        '</span>';

        return video;
    }

}();

/**
 * Limelight Callback for all videos. Each video runs through this function during many event states.
 * @param {Number} playerId
 * @param {String} eventName
 * @param {String} data
 * @returns null
 */
function limelightPlayerCallback (playerId, eventName, data) {

    switch(eventName) {
        case 'onPlayerLoad':
            break;
        case 'onMediaLoad':
            // Check if the id has limeautoplay and play the video on load
            if( playerId.indexOf("limeautoplay") > -1 ) {
                LimelightPlayer.registerPlayer( playerId );
                LimelightPlayer.doPlay();
            }
            break;
        case 'onChannelLoad':
          break;
        case 'onPlayStateChanged':
          break;
        case 'onPlayheadUpdate':
          break;
    }
}
fxcm.internal = new function() {
	var thatInternal = this;

	// Maps special characters to their non-special equivalents.
	this.specialCharMap = {
		'Ã ': 'a',
		'Ã¢': 'a',
		'Ã¤': 'ae',
		'Ã¦': 'ae',
		'Ã§': 'c',
		'Ã©': 'e',
		'Ã¨': 'e',
		'Ãª': 'e',
		'Ã«': 'e',
		'Ã®': 'i',
		'Ã¯': 'i',
		'Ã´': 'o',
		'Ã¶': 'oe',
		'Å“': 'oe',
		'Ã¹': 'u',
		'Ã»': 'u',
		'Ã¼': 'ue',
		'ÃŸ': 'ss',
		'Ã¿': 'y'
	};


	/* Concatenates all functions that are passed in and appends all strings as html within a div to the body
	Usage:

	var trackingFunction = fxcm.internal.trackingFactory(someFunction, '<img src="trackingPixel" />', trackingRelatedFunction);
	...
	trackingFunction();
	*/
	this.trackingFactory = function() {
		var outterArguments = arguments;

		return function() {
			for (var argumentIndex = 0; argumentIndex < outterArguments.length; argumentIndex++) {
				var outterArgument = outterArguments[argumentIndex];
				if (typeof outterArgument === 'string') {
					var trackingDiv = document.createElement('div');
					trackingDiv.innerHTML = outterArgument;
					trackingDiv.setAttribute('style', 'display: none');
					document.body.appendChild(trackingDiv);
				} else if (typeof outterArgument === 'function') {
					outterArgument.apply(this, arguments);
				}
			}
		};
	};

	// Generalized function for jQuery submitHandlers that redirect the user after form submission
	function _AJAXFormRedirectValidatorSubmitHandlerFactory(continuationFunction, redirectURL, id) {
		if (typeof redirectURL !== 'string') { return null; }

		var callback = function() { document.location.href = redirectURL; };

		var continuationArguments = fxcm.lib.shiftArray(arguments, 2);
		continuationArguments.unshift(callback);

		return continuationFunction.apply(this, continuationArguments);
	}

	/* Generalized function for creating jQuery Validator submitHandlers
	Class is the conversion type's class (fxcm.Eloqua or fxcm.Demo)
	callback is the callback function on success
	idSetter is the function for setting the conversion's id ('setFormName' or 'setRB')
	id is the conversion's id (the formName or the RB) */
	function _AJAXFormValidatorSubmitHandlerFactory(Class, successCallbackSetter, successCallback, idSetter, id, configFunction) {
		var outterArguments = arguments;


		return function(form) {

			$(form).find('input[type=submit], input[type=button], input[type=image]').attr({disabled: true});	// Disable the form to prevent multiple submissions

			var conversion = new Class();

			// set the ID
			if (typeof id === 'string') {
				conversion[idSetter].apply(this, fxcm.lib.shiftArray(outterArguments, 4));	// Remove all arguments before id
			}


			if (typeof successCallback === 'string') {	// Generic Eloqua
				var internalCallback = function() {
						var confBox = $('<div class="confBox" style="display:block">' + successCallback + '</div>');
						_copyClasses(form, confBox, '_conf');
						$(form).closest('.formBox').replaceWith(confBox);
					};
			} else if (typeof successCallback === 'object') {	// Generic Demo
				var internalCallback = function(username, password) {
						if (typeof username === 'string' && typeof password === 'string')  {
							var confText = successCallback.fxtr;
							confText = confText.replace('%username%', username).replace('%password%', password);
						} else {
							var confText = successCallback.eloqua;
						}
						var confBox = $('<div class="confBox" style="display:block">' + confText + '</div>');
						_copyClasses(form, confBox, '_conf');
						$(form).closest('.formBox').replaceWith(confBox);
					};
			} else if (typeof successCallback === 'function') {	// Non-generic
				var internalCallback = function() {
						Array.prototype.unshift.call(arguments, form);
						successCallback.apply(this, arguments);
					};
			} else {
				var internalCallback = function() {};
			}

			// Run the configuration function
			if (typeof configFunction === 'function') {
				configFunction(conversion);
			}

			conversion[successCallbackSetter].call(this, internalCallback);

			/****** Begin demo-specific logic ******/

			if (idSetter === 'setRB') { // If current form is a demo

				// Create logic for swapping characters
				function replaceSpecialChars(value){
					// Break field value into separate words, then run each word through the replace function, swapping out special chars while keeping original capitalization
					// Returns a string
					return $.map(value.split(' '), function(arrayPart, arrayIndex){

						// Begin regex replace
						return arrayPart.replace(/./g, function (character, index, word){

							var cleanChar = character; // if character is not a special char, we will return it unmodified
							var isLowerCase = character === character.toLowerCase();
							var adjacent = word.charAt(index + 1);

							// Replace character and figure out correct capitalization
							if (fxcm.internal.specialCharMap[character.toLowerCase()]) {
								cleanChar = fxcm.internal.specialCharMap[character.toLowerCase()]; // Find replacement character
								cleanChar = isLowerCase ? cleanChar : function(char, adj){ // Set proper capitalization
									return (char.length === 2 && adj !== '' && adj === adj.toLowerCase() ) ? // Check if this is a two-letter replacement that needs mixed case
										char.charAt(0).toUpperCase() + char.charAt(1) : // If yes, capitalize only the first letter
										char.toUpperCase();								// Otherwise, capitalize both letters
								}(cleanChar, adjacent);
							}

							return cleanChar;
						}); // End regex replace

					}).join(' '); // End $.map
				}

				// Scrape values from submitted form
				var originalForm = fxcm.lib.serializeForm(form);
				var sanitizedForm = document.createElement('form');
				sanitizedForm.setAttribute('name', form.name);
				var newField;

				// Swap out special chars and generate sanitized form to submit to fxcm.Demo
				for (field in originalForm) {
					var val = originalForm[field];

					if(val !== '') { // only bring over populated fields
						if (field.indexOf('demo.') > -1) { // replace special chars only for "demo." fields
							val = replaceSpecialChars(val);
						}
						newField = document.createElement('input');
						newField.name = field;
						newField.type = 'hidden';
						newField.value = val;
						sanitizedForm.appendChild(newField);
					}
				}
			}
			/****** End special character logic ******/

			// Submit - submits "sanitizedForm" in the case of demos and "form" in the case of eloqua
			conversion.submit(sanitizedForm || form);

		};
	}
	// Copies the classes from source to destination, optionally adding suffix
	function _copyClasses(source, destination, suffix) {
		if (typeof suffix !== 'string') { suffix = ''; }

		var classes = $(source).attr('class').split(' ');
		destination = $(destination);
		for (var classIndex = 0; classIndex < classes.length; classIndex++) {
			destination.addClass(classes[classIndex] + suffix);
		}
	}

	/********************* BEGIN Demo submitHandlers ****************/
	/* How to setup the jQuery Validate submitHandler for Demo forms

	Show the on-page confBox:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.confBoxDemoValidatorSubmitHandler;

	Show the generic Thank You text:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.genericDemoValidatorSubmitHandler;

	Custom callback function:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoValidatorSubmitHandlerFactory(yourFunction, optionalRB);

	Custom confirmation text:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoValidatorSubmitHandlerFactory('confirmationText', optionalRB);

	Redirect:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoRedirectValidatorSubmitHandlerFactory('redirectURL', optionalRB);

	Do nothing after submission:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoValidatorSubmitHandlerFactory();

	Show the on-page confBox with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.confBoxCountryDemoValidatorSubmitHandler;

	Show the generic Thank You text with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.genericCountryDemoValidatorSubmitHandler;

	Custom callback function with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoCountryValidatorSubmitHandlerFactory(yourFunction);

	Custom confirmation text with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoCountryValidatorSubmitHandlerFactory('confirmationText');

	Redirect with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoCountryRedirectValidatorSubmitHandlerFactory('redirectURL');

	Do nothing after submission with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoCountryValidatorSubmitHandlerFactory();

	Custom tracking on form submission:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.trackingFactory(fxcm.internal.confBoxDemoValidatorSubmitHandler, '<img src="trackingPixel" />', otherTrackingFunction); */



	/* Produces a submitHandler function for jQuery Validator on Demo forms
	The rb field can be left off the form if desired and instead passed in as the second parameter to demoValidatorSubmitHandlerFactory
	Usage:
	callback is not passed in (undefined): The form submits and no UI changes are made
	callback is a function: Invokes the callback after the form submits
	callback is text: Replaces the form with a confBox containing the text after the form submits */
	this.demoCountryRedirectValidatorSubmitHandlerFactory = function(redirectURL) {
		return _AJAXFormRedirectValidatorSubmitHandlerFactory(thatInternal.demoCountryValidatorSubmitHandlerFactory, redirectURL);
	};

	this.demoCountryValidatorSubmitHandlerFactory = function(callback) {
		return function(form) {
			var handler = _AJAXFormValidatorSubmitHandlerFactory(fxcm.Demo, 'setSuccessCallback', callback, 'setCountry', $(form).find('select[name=demo.country]').val());

			return handler(form);
		};
	};

	this.demoRedirectValidatorSubmitHandlerFactory = function(redirectURL, rb) {
		return _AJAXFormRedirectValidatorSubmitHandlerFactory(thatInternal.demoValidatorSubmitHandlerFactory, redirectURL, rb);
	};

	this.demoValidatorSubmitHandlerFactory = function(callback, rb, configFunction) {

		if (typeof rb === 'function' && configFunction === undefined) { // Did not pass in id but passed in configFunction
			configFunction = rb;
			rb = undefined;
		}

		return _AJAXFormValidatorSubmitHandlerFactory(fxcm.Demo, 'setSuccessCallback', callback, 'setRB', rb, configFunction);
	};

	// Hides the demo form and shows the confirmation div
	this.showDemoConfBox = function(form, username, password, conversionData) {
		
		var formParent = $(form).closest('.formBox');
		var confParent = formParent.next('.confBox');
		var serverEl = confParent.find('span.demoServer');
		
		// FXTR signup (username and password exist)
		if (typeof username === 'string' && typeof password === 'string') {

			confParent.find('.success').find('span.demoUsername').text(username);
			confParent.find('.success').find('span.demoPassword').text(password);
		
			// populate server text if element exists
			if (serverEl.length) {
				serverEl.text(function(){
					var text = 'n/a'; // start with fallback value in case we haven't found a server in conversionData
					if (typeof conversionData === 'object' && typeof conversionData.server === 'string') {
						text = conversionData.server;
					}
					return text;
				});
			}

			// show success content
			confParent.find('.success').show();

		} else {	// Maintenance signup (no username and password)
			confParent.find('.maint').show(); // show maint content
		}

		formParent.hide();
		confParent.fadeIn(100);

		if(typeof fxcm.ui !== 'undefined' && typeof fxcm.ui.SmoothScroll !== "undefined"){
			var demoFormScroll = new fxcm.ui.SmoothScroll({
				target: confParent
			});
			demoFormScroll.scrollNow();
		}
	};

	// Shows the confBox that already exists on the page after the form submits
	this.confBoxDemoValidatorSubmitHandler = thatInternal.demoValidatorSubmitHandlerFactory(thatInternal.showDemoConfBox);
	this.confBoxCountryDemoValidatorSubmitHandler = thatInternal.demoCountryValidatorSubmitHandlerFactory(thatInternal.showDemoConfBox);

	// Replaces the form with generic Thank You text after the form submits
	var _genericFXTRConfText = {
									fxtr:'<h3>Congratulations</h3> <p>You have successfully signed up for a demo account. Your username and password are below:</p> <p><strong>Username:</strong> %username% <br /> <strong>Password:</strong> %password%</p>',
									eloqua:'<h3>Thank you</h3> <p>Our demo registration is currently unavailable due to routine weekend maintenance. When the system again becomes available, a representative will send your demo account login information to the e-mail address you provided.</p>'
								};
	this.genericDemoValidatorSubmitHandler = thatInternal.demoValidatorSubmitHandlerFactory(_genericFXTRConfText);
	this.genericCountryDemoValidatorSubmitHandler = thatInternal.demoCountryValidatorSubmitHandlerFactory(_genericFXTRConfText);
	/********************** END Demo submitHandlers *****************/


	/********************* BEGIN Eloqua submitHandlers ****************/
	/*How to setup the jQuery Validate submitHandler for Eloqua forms
	Show the on-page confBox:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.confBoxEloquaValidatorSubmitHandler;

	Show the generic Thank You text:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.genericEloquaValidatorSubmitHandler;

	Custom callback function:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.eloquaValidatorSubmitHandlerFactory(yourFunction);

	Custom confirmation text:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.eloquaValidatorSubmitHandlerFactory('confirmationText');

	Redirect:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.eloquaRedirectValidatorSubmitHandlerFactory('redirectURL');

	Do nothing after submission:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.eloquaValidatorSubmitHandlerFactory();

	Custom tracking on form submission:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.trackingFactory(fxcm.internal.confBoxEloquaValidatorSubmitHandler, '<img src="trackingPixel" />', otherTrackingFunction); */



	/* Produces a submitHandler function for jQuery Validator on Eloqua forms
	The elqFormName field can be left off the form if desired and instead passed in as the second parameter to eloquaValidatorSubmitHandlerFactory
	Usage:
	callback is not passed in (undefined): The form submits and no UI changes are made
	callback is a function: Invokes the callback after the form submits
	callback is text: Replaces the form with a confBox containing the text after the form submits */
	this.eloquaRedirectValidatorSubmitHandlerFactory = function(redirectURL, formName) {
		return _AJAXFormRedirectValidatorSubmitHandlerFactory(thatInternal.eloquaValidatorSubmitHandlerFactory, redirectURL, formName);
	};

	this.eloquaValidatorSubmitHandlerFactory = function(callback, formName) {
		return _AJAXFormValidatorSubmitHandlerFactory(fxcm.Eloqua, 'setCallback', callback, 'setFormName', formName);
	};

	// Hides the form and shows the confirmation div
	this.showEloquaConfBox = function(form) {
		var formParent = $(form).closest('.formBox');
		var confParent = formParent.next('.confBox');
		formParent.hide();
		confParent.show();

		if(typeof fxcm.ui !== 'undefined' && typeof fxcm.ui.SmoothScroll !== "undefined"){
			var elqFormScroll = new fxcm.ui.SmoothScroll({
				target: confParent
			});
			elqFormScroll.scrollNow();
		}
	};

	// Shows the confBox that already exists on the page after the form submits
	this.confBoxEloquaValidatorSubmitHandler = thatInternal.eloquaValidatorSubmitHandlerFactory(thatInternal.showEloquaConfBox);

	// Replaces the form with generic Thank You text after the form submits
	this.genericEloquaValidatorSubmitHandler = thatInternal.eloquaValidatorSubmitHandlerFactory('<h3>Thank you</h3> <p>Your information has been received and will be processed shortly.</p>');
	/********************** END Eloqua submitHandlers *****************/


	/********************* BEGIN Seminar Events Eloqua and Demo Functions ****************/
	/* Callback function for Eloqua Forms "confBoxSeminarDemoCoreg"
	Functionality which signs users for seminars/webinars and, if opted for, simultaneously signs up for a demo account.
	Required: rb (string), formName (string)
	Optional: demoFired (bool).
	*/
    this.seminarDemoCoregTrackingCallback = function(rb, formName, demoFired) {
		if (typeof rb !== 'string') { return false; }
		if (typeof demoFired !== "boolean") { demoFired = false; }

		// Fire GTM seminar complete event
		if (typeof fxcmgtm === 'object') {
			fxcmgtm.recordSeminar(formName.toLowerCase());
		}

		// Fire Site Catalyst tracking
		if (typeof s === "object") {
			s.events = s.apl(s.events,'event79',',',1); // seminar signup event

			// only fires if user signed up for demo
			if(demoFired){
				if (typeof fxcmsc === "object") {
					fxcmsc.recordDemo(rb);
				}
			}
			else {
				s.t();
			}
		}
	};

	/*
		Find and tranform demo country field; append new input element if it does not already exist
	*/
	this.setDemoCountryField = function(countryField) {
		var countryField = $(countryField);

		// demo format: lowercase, underscores for spaces and dashes, parenthesis and periods removed
		var countrySelected = countryField.val().toLowerCase().replace(/[ \-]/g,"_").replace(/[()\.]/g,"");
		if ($('input[name="demo.country"]').length > 0) {
			$('input[name="demo.country"]').val(countrySelected);
		}
		else {
			$('<input>').attr('type','hidden').attr('name','demo.country').val(countrySelected).appendTo(countryField.closest('form'));
		}
	};

	/*
		Show/hide demo requested spans within confBox
	*/
	this.toggleDemoConfText = function(demoRequested) {
		if (demoRequested) {
			$('.demo-not-requested').hide();
			$('.demo-requested').show();
		}
		else {
			$('.demo-not-requested').show();
			$('.demo-requested').hide();
		}
	};
	/********************* END Seminar Events Eloqua and Demo Functions ****************/


	/********************* BEGIN Eloqua Campaign ID ****************/

	this.setEloquaCampaignID = function(form){
		// Get reference to cmp value first from url  param and then from cookie
		var cmp = fxcm.lib.getURLParameter('CMP') || (typeof jPersist === 'object' && typeof jPersist.visitor === 'object' && typeof jPersist.visitor.campaign === 'string' && jPersist.visitor.campaign);

		if(!form) {
			// User didn't pass in a form. Try to find a likely candidate on page.
			form = $('.confBoxEloqua').length > 0 ? $('.confBoxEloqua') : $('.confBoxDemo').length > 0 ? $('.confBoxDemo') : $('.confBoxSeminarDemoCoreg').length > 0 ? $('.confBoxSeminarDemoCoreg') : $();
		} else {
			// User passed in form
			form = $(form);
		}

		if (form.length < 1 || !cmp) {return false;} // no form or no cmp, return false;

		// Check for existence of cmp field on form
		var cmpField = form.find('input[name="Campaign_ID"]');
		if (cmpField.length < 1) {
			cmpField = $('<input type="hidden" name="Campaign_ID" />');
			form.append(cmpField);
		}

		// Update cmp field value
		cmpField.val(cmp.replace(/^SFS-/i, ''));
	};

	/********************* END Eloqua Campaign ID ****************/


	/********************* BEGIN Create Globalize Instance ****************/
	/*
		If there is no Globalize object detected, create a prototype with base methods returning formatted values from the data object.
		IMPORTANT: Only spreads formatting values are supported. CFD Oil Tables are not supported.
	*/
	this.createTempGlobalize = function() {

		var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		var monthNamesAbr = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

		var culture = {
			calendar: {
				patterns: {
					dmy: "MMMM d, yyyy", // Show month date, year (added)
					m: "MMMM", // Show just the name of the month (added)
					dm: "dd-MMM" // Show the date and abbrevaited month (added)
				}
			}
		};

		var Globalize = function Globalize() {};

		Globalize.culture = function() {
			return culture;
		};

		Globalize.localize = function(message) {
			return message;
		};

		Globalize.format = function(value, view) {
			switch (view) {
				case 'n1': // for spreads with 1 decimal place
					return value.toFixed(1);
				case 'p0': // for savings percentage 0 decimal places
					return ((value * 100).toFixed(0) + "%") ;
				case 'p2': // for savings percentage 2 decimal places
					return ((value * 100).toFixed(2) + "%") ;
				case 'Y': // for spreads date
					return (monthNames[value.getMonth()] + " " + value.getFullYear());
				case 'MMMM d, yyyy': // for spreads date
					return (monthNames[value.getMonth()] + " " + value.getDate() + ", " + value.getFullYear());
				case 'MMMM': // for oil month only date
					return (monthNames[value.getMonth()]);
				case 'dd-MMM': // for oil date-month date
					return (value.getDate() + "-" + monthNamesAbr[value.getMonth()]);
				default:
					return value.toString();
			}
		};

		window.Globalize = Globalize; // bring scope of this Globalize to the global window
	};

	this.globalizeExists = function() {
		var exists = (typeof Globalize === 'function');

		if(!exists) {
			thatInternal.createTempGlobalize();
		}

		return exists;
	};
	/********************* END Create Globalize Instance ****************/

}();
if (typeof jPersist === 'undefined') {
	var jPersist = new function() {
		var _settings = {};
		_settings.cookieLife = {};
		var _maxCookieLife = 1000*60*60*24 * 90;    // Track visitors for 90 days by default (most browsers enforce this cap on max cookie length, so set it for consistency)
		var _defaultVisitTimeout = 1000*60 * 30;    // Default visit timeout is 30 minutes from last page view

		this.setCookiePrefix = function(prefix) {
			if (typeof prefix !== 'string') { return false; }

			_settings.prefix = prefix;   // Allow illegal cookie characters because they'll be encoded by _writeCookie

			_load();

			return _settings.prefix;
		};

		this.getCookiePrefix = function() {
			return _settings.prefix;
		};

		this.setLifetime = function(namespace, lifetime) {
			if (typeof namespace !== 'string' || typeof lifetime !== 'number') { return false; }

			return _settings.cookieLife[namespace] = lifetime;
		};

		this.getLifetime = function(namespace) {
			if (typeof namespace !== 'string') { return false; }

			return _settings.cookieLife[namespace];
		};

		// TODO: Fix issue where setting a new cookie prefix after the old one has stored values will cause the new prefix to inherit the old values.
		function _load() {
			var allCookies = document.cookie.split('; ');
			for (var cookieIndex=0; cookieIndex < allCookies.length; cookieIndex++){
				var propertyComponents = allCookies[cookieIndex].match('^\\s*' + encodeURIComponent(_settings.prefix) + '(.+?)=(.+?)\\s*$');
				if (propertyComponents) {
					if (propertyComponents[1] === '.cookieLife') {
						_settings.cookieLife = JSON.parse(decodeURIComponent(propertyComponents[2]));
					} else {
						_thatjPersist[decodeURIComponent(propertyComponents[1])] = JSON.parse(decodeURIComponent(propertyComponents[2]));
					}
				}
			}

			// Clear out expired objects' lifetime settings
			for (var memberName in _settings.cookieLife) {
				if (typeof _thatjPersist[memberName] === 'undefined') {
					delete _settings.cookieLife[memberName];
				}
			}

			if (typeof _thatjPersist.visitor === 'undefined') {
				_thatjPersist.visitor = {};
				_thatjPersist.visitor.pageViews = 0;
				_thatjPersist.visitor.visits = 0;
				_thatjPersist.setLifetime('visitor', _maxCookieLife);
			}
			if (typeof _thatjPersist.visit === 'undefined') {
				_thatjPersist.visit = {};
				_thatjPersist.visit.pageViews = 0;
				_thatjPersist.setLifetime('visit', _defaultVisitTimeout);
			}

			return _thatjPersist.recordPageView();
		}

		this.recordPageView = function() {
			if (typeof _thatjPersist.visitor === 'object') {
				if (typeof _thatjPersist.visit === 'object' && _thatjPersist.visit.pageViews === 0) { // New Visit
					_thatjPersist.visitor.visits++;
				}
				_thatjPersist.visitor.pageViews++;
			}
			if (typeof _thatjPersist.visit === 'object') {
				_thatjPersist.visit.pageViews++;
			}

			return _thatjPersist.save();
		}

		this.recordNewVisit = function() {
			if (typeof _thatjPersist.visit !== 'object') { _thatjPersist.visit = {}; }
			_thatjPersist.visit.pageViews = 0;

			if (typeof _settings.cookieLife.visit === 'undefined') {
				_settings.cookieLife.visit = _defaultVisitTimeout;
			}

			return _thatjPersist.recordPageView();
		}

		this.save = function() {
			// Store object namespaces as cookies
			var options = { expires: new Date() };
			var now = new Date().getTime();
			for (var memberName in _thatjPersist) {
				if (typeof _thatjPersist[memberName] !== 'function') {
					var cookieName = _settings.prefix + memberName;
					var cookieValue = JSON.stringify(_thatjPersist[memberName]);
					options.expires.setTime(now + (_settings.cookieLife[memberName] || _settings.cookieLife.visitor || _maxCookieLife));    // Set expiration to this namespace's expiration if one has been set, otherwise fallback to visitor, then the max cookie life

					_writeCookie(cookieName, cookieValue, options);
				}
			}

			// Store cookie lifetimes
			options.expires.setTime(now + (_settings.cookieLife.visitor || _maxCookieLife));
			_writeCookie(_settings.prefix + '.cookieLife', JSON.stringify(_settings.cookieLife), options);

			return true;
		};

		this.kill = function(namespace) {
			if (typeof namespace !== 'string' || namespace === 'visit' || namespace === 'visitor') { return false; }

			delete _thatjPersist[namespace];
			delete _settings.cookieLife[namespace];
			return _deleteCookie(_settings.prefix + namespace);
		};

		function _readCookie(name) {
			if (typeof name !== 'string') { return false; }

			var cookieParts = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie);
			return cookieParts ? decodeURIComponent(cookieParts[1]) : null;
		}

		function _writeCookie(name, value, options) {
			if (typeof name !== 'string') { return false; }

			switch (typeof value) {
				case 'string':  // Ideal
				break;

				case 'undefined':   // Parameter wasn't passed, set a cookie with no value
				value = '';
				break;

				case 'object':
					if (value === null) {   // Treat null as an intention to set a cookie with no value
						value = '';
					} else {    // We could JSON.stringify all other objects, but then we need to duck punch JSON.stringify into older browsers, let the client app deal with that
						return false;
					}
					break;

				default:    // Cast other primitives to string
				value = String(value);
				break;
			}

			if (typeof options !== 'object') { options = {}; }

			return (document.cookie = [
				encodeURIComponent(name) + '=' + (value !== '' ? encodeURIComponent(value) : ''),
				options.expires instanceof Date ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				typeof options.path === 'string' ? '; path=' + options.path : '',
				typeof options.domain === 'string' ? '; domain=' + options.domain : '',
				typeof options.secure !== 'undefined' && options.secure ? '; secure' : ''
				].join(''));
		}

		function _deleteCookie(name, options) {
			if (typeof options !== 'object') { options = {}; }

			options.expires = new Date(0);    // Set cookie expiration to epoch
			return _writeCookie(name, '', options) ? true : false;
		}

		var _thatjPersist = this;
		_thatjPersist.setCookiePrefix('jp_');   // Triggers the load process
	}();
}
	var lpMTagConfig = {
		'lpServer' : 'sales.liveperson.net',
		'lpNumber' : '17621448',
		'lpProtocol' : (document.location.toString().indexOf('https:')==0) ? 'https' : 'http',
		'lpTagLoaded' : false,
		'lpTagSrv' : 'sr2.liveperson.net',
		'pageStartTime' : (new Date()).getTime()
	};
	
	lpMTagConfig.lpLoadScripts = function(){
		lpAddMonitorTag();
	}
	
	function lpAddMonitorTag(src) { 
		if (!lpMTagConfig.lpTagLoaded) {if (typeof(src) == 'undefined' || typeof(src) == 'object') {if (lpMTagConfig.lpMTagSrc) {src = lpMTagConfig.lpMTagSrc;}else {if (lpMTagConfig.lpTagSrv) {src = lpMTagConfig.lpProtocol + '://' +lpMTagConfig.lpTagSrv + '/hcp/html/mTag.js';}else {src = '/hcp/html/mTag.js';};};};if (src.indexOf('http') != 0) {src = lpMTagConfig.lpProtocol + '://' + lpMTagConfig.lpServer + src + '?site=' + lpMTagConfig.lpNumber;} else {if (src.indexOf('site=') < 0) {if (src.indexOf('?') < 0) {src = src + '?';} else{src = src + '&';} src = src + 'site=' + lpMTagConfig.lpNumber;  };};var s = document.createElement('script');s.setAttribute('type', 'text/javascript');s.setAttribute('charset', 'iso-8859-1');s.setAttribute('src', src);document.getElementsByTagName('head').item(0).appendChild(s);}
	}
			
	//The code below send a PAGEVAR to LP with the time [in seconds] it took the page to load. Code is executed in the onload event
	lpMTagConfig.calculateSentPageTime = function () {
		var t = (new Date()).getTime() - lpMTagConfig.pageStartTime;
		lpAddVars('page','pageLoadTime', Math.round(t/1000)+' sec');
	};
	
	//Variables Arrays - By Scope
	if (typeof(lpMTagConfig.pageVar)=='undefined') { lpMTagConfig.pageVar = []; }
	if (typeof(lpMTagConfig.sessionVar)=='undefined') { lpMTagConfig.sessionVar = []; }
	if (typeof(lpMTagConfig.visitorVar)=='undefined') { lpMTagConfig.visitorVar = []; }
	//Extra actions to be taken once the code executes
	if (typeof(lpMTagConfig.onLoadCode)=='undefined') { lpMTagConfig.onLoadCode = []; }
	//Dynamic Buttons Array
	if(typeof(lpMTagConfig.dynButton)=='undefined') { lpMTagConfig.dynButton = []; }
	// This need to be add to afterStartPage will work
	if(typeof(lpMTagConfig.ifVisitorCode)=='undefined') {lpMTagConfig.ifVisitorCode = []; }
	
	
	// Function that sends variables to LP - By Scope
	function lpAddVars(scope,name,value) {
		if (name.indexOf('OrderTotal')!=-1 || name.indexOf('OrderNumber')!=-1){
			if  (value=='' || value==0) return; // pass 0 value to all but OrderTotal
			else lpMTagConfig.sendCookies = false
		}	
		value=lpTrimSpaces(value.toString());
	//Remove cut long variables names and values. Trims suffix of the variable name above the 25th character onwards
		if (name.length>50) { 
			name=name.substr(0,50);
		}
		if (value.length>50) { // Trims suffix of the variable value above the 50th character onwards
			value=value.substr(0,50);
		}
		switch (scope){
			case 'page': lpMTagConfig.pageVar[lpMTagConfig.pageVar.length] = escape(name)+'='+escape(value); break;
			case 'session': lpMTagConfig.sessionVar[lpMTagConfig.sessionVar.length] = escape(name)+'='+escape(value); break;
			case 'visitor': lpMTagConfig.visitorVar[lpMTagConfig.visitorVar.length] = escape(name)+'='+escape(value); break;
		}	
	}
	
	// Preventing long cookie transfer for IE based browsers.
	function onloadEMT() { 
		var LPcookieLengthTest=document.cookie;
		if (lpMTag.lpBrowser == 'IE' && LPcookieLengthTest.length>1000){
			lpMTagConfig.sendCookies=false;
		}
	}
	
	//The Trim function returns a text value with the leading and trailing spaces removed
	function lpTrimSpaces(stringToTrim) {
		return stringToTrim.replace(/^\s+|\s+$/g,'');
	}
	
	// Immediate Data submission function
	function lpSendData(varscope,varname,varvalue) {
		if(typeof(lpMTag)!='undefined' && typeof(lpMTag.lpSendData)!='undefined')
			lpMTag.lpSendData(varscope.toUpperCase() +'VAR!'+ varname + '=' + varvalue, true);
	}
	
	// The unit variable purpose is to route the chat or call to the designated skill. <LOB> should be replaced with the skill name, i.e. : sales
	try{
		if (typeof(lpUnit)=='undefined') { var lpUnit='sales'; }
		if (typeof(lpLanguage)=='undefined') { var lpLanguage='english'; }
		if(typeof(lpAddVars)!='undefined') { 
			lpAddVars('page','unit',lpUnit); 
			lpAddVars('session','language',lpLanguage); 
		}
		lpMTagConfig.defaultInvite ='chat'+'-'+lpUnit+'-'+lpLanguage;
	}catch(e){}
	
	lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length] = onloadEMT;
	
	//Scan dynButton and removes buttons which doesnt have Div on the page
	lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length] = function () {
		if(typeof(lpMTagConfig.dynButton)!='undefined') {
			for (i=0;i<lpMTagConfig.dynButton.length;i++){
				if (typeof(lpMTagConfig.dynButton[i].pid)!='undefined' && document.getElementById(lpMTagConfig.dynButton[i].pid) == null) {
						lpMTagConfig.dynButton.splice(i,1);
						i--;
				}
			}
		}
	};
	
	//The folowing functions will be load after the page will finish loading
	lpMTagConfig.onLoadAll = function () {
		lpMTagConfig.calculateSentPageTime();
		lpMTagConfig.lpLoadScripts();
	};
	
	/****** Define dynamic buttons ********/
	 // Header link: "Chat 24/7 [icon]"
	var dynBtnName = 'dyn-btn-' + fxcm.siteID;
	lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {'name': dynBtnName,'pid': 'lp-topnav-link','afterStartPage': true};
	
	/****** END Define dynamic buttons ********/
	
	
	/********* BEGIN Live Person profile attributes ***********/
	if (typeof jPersist === 'object') {
		for (var namespace in jPersist) {
			if (typeof jPersist[namespace] === 'object') {
				for (property in jPersist[namespace]) {
					lpAddVars('page', namespace + '_' + property, jPersist[namespace][property]);
				}
			}
		}
	}

	if (typeof redirectData === 'object') {
		lpAddVars('page', 'country', redirectData.country);
	}
	/********** END Live Person profile attributes ************/
	
/* this will stop polling of the LP backend if a user is on a phone */
if( fxcm.device.getDevice() !== 'phone' ) {
	
	if (window.attachEvent) { 
		window.attachEvent('onload',lpMTagConfig.onLoadAll); 
	} else {
		window.addEventListener('load',lpMTagConfig.onLoadAll,false);
	}
	
}
/* --------- Simpletip abstraction class -----------*/
/* Parameters:
- element: required. Pass in valid DOM element

Setting - use classes to set settings:
- To set persistence:	.persistent-true OR .persistent-false
- To set position: 		.position-top, .position-bottom, .position-right, .position-left;
*/
fxcm.Tooltip = fxcm.lib.makeClass();
fxcm.Tooltip.prototype.init = function(element) {
	var thatTooltip = this;	
	
	function showTip(parentEl){
		var tip = parentEl.find('.tooltip');
		var parentW = parentEl.width();
		var parentX = parentEl.offset().left;
		var tipW = tip.width();
		$('.tooltip').not($(tip)).stop(true, true).fadeOut(200);
		if(((parentX + (parentW / 2)) - (tipW / 2)) + tipW > $(window).width()){
			var tipX = parentW - tipW;
			tip.addClass('tooltip-align-right');
		}
		else{
			var tipX = (parentW - tipW) / 2;
			tip.removeClass('tooltip-align-right');
		}
		tip.css('left', tipX + "px");
		tip.css('top', '100%');
		tip.stop(true, true).fadeIn(200);
	}
	
	function hideTip(tipEl){
		tip.stop(true, true).fadeOut(200);
	}
	
	// Get parent element
	if($(element).length < 0){ 
		return false;
	}
	else{
		if($(element).find('.tooltip').length < 0){
			return false;
		}
	}
	
	var parentEl = $(element);
	var tip = parentEl.find('.tooltip');
	
	parentEl.find('a').first().click(function(e) {
        e.preventDefault();
    });

	if(fxcm.device.isTouch()){
		parentEl.click(function(){
			if(!tip.is(':visible')){
				showTip(parentEl);
			}
			else{
				hideTip(parentEl);
			}
		});
	}
	else{
		parentEl.hover(
			function(){
				showTip(parentEl,tip);
			},
			function(){
				hideTip(parentEl);
			}
		);
	}
}
fxcm.TwitterStream = function() {
	if (typeof $.fn.linkUrl !== 'function') {
		$.fn.extend({
			linkUrl: function() {
				var returning = [];
				var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
				this.each(function() {
					returning.push(this.replace(regexp,'<a class=\"textlink\" target=\"_blank\" href=\"$1\">$1</a>'));
				});
				return $(returning);
			}
		});
	}
	
	if (typeof $.fn.linkUser !== 'function') {
		$.fn.extend({
			linkUser: function() {
				var returning = [];
				var regexp = /^[\@]+([A-Za-z0-9-_]+)/gi;
				this.each(function() {
					returning.push(this.replace(regexp,'<a class=\"textlink" target=\"_blank\" href=\"http://twitter.com/$1\">@$1</a>'));
				});
				return $(returning);
			}
		});
	}

	function dateString(str)
	{
		var values = str.split(' ');
		var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var d = new Date(values[1] + ' ' + values[2] + ' ' + values[5] + ' ' + values [3] + ' ' + values[4]);
		var day = d.getDate();
		var m = d.getMonth();
		var time = d.toLocaleTimeString();

		return day + ' ' + month[m] + ' ' + time;
	}
	
	var focus = true;

	var maxSize = 40; //default

	this.setMaxSize = function(maxSizeParam)
	{
		maxSize = maxSizeParam;
	};

	var size = 0;

	var textLimit = -1;

	this.setTextLimit = function(textLimitParam)
	{
		textLimit = textLimitParam;
	};

	this.getSize = function()
	{
		return size;
	};

	this.items = {};
	var oldestKey = -1;
	var target;
	var feedURL;
	var asyncTimeout = 30000;

	this.setAsyncTimeout = function(asyncTimeoutParam)
	{
		asyncTimeout = asyncTimeoutParam;
	};

	var firstRun = true;

	var avatarWidth = 48;
	var avatarHeight = 48;

	this.setAvatarSize = function(avatarWidthParam, avatarHeightParam)
	{
		avatarWidth = avatarWidthParam;
		avatarHeight = avatarHeightParam;
	};

	var containingList = $('<ul id="tweetListUL" class="items">')[0];

	var pauseImageDiv = $('<div id="pauseImageDiv"></div>');
	pauseImageDiv.hide();

	var that = this;
	var doRun = false;

	var pauseTimeout = 10800000; // default (copied from current dailfyx-twitter app)
	//var pauseTimeout = 10000;

	this.setPauseTimeout = function(paramPauseTimeout)
	{
		pauseTimeout = paramPauseTimeout;
	};

	this.setPauseImage = function(pauseImageUrl, pauseImageWidth, pauseImageHeight)
	{
		if(document.getElementById('pauseImage'))
			$(document.getElementById('pauseImage')).remove();

		var button = $('<img id="pauseImage" src="' + pauseImageUrl  +
							   '" alt="Launch Stream" width="' + pauseImageWidth +
							   '" height="' + pauseImageHeight + '" border="0" />').click(
																					function()
																					{
																						pauseImageDiv.hide();
																						that.stop();
																						that.start();
																					});

		pauseImageDiv.append(button);
	};

	var defaultPauseImageUrl = 'http://www.dailyfx.com/design/default/img/marketnews/launch-forex-stream.gif';
	var defaultPauseImageWidth = 514;
	var defaultPauseImageHeight = 86;

	this.setPauseImage(defaultPauseImageUrl, defaultPauseImageWidth, defaultPauseImageHeight);

	var newItems = 0;
	var title = document.title;
	var updateId = 0;

	var pollIntervalMillis = -1;

	var transformFunction = transformTweet;

	this.setTransformFunction = function(transformFunctionParam)
	{
		transformFunction = transformFunctionParam;
	};

	this.setLongPoll = function(pollIntervalMillisParam)
	{
		pollIntervalMillis = pollIntervalMillisParam;
	};

	var focusTimeout;

	if($.browser.msie)
	{
		document.onfocusin = onFocus;
		document.onfocusout = onBlur;
	}
	else
	{
		document.onfocus = onFocus;
		document.onblur = onBlur;
	}

	this.start = function()
	{
		if(doRun)
			return false; //Already running - must call stop() first

		if(this.isUndefined(target) || this.isUndefined(feedURL))
			return false;

		firstRun = true;
		doRun = true;

		getTweets();

		return true;
	};

	this.stop = function()
	{
		doRun = false;

		return true;
	};

	this.getTweetsOnce = function()
	{
		if(doRun)
			return false; //Already running - must call stop() first

		if(this.isUndefined(target) || this.isUndefined(feedURL))
			return false;

		var url = feedURL + '?since_timestamp=' + sinceTimestamp + '&async_timeout=' + asyncTimeout + '&callback=?';

		$.getJSON(url,  updateTweetList);
	};

	function onFocus()
	{
		if(!focus)
		{
			document.title = title;
			newItems = 0;

			focus = true;

			if(focusTimeout)
				clearTimeout(focusTimeout);
		}
	}

	function onBlur() {
		focus = false;
		focusTimeout = setTimeout(pause, pauseTimeout);
	}

	function pause()
	{
		that.stop();
		$(containingList).empty();
		pauseImageDiv.show();
		sinceTimestamp = -1;
		newItems = 0;
	}

	this.setFeedURL = function(feedURLParam)
	{
		if(typeof feedURLParam === 'string')
			feedURL = feedURLParam;

		else
			feedURL = 'http://realtimenews.dailyfx.com/news.json';
	};

	this.setTarget = function(targetParam)
	{
		if(typeof targetParam === 'string')
			target = document.getElementById(targetParam);

		else if((typeof targetParam === 'object') && (typeof targetParam.innerHTML !== 'undefined'))
			target = targetParam;

		$(target).append(pauseImageDiv);
		$(target).append(containingList);
	};

	function transformTweet(tweet)
	{
		var avatar_img = '<img src="' + tweet.user.profile_image_url + '" height="' + avatarHeight + '" width="' + avatarWidth + '" alt="' + tweet.user.screen_name + '\'s avatar" border="0"/>';
		var avatar = '<li class="avatar"><a target="_blank" href="http://twitter.com/' + tweet.user.screen_name + '">' + avatar_img + '</a></li>';
		var date = '<a class="date" target="_blank" href="http://twitter.com/' + tweet.user.screen_name + '/statuses/' + tweet.id_str + '" title="Follow us on Twitter">' + dateString(tweet.created_at) + '</a> ';

		var tweetText = textLimit == -1 ? tweet.text : tweet.text.substring(0, textLimit);

		var text = $([tweetText]).linkUrl().linkUser()[0];

		var tweetLiHtml =
				'<li class="real-time-news-box" id="' + tweet.id + '">' +
					'<div class="real-time-news-avatar">' + avatar_img + '<br />' +
						'<a target="_blank" href="http://twitter.com/' + tweet.user.screen_name + '">' +
							'<img src="http://www.dailyfx.com/design/fxcm/img/common/blank.gif" width="48" height="17" alt="" />' +
						'</a>' +
					'</div>' +
					'<div class="real-time-news-post">' + text + '</div>' +
					'<div class="real-time-news-post-date">'  + dateString(tweet.created_at) +  '</div>' +
				'</li>';

		return tweetLiHtml;
	}

	this.removeItem = function(key)
	{
		var previous = null;
		if(this.hasItem(key))
		{
			size--;
			previous = this.items[key];
			delete this.items[key];

			this.setOldest();
		}

		if(document.getElementById(key))
			$(document.getElementById(key)).remove();

		return previous;
	};

	this.getItem = function(key)
	{
		return this.items[key];
	};

	// returns value previously associated with this key if any. TODO: is this even necessary?
	this.putItem = function(key, value)
	{
		var tmp_previous;
		// if the map is full - only use new tweet if its timestamp is later than the current oldest
		var useTweet = size == maxSize ? key > oldestKey : true;

		if(useTweet && !this.isUndefined(value))
		{
			if(!this.hasItem(key))
			{
				// will add new key, value so must remove oldest key, value (by timestamp) - only if the new tweet is newer than the current oldest
				if(size == maxSize)
					this.removeItem(oldestKey);

				size++;
			}
			else
				// no need to remove one if its too big as this will replace existing key, value
				tmp_previous = this.items[key];


			this.items[key] = value;

			this.setOldest();

			//var tweetLi = $(transformTweet(value))[0];
			var tweetLi = $(transformFunction(value))[0];

			var newItem = $(tweetLi).prependTo(containingList);

			if(firstRun)
				newItem.slideDown('fast');
			else
				newItem.slideDown('slow');

			if(!firstRun)
				$(tweetLi).effect('pulsate', {times: 3}, 1000);

			//else
				//$(tweetLi).effect('slide', 100);
		}

		return tmp_previous;
	};

	this.setOldest = function()
	{
		oldestKey = -1;

		for(var key in this.items)
		{
			if(oldestKey == -1 || key < oldestKey)
				oldestKey = key;

		}
	};

	this.hasItem = function(key)
	{
		return !this.isUndefined(this.items[key]);
	};

	this.isUndefined = function(obj)
	{
		return !((typeof obj !== 'undefined') && (obj !== null));
	};

	this.notNull = function(obj)
	{
		return (!isUndefined(obj) && (obj !== null));
	};

	this.clear = function()
	{
		for(var i in this.items)
			delete this.items[i];

		size = 0;
	};

	// TODO: - performance?
	// adds all keys to a temp array, sorts the array, readds the keys in order to a temp map, and replaces the main map with the temp one
	this.sortByKey = function()
	{
		function sortDescending(a,b)
		{
			return b - a;
		}

		var tweetKeyArr = new Array();

		for(var key in this.items)
			tweetKeyArr.push(key);

		tweetKeyArr.sort(sortDescending);

		var tempItems = {};

		for(var i = 0; i < tweetKeyArr.length; i++)
			tempItems[tweetKeyArr[i]] = this.items[tweetKeyArr[i]];

		this.items = tempItems;
	};

	/*
	var favoriteTweet = new Object();
	favoriteTweet.id = -1;
	favoriteTweet.timestamp = -1;
	favoriteTweet.event_type = 'FAVORITE';
	*/

	var sinceTimestamp = -1;

	function updateTweetList(data)
	{
		$.each(data,
			function(i, newTweet)
			{
				//var favoriteTweetNotNull = typeof favoriteTweet != 'undefined';

				if(sinceTimestamp < newTweet.timestamp)
					sinceTimestamp = newTweet.timestamp;

				switch(newTweet.event_type)
				{
					case 'ADD':
						that.putItem(newTweet.id, newTweet);
						break;

					case 'FAVORITE':
						if(newTweet.show)
							that.putItem(newTweet.id, newTweet);

						/*
						if(!favoriteTweetNotNull || favoriteTweet.timestamp < newTweet.timestamp)
						{
							favoriteTweet = newTweet;
							document.getElementById("favoriteTweetBox").innerHTML = "tweetid: " + favoriteTweet.id + " timestamp: " + favoriteTweet.timestamp +
									" event type: " + favoriteTweet.event_type + " text: " + favoriteTweet.text + " favortie: " + favoriteTweet.favorited + "";

							favoriteTweetNotNull = true;
						}
						*/
						break;

					case 'UNFAVORITE':
						if(newTweet.show)
							that.putItem(newTweet.id, newTweet);

						/*
						if(typeof favoriteTweet != 'undefined' && favoriteTweet.id == newTweet.id)
						{
							favoriteTweet = null;
							document.getElementById("favoriteTweetBox").innerHTML = "<i>... no favorite</i>";
						}
						*/
						break;

					case 'DELETE':
						that.removeItem(newTweet.id);

						/*
						if(favoriteTweetNotNull  && favoriteTweet.id == newTweet.id)
						{
							favoriteTweet = null;
							document.getElementById("favoriteTweetBox").innerHTML = "<i>... no favorite</i>";
						}
						*/
						break;
				}

				if(!focus)
				{
					if(newItems < 20)
						newItems++;

					document.title = '(' + newItems + ' new) ' + title;
				}

				updateId++;
			}
		);

		//document.getElementById("tweetSize").innerHTML = "<b>map size: " + that.size + ", ul child length: " + containingList.children.length + "</b>";

		firstRun = false;

		getTweets();

	}

	function getTweets()
	{
		if(doRun)
		{
			var url = feedURL + '?since_timestamp=' + sinceTimestamp + '&async_timeout=' + asyncTimeout + '&callback=?';

			if(pollIntervalMillis > 0 && !firstRun)
				setTimeout(
						function()
						{
							//$.getJSON(feedURL + '?since_timestamp=' + sinceTimestamp + '&callback=?',  updateTweetList);
							$.getJSON(url,  updateTweetList);
						}, pollIntervalMillis);
			else
				//$.getJSON(feedURL + '?since_timestamp=' + sinceTimestamp + '&callback=?',  updateTweetList);
				$.getJSON(url,  updateTweetList);
		}
	}
};
fxcm.ui = new function() {
	this.ExpandableSet = fxcm.lib.makeClass();

	this.ExpandableSet.prototype.init = function(trigger, options) {

		var thatExpandableSet = this;

		// Default settings object
		var settings = {
			// classes
			activeClass: 'open',
			closeButtonClass: 'closeThis',

			// behavior and appearance
			hasCloseButton: false,
			hasControlLink: false,
			toggleVisibility: false,
			accordian: false,

			// internationalization
			controlLinkExpandText: 	'Expand All',
			controlLinkCollapseText: 	'Collapse All',
			closeButtonText: '',

			// callbacks
			onOpen: function(){},
			onClose: function(){},
			onToggle: function(){},

			// pub/sub events
			publishOnOpenEvent: false,
			publishOnCloseEvent: false,
			publishOnToggleEvent: false,

			// cached state values
			controlLinkState: undefined,
			currentTrigger: undefined,
			currentTarget: undefined,
			previousTrigger: undefined,
			previousTarget: undefined
		};

		// Cached jQuery Object variables
		var $triggers,	// element that is clicked on
			$contextEl,	// the wrapper element
			$closeButton = $('<a class="closeThis"></a>'),
			$controlLink;

		// Combine defaults and user options
		$.extend(settings, options || {});

		// ****************
		// HELPER FUNCTIONS
		// ****************

		// Checks if passed in element exists
		function _isValidElement(element) {
			var $element = fxcm.lib.isJqueryElement(element) ? element : $(element);
			return $element && $element.length;
		}

		// Returns the elements that are not decendents of any other elements in the array
		function _removeDescendents(elements, ancestors) {
			if (typeof ancestors === 'undefined') {
				ancestors = elements;
			}

			var topLevelElements = [];
			for (var elementIndex = 0; elementIndex < elements.length; elementIndex++) {
				var ancestorFound = false;
				for (var ancestorIndex = 0; ancestorIndex < ancestors.length; ancestorIndex++) {
					if ($.contains(ancestors[ancestorIndex], elements[elementIndex])) {
						ancestorFound = true;
						break;
					}
				}

				if (!ancestorFound) {
					topLevelElements.push(elements[elementIndex]);
				}
			}

			return topLevelElements;
		}


		// Counts the number of expanded dt elements
		function _countTargets(expanded) {
			if (typeof expanded === 'undefined') {	// Count all target els
				return $triggers.length;
			} else {
				if (expanded) {	// Count expanded elements
					return $triggers.filter( '.' + settings.activeClass ).length;
				} else {	// Count collapsed elements
					return $triggers.length - _countTargets(true);
				}
			}
		}

		// ****************
		// PRIVATE METHODS
		// ****************

		function _setControlLink(controlLink) {
			// Dereference is an ID
			if (typeof controlLink === 'string' && controlLink) {
				controlLink = $( document.getElementById(controlLink) );
			}

			// Look for default if no control link was passed in
			if (!controlLink) {
				//controlLink = _removeDescendents( $contextEl.find('a.controlThisSection'), _dls )[0];
				return false;
			}

			settings.hasControlLink = true;

			// Set the control link if one has been found
			if (fxcm.lib.isDOMElement(controlLink) || fxcm.lib.isJqueryElement(controlLink)) {
				$controlLink = $(controlLink);
				$controlLink.click(_controlLinkClick);
				_updateControlLinkText();

				return $controlLink;
			} else {
				return false;
			}
		}

		function _setCloseButton(){
			settings.hasCloseButton = true;
			$closeButton = _isValidElement(settings.closeButton) ? $(settings.closeButton) : $('<a class="' + settings.closeButtonClass +  '">' + settings.closeButtonText + '</a>');
			$triggers.append($closeButton);

			return $closeButton;
		}

		function _controlLinkClick() {
			if (settings.controlLinkState === 'true') {
				_setAllTriggerStates(true);
			} else if (settings.controlLinkState === 'false') {
				_setAllTriggerStates(false);
			}
			_updateControlLinkText();
			return false;
		}

		function _setTarget(){
			var target;

			if (settings.target && _isValidElement(settings.target)) {
				target = $contextEl ? $contextEl.find(settings.target) : $(settings.target);
			} else if (settings.target && settings.target === 'prev') {
				target = $(this).prev();
			} else {
				target = $(this).next();
			}

			$(this).data('target', target);
		}

		function _getTriggerState(trigger) {
			return $(trigger).hasClass(settings.activeClass);
		}

		function _setAllTriggerStates(expanded) {
			$triggers.each(function(){
				var that = this;
				_setTriggerState($(that), expanded);
			});
		}

		// Sets the state of one or more trigger elements (pass in a jQuery object containing multiple trigger elements for multiple)
		function _setTriggerState(trigger, expanded) {
			// reset cached settings values
			settings.previousTrigger = settings.currentTrigger;
			settings.previousTarget = settings.currentTarget;

			var trigger = settings.currentTrigger = $(trigger);
			var target = settings.currentTarget = $(trigger).data('target');

			if (expanded) {
				trigger.addClass( settings.activeClass );
				target.addClass( settings.activeClass );

				if (settings.toggleVisibility) {
					target.show();
				}

				if (settings.accordian) {
					$triggers.not(settings.currentTrigger).each(function(){
						_setTriggerState(this, false);
					});
				}

				// publish onOpen event  and fire callback function
				_publishEvent('onOpen', trigger, target, true);
				settings.onOpen(trigger, target, true);

			} else {

				trigger.removeClass( settings.activeClass );
				target.removeClass( settings.activeClass );

				if (settings.toggleVisibility) {
					target.hide();
				}

				// publish onOpen event and fire callback function
				_publishEvent('onClose', trigger, target, false);
				settings.onClose(trigger, target, false);
			}

			// publish onToggle event and fire callback function
			_publishEvent('onToggle', trigger, target, expanded);
			settings.onToggle(trigger, target, expanded);

			return true;
		}

		// Expands/collapses dt and dd elements
		function _toggleState(e) {
			e.stopPropagation();
			e.cancelBubble = true;

			_setTriggerState( this, !_getTriggerState(this) );

			if ( settings.hasControlLink && (_countTargets(true) === _countTargets() || _countTargets(false) === _countTargets())) {
				_updateControlLinkText();
			}

			return false;
		}

		function _updateControlLinkText() {
			if (_countTargets(true) === _countTargets()) {	// All elements are expanded
				$controlLink.text( settings.controlLinkCollapseText );
				settings.controlLinkState = 'false';
			} else {	// Not all elements are expanded
				$controlLink.text(settings.controlLinkExpandText);
				settings.controlLinkState = 'true';
			}
		}

		function _publishEvent(eventType, trigger, target, state) {

			var eventName,
				fireEvent = false,
				userSetting = settings['publish' + eventType.charAt(0).toUpperCase() + eventType.slice(1) + 'Event']; // capitalize first letter of eventType for accessing settings object

			if (userSetting) {
				fireEvent = true;

				if (typeof userSetting === 'string') {
					eventName = 'fxcm.expandable.' + userSetting;
				} else {
					eventName = 'fxcm.expandable.' + eventType;
				}
			}

			if (fireEvent) {
				amplify.publish(eventName, trigger, target, state);
				return true;
			} else {
				return false;
			}

		}

		// **************
		// PUBLIC METHODS
		// **************

		this.handleAnchor = function(anchor) {
			if (typeof anchor !== 'string') { return false; }
			if (anchor === '') { return true; }

			var filter = 'a[name=' + anchor + ']';

			for (var dtIndex = 0; dtIndex < $triggers.length; dtIndex++) {
				var dt = $($triggers[dtIndex]);
				var dd = dt.next();

				if (dt.find(filter).length || dd.find(filter).length) {
					_setAllTriggerStates(false);
					_setTriggerState(dt, true);
					break;
				}
			}
		};

		this.toggle = function(trigger, options){

			if (typeof trigger === 'object' && !options) { // passed in an options object but no trigger
				options = trigger;
				trigger = $triggers;
			} else if ( !trigger ) {
				trigger = $triggers; // use entire $trigger object as the trigger
			}

			if ( !_isValidElement(trigger) ) {return false;}

			options = options || {};

			if (typeof options.state === 'boolean') {

				if (trigger.length > 1) {
					_setAllTriggerStates(options.state);
				} else if (trigger.length === 1) {
					_setTriggerState(trigger, options.state);
				}

			} else {
				// console.log('todo');
				//trigger.length === 1 ? _setTriggerState(trigger, !_getTriggerState(trigger)) : trigger.length > 1 : _setAllTriggerStates(trigger, !_getTriggerState(trigger));
			}

			if (options.callback && typeof options.callback === 'function') {
				options.callback.call(trigger || $triggers);
			}

			return true;
		};

		this.enable = function(){
			if (!$triggers) {return false;}

			// Add expand/collapse click handler
			$triggers.on('click', _toggleState);

		};

		this.disable = function(){
			if (!$triggers) {return false;}

			// remove click handlers
			$triggers.off('click', _toggleState);
		};

		// ****************
		// CONSTRUCTOR LOGIC
		// ****************

		// Exit if no trigger provided
		if ( !_isValidElement(trigger) )  {return false;}

		// Find the context element
		$contextEl = settings.context && _isValidElement(settings.context) ? $(settings.context) : false;

		// Construct list of trigger elements
		$triggers = $( _removeDescendents( $contextEl ? $contextEl.find(trigger) : trigger ) );

		// Set the corresponding target for each trigger
		$triggers.each(_setTarget);

		// Initialize the control link
		if (settings.hasControlLink || settings.controlLink) {
			_setControlLink(settings.controlLink);
		}

		// Add close this links
		if (settings.hasCloseButton || settings.closeButton) {
			_setCloseButton(settings);
		}

		thatExpandableSet.enable();

		// enable linking between different sets on a single page
		if ($triggers.data('target').find('a.internal-toggle').length) {
			$triggers.data('target').find('a.internal-toggle').length.bind('click', function(e){
				e.stopPropagation();
				e.cancelBubble = true;

				thatExpandableSet.handleAnchor($(this).href);

				return false;
			});
		}

		thatExpandableSet.handleAnchor(document.location.hash.substr(1));
	};

    this.Teleport = fxcm.lib.makeClass();

    this.Teleport.prototype.init = function( element, options ) {

        var thatTeleport = this;

        thatTeleport.element = element;

        var _settings = {
            availableMethods: [ "append", "prepend", "before", "after" ]
        };
        var defaults = {
            method: "append",
            beforeTeleportComplete: function( element ) {},
            onTeleportComplete: function( element ) {},
            beforeHomeComplete: function( element ) {},
            onHomeComplete: function( element ) {}
        };

        /* Start Private Functions
           ========================================================================== */

        // @TODO Create unregister function that kills all events.
        /*
        _unregister = function () {
        };
        */

        function _registerEvents() {

            amplify.subscribe( 'fxcm.device.onEnterDesktop', function() {
                _initiateTeleport( 'home' );
            } );

            amplify.subscribe( 'fxcm.device.onEnterTablet', function() {
                if( _settings.rules.tablet && !$.isEmptyObject( _settings.rules.tablet ) ) {
                    _initiateTeleport( 'tablet' );
                } else {
                    _initiateTeleport( 'home' );
                }
            } );

            amplify.subscribe( 'fxcm.device.onEnterMobile', function() {
                if( _settings.rules.mobile && !$.isEmptyObject( _settings.rules.mobile ) ) {
                    _initiateTeleport( 'mobile' );
                } else {
                    _initiateTeleport( 'home' );
                }
            } );

            fxcm.device.publishCurrentEvent();

        }

        // Move the element by appending or prepending
        function _initiateTeleport( breakpoint ) {

            // Send the element back to it's wrapping pod container
            if( breakpoint === "home" ) {

                thatTeleport.options.beforeHomeComplete.call( thatTeleport, thatTeleport.element );

                if( _settings.pod.children().length === 0 ) {
                    $( _settings.pod ).append( _settings.element ).show();
                }

                _setCurrentLocation( 'home' );

                thatTeleport.options.onHomeComplete.call( thatTeleport, thatTeleport.element );

            } else {

                // Get rule for that breakpoint
                var rule = _settings.rules[breakpoint];

                // Check if the new destination is not the current location
                if( rule.destination != _settings.element.currentLocation ) {

                    thatTeleport.options.beforeTeleportComplete.call( thatTeleport, thatTeleport.element );

                    if( rule["method"] === "append" ) {
                        $( rule.destination ).append( _settings.element );
                    } else if ( rule["method"] === "prepend" ) {
                        $( rule.destination ).prepend( _settings.element );
                    } else if ( rule["method"] === "after" ) {
                        $( rule.destination ).after( _settings.element );
                    } else if ( rule["method"] === "before" ) {
                        $( rule.destination ).before( _settings.element );
                    }

                    _setCurrentLocation( rule.destination );

                    _settings.element.show();

                    thatTeleport.options.onTeleportComplete.call( thatTeleport, thatTeleport.element );
                }
            }

            _togglePodEmptyClass();
        }

        function _setCurrentLocation( destination ) {
            _settings.element.currentLocation = destination;
        }

        // Check if a rule exists for that breakpoint.
        function _doesRuleExist( breakpoint ) {
            return _getRulePositionByBreakpoint( breakpoint ) >= 0 && typeof _getRulePositionByBreakpoint( breakpoint ) === "number";
        }

        // Returns the index of the rule by looking for the corresponding breakpoint.
        function _getRulePositionByBreakpoint( rules, breakpoint ) {
            if( typeof rules === "undefined" ) {
                rules = _settings.rules;
            }
            for( var i = 0; i < rules.length; i++ ) {
                if( rules[i].breakpoint === breakpoint || $.inArray( breakpoint, rules[i].breakpoint ) > -1 ) {
                    return i;
                }
            }
            return false;
        }

        // If pod is empty, add class, else, remove
        function _togglePodEmptyClass() {
            if( _settings.pod.children().length === 0 ) {
                $( _settings.pod ).addClass( 'empty' );
            } else {
                $( _settings.pod ).removeClass( 'empty' );
            }
        }

        function _parseInstructions( instructions ) {
            var $instructions = instructions;
            // Create new array to store our rules in based on the instructions
            var rules = [];

            // Loop through each instruction and break it out into rules.
            $.each( $instructions, function( index ) {
                // Get breakpoints
                var breakpoints = $instructions[index].breakpoints;
                if( typeof breakpoints === "undefined" || breakpoints === ""  ) {
                    throw new Error( "Breakpoint is not set." );
                    return false;
                }

                // Destination
                var destination = $instructions[index].destination;
                if( typeof destination === "undefined" || destination === "" ) {
                    throw new Error( "Destination is not set." );
                    return false;
                }

                // If breakpoints is a string, convert to array
                if( typeof breakpoints === "string" ) {
                    breakpoints = breakpoints.split();
                }

                // Method
                var method = $instructions[index].method;
                if( typeof method !== "string" || method === "" || $.inArray( method, _settings.availableMethods ) === -1 ) {
                    method = defaults.method;
                }

                // Create rule
                var rule = {};
                rule.breakpoint = breakpoints;
                rule.method = method;
                rule.destination = destination;

                rules.push( rule );

            } );

            _settings.rules = rules;

            // parse settings and cache rules specific to tablet and mobile
            _settings.rules.tablet = rules[ _getRulePositionByBreakpoint( rules, 'tablet' ) ];
            _settings.rules.mobile = rules[ _getRulePositionByBreakpoint( rules, 'mobile' ) ];
        }

        // Checks if passed in element exists
        function _isValidElement( element ) {
            var $element = fxcm.lib.isJqueryElement(element) ? element : $(element);
            return $element && $element.length;
        }

        // Set's the parent pod (or home) of the element.
        function _setPod() {
            var pod = _settings.element.parent();

            // If parent does not contain class .teleport-pod, create one and wrap the element.
            if( !pod.hasClass( 'teleport-pod' ) ) {
                _wrapElementInPod();
                pod = _settings.element.parent();
            }

            // set original location of pod
            _settings.pod = pod;
        }

        // Wrap tthe element in a .teleport-pod container
        // Returns pod
        function _wrapElementInPod() {
            var pod = $( "<div class='teleport-pod'></div>" );
            _settings.element.wrap( pod );
        }

        options = options || {};
        // merge options with defaults
        thatTeleport.options = $.extend( {}, defaults, options );

        if( !_isValidElement( element ) ) {
            return false;
        }
        _settings.element = element;

        if( typeof options.instructions === "object" && !$.isEmptyObject( options.instructions ) ) {
            _parseInstructions( options.instructions );
        } else {
            throw new Error( "No options given to Teleport" );
            return false;
        }

        _setPod();

        _setCurrentLocation( 'home' );

        _registerEvents();

    };

	this.PlaceholderLabel = fxcm.lib.makeClass();

	/* Sets a form's labels as placeholders for fields.
	form = required
	fields = optional. Pass in an array, string or an empty array/string
	placeholderClass = optional. Pass in a string. */
	this.PlaceholderLabel.prototype.init = function(form, fields, placeholderClass) {

		var thatPlaceholderLabel = this;
		var _settings = {};

		this.setFields = function(fields) {
			var _fieldList = $();

			// Parse passed-in fields
			if (typeof fields === 'string' && _findField(fields)) {	// passed in a string
				_fieldList = _fieldList.add(_findField(fields));
			}
			else if (fxcm.lib.isArray(fields) && fields.length > 0) {	// passed in an array
				for (var i = 0; i < fields.length; i++) {
					if (_findField(fields[i])) {
						_fieldList = _fieldList.add(_findField(fields[i]));
					}
				}
			}

			if (_fieldList.length > 0) {
				return _settings.fields = _fieldList;
			}
			else {
				return false;
			}
		};

		this.getFields = function() {
			return _settings.fields;
		};

		this.setPlaceholderClass = function(placeholderClass) {
			if (typeof placeholderClass === 'string' && placeholderClass !== '') {
				return _settings.placeholderClass = placeholderClass;
			} else {
				return false;
			}
		};

		this.getPlaceholderClass = function() {
			return _settings.placeholderClass;
		};

		function _findField(field) {
			if ($(_settings.form).find(field).length > 0) {
				return $(_settings.form).find(field);
			} else {
				return false;
			}
		}

		function _getTag(field) {
			return  $(field).prop('tagName').toLowerCase();
		}

		function _getLabel(field) {
			var label = $(field).prev('label');
			return label.length > 0 ? label : false;
		}

		function _hasValue(field) {
			var val = $(field).val();
			return val === '' ? false : true;
		}

		// Show/hide the label
		function _setLabelState(field, hide) {
			if (_getLabel(field) === false) {return false;}

			if (hide) {
				_getLabel(field).hide();
			} else {
				_getLabel(field).show();
			}
		}

		// Add placeholder class to labels. Provides style hook.
		function _initializeLabels(field) {
			_settings.fields.each(function(){
				_togglePlaceholderClass(_getLabel(this), true);
			});
		}

		// Add/remove the "placeholder" label
		function _togglePlaceholderClass(field, addClass) {
			if (addClass) {
				$(field).addClass(_settings.placeholderClass);
			}
			else {
				$(field).removeClass(_settings.placeholderClass);
			}
		}

		function _initializeSelectField(field) {
			if (_getTag(field) !== 'select') {return false;}
			if (!_getLabel(field)) {return false;}		// If no label text, bomb out

			var label = _getLabel(field);
			var firstOption = $(field).children('option:first-child');

			// Insert label's innerHTML as first option
			if (_hasValue(firstOption)) {
				$(field).prepend('<option value="">' + label.text() + '</option>').prop("selectedIndex", 0);	 //To do: select this first option.
			} else {
				firstOption.text(label.text());
			}
			return true;
		}

		function _handleSelectField(field, event) {
			if (_getTag(field) !== 'select') {return false;}
			if (typeof event === 'undefined') {
					event = '';
					event.type = 'load'
			}

			var isPlaceholding = false; // Set default to remove placeholding class

			// For focus, always remove placeholder class
			if (event.type === 'focusin') {
				isPlaceholding = false;
			}
			// For other events, add/remove placeholder class depending on selection
			else {
				if (!_hasValue(field) && $(field).children('option:selected').index() === 0) {	// Check if selected option is the first option
					isPlaceholding = true;
				}
			}
			_togglePlaceholderClass(field, isPlaceholding);
		}

		function _handleAllFields(field, event){
			if (typeof event === 'undefined') {
					event = '';
					event.type = 'load'
			}

			if (_getTag(field) === 'select') {
				_handleSelectField(field, event);
			}
			else {
				if (event.type === 'focus') {
					_setLabelState(field, true);				//	on focus, hide label
				} else {
					_setLabelState(field, _hasValue(field));	// on change and blur, set label state based on value
				}
			}
		}

		//----------- Constructor logic -----------//

		// Find the form
		if (typeof form === 'string' && form) {		// Dereference an ID
			form = document.getElementById(form);
		}
		if (!fxcm.lib.isDOMElement(form)) {	// No form, bomb out
			return false;
		}

		_settings.form = form;

		// Set the placeholder class
		if (!thatPlaceholderLabel.setPlaceholderClass(placeholderClass)) {
			thatPlaceholderLabel.setPlaceholderClass('placeholder');
		}

		// Set the fields
		if (!thatPlaceholderLabel.setFields(fields)) {
			thatPlaceholderLabel.setFields(['input[type="text"]','input[type="password"]','input[type="email"]','input[type="tel"]','select','textarea']);
		}

		// Add event handlers to fields
		_settings.fields.each(function() {

			var boundEvents = '';

			// Tag-specific settings
			if (_getTag(this) === 'select') {
				boundEvents = 'focusin blur'; // Use focusin to fix IE bug on selects with focus eventhandler (where selects require two clicks to open the dropdown).

				_setLabelState(this,true);		// Hide label
				_initializeSelectField(this);	// Insert label's innerHTML into first option
			}
			else {
				boundEvents = 'focus blur';
			}

			// Handle fields on page load
			_togglePlaceholderClass(_getLabel(this), true);	// Add placeholder class to labels
			_handleAllFields(this);								// Set initial placeholder state for all fields

			// Attach eventhandlers to fields
			$(this).bind(boundEvents, function(e) {
				_handleAllFields(this, e);
			});
		});
	};

	/* 	GeoBox gives us the ability to load different content depending on geographic location (country)

		Parameters:
		- wrapper [jquery object]: 	Required. A DOM element that contains one or more .geoTarget elements marked with a data-target="" attribute

		Optional config object may contain:
		- target [string]: 			this value sets the current geoTarget to display. Corresponds to the data-geoTarget attributes on content
		- targetLevel [string]: 	this values sets which level of targeting you are aiming for. Possible values are: 'country', 'city'

		Implementation examples:
		HTML :
		<div class="myGeoTargetedElement">
			<div data-geoTarget="australia">This is the Australian content</div>
			<div data-geoTarget="default">This is the default content</div>
			<div data-geoTarget="germany">This is the German content</div>
		</div>

		JS:
		--- Show australian content on page load ---
		var targetedContent = new fxcm.ui.GeoBox($('.myGeoTargetedElement'), {target: 'australia'});

		--- Show default content on page load ---
		var targetedContent = new fxcm.ui.GeoBox($('.myGeoTargetedElement'));
	*/

	this.GeoBox = fxcm.lib.makeClass();
	this.GeoBox.prototype.init = function(wrapper, config) {
		var thatGeoBox = this;
		var _settings = config || {};

		this.getWrapper = function() {
			return _settings.wrapper;
		};

		this.getTargetLevel = function() {
			return _settings.targetLevel;
		};

		this.setTargetLevel = function(targetLevel) {
			_settings.targetLevel = targetLevel;
		};

		this.getTarget = function() {
			return _settings.target;
		};

		this.setTarget = function(target) {
			_settings.target = target;
		};


		/* --- Constructor logic -- */

		// Set wrapping parent element context (required) and ensure it's a jquery wrapped set
		if (!wrapper || !wrapper.length) {return false;}
		_settings.wrapper = fxcm.lib.isJqueryElement(wrapper) ? wrapper : $(wrapper);

		thatGeoBox.setTarget( _settings.target || 'default' );

		// If we can locate a matching geo set, show it. Otherwise, do nothing.
		if ( thatGeoBox.getElements( thatGeoBox.getTarget() ) ) {
			thatGeoBox.show( thatGeoBox.getTarget() );
		}
	};

	this.GeoBox.prototype.getElements = function(target) {
		// Accepts a single parameter: target [string]. Returns all elements within the parent geoBox that have a matching data-geoTarget attritube.
		// Omit the target argument to return all target elements within parent geoBox

		if (typeof target !== 'string') {
			return this.getWrapper().find('[data-geoTarget]');
		} else {
			return this.getWrapper().find('[data-geoTarget='+ target +']');
		}
	};

	this.GeoBox.prototype.show = function(target) {
		// Show the content associated with a specific target.
		// If you call this method without passing in a target, reshow currently-set target

		if (typeof target !== 'string') { // no target supplied. get current from _settings
			target = this.getTarget();
		} else if (target !== this.getTarget() ){ // supplied new target - reset current target in _settings
			this.setTarget(target);
		}

		var targetContent = this.getElements(target);

		if (targetContent.length) {
			this.getElements().hide();
			targetContent.show();
		}
	};
	
	this.SmoothScroll = fxcm.lib.makeClass();
	/*
	Allows the window or a scrollable element to initiate an animated scroll
	When used on a link, it will scroll to the element with an ID that matches the link's href
	*/
	
	this.SmoothScroll.prototype.init = function(options) {
		var thatSmoothScroll = this;
		
		// determines if element exists
		// if so, returns it as a jQuery object
		function _getElement( elem ){
			if( !elem ){ return false; }
			
			var found;
			
			if( fxcm.lib.isJqueryElement( elem ) && elem.length ){
				found = elem;
			}
			else if( typeof elem === 'string' && elem.charAt(0) === '#' && document.getElementById(elem.slice(1)) !== null ){
				found = $(elem);
			}
			else{
				found = false;
			}
			
			return found;
		}
		
		// verifies that a target is set to "top", "bottom" or a DOM element
		function _isValidTarget( testTarget ){
			if( _getElement( testTarget ) || ['top', 'bottom'].indexOf(testTarget) > -1 ){
				return true;
			}
			
			return false;
		}
		
		// make sure wrapper has the proper css and has an inner container which makes calculations easier
		function _formatWrapper(){
			if( _settings.wrapper && _settings.wrapper.children().length ){
				if( _settings.wrapper.css('overflow-y') !== 'scroll' ){
					_settings.wrapper.css('overflow-y','scroll');
				}
				if( _settings.wrapper.css('overflow-x') !== 'hidden' ){
					_settings.wrapper.css('overflow-x','hidden');
				}
				if( !_settings.wrapper.children().first().hasClass('smoothScrollContainer') ){
					_settings.wrapper.children().wrapAll('<div class="smoothScrollContainer" style="position:relative; overflow:hidden;" />');
				}
			}
		}
		
		// attempts to set target from the trigger href
		/* it will not set the target if:
			1. a valid target is already set ( target can only be overwritten by setTarget() )
			2. the trigger is not a link with an href which matches an existing ID
		*/
		function _setTargetFromHref(){
			if( !_isValidTarget( _settings.target ) ){
				if( _settings.trigger && _settings.trigger.is('a') && _settings.trigger.attr('href').length){
					var triggerHref = _settings.trigger.attr('href');
					if( _isValidTarget( triggerHref ) ){
						_settings.target = thatSmoothScroll.setTarget( _settings.trigger.attr('href') );
					}
				}
			}
		}
		
		// bind event to trigger which invokes a scroll
		function _bindTriggerEvent(){
			if( _settings.trigger ){
				var triggerEvent = ( typeof _settings.bindOn === 'string' && _settings.bindOn.length ) ? _settings.bindOn : 'click';
				_settings.trigger.on(triggerEvent, function(e){
					e.preventDefault();
					thatSmoothScroll.scrollNow();
				});
			}
		}
		
		// calculate the current y coordinates of window or wrapper
		function _calcCurrentPos(){			
			return _settings.wrapper ? Math.ceil(_settings.wrapper.scrollTop()) : Math.ceil($(window).scrollTop());
		}
		
		// calculate the y coordinates to scroll to
		function _calcTargetPos(){
			var targetPos = 0;
			var contentHeight = 0;
			
			var contentHeight = _settings.wrapper ? _settings.wrapper.children('.smoothScrollContainer').first().height() : $(document).height();
			var wrapperHeight = _settings.wrapper ? _settings.wrapper.height() : $(window).height();
			
			if( _settings.target === 'bottom' ){
				targetPos = contentHeight;
			}
			else if( _settings.target && _settings.target !== 'top' ){
				targetPos = _settings.wrapper ? _settings.target.position().top : _settings.target.offset().top;
			}
			
			if(targetPos > (contentHeight - wrapperHeight)){
				targetPos = contentHeight - wrapperHeight;
			}
			
			targetPos = targetPos < 0 ? 0 : Math.ceil(targetPos);
			
			return targetPos;
		}
		
		// function called at end of animation
		function _scrollComplete(){
			if( !_settings.wrapper ){
				var currentHash = window.location.hash;
				var targetHash = '';
				
				if( ['top', 'bottom'].indexOf(_settings.target) > -1 ){
					targetHash = '#';
				}
				else if( _settings.target && typeof _settings.target.attr('id') === 'string' && _settings.target.attr('id').length ){
					targetHash = '#' + _settings.target.attr('id');
				}
				
				// update hash at end of animation
				if( targetHash.length > 0 && targetHash != currentHash ){
					// if HTML5 history pushState is not supported then window.location.hash is used to modify the history
					if( typeof history.pushState === 'undefined' ){
						window.location.hash = targetHash;
					}
					else{
						history.pushState({}, '', targetHash);
					}
				}
			}
			
			// if a callback was supplied, fire it now
			if( typeof _settings.callback === 'function' ){
				_settings.callback.call( thatSmoothScroll );
			}
		}
		
		// animate the scroll, can be invoked after setup at any time
		this.scrollNow = function(){
			if( !_settings.target ){
				return false;
			}
			
			var currPos = _calcCurrentPos();
			var newPos = _calcTargetPos();
			var animateDelta = currPos - newPos;
			var animateDuration = 0;
			var wrapperEl = _settings.wrapper ? _settings.wrapper : $('html, body');
			
			// delta must be a positive number
			animateDelta = animateDelta < 0 ? ( animateDelta * -1 ) : animateDelta;
			// calculate time over which to animate
			animateDuration = (typeof _settings.animateSpeed === 'number' && _settings.animateSpeed > 0) ? (animateDelta / _settings.animateSpeed) * 100 : animateDelta;
			
			// set animation arguments
			var animateArgs = {
				duration : animateDuration,
				easing : 'swing',
				complete : function(){ _scrollComplete(); }
			}
			
			wrapperEl.stop().animate(
				{scrollTop:newPos},
				animateArgs
			);
			
			return newPos;
		};
		
		// function to retrieve the trigger
		this.getTrigger = function(){
			return typeof _settings.trigger !== 'undefined' ? _settings.trigger : false;
		};
		
		// function to set the trigger
		this.setTrigger = function( newTrigger ){
			_settings.trigger = _getElement( newTrigger );
			_setTargetFromHref();
			_bindTriggerEvent();
			return _settings.trigger;
		};
		
		// function to retrieve the target
		this.getTarget = function(){
			return typeof _settings.target !== 'undefined' ? _settings.target : false;
		};
		
		// function to set the target
		this.setTarget = function( newTarget ){
			_settings.target = ( ['top', 'bottom'].indexOf(newTarget) > -1 ) ? newTarget : _getElement( newTarget );
			return _settings.target;
		};
		
		// function to retrieve the wrapper
		this.getWrapper = function(){
			return typeof _settings.wrapper !== 'undefined' ? _settings.wrapper : false;
		};
		
		// function to set the wrapper
		this.setWrapper = function( newWrapper ){
			_settings.wrapper = _getElement( newWrapper )
			_formatWrapper();
			return _settings.wrapper;
		};
		
		// function to unset the wrapper, so the window is scrolled
		this.unsetWrapper = function(){
			return delete _settings.wrapper;
		};
		
		var _settings = {};
		
		/* ----- optional user defined settings, passed as object
			trigger :
				jQuery object, or string representing element ID
				! - required if a target is not set
				
			target :
				jQuery object, string set to "bottom" or "top", or string representing element ID
				! - required if a trigger is not set
				
			animateSpeed :
				number of pixels scrolled in .1 seconds
				! - defaults to 100
				
			bindOn :
				string representing event attached to trigger which invokes the scroll
				! - defaults to 'click'
				
			wrapper :
				jQuery object, or string representing element ID
				! - current window scrolled if not set
				
			callback :
				function to be called at the end of the scroll animation
		----- */
		
		
		// combine defaults and user options
		if( typeof options === 'object' ){
			$.extend(_settings, options || {});
		}
		
		// finalize setup
		thatSmoothScroll.setTrigger( _settings.trigger );
		thatSmoothScroll.setTarget( _settings.target );
		thatSmoothScroll.setWrapper( _settings.wrapper );
	};
}();
<!-- FXCM - GTM Helper Functions -->
getUrlDetails = function() {};
generateDecoratedUrl = function() {};
decorateUrls = function() {};
trackScroll = function() {};
<!-- End FXCM - GTM Helper Functions -->

<!-- Google Tag Manager Data Layer -->
analyticsEvent = function() {};
analyticsSocial = function() {};
analyticsVPV = function() {};
dataLayer = [];
<!-- End Google Tag Manager Data Layer -->
/**
 * GTM: On Demo Complete
 * - Required Data -
 * rb
 * db
 * formName
 * currency
 * product
 * platform
 * formCountry
 */
amplify.subscribe( 'fxcm.form.onDemoComplete', function( data ) {
    analyticsEvent( {
        eventCategory : 'Demo Conversion',
        eventAction : 'Demo Form Submit',
        eventLabel : data.formName,
        eventValue : gtmGetTimeSpent(),
        eventNonInt : 'false',
        rb : data.rb,
        db : data.db,
        formName : data.formName,
        currency : data.currency,
        product : data.product,
        platform : data.platform,
        formCountry : data.formCountry,
        userProfileLead : 'lead'
    } );
} );

/**
 * GTM: FXCM Account Complete
 * - Required Data -
 * rb
 * formName
 * platform
 * formCountry
 * serviceLevel
 */
amplify.subscribe( 'fxcm.form.onFxcmAccountComplete', function( data ) {
    analyticsEvent( {
        eventCategory : 'Web Acct Form Conversion',
        eventAction : 'Web Acct Form Submit',
        eventLabel : data.platform,
        eventValue : gtmGetTimeSpent(),
        eventNonInt : 'false',
        rb : data.rb,
        formName : data.formName,
        platform : data.platform,
        formCountry : data.formCountry,
        serviceLevel : data.serviceLevel
    } );
} );


/**
 * GTM: On Form Error
 * - Required Data -
 * formType
 * formName
 * errorFieldNames
 */
amplify.subscribe( 'fxcm.form.onError', function( data ) {
    var category = '',
            action = '';

    switch( data.formType ) {
        case 'demo':
            category = 'Demo Interaction',
                    action = 'Demo Form Error';
            break;
        case 'account':
            category = 'Web Acct Form Interaction',
                    action = 'Web Acct Form Error';
            break;
        case 'eloqua':
            category = 'Eloqua Form Interaction',
                    action = 'Eloqua Form Error';
            break;
        case 'other':
            category = 'Other Form Interaction',
                    action = 'Other Form Error';
            break;
    }

    analyticsEvent( {
        eventCategory : category,
        eventAction : action,
        eventLabel : data.formName,
        eventValue : gtmGetTimeSpent(),
        eventNonInt : 'false',
        formName : data.formName,
        errorFieldNames : data.errorFieldNames || 'n/a'
    } );
} );

/**
 * GTM: FXCM Form Start
 * - Required Data -
 * formName
 * formField
 */
amplify.subscribe( 'fxcm.form.onStart', function( data ) {
    var category = '',
            action = '';

    switch( data.formType ) {
        case 'demo':
            category = 'Demo Interaction',
                    action = 'Demo Form Start';
            break;
        case 'account':
            category = 'Web Acct Form Interaction',
                    action = 'Web Acct Form Start';
            break;
        case 'eloqua':
            category = 'Eloqua Form Interaction',
                    action = 'Eloqua Form Start';
            break;
        case 'other':
            category = 'Other Form Interaction',
                    action = 'Other Form Start';
            break;
    }

    analyticsEvent( {
        eventCategory : category,
        eventAction : action,
        eventLabel : data.formName,
        eventValue : gtmGetTimeSpent(),
        eventNonInt : false,
        formName : data.formName,
        fieldName: data.fieldName
    } );

    // reset the time so that when we calculate form complete, it's complete - start.
    gtmResetStartTime();
} );

var gtmGlobalStartTime = new Date();

function gtmResetStartTime() {
    gtmGlobalStartTime = new Date();
}

function gtmGetTimeSpent( startTime ) {
    var startTime = startTime || gtmGlobalStartTime;
    var endTime = new Date();
    // Get the time spent in seconds by getting the difference of endTime and startTime
    var timeSpentInSeconds = ( endTime.getTime() - startTime.getTime() ) / 1000;
    return timeSpentInSeconds;

}
/*
* Nivo Lightbox v1.2.0
* http://dev7studios.com/nivo-lightbox
*
* Copyright 2013, Dev7studios
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,n,r){function o(t,n){this.el=t;this.$el=e(this.el);this.options=e.extend({},s,n);this._defaults=s;this._name=i;this.init()}var i="nivoLightbox",s={effect:"fade",theme:"default",keyboardNav:true,clickOverlayToClose:true,onInit:function(){},beforeShowLightbox:function(){},afterShowLightbox:function(e){},beforeHideLightbox:function(){},afterHideLightbox:function(){},onPrev:function(e){},onNext:function(e){},errorMessage:"The requested content cannot be loaded. Please try again later."};o.prototype={init:function(){var t=this;if(!e("html").hasClass("nivo-lightbox-notouch"))e("html").addClass("nivo-lightbox-notouch");if("ontouchstart"in n)e("html").removeClass("nivo-lightbox-notouch");this.$el.on("click",function(e){t.showLightbox(e)});if(this.options.keyboardNav){e("body").off("keyup").on("keyup",function(n){var r=n.keyCode?n.keyCode:n.which;if(r==27)t.destructLightbox();if(r==37)e(".nivo-lightbox-prev").trigger("click");if(r==39)e(".nivo-lightbox-next").trigger("click")})}this.options.onInit.call(this)},showLightbox:function(t){var n=this,r=this.$el;var i=this.checkContent(r);if(!i)return;t.preventDefault();this.options.beforeShowLightbox.call(this);var s=this.constructLightbox();if(!s)return;var o=s.find(".nivo-lightbox-content");if(!o)return;e("body").addClass("nivo-lightbox-body-effect-"+this.options.effect);this.processContent(o,r);if(this.$el.attr("data-lightbox-gallery")){var u=e('[data-lightbox-gallery="'+this.$el.attr("data-lightbox-gallery")+'"]');e(".nivo-lightbox-nav").show();e(".nivo-lightbox-prev").off("click").on("click",function(t){t.preventDefault();var i=u.index(r);r=u.eq(i-1);if(!e(r).length)r=u.last();n.processContent(o,r);n.options.onPrev.call(this,[r])});e(".nivo-lightbox-next").off("click").on("click",function(t){t.preventDefault();var i=u.index(r);r=u.eq(i+1);if(!e(r).length)r=u.first();n.processContent(o,r);n.options.onNext.call(this,[r])})}setTimeout(function(){s.addClass("nivo-lightbox-open");n.options.afterShowLightbox.call(this,[s])},1)},checkContent:function(e){var t=this,n=e.attr("href"),r=n.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);if(n.match(/\.(jpeg|jpg|gif|png)$/i)!==null){return true}else if(r){return true}else if(e.attr("data-lightbox-type")=="ajax"){return true}else if(n.substring(0,1)=="#"&&e.attr("data-lightbox-type")=="inline"){return true}else if(e.attr("data-lightbox-type")=="iframe"){return true}return false},processContent:function(n,r){var i=this,s=r.attr("href"),o=s.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);n.html("").addClass("nivo-lightbox-loading");if(this.isHidpi()&&r.attr("data-lightbox-hidpi")){s=r.attr("data-lightbox-hidpi")}if(s.match(/\.(jpeg|jpg|gif|png)$/i)!==null){var u=e("<img>",{src:s});u.one("load",function(){var r=e('<div class="nivo-lightbox-image" />');r.append(u);n.html(r).removeClass("nivo-lightbox-loading");r.css({"line-height":e(".nivo-lightbox-content").height()+"px",height:e(".nivo-lightbox-content").height()+"px"});e(t).resize(function(){r.css({"line-height":e(".nivo-lightbox-content").height()+"px",height:e(".nivo-lightbox-content").height()+"px"})})}).each(function(){if(this.complete)e(this).load()});u.error(function(){var t=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(t).removeClass("nivo-lightbox-loading")})}else if(o){var a="",f="nivo-lightbox-video";if(o[1]=="youtube"){a="http://www.youtube.com/embed/"+o[4];f="nivo-lightbox-youtube"}if(o[1]=="youtu"){a="http://www.youtube.com/embed/"+o[3];f="nivo-lightbox-youtube"}if(o[1]=="vimeo"){a="http://player.vimeo.com/video/"+o[3];f="nivo-lightbox-vimeo"}if(a){var l=e("<iframe>",{src:a,"class":f,frameborder:0,vspace:0,hspace:0,scrolling:"auto"});n.html(l);l.load(function(){n.removeClass("nivo-lightbox-loading")})}}else if(r.attr("data-lightbox-type")=="ajax"){e.ajax({url:s,cache:false,success:function(r){var i=e('<div class="nivo-lightbox-ajax" />');i.append(r);n.html(i).removeClass("nivo-lightbox-loading");if(i.outerHeight()<n.height()){i.css({position:"relative",top:"50%","margin-top":-(i.outerHeight()/2)+"px"})}e(t).resize(function(){if(i.outerHeight()<n.height()){i.css({position:"relative",top:"50%","margin-top":-(i.outerHeight()/2)+"px"})}})},error:function(){var t=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(t).removeClass("nivo-lightbox-loading")}})}else if(s.substring(0,1)=="#"&&r.attr("data-lightbox-type")=="inline"){if(e(s).length){var c=e('<div class="nivo-lightbox-inline" />');c.append(e(s).clone().show());n.html(c).removeClass("nivo-lightbox-loading");if(c.outerHeight()<n.height()){c.css({position:"relative",top:"50%","margin-top":-(c.outerHeight()/2)+"px"})}e(t).resize(function(){if(c.outerHeight()<n.height()){c.css({position:"relative",top:"50%","margin-top":-(c.outerHeight()/2)+"px"})}})}else{var h=e('<div class="nivo-lightbox-error"><p>'+i.options.errorMessage+"</p></div>");n.html(h).removeClass("nivo-lightbox-loading")}}else if(r.attr("data-lightbox-type")=="iframe"){var p=e("<iframe>",{src:s,"class":"nivo-lightbox-item",frameborder:0,vspace:0,hspace:0,scrolling:"auto"});n.html(p);p.load(function(){n.removeClass("nivo-lightbox-loading")})}else{return false}if(r.attr("title")){var d=e("<span>",{"class":"nivo-lightbox-title"});d.text(r.attr("title"));e(".nivo-lightbox-title-wrap").html(d)}else{e(".nivo-lightbox-title-wrap").html("")}},constructLightbox:function(){if(e(".nivo-lightbox-overlay").length)return e(".nivo-lightbox-overlay");var t=e("<div>",{"class":"nivo-lightbox-overlay nivo-lightbox-theme-"+this.options.theme+" nivo-lightbox-effect-"+this.options.effect});var n=e("<div>",{"class":"nivo-lightbox-wrap"});var r=e("<div>",{"class":"nivo-lightbox-content"});var i=e('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>');var s=e('<a href="#" class="nivo-lightbox-close" title="Close">Close</a>');var o=e("<div>",{"class":"nivo-lightbox-title-wrap"});var u=0;if(u)t.addClass("nivo-lightbox-ie");n.append(r);n.append(o);t.append(n);t.append(i);t.append(s);e("body").append(t);var a=this;if(a.options.clickOverlayToClose){t.on("click",function(t){if(t.target===this||e(t.target).hasClass("nivo-lightbox-content")||e(t.target).hasClass("nivo-lightbox-image")){a.destructLightbox()}})}s.on("click",function(e){e.preventDefault();a.destructLightbox()});return t},destructLightbox:function(){var t=this;this.options.beforeHideLightbox.call(this);e(".nivo-lightbox-overlay").removeClass("nivo-lightbox-open");e(".nivo-lightbox-nav").hide();e("body").removeClass("nivo-lightbox-body-effect-"+t.options.effect);var n=0;if(n){e(".nivo-lightbox-overlay iframe").attr("src"," ");e(".nivo-lightbox-overlay iframe").remove()}e(".nivo-lightbox-prev").off("click");e(".nivo-lightbox-next").off("click");e(".nivo-lightbox-content").empty();this.options.afterHideLightbox.call(this)},isHidpi:function(){var e="(-webkit-min-device-pixel-ratio: 1.5),                              (min--moz-device-pixel-ratio: 1.5),                              (-o-min-device-pixel-ratio: 3/2),                              (min-resolution: 1.5dppx)";if(t.devicePixelRatio>1)return true;if(t.matchMedia&&t.matchMedia(e).matches)return true;return false}};e.fn[i]=function(t){return this.each(function(){if(!e.data(this,i)){e.data(this,i,new o(this,t))}})}})(jQuery,window,document)


/*
Form Dependency Plugin
======================
Allows for elements to be shown/hidden based on a set of field validation rules.

See README.md for documentation.

Author: Ben Brady
Licensed: MIT

https://gist.github.com/keyo/2970340

*/
!function(a){a.fn.dependsOn=function(b){var c=this,d={rules:[],ruleLogic:"all",onValid:function(b){a(b).show()},onInvalid:function(b){a(b).hide()}};b=a.extend(d,b);var e=function(){var d=0,e=0;a.each(b.rules,function(b,c){if(void 0==c.validate&&(c.validate=function(b){var c;return 0==a(b+":not(:disabled)").length?!0:(c=a(b).is("input[type=checkbox], input[type=radio]")?a(b+":not(:disabled):checked").val():a(b+":not(:disabled)").val(),void 0!=c?!0:!1)}),"string"==typeof c.validate){var f=c.validate;c.validate=function(b){var c;return c=a(b).is("input[type=checkbox], input[type=radio]")?a(b+":not(:disabled):checked").val():a(b+":not(:disabled)").val(),c===f?!0:!1}}var g=c.validate(c.field);g?d++:e++}),"all"==b.ruleLogic&&e>0?b.onInvalid(c):"any"==b.ruleLogic&&0==d?b.onInvalid(c):b.onValid(c)};return a.each(b.rules,function(b,c){a(c.field).change(function(){e()})}),e(),this}}(jQuery);

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/* ---------- start jqprint ---------- */ 
// -----------------------------------------------------------------------
// eros@recoding.it
// jqprint 0.3
//
// - 19/06/2009 - some new implementations, added Opera support
// - 11/05/2009 - first sketch
//
// Printing plug-in for jQuery, evolution of jPrintArea: http://plugins.jquery.com/project/jPrintArea
// requires jQuery 1.3.x
//------------------------------------------------------------------------
(function(a){var b;a.fn.jqprint=function(c){b=a.extend({},a.fn.jqprint.defaults,c);var d=this instanceof jQuery?this:a(this);if(b.operaSupport&&a.browser.opera){var e=window.open("","jqPrint-preview");e.document.open();var f=e.document}else{var g=a("<iframe  />");b.debug||g.css({position:"absolute",width:"0px",height:"0px",left:"-600px",top:"-600px"}),g.appendTo("body");var f=g[0].contentWindow.document}b.importCSS&&(a("link[media=print]").length>0?a("link[media=print]").each(function(){f.write("<link type='text/css' rel='stylesheet' href='"+a(this).attr("href")+"' media='print' />")}):a("link").each(function(){f.write("<link type='text/css' rel='stylesheet' href='"+a(this).attr("href")+"' />")})),b.addLogo&&f.write("<div class='topLogo'><img src='http://assets.fxcm.com/img/chrome/header/fxcm_logo.gif' width='240' height='49' alt='FXCM' /></div>"),b.printContainer?f.write(d.outer()):d.each(function(){f.write(a(this).html())});var h=a(".customMessageTarget").html();b.customMSG&&f.write(h),f.close(),(b.operaSupport&&a.browser.opera?e:g[0].contentWindow).focus(),setTimeout(function(){(b.operaSupport&&a.browser.opera?e:g[0].contentWindow).print(),e&&e.close()},1e3)},a.fn.jqprint.defaults={debug:!1,importCSS:!0,addLogo:!0,printContainer:!0,customMSG:!0,operaSupport:!0},jQuery.fn.outer=function(){return a(a("<div></div>").html(this.clone())).html()}})(jQuery);
/* ---------- end jqprint ---------- */ 
/*
 * jquery.tools 1.1.2 - The missing UI library for the Web
 * 
 * [tools.tabs-1.0.4, tools.tabs.slideshow-1.0.2, tools.tabs.history-1.0.2, tools.tooltip-1.1.3, tools.tooltip.slide-1.0.0, tools.tooltip.dynamic-1.0.1]
 * 
 * Copyright (c) 2009 Tero Piirainen
 * http://flowplayer.org/tools/
 *
 * Dual licensed under MIT and GPL 2+ licenses
 * http://www.opensource.org/licenses
 * 
 * -----
 * 
 * File generated: Mon Feb 15 12:49:33 GMT 2010
 */
(function(d){d.tools=d.tools||{};d.tools.tabs={version:"1.0.4",conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",api:false,rotate:false},addEffect:function(e,f){c[e]=f}};var c={"default":function(f,e){this.getPanes().hide().eq(f).show();e.call()},fade:function(g,e){var f=this.getConf(),j=f.fadeOutSpeed,h=this.getPanes();if(j){h.fadeOut(j)}else{h.hide()}h.eq(g).fadeIn(f.fadeInSpeed,e)},slide:function(f,e){this.getPanes().slideUp(200);this.getPanes().eq(f).slideDown(400,e)},ajax:function(f,e){this.getPanes().eq(0).load(this.getTabs().eq(f).attr("href"),e)}};var b;d.tools.tabs.addEffect("horizontal",function(f,e){if(!b){b=this.getPanes().eq(0).width()}this.getCurrentPane().animate({width:0},function(){d(this).hide()});this.getPanes().eq(f).animate({width:b},function(){d(this).show();e.call()})});function a(g,h,f){var e=this,j=d(this),i;d.each(f,function(k,l){if(d.isFunction(l)){j.bind(k,l)}});d.extend(this,{click:function(k,n){var o=e.getCurrentPane();var l=g.eq(k);if(typeof k=="string"&&k.replace("#","")){l=g.filter("[href*="+k.replace("#","")+"]");k=Math.max(g.index(l),0)}if(f.rotate){var m=g.length-1;if(k<0){return e.click(m,n)}if(k>m){return e.click(0,n)}}if(!l.length){if(i>=0){return e}k=f.initialIndex;l=g.eq(k)}if(k===i){return e}n=n||d.Event();n.type="onBeforeClick";j.trigger(n,[k]);if(n.isDefaultPrevented()){return}c[f.effect].call(e,k,function(){n.type="onClick";j.trigger(n,[k])});n.type="onStart";j.trigger(n,[k]);if(n.isDefaultPrevented()){return}i=k;g.removeClass(f.current);l.addClass(f.current);return e},getConf:function(){return f},getTabs:function(){return g},getPanes:function(){return h},getCurrentPane:function(){return h.eq(i)},getCurrentTab:function(){return g.eq(i)},getIndex:function(){return i},next:function(){return e.click(i+1)},prev:function(){return e.click(i-1)},bind:function(k,l){j.bind(k,l);return e},onBeforeClick:function(k){return this.bind("onBeforeClick",k)},onClick:function(k){return this.bind("onClick",k)},unbind:function(k){j.unbind(k);return e}});g.each(function(k){d(this).bind(f.event,function(l){e.click(k,l);return false})});if(location.hash){e.click(location.hash)}else{if(f.initialIndex===0||f.initialIndex>0){e.click(f.initialIndex)}}h.find("a[href^=#]").click(function(k){e.click(d(this).attr("href"),k)})}d.fn.tabs=function(i,f){var g=this.eq(typeof f=="number"?f:0).data("tabs");if(g){return g}if(d.isFunction(f)){f={onBeforeClick:f}}var h=d.extend({},d.tools.tabs.conf),e=this.length;f=d.extend(h,f);this.each(function(l){var j=d(this);var k=j.find(f.tabs);if(!k.length){k=j.children()}var m=i.jquery?i:j.children(i);if(!m.length){m=e==1?d(i):j.parent().find(i)}g=new a(k,m,f);j.data("tabs",g)});return f.api?g:this}})(jQuery);
(function(b){var a=b.tools.tabs;a.plugins=a.plugins||{};a.plugins.slideshow={version:"1.0.2",conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:false,autopause:true,interval:3000,clickable:true,api:false}};b.prototype.slideshow=function(e){var f=b.extend({},a.plugins.slideshow.conf),c=this.length,d;e=b.extend(f,e);this.each(function(){var p=b(this),m=p.tabs(),i=b(m),o=m;b.each(e,function(t,u){if(b.isFunction(u)){m.bind(t,u)}});function n(t){return c==1?b(t):p.parent().find(t)}var s=n(e.next).click(function(){m.next()});var q=n(e.prev).click(function(){m.prev()});var h,j,l,g=false;b.extend(m,{play:function(){if(h){return}var t=b.Event("onBeforePlay");i.trigger(t);if(t.isDefaultPrevented()){return m}g=false;h=setInterval(m.next,e.interval);i.trigger("onPlay");m.next()},pause:function(){if(!h){return m}var t=b.Event("onBeforePause");i.trigger(t);if(t.isDefaultPrevented()){return m}h=clearInterval(h);l=clearInterval(l);i.trigger("onPause")},stop:function(){m.pause();g=true},onBeforePlay:function(t){return m.bind("onBeforePlay",t)},onPlay:function(t){return m.bind("onPlay",t)},onBeforePause:function(t){return m.bind("onBeforePause",t)},onPause:function(t){return m.bind("onPause",t)}});if(e.autopause){var k=m.getTabs().add(s).add(q).add(m.getPanes());k.hover(function(){m.pause();j=clearInterval(j)},function(){if(!g){j=setTimeout(m.play,e.interval)}})}if(e.autoplay){l=setTimeout(m.play,e.interval)}else{m.stop()}if(e.clickable){m.getPanes().click(function(){m.next()})}if(!m.getConf().rotate){var r=e.disabledClass;if(!m.getIndex()){q.addClass(r)}m.onBeforeClick(function(u,t){if(!t){q.addClass(r)}else{q.removeClass(r);if(t==m.getTabs().length-1){s.addClass(r)}else{s.removeClass(r)}}})}});return e.api?d:this}})(jQuery);
(function(d){var a=d.tools.tabs;a.plugins=a.plugins||{};a.plugins.history={version:"1.0.2",conf:{api:false}};var e,b;function c(f){if(f){var g=b.contentWindow.document;g.open().close();g.location.hash=f}}d.fn.onHash=function(g){var f=this;if(d.browser.msie&&d.browser.version<"8"){if(!b){b=d("<iframe/>").attr("src","javascript:false;").hide().get(0);d("body").prepend(b);setInterval(function(){var i=b.contentWindow.document,j=i.location.hash;if(e!==j){d.event.trigger("hash",j);e=j}},100);c(location.hash||"#")}f.bind("click.hash",function(h){c(d(this).attr("href"))})}else{setInterval(function(){var j=location.hash;var i=f.filter("[href$="+j+"]");if(!i.length){j=j.replace("#","");i=f.filter("[href$="+j+"]")}if(i.length&&j!==e){e=j;d.event.trigger("hash",j)}},100)}d(window).bind("hash",g);return this};d.fn.history=function(g){var h=d.extend({},a.plugins.history.conf),f;g=d.extend(h,g);this.each(function(){var j=d(this).tabs(),i=j.getTabs();if(j){f=j}i.onHash(function(k,l){if(!l||l=="#"){l=j.getConf().initialIndex}j.click(l)});i.click(function(k){location.hash=d(this).attr("href").replace("#","")})});return g.api?f:this}})(jQuery);
(function(c){var d=[];c.tools=c.tools||{};c.tools.tooltip={version:"1.1.3",conf:{effect:"toggle",fadeOutSpeed:"fast",tip:null,predelay:0,delay:30,opacity:1,lazy:undefined,position:["top","center"],offset:[0,0],cancelDefault:true,relative:false,oneInstance:true,events:{def:"mouseover,mouseout",input:"focus,blur",widget:"focus mouseover,blur mouseout",tooltip:"mouseover,mouseout"},api:false},addEffect:function(e,g,f){b[e]=[g,f]}};var b={toggle:[function(e){var f=this.getConf(),g=this.getTip(),h=f.opacity;if(h<1){g.css({opacity:h})}g.show();e.call()},function(e){this.getTip().hide();e.call()}],fade:[function(e){this.getTip().fadeIn(this.getConf().fadeInSpeed,e)},function(e){this.getTip().fadeOut(this.getConf().fadeOutSpeed,e)}]};function a(f,g){var p=this,k=c(this);f.data("tooltip",p);var l=f.next();if(g.tip){l=c(g.tip);if(l.length>1){l=f.nextAll(g.tip).eq(0);if(!l.length){l=f.parent().nextAll(g.tip).eq(0)}}}function o(u){var t=g.relative?f.position().top:f.offset().top,s=g.relative?f.position().left:f.offset().left,v=g.position[0];t-=l.outerHeight()-g.offset[0];s+=f.outerWidth()+g.offset[1];var q=l.outerHeight()+f.outerHeight();if(v=="center"){t+=q/2}if(v=="bottom"){t+=q}v=g.position[1];var r=l.outerWidth()+f.outerWidth();if(v=="center"){s-=r/2}if(v=="left"){s-=r}return{top:t,left:s}}var i=f.is(":input"),e=i&&f.is(":checkbox, :radio, select, :button"),h=f.attr("type"),n=g.events[h]||g.events[i?(e?"widget":"input"):"def"];n=n.split(/,\s*/);if(n.length!=2){throw"Tooltip: bad events configuration for "+h}f.bind(n[0],function(r){if(g.oneInstance){c.each(d,function(){this.hide()})}var q=l.data("trigger");if(q&&q[0]!=this){l.hide().stop(true,true)}r.target=this;p.show(r);n=g.events.tooltip.split(/,\s*/);l.bind(n[0],function(){p.show(r)});if(n[1]){l.bind(n[1],function(){p.hide(r)})}});f.bind(n[1],function(q){p.hide(q)});if(!c.browser.msie&&!i&&!g.predelay){f.mousemove(function(){if(!p.isShown()){f.triggerHandler("mouseover")}})}if(g.opacity<1){l.css("opacity",g.opacity)}var m=0,j=f.attr("title");if(j&&g.cancelDefault){f.removeAttr("title");f.data("title",j)}c.extend(p,{show:function(r){if(r){f=c(r.target)}clearTimeout(l.data("timer"));if(l.is(":animated")||l.is(":visible")){return p}function q(){l.data("trigger",f);var t=o(r);if(g.tip&&j){l.html(f.data("title"))}r=r||c.Event();r.type="onBeforeShow";k.trigger(r,[t]);if(r.isDefaultPrevented()){return p}t=o(r);l.css({position:"absolute",top:t.top,left:t.left});var s=b[g.effect];if(!s){throw'Nonexistent effect "'+g.effect+'"'}s[0].call(p,function(){r.type="onShow";k.trigger(r)})}if(g.predelay){clearTimeout(m);m=setTimeout(q,g.predelay)}else{q()}return p},hide:function(r){clearTimeout(l.data("timer"));clearTimeout(m);if(!l.is(":visible")){return}function q(){r=r||c.Event();r.type="onBeforeHide";k.trigger(r);if(r.isDefaultPrevented()){return}b[g.effect][1].call(p,function(){r.type="onHide";k.trigger(r)})}if(g.delay&&r){l.data("timer",setTimeout(q,g.delay))}else{q()}return p},isShown:function(){return l.is(":visible, :animated")},getConf:function(){return g},getTip:function(){return l},getTrigger:function(){return f},bind:function(q,r){k.bind(q,r);return p},onHide:function(q){return this.bind("onHide",q)},onBeforeShow:function(q){return this.bind("onBeforeShow",q)},onShow:function(q){return this.bind("onShow",q)},onBeforeHide:function(q){return this.bind("onBeforeHide",q)},unbind:function(q){k.unbind(q);return p}});c.each(g,function(q,r){if(c.isFunction(r)){p.bind(q,r)}})}c.prototype.tooltip=function(e){var f=this.eq(typeof e=="number"?e:0).data("tooltip");if(f){return f}var g=c.extend(true,{},c.tools.tooltip.conf);if(c.isFunction(e)){e={onBeforeShow:e}}else{if(typeof e=="string"){e={tip:e}}}e=c.extend(true,g,e);if(typeof e.position=="string"){e.position=e.position.split(/,?\s/)}if(e.lazy!==false&&(e.lazy===true||this.length>20)){this.one("mouseover",function(h){f=new a(c(this),e);f.show(h);d.push(f)})}else{this.each(function(){f=new a(c(this),e);d.push(f)})}return e.api?f:this}})(jQuery);
(function(b){var a=b.tools.tooltip;a.effects=a.effects||{};a.effects.slide={version:"1.0.0"};b.extend(a.conf,{direction:"up",bounce:false,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!b.browser.msie});var c={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};b.tools.tooltip.addEffect("slide",function(d){var f=this.getConf(),g=this.getTip(),h=f.slideFade?{opacity:f.opacity}:{},e=c[f.direction]||c.up;h[e[1]]=e[0]+"="+f.slideOffset;if(f.slideFade){g.css({opacity:0})}g.show().animate(h,f.slideInSpeed,d)},function(e){var g=this.getConf(),i=g.slideOffset,h=g.slideFade?{opacity:0}:{},f=c[g.direction]||c.up;var d=""+f[0];if(g.bounce){d=d=="+"?"-":"+"}h[f[1]]=d+"="+i;this.getTip().animate(h,g.slideOutSpeed,function(){b(this).hide();e.call()})})})(jQuery);
(function(d){var c=d.tools.tooltip;c.plugins=c.plugins||{};c.plugins.dynamic={version:"1.0.1",conf:{api:false,classNames:"top right bottom left"}};function b(h){var e=d(window);var g=e.width()+e.scrollLeft();var f=e.height()+e.scrollTop();return[h.offset().top<=e.scrollTop(),g<=h.offset().left+h.width(),f<=h.offset().top+h.height(),e.scrollLeft()>=h.offset().left]}function a(f){var e=f.length;while(e--){if(f[e]){return false}}return true}d.fn.dynamic=function(g){var h=d.extend({},c.plugins.dynamic.conf),f;if(typeof g=="number"){g={speed:g}}g=d.extend(h,g);var e=g.classNames.split(/\s/),i;this.each(function(){if(d(this).tooltip().jquery){throw"Lazy feature not supported by dynamic plugin. set lazy: false for tooltip"}var j=d(this).tooltip().onBeforeShow(function(n,o){var m=this.getTip(),l=this.getConf();if(!i){i=[l.position[0],l.position[1],l.offset[0],l.offset[1],d.extend({},l)]}d.extend(l,i[4]);l.position=[i[0],i[1]];l.offset=[i[2],i[3]];m.css({visibility:"hidden",position:"absolute",top:o.top,left:o.left}).show();var k=b(m);if(!a(k)){if(k[2]){d.extend(l,g.top);l.position[0]="top";m.addClass(e[0])}if(k[3]){d.extend(l,g.right);l.position[1]="right";m.addClass(e[1])}if(k[0]){d.extend(l,g.bottom);l.position[0]="bottom";m.addClass(e[2])}if(k[1]){d.extend(l,g.left);l.position[1]="left";m.addClass(e[3])}if(k[0]||k[2]){l.offset[0]*=-1}if(k[1]||k[3]){l.offset[1]*=-1}}m.css({visibility:"visible"}).hide()});j.onShow(function(){var l=this.getConf(),k=this.getTip();l.position=[i[0],i[1]];l.offset=[i[2],i[3]]});j.onHide(function(){var k=this.getTip();k.removeClass(g.classNames)});f=j});return g.api?f:this}})(jQuery);
/* ---------- end jquery.tools ---------- */ 
/**
* maxChar jQuery plugin
* @author Mitch Wilson
* @version 0.1.0
* @requires jQuery
* @description Enforces max character limit on any input or textarea HTML element and provides user feedback.
* @see http://mitchwilson.net/2009/08/03/new-jquery-plugin-maxchar/
*/

(function($){
	$.fn.maxChar = function(limit, options) {
		// Define default settings and override w/ options.
		settings = jQuery.extend({
			indicator: 'indicator',
			pluralMessage: ' characters remaining',
			rate: 200,
			singularMessage: ' character remaining',
			spaceBeforeMessage: ' '
		}, options);
		// Define local variables.
		var limit = limit;
		var remaining = limit;
		var rate = settings.rate;
		var timer = null;
		var target = $(this);
		var indicator = getIndicator();
		var singularMessage = settings.singularMessage;
		var pluralMessage = settings.pluralMessage;
		// If user did not create indicator, we will create default one for them.
		if(indicator.size() == 0) {
			createIndicator();
		}
		// Create helper functions.
		function update(limit){
			var remaining = limit - target.val().length;
			if(remaining < 1) {
			indicator = getIndicator();
				target.val(target.val().slice(0,limit));
				remaining = 0; // Prevents displaying negative remaining character amounts, such as -1.
			}
			if(remaining == 1) {
				indicator.text(remaining + singularMessage);//'1,000 character limit. ' +
			} else {
				indicator.text(remaining + pluralMessage);//'1,000 character limit. ' +
			}
			try {
				if(console) {
					console.log(remaining);
				}
			} catch(e) {
				// Do nothing on error.
			}
		}
		function createIndicator(){
			target.after(settings.spaceBeforeMessage + '<span id="'+settings.indicator+'"></span>');
		}
		function getIndicator(){
			return $('#'+settings.indicator);
		}
		// Call update once on code initialization to update view if text is already in textarea,
		// eg, if user relaoads page or hits back button and form textarea retains previoulsy entered text.
		update(limit);
		// Bind to focus event to active when user starts interacting with textarea.
		$(this).focus(function(){
			if(timer == null) {
				timer = setInterval(function(){update(limit)}, rate);
			}
		});
		//
		$(this).blur(function() {
			if(timer != null) {
				clearInterval(timer);
				timer = null;
				// Clear manually in case blur happened between timer updates.
				update(limit);
			}
		});
	};
})(jQuery);
/* FXCM Notes:
 * If testing validation in ie8, you must be in REAL ie8, not compatibility mode.
 */
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 JÃ¶rn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});

/********************* BEGIN Custom Validation Code *********************/

// Checks for any fields related to the requested field name and returns the value, e.g. searching for "name" would get the values for both First Name and Last Name
function getFieldValue(form, fieldName) {
	var fieldValue = '';
	var fields = $(form).serializeArray();
	for (var i = 0; i < fields.length; i++) {
		if ((fields[i].name.toLowerCase().indexOf(fieldName) >= 0) && (fields[i].value != '')) {
			if (fieldName.toLowerCase() !== 'name' || (fields[i].name.toLowerCase() !== 'ibname' && fields[i].name.toLowerCase() !== 'elqformname')) {
			    fieldValue+= (fieldValue ? ' ' : '') + fields[i].value;
			}
		}
	}
	return fieldValue;
}

// Initial error counter required for proper e-mail validation
jQuery.validator.submitStatus = true;

// Function called in showErorrs. Tracks field errors and sends the info to Omniture
function trackFormErrors(errorList, currentForm){
    var errorFieldNames = [];

    for (var i=0 ; i < errorList.length ; i++) {
        var error = errorList[i];
        errorFieldNames.push( fxcm.lib.getFieldName( error.element ) );
    }

    if (errorList.length > 0 && jQuery.validator.submitStatus === true) {

        var formType = "";

        if( $(currentForm).find( '[name="rb"]' ).length ) {
            formType = "demo";
        } else if( $(currentForm).find( '[name="elqFormName"]' ).length ) {
            formType = "eloqua";
        } else {
            formType = "other";
        }

		amplify.publish('fxcm.form.onError', {
			'formType' : formType,
			'formName': fxcm.lib.getFormName(currentForm),
			'errorFieldNames': errorFieldNames.join(",")
		});

		jQuery.validator.submitStatus = false;
	}
}

jQuery.validator._demoBalanceRegEx = /^\d{0,13}(\.\d{0,2})?$/;
jQuery.validator.demoBalanceValidate = function(value, element){
	var demoValidation = typeof fxcm === 'object' && typeof fxcm.Demo === 'function' && typeof fxcm.Demo.prototype.isValidBalance === 'function';

	if (demoValidation ? fxcm.Demo.prototype.isValidBalance(value) : jQuery.validator._demoBalanceRegEx.test(value)) {
		return true;
	} else {
		return this.optional(element);
	}
};

jQuery.validator._emailRegEx = /^[^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*@(\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,})$/i;
jQuery.validator.emailValidate = function(value, element) {
	var demoValidation = typeof fxcm === 'object' && typeof fxcm.Demo === 'function' && typeof fxcm.Demo.prototype.isValidEmail === 'function';

	if (demoValidation ? fxcm.Demo.prototype.isValidEmail(value) : jQuery.validator._emailRegEx.test(value)) {
		return true;
	} else {
		return this.optional(element);
	}
};

jQuery.validator._phoneRegEx = /^[+()_,.:a-zA-Z\-=0-9 *]{0,20}$/i;
jQuery.validator.phoneValidate = function(value, element){
	var demoValidation = typeof fxcm === 'object' && typeof fxcm.Demo === 'function' && typeof fxcm.Demo.prototype.isValidPhone === 'function';

	if (demoValidation ? fxcm.Demo.prototype.isValidPhone(value) : jQuery.validator._phoneRegEx.test(value)) {
		return true;
	} else {
		return this.optional(element);
	}
};

jQuery.validator._zipRegEx = function(value) { return (typeof value === 'string' || typeof value === 'number') && String(value).length <= 10 };
jQuery.validator.zipValidate = function(value, element){
	var demoValidation = typeof fxcm === 'object' && typeof fxcm.Demo === 'function' && typeof fxcm.Demo.prototype.isValidZip === 'function';

	if (demoValidation ? fxcm.Demo.prototype.isValidZip(value) : jQuery.validator._zipRegEx(value)) {
		return true;
	} else {
		return this.optional(element);
	}
};

// Use on sites that need stricter zip code validation. Does not employ fxcm.Demo validation rules.
jQuery.validator._zipRegExStrict = /^\d{5}$/;
jQuery.validator.zipValidateStrict = function(value, element){
	if (jQuery.validator._zipRegExStrict.test(value)) {
		return true;
	} else {
		return this.optional(element);
	}
};

// Use on sites that may require 4 or 5 digit zip codes.
jQuery.validator._zipRegEx4or5Digit = /^\d{4,5}$/;
jQuery.validator.zipValidate4or5Digit = function(value, element){
	if (jQuery.validator._zipRegEx4or5Digit.test(value)) {
		return true;
	} else {
		return this.optional(element);
	}
};

jQuery.validator.addMethod('demobalancecustom', jQuery.validator.demoBalanceValidate, 'Please enter a valid amount.');

jQuery.validator.addMethod('emailcustom', jQuery.validator.emailValidate, 'Please enter a valid email address.');

jQuery.validator.addMethod('phonecustom', jQuery.validator.phoneValidate, 'Please enter a valid phone number.');

jQuery.validator.addMethod('zipcustom', jQuery.validator.zipValidate, 'Please enter a valid zip code.');

jQuery.validator.addMethod('zipcustomstrict', jQuery.validator.zipValidateStrict, 'Please enter a valid 5 digit zip code.');

jQuery.validator.addMethod('zipcustom4or5Digit', jQuery.validator.zipValidate4or5Digit, 'Please enter a valid 4 or 5 digit zip code.');

jQuery.validator.addMethod('DateOfBirth', function(value, element) {
	return this.optional(element) || /^(0?[1-9]|1[012])[-\/.](0?[1-9]|[12][0-9]|3[01])[-\/.](19|20)\d\d$/.test(value);
}, 'Please enter a valid date of birth.');

jQuery.validator.addMethod('DateOfBirthEurope', function(value, element) {
	return this.optional(element) || /^(0?[1-9]|[12][0-9]|3[01])[-\/.](0?[1-9]|1[012])[-\/.](19|20)\d\d$/.test(value);
}, 'Please enter a valid date of birth.');

jQuery.validator.addMethod('DateOfBirthAsia', function(value, element) {
	return this.optional(element) || /^(19|20)\d\d[-\/.](0?[1-9]|1[012])[-\/.](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}, 'Please enter a valid date of birth.');

jQuery.validator.addMethod('numbersCommasPeriodsOnly', function(value, element) {
	return this.optional(element) || /^[0-9,.]+$/.test(value);
}, 'Please use numbers, commas, or periods only.');

jQuery.validator.messages.required = "";

jQuery.validator.standardValidationOptions = {
	// showErrors is a function that sends form error information to Omniture for tracking
	showErrors: function(errorMap, errorList) {
		trackFormErrors(this.errorList, this.currentForm);
		//========BEGIN defaultShowErrors from jQuery.validator======
		for ( var i = 0; this.errorList[i]; i++ ) {
			var error = this.errorList[i];
			this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
			this.showLabel( error.element, error.message );

			// Highlight invalid field's <label>
			this.settings.highlightLabel( this.settings.findLabel(this.currentForm, error.element), this.settings.errorLabelClass, true );
		}

		if( this.errorList.length ) {
			this.toShow = this.toShow.add( this.containers );
		}
		if (this.settings.success) {
			for ( var i = 0; this.successList[i]; i++ ) {
				this.showLabel( this.successList[i] );
			}
		}
		if (this.settings.unhighlight) {
			for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
				this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );

			// Unhighlight invalid field's <label>
				this.settings.highlightLabel( this.settings.findLabel(this.currentForm, elements[i]), this.settings.errorLabelClass, false);
			}
		}
		this.toHide = this.toHide.not( this.toShow );
		this.hideErrors();
		this.addWrapper( this.toShow ).show();
		//=========END defaultShowErrors from jQuery.validator=======

	},
	// End of show Errors

	// Locates associated <label> of a form field
	findLabel: function (form, element){
		if ($(element).length < 1){ return false; }

		var _form = $(form),
			_element = $(element),
			_parentElement = _element.parent(),
			_labels = _parentElement.find('label');

		// if no label found, check if element is contained within its own label
		if (_labels.length < 1 && _parentElement.prop('tagName') === 'LABEL') {
			_labels = _parentElement;
		}

		// if no label found, loop upward through form to locate a label with proper "for" attribute
		while (_labels.length < 1) {
			if (_parentElement[0] === _form[0]) {break;} // reached the top of the form, break out of loop

			_parentElement = _parentElement.parent();
			_labels = _parentElement.find('label[for= '+ _element.attr('id') +']');
		}

		// collect all label elements that reside in a particular radiobox
		if (_element.attr('type') === 'radio'){
			var _radioLabels = _element.closest('.radiobox').find('label');
			if (_radioLabels.length > 0){
				_labels = _labels.add(_radioLabels);
			}
		}

		return _labels;
	},

	// Sets highlighting for <label> elements
	highlightLabel: function (label, errorLabelClass, highlight) {
		if (typeof label === undefined || $(label).length < 1) {return false}

		if(highlight) {
			$(label).addClass(errorLabelClass);
		}
		else {
			$(label).removeClass(errorLabelClass);
		}
	},
	// End label highlighting

	errorElement: 'span',
	errorClass: 'invalid',
	errorLabelClass: 'validate',

	rules: {
		email: {
			required: true,
			emailcustom: true
		},
		JointEmail: {
			emailcustom: true
		},
		phone: {
			phonecustom: true
		},
		TransferAmount: {
			required: '#transferConsent:checked'
		},
		ExistingAccountNumber: {
			required: '#TransferFunds:checked'
		},
		'demo.phone': {
			required: true,
			phonecustom: true
		},
		'demo.initial_balance': {
			demobalancecustom: true
		},
		'demo.zip_postal_code': {
			zipcustom: true
		},
		DateOfBirth: {
			DateOfBirth: true
		},
		AmountDisputed: {
			numbersCommasPeriodsOnly: true
		}
	},
	messages: {
		consent: {
			required: 'Please agree to the statement'
		}
	},
	onfocusout: function(element, event){
		// this function returns determines what to do on blur for each field
		// if there are rules set for the current field (element)
		if(typeof this.settings.rules[element.name] != 'undefined'){
			// if 'phonecustom' is the validation method for this field, and the field is valid
			if(this.settings.rules[element.name]['phonecustom'] && this.element(element)){
				// strip whitespaces from this field
				element.value = element.value.replace(/ /g, '');
			}
		}
		// required so all fields are validated on blur
		this.element(element);
	}

	/* The following options are also available:
	onkeyup:
	onsubmit:
	*/
};

// Field name aliases
var _jQueryValidatorRules = jQuery.validator.standardValidationOptions.rules;
// Aliases for required email rule
_jQueryValidatorRules['demo.email_address'] =
	_jQueryValidatorRules['C_EmailAddress'] =
	_jQueryValidatorRules.EMAIL =
	_jQueryValidatorRules.Email =
	_jQueryValidatorRules.email;

// Aliases for non-required email
_jQueryValidatorRules.JointAccountEmail =
	_jQueryValidatorRules.JointEmailAddress =
	_jQueryValidatorRules.JointEmail;

// Aliases for phone field
_jQueryValidatorRules['C_BusPhone'] =
	_jQueryValidatorRules.PHONE =
	_jQueryValidatorRules.Phone =
	_jQueryValidatorRules.phone;

// Aliases for DOB
_jQueryValidatorRules['DOB'] =
	_jQueryValidatorRules.DateofBirth =
	_jQueryValidatorRules.Dateofbirth =
	_jQueryValidatorRules.dateofbirth =
	_jQueryValidatorRules.DateOfBirth;

var _jQueryValidatorMessages = jQuery.validator.standardValidationOptions.messages;
// Aliases for consent message
_jQueryValidatorMessages.youherbebyacknowledgethatyou =
	_jQueryValidatorMessages.Confirm =
	_jQueryValidatorMessages.consentTransfer =
	_jQueryValidatorMessages.transferConsent =
	_jQueryValidatorMessages.Consent =
	_jQueryValidatorMessages.Consent2 =
	_jQueryValidatorMessages.consent;

// Legacy object to support old code
jQuery.validator.customDemoFormValidationOptions = jQuery.validator.standardValidationOptions;
/*global jQuery */
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement('div');
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

/* ////////////////////////////////////////////////////////////////////////
-----------/ BEGIN jQuery dependency + document ready function / -----------
//////////////////////////////////////////////////////////////////////// */
if (typeof jQuery !== 'undefined') {
$(document).ready(function(){ // begin jQuery document ready function

	/********************* BEGIN Custom Validation Application *********************/
	if (typeof jQuery.validator !== 'undefined') {

		// Required for proper firing of tracking requests
		$("form").submit(function(){
			jQuery.validator.submitStatus = true;
		});

		// The forms must be looped through because jQuery Validator's .validate() function will treat all the forms as one big form
		$('form.std_validate, form.standard, form.custom').each(function() {
			$(this).validate(jQuery.validator.standardValidationOptions);
		});

		// Attach Eloqua AJAX submission
		jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.genericEloquaValidatorSubmitHandler;
		$('form.genericEloqua').each(function() {
			$(this).validate(jQuery.validator.standardValidationOptions);
		});

		jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.confBoxEloquaValidatorSubmitHandler;
		$('form.confBoxEloqua').each(function() {
			$(this).validate(jQuery.validator.standardValidationOptions);
		});

		// Attach actions for Demo signup in conjunction with Seminar event signup
		$('form.confBoxSeminarDemoCoreg').each(function() {

			var $form = $( this );
			var rb = $form.find('input[name="rb"]').val();

			// populate demo.country hidden input field for generating demos
			$('select[name="country"]').change(function() {
				fxcm.internal.setDemoCountryField(this);
			});

			// Set submitHandler
			jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.trackingFactory( fxcm.internal.confBoxEloquaValidatorSubmitHandler, function(){
				var demoField = $form.find( '#demo-signup' );
				var demoFired = false; //default

				// Determine if user requested a demo
				if( demoField.length ) {
					demoFired =  demoField.attr('type') === 'checkbox' ? demoField.is( ':checked' ) : $.inArray( demoField.val().toLowerCase(), [ "yes", "on" ] ) > -1; // support multiple formats (yes/on)
				}

				fxcm.internal.toggleDemoConfText(demoFired); // set proper state of confirmation depending on whether user requested demo or not
				fxcm.internal.seminarDemoCoregTrackingCallback(rb, $form.attr('name'), demoFired);
			});

			$( this ).validate( jQuery.validator.standardValidationOptions );
		});


		// Attach Demo AJAX submission
		$('form.genericDemo').each(function() {
			jQuery.validator.standardValidationOptions.submitHandler = $(this).hasClass('countryFilter') ?
				fxcm.internal.genericCountryDemoValidatorSubmitHandler :
				fxcm.internal.genericDemoValidatorSubmitHandler;
			$(this).validate(jQuery.validator.standardValidationOptions);
		});

		$('form.confBoxDemo').each(function() {
			jQuery.validator.standardValidationOptions.submitHandler = $(this).hasClass('countryFilter') ?
				fxcm.internal.confBoxCountryDemoValidatorSubmitHandler :
				fxcm.internal.confBoxDemoValidatorSubmitHandler;
			$(this).validate(jQuery.validator.standardValidationOptions);
		});

		delete jQuery.validator.standardValidationOptions.submitHandler;
	}
	/********************* END Custom Validation Application *********************/




	/********************* BEGIN UI Application *********************/
	if (typeof fxcm.ui !== 'undefined') {

		// Invoke generic expandableSet functionality
		$('.expandableSet').each(function() {
			new fxcm.ui.ExpandableSet($(this).find('dt'), {
				context: $(this),
				controlLink: $(this).find('a.controlThisSection'),
				hasCloseButton: true,
				closeButtonText: '<i class="ico ico-complex ico-close-sm"></i>',
				publishOnOpenEvent: 'onOpenGeneric'
			});
		});

		// Attach expandable set to expandable forms
		$('.form-expandable').each(function() {
            new fxcm.ui.ExpandableSet( $(this).find('.form-title-big .form-toggle'), {
				target : $(this).closest('.form')
			});
        });

		// Attach generic placeholderLabel functionality
		$('form.placeholderLabel').each(function() {
			new fxcm.ui.PlaceholderLabel(this);
		});

		// Attach generic Smooth Scroll functionality
		$('a.smoothScroll').each(function() {
            new fxcm.ui.SmoothScroll({trigger: $(this)});
        });

		/** -------------------------------------------------
		* BEGIN Instantiate 3.1 responsive nav & search expandables
		* --------------------------------------------------*/

		var $nav1Trigger = $('.omni-menu');
		var $nav1Target = $('ul.nav1');
		var $nav2Trigger = $('.nav1 > li > a').not('li.omni-mobile-nav > a');
		var $searchTrigger = $('.omni-search-mobile');
		var $searchTarget = $('.omni-search');

		// Verify that nav/search DOM elements exist before attempting to instantiate or subscribe via amplify
		if ($nav1Trigger.length && $nav2Trigger.length && $searchTrigger.length ) {

			// invoke nav 1
			var nav1 = new fxcm.ui.ExpandableSet( $nav1Trigger,{
				target: $nav1Target,
				publishOnOpenEvent: 'onOpenNav1'
			});

			// invoke nav 2
			var nav2 = new fxcm.ui.ExpandableSet( $nav2Trigger,{
				accordian: true
			});

			// invoke omnisearch
			var omniSearch = new fxcm.ui.ExpandableSet( $searchTrigger,{
				target: $searchTarget,
				publishOnOpenEvent: 'onOpenOmniSearch'
			});

			/** ---------------------------------------------
			* Manage dependencies between nav and omnisearch
			* ----------------------------------------------*/

			//close search when expanding nav
			amplify.subscribe('fxcm.expandable.onOpenNav1', function(){
				omniSearch.toggle({state:false});
			});

			// close nav when expanding search
			amplify.subscribe('fxcm.expandable.onOpenOmniSearch', function(){
				nav1.toggle({state:false});
			});

			/** ---------------------------------------------
			* Set nav behavior based on breakpoint
			* ----------------------------------------------*/

			// Set page load behavior - disable expandable on page load if in desktop breakpoint
			if ( fxcm.device.getBreakpoint() === 'desktop' ) {
				nav1.disable();
				nav2.disable();
			}

			// post page-load, disable nav1 and nav2 on entering desktop
			amplify.subscribe('fxcm.device.onEnterDesktop', function(){
				nav1.disable();
				nav2.disable();
			});

			// post page-load, reenable nav1 and nav2 expandable on leaving desktop
			amplify.subscribe('fxcm.device.onExitDesktop', function(){
				nav1.enable();
				nav2.enable();
			});
		}

		/** -------------------------------------------------
		* END Instantiate 3.1 responsive nav & search expandables
		* --------------------------------------------------*/


		// Nav 3 expandable
		$('.nav3-left, .nav3-tabs').each(function(){
			var $this = $(this);

			var _settings = {
				// DOM elements
				$selector: $this.find('.nav3-selector'),
				$links: $this.find('.nav3-link'),

				// language and text
				lang: typeof fxcm.siteLang !== 'string' ? 'en'  : fxcm.siteLang,
				textMap: {
					en: 'Please select'
				}
			};

			var defaultText = typeof _settings.textMap[_settings.lang] === 'string' ? _settings.textMap[_settings.lang] : textMap [en]; // force english text if current translation doesn't exist

			// update the selector's text
			function _updateSelectorText (text){
				var _selector = _settings.$selector.find('a');
				if (!text) {
					_selector.text( defaultText );
				} else {
					_selector.text( text );
				}
			}

			// Instantiate the nav3 expandable set
			new fxcm.ui.ExpandableSet( _settings.$selector, {
				context: $this,
				target: _settings.$links,

				// callback function - update the selector text based on open/close state
				onToggle: function(trigger, target, expanded){
					if ( expanded ) { 		// we opened the nav3
						_updateSelectorText();
					} else {				// we closed the nav3
						_updateSelectorText( target.filter(".current").find('a').text() ); // grab text of current nav item and insert into selector
					}
				}
			});

			// prepare the nav3-left title based on breakpoint: title should contain a link on phone/tablet but should be plain-text on desktop
			if ($this.hasClass('nav3-left')) {
				invokeNav3TitleToggle();
			}
		});

	}



	/********************* END UI Application *********************/




	/********************* BEGIN Tooltip Application *********************/
	if (typeof fxcm.Tooltip !== 'undefined') {
		// Attach simpletip
		$('.has-tooltip').each(function(){
			new fxcm.Tooltip(this);
		});
	}
	/********************* END Tooltip Application *********************/



	/********************* BEGIN Nivo Lightbox Application *********************/
	if (typeof $().nivoLightbox !== 'undefined') {

		$( "a.lightbox[data-lightbox-type='limelight']" ).each( function() {
			$lightbox = $( this );
			var mediaId = $lightbox.data( 'media-id' );
			var classes = $lightbox.prop( 'class' );
			var divId = 'limelight-video-' +  fxcm.lib.generateNumericID(7); // Limelight needs a unique id per video. Generate random ID.
			var innerHTML = $lightbox.html();
			var link = "<a href='#" + divId + "' class='" + classes + "' data-lightbox-type='inline'>" + innerHTML  + "</a>";
			var span = "";
			if( $lightbox.data( 'autoplay' ) ) {
				span = "<span class='limelight no-render' data-media-id='" + mediaId + "' data-autoplay='true'></span>";
			} else {
				span = "<span class='limelight no-render' data-media-id='" + mediaId + "'></span>";
			}
			var hiddenDiv =   "<div id='" + divId + "' style='display: none;'>";
			hiddenDiv +=          span;
			hiddenDiv +=      "</div>";

			$lightbox.replaceWith( link );
			$( 'body' ).append( hiddenDiv );
		} );

		// Attach Nivo Lightbox usage
		$('a.lightbox').nivoLightbox( {
			effect: 'fade',                             // The effect to use when showing the lightbox
			theme: 'fxcm',                              // The lightbox theme to use
			keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
			clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
			onInit: function(){},                       // Callback when lightbox has loaded
			beforeShowLightbox: function(){},           // Callback before the lightbox is shown
			afterShowLightbox: function(lightbox) {
				amplify.publish( 'fxcm.overlay.onOpen' );
				// Check if it's loading a limelight video
				if( $( lightbox )[0].find( '.limelight' )[0] ) {
					// Find the limelight video and render it.
					var shortcode = $( lightbox )[0].find( '.limelight' );
					fxcm.limelight.renderLimelightVideos( shortcode );
					// Because the lightbox loads before the video, we need to recalculate the margins.
					$( '.nivo-lightbox-inline' ).css( { 'margin-top': -( $('.nivo-lightbox-wrap').outerHeight()/2 ) +'px'} );
				}
			},    // Callback after the lightbox is shown
			beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
			afterHideLightbox: function(){},            // Callback after the lightbox is hidden
			onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
			onNext: function(element){},                // Callback when the lightbox gallery goes to next item
			errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
		} );


	}
	/********************* END Nivo Lightbox Application *********************/


	/********************* BEGIN FXCM Responsive Iframes *********************/
	if ( typeof fxcm.iframe !== 'undefined' ) {

		$( 'iframe.fxcm-iframe' ).each( function() {
			fxcm.iframe.activateResponsiveIframe( $( this ) );
		} );

	}
	/********************* END FXCM Responsive Iframes ***********************/




	/********************* BEGIN jQuery Tools Application *********************/
	if (typeof $.tools !== 'undefined') {
		/* Attach tabs to nav3-tabs-static */
		$(".nav3-tabs-static").tabs(".nav3-tabs-content > div").history();
	}
	/********************* END jQuery Tools Application *********************/




	/********************* BEGIN Limelight Video Application *********************/
	if ( typeof fxcm.limelight !== 'undefined' ) {
		$( ".limelight" ).not(".no-render").each( function( index, e ) {
			if( $( this ).data( 'splash' ) || $( this ).children().length > 0 ) {
				$( this ).click( function() {
					// create parent div to avoid jumping on page with height
					var elementHeight = $( this ).outerHeight();
					var limelightWrapper = $( "<div class='limelight-wrapper'></div>" ).height( elementHeight );
					$( this ).wrap( limelightWrapper );

					// Render limelight video
					var videoId = fxcm.limelight.renderLimelightVideos( $( this ) );

					// remove wrapping div based on the .LimelightEmbeddedPlayer span that wraps the object
					$( ".LimelightEmbeddedPlayer." + videoId ).unwrap();

					return false;
				} );
			} else {
				fxcm.limelight.renderLimelightVideos( $( this ) );
			}
		} );
	}
	/********************* END Limelight Video Application *********************/




	/********************* BEGIN Responsive Table functionality *********************/
	// When the page loads, check if there are any tables on the page.
	if( $('.table-wrap table, .table-scrollable table')[0] ) {

		// Set the scrollwrapper to the data associated with the table.
		function setTableScrollWrapper( table, scrollWrapper ) {
			// Some circumstances, like when an overlay shows, we want to reset the scrollwrapper since it clones it on the page.
			if( typeof scrollWrapper === 'undefined' ) {
				scrollWrapper = table.closest( '.table-wrap-scroll' );
			}
			// Store a reference to the wrapper element
			table.data('scrollWrapper', scrollWrapper);
		}

		// Look through each table and apply the table-wrap-scroll div.
		$('.table-wrap table, .table-scrollable table').each( function() {
			$table = $( this );

			// Create the wrapper element
			var scrollWrapper = $( '<div />', {
				'class': 'table-wrap-scroll',
				'html': '<div />' // The inner div is needed for styling
			} ).insertBefore( $table );

			setTableScrollWrapper( $table, scrollWrapper );

			// Move the scrollable element inside the wrapper element
			$table.appendTo( scrollWrapper.find( 'div' ) );

			// Set to true if you want the arrow icons to be displayed.  ex: < scrollable >
			var hasScrollableIcon = false;

			var scrollableContent = "";
			if( hasScrollableIcon ) {
				scrollableContent = '<span class="scrollable-icon has-ico txt-light-grey"><i class="ico ico-simple-blue ico-triangle-right-sm left"></i> Scrollable <i class="ico ico-simple-blue ico-triangle-right-sm right"></i></span>';
			} else {
				scrollableContent = '<span class="scrollable-icon txt-light-grey">Scrollable</span>';
			}

			$( scrollableContent ).insertBefore( scrollWrapper );
		} );



		// Bind an event to the window for resize and orientation change.
		$( window ).bind( 'resize orientationchange', function() {
			$('.table-wrap table, .table-scrollable table').each( function() {
				checkTableWidth( $( this ) );
			} );
		} );

		// Subscribe to expandableSet's onOpen event. When open, run checkTableWidth();
		amplify.subscribe( 'fxcm.expandable.onOpenGeneric', function() {
			$('.table-wrap table, .table-scrollable table').each( function() {
				checkTableWidth( $( this ) );
			} );
		} );

		// Subscribe to expandableSet's onOpen event. When open, run checkTableWidth();
		amplify.subscribe( 'fxcm.overlay.onOpen', function() {
			$('.table-wrap table, .table-scrollable table').each( function() {
				// Reset the scrollwrapper since it clones it when open. We do this by not passing the scrollwrapper to the function.
				setTableScrollWrapper( $( this ) );
				checkTableWidth( $( this ) );
			} );
		} );

		// Add a scroll event to all tables that have the .has-scroll class.
		$( '.table-wrap-scroll > div' ).scroll( function() {
			$this = $( this );
			$tableWrap = $this.parent().parent();
			// get the scroll bar position and the max position it can be
			var scrollPos = $this.scrollLeft();
			var scrollMax = $this[0].scrollWidth - $this.parent().width();
			// If the scroll position is from the left, add gradient on both sides.
			if( scrollPos > 0 ) {
				$tableWrap.addClass( 'has-scroll-left' );
				$tableWrap.addClass( 'has-scroll-right' );
			} else if( scrollPos === 0 ) {
				$tableWrap.removeClass( 'has-scroll-left' );
			}
			// If the scrollbar position gets the end, remove the right gradient
			if( scrollPos === scrollMax  ) {
				$tableWrap.removeClass( 'has-scroll-right' );
			}
		} );

		// Check table width relative to it's parent, and apply class names to the wrapper.
		function checkTableWidth( table ) {
			$table = table;
			if( $table.outerWidth() > $table.parent().outerWidth() ) {
				$table.data('scrollWrapper').parent().addClass('has-scroll has-scroll-right');
			} else {
				$table.data('scrollWrapper').parent().removeClass('has-scroll has-scroll-right has-scroll-left');
			}
		}

		jQuery( window ).trigger( 'resize' );
	}
	/********************* END Responsive Table functionality *********************/




	/********************* BEGIN Device Specific Anchor URLs *****************/

	if(typeof fxcm.device !== 'undefined') {

		if( fxcm.device.isTouch() ) {

			$('a.device-redirect').each( function() {
				fxcm.device.registerDeviceRedirect( $( this ) );
			} );

		}

	}

	/********************* END Device Specific Anchor URLs ********************/





	/********************* BEGIN Anchor Specific Logic *****************/

	/**
	 * Attach to links that should open in a popup chromeless window
	 *
	 * Note: Because you can use this with anchor confirm, we want this to not trigger if it has that class on it
	 */
	$( 'a.popup' ).not( '.anchor-confirm' ).click( function( e ) {
		e.preventDefault();
		var url = $( this ).attr( 'href' );
		launchChromelessWindow( url );
	} );

	/**
	 * Register an element that has a requires a confirmation to continue based if it's a touch device.
	 */
	$( 'a.anchor-confirm' ).click( function( e ) {

		$element = $( this );

		var hrefUrl = $element.prop( 'href' );
		var confirmText = $element.data( 'confirm-text');
		var cancelUrl = $element.data( 'cancel-url' );
		var hasCancelUrl = false;
		var hasPopup = false;
		var defaultConfirmText = "On a mobile device? \n\nThe platform you chose is optimized for desktop use and may render unfavorably on mobile devices. Are you sure you want to continue?";

		// If there is no custom confirm text, then pull the default text.
		if( confirmText === "" || typeof confirmText === 'undefined' ) {
			confirmText = defaultConfirmText;
		}

		// If there is a custom cancel url, then when cancel is hit, redirect to that new url
		if( cancelUrl !== "" && typeof cancelUrl !== 'undefined' ) {
			hasCancelUrl = true;
		}

		// Check if the link is a popup link
		if( $element.hasClass('popup') ) {
			hasPopup = true;
		}

		// If has class touch-only and is desktop, then return and don't do anything.
		if( $element.hasClass( 'touch-only' ) && !fxcm.device.isTouch() ) {
			if( hasPopup ) {
				launchChromelessWindow( hrefUrl );
				return false;
			} else {
				return true;
			}
		}

		// run the confirm prompt, if true, continue to new page using the href value
		// else if, there is a cancel url, redirect to the cancel url,
		// else, do nothing and keep them on the same page.
		if( confirm( confirmText ) === true ) {
			if( hasPopup ) {
				e.preventDefault();
				launchChromelessWindow( hrefUrl );
			} else {
				return true;
			}
		} else if( hasCancelUrl ) {
			e.preventDefault();
			// Tests whether they used ctrl+click to open in new tab or not
			// Won't be used on touch devices obviously, but good just to have in case.
			// http://davidwalsh.name/window-open
			if( hasPopup ) {
				launchChromelessWindow( hrefUrl );
			} else {
				if(e.metaKey || e.ctrlKey || e.button === 1) {
					window.open( cancelUrl );
				}
				else {
					window.location = cancelUrl;
				}
			}
		} else {
			e.preventDefault();
			return false;
		}
	} );

	/********************* END Anchor Specific Logic ********************/




	/********************* BEGIN Device Specific Anchor URLs *****************/

	if(typeof fxcm.ui.Teleport !== 'undefined') {

		/**
		 * Aside Nav 3
		 * On tablet and mobile, move navigation under the article h1
		 */
		new fxcm.ui.Teleport( $( 'aside.S nav.nav3' ) , {
			instructions: [
				{
					breakpoints : [ "tablet", "mobile" ],
					method : "before",
					destination : "article.C"
				}
			],
			beforeTeleportComplete: function( element ) {
			},
			onTeleportComplete: function( element ) {
			}
		} );

		/**
		 * Nav 4 product meta
		 * On tablet and mobile, move links below content
		 */
		new fxcm.ui.Teleport( $( '.nav4-product-meta' ), {
			instructions: [
				{
					breakpoints : [ "tablet", "mobile" ],
					method : "after",
					destination : ".product-feature-content"
				}
			],
			beforeTeleportComplete: function( element ) {
			},
			onTeleportComplete: function( element ) {
			}
		} );

	}

	/********************* END Device Specific Anchor URLs ********************/




	/********************* Additional Applications *********************/
	// Set autocomplete="off" for all submit buttons to prevent FF issue where submit stays disabled through refresh
	$('input[type=submit],input[type=image]').attr('autocomplete', 'off');

	// Add cross-domain tracking params to mirror trader demo iframes
	(function(){
		var demoIframe = $('.mtdemo-iframe')[0];
		if (demoIframe && typeof s === 'object' && typeof s.Hook === 'function') {
			s.Hook('CrossDomainiFrame', demoIframe);
		}
	}());

	// align background heights
	alignBackgrounds();

	// append chat to or hdie trigger-chat elements
	appendChat();

    // GTM Form Start Event
    $( 'form input,textarea,select' ).on( 'focus.gtmOnStart', function() {
        var form = $( this ).closest( 'form' );
		gtmFormStart( form, $( this ) );

        // store data within the form element that stores form-start as true.
        form.attr( 'data-form-start', true );

		// remove the focus.gtmOnStart event from just forms that have been started
		$( 'form[data-form-start="true"] input, form[data-form-start="true"] textarea, form[data-form-start="true"] select' ).off( 'focus.gtmOnStart' );
    } );

});
}
/* ////////////////////////////////////////////////////////////////////////
-----------/ END jQuery dependency + document ready function / -----------
//////////////////////////////////////////////////////////////////////// */

/**
 * GTM Form Start Event Publish Function
 * @param {object} form
 * @param {jQuery object} field
 */
function gtmFormStart( form, field ) {
	var data = {};

	data.fieldName = fxcm.lib.getFieldName( field[0] );
	data.formName = fxcm.lib.getFormName( form[0] );

    if( form.attr( "id" ) === "open-account" ) {
        data.formType = "account";
        // Check if the the fieldname is the anchor with the apply class on it
        if( data.fieldName.indexOf( 'apply' ) > 0 ) {
            data.fieldName = "submit";
        }
    } else if( form.find( '[name="rb"]' ).length ) {
        data.formType = "demo";
    } else if( form.find( '[name="elqFormName"]' ).length ) {
        data.formType = "eloqua";
    } else {
        data.formType = "other";
    }

	amplify.publish( 'fxcm.form.onStart', data );
}

/* ------- Enquire application ------- */
if (typeof enquire !== 'undefined' && typeof fxcm.device !== 'undefined') {

	var mobileBreakpoint = fxcm.device.getBreakpointSetting('mobile');
	var tabletBreakpoint = fxcm.device.getBreakpointSetting('tablet');
	var desktopBreakpoint = fxcm.device.getBreakpointSetting('desktop');

	/* Mobile Breakpoint */
	enquire.register( mobileBreakpoint, {
		match : function() {
			fxcm.device.setBreakpoint('mobile', true);
		},
		unmatch : function() {
			fxcm.device.setBreakpoint('mobile', false);
		},
		setup : function() {},
		deferSetup : true,
		destroy : function() {}
	});

	/* Tablet Breakpoint */
	enquire.register( tabletBreakpoint, {
		match : function() {
			fxcm.device.setBreakpoint('tablet', true);
		},
		unmatch : function() {
			fxcm.device.setBreakpoint('tablet', false);
		},
		setup : function() {},
		deferSetup : true,
		destroy : function() {}
	});

	/* Desktop Breakpoint */
	enquire.register( desktopBreakpoint, {
		match : function() {
			fxcm.device.setBreakpoint('desktop', true);
		},
		unmatch : function() {
			fxcm.device.setBreakpoint('desktop', false);
		},
		setup : function() {},
		deferSetup : true,
		destroy : function() {}
	}, true);

}

/* --------- Align background heights that are collected in .bg-align wrappers --------- */
function alignBackgrounds(){
	$('.bg-align').each(function(){
		var bgMaxHeight = 0;
		$(this).find('.bg').each(function(){
			if($(this).find('.bg-inner').outerHeight() > bgMaxHeight){
				bgMaxHeight = $(this).find('.bg-inner').outerHeight();
			}
		});
		$(this).find('.bg .bg-inner').css('height', bgMaxHeight + 'px');
	});
}

/* --------- Launch TS Web Login links within a new window --------- */
function launchChromelessWindow(url) {
	var h = screen.availHeight-150;
	var w = screen.availWidth-150;
	var newwindow = window.open(url, 'chromeless', 'height='+h+', width='+w+', top=25, left=50, scrolling=yes, toolbars=no, menubar=no, resizable=yes');
	try {if (window.focus) {newwindow.focus();}}
		catch(e) { }
}

/* --------- Attach chat functionality to all trigger-chat links ------- */
function appendChat() {
	if( fxcm.device.getDevice() !== 'phone' ) {
		if($('.trigger-chat').length > 0 && typeof lpMTagConfig === 'object'){
			lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length] = function(){
				lpMTag.events.register('LP_DYNBUTTON_STATE', function(name,data){
					var $chatLink = $(lpMTagConfig.dynButton0[data.buttonState + "HTML"]);
					$chatLink.empty();
					$('.trigger-chat').each(function(index){
						$(this).wrapInner($chatLink);
					});
				});
			};
		}
	}
	else{
		$('.trigger-chat').hide();
	}
}

/* --------- Nav3 left: add or remove the link in the nav title depending on current breakpoint.
Link should be visible on mobile/tablet but not on desktop ------- */

function invokeNav3TitleToggle() {
	$(document).ready(function(){
		// setup on inital page load
		if (fxcm.device.getBreakpoint() === 'desktop') {
			_toggleFn('enter');
		} else {
			_toggleFn('exit');
		}

		// subscribe to breakpoint change events
		amplify.subscribe('fxcm.device.onEnterDesktop', function(data) { _toggleFn(data.state); });
		amplify.subscribe('fxcm.device.onExitDesktop', function(data) { _toggleFn(data.state); });
	});

	var _toggleFn = function(state){
		var title = $('.nav3-left-title');
		var text = title.text(); // cache the original text for use during current page view
		var overviewLink = document.location.pathname.split('/'); // extract the overview link for our current section

		if (overviewLink[0] === '') overviewLink.shift();
		if (overviewLink[overviewLink.length -1] === '') overviewLink.pop();

		overviewLink = '/' + overviewLink.slice(0,overviewLink.length-1).join('/') + '/';
		state = state.toLowerCase(); // state can either be "enter" or "exit"

		if(state === 'enter') {
			title.find('a').replaceWith(text);
		} else if (state === 'exit') {
			title.empty().append('<a href="' + overviewLink + '" class="has-ico"><i class="ico ico-simple-dark-gray ico-arrow-left-long-lg"></i>' + text + '</a>');
		}
	};
}

// Create Object for Custom Omniture Tracking
var sProperties = sProperties || {};

// Windows Phone 8 media queries fix
(function() {
	if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style");
		msViewportStyle.appendChild(
			document.createTextNode("@-ms-viewport{width:auto!important}")
		);
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
	}
})();
fxcm.registration = {};

// Demo RB Map
fxcm.registration.demoRBMap = {
	active_trader: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	au_dd_ts_retail: {
		platform: 'ts',
		db: {AUD: 'AUDMINIDEMO', USD: 'PremiumDemo'}
	},
	au_at_ts_retail: {
		platform: 'ts',
		db: {AUD: 'AUDMINIDEMO', USD: 'U100D1'}
	},
	au_dd_mt4_retail: {
		platform: 'mt4',
		db: {AUD: 'MT4AUDDEMO', USD: 'MT4USDDEMO02'}
	},
	canada: {
		platform: 'ts',
		db: {USD: 'U10D2'}
	},
	canada_friedberg_mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'},
		server: {USD: 'FXCM-USDDemo01'}
	},
	canada_friedberg_ninja: {
		platform: 'ninja',
		db: {USD: 'U100D1'}
	},
	cnbc_10k_au: {
		db: {AUD: 'AUDMINIDEMO'}
	},
	cnbc_10k_llc: {
		db: {USD: 'PremiumDemo'}
	},
	cnbc_10k_ltd: {
		db: {USD: 'U100D1'}
	},
	dailyfx_au: {
		platform: 'ts',
		db: {AUD: 'AUDMINIDEMO'}
	},
	dailyfx_uk: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	dailyfx_us: {
		platform: 'ts',
		db: {USD: 'PremiumDemo'}
	},
	etradefx: {
		db: {USD: 'MINIDEMO7'}
	},
	fmcm_sp: {
		db: {EUR: 'EUDEMO'}
	},
	fx_greece: {
		platform: 'ts',
		db: {USD: 'MiniDemo', EUR: 'EUDEMO'}
	},
	fxcm: {
		platform: 'ts',
		db: {USD: 'PremiumDemo'}
	},
	'fxcm-french': {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcm_germany: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcm_italy: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcm_testing: {
		platform: 'ts',
		db: {EUR: 'MT4EURDEMO', GBP: 'MT4GBPDEMO', USD: 'MT4USDDEMO' }
	},
	fxcm_university_contest: {
		platform: 'ts',
		db: {USD: 'PremiumDemo'}
	},
	fxcmau: {
		platform: 'ts',
		db: {AUD: 'AUDMINIDEMO', USD: 'PremiumDemo'}
	},
	fxcmar_mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmasia: {
		db: {USD: 'HKDEMO2', HKD: 'HONGKONGDEMO'}
	},
	fxcmasiaen: {
		db: {USD: 'HKDEMO2', HKD: 'HONGKONGDEMO'}
	},
	fxcmbullion_tc_ts2_dd: {
		db: {USD: 'HKDEMO2', HKD: 'HONGKONGDEMO'}
	},
	fxcmbullion_en_ts2_dd: {
		db: {USD: 'HKDEMO2', HKD: 'HONGKONGDEMO'}
	},
	fxcmbullion_sc_ts2_dd:{
		db: {USD: 'HKDEMO2', HKD: 'HONGKONGDEMO'}
	},
	fxcmau_bt: {
		platform: 'mt4',
		db: {AUD: 'MT4AUDDEMO', USD: 'MT4USDDEMO02'},
		server: {AUD: 'FXCM-AUDDemo01', USD: 'FXCM-USDDemo02'}
	},
	fxcmde_mt4: {
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'},
		server: {EUR: 'FXCM-EURDemo01'}
	},
	fxcmfr_mt4: {
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'},
		server: {EUR: 'FXCM-EURDemo01'}
	},
	fxcmgbp_spread_betting: {
		db: {GBP: 'GBDEMO'}
	},
	fxcmgr_mt4: {
		platform: 'mt4',
		db: {GBP: 'MT4GBPDEMO', USD: 'MT4USDDEMO02', EUR: 'MT4EURDEMO' }
	},
	fxcmm_ar_at_ts : {
		db: {USD: 'MiniDemo'}
	},
	fxcmsc_mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmtc_mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmuk: {
		platform: 'ts',
		db: {GBP: 'GBDEMO', EUR: 'EUDEMO', USD: 'PremiumDemo'}
	},
	'fxcmuk-chinese': {
		platform: 'ts',
		db: {USD: 'U100D5'}
	},
	fxcmuk_active_trader: {
		db: {GBP: 'GBDEMO', EUR: 'EUDEMO', USD: 'U100D1'}
	},
	fxcmuk_bt: {
		platform: 'mt4',
		db: {GBP: 'MT4GBPDEMO', EUR: 'MT4EURDEMO', USD: 'MT4USDDEMO02'},
		server: {GBP: 'FXCM-GBPDemo01', EUR: 'FXCM-EURDemo01', USD: 'FXCM-USDDemo02'}
	},
	fxcmuk_es: {
		platform: 'ts',
		db: {EUR: 'EUDEMO', GBP: 'GBDEMO', USD: 'PremiumDemo'}
	},
	fxcmuk_de_dd_mt4: {
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'}
	},
	fxcmuk_de_dd_ts: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_de_at_ts_retail: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	ninja_trader_de: {
		platform: 'ninja',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_fr_dd_mt4: {
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'}
	},
	fxcmuk_fr_dd_ts: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_fr_at_ts_retail: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_hellas_dd_tsii: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_hellas_ninja: {
		platform: 'ninja',
		db: {USD: 'MiniDemo', EUR: 'EUDEMO'}
	},
	fxcmuk_it_dd_ts: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_it_dd_mt4: {
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'}
	},
    fxcmuk_it_at_ts_retail:{
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_spread_betting: {
		platform: 'ts',
		db: {GBP: 'GBDEMO'}
	},
	fxcmuk_zh_at: {
		db: {USD: 'U100D5'}
	},
	fxcmuksb_mt4: {
		platform: 'mt4',
		db: {GBP: 'MT4GBPDEMO'},
		server: { GBP: 'FXCM-GBPDemo01'}
	},
	godmodetradercontest: {
		db: {EUR: 'EUDEMO'}
	},
	llc_dd_mt4_retail_usd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	llc_dd_ts_retail_usd: {
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	ltd_dd_mt4_retail: {
		platform: 'mt4',
		db: {GBP: 'MT4GBPDEMO', EUR: 'MT4EURDEMO', USD: 'MT4USDDEMO02'}
	},
	ltd_dd_mt4_retail_gbp: {
		platform: 'mt4',
		db: {GBP: 'MT4GBPDEMO'}
	},
	ltd_dd_ts_retail: {
		platform: 'ts',
		db: {GBP: 'GBDEMO', EUR: 'EUDEMO', USD: 'U100D2'}
	},
	ltd_dd_ts_retail_usd: {
		platform: 'ts',
		db: {USD: 'U100D2'}
	},
	ltd_ninja: {
		platform: 'ninja',
		db: {GBP: 'GBDEMO', EUR: 'EUDEMO', USD: 'MiniDemo'}
	},
	fxcm_markets_usd_ts_dd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcm_markets_usd_ts_ndd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcm_markets_usd_mt4_dd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'},
		server: {USD: 'FXCM-USDDemo01'}
	},
	fxcm_markets_usd_mt4_ndd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'},
		server: {USD: 'FXCM-USDDemo01'}
	},
	fxcm_markets_ts_at_ndd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmm_ar_ts_dd: {
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmm_ar_ts_ndd: {
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmm_ar_mt4_dd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmm_ar_mt4_ndd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'},
		server: {USD: 'FXCM-USDDemo01'}
	},
	mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO02'},
		server: {USD: 'FXCM-USDDemo02'}
	},
	ninja_trader_llc: {
		platform: 'ninja',
		db: {USD: 'MiniDemo'}
	},
	strategy_trader_llc: {
		db: {USD: 'U100D1'}
	},
	tsg_llc: {
		db: {USD: 'XTPDEMO01'}
	},
	ninja_trader_au: {
		db: {AUD: 'AUDMINIDEMO', USD: 'PremiumDemo'}
	},
	ninja_trader_fr: {
		platform: 'ninja',
		db: {EUR: 'EUDEMO'}
	},
	fxcmid_markets_mt4_dd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmid_markets_usd_mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmid_markets_ts_dd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmid_markets_ts_ndd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmph_markets_mt4_dd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmph_markets_mt4_ndd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmph_markets_ts_dd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmph_markets_ts_ndd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmmy_markets_mt4_ndd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmmy_markets_ts_dd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmmy_markets_ts_ndd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	ftlbullion_demo: {
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmau_tc_mt4: {
		platform: 'mt4',
		db: {AUD: 'MT4AUDDEMO'}
	},
	fxcmau_sc_mt4: {
		platform: 'mt4',
		db: {AUD: 'MT4AUDDEMO'}
	},
	fxcmau_chinese: {
		platform: 'ts',
		db: {AUD: 'AUDMINIDEMO'}
	},
	fxcmmy_markets_mt4_dd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmth_markets_ts_dd:{
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmth_markets_ts_ndd:{
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmth_markets_mt4_dd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmth_markets_mt4_ndd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmvn_markets_ts_dd:{
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmvn_markets_ts_ndd:{
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmvn_markets_mt4_dd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmvn_markets_mt4_ndd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmbullion_en_mt4_dd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO02'}
	},
	fxcmbullion_tc_mt4_dd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO02'}
	},
	fxcmbullion_sc_mt4_dd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO02'}
	},
    fxcm_italian:{
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
    fxcmit_mt4:{
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'},
		server: {EUR: 'FXCM-EURDemo01'}
	},
    fxcm_italian_ninja:{
		platform: 'ninja',
		db: {EUR: 'EUDEMO'}
	}
};
fxcm.registration.demoRBMap['fxcm-italy'] = fxcm.registration.demoRBMap.fxcm_italy;
fxcm.registration.demoRBMap.fxcmuk_french = fxcm.registration.demoRBMap['fxcm-french'];


fxcm.packageDetails = {};
fxcm.packageDetails.packageUsed = 'fxcm3.1';
fxcm.packageDetails.filesIncluded = 31;
fxcm.packageDetails.libraries = ['modernizr', 'matchmedia', 'enquire', 'jquery', 'json2', 'amplify', 'handlebars'];
fxcm.packageDetails.modules = ['support', 'lib', 'calendar', 'demo', 'device', 'eloqua', 'iframe', 'limelight', 'internal', 'jpersist', 'mtagconfig', 'tooltip', 'twitterstream', 'ui', 'gtm-prep', 'gtm'];
fxcm.packageDetails.plugins = ['nivo-lightbox', 'formdependency', 'jqmigrate', 'jqprint', 'jqtools', 'maxchar', 'validation', 'fitvids'];