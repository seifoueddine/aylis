!function(e,t){"object"==typeof exports?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):t(e.jQuery)}(this,function(n){var o=function(e,o){var n,t=document.createElement("canvas");e.appendChild(t),"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(t);var i=t.getContext("2d");t.width=t.height=o.size;var a=1;1<window.devicePixelRatio&&(a=window.devicePixelRatio,t.style.width=t.style.height=[o.size,"px"].join(""),t.width=t.height=o.size*a,i.scale(a,a)),i.translate(o.size/2,o.size/2),i.rotate((o.rotate/180-.5)*Math.PI);var r=(o.size-o.lineWidth)/2;o.scaleColor&&o.scaleLength&&(r-=o.scaleLength+2),Date.now=Date.now||function(){return+new Date};var s=function(e,t,n){var a=(n=Math.min(Math.max(-1,n||0),1))<=0;i.beginPath(),i.arc(0,0,r,0,2*Math.PI*n,a),i.strokeStyle=e,i.lineWidth=t,i.stroke()},d=function(){var e,t;i.lineWidth=1,i.fillStyle=o.scaleColor,i.save();for(var n=24;0<n;--n)n%6==0?(t=o.scaleLength,e=0):(t=.6*o.scaleLength,e=o.scaleLength-t),i.fillRect(-o.size/2+e,0,t,1),i.rotate(Math.PI/12);i.restore()},h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},u=function(){o.scaleColor&&d(),o.trackColor&&s(o.trackColor,o.trackWidth||o.lineWidth,1)};this.getCanvas=function(){return t},this.getCtx=function(){return i},this.clear=function(){i.clearRect(o.size/-2,o.size/-2,o.size,o.size)},this.draw=function(e){var t;o.scaleColor||o.trackColor?i.getImageData&&i.putImageData?n?i.putImageData(n,0,0):(u(),n=i.getImageData(0,0,o.size*a,o.size*a)):(this.clear(),u()):this.clear(),i.lineCap=o.lineCap,t="function"==typeof o.barColor?o.barColor(e):o.barColor,s(t,o.lineWidth,e/100)}.bind(this),this.animate=function(n,a){var i=Date.now();o.onStart(n,a);var r=function(){var e=Math.min(Date.now()-i,o.animate.duration),t=o.easing(this,e,n,a-n,o.animate.duration);this.draw(t),o.onStep(n,a,t),e>=o.animate.duration?o.onStop(n,a):h(r)}.bind(this);h(r)}.bind(this)},a=function(t,n){var a={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:undefined,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n},onStart:function(){},onStep:function(){},onStop:function(){}};if(void 0!==o)a.renderer=o;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");a.renderer=SVGRenderer}var i={},r=0,e=function(){for(var e in this.el=t,this.options=i,a)a.hasOwnProperty(e)&&(i[e]=n&&"undefined"!=typeof n[e]?n[e]:a[e],"function"==typeof i[e]&&(i[e]=i[e].bind(this)));"string"==typeof i.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[i.easing])?i.easing=jQuery.easing[i.easing]:i.easing=a.easing,"number"==typeof i.animate&&(i.animate={duration:i.animate,enabled:!0}),"boolean"!=typeof i.animate||i.animate||(i.animate={duration:1e3,enabled:i.animate}),this.renderer=new i.renderer(t,i),this.renderer.draw(r),t.dataset&&t.dataset.percent?this.update(parseFloat(t.dataset.percent)):t.getAttribute&&t.getAttribute("data-percent")&&this.update(parseFloat(t.getAttribute("data-percent")))}.bind(this);this.update=function(e){return e=parseFloat(e),i.animate.enabled?this.renderer.animate(r,e):this.renderer.draw(e),r=e,this}.bind(this),this.disableAnimation=function(){return i.animate.enabled=!1,this},this.enableAnimation=function(){return i.animate.enabled=!0,this},e()};n.fn.easyPieChart=function(t){return this.each(function(){var e;n.data(this,"easyPieChart")||(e=n.extend({},t,n(this).data()),n.data(this,"easyPieChart",new a(this,e)))})}});