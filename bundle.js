!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n){const e={};let o=null;const r=(t,n)=>{$.get("https://www.gofundme.com/echo-technology",e=>{const o=$(e),r=o.find(".show-for-large .goal strong")[0].innerText,i=o.find(".show-for-large .goal .smaller").text().match(/\$[\d,]+/)[0];t.find("#raised").text(r),t.find("#total").text(i);const a=o.find(".donations-column-contain .supporters-list .supporter-name").map((t,n)=>$(n).text().replace(/ +/g," ")).get().join(", "),s=t.find("#donators").text();t.find("#donators").text(`${s}, ${a}`);const c=parseInt(r.replace(/[\$,]/g,""))/parseInt(i.replace(/[\$,]/g,""))*100;t.find("#meter").width(`${c}%`),n(t.html().trim())})},i=t=>!t.startsWith("#")&&o!==t&&(o=t,$("main").animate({opacity:0},()=>{e[t]?($("main").html(e[t]),$("main").animate({opacity:1})):((t,n)=>{$.get(t,e=>{const o=$($(e)[4]);"/donate.html"===t?r(o,t=>n(t)):n(o.html().trim())})})(t,n=>{e[t]=n,$("main").html(e[t]),$("main").animate({opacity:1})})}),!0);window.addEventListener("popstate",()=>{const t=window.location.pathname;i(t)}),$("#nav a, #sidenav a").click(function(t){t.preventDefault();const n=$(this).attr("href");n&&i(n)&&history.pushState({},"",n)}),$(window).ready(()=>{o=window.location.pathname;const t=$("main");"/donate.html"===o?r(t,n=>{t.html(n),e[o]=t.html().trim()}):e[o]=t.html().trim()})},function(t,n){const e=()=>{for(let t=0;t<8;t++)setTimeout(()=>{$("#intro").ripple({fixedPos:[$("#intro").innerWidth()/3,$("#intro").innerHeight()/2],adaptPos:!0}).trigger("mousedown").ripple({unbind:!0})},300*t);setTimeout(()=>$.ripple.destroy(),5e3)};$(window).load(()=>{e(),setInterval(()=>e(),6e3)}),$("#sidenav-trigger").click(()=>{$("#sidenav").animate({width:"100%"}),$("#backdrop").show(),$("body").css({overflow:"hidden"})}),$("#close, #backdrop").click(()=>{$("#sidenav").animate({width:"0"}),$("#backdrop").hide(),$("body").css({overflow:"scroll"})}),$.ajaxPrefilter(t=>{t.crossDomain&&jQuery.support.cors&&(t.url=`https:////cors-anywhere.herokuapp.com/${t.url}`)})},function(t,n,e){const o=t=>t.keys().forEach(t);o(e(3)),o(e(8)),o(e(9))},function(t,n,e){var o={"./components.scss":4,"./main.scss":5,"./media.scss":6,"./sections.scss":7};function r(t){var n=i(t);return e(n)}function i(t){var n=o[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=3},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){var o={"./hashchange":0,"./hashchange.js":0,"./init":1,"./init.js":1};function r(t){var n=i(t);return e(n)}function i(t){var n=o[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=8},function(t,n,e){var o={"./azorian.jpg":10,"./cams.jpeg":11,"./camsptso.png":12,"./internpic.jpg":13,"./motivo.png":14,"./teampic1.jpg":15};function r(t){var n=i(t);return e(n)}function i(t){var n=o[t];if(!(n+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=9},function(t,n,e){t.exports=e.p+"images/azorian.jpg"},function(t,n,e){t.exports=e.p+"images/cams.jpeg"},function(t,n,e){t.exports=e.p+"images/camsptso.png"},function(t,n,e){t.exports=e.p+"images/internpic.jpg"},function(t,n,e){t.exports=e.p+"images/motivo.png"},function(t,n,e){t.exports=e.p+"images/teampic1.jpg"}]);
//# sourceMappingURL=bundle.js.map