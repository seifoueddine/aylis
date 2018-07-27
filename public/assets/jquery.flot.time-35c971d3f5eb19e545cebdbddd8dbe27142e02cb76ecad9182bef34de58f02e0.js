!function(t){function y(e,t){return t*Math.floor(e/t)}function u(e,t,n,r){if("function"==typeof e.strftime)return e.strftime(t);var a,i=function(e,t){return t=""+(null==t?"0":t),1==(e=""+e).length?t+e:e},o=[],s=!1,u=e.getHours(),c=u<12;null==n&&(n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]),null==r&&(r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]),a=12<u?u-12:0==u?12:u;for(var m=0;m<t.length;++m){var l=t.charAt(m);if(s){switch(l){case"a":l=""+r[e.getDay()];break;case"b":l=""+n[e.getMonth()];break;case"d":l=i(e.getDate());break;case"e":l=i(e.getDate()," ");break;case"h":case"H":l=i(u);break;case"I":l=i(a);break;case"l":l=i(a," ");break;case"m":l=i(e.getMonth()+1);break;case"M":l=i(e.getMinutes());break;case"q":l=""+(Math.floor(e.getMonth()/3)+1);break;case"S":l=i(e.getSeconds());break;case"y":l=i(e.getFullYear()%100);break;case"Y":l=""+e.getFullYear();break;case"p":l=c?"am":"pm";break;case"P":l=c?"AM":"PM";break;case"w":l=""+e.getDay()}o.push(l),s=!1}else"%"==l?s=!0:o.push(l)}return o.join("")}function r(e){function t(e,t,n,r){e[t]=function(){return n[r].apply(n,arguments)}}var n={date:e};e.strftime!=undefined&&t(n,"strftime",e,"strftime"),t(n,"getTime",e,"getTime"),t(n,"setTime",e,"setTime");for(var r=["Date","Day","FullYear","Hours","Milliseconds","Minutes","Month","Seconds"],a=0;a<r.length;a++)t(n,"get"+r[a],e,"getUTC"+r[a]),t(n,"set"+r[a],e,"setUTC"+r[a]);return n}function S(e,t){if("browser"==t.timezone)return new Date(e);if(t.timezone&&"utc"!=t.timezone){if("undefined"!=typeof timezoneJS&&"undefined"!=typeof timezoneJS.Date){var n=new timezoneJS.Date;return n.setTimezone(t.timezone),n.setTime(e),n}return r(new Date(e))}return r(new Date(e))}function e(e){e.hooks.processOptions.push(function(e){t.each(e.getAxes(),function(e,t){var g=t.options;"time"==g.mode&&(t.tickGenerator=function(e){var t=[],n=S(e.min,g),r=0,a=g.tickSize&&"quarter"===g.tickSize[1]||g.minTickSize&&"quarter"===g.minTickSize[1]?T:p;null!=g.minTickSize&&(r="number"==typeof g.tickSize?g.tickSize:g.minTickSize[0]*z[g.minTickSize[1]]);for(var i=0;i<a.length-1&&!(e.delta<(a[i][0]*z[a[i][1]]+a[i+1][0]*z[a[i+1][1]])/2&&a[i][0]*z[a[i][1]]>=r);++i);var o=a[i][0],s=a[i][1];if("year"==s){if(null!=g.minTickSize&&"year"==g.minTickSize[1])o=Math.floor(g.minTickSize[0]);else{var u=Math.pow(10,Math.floor(Math.log(e.delta/z.year)/Math.LN10)),c=e.delta/z.year/u;o=c<1.5?1:c<3?2:c<7.5?5:10,o*=u}o<1&&(o=1)}e.tickSize=g.tickSize||[o,s];var m=e.tickSize[0];s=e.tickSize[1];var l=m*z[s];"second"==s?n.setSeconds(y(n.getSeconds(),m)):"minute"==s?n.setMinutes(y(n.getMinutes(),m)):"hour"==s?n.setHours(y(n.getHours(),m)):"month"==s?n.setMonth(y(n.getMonth(),m)):"quarter"==s?n.setMonth(3*y(n.getMonth()/3,m)):"year"==s&&n.setFullYear(y(n.getFullYear(),m)),n.setMilliseconds(0),l>=z.minute&&n.setSeconds(0),l>=z.hour&&n.setMinutes(0),l>=z.day&&n.setHours(0),l>=4*z.day&&n.setDate(1),l>=2*z.month&&n.setMonth(y(n.getMonth(),3)),l>=2*z.quarter&&n.setMonth(y(n.getMonth(),6)),l>=z.year&&n.setMonth(0);var h,f=0,k=Number.NaN;do{if(h=k,k=n.getTime(),t.push(k),"month"==s||"quarter"==s)if(m<1){n.setDate(1);var d=n.getTime();n.setMonth(n.getMonth()+("quarter"==s?3:1));var M=n.getTime();n.setTime(k+f*z.hour+(M-d)*m),f=n.getHours(),n.setHours(0)}else n.setMonth(n.getMonth()+m*("quarter"==s?3:1));else"year"==s?n.setFullYear(n.getFullYear()+m):n.setTime(k+l)}while(k<e.max&&k!=h);return t},t.tickFormatter=function(e,t){var n=S(e,t.options);if(null!=g.timeformat)return u(n,g.timeformat,g.monthNames,g.dayNames);var r=t.options.tickSize&&"quarter"==t.options.tickSize[1]||t.options.minTickSize&&"quarter"==t.options.minTickSize[1],a=t.tickSize[0]*z[t.tickSize[1]],i=t.max-t.min,o=g.twelveHourClock?" %p":"",s=g.twelveHourClock?"%I":"%H";return u(n,a<z.minute?s+":%M:%S"+o:a<z.day?i<2*z.day?s+":%M"+o:"%b %d "+s+":%M"+o:a<z.month?"%b %d":r&&a<z.quarter||!r&&a<z.year?i<z.year?"%b":"%b %Y":r&&a<z.year?i<z.year?"Q%q":"Q%q %Y":"%Y",g.monthNames,g.dayNames)})})})}var n={xaxis:{timezone:null,timeformat:null,twelveHourClock:!1,monthNames:null}},z={second:1e3,minute:6e4,hour:36e5,day:864e5,month:2592e6,quarter:7776e6,year:525949.2*60*1e3},a=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[.25,"month"],[.5,"month"],[1,"month"],[2,"month"]],p=a.concat([[3,"month"],[6,"month"],[1,"year"]]),T=a.concat([[1,"quarter"],[2,"quarter"],[1,"year"]]);t.plot.plugins.push({init:e,options:n,name:"time",version:"1.0"}),t.plot.formatDate=u,t.plot.dateGenerator=S}(jQuery);