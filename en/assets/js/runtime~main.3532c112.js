(()=>{"use strict";var e,t,r,a,o,d={},n={};function f(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return d[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=d,f.c=n,e=[],f.O=(t,r,a,o)=>{if(!r){var d=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var n=!0,c=0;c<r.length;c++)(!1&o||d>=o)&&Object.keys(f.O).every((e=>f.O[e](r[c])))?r.splice(c--,1):(n=!1,o<d&&(d=o));if(n){e.splice(i--,1);var b=a();void 0!==b&&(t=b)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var d={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>d[t]=()=>e[t]));return d.default=()=>e,f.d(o,d),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({20:"0e2e07dc",53:"935f2afb",85:"1f391b9e",237:"1df93b7f",292:"df361e2b",368:"a94703ab",414:"393be207",485:"9aa54785",518:"a7bd4aaa",559:"969b44c6",575:"bc96c435",650:"8d141606",661:"5e95c892",674:"065dea42",689:"2dd8807d",692:"1d34c4d7",756:"a8bb5334",871:"fec0cb35",918:"17896441",920:"1a4e3797",971:"c377a04b",972:"8e44a8a2"}[e]||e)+"."+{20:"aaf0f36d",53:"7312e398",85:"a17b9b61",237:"73784a47",285:"66d75001",292:"cec9f4b6",368:"9c8bdd21",414:"a2d7a61e",426:"4e0b6360",485:"de48f29f",518:"b827825a",559:"55ec2b34",575:"1661976b",650:"425547b2",661:"2a8755d9",674:"f11462c2",689:"15b52082",692:"d783d8be",756:"e8d9b7c0",772:"d7142bf8",871:"26c0c39a",894:"da970eb6",918:"275726cb",920:"49628904",945:"d195ff9c",971:"adcca37f",972:"b87814c4"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="agoodbook:",f.l=(e,t,r,d)=>{if(a[e])a[e].push(t);else{var n,c;if(void 0!==r)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),c&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/html/en/",f.gca=function(e){return e={17896441:"918","0e2e07dc":"20","935f2afb":"53","1f391b9e":"85","1df93b7f":"237",df361e2b:"292",a94703ab:"368","393be207":"414","9aa54785":"485",a7bd4aaa:"518","969b44c6":"559",bc96c435:"575","8d141606":"650","5e95c892":"661","065dea42":"674","2dd8807d":"689","1d34c4d7":"692",a8bb5334:"756",fec0cb35:"871","1a4e3797":"920",c377a04b:"971","8e44a8a2":"972"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var a=f.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var d=f.p+f.u(t),n=new Error;f.l(d,(r=>{if(f.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+d+")",n.name="ChunkLoadError",n.type=o,n.request=d,a[1](n)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,d=r[0],n=r[1],c=r[2],b=0;if(d.some((t=>0!==e[t]))){for(a in n)f.o(n,a)&&(f.m[a]=n[a]);if(c)var i=c(f)}for(t&&t(r);b<d.length;b++)o=d[b],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(i)},r=self.webpackChunkagoodbook=self.webpackChunkagoodbook||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();