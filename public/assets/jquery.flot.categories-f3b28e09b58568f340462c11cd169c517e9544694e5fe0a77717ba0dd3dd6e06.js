!function(t){function o(r,o,e,i){var s="categories"==o.xaxis.options.mode,n="categories"==o.yaxis.options.mode;if(s||n){var a=i.format;if(!a){var t=o;if((a=[]).push({x:!0,number:!0,required:!0}),a.push({y:!0,number:!0,required:!0}),t.bars.show||t.lines.show&&t.lines.fill){var u=!!(t.bars.show&&t.bars.zero||t.lines.show&&t.lines.zero);a.push({y:!0,number:!0,required:!1,defaultValue:0,autoscale:u}),t.bars.horizontal&&(delete a[a.length-1].y,a[a.length-1].x=!0)}i.format=a}for(var f=0;f<a.length;++f)a[f].x&&s&&(a[f].number=!1),a[f].y&&n&&(a[f].number=!1)}}function l(r){var o=-1;for(var e in r)r[e]>o&&(o=r[e]);return o+1}function u(r){var o=[];for(var e in r.categories){var i=r.categories[e];i>=r.min&&i<=r.max&&o.push([i,e])}return o.sort(function(r,o){return r[0]-o[0]}),o}function i(r,o,e){if("categories"==r[o].options.mode){if(!r[o].categories){var i={},s=r[o].options.categories||{};if(t.isArray(s))for(var n=0;n<s.length;++n)i[s[n]]=n;else for(var a in s)i[a]=s[a];r[o].categories=i}r[o].options.ticks||(r[o].options.ticks=u),f(e,o,r[o].categories)}}function f(r,o,e){for(var i=r.points,s=r.pointsize,n=r.format,a=o.charAt(0),t=l(e),u=0;u<i.length;u+=s)if(null!=i[u])for(var f=0;f<s;++f){var c=i[u+f];null!=c&&n[f][a]&&(c in e||(e[c]=t,++t),i[u+f]=e[c])}}function e(r,o,e){i(o,"xaxis",e),i(o,"yaxis",e)}function r(r){r.hooks.processRawData.push(o),r.hooks.processDatapoints.push(e)}var s={xaxis:{categories:null},yaxis:{categories:null}};t.plot.plugins.push({init:r,options:s,name:"categories",version:"1.0"})}(jQuery);