!function(s){"use strict";function t(a){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new o(this)),"string"==typeof a&&e[a].call(t)})}var e='[data-dismiss="alert"]',o=function(t){s(t).on("click",e,this.close)};o.VERSION="3.3.7",o.TRANSITION_DURATION=150,o.prototype.close=function(t){function e(){n.detach().trigger("closed.bs.alert").remove()}var a=s(this),r=a.attr("data-target");r||(r=(r=a.attr("href"))&&r.replace(/.*(?=#[^\s]*$)/,""));var n=s("#"===r?[]:r);t&&t.preventDefault(),n.length||(n=a.closest(".alert")),n.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(n.removeClass("in"),s.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",e).emulateTransitionEnd(o.TRANSITION_DURATION):e())};var a=s.fn.alert;s.fn.alert=t,s.fn.alert.Constructor=o,s.fn.alert.noConflict=function(){return s.fn.alert=a,this},s(document).on("click.bs.alert.data-api",e,o.prototype.close)}(jQuery);