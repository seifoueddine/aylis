!function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(t){return e(t,window,document)}):"object"==typeof exports?module.exports=function(t,o,l,n){return t||(t=window),o&&o.fn.dataTable||(o=require("datatables.net")(t,o).$),o.fn.dataTable.Buttons||require("datatables.net-buttons")(t,o),e(o,t,t.document,l,n)}:e(jQuery,window,document)}(function(e,t,o,l,n,r){"use strict";function a(e){for(var t="A".charCodeAt(0),o="Z".charCodeAt(0)-t+1,l="";e>=0;)l=String.fromCharCode(e%o+t)+l,e=Math.floor(e/o)-1;return l}function i(t,o){b===r&&(b=-1===F.serializeToString(e.parseXML(h["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r")),e.each(o,function(o,l){if(e.isPlainObject(l)){i(t.folder(o),l)}else{if(b){var n,r,a=l.childNodes[0],d=[];for(n=a.attributes.length-1;n>=0;n--){var p=a.attributes[n].nodeName,s=a.attributes[n].nodeValue;-1!==p.indexOf(":")&&(d.push({name:p,value:s}),a.removeAttribute(p))}for(n=0,r=d.length;n<r;n++){var f=l.createAttribute(d[n].name.replace(":","_dt_b_namespace_token_"));f.value=d[n].value,a.setAttributeNode(f)}}var m=F.serializeToString(l);b&&(-1===m.indexOf("<?xml")&&(m='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+m),m=m.replace(/_dt_b_namespace_token_/g,":")),m=m.replace(/<row xmlns="" /g,"<row ").replace(/<cols xmlns="">/g,"<cols>"),t.file(o,m)}})}function d(t,o,l){var n=t.createElement(o);return l&&(l.attr&&e(n).attr(l.attr),l.children&&e.each(l.children,function(e,t){n.appendChild(t)}),l.text&&n.appendChild(t.createTextNode(l.text))),n}function p(e,t){var o,l=e.header[t].length;e.footer&&e.footer[t].length>l&&(l=e.footer[t].length);for(var n=0,r=e.body.length;n<r&&((o=e.body[n][t].toString().length)>l&&(l=o),!(l>40));n++);return l>5?l:5}var s=e.fn.dataTable;l===r&&(l=t.JSZip),n===r&&(n=t.pdfMake);var f=function(e){if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=function(){return e.URL||e.webkitURL||e},o=e.document.createElementNS("http://www.w3.org/1999/xhtml","a"),l="download"in o,n=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),i=e.webkitRequestFileSystem,d=e.requestFileSystem||i||e.mozRequestFileSystem,p=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",f=0,m=4e4,c=function(e){setTimeout(function(){"string"==typeof e?t().revokeObjectURL(e):e.remove()},m)},u=function(e,t,o){for(var l=(t=[].concat(t)).length;l--;){var n=e["on"+t[l]];if("function"==typeof n)try{n.call(e,o||e)}catch(r){p(r)}}},y=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e},I=function(p,m,I){I||(p=y(p));var x,b,F,h=this,g=p.type,v=!1,w=function(){u(h,"writestart progress write writeend".split(" "))},B=function(){if(b&&a&&"undefined"!=typeof FileReader){var o=new FileReader;return o.onloadend=function(){var e=o.result;b.location.href="data:attachment/file"+e.slice(e.search(/[,;]/)),h.readyState=h.DONE,w()},o.readAsDataURL(p),void(h.readyState=h.INIT)}(!v&&x||(x=t().createObjectURL(p)),b)?b.location.href=x:e.open(x,"_blank")===r&&a&&(e.location.href=x);h.readyState=h.DONE,w(),c(x)},k=function(e){return function(){if(h.readyState!==h.DONE)return e.apply(this,arguments)}},S={create:!0,exclusive:!1};if(h.readyState=h.INIT,m||(m="download"),l)return x=t().createObjectURL(p),void setTimeout(function(){o.href=x,o.download=m,n(o),w(),c(x),h.readyState=h.DONE});e.chrome&&g&&g!==s&&(F=p.slice||p.webkitSlice,p=F.call(p,0,p.size,s),v=!0),i&&"download"!==m&&(m+=".download"),(g===s||i)&&(b=e),d?(f+=p.size,d(e.TEMPORARY,f,k(function(e){e.root.getDirectory("saved",S,k(function(e){var t=function(){e.getFile(m,S,k(function(e){e.createWriter(k(function(t){t.onwriteend=function(t){b.location.href=e.toURL(),h.readyState=h.DONE,u(h,"writeend",t),c(e)},t.onerror=function(){var e=t.error;e.code!==e.ABORT_ERR&&B()},"writestart progress write abort".split(" ").forEach(function(e){t["on"+e]=h["on"+e]}),t.write(p),h.abort=function(){t.abort(),h.readyState=h.DONE},h.readyState=h.WRITING}),B)}),B)};e.getFile(m,{create:!1},k(function(e){e.remove(),t()}),k(function(e){e.code===e.NOT_FOUND_ERR?t():B()}))}),B)}),B)):B()},x=I.prototype,b=function(e,t,o){return new I(e,t,o)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,o){return o||(e=y(e)),navigator.msSaveOrOpenBlob(e,t||"download")}:(x.abort=function(){var e=this;e.readyState=e.DONE,u(e,"abort")},x.readyState=x.INIT=0,x.WRITING=1,x.DONE=2,x.error=x.onwritestart=x.onprogress=x.onwrite=x.onabort=x.onerror=x.onwriteend=null,b)}}("undefined"!=typeof self&&self||void 0!==t&&t||this.content);s.fileSave=f;var m=function(t,o){var l="*"===t.filename&&"*"!==t.title&&t.title!==r?t.title:t.filename;return"function"==typeof l&&(l=l()),-1!==l.indexOf("*")&&(l=e.trim(l.replace("*",e("title").text()))),l=l.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g,""),o===r||!0===o?l+t.extension:l},c=function(e){var t="Sheet1";return e.sheetName&&(t=e.sheetName.replace(/[\[\]\*\/\\\?\:]/g,"")),t},u=function(t){var o=t.title;return"function"==typeof o&&(o=o()),-1!==o.indexOf("*")?o.replace("*",e("title").text()||"Exported data"):o},y=function(e){return e.newline?e.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"},I=function(e,t){for(var o=y(t),l=e.buttons.exportData(t.exportOptions),n=t.fieldBoundary,a=t.fieldSeparator,i=new RegExp(n,"g"),d=t.escapeChar!==r?t.escapeChar:"\\",p=function(e){for(var t="",o=0,l=e.length;o<l;o++)o>0&&(t+=a),t+=n?n+(""+e[o]).replace(i,d+n)+n:e[o];return t},s=t.header?p(l.header)+o:"",f=t.footer&&l.footer?o+p(l.footer):"",m=[],c=0,u=l.body.length;c<u;c++)m.push(p(l.body[c]));return{str:s+m.join(o)+f,rows:m.length}},x=function(){return-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Opera")};try{var b,F=new XMLSerializer}catch(g){}var h={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill/><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'};return s.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(e){return e.i18n("buttons.copy","Copy")},action:function(t,l,n,r){var a=I(l,r),i=a.str,d=e("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0});r.customize&&(i=r.customize(i,r));var p=e("<textarea readonly/>").val(i).appendTo(d);if(o.queryCommandSupported("copy")){d.appendTo(l.table().container()),p[0].focus(),p[0].select();try{return o.execCommand("copy"),d.remove(),void l.buttons.info(l.i18n("buttons.copyTitle","Copy to clipboard"),l.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},a.rows),2e3)}catch(g){}}var s=e("<span>"+l.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>\u2318</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+"</span>").append(d);l.buttons.info(l.i18n("buttons.copyTitle","Copy to clipboard"),s,0),p[0].focus(),p[0].select();var f=e(s).closest(".dt-button-info"),m=function(){f.off("click.buttons-copy"),e(o).off(".buttons-copy"),l.buttons.info(!1)};f.on("click.buttons-copy",m),e(o).on("keydown.buttons-copy",function(e){27===e.keyCode&&m()}).on("copy.buttons-copy cut.buttons-copy",function(){m()})},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1},s.ext.buttons.csvHtml5={className:"buttons-csv buttons-html5",available:function(){return t.FileReader!==r&&t.Blob},text:function(e){return e.i18n("buttons.csv","CSV")},action:function(e,t,l,n){var r=I(t,n).str,a=n.charset;n.customize&&(r=n.customize(r,n)),!1!==a?(a||(a=o.characterSet||o.charset),a&&(a=";charset="+a)):a="",f(new Blob([r],{type:"text/csv"+a}),m(n))},filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1},s.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return t.FileReader!==r&&l!==r&&!x()&&F},text:function(e){return e.i18n("buttons.excel","Excel")},action:function(t,o,n,s){var u,y,I=0,x=function(t){var o=h[t];return e.parseXML(o)},b=x("xl/worksheets/sheet1.xml"),F=b.getElementsByTagName("sheetData")[0],g={_rels:{".rels":x("_rels/.rels")},xl:{_rels:{"workbook.xml.rels":x("xl/_rels/workbook.xml.rels")},"workbook.xml":x("xl/workbook.xml"),"styles.xml":x("xl/styles.xml"),worksheets:{"sheet1.xml":b}},"[Content_Types].xml":x("[Content_Types].xml")},v=o.buttons.exportData(s.exportOptions),w=function(t){y=d(b,"row",{attr:{r:u=I+1}});for(var o=0,l=t.length;o<l;o++){var n,i=a(o)+""+u;if(null!==t[o]&&t[o]!==r||(t[o]=""),"number"==typeof t[o]||t[o].match&&e.trim(t[o]).match(/^-?\d+(\.\d+)?$/)&&!e.trim(t[o]).match(/^0\d+/))n=d(b,"c",{attr:{t:"n",r:i},children:[d(b,"v",{text:t[o]})]});else{var p=t[o].replace?t[o].replace(/&(?!amp;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""):t[o];n=d(b,"c",{attr:{t:"inlineStr",r:i},children:{row:d(b,"is",{children:{row:d(b,"t",{text:p})}})}})}y.appendChild(n)}F.appendChild(y),I++};e("sheets sheet",g.xl["workbook.xml"]).attr("name",c(s)),s.customizeData&&s.customizeData(v),s.header&&(w(v.header,I),e("row c",b).attr("s","2"));for(var B=0,k=v.body.length;B<k;B++)w(v.body[B],I);s.footer&&v.footer&&(w(v.footer,I),e("row:last c",b).attr("s","2"));var S=d(b,"cols");e("worksheet",b).prepend(S);for(var T=0,C=v.header.length;T<C;T++)S.appendChild(d(b,"col",{attr:{min:T+1,max:T+1,width:p(v,T),customWidth:1}}));s.customize&&s.customize(g);var O=new l,D={type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};i(O,g),O.generateAsync?O.generateAsync(D).then(function(e){f(e,m(s))}):f(O.generate(D),m(s))},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1},s.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return t.FileReader!==r&&n},text:function(e){return e.i18n("buttons.pdf","PDF")},action:function(t,o,l,r){y(r);var a=o.buttons.exportData(r.exportOptions),i=[];r.header&&i.push(e.map(a.header,function(e){return{text:"string"==typeof e?e:e+"",style:"tableHeader"}}));for(var d=0,p=a.body.length;d<p;d++)i.push(e.map(a.body[d],function(e){return{text:"string"==typeof e?e:e+"",style:d%2?"tableBodyEven":"tableBodyOdd"}}));r.footer&&a.footer&&i.push(e.map(a.footer,function(e){return{text:"string"==typeof e?e:e+"",style:"tableFooter"}}));var s={pageSize:r.pageSize,pageOrientation:r.orientation,content:[{table:{headerRows:1,body:i},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}};r.message&&s.content.unshift({text:r.message,style:"message",margin:[0,0,0,12]}),r.title&&s.content.unshift({text:u(r,!1),style:"title",margin:[0,0,0,12]}),r.customize&&r.customize(s,r);var c=n.createPdf(s);"open"!==r.download||x()?c.getBuffer(function(e){var t=new Blob([e],{type:"application/pdf"});f(t,m(r))}):c.open()},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,message:null,customize:null,download:"download"},s.Buttons});