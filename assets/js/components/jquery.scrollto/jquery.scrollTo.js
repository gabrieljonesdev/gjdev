!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(s){"use strict";var w=s.scrollTo=function(e,t,o){return s(window).scrollTo(e,t,o)};function y(e){return!e.nodeName||-1!==s.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])}function t(e){return"function"==typeof e}function n(e){return t(e)||s.isPlainObject(e)?e:{top:e,left:e}}return w.defaults={axis:"xy",duration:0,limit:!0},s.fn.scrollTo=function(e,o,h){"object"==typeof o&&(h=o,o=0),"function"==typeof h&&(h={onAfter:h}),"max"===e&&(e=9e9),h=s.extend({},w.defaults,h),o=o||h.duration;var x=h.queue&&1<h.axis.length;return x&&(o/=2),h.offset=n(h.offset),h.over=n(h.over),this.each(function(){if(null!==e){var f,u=y(this),a=u?this.contentWindow||window:this,c=s(a),l=e,d={};switch(typeof l){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(l)){l=n(l);break}l=u?s(l):s(l,a);case"object":if(0===l.length)return;(l.is||l.style)&&(f=(l=s(l)).offset())}var m=t(h.offset)&&h.offset(a,l)||h.offset;s.each(h.axis.split(""),function(e,t){var o="x"===t?"Left":"Top",n=o.toLowerCase(),r="scroll"+o,i=c[r](),s=w.max(a,t);f?(d[r]=f[n]+(u?0:i-c.offset()[n]),h.margin&&(d[r]-=parseInt(l.css("margin"+o),10)||0,d[r]-=parseInt(l.css("border"+o+"Width"),10)||0),d[r]+=m[n]||0,h.over[n]&&(d[r]+=l["x"===t?"width":"height"]()*h.over[n])):(o=l[n],d[r]=o.slice&&"%"===o.slice(-1)?parseFloat(o)/100*s:o),h.limit&&/^\d+$/.test(d[r])&&(d[r]=d[r]<=0?0:Math.min(d[r],s)),!e&&1<h.axis.length&&(i===d[r]?d={}:x&&(p(h.onAfterFirst),d={}))}),p(h.onAfter)}function p(e){var t=s.extend({},h,{queue:!0,duration:o,complete:e&&function(){e.call(a,l,h)}});c.animate(d,t)}})},w.max=function(e,t){var o,n,r,t="x"===t?"Width":"Height",i="scroll"+t;return y(e)?(o="client"+t,n=(r=e.ownerDocument||e.document).documentElement,r=r.body,Math.max(n[i],r[i])-Math.min(n[o],r[o])):e[i]-s(e)[t.toLowerCase()]()},s.Tween.propHooks.scrollLeft=s.Tween.propHooks.scrollTop={get:function(e){return s(e.elem)[e.prop]()},set:function(e){var t=this.get(e);if(e.options.interrupt&&e._last&&e._last!==t)return s(e.elem).stop();var o=Math.round(e.now);t!==o&&(s(e.elem)[e.prop](o),e._last=this.get(e))}},w});