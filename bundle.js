!function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";e.r(n);e(1),e(6),e(8),e(10),e(12),e(13),e(14),e(15),e(16)},function(t,n,e){},,,,,function(t,n,e){},,function(t,n,e){},,function(t,n,e){},,function(t,n){function e(){for(let t=0;t<8;t++)setTimeout(()=>{$("#intro").ripple({fixedPos:[$("#intro").innerWidth()/3,$("#intro").innerHeight()/2],adaptPos:!0}).trigger("mousedown").ripple({unbind:!0})},300*t);setTimeout(()=>$.ripple.destroy(),5e3)}$(window).load(function(){e(),setInterval(()=>e(),6e3)}),$("#sidenav-trigger").click(()=>{$("#sidenav").animate({width:"100%"}),$("#backdrop").show(),$("body").css({overflow:"hidden"})}),$("#close, #backdrop").click(()=>{$("#sidenav").animate({width:"0"}),$("#backdrop").hide(),$("body").css({overflow:"scroll"})})},function(t,n){const e={};let o=null;const i=t=>!t.startsWith("#")&&o!==t&&(o=t,$("main").animate({opacity:0},()=>{e[t]?$("main").html(e[t]):((t,n)=>{$.get(t,function(t){const e=$(t)[4];n(e.innerHTML.trim())})})(t,n=>{e[t]=n,$("main").html(e[t])}),$("main").animate({opacity:1})}),!0);window.addEventListener("popstate",()=>{const t=window.location.pathname;i(t)}),$("#nav a, #sidenav a").click(function(t){t.preventDefault();const n=$(this).attr("href");i(n)&&history.pushState({},"",n)}),$(window).ready(()=>{o=window.location.pathname})},function(t,n,e){t.exports=e.p+"images/azorian.png"},function(t,n,e){t.exports=e.p+"images/teampic1.jpg"},function(t,n,e){t.exports=e.p+"images/internpic.jpg"}]);
//# sourceMappingURL=bundle.js.map