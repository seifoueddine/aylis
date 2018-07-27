!function(){"use strict";var L=jQuery.fn.revolution,k=L.is_mobile(),e={alias:"Navigation Min JS",name:"revolution.extensions.navigation.min.js",min_core:"5.4.0",version:"1.3.5"};jQuery.extend(!0,L,{hideUnHideNav:function(t){var e=t.c.width(),i=t.navigation.arrows,a=t.navigation.bullets,n=t.navigation.thumbnails,r=t.navigation.tabs;b(i)&&o(t.c.find(".tparrows"),i.hide_under,e,i.hide_over),b(a)&&o(t.c.find(".tp-bullets"),a.hide_under,e,a.hide_over),b(n)&&o(t.c.parent().find(".tp-thumbs"),n.hide_under,e,n.hide_over),b(r)&&o(t.c.parent().find(".tp-tabs"),r.hide_under,e,r.hide_over),l(t)},resizeThumbsTabs:function(t,e){if(t.navigation&&t.navigation.tabs.enable||t.navigation&&t.navigation.thumbnails.enable){var i=(jQuery(window).width()-480)/500,a=new punchgs.TimelineLite,n=t.navigation.tabs,r=t.navigation.thumbnails,o=t.navigation.bullets;if(a.pause(),i=1<i?1:i<0?0:i,b(n)&&(e||n.width>n.min_width)&&d(i,a,t.c,n,t.slideamount,"tab"),b(r)&&(e||r.width>r.min_width)&&d(i,a,t.c,r,t.slideamount,"thumb"),b(o)&&e){var s=t.c.find(".tp-bullets");s.find(".tp-bullet").each(function(t){var e=jQuery(this),i=t+1,a=e.outerWidth()+parseInt(void 0===o.space?0:o.space,0),n=e.outerHeight()+parseInt(void 0===o.space?0:o.space,0);"vertical"===o.direction?(e.css({top:(i-1)*n+"px",left:"0px"}),s.css({height:(i-1)*n+e.outerHeight(),width:e.outerWidth()})):(e.css({left:(i-1)*a+"px",top:"0px"}),s.css({width:(i-1)*a+e.outerWidth(),height:e.outerHeight()}))})}a.play(),l(t)}return!0},updateNavIndexes:function(t){function e(t){0<i.find(t).lenght&&i.find(t).each(function(t){jQuery(this).data("liindex",t)})}var i=t.c;e(".tp-tab"),e(".tp-bullet"),e(".tp-thumb"),L.resizeThumbsTabs(t,!0),L.manageNavigation(t)},manageNavigation:function(t){var e=L.getHorizontalOffset(t.c.parent(),"left"),i=L.getHorizontalOffset(t.c.parent(),"right");b(t.navigation.bullets)&&("fullscreen"!=t.sliderLayout&&"fullwidth"!=t.sliderLayout&&(t.navigation.bullets.h_offset_old=void 0===t.navigation.bullets.h_offset_old?t.navigation.bullets.h_offset:t.navigation.bullets.h_offset_old,t.navigation.bullets.h_offset="center"===t.navigation.bullets.h_align?t.navigation.bullets.h_offset_old+e/2-i/2:t.navigation.bullets.h_offset_old+e-i),T(t.c.find(".tp-bullets"),t.navigation.bullets,t)),b(t.navigation.thumbnails)&&T(t.c.parent().find(".tp-thumbs"),t.navigation.thumbnails,t),b(t.navigation.tabs)&&T(t.c.parent().find(".tp-tabs"),t.navigation.tabs,t),b(t.navigation.arrows)&&("fullscreen"!=t.sliderLayout&&"fullwidth"!=t.sliderLayout&&(t.navigation.arrows.left.h_offset_old=void 0===t.navigation.arrows.left.h_offset_old?t.navigation.arrows.left.h_offset:t.navigation.arrows.left.h_offset_old,t.navigation.arrows.left.h_offset="right"===t.navigation.arrows.left.h_align?t.navigation.arrows.left.h_offset_old+i:t.navigation.arrows.left.h_offset_old+e,t.navigation.arrows.right.h_offset_old=void 0===t.navigation.arrows.right.h_offset_old?t.navigation.arrows.right.h_offset:t.navigation.arrows.right.h_offset_old,t.navigation.arrows.right.h_offset="right"===t.navigation.arrows.right.h_align?t.navigation.arrows.right.h_offset_old+i:t.navigation.arrows.right.h_offset_old+e),T(t.c.find(".tp-leftarrow.tparrows"),t.navigation.arrows.left,t),T(t.c.find(".tp-rightarrow.tparrows"),t.navigation.arrows.right,t)),b(t.navigation.thumbnails)&&c(t.c.parent().find(".tp-thumbs"),t.navigation.thumbnails),b(t.navigation.tabs)&&c(t.c.parent().find(".tp-tabs"),t.navigation.tabs)},createNavigation:function(o,s){if("stop"===L.compare_version(e).check)return!1;var d=o.parent(),l=s.navigation.arrows,a=s.navigation.bullets,h=s.navigation.thumbnails,p=s.navigation.tabs,t=b(l),n=b(a),r=b(h),u=b(p);i(o,s),v(o,s),t&&x(o,l,s),s.li.each(function(t){var e=jQuery(s.li[s.li.length-1-t]),i=jQuery(this);n&&(s.navigation.bullets.rtl?S(o,a,e,s):S(o,a,i,s)),r&&(s.navigation.thumbnails.rtl?j(o,h,e,"tp-thumb",s):j(o,h,i,"tp-thumb",s)),u&&(s.navigation.tabs.rtl?j(o,p,e,"tp-tab",s):j(o,p,i,"tp-tab",s))}),o.bind("revolution.slide.onafterswap revolution.nextslide.waiting",function(){var i=0==o.find(".next-revslide").length?o.find(".active-revslide").data("index"):o.find(".next-revslide").data("index");o.find(".tp-bullet").each(function(){var t=jQuery(this);t.data("liref")===i?t.addClass("selected"):t.removeClass("selected")}),d.find(".tp-thumb, .tp-tab").each(function(){var t=jQuery(this);t.data("liref")===i?(t.addClass("selected"),t.hasClass("tp-tab")?c(d.find(".tp-tabs"),p):c(d.find(".tp-thumbs"),h)):t.removeClass("selected")});var a=0,n=!1;s.thumbs&&jQuery.each(s.thumbs,function(t,e){a=!1===n?t:a,n=e.id===i||t===i||n});var t=0<a?a-1:s.slideamount-1,e=a+1==s.slideamount?0:a+1;if(!0===l.enable){var r=l.tmp;if(null!=s.thumbs[t]&&jQuery.each(s.thumbs[t].params,function(t,e){r=r.replace(e.from,e.to)}),l.left.j.html(r),r=l.tmp,e>s.slideamount)return;jQuery.each(s.thumbs[e].params,function(t,e){r=r.replace(e.from,e.to)}),l.right.j.html(r),l.rtl?(punchgs.TweenLite.set(l.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+s.thumbs[e].src+")"}),punchgs.TweenLite.set(l.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+s.thumbs[t].src+")"})):(punchgs.TweenLite.set(l.left.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+s.thumbs[t].src+")"}),punchgs.TweenLite.set(l.right.j.find(".tp-arr-imgholder"),{backgroundImage:"url("+s.thumbs[e].src+")"}))}}),m(l),m(a),m(h),m(p),d.on("mouseenter mousemove",function(){d.hasClass("tp-mouseover")||(d.addClass("tp-mouseover"),punchgs.TweenLite.killDelayedCallsTo(_),t&&l.hide_onleave&&_(d.find(".tparrows"),l,"show"),n&&a.hide_onleave&&_(d.find(".tp-bullets"),a,"show"),r&&h.hide_onleave&&_(d.find(".tp-thumbs"),h,"show"),u&&p.hide_onleave&&_(d.find(".tp-tabs"),p,"show"),k&&(d.removeClass("tp-mouseover"),w(o,s)))}),d.on("mouseleave",function(){d.removeClass("tp-mouseover"),w(o,s)}),t&&l.hide_onleave&&_(d.find(".tparrows"),l,"hide",0),n&&a.hide_onleave&&_(d.find(".tp-bullets"),a,"hide",0),r&&h.hide_onleave&&_(d.find(".tp-thumbs"),h,"hide",0),u&&p.hide_onleave&&_(d.find(".tp-tabs"),p,"hide",0),r&&f(d.find(".tp-thumbs"),s),u&&f(d.find(".tp-tabs"),s),"carousel"===s.sliderType&&f(o,s,!0),("on"===s.navigation.touch.touchOnDesktop||"on"==s.navigation.touch.touchenabled&&k)&&f(o,s,"swipebased")}});var c=function(t,e){var i=(t.hasClass("tp-thumbs"),t.hasClass("tp-thumbs")?".tp-thumb-mask":".tp-tab-mask"),a=t.hasClass("tp-thumbs")?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",n=t.hasClass("tp-thumbs")?".tp-thumb":".tp-tab",r=t.find(i),o=r.find(a),s=e.direction,d="vertical"===s?r.find(n).first().outerHeight(!0)+e.space:r.find(n).first().outerWidth(!0)+e.space,l="vertical"===s?r.height():r.width(),h=parseInt(r.find(n+".selected").data("liindex"),0),p=l/d,u="vertical"===s?r.height():r.width(),c=0-h*d,g="vertical"===s?o.height():o.width(),v=c<0-(g-u)?0-(g-u):0<v?0:c,f=o.data("offset");2<p&&(v=c-(f+d)<=0?c-(f+d)<0-d?f:v+d:v,v=c-d+f+l<d&&c+(Math.round(p)-2)*d<f?c+(Math.round(p)-2)*d:v),v=v<0-(g-u)?0-(g-u):0<v?0:v,"vertical"!==s&&r.width()>=o.width()&&(v=0),"vertical"===s&&r.height()>=o.height()&&(v=0),t.hasClass("dragged")||("vertical"===s?o.data("tmmove",punchgs.TweenLite.to(o,.5,{top:v+"px",ease:punchgs.Power3.easeInOut})):o.data("tmmove",punchgs.TweenLite.to(o,.5,{left:v+"px",ease:punchgs.Power3.easeInOut})),o.data("offset",v))},d=function(t,i,e,a,n,r){var o=e.parent().find(".tp-"+r+"s"),s=o.find(".tp-"+r+"s-inner-wrapper"),d=o.find(".tp-"+r+"-mask"),l=a.width*t<a.min_width?a.min_width:Math.round(a.width*t),h=Math.round(l/a.width*a.height),p="vertical"===a.direction?l:l*n+a.space*(n-1),u="vertical"===a.direction?h*n+a.space*(n-1):h,c="vertical"===a.direction?{width:l+"px"}:{height:h+"px"};i.add(punchgs.TweenLite.set(o,c)),i.add(punchgs.TweenLite.set(s,{width:p+"px",height:u+"px"})),i.add(punchgs.TweenLite.set(d,{width:p+"px",height:u+"px"}));var g=s.find(".tp-"+r);return g&&jQuery.each(g,function(t,e){"vertical"===a.direction?i.add(punchgs.TweenLite.set(e,{top:t*(h+parseInt(void 0===a.space?0:a.space,0)),width:l+"px",height:h+"px"})):"horizontal"===a.direction&&i.add(punchgs.TweenLite.set(e,{left:t*(l+parseInt(void 0===a.space?0:a.space,0)),width:l+"px",height:h+"px"}))}),i},g=function(t){var e=0,i=0,a=0,n=0,r=1,o=1,s=1;return"detail"in t&&(i=t.detail),"wheelDelta"in t&&(i=-t.wheelDelta/120),"wheelDeltaY"in t&&(i=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=i,i=0),a=e*r,n=i*r,"deltaY"in t&&(n=t.deltaY),"deltaX"in t&&(a=t.deltaX),(a||n)&&t.deltaMode&&(1==t.deltaMode?(a*=o,n*=o):(a*=s,n*=s)),a&&!e&&(e=a<1?-1:1),n&&!i&&(i=n<1?-1:1),(300<(n=navigator.userAgent.match(/mozilla/i)?10*n:n)||n<-300)&&(n/=10),{spinX:e,spinY:i,pixelX:a,pixelY:n}},i=function(e,i){"on"===i.navigation.keyboardNavigation&&jQuery(document).keydown(function(t){("horizontal"==i.navigation.keyboard_direction&&39==t.keyCode||"vertical"==i.navigation.keyboard_direction&&40==t.keyCode)&&(i.sc_indicator="arrow",i.sc_indicator_dir=0,L.callingNewSlide(e,1)),("horizontal"==i.navigation.keyboard_direction&&37==t.keyCode||"vertical"==i.navigation.keyboard_direction&&38==t.keyCode)&&(i.sc_indicator="arrow",i.sc_indicator_dir=1,L.callingNewSlide(e,-1))})},v=function(l,h){if("on"===h.navigation.mouseScrollNavigation||"carousel"===h.navigation.mouseScrollNavigation){h.isIEEleven=!!navigator.userAgent.match(/Trident.*rv\:11\./),h.isSafari=!!navigator.userAgent.match(/safari/i),h.ischrome=!!navigator.userAgent.match(/chrome/i);var p=h.ischrome?-49:h.isIEEleven||h.isSafari?-9:navigator.userAgent.match(/mozilla/i)?-29:-49,u=h.ischrome?49:h.isIEEleven||h.isSafari?9:navigator.userAgent.match(/mozilla/i)?29:49;l.on("mousewheel DOMMouseScroll",function(t){var e=g(t.originalEvent),i=l.find(".tp-revslider-slidesli.active-revslide").index(),a=l.find(".tp-revslider-slidesli.processing-revslide").index(),n=-1!=i&&0==i||-1!=a&&0==a,r=-1!=i&&i==h.slideamount-1||1!=a&&a==h.slideamount-1,o=!0;"carousel"==h.navigation.mouseScrollNavigation&&(n=r=!1),-1==a?e.pixelY<p?(n||(h.sc_indicator="arrow","reverse"!==h.navigation.mouseScrollReverse&&(h.sc_indicator_dir=1,L.callingNewSlide(l,-1)),o=!1),r||(h.sc_indicator="arrow","reverse"===h.navigation.mouseScrollReverse&&(h.sc_indicator_dir=0,L.callingNewSlide(l,1)),o=!1)):e.pixelY>u&&(r||(h.sc_indicator="arrow","reverse"!==h.navigation.mouseScrollReverse&&(h.sc_indicator_dir=0,L.callingNewSlide(l,1)),o=!1),n||(h.sc_indicator="arrow","reverse"===h.navigation.mouseScrollReverse&&(h.sc_indicator_dir=1,L.callingNewSlide(l,-1)),o=!1)):o=!1;var s=h.c.offset().top-jQuery("body").scrollTop(),d=s+h.c.height();return"carousel"!=h.navigation.mouseScrollNavigation?("reverse"!==h.navigation.mouseScrollReverse&&(0<s&&0<e.pixelY||d<jQuery(window).height()&&e.pixelY<0)&&(o=!0),"reverse"===h.navigation.mouseScrollReverse&&(s<0&&e.pixelY<0||d>jQuery(window).height()&&0<e.pixelY)&&(o=!0)):o=!1,0==o?(t.preventDefault(t),!1):void 0})}},Q=function(t,e,i){return!0===(t=k?jQuery(i.target).closest("."+t).length||jQuery(i.srcElement).closest("."+t).length:jQuery(i.toElement).closest("."+t).length||jQuery(i.originalTarget).closest("."+t).length)||1===t?1:0},f=function(T,S,t){var j=S.carousel;jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"),j.Limit="endless";var e=(k||L.get_browser(),T),i="vertical"===S.navigation.thumbnails.direction||"vertical"===S.navigation.tabs.direction?"none":"vertical",C=S.navigation.touch.swipe_direction||"horizontal";i="swipebased"==t&&"vertical"==C?"none":t?"vertical":i,jQuery.fn.swipetp||(jQuery.fn.swipetp=jQuery.fn.swipe),jQuery.fn.swipetp.defaults&&jQuery.fn.swipetp.defaults.excludedElements||jQuery.fn.swipetp.defaults||(jQuery.fn.swipetp.defaults=new Object),jQuery.fn.swipetp.defaults.excludedElements="label, button, input, select, textarea, .noSwipe",e.swipetp({allowPageScroll:i,triggerOnTouchLeave:!0,treshold:S.navigation.touch.swipe_treshold,fingers:S.navigation.touch.swipe_min_touches,excludeElements:jQuery.fn.swipetp.defaults.excludedElements,swipeStatus:function(t,e,i,a){var n=Q("rev_slider_wrapper",T,t),r=Q("tp-thumbs",T,t),o=Q("tp-tabs",T,t),s=!!jQuery(this).attr("class").match(/tp-tabs|tp-thumb/gi);if("carousel"===S.sliderType&&(("move"===e||"end"===e||"cancel"==e)&&S.dragStartedOverSlider&&!S.dragStartedOverThumbs&&!S.dragStartedOverTabs||"start"===e&&0<n&&0===r&&0===o)){if(k&&("up"===i||"down"===i))return;switch(S.dragStartedOverSlider=!0,a=i&&i.match(/left|up/g)?Math.round(-1*a):a=Math.round(1*a),e){case"start":void 0!==j.positionanim&&(j.positionanim.kill(),j.slide_globaloffset="off"===j.infinity?j.slide_offset:L.simp(j.slide_offset,j.maxwidth)),j.overpull="none",j.wrap.addClass("dragged");break;case"move":if(S.c.find(".tp-withaction").addClass("tp-temporarydisabled"),j.slide_offset="off"===j.infinity?j.slide_globaloffset+a:L.simp(j.slide_globaloffset+a,j.maxwidth),"off"===j.infinity){var d="center"===j.horizontal_align?(j.wrapwidth/2-j.slide_width/2-j.slide_offset)/j.slide_width:(0-j.slide_offset)/j.slide_width;"none"!==j.overpull&&0!==j.overpull||!(d<0||d>S.slideamount-1)?0<=d&&d<=S.slideamount-1&&(0<=d&&a>j.overpull||d<=S.slideamount-1&&a<j.overpull)&&(j.overpull=0):j.overpull=a,j.slide_offset=d<0?j.slide_offset+(j.overpull-a)/1.1+Math.sqrt(Math.abs((j.overpull-a)/1.1)):d>S.slideamount-1?j.slide_offset+(j.overpull-a)/1.1-Math.sqrt(Math.abs((j.overpull-a)/1.1)):j.slide_offset}L.organiseCarousel(S,i,!0,!0);break;case"end":case"cancel":j.slide_globaloffset=j.slide_offset,j.wrap.removeClass("dragged"),L.carouselToEvalPosition(S,i),S.dragStartedOverSlider=!1,S.dragStartedOverThumbs=!1,S.dragStartedOverTabs=!1,setTimeout(function(){S.c.find(".tp-withaction").removeClass("tp-temporarydisabled")},19)}}else{if(("move"!==e&&"end"!==e&&"cancel"!=e||S.dragStartedOverSlider||!S.dragStartedOverThumbs&&!S.dragStartedOverTabs)&&!("start"===e&&0<n&&(0<r||0<o))){if("end"==e&&!s){if(S.sc_indicator="arrow","horizontal"==C&&"left"==i||"vertical"==C&&"up"==i)return S.sc_indicator_dir=0,L.callingNewSlide(S.c,1),!1;if("horizontal"==C&&"right"==i||"vertical"==C&&"down"==i)return S.sc_indicator_dir=1,L.callingNewSlide(S.c,-1),!1}return S.dragStartedOverSlider=!1,S.dragStartedOverThumbs=!1,!(S.dragStartedOverTabs=!1)}0<r&&(S.dragStartedOverThumbs=!0),0<o&&(S.dragStartedOverTabs=!0);var l=S.dragStartedOverThumbs?".tp-thumbs":".tp-tabs",h=S.dragStartedOverThumbs?".tp-thumb-mask":".tp-tab-mask",p=S.dragStartedOverThumbs?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",u=S.dragStartedOverThumbs?".tp-thumb":".tp-tab",c=S.dragStartedOverThumbs?S.navigation.thumbnails:S.navigation.tabs;a=i&&i.match(/left|up/g)?Math.round(-1*a):a=Math.round(1*a);var g=T.parent().find(h),v=g.find(p),f=c.direction,m="vertical"===f?v.height():v.width(),b="vertical"===f?g.height():g.width(),w="vertical"===f?g.find(u).first().outerHeight(!0)+c.space:g.find(u).first().outerWidth(!0)+c.space,_=void 0===v.data("offset")?0:parseInt(v.data("offset"),0),x=0;switch(e){case"start":T.parent().find(l).addClass("dragged"),_="vertical"===f?v.position().top:v.position().left,v.data("offset",_),v.data("tmmove")&&v.data("tmmove").pause();break;case"move":if(m<=b)return!1;x=0<(x=_+a)?"horizontal"===f?x-v.width()*(x/v.width()*x/v.width()):x-v.height()*(x/v.height()*x/v.height()):x;var y="vertical"===f?0-(v.height()-g.height()):0-(v.width()-g.width());x=x<y?"horizontal"===f?x+v.width()*(x-y)/v.width()*(x-y)/v.width():x+v.height()*(x-y)/v.height()*(x-y)/v.height():x,"vertical"===f?punchgs.TweenLite.set(v,{top:x+"px"}):punchgs.TweenLite.set(v,{left:x+"px"});break;case"end":case"cancel":if(s)return x=_+a,x=0<(x="vertical"===f?x<0-(v.height()-g.height())?0-(v.height()-g.height()):x:x<0-(v.width()-g.width())?0-(v.width()-g.width()):x)?0:x,x=Math.abs(a)>w/10?a<=0?Math.floor(x/w)*w:Math.ceil(x/w)*w:a<0?Math.ceil(x/w)*w:Math.floor(x/w)*w,x=0<(x="vertical"===f?x<0-(v.height()-g.height())?0-(v.height()-g.height()):x:x<0-(v.width()-g.width())?0-(v.width()-g.width()):x)?0:x,"vertical"===f?punchgs.TweenLite.to(v,.5,{top:x+"px",ease:punchgs.Power3.easeOut}):punchgs.TweenLite.to(v,.5,{left:x+"px",ease:punchgs.Power3.easeOut}),x=x||("vertical"===f?v.position().top:v.position().left),v.data("offset",x),v.data("distance",a),setTimeout(function(){S.dragStartedOverSlider=!1,S.dragStartedOverThumbs=!1,S.dragStartedOverTabs=!1},100),T.parent().find(l).removeClass("dragged"),!1}}}})},m=function(t){t.hide_delay=jQuery.isNumeric(parseInt(t.hide_delay,0))?t.hide_delay/1e3:.2,t.hide_delay_mobile=jQuery.isNumeric(parseInt(t.hide_delay_mobile,0))?t.hide_delay_mobile/1e3:.2},b=function(t){return t&&t.enable},a=function(t){return t&&t.enable&&!0===t.hide_onleave&&(void 0===t.position||!t.position.match(/outer/g))},w=function(t,e){var i=t.parent();a(e.navigation.arrows)&&punchgs.TweenLite.delayedCall(k?e.navigation.arrows.hide_delay_mobile:e.navigation.arrows.hide_delay,_,[i.find(".tparrows"),e.navigation.arrows,"hide"]),a(e.navigation.bullets)&&punchgs.TweenLite.delayedCall(k?e.navigation.bullets.hide_delay_mobile:e.navigation.bullets.hide_delay,_,[i.find(".tp-bullets"),e.navigation.bullets,"hide"]),a(e.navigation.thumbnails)&&punchgs.TweenLite.delayedCall(k?e.navigation.thumbnails.hide_delay_mobile:e.navigation.thumbnails.hide_delay,_,[i.find(".tp-thumbs"),e.navigation.thumbnails,"hide"]),a(e.navigation.tabs)&&punchgs.TweenLite.delayedCall(k?e.navigation.tabs.hide_delay_mobile:e.navigation.tabs.hide_delay,_,[i.find(".tp-tabs"),e.navigation.tabs,"hide"])},_=function(t,e,i,a){switch(a=void 0===a?.5:a,i){case"show":punchgs.TweenLite.to(t,a,{autoAlpha:1,ease:punchgs.Power3.easeInOut,overwrite:"auto"});break;case"hide":punchgs.TweenLite.to(t,a,{autoAlpha:0,ease:punchgs.Power3.easeInOu,overwrite:"auto"})}},x=function(t,e,i){e.style=void 0===e.style?"":e.style,e.left.style=void 0===e.left.style?"":e.left.style,e.right.style=void 0===e.right.style?"":e.right.style,0===t.find(".tp-leftarrow.tparrows").length&&t.append('<div class="tp-leftarrow tparrows '+e.style+" "+e.left.style+'">'+e.tmp+"</div>"),0===t.find(".tp-rightarrow.tparrows").length&&t.append('<div class="tp-rightarrow tparrows '+e.style+" "+e.right.style+'">'+e.tmp+"</div>");var a=t.find(".tp-leftarrow.tparrows"),n=t.find(".tp-rightarrow.tparrows");e.rtl?(a.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=0,t.revnext()}),n.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=1,t.revprev()})):(n.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=0,t.revnext()}),a.click(function(){i.sc_indicator="arrow",i.sc_indicator_dir=1,t.revprev()})),e.right.j=t.find(".tp-rightarrow.tparrows"),e.left.j=t.find(".tp-leftarrow.tparrows"),e.padding_top=parseInt(i.carousel.padding_top||0,0),e.padding_bottom=parseInt(i.carousel.padding_bottom||0,0),T(a,e.left,i),T(n,e.right,i),e.left.opt=i,e.right.opt=i,"outer-left"!=e.position&&"outer-right"!=e.position||(i.outernav=!0)},u=function(t,e,i){var a=t.outerHeight(!0),n=(t.outerWidth(!0),null==e.opt?0:0==i.conh?i.height:i.conh),r="layergrid"==e.container?"fullscreen"==i.sliderLayout?i.height/2-i.gridheight[i.curWinRange]*i.bh/2:"on"==i.autoHeight||null!=i.minHeight&&0<i.minHeight?n/2-i.gridheight[i.curWinRange]*i.bh/2:0:0,o="top"===e.v_align?{top:"0px",y:Math.round(e.v_offset+r)+"px"}:"center"===e.v_align?{top:"50%",y:Math.round(0-a/2+e.v_offset)+"px"}:{top:"100%",y:Math.round(0-(a+e.v_offset+r))+"px"};t.hasClass("outer-bottom")||punchgs.TweenLite.set(t,o)},y=function(t,e,i){var a=(t.outerHeight(!0),t.outerWidth(!0)),n="layergrid"==e.container?"carousel"===i.sliderType?0:i.width/2-i.gridwidth[i.curWinRange]*i.bw/2:0,r="left"===e.h_align?{left:"0px",x:Math.round(e.h_offset+n)+"px"}:"center"===e.h_align?{left:"50%",x:Math.round(0-a/2+e.h_offset)+"px"}:{left:"100%",x:Math.round(0-(a+e.h_offset+n))+"px"};punchgs.TweenLite.set(t,r)},T=function(t,e,i){var a=0<t.closest(".tp-simpleresponsive").length?t.closest(".tp-simpleresponsive"):0<t.closest(".tp-revslider-mainul").length?t.closest(".tp-revslider-mainul"):0<t.closest(".rev_slider_wrapper").length?t.closest(".rev_slider_wrapper"):t.parent().find(".tp-revslider-mainul"),n=a.width(),r=a.height();if(u(t,e,i),y(t,e,i),"outer-left"!==e.position||"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout?"outer-right"!==e.position||"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout||punchgs.TweenLite.set(t,{right:0-t.outerWidth()+"px",x:e.h_offset+"px"}):punchgs.TweenLite.set(t,{left:0-t.outerWidth()+"px",x:e.h_offset+"px"}),t.hasClass("tp-thumbs")||t.hasClass("tp-tabs")){var o=t.data("wr_padding"),s=t.data("maxw"),d=t.data("maxh"),l=t.hasClass("tp-thumbs")?t.find(".tp-thumb-mask"):t.find(".tp-tab-mask"),h=parseInt(e.padding_top||0,0),p=parseInt(e.padding_bottom||0,0);n<s&&"outer-left"!==e.position&&"outer-right"!==e.position?(punchgs.TweenLite.set(t,{left:"0px",x:0,maxWidth:n-2*o+"px"}),punchgs.TweenLite.set(l,{maxWidth:n-2*o+"px"})):(punchgs.TweenLite.set(t,{maxWidth:s+"px"}),punchgs.TweenLite.set(l,{maxWidth:s+"px"})),r<d+2*o&&"outer-bottom"!==e.position&&"outer-top"!==e.position?(punchgs.TweenLite.set(t,{top:"0px",y:0,maxHeight:h+p+(r-2*o)+"px"}),punchgs.TweenLite.set(l,{maxHeight:h+p+(r-2*o)+"px"})):(punchgs.TweenLite.set(t,{maxHeight:d+"px"}),punchgs.TweenLite.set(l,{maxHeight:d+"px"})),"outer-left"!==e.position&&"outer-right"!==e.position&&(p=h=0),!0===e.span&&"vertical"===e.direction?(punchgs.TweenLite.set(t,{maxHeight:h+p+(r-2*o)+"px",height:h+p+(r-2*o)+"px",top:0-h,y:0}),u(l,e,i)):!0===e.span&&"horizontal"===e.direction&&(punchgs.TweenLite.set(t,{maxWidth:"100%",width:n-2*o+"px",left:0,x:0}),y(l,e,i))}},S=function(t,e,i,a){0===t.find(".tp-bullets").length&&(e.style=void 0===e.style?"":e.style,t.append('<div class="tp-bullets '+e.style+" "+e.direction+'"></div>'));var n=t.find(".tp-bullets"),r=i.data("index"),o=e.tmp;jQuery.each(a.thumbs[i.index()].params,function(t,e){o=o.replace(e.from,e.to)}),n.append('<div class="justaddedbullet tp-bullet">'+o+"</div>");var s=t.find(".justaddedbullet"),d=t.find(".tp-bullet").length,l=s.outerWidth()+parseInt(void 0===e.space?0:e.space,0),h=s.outerHeight()+parseInt(void 0===e.space?0:e.space,0);"vertical"===e.direction?(s.css({top:(d-1)*h+"px",left:"0px"}),n.css({height:(d-1)*h+s.outerHeight(),width:s.outerWidth()})):(s.css({left:(d-1)*l+"px",top:"0px"}),n.css({width:(d-1)*l+s.outerWidth(),height:s.outerHeight()})),s.find(".tp-bullet-image").css({backgroundImage:"url("+a.thumbs[i.index()].src+")"}),s.data("liref",r),s.click(function(){a.sc_indicator="bullet",t.revcallslidewithid(r),t.find(".tp-bullet").removeClass("selected"),jQuery(this).addClass("selected")}),s.removeClass("justaddedbullet"),e.padding_top=parseInt(a.carousel.padding_top||0,0),e.padding_bottom=parseInt(a.carousel.padding_bottom||0,0),e.opt=a,"outer-left"!=e.position&&"outer-right"!=e.position||(a.outernav=!0),n.addClass("nav-pos-hor-"+e.h_align),n.addClass("nav-pos-ver-"+e.v_align),n.addClass("nav-dir-"+e.direction),T(n,e,a)},j=function(e,t,i,a,n){var r="tp-thumb"===a?".tp-thumbs":".tp-tabs",o="tp-thumb"===a?".tp-thumb-mask":".tp-tab-mask",s="tp-thumb"===a?".tp-thumbs-inner-wrapper":".tp-tabs-inner-wrapper",d="tp-thumb"===a?".tp-thumb":".tp-tab",l="tp-thumb"===a?".tp-thumb-image":".tp-tab-image";if(t.visibleAmount=t.visibleAmount>n.slideamount?n.slideamount:t.visibleAmount,t.sliderLayout=n.sliderLayout,0===e.parent().find(r).length){t.style=void 0===t.style?"":t.style;var h='<div class="'+a+"s "+(!0===t.span?"tp-span-wrapper":"")+" "+t.position+" "+t.style+'"><div class="'+a+'-mask"><div class="'+a+'s-inner-wrapper" style="position:relative;"></div></div></div>';"outer-top"===t.position?e.parent().prepend(h):"outer-bottom"===t.position?e.after(h):e.append(h),t.padding_top=parseInt(n.carousel.padding_top||0,0),t.padding_bottom=parseInt(n.carousel.padding_bottom||0,0),"outer-left"!=t.position&&"outer-right"!=t.position||(n.outernav=!0)}var p=i.data("index"),u=e.parent().find(r),c=u.find(o),g=c.find(s),v="horizontal"===t.direction?t.width*t.visibleAmount+t.space*(t.visibleAmount-1):t.width,f="horizontal"===t.direction?t.height:t.height*t.visibleAmount+t.space*(t.visibleAmount-1),m=t.tmp;jQuery.each(n.thumbs[i.index()].params,function(t,e){m=m.replace(e.from,e.to)}),g.append('<div data-liindex="'+i.index()+'" data-liref="'+p+'" class="justaddedthumb '+a+'" style="width:'+t.width+"px;height:"+t.height+'px;">'+m+"</div>");var b=u.find(".justaddedthumb"),w=u.find(d).length,_=b.outerWidth()+parseInt(void 0===t.space?0:t.space,0),x=b.outerHeight()+parseInt(void 0===t.space?0:t.space,0);b.find(l).css({backgroundImage:"url("+n.thumbs[i.index()].src+")"}),"vertical"===t.direction?(b.css({top:(w-1)*x+"px",left:"0px"}),g.css({height:(w-1)*x+b.outerHeight(),width:b.outerWidth()})):(b.css({left:(w-1)*_+"px",top:"0px"}),g.css({width:(w-1)*_+b.outerWidth(),height:b.outerHeight()})),u.data("maxw",v),u.data("maxh",f),u.data("wr_padding",t.wrapper_padding);var y="outer-top"===t.position||"outer-bottom"===t.position?"relative":"absolute";"outer-top"!==t.position&&"outer-bottom"!==t.position||t.h_align,c.css({maxWidth:v+"px",maxHeight:f+"px",overflow:"hidden",position:"relative"}),u.css({maxWidth:v+"px",maxHeight:f+"px",overflow:"visible",position:y,background:t.wrapper_color,padding:t.wrapper_padding+"px",boxSizing:"contet-box"}),b.click(function(){n.sc_indicator="bullet";var t=e.parent().find(s).data("distance");t=void 0===t?0:t,Math.abs(t)<10&&(e.revcallslidewithid(p),e.parent().find(r).removeClass("selected"),jQuery(this).addClass("selected"))}),b.removeClass("justaddedthumb"),t.opt=n,u.addClass("nav-pos-hor-"+t.h_align),u.addClass("nav-pos-ver-"+t.v_align),u.addClass("nav-dir-"+t.direction),T(u,t,n)},l=function(t){var e=t.c.parent().find(".outer-top"),i=t.c.parent().find(".outer-bottom");t.top_outer=e.hasClass("tp-forcenotvisible")?0:e.outerHeight()||0,t.bottom_outer=i.hasClass("tp-forcenotvisible")?0:i.outerHeight()||0},o=function(t,e,i,a){i<e||a<i?t.addClass("tp-forcenotvisible"):t.removeClass("tp-forcenotvisible")}}(jQuery);