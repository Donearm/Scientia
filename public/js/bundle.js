!function(t){var o={};function e(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=o,e.d=function(t,o,a){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var i in t)e.d(a,i,function(o){return t[o]}.bind(null,i));return a},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=0)}([function(t,o,e){e(1),e(2),e(3)},function(t,o){var e;(e=jQuery)(document).ready((function(){e(".has-sub-menu > a span.mark").on("click",(function(t){e(this).parent().siblings("ul").slideToggle("fast","swing",(function(){var t="";t=e(this).is(":visible")?"-":"+",e(this).siblings("a").children("span.mark").text(t)})),t.preventDefault()}))}))},function(t,o){var e;(e=jQuery)(document).ready((function(){e(".nav-prev").on("click",(function(){location.href=e(this).attr("href")})),e(".nav-next").on("click",(function(){location.href=e(this).attr("href")})),e(document).on("keydown",(function(t){"37"==t.which&&e(".nav-prev").click(),"39"==t.which&&e(".nav-next").click()}))}))},function(t,o){var e;(e=jQuery)(window).on("load.BackToTheTop",(function(){e('a[href^="#"]').BackToTheTop()})),e.fn.BackToTheTop=function(t){var o={duration:300,easing:"swing",offset:0,hash:!0,scrolloffset:0,fadein:"slow",fadeout:"slow",display:"bottom-right",top:0,bottom:0,left:0,right:0,zIndex:999,position:"fixed"};e.extend(o,t),e('a[href^="#"]').on("click.BackToTheTop",(function(){var t=void 0!==e(this).data("backtothetop-scrolltop")?e(this).data("backtothetop-scrolltop"):e(this.hash).offset()?e(this.hash).offset().top:"backtothetop-fixed"==e(this).attr("id")&&"#"==e(this).attr("href")?0:null;if(null!==t){var a=void 0===e(this).data("backtothetop-duration")?o.duration:e(this).data("backtothetop-duration"),i=void 0===e(this).data("backtothetop-easing")?o.easing:e(this).data("backtothetop-easing"),n=void 0===e(this).data("backtothetop-offset")?o.offset:e(this).data("backtothetop-offset"),d=void 0===e(this).data("backtothetop-hash")?o.hash:e(this).data("backtothetop-hash"),f=e(this).attr("href");return e("html,body").animate({scrollTop:t+n},a,i,(function(){!0===d&&window.history.pushState("","",f)})),!1}})),function(){var t=e("a#backtothetop-fixed");if(t){var a=void 0===t.data("backtothetop-fixed-scroll-offset")?o.scrolloffset:t.data("backtothetop-fixed-scroll-offset"),i=void 0===t.data("backtothetop-fixed-fadein")?o.fadein:t.data("backtothetop-fixed-fadein"),n=void 0===t.data("backtothetop-fixed-fadeout")?o.fadeout:t.data("backtothetop-fixed-fadeout"),d=void 0===t.data("backtothetop-fixed-display")?o.display:t.data("backtothetop-fixed-display"),f=void 0===t.data("backtothetop-fixed-top")?o.top:t.data("backtothetop-fixed-top"),r=void 0===t.data("backtothetop-fixed-bottom")?o.bottom:t.data("backtothetop-fixed-bottom"),c=void 0===t.data("backtothetop-fixed-left")?o.left:t.data("backtothetop-fixed-left"),s=void 0===t.data("backtothetop-fixed-right")?o.right:t.data("backtothetop-fixed-right"),h=void 0===t.data("backtothetop-fixed-zindex")?o.zIndex:t.data("backtothetop-fixed-zindex");"top-left"==d?(r="none",s="none"):"top-right"==d?(r="none",c="none"):"bottom-left"==d?(f="none",s="none"):"bottom-right"==d&&(f="none",c="none"),t.css({display:"none"}),e(window).on("scroll.BackToTheTop",(function(){e(this).scrollTop()>a?(t.css({top:f,bottom:r,left:c,right:s,zIndex:h,position:o.position}),"none"==t.css("display")&&t.fadeIn(i)):e(this).scrollTop()<=0+a&&"none"!=t.css("display")&&t.fadeOut(n)}))}}()}}]);