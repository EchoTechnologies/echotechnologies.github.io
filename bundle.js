!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){const n={};let o=null;const r=(t,e)=>{$.get("https://www.gofundme.com/echo-technology",n=>{const o=$(n),r=o.find(".show-for-large .goal strong")[0].innerText,a=o.find(".show-for-large .goal .smaller").text().match(/\$[\d,]+/)[0];t.find("#raised").text(r),t.find("#total").text(a);const i=o.find(".donations-column-contain .supporters-list .supporter-name").map((t,e)=>$(e).text().replace(/ +/g," ")).get().join(", "),s=t.find("#donors").text();t.find("#donors").text(`${s}, ${i}`);const c=parseInt(r.replace(/[\$,]/g,""))/parseInt(a.replace(/[\$,]/g,""))*100;t.find("#meter").width(`${c}%`),e(t.html().trim())})},a=()=>{$.getJSON("static/bom.json",t=>{const e=t.data.map(t=>t.amount),n=t.data.map(t=>t.department),o=t.data.map(t=>t.color);new Chart($("#chart"),{type:"pie",data:{datasets:[{data:e,backgroundColor:o}],labels:n},options:{legend:{display:!1},tooltips:{callbacks:{label:(t,e)=>{const n=e.datasets[t.datasetIndex],o=n.data.reduce((t,e)=>t+e),r=n.data[t.index];return`$${r} (${parseFloat((r/o*100).toFixed(1))}%)`},title:(t,e)=>e.labels[t[0].index]}}}})})},i=t=>!t.startsWith("#")&&o!==t&&(o=t,$("main").animate({opacity:0},()=>{$("body").css({overflow:"hidden"}),n[t]?("/donate.html"===t&&a(),$("main").html(n[t]),$("main").animate({opacity:1}),$("body").css({overflow:"scroll"})):((t,e)=>{$.get(t,n=>{const o=$($(n)[4]);"/donate.html"===t?($("#loader").animate({opacity:1}),r(o,t=>{e(t),$("#loader").animate({opacity:0})})):e(o.html().trim())})})(t,e=>{"/donate.html"===t&&a(),n[t]=e,$("main").html(n[t]),$("main").animate({opacity:1}),$("body").css({overflow:"scroll"})})}),!0);window.addEventListener("popstate",()=>{const t=window.location.pathname;i(t)}),$("#nav a, #sidenav a").click(function(t){t.preventDefault();const e=$(this).attr("href");e&&i(e)&&history.pushState({},"",e)}),$(window).ready(()=>{o=window.location.pathname;const t=$("main");"/donate.html"===o?r(t,e=>{a(),t.html(e),n[o]=t.html().trim()}):n[o]=t.html().trim()})},function(t,e){const n=()=>{for(let t=0;t<8;t++)setTimeout(()=>{$("#intro").ripple({fixedPos:[$("#intro").innerWidth()/3,$("#intro").innerHeight()/2],adaptPos:!0}).trigger("mousedown").ripple({unbind:!0})},300*t);setTimeout(()=>$.ripple.destroy(),5e3)};$(window).load(()=>{n(),setInterval(()=>n(),6e3)}),$("#sidenav-trigger").click(()=>{$("#sidenav").animate({width:"100%"}),$("#backdrop").show(),$("body").css({overflow:"hidden"})}),$("#close, #backdrop").click(()=>{$("#sidenav").animate({width:"0"}),$("#backdrop").hide(),$("body").css({overflow:"scroll"})}),$.ajaxPrefilter(t=>{t.crossDomain&&jQuery.support.cors&&(t.url=`https:////cors-anywhere.herokuapp.com/${t.url}`)})},function(t,e,n){const o=t=>t.keys().forEach(t);o(n(3)),o(n(8)),o(n(9))},function(t,e,n){var o={"./components.scss":4,"./main.scss":5,"./media.scss":6,"./sections.scss":7};function r(t){var e=a(t);return n(e)}function a(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=3},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){var o={"./hashchange":0,"./hashchange.js":0,"./init":1,"./init.js":1};function r(t){var e=a(t);return n(e)}function a(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=8},function(t,e,n){var o={"./azorian.jpg":10,"./cams.jpeg":11,"./camsptso.png":12,"./internpic.jpg":13,"./motivo.png":14,"./outreach1.jpg":15,"./outreach2.jpg":16,"./teampic1.jpg":17};function r(t){var e=a(t);return n(e)}function a(t){var e=o[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(o)},r.resolve=a,t.exports=r,r.id=9},function(t,e,n){t.exports=n.p+"images/azorian.jpg"},function(t,e,n){t.exports=n.p+"images/cams.jpeg"},function(t,e,n){t.exports=n.p+"images/camsptso.png"},function(t,e,n){t.exports=n.p+"images/internpic.jpg"},function(t,e,n){t.exports=n.p+"images/motivo.png"},function(t,e,n){t.exports=n.p+"images/outreach1.jpg"},function(t,e,n){t.exports=n.p+"images/outreach2.jpg"},function(t,e,n){t.exports=n.p+"images/teampic1.jpg"}]);
//# sourceMappingURL=bundle.js.map