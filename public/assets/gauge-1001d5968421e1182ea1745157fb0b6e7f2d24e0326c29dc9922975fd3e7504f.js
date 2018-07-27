(function(){var t,i,e,o,n,h,s,a,r,l,p,u,c,d,g={}.hasOwnProperty,m=function(t,i){function e(){this.constructor=t}for(var o in i)g.call(i,o)&&(t[o]=i[o]);return e.prototype=i.prototype,t.prototype=new e,t.__super__=i.prototype,t};!function(){var o,n,t,s,i,e,a;for(t=0,i=(a=["ms","moz","webkit","o"]).length;t<i&&(e=a[t],!window.requestAnimationFrame);t++)window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"];o=null,s=0,n={},requestAnimationFrame?window.cancelAnimationFrame||(o=window.requestAnimationFrame,window.requestAnimationFrame=function(t,i){var e;return e=++s,o(function(){if(!n[e])return t()},i),e},window.cancelAnimationFrame=function(t){return n[t]=!0}):(window.requestAnimationFrame=function(t){var i,e,o,n;return i=(new Date).getTime(),n=Math.max(0,16-(i-o)),e=window.setTimeout(function(){return t(i+n)},n),o=i+n,e},window.cancelAnimationFrame=function(t){return clearTimeout(t)})}(),String.prototype.hashCode=function(){var t,i,e,o;if((t=0)===this.length)return t;for(i=e=0,o=this.length;0<=o?e<o:o<e;i=0<=o?++e:--e)t=(t<<5)-t+this.charCodeAt(i),t&=t;return t},c=function(t){var i,e;for(t-=3600*(i=Math.floor(t/3600))+60*(e=Math.floor((t-3600*i)/60)),t+="",e+="";e.length<2;)e="0"+e;for(;t.length<2;)t="0"+t;return(i=i?i+":":"")+e+":"+t},p=function(t){return r(t.toFixed(0))},d=function(t,i){var e,o;for(e in i)g.call(i,e)&&(o=i[e],t[e]=o);return t},u=function(t,i){var e,o,n;for(e in o={},t)g.call(t,e)&&(n=t[e],o[e]=n);for(e in i)g.call(i,e)&&(n=i[e],o[e]=n);return o},r=function(t){var i,e,o,n;for(o=(e=(t+="").split("."))[0],n="",1<e.length&&(n="."+e[1]),i=/(\d+)(\d{3})/;i.test(o);)o=o.replace(i,"$1,$2");return o+n},l=function(t){return"#"===t.charAt(0)?t.substring(1,7):t},a=function(){function t(t,i){null==t&&(t=!0),this.clear=null==i||i,t&&AnimationUpdater.add(this)}return t.prototype.animationSpeed=32,t.prototype.update=function(t){var i;return null==t&&(t=!1),!(!t&&this.displayedValue===this.value)&&(this.ctx&&this.clear&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),i=this.value-this.displayedValue,Math.abs(i/this.animationSpeed)<=.001?this.displayedValue=this.value:this.displayedValue=this.displayedValue+i/this.animationSpeed,this.render(),!0)},t}(),e=function(){function t(){return t.__super__.constructor.apply(this,arguments)}return m(t,a),t.prototype.displayScale=1,t.prototype.setTextField=function(t){return this.textField=t instanceof s?t:new s(t)},t.prototype.setMinValue=function(t,i){var e,o,n,s,a;if(this.minValue=t,null==i&&(i=!0),i){for(this.displayedValue=this.minValue,a=[],o=0,n=(s=this.gp||[]).length;o<n;o++)e=s[o],a.push(e.displayedValue=this.minValue);return a}},t.prototype.setOptions=function(t){return null==t&&(t=null),this.options=u(this.options,t),this.textField&&(this.textField.el.style.fontSize=t.fontSize+"px"),.5<this.options.angle&&(this.gauge.options.angle=.5),this.configDisplayScale(),this},t.prototype.configDisplayScale=function(){var t,i,e,o,n;return o=this.displayScale,!1===this.options.highDpiSupport?delete this.displayScale:(i=window.devicePixelRatio||1,t=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,this.displayScale=i/t),this.displayScale!==o&&(n=this.canvas.G__width||this.canvas.width,e=this.canvas.G__height||this.canvas.height,this.canvas.width=n*this.displayScale,this.canvas.height=e*this.displayScale,this.canvas.style.width=n+"px",this.canvas.style.height=e+"px",this.canvas.G__width=n,this.canvas.G__height=e),this},t}(),s=function(){function t(t){this.el=t}return t.prototype.render=function(t){return this.el.innerHTML=p(t.displayedValue)},t}(),t=function(){function t(t,i){this.elem=t,this.text=null!=i&&i,this.value=1*this.elem.innerHTML,this.text&&(this.value=0)}return m(t,a),t.prototype.displayedValue=0,t.prototype.value=0,t.prototype.setVal=function(t){return this.value=1*t},t.prototype.render=function(){var t;return t=this.text?c(this.displayedValue.toFixed(0)):r(p(this.displayedValue)),this.elem.innerHTML=t},t}(),h=function(){function i(t){this.gauge=t,this.ctx=this.gauge.ctx,this.canvas=this.gauge.canvas,i.__super__.constructor.call(this,!1,!1),this.setOptions()}return m(i,a),i.prototype.displayedValue=0,i.prototype.value=0,i.prototype.options={strokeWidth:.035,length:.1,color:"#000000"},i.prototype.setOptions=function(t){return null==t&&(t=null),d(this.options,t),this.length=this.canvas.height*this.options.length,this.strokeWidth=this.canvas.height*this.options.strokeWidth,this.maxValue=this.gauge.maxValue,this.minValue=this.gauge.minValue,this.animationSpeed=this.gauge.animationSpeed,this.options.angle=this.gauge.options.angle},i.prototype.render=function(){var t,i,e,o,n,s,a,r,h;return t=this.gauge.getAngle.call(this,this.displayedValue),i=this.canvas.width/2,e=.9*this.canvas.height,r=Math.round(i+this.length*Math.cos(t)),h=Math.round(e+this.length*Math.sin(t)),s=Math.round(i+this.strokeWidth*Math.cos(t-Math.PI/2)),a=Math.round(e+this.strokeWidth*Math.sin(t-Math.PI/2)),o=Math.round(i+this.strokeWidth*Math.cos(t+Math.PI/2)),n=Math.round(e+this.strokeWidth*Math.sin(t+Math.PI/2)),this.ctx.fillStyle=this.options.color,this.ctx.beginPath(),this.ctx.arc(i,e,this.strokeWidth,0,2*Math.PI,!0),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(s,a),this.ctx.lineTo(r,h),this.ctx.lineTo(o,n),this.ctx.fill()},i}(),function(){function t(t){this.elem=t}t.prototype.updateValues=function(t){return this.value=t[0],this.maxValue=t[1],this.avgValue=t[2],this.render()},t.prototype.render=function(){var t,i;return this.textField&&this.textField.text(p(this.value)),0===this.maxValue&&(this.maxValue=2*this.avgValue),i=this.value/this.maxValue*100,t=this.avgValue/this.maxValue*100,$(".bar-value",this.elem).css({width:i+"%"}),$(".typical-value",this.elem).css({width:t+"%"})}}(),n=function(){function s(t){this.canvas=t,s.__super__.constructor.call(this),this.percentColors=null,"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.gp=[new h(this)],this.setOptions(),this.render()}return m(s,e),s.prototype.elem=null,s.prototype.value=[20],s.prototype.maxValue=80,s.prototype.minValue=0,s.prototype.displayedAngle=0,s.prototype.displayedValue=0,s.prototype.lineWidth=40,s.prototype.paddingBottom=.1,s.prototype.percentColors=null,s.prototype.options={colorStart:"#6fadcf",colorStop:void 0,gradientType:0,strokeColor:"#e0e0e0",pointer:{length:.8,strokeWidth:.035},angle:.15,lineWidth:.44,fontSize:40,limitMax:!1},s.prototype.setOptions=function(t){var i,e,o,n;for(null==t&&(t=null),s.__super__.setOptions.call(this,t),this.configPercentColors(),this.lineWidth=this.canvas.height*(1-this.paddingBottom)*this.options.lineWidth,this.radius=this.canvas.height*(1-this.paddingBottom)-this.lineWidth,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.render(),e=0,o=(n=this.gp).length;e<o;e++)(i=n[e]).setOptions(this.options.pointer),i.render();return this},s.prototype.configPercentColors=function(){var t,i,e,o,n,s,a;if(this.percentColors=null,void 0!==this.options.percentColors){for(this.percentColors=new Array,s=[],e=o=0,n=this.options.percentColors.length-1;0<=n?o<=n:n<=o;e=0<=n?++o:--o)a=parseInt(l(this.options.percentColors[e][1]).substring(0,2),16),i=parseInt(l(this.options.percentColors[e][1]).substring(2,4),16),t=parseInt(l(this.options.percentColors[e][1]).substring(4,6),16),s.push(this.percentColors[e]={pct:this.options.percentColors[e][0],color:{r:a,g:i,b:t}});return s}},s.prototype.set=function(t){var i,e,o,n,s,a,r;if(t instanceof Array||(t=[t]),t.length>this.gp.length)for(i=e=0,a=t.length-this.gp.length;0<=a?e<a:a<e;i=0<=a?++e:--e)this.gp.push(new h(this));for(s=!1,o=i=0,n=t.length;o<n;o++)(r=t[o])>this.maxValue&&(this.maxValue=1.1*this.value,s=!0),this.gp[i].value=r,this.gp[i++].setOptions({maxValue:this.maxValue,angle:this.options.angle});return this.value=t[t.length-1],s&&this.options.limitMax?void 0:AnimationUpdater.run()},s.prototype.getAngle=function(t){return(1+this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(1-2*this.options.angle)*Math.PI},s.prototype.getColorForPercentage=function(t,i){var e,o,n,s,a,r,h;if(0===t)e=this.percentColors[0].color;else for(e=this.percentColors[this.percentColors.length-1].color,n=s=0,r=this.percentColors.length-1;0<=r?s<=r:r<=s;n=0<=r?++s:--s)if(t<=this.percentColors[n].pct){!0===i?(h=this.percentColors[n-1],o=this.percentColors[n],a=(t-h.pct)/(o.pct-h.pct),e={r:Math.floor(h.color.r*(1-a)+o.color.r*a),g:Math.floor(h.color.g*(1-a)+o.color.g*a),b:Math.floor(h.color.b*(1-a)+o.color.b*a)}):e=this.percentColors[n].color;break}return"rgb("+[e.r,e.g,e.b].join(",")+")"},s.prototype.getColorForValue=function(t,i){var e;return e=(t-this.minValue)/(this.maxValue-this.minValue),this.getColorForPercentage(e,i)},s.prototype.render=function(){var t,i,e,o,n,s,a,r,h;for(h=this.canvas.width/2,o=this.canvas.height*(1-this.paddingBottom),t=this.getAngle(this.displayedValue),this.textField&&this.textField.render(this),this.ctx.lineCap="butt",void 0!==this.options.customFillStyle?i=this.options.customFillStyle(this):null!==this.percentColors?i=this.getColorForValue(this.displayedValue,!0):void 0!==this.options.colorStop?((i=0===this.options.gradientType?this.ctx.createRadialGradient(h,o,9,h,o,70):this.ctx.createLinearGradient(0,0,h,0)).addColorStop(0,this.options.colorStart),i.addColorStop(1,this.options.colorStop)):i=this.options.colorStart,this.ctx.strokeStyle=i,this.ctx.beginPath(),this.ctx.arc(h,o,this.radius,(1+this.options.angle)*Math.PI,t,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.stroke(),this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(h,o,this.radius,t,(2-this.options.angle)*Math.PI,!1),this.ctx.stroke(),r=[],n=0,s=(a=this.gp).length;n<s;n++)e=a[n],r.push(e.update(!0));return r},s}(),i=function(){function i(t){this.canvas=t,i.__super__.constructor.call(this),"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.setOptions(),this.render()}return m(i,e),i.prototype.lineWidth=15,i.prototype.displayedValue=0,i.prototype.value=33,i.prototype.maxValue=80,i.prototype.minValue=0,i.prototype.options={lineWidth:.1,colorStart:"#6f6ea0",colorStop:"#c0c0db",strokeColor:"#eeeeee",shadowColor:"#d5d5d5",angle:.35},i.prototype.getAngle=function(t){return(1-this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(2+this.options.angle-(1-this.options.angle))*Math.PI},i.prototype.setOptions=function(t){return null==t&&(t=null),i.__super__.setOptions.call(this,t),this.lineWidth=this.canvas.height*this.options.lineWidth,this.radius=this.canvas.height/2-this.lineWidth/2,this},i.prototype.set=function(t){return this.value=t,this.value>this.maxValue&&(this.maxValue=1.1*this.value),AnimationUpdater.run()},i.prototype.render=function(){var t,i,e,o;return t=this.getAngle(this.displayedValue),o=this.canvas.width/2,e=this.canvas.height/2,this.textField&&this.textField.render(this),(i=this.ctx.createRadialGradient(o,e,39,o,e,70)).addColorStop(0,this.options.colorStart),i.addColorStop(1,this.options.colorStop),this.radius-this.lineWidth/2,this.radius+this.lineWidth/2,this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(o,e,this.radius,(1-this.options.angle)*Math.PI,(2+this.options.angle)*Math.PI,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.lineCap="round",this.ctx.stroke(),this.ctx.strokeStyle=i,this.ctx.beginPath(),this.ctx.arc(o,e,this.radius,(1-this.options.angle)*Math.PI,t,!1),this.ctx.stroke()},i}(),o=function(){function s(){return s.__super__.constructor.apply(this,arguments)}return m(s,i),s.prototype.strokeGradient=function(t,i,e,o){var n;return(n=this.ctx.createRadialGradient(t,i,e,t,i,o)).addColorStop(0,this.options.shadowColor),n.addColorStop(.12,this.options._orgStrokeColor),n.addColorStop(.88,this.options._orgStrokeColor),n.addColorStop(1,this.options.shadowColor),n},s.prototype.setOptions=function(t){var i,e,o,n;return null==t&&(t=null),s.__super__.setOptions.call(this,t),n=this.canvas.width/2,i=this.canvas.height/2,e=this.radius-this.lineWidth/2,o=this.radius+this.lineWidth/2,this.options._orgStrokeColor=this.options.strokeColor,this.options.strokeColor=this.strokeGradient(n,i,e,o),this},s}(),window.AnimationUpdater={elements:[],animId:null,addAll:function(t){var i,e,o,n;for(n=[],e=0,o=t.length;e<o;e++)i=t[e],n.push(AnimationUpdater.elements.push(i));return n},add:function(t){return AnimationUpdater.elements.push(t)},run:function(){var t,i,e,o;for(t=!0,i=0,e=(o=AnimationUpdater.elements).length;i<e;i++)o[i].update()&&(t=!1);return t?cancelAnimationFrame(AnimationUpdater.animId):AnimationUpdater.animId=requestAnimationFrame(AnimationUpdater.run)}},window.Gauge=n,window.Donut=o,window.BaseDonut=i,window.TextRenderer=s}).call(this);