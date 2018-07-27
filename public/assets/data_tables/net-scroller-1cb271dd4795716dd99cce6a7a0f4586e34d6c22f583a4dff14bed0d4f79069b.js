!function(o){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function(t){return o(t,window,document)}):"object"==typeof exports?module.exports=function(t,s){return t||(t=window),s&&s.fn.dataTable||(s=require("datatables.net")(t,s).$),o(s,t,t.document)}:o(jQuery,window,document)}(function(S,t,o,r){"use strict";var l=S.fn.dataTable,a=function(t,s){this instanceof a?(s===r&&(s={}),this.s={dt:S.fn.dataTable.Api(t).settings()[0],tableTop:0,tableBottom:0,redrawTop:0,redrawBottom:0,autoHeight:!0,viewportRows:0,stateTO:null,drawTO:null,heights:{jump:null,page:null,virtual:null,scroll:null,row:null,viewport:null},topRowFloat:0,scrollDrawDiff:null,loaderVisible:!1},this.s=S.extend(this.s,a.oDefaults,s),this.s.heights.row=this.s.rowHeight,this.dom={force:o.createElement("div"),scroller:null,table:null,loader:null},this.s.dt.oScroller||(this.s.dt.oScroller=this)._fnConstruct()):alert("Scroller warning: Scroller must be initialised with the 'new' keyword.")};S.extend(a.prototype,{fnRowToPixels:function(t,s,o){var e;if(o)e=this._domain("virtualToPhysical",t*this.s.heights.row);else{var i=t-this.s.baseRowTop;e=this.s.baseScrollTop+i*this.s.heights.row}return s||s===r?parseInt(e,10):e},fnPixelsToRow:function(t,s,o){var e=t-this.s.baseScrollTop,i=o?this._domain("physicalToVirtual",t)/this.s.heights.row:e/this.s.heights.row+this.s.baseRowTop;return s||s===r?parseInt(i,10):i},fnScrollToRow:function(t,s){var o=this,e=!1,i=this.fnRowToPixels(t),r=t-(this.s.displayBuffer-1)/2*this.s.viewportRows;r<0&&(r=0),(i>this.s.redrawBottom||i<this.s.redrawTop)&&this.s.dt._iDisplayStart!==r&&(e=!0,i=this.fnRowToPixels(t,!1,!0)),void 0===s||s?(this.s.ani=e,S(this.dom.scroller).animate({scrollTop:i},function(){setTimeout(function(){o.s.ani=!1},25)})):S(this.dom.scroller).scrollTop(i)},fnMeasure:function(t){this.s.autoHeight&&this._fnCalcRowHeight();var s=this.s.heights;s.row&&(s.viewport=S(this.dom.scroller).height(),this.s.viewportRows=parseInt(s.viewport/s.row,10)+1,this.s.dt._iDisplayLength=this.s.viewportRows*this.s.displayBuffer),(t===r||t)&&this.s.dt.oInstance.fnDraw(!1)},fnPageInfo:function(){var t=this.s.dt,s=this.dom.scroller.scrollTop,o=t.fnRecordsDisplay(),e=Math.ceil(this.fnPixelsToRow(s+this.s.heights.viewport,!1,this.s.ani));return{start:Math.floor(this.fnPixelsToRow(s,!1,this.s.ani)),end:o<e?o-1:e-1}},_fnConstruct:function(){var o=this;if(this.s.dt.oFeatures.bPaginate){this.dom.force.style.position="relative",this.dom.force.style.top="0px",this.dom.force.style.left="0px",this.dom.force.style.width="1px",this.dom.scroller=S("div."+this.s.dt.oClasses.sScrollBody,this.s.dt.nTableWrapper)[0],this.dom.scroller.appendChild(this.dom.force),this.dom.scroller.style.position="relative",this.dom.table=S(">table",this.dom.scroller)[0],this.dom.table.style.position="absolute",this.dom.table.style.top="0px",this.dom.table.style.left="0px",S(this.s.dt.nTableWrapper).addClass("DTS"),this.s.loadingIndicator&&(this.dom.loader=S('<div class="dataTables_processing DTS_Loading">'+this.s.dt.oLanguage.sLoadingRecords+"</div>").css("display","none"),S(this.dom.scroller.parentNode).css("position","relative").append(this.dom.loader)),this.s.heights.row&&"auto"!=this.s.heights.row&&(this.s.autoHeight=!1),this.fnMeasure(!1),this.s.ingnoreScroll=!0,this.s.stateSaveThrottle=this.s.dt.oApi._fnThrottle(function(){o.s.dt.oApi._fnSaveState(o.s.dt)},500),S(this.dom.scroller).on("scroll.DTS",function(){o._fnScroll.call(o)}),S(this.dom.scroller).on("touchstart.DTS",function(){o._fnScroll.call(o)}),this.s.dt.aoDrawCallback.push({fn:function(){o.s.dt.bInitialised&&o._fnDrawCallback.call(o)},sName:"Scroller"}),S(t).on("resize.DTS",function(){o.fnMeasure(!1),o._fnInfo()});var e=!0;this.s.dt.oApi._fnCallbackReg(this.s.dt,"aoStateSaveParams",function(t,s){e&&o.s.dt.oLoadedState?(s.iScroller=o.s.dt.oLoadedState.iScroller,s.iScrollerTopRow=o.s.dt.oLoadedState.iScrollerTopRow,e=!1):(s.iScroller=o.dom.scroller.scrollTop,s.iScrollerTopRow=o.s.topRowFloat)},"Scroller_State"),this.s.dt.oLoadedState&&(this.s.topRowFloat=this.s.dt.oLoadedState.iScrollerTopRow||0),S(this.s.dt.nTable).one("init.dt",function(){o.fnMeasure()}),this.s.dt.aoDestroyCallback.push({sName:"Scroller",fn:function(){S(t).off("resize.DTS"),S(o.dom.scroller).off("touchstart.DTS scroll.DTS"),S(o.s.dt.nTableWrapper).removeClass("DTS"),S("div.DTS_Loading",o.dom.scroller.parentNode).remove(),S(o.s.dt.nTable).off("init.dt"),o.dom.table.style.position="",o.dom.table.style.top="",o.dom.table.style.left=""}})}else this.s.dt.oApi._fnLog(this.s.dt,0,"Pagination must be enabled for Scroller")},_fnScroll:function(){var t,s=this,o=this.s.heights,e=this.dom.scroller.scrollTop;if(!this.s.skip&&!this.s.ingnoreScroll)if(this.s.dt.bFiltered||this.s.dt.bSorted)this.s.lastScrollTop=0;else{if(this._fnInfo(),clearTimeout(this.s.stateTO),this.s.stateTO=setTimeout(function(){s.s.dt.oApi._fnSaveState(s.s.dt)},250),e<this.s.redrawTop||e>this.s.redrawBottom){var i=Math.ceil((this.s.displayBuffer-1)/2*this.s.viewportRows);if(Math.abs(e-this.s.lastScrollTop)>o.viewport||this.s.ani?(t=parseInt(this._domain("physicalToVirtual",e)/o.row,10)-i,this.s.topRowFloat=this._domain("physicalToVirtual",e)/o.row):(t=this.fnPixelsToRow(e)-i,this.s.topRowFloat=this.fnPixelsToRow(e,!1)),t<=0?t=0:t+this.s.dt._iDisplayLength>this.s.dt.fnRecordsDisplay()?(t=this.s.dt.fnRecordsDisplay()-this.s.dt._iDisplayLength)<0&&(t=0):t%2!=0&&t++,t!=this.s.dt._iDisplayStart){this.s.tableTop=S(this.s.dt.nTable).offset().top,this.s.tableBottom=S(this.s.dt.nTable).height()+this.s.tableTop;var r=function(){null===s.s.scrollDrawReq&&(s.s.scrollDrawReq=e),s.s.dt._iDisplayStart=t,s.s.dt.oApi._fnDraw(s.s.dt)};this.s.dt.oFeatures.bServerSide?(clearTimeout(this.s.drawTO),this.s.drawTO=setTimeout(r,this.s.serverWait)):r(),this.dom.loader&&!this.s.loaderVisible&&(this.dom.loader.css("display","block"),this.s.loaderVisible=!0)}}else this.s.topRowFloat=this._domain("physicalToVirtual",e)/o.row;this.s.lastScrollTop=e,this.s.stateSaveThrottle()}},_domain:function(t,s){var o,e=this.s.heights;if(e.virtual===e.scroll)return s;var i=(e.scroll-e.viewport)/2,r=(e.virtual-e.viewport)/2;return o=r/(i*i),"virtualToPhysical"===t?s<r?Math.pow(s/o,.5):(s=2*r-s)<0?e.scroll:2*i-Math.pow(s/o,.5):"physicalToVirtual"===t?s<i?s*s*o:(s=2*i-s)<0?e.virtual:2*r-s*s*o:void 0},_fnDrawCallback:function(){var t=this,s=this.s.heights,o=this.dom.scroller.scrollTop,e=(s.viewport,S(this.s.dt.nTable).height()),i=this.s.dt._iDisplayStart,r=this.s.dt._iDisplayLength,l=this.s.dt.fnRecordsDisplay();this.s.skip=!0,this._fnScrollForce(),o=0===i?this.s.topRowFloat*s.row:l<=i+r?s.scroll-(l-this.s.topRowFloat)*s.row:this._domain("virtualToPhysical",this.s.topRowFloat*s.row),this.dom.scroller.scrollTop=o,this.s.baseScrollTop=o,this.s.baseRowTop=this.s.topRowFloat;var a=o-(this.s.topRowFloat-i)*s.row;0===i?a=0:l<=i+r&&(a=s.scroll-e),this.dom.table.style.top=a+"px",this.s.tableTop=a,this.s.tableBottom=e+this.s.tableTop;var n=(o-this.s.tableTop)*this.s.boundaryScale;if(this.s.redrawTop=o-n,this.s.redrawBottom=o+n,this.s.skip=!1,this.s.dt.oFeatures.bStateSave&&null!==this.s.dt.oLoadedState&&"undefined"!=typeof this.s.dt.oLoadedState.iScroller){var h=!(!this.s.dt.sAjaxSource&&!t.s.dt.ajax||this.s.dt.oFeatures.bServerSide);(h&&2==this.s.dt.iDraw||!h&&1==this.s.dt.iDraw)&&setTimeout(function(){S(t.dom.scroller).scrollTop(t.s.dt.oLoadedState.iScroller),t.s.redrawTop=t.s.dt.oLoadedState.iScroller-s.viewport/2,setTimeout(function(){t.s.ingnoreScroll=!1},0)},0)}else t.s.ingnoreScroll=!1;this.s.dt.oFeatures.bInfo&&setTimeout(function(){t._fnInfo.call(t)},0),this.dom.loader&&this.s.loaderVisible&&(this.dom.loader.css("display","none"),this.s.loaderVisible=!1)},_fnScrollForce:function(){var t=this.s.heights,s=1e6;t.virtual=t.row*this.s.dt.fnRecordsDisplay(),t.scroll=t.virtual,t.scroll>s&&(t.scroll=s),this.dom.force.style.height=t.scroll>this.s.heights.row?t.scroll+"px":this.s.heights.row+"px"},_fnCalcRowHeight:function(){var t=this.s.dt,s=t.nTable,o=s.cloneNode(!1),e=S("<tbody/>").appendTo(o),i=S('<div class="'+t.oClasses.sWrapper+' DTS"><div class="'+t.oClasses.sScrollWrapper+'"><div class="'+t.oClasses.sScrollBody+'"></div></div></div>');for(S("tbody tr:lt(4)",s).clone().appendTo(e);S("tr",e).length<3;)e.append("<tr><td>&nbsp;</td></tr>");S("div."+t.oClasses.sScrollBody,i).append(o);var r=this.s.dt.nHolding||s.parentNode;S(r).is(":visible")||(r="body"),i.appendTo(r),this.s.heights.row=S("tr",e).eq(1).outerHeight(),i.remove()},_fnInfo:function(){if(this.s.dt.oFeatures.bInfo){var t,s=this.s.dt,o=s.oLanguage,e=this.dom.scroller.scrollTop,i=Math.floor(this.fnPixelsToRow(e,!1,this.s.ani)+1),r=s.fnRecordsTotal(),l=s.fnRecordsDisplay(),a=Math.ceil(this.fnPixelsToRow(e+this.s.heights.viewport,!1,this.s.ani)),n=l<a?l:a,h=s.fnFormatNumber(i),d=s.fnFormatNumber(n),c=s.fnFormatNumber(r),f=s.fnFormatNumber(l);t=0===s.fnRecordsDisplay()&&s.fnRecordsDisplay()==s.fnRecordsTotal()?o.sInfoEmpty+o.sInfoPostFix:0===s.fnRecordsDisplay()?o.sInfoEmpty+" "+o.sInfoFiltered.replace("_MAX_",c)+o.sInfoPostFix:s.fnRecordsDisplay()==s.fnRecordsTotal()?o.sInfo.replace("_START_",h).replace("_END_",d).replace("_MAX_",c).replace("_TOTAL_",f)+o.sInfoPostFix:o.sInfo.replace("_START_",h).replace("_END_",d).replace("_MAX_",c).replace("_TOTAL_",f)+" "+o.sInfoFiltered.replace("_MAX_",s.fnFormatNumber(s.fnRecordsTotal()))+o.sInfoPostFix;var p=o.fnInfoCallback;p&&(t=p.call(s.oInstance,s,i,n,r,l,t));var u=s.aanFeatures.i;if(void 0!==u)for(var w=0,T=u.length;w<T;w++)S(u[w]).html(t);S(s.nTable).triggerHandler("info.dt")}}}),a.defaults={trace:!1,rowHeight:"auto",serverWait:200,displayBuffer:9,boundaryScale:.5,loadingIndicator:!1},a.oDefaults=a.defaults,a.version="1.4.2","function"==typeof S.fn.dataTable&&"function"==typeof S.fn.dataTableExt.fnVersionCheck&&S.fn.dataTableExt.fnVersionCheck("1.10.0")?S.fn.dataTableExt.aoFeatures.push({fnInit:function(t){var s=t.oInit,o=s.scroller||s.oScroller||{};new a(t,o)},cFeature:"S",sFeature:"Scroller"}):alert("Warning: Scroller requires DataTables 1.10.0 or greater - www.datatables.net/download"),S(o).on("preInit.dt.dtscroller",function(t,s){if("dt"===t.namespace){var o=s.oInit.scroller,e=l.defaults.scroller;if(o||e){var i=S.extend({},o,e);!1!==o&&new a(s,i)}}}),S.fn.dataTable.Scroller=a,S.fn.DataTable.Scroller=a;var s=S.fn.dataTable.Api;return s.register("scroller()",function(){return this}),s.register("scroller().rowToPixels()",function(t,s,o){var e=this.context;if(e.length&&e[0].oScroller)return e[0].oScroller.fnRowToPixels(t,s,o)}),s.register("scroller().pixelsToRow()",function(t,s,o){var e=this.context;if(e.length&&e[0].oScroller)return e[0].oScroller.fnPixelsToRow(t,s,o)}),s.register("scroller().scrollToRow()",function(s,o){return this.iterator("table",function(t){t.oScroller&&t.oScroller.fnScrollToRow(s,o)}),this}),s.register("row().scrollTo()",function(e){var i=this;return this.iterator("row",function(t,s){if(t.oScroller){var o=i.rows({order:"applied",search:"applied"}).indexes().indexOf(s);t.oScroller.fnScrollToRow(o,e)}}),this}),s.register("scroller.measure()",function(s){return this.iterator("table",function(t){t.oScroller&&t.oScroller.fnMeasure(s)}),this}),s.register("scroller.page()",function(){var t=this.context;if(t.length&&t[0].oScroller)return t[0].oScroller.fnPageInfo()}),a});