!function(){"use strict";var b=jQuery.fn.revolution,l={alias:"SlideAnimations Min JS",name:"revolution.extensions.slideanims.min.js",min_core:"5.4.5",version:"1.8"};jQuery.extend(!0,b,{animateSlide:function(t,e,o,a,i,n,r,s){return"stop"===b.compare_version(l).check?s:d(t,e,o,a,i,n,r,s)}});var pt=function(t,e,o,a){var i=t,n=i.find(".defaultimg"),r=n.data("mediafilter"),s=i.data("zoomstart"),l=i.data("rotationstart");null!=n.data("currotate")&&(l=n.data("currotate")),null!=n.data("curscale")&&"box"==a?s=100*n.data("curscale"):null!=n.data("curscale")&&(s=n.data("curscale")),b.slotSize(n,e);var d=n.attr("src"),h=n.data("bgcolor"),f=e.width,c=e.height,u=n.data("fxof"),p=0;void 0===h&&(h=n.css("backgroundColor")),"on"==e.autoHeight&&(c=e.c.height()),null==u&&(u=0);var g=0,w=n.data("bgfit"),m=n.data("bgrepeat"),v=n.data("bgposition");null==w&&(w="cover"),null==m&&(m="no-repeat"),null==v&&(v="center center");var y="";switch(y=void 0!==h&&0<=h.indexOf("gradient")?"background:"+h:"background-color:"+h+";background-image:url("+d+");background-repeat:"+m+";background-size:"+w+";background-position:"+v,a){case"box":for(var x=0,T=0,z=0;z<e.slots;z++){for(var L=T=0;L<e.slots;L++)i.append('<div class="slot" style="position:absolute;top:'+(p+T)+"px;left:"+(u+x)+"px;width:"+e.slotw+"px;height:"+e.sloth+'px;overflow:hidden;"><div class="slotslide '+r+'" data-x="'+x+'" data-y="'+T+'" style="position:absolute;top:0px;left:0px;width:'+e.slotw+"px;height:"+e.sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-T)+"px;left:"+(0-x)+"px;width:"+f+"px;height:"+c+"px;"+y+';"></div></div></div>'),T+=e.sloth,null!=s&&null!=l&&punchgs.TweenLite.set(i.find(".slot").last(),{rotationZ:l});x+=e.slotw}break;case"vertical":case"horizontal":if("horizontal"==a){if(!o)g=0-e.slotw;for(L=0;L<e.slots;L++)i.append('<div class="slot" style="position:absolute;top:'+(0+p)+"px;left:"+(u+L*e.slotw)+"px;overflow:hidden;width:"+(e.slotw+.3)+"px;height:"+c+'px"><div class="slotslide '+r+'" style="position:absolute;top:0px;left:'+g+"px;width:"+(e.slotw+.6)+"px;height:"+c+'px;overflow:hidden;"><div style="position:absolute;top:0px;left:'+(0-L*e.slotw)+"px;width:"+f+"px;height:"+c+"px;"+y+';"></div></div></div>'),null!=s&&null!=l&&punchgs.TweenLite.set(i.find(".slot").last(),{rotationZ:l})}else{if(!o)g=0-e.sloth;for(L=0;L<e.slots+2;L++)i.append('<div class="slot" style="position:absolute;top:'+(p+L*e.sloth)+"px;left:"+u+"px;overflow:hidden;width:"+f+"px;height:"+e.sloth+'px"><div class="slotslide '+r+'" style="position:absolute;top:'+g+"px;left:0px;width:"+f+"px;height:"+e.sloth+'px;overflow:hidden;"><div style="position:absolute;top:'+(0-L*e.sloth)+"px;left:0px;width:"+f+"px;height:"+c+"px;"+y+';"></div></div></div>'),null!=s&&null!=l&&punchgs.TweenLite.set(i.find(".slot").last(),{rotationZ:l})}}},gt=function(t,o,e,a){function i(){jQuery.each(x,function(t,e){e[0]!=o&&e[8]!=o||(w=e[1],m=e[2],v=y),y+=1})}var n=t[0].opt,r=punchgs.Power1.easeIn,s=punchgs.Power1.easeOut,l=punchgs.Power1.easeInOut,d=punchgs.Power2.easeIn,h=punchgs.Power2.easeOut,f=punchgs.Power2.easeInOut,c=(punchgs.Power3.easeIn,punchgs.Power3.easeOut),u=punchgs.Power3.easeInOut,p=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],g=[16,17,18,19,20,21,22,23,24,25,27],w=0,m=1,v=0,y=0,x=(new Array,[["boxslide",0,1,10,0,"box",!1,null,0,s,s,500,6],["boxfade",1,0,10,0,"box",!1,null,1,l,l,700,5],["slotslide-horizontal",2,0,0,200,"horizontal",!0,!1,2,f,f,700,3],["slotslide-vertical",3,0,0,200,"vertical",!0,!1,3,f,f,700,3],["curtain-1",4,3,0,0,"horizontal",!0,!0,4,s,s,300,5],["curtain-2",5,3,0,0,"horizontal",!0,!0,5,s,s,300,5],["curtain-3",6,3,25,0,"horizontal",!0,!0,6,s,s,300,5],["slotzoom-horizontal",7,0,0,400,"horizontal",!0,!0,7,s,s,300,7],["slotzoom-vertical",8,0,0,0,"vertical",!0,!0,8,h,h,500,8],["slotfade-horizontal",9,0,0,1e3,"horizontal",!0,null,9,h,h,2e3,10],["slotfade-vertical",10,0,0,1e3,"vertical",!0,null,10,h,h,2e3,10],["fade",11,0,1,300,"horizontal",!0,null,11,f,f,1e3,1],["crossfade",11,1,1,300,"horizontal",!0,null,11,f,f,1e3,1],["fadethroughdark",11,2,1,300,"horizontal",!0,null,11,f,f,1e3,1],["fadethroughlight",11,3,1,300,"horizontal",!0,null,11,f,f,1e3,1],["fadethroughtransparent",11,4,1,300,"horizontal",!0,null,11,f,f,1e3,1],["slideleft",12,0,1,0,"horizontal",!0,!0,12,u,u,1e3,1],["slideup",13,0,1,0,"horizontal",!0,!0,13,u,u,1e3,1],["slidedown",14,0,1,0,"horizontal",!0,!0,14,u,u,1e3,1],["slideright",15,0,1,0,"horizontal",!0,!0,15,u,u,1e3,1],["slideoverleft",12,7,1,0,"horizontal",!0,!0,12,u,u,1e3,1],["slideoverup",13,7,1,0,"horizontal",!0,!0,13,u,u,1e3,1],["slideoverdown",14,7,1,0,"horizontal",!0,!0,14,u,u,1e3,1],["slideoverright",15,7,1,0,"horizontal",!0,!0,15,u,u,1e3,1],["slideremoveleft",12,8,1,0,"horizontal",!0,!0,12,u,u,1e3,1],["slideremoveup",13,8,1,0,"horizontal",!0,!0,13,u,u,1e3,1],["slideremovedown",14,8,1,0,"horizontal",!0,!0,14,u,u,1e3,1],["slideremoveright",15,8,1,0,"horizontal",!0,!0,15,u,u,1e3,1],["papercut",16,0,0,600,"",null,null,16,u,u,1e3,2],["3dcurtain-horizontal",17,0,20,100,"vertical",!1,!0,17,l,l,500,7],["3dcurtain-vertical",18,0,10,100,"horizontal",!1,!0,18,l,l,500,5],["cubic",19,0,20,600,"horizontal",!1,!0,19,u,u,500,1],["cube",19,0,20,600,"horizontal",!1,!0,20,u,u,500,1],["flyin",20,0,4,600,"vertical",!1,!0,21,c,u,500,1],["turnoff",21,0,1,500,"horizontal",!1,!0,22,u,u,500,1],["incube",22,0,20,200,"horizontal",!1,!0,23,f,f,500,1],["cubic-horizontal",23,0,20,500,"vertical",!1,!0,24,h,h,500,1],["cube-horizontal",23,0,20,500,"vertical",!1,!0,25,h,h,500,1],["incube-horizontal",24,0,20,500,"vertical",!1,!0,26,f,f,500,1],["turnoff-vertical",25,0,1,200,"horizontal",!1,!0,27,f,f,500,1],["fadefromright",12,1,1,0,"horizontal",!0,!0,28,f,f,1e3,1],["fadefromleft",15,1,1,0,"horizontal",!0,!0,29,f,f,1e3,1],["fadefromtop",14,1,1,0,"horizontal",!0,!0,30,f,f,1e3,1],["fadefrombottom",13,1,1,0,"horizontal",!0,!0,31,f,f,1e3,1],["fadetoleftfadefromright",12,2,1,0,"horizontal",!0,!0,32,f,f,1e3,1],["fadetorightfadefromleft",15,2,1,0,"horizontal",!0,!0,33,f,f,1e3,1],["fadetobottomfadefromtop",14,2,1,0,"horizontal",!0,!0,34,f,f,1e3,1],["fadetotopfadefrombottom",13,2,1,0,"horizontal",!0,!0,35,f,f,1e3,1],["parallaxtoright",15,3,1,0,"horizontal",!0,!0,36,f,d,1500,1],["parallaxtoleft",12,3,1,0,"horizontal",!0,!0,37,f,d,1500,1],["parallaxtotop",14,3,1,0,"horizontal",!0,!0,38,f,r,1500,1],["parallaxtobottom",13,3,1,0,"horizontal",!0,!0,39,f,r,1500,1],["scaledownfromright",12,4,1,0,"horizontal",!0,!0,40,f,d,1e3,1],["scaledownfromleft",15,4,1,0,"horizontal",!0,!0,41,f,d,1e3,1],["scaledownfromtop",14,4,1,0,"horizontal",!0,!0,42,f,d,1e3,1],["scaledownfrombottom",13,4,1,0,"horizontal",!0,!0,43,f,d,1e3,1],["zoomout",13,5,1,0,"horizontal",!0,!0,44,f,d,1e3,1],["zoomin",13,6,1,0,"horizontal",!0,!0,45,f,d,1e3,1],["slidingoverlayup",27,0,1,0,"horizontal",!0,!0,47,l,s,2e3,1],["slidingoverlaydown",28,0,1,0,"horizontal",!0,!0,48,l,s,2e3,1],["slidingoverlayright",30,0,1,0,"horizontal",!0,!0,49,l,s,2e3,1],["slidingoverlayleft",29,0,1,0,"horizontal",!0,!0,50,l,s,2e3,1],["parallaxcirclesup",31,0,1,0,"horizontal",!0,!0,51,f,r,1500,1],["parallaxcirclesdown",32,0,1,0,"horizontal",!0,!0,52,f,r,1500,1],["parallaxcirclesright",33,0,1,0,"horizontal",!0,!0,53,f,r,1500,1],["parallaxcirclesleft",34,0,1,0,"horizontal",!0,!0,54,f,r,1500,1],["notransition",26,0,1,0,"horizontal",!0,null,46,f,d,1e3,1],["parallaxright",15,3,1,0,"horizontal",!0,!0,55,f,d,1500,1],["parallaxleft",12,3,1,0,"horizontal",!0,!0,56,f,d,1500,1],["parallaxup",14,3,1,0,"horizontal",!0,!0,57,f,r,1500,1],["parallaxdown",13,3,1,0,"horizontal",!0,!0,58,f,r,1500,1],["grayscale",11,5,1,300,"horizontal",!0,null,11,f,f,1e3,1],["grayscalecross",11,6,1,300,"horizontal",!0,null,11,f,f,1e3,1],["brightness",11,7,1,300,"horizontal",!0,null,11,f,f,1e3,1],["brightnesscross",11,8,1,300,"horizontal",!0,null,11,f,f,1e3,1],["blurlight",11,9,1,300,"horizontal",!0,null,11,f,f,1e3,1],["blurlightcross",11,10,1,300,"horizontal",!0,null,11,f,f,1e3,1],["blurstrong",11,9,1,300,"horizontal",!0,null,11,f,f,1e3,1],["blurstrongcross",11,10,1,300,"horizontal",!0,null,11,f,f,1e3,1]]);n.duringslidechange=!0,n.testanims=!1,1==n.testanims&&(n.nexttesttransform=void 0===n.nexttesttransform?34:n.nexttesttransform+1,n.nexttesttransform=70<n.nexttesttransform?0:n.nexttesttransform,o=x[n.nexttesttransform][0],console.log(o+"  "+n.nexttesttransform+"  "+x[n.nexttesttransform][1]+"  "+x[n.nexttesttransform][2])),jQuery.each(["parallaxcircles","slidingoverlay","slide","slideover","slideremove","parallax","parralaxto"],function(t,e){o==e+"horizontal"&&(o=1!=a?e+"left":e+"right"),o==e+"vertical"&&(o=1!=a?e+"up":e+"down")}),"random"==o&&(o=Math.round(Math.random()*x.length-1))>x.length-1&&(o=x.length-1),"random-static"==o&&((o=Math.round(Math.random()*p.length-1))>p.length-1&&(o=p.length-1),o=p[o]),"random-premium"==o&&((o=Math.round(Math.random()*g.length-1))>g.length-1&&(o=g.length-1),o=g[o]);var T=[12,13,14,15,16,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];if(1==n.isJoomla&&null!=window.MooTools&&-1!=T.indexOf(o)){var z=Math.round(Math.random()*(g.length-2))+1;z>g.length-1&&(z=g.length-1),0==z&&(z=1),o=g[z]}i(),30<w&&(w=30),w<0&&(w=0);var L=new Object;return L.nexttrans=w,L.STA=x[v],L.specials=m,L},wt=function(t,e){return null==e||jQuery.isNumeric(t)?t:null==t?t:t.split(",")[e]},d=function(a,t,e,o,i,n,r,y){function s(t,c,u,e,p){var o=t.find(".slot"),g=6,w=[2,1.2,.9,.7,.55,.42],m=t.width(),v=t.height();o.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>');for(var a=0;a<g;a++)o.parent().clone(!1).appendTo(n);t.find(".slot-circle-wrapper").each(function(t){if(t<g){var e=jQuery(this),o=e.find(".slot"),a=v<m?w[t]*m:w[t]*v,i=a/2-m/2+0,n=a/2-v/2+0,r={scale:1,transformOrigo:"50% 50%",width:a+"px",height:a+"px",top:v/2-a/2+"px",left:(33==u?m/2-a/2:34==u?m-a:m/2-a/2)+"px",borderRadius:0!=t?"50%":"0"},s={scale:1,top:v/2-a/2,left:m/2-a/2,ease:p},l={width:m,height:v,autoAlpha:1,top:n+"px",position:"absolute",left:(33==u?i:34==u?i+m/2:i)+"px"},d={top:n+"px",left:i+"px",ease:p},h=c,f=0;y.add(punchgs.TweenLite.fromTo(e,h,r,s),f),y.add(punchgs.TweenLite.fromTo(o,h,l,d),f),y.add(punchgs.TweenLite.fromTo(e,.001,{autoAlpha:0},{autoAlpha:1}),0)}})}var l=e[0].opt,d=i.index(),h=o.index()<d?1:0;"arrow"==l.sc_indicator&&(h=l.sc_indicator_dir);var f=gt(e,t,n,h),c=f.STA,u=f.specials;a=f.nexttrans;"on"==n.data("kenburns")&&(a=11);var p=o.data("nexttransid")||0,g=wt(o.data("masterspeed"),p);g=(g="default"===g?c[11]:"random"===g?Math.round(1e3*Math.random()+300):null!=g?parseInt(g,0):c[11])>l.delay?l.delay:g,g+=c[4],l.slots=wt(o.data("slotamount"),p),l.slots=null==l.slots||"default"==l.slots?c[12]:"random"==l.slots?Math.round(12*Math.random()+4):l.slots,l.slots=l.slots<1?"boxslide"==t?Math.round(6*Math.random()+3):"flyin"==t?Math.round(4*Math.random()+1):l.slots:l.slots,l.slots=(4==a||5==a||6==a)&&l.slots<3?3:l.slots,l.slots=0!=c[3]?Math.min(l.slots,c[3]):l.slots,l.slots=9==a?l.width/l.slots:10==a?l.height/l.slots:l.slots,l.rotate=wt(o.data("rotate"),p),l.rotate=null==l.rotate||"default"==l.rotate?0:999==l.rotate||"random"==l.rotate?Math.round(360*Math.random()):l.rotate,l.rotate=l.ie||l.ie9?0:l.rotate,11!=a&&(null!=c[7]&&pt(r,l,c[7],c[5]),null!=c[6]&&pt(n,l,c[6],c[5])),y.add(punchgs.TweenLite.set(n.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),y.add(punchgs.TweenLite.set(r.find(".defaultvid"),{y:0,x:0,top:0,left:0,scale:1}),0),y.add(punchgs.TweenLite.set(n.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),y.add(punchgs.TweenLite.set(r.find(".defaultvid"),{y:"+0%",x:"+0%"}),0),y.add(punchgs.TweenLite.set(n,{autoAlpha:1,y:"+0%",x:"+0%"}),0),y.add(punchgs.TweenLite.set(r,{autoAlpha:1,y:"+0%",x:"+0%"}),0),y.add(punchgs.TweenLite.set(n.parent(),{backgroundColor:"transparent"}),0),y.add(punchgs.TweenLite.set(r.parent(),{backgroundColor:"transparent"}),0);var w=wt(o.data("easein"),p),m=wt(o.data("easeout"),p);if(w="default"===w?c[9]||punchgs.Power2.easeInOut:w||c[9]||punchgs.Power2.easeInOut,m="default"===m?c[10]||punchgs.Power2.easeInOut:m||c[10]||punchgs.Power2.easeInOut,0==a){var v=Math.ceil(l.height/l.sloth),x=0;n.find(".slotslide").each(function(t){var e=jQuery(this);(x+=1)==v&&(x=0),y.add(punchgs.TweenLite.from(e,g/600,{opacity:0,top:0-l.sloth,left:0-l.slotw,rotation:l.rotate,force3D:"auto",ease:w}),(15*t+30*x)/1500)})}if(1==a){var T;n.find(".slotslide").each(function(t){var e=jQuery(this),o=Math.random()*g+300,a=500*Math.random()+200;T<o+a&&(T=a+a,t),y.add(punchgs.TweenLite.from(e,o/1e3,{autoAlpha:0,force3D:"auto",rotation:l.rotate,ease:w}),a/1e3)})}if(2==a){var z=new punchgs.TimelineLite;r.find(".slotslide").each(function(){var t=jQuery(this);z.add(punchgs.TweenLite.to(t,g/1e3,{left:l.slotw,ease:w,force3D:"auto",rotation:0-l.rotate}),0),y.add(z,0)}),n.find(".slotslide").each(function(){var t=jQuery(this);z.add(punchgs.TweenLite.from(t,g/1e3,{left:0-l.slotw,ease:w,force3D:"auto",rotation:l.rotate}),0),y.add(z,0)})}if(3==a){z=new punchgs.TimelineLite;r.find(".slotslide").each(function(){var t=jQuery(this);z.add(punchgs.TweenLite.to(t,g/1e3,{top:l.sloth,ease:w,rotation:l.rotate,force3D:"auto",transformPerspective:600}),0),y.add(z,0)}),n.find(".slotslide").each(function(){var t=jQuery(this);z.add(punchgs.TweenLite.from(t,g/1e3,{top:0-l.sloth,rotation:l.rotate,ease:m,force3D:"auto",transformPerspective:600}),0),y.add(z,0)})}if(4==a||5==a){setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100);var L=g/1e3;z=new punchgs.TimelineLite;r.find(".slotslide").each(function(t){var e=jQuery(this),o=t*L/l.slots;5==a&&(o=(l.slots-t-1)*L/l.slots/1.5),z.add(punchgs.TweenLite.to(e,3*L,{transformPerspective:600,force3D:"auto",top:0+l.height,opacity:.5,rotation:l.rotate,ease:w,delay:o}),0),y.add(z,0)}),n.find(".slotslide").each(function(t){var e=jQuery(this),o=t*L/l.slots;5==a&&(o=(l.slots-t-1)*L/l.slots/1.5),z.add(punchgs.TweenLite.from(e,3*L,{top:0-l.height,opacity:.5,rotation:l.rotate,force3D:"auto",ease:punchgs.eo,delay:o}),0),y.add(z,0)})}if(6==a){l.slots<2&&(l.slots=2),l.slots%2&&(l.slots=l.slots+1);z=new punchgs.TimelineLite;setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100),r.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<l.slots/2)var o=90*(t+2);else o=90*(2+l.slots-t);z.add(punchgs.TweenLite.to(e,(g+o)/1e3,{top:0+l.height,opacity:1,force3D:"auto",rotation:l.rotate,ease:w}),0),y.add(z,0)}),n.find(".slotslide").each(function(t){var e=jQuery(this);if(t+1<l.slots/2)var o=90*(t+2);else o=90*(2+l.slots-t);z.add(punchgs.TweenLite.from(e,(g+o)/1e3,{top:0-l.height,opacity:1,force3D:"auto",rotation:l.rotate,ease:m}),0),y.add(z,0)})}if(7==a){(g*=2)>l.delay&&(g=l.delay);z=new punchgs.TimelineLite;setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100),r.find(".slotslide").each(function(){var t=jQuery(this).find("div");z.add(punchgs.TweenLite.to(t,g/1e3,{left:0-l.slotw/2+"px",top:0-l.height/2+"px",width:2*l.slotw+"px",height:2*l.height+"px",opacity:0,rotation:l.rotate,force3D:"auto",ease:w}),0),y.add(z,0)}),n.find(".slotslide").each(function(t){var e=jQuery(this).find("div");z.add(punchgs.TweenLite.fromTo(e,g/1e3,{left:0,top:0,opacity:0,transformPerspective:600},{left:0-t*l.slotw+"px",ease:m,force3D:"auto",top:"0px",width:l.width,height:l.height,opacity:1,rotation:0,delay:.1}),0),y.add(z,0)})}if(8==a){(g*=3)>l.delay&&(g=l.delay);z=new punchgs.TimelineLite;r.find(".slotslide").each(function(){var t=jQuery(this).find("div");z.add(punchgs.TweenLite.to(t,g/1e3,{left:0-l.width/2+"px",top:0-l.sloth/2+"px",width:2*l.width+"px",height:2*l.sloth+"px",force3D:"auto",ease:w,opacity:0,rotation:l.rotate}),0),y.add(z,0)}),n.find(".slotslide").each(function(t){var e=jQuery(this).find("div");z.add(punchgs.TweenLite.fromTo(e,g/1e3,{left:0,top:0,opacity:0,force3D:"auto"},{left:"0px",top:0-t*l.sloth+"px",width:n.find(".defaultimg").data("neww")+"px",height:n.find(".defaultimg").data("newh")+"px",opacity:1,ease:m,rotation:0}),0),y.add(z,0)})}if(9==a||10==a){n.find(".slotslide").each(function(t){var e=jQuery(this);0,y.add(punchgs.TweenLite.fromTo(e,g/2e3,{autoAlpha:0,force3D:"auto",transformPerspective:600},{autoAlpha:1,ease:w,delay:t*l.slots/100/2e3}),0)})}if(27==a||28==a||29==a||30==a){var b=n.find(".slot"),A=27==a||29==a?"-100%":"+100%",D=27==a||29==a?"+100%":"-100%",j=27==a||29==a?"-80%":"80%",Q=27==a||29==a?"+80%":"-80%",M=27==a||29==a?"+10%":"-10%",P={overwrite:"all"},k={autoAlpha:0,zIndex:1,force3D:"auto",ease:w},O={position:"inherit",autoAlpha:0,overwrite:"all",zIndex:1},I={autoAlpha:1,force3D:"auto",ease:m},X={overwrite:"all",zIndex:2,opacity:1,autoAlpha:1},Y={autoAlpha:1,force3D:"auto",overwrite:"all",ease:w},S={overwrite:"all",zIndex:2,autoAlpha:1},_={autoAlpha:1,force3D:"auto",ease:w},C=1==(27==a||28==a?1:2)?"y":"x";P[C]="0px",k[C]=A,O[C]=M,I[C]="0%",X[C]=D,Y[C]=A,S[C]=j,_[C]=Q,b.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'),y.add(punchgs.TweenLite.fromTo(r,g/1e3,P,k),0),y.add(punchgs.TweenLite.fromTo(n.find(".defaultimg"),g/2e3,O,I),g/2e3),y.add(punchgs.TweenLite.fromTo(b,g/1e3,X,Y),0),y.add(punchgs.TweenLite.fromTo(b.find(".slotslide div"),g/1e3,S,_),0)}if(31==a||32==a||33==a||34==a){g=6e3,w=punchgs.Power3.easeInOut;var V=g/1e3;mas=V-V/5,_nt=a,fy=31==_nt?"+100%":32==_nt?"-100%":"0%",fx=33==_nt?"+100%":34==_nt?"-100%":"0%",ty=31==_nt?"-100%":32==_nt?"+100%":"0%",tx=33==_nt?"-100%":34==_nt?"+100%":"0%",y.add(punchgs.TweenLite.fromTo(r,V-.2*V,{y:0,x:0},{y:ty,x:tx,ease:m}),.2*V),y.add(punchgs.TweenLite.fromTo(n,V,{y:fy,x:fx},{y:"0%",x:"0%",ease:w}),0),n.find(".slot").remove(),n.find(".defaultimg").clone().appendTo(n).addClass("slot"),s(n,V,_nt,"in",w)}if(11==a){12<u&&(u=0);var Z=2==u?"#000000":3==u?"#ffffff":"transparent";switch(u){case 0:y.add(punchgs.TweenLite.fromTo(n,g/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:w}),0);break;case 1:y.add(punchgs.TweenLite.fromTo(n,g/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:w}),0),y.add(punchgs.TweenLite.fromTo(r,g/1e3,{autoAlpha:1},{autoAlpha:0,force3D:"auto",ease:w}),0);break;case 2:case 3:case 4:y.add(punchgs.TweenLite.set(r.parent(),{backgroundColor:Z,force3D:"auto"}),0),y.add(punchgs.TweenLite.set(n.parent(),{backgroundColor:"transparent",force3D:"auto"}),0),y.add(punchgs.TweenLite.to(r,g/2e3,{autoAlpha:0,force3D:"auto",ease:w}),0),y.add(punchgs.TweenLite.fromTo(n,g/2e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:w}),g/2e3);break;case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:var H="blur("+(0<=jQuery.inArray(u,[9,10])?5:0<=jQuery.inArray(u,[11,12])?10:0)+"px) grayscale("+(0<=jQuery.inArray(u,[5,6,7,8])?100:0)+"%) brightness("+(0<=jQuery.inArray(u,[7,8])?300:0)+"%)",J="blur(0px) grayscale(0%) brightness(100%)";y.add(punchgs.TweenLite.fromTo(n,g/1e3,{autoAlpha:0,filter:H,"-webkit-filter":H},{autoAlpha:1,filter:J,"-webkit-filter":J,force3D:"auto",ease:w}),0),0<=jQuery.inArray(u,[6,8,10])&&y.add(punchgs.TweenLite.fromTo(r,g/1e3,{autoAlpha:1,filter:J,"-webkit-filter":J},{autoAlpha:0,force3D:"auto",ease:w,filter:H,"-webkit-filter":H}),0)}y.add(punchgs.TweenLite.set(n.find(".defaultimg"),{autoAlpha:1}),0),y.add(punchgs.TweenLite.set(r.find("defaultimg"),{autoAlpha:1}),0)}if(26==a){g=0,y.add(punchgs.TweenLite.fromTo(n,g/1e3,{autoAlpha:0},{autoAlpha:1,force3D:"auto",ease:w}),0),y.add(punchgs.TweenLite.to(r,g/1e3,{autoAlpha:0,force3D:"auto",ease:w}),0),y.add(punchgs.TweenLite.set(n.find(".defaultimg"),{autoAlpha:1}),0),y.add(punchgs.TweenLite.set(r.find("defaultimg"),{autoAlpha:1}),0)}if(12==a||13==a||14==a||15==a){(g=g)>l.delay&&(g=l.delay),setTimeout(function(){punchgs.TweenLite.set(r.find(".defaultimg"),{autoAlpha:0})},100);var N=l.width,R=l.height,q=n.find(".slotslide, .defaultvid"),B=0,E=0,F=1,G=1,K=1,U=g/1e3,W=U;"fullwidth"!=l.sliderLayout&&"fullscreen"!=l.sliderLayout||(N=q.width(),R=q.height()),12==a?B=N:15==a?B=0-N:13==a?E=R:14==a&&(E=0-R),1==u&&(F=0),2==u&&(F=0),3==u&&(U=g/1300),4!=u&&5!=u||(G=.6),6==u&&(G=1.4),5!=u&&6!=u||(K=1.4,E=B=R=N=F=0),6==u&&(K=.6),7==u&&(R=N=0);var $=n.find(".slotslide"),tt=r.find(".slotslide, .defaultvid");if(y.add(punchgs.TweenLite.set(i,{zIndex:15}),0),y.add(punchgs.TweenLite.set(o,{zIndex:20}),0),8==u?(y.add(punchgs.TweenLite.set(i,{zIndex:20}),0),y.add(punchgs.TweenLite.set(o,{zIndex:15}),0),y.add(punchgs.TweenLite.set($,{left:0,top:0,scale:1,opacity:1,rotation:0,ease:w,force3D:"auto"}),0)):y.add(punchgs.TweenLite.from($,U,{left:B,top:E,scale:K,opacity:F,rotation:l.rotate,ease:w,force3D:"auto"}),0),4!=u&&5!=u||(R=N=0),1!=u)switch(a){case 12:y.add(punchgs.TweenLite.to(tt,W,{left:0-N+"px",force3D:"auto",scale:G,opacity:F,rotation:l.rotate,ease:m}),0);break;case 15:y.add(punchgs.TweenLite.to(tt,W,{left:N+"px",force3D:"auto",scale:G,opacity:F,rotation:l.rotate,ease:m}),0);break;case 13:y.add(punchgs.TweenLite.to(tt,W,{top:0-R+"px",force3D:"auto",scale:G,opacity:F,rotation:l.rotate,ease:m}),0);break;case 14:y.add(punchgs.TweenLite.to(tt,W,{top:R+"px",force3D:"auto",scale:G,opacity:F,rotation:l.rotate,ease:m}),0)}}if(16==a){z=new punchgs.TimelineLite;y.add(punchgs.TweenLite.set(i,{position:"absolute","z-index":20}),0),y.add(punchgs.TweenLite.set(o,{position:"absolute","z-index":15}),0),i.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'),i.find(".tp-half-one").clone(!0).appendTo(i).addClass("tp-half-two"),i.find(".tp-half-two").removeClass("tp-half-one");N=l.width,R=l.height;"on"==l.autoHeight&&(R=e.height()),i.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:'+N+"px;height:"+R+'px;"></div>'),i.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:'+N+"px;height:"+R+'px;"></div>'),i.find(".tp-half-two .defaultimg").css({position:"absolute",top:"-50%"}),i.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'),y.add(punchgs.TweenLite.set(i.find(".tp-half-two"),{width:N,height:R,overflow:"hidden",zIndex:15,position:"absolute",top:R/2,left:"0px",transformPerspective:600,transformOrigin:"center bottom"}),0),y.add(punchgs.TweenLite.set(i.find(".tp-half-one"),{width:N,height:R/2,overflow:"visible",zIndex:10,position:"absolute",top:"0px",left:"0px",transformPerspective:600,transformOrigin:"center top"}),0);var et=(i.find(".defaultimg"),Math.round(20*Math.random()-10)),ot=Math.round(20*Math.random()-10),at=Math.round(20*Math.random()-10),it=.4*Math.random()-.2,nt=.4*Math.random()-.2,rt=1*Math.random()+1,st=1*Math.random()+1,lt=.3*Math.random()+.3;y.add(punchgs.TweenLite.set(i.find(".tp-half-one"),{overflow:"hidden"}),0),y.add(punchgs.TweenLite.fromTo(i.find(".tp-half-one"),g/800,{width:N,height:R/2,position:"absolute",top:"0px",left:"0px",force3D:"auto",transformOrigin:"center top"},{scale:rt,rotation:et,y:0-R-R/4,autoAlpha:0,ease:w}),0),y.add(punchgs.TweenLite.fromTo(i.find(".tp-half-two"),g/800,{width:N,height:R,overflow:"hidden",position:"absolute",top:R/2,left:"0px",force3D:"auto",transformOrigin:"center bottom"},{scale:st,rotation:ot,y:R+R/4,ease:w,autoAlpha:0,onComplete:function(){punchgs.TweenLite.set(i,{position:"absolute","z-index":15}),punchgs.TweenLite.set(o,{position:"absolute","z-index":20}),0<i.find(".tp-half-one").length&&(i.find(".tp-half-one .defaultimg").unwrap(),i.find(".tp-half-one .slotholder").unwrap()),i.find(".tp-half-two").remove()}}),0),z.add(punchgs.TweenLite.set(n.find(".defaultimg"),{autoAlpha:1}),0),null!=i.html()&&y.add(punchgs.TweenLite.fromTo(o,(g-200)/1e3,{scale:lt,x:l.width/4*it,y:R/4*nt,rotation:at,force3D:"auto",transformOrigin:"center center",ease:m},{autoAlpha:1,scale:1,x:0,y:0,rotation:0}),0),y.add(z,0)}if(17==a&&n.find(".slotslide").each(function(t){var e=jQuery(this);y.add(punchgs.TweenLite.fromTo(e,g/800,{opacity:0,rotationY:0,scale:.9,rotationX:-110,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{opacity:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:w,delay:.06*t}),0)}),18==a&&n.find(".slotslide").each(function(t){var e=jQuery(this);y.add(punchgs.TweenLite.fromTo(e,g/500,{autoAlpha:0,rotationY:110,scale:.9,rotationX:10,force3D:"auto",transformPerspective:600,transformOrigin:"center center"},{autoAlpha:1,top:0,left:0,scale:1,rotation:0,rotationX:0,force3D:"auto",rotationY:0,ease:w,delay:.06*t}),0)}),19==a||22==a){z=new punchgs.TimelineLite;y.add(punchgs.TweenLite.set(i,{zIndex:20}),0),y.add(punchgs.TweenLite.set(o,{zIndex:20}),0),setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100);var dt=90,ht=(F=1,"center center ");1==h&&(dt=-90),19==a?(ht=ht+"-"+l.height/2,F=0):ht+=l.height/2,punchgs.TweenLite.set(e,{transformStyle:"flat",backfaceVisibility:"hidden",transformPerspective:600}),n.find(".slotslide").each(function(t){var e=jQuery(this);z.add(punchgs.TweenLite.fromTo(e,g/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",left:0,rotationY:l.rotate,z:10,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:ht,rotationX:dt},{left:0,rotationY:0,top:0,z:0,scale:1,force3D:"auto",rotationX:0,delay:50*t/1e3,ease:w}),0),z.add(punchgs.TweenLite.to(e,.1,{autoAlpha:1,delay:50*t/1e3}),0),y.add(z)}),r.find(".slotslide").each(function(t){var e=jQuery(this),o=-90;1==h&&(o=90),z.add(punchgs.TweenLite.fromTo(e,g/1e3,{transformStyle:"flat",backfaceVisibility:"hidden",autoAlpha:1,rotationY:0,top:0,z:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:ht,rotationX:0},{autoAlpha:1,rotationY:l.rotate,top:0,z:10,scale:1,rotationX:o,delay:50*t/1e3,force3D:"auto",ease:m}),0),y.add(z)}),y.add(punchgs.TweenLite.set(i,{zIndex:18}),0)}if(20==a){if(setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100),1==h){var ft=-l.width;dt=80,ht="20% 70% -"+l.height/2}else ft=l.width,dt=-80,ht="80% 70% -"+l.height/2;n.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;y.add(punchgs.TweenLite.fromTo(e,g/1e3,{left:ft,rotationX:40,z:-600,opacity:F,top:0,scale:1,force3D:"auto",transformPerspective:600,transformOrigin:ht,transformStyle:"flat",rotationY:dt},{left:0,rotationX:0,opacity:1,top:0,z:0,scale:1,rotationY:0,delay:o,ease:w}),0)}),r.find(".slotslide").each(function(t){var e=jQuery(this),o=50*t/1e3;if(o=0<t?o+g/9e3:0,1!=h)var a=-l.width/2,i=30,n="20% 70% -"+l.height/2;else a=l.width/2,i=-30,n="80% 70% -"+l.height/2;m=punchgs.Power2.easeInOut,y.add(punchgs.TweenLite.fromTo(e,g/1e3,{opacity:1,rotationX:0,top:0,z:0,scale:1,left:0,force3D:"auto",transformPerspective:600,transformOrigin:n,transformStyle:"flat",rotationY:0},{opacity:1,rotationX:20,top:0,z:-600,left:a,force3D:"auto",rotationY:i,delay:o,ease:m}),0)})}if(21==a||25==a){setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100);dt=90,ft=-l.width;var ct=-dt;if(1==h)if(25==a){ht="center top 0";dt=l.rotate}else{ht="left center 0";ct=l.rotate}else if(ft=l.width,dt=-90,25==a){ht="center bottom 0";ct=-dt,dt=l.rotate}else{ht="right center 0";ct=l.rotate}n.find(".slotslide").each(function(){var t=jQuery(this),e=g/1.5/3;y.add(punchgs.TweenLite.fromTo(t,2*e/1e3,{left:0,transformStyle:"flat",rotationX:ct,z:0,autoAlpha:0,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:ht,rotationY:dt},{left:0,rotationX:0,top:0,z:0,autoAlpha:1,scale:1,rotationY:0,force3D:"auto",delay:e/1e3,ease:w}),0)}),1!=h?(ft=-l.width,dt=90,25==a?(ht="center top 0",ct=-dt,dt=l.rotate):(ht="left center 0",ct=l.rotate)):(ft=l.width,dt=-90,25==a?(ht="center bottom 0",ct=-dt,dt=l.rotate):(ht="right center 0",ct=l.rotate)),r.find(".slotslide").each(function(){var t=jQuery(this);y.add(punchgs.TweenLite.fromTo(t,g/1e3,{left:0,transformStyle:"flat",rotationX:0,z:0,autoAlpha:1,top:0,scale:1,force3D:"auto",transformPerspective:1200,transformOrigin:ht,rotationY:0},{left:0,rotationX:ct,top:0,z:0,autoAlpha:1,force3D:"auto",scale:1,rotationY:dt,ease:m}),0)})}if(23==a||24==a){setTimeout(function(){r.find(".defaultimg").css({opacity:0})},100);dt=-90,F=1;var ut=0;if(1==h&&(dt=90),23==a){ht="center center -"+l.width/2;F=0}else ht="center center "+l.width/2;punchgs.TweenLite.set(e,{transformStyle:"preserve-3d",backfaceVisibility:"hidden",perspective:2500}),n.find(".slotslide").each(function(t){var e=jQuery(this);y.add(punchgs.TweenLite.fromTo(e,g/1e3,{left:ut,rotationX:l.rotate,force3D:"auto",opacity:F,top:0,scale:1,transformPerspective:1200,transformOrigin:ht,rotationY:dt},{left:0,rotationX:0,autoAlpha:1,top:0,z:0,scale:1,rotationY:0,delay:50*t/500,ease:w}),0)}),dt=90,1==h&&(dt=-90),r.find(".slotslide").each(function(t){var e=jQuery(this);y.add(punchgs.TweenLite.fromTo(e,g/1e3,{left:0,rotationX:0,top:0,z:0,scale:1,force3D:"auto",transformStyle:"flat",transformPerspective:1200,transformOrigin:ht,rotationY:0},{left:ut,rotationX:l.rotate,top:0,scale:1,rotationY:dt,delay:50*t/500,ease:m}),0),23==a&&y.add(punchgs.TweenLite.fromTo(e,g/2e3,{autoAlpha:1},{autoAlpha:0,delay:50*t/500+g/3e3,ease:m}),0)})}return y}}(jQuery);