(()=>{"use strict";var e,t,r={},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,n),c.loaded=!0,c.exports}n.m=r,n.amdD=function(){throw new Error("define cannot be used indirect")},n.amdO={},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+".bundle.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="calculator:",n.l=(r,o,c,l)=>{if(e[r])e[r].push(o);else{var i,a;if(void 0!==c)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+c){i=d;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+c),i.src=r),e[r]=[o];var E=(t,o)=>{i.onerror=i.onload=null,clearTimeout(S);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),t)return t(o)},S=setTimeout(E.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=E.bind(null,i.onerror),i.onload=E.bind(null,i.onload),a&&document.head.appendChild(i)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var c=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=c);var l=n.p+n.u(t),i=new Error;n.l(l,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var c=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+c+": "+l+")",i.name="ChunkLoadError",i.type=c,i.request=l,o[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,c,[l,i,a]=r,s=0;if(l.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);a&&a(n)}for(t&&t(r);s<l.length;s++)c=l[s],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0},r=self.webpackChunkcalculator=self.webpackChunkcalculator||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c={};function l(e,t){e.addEventListener("click",t)}n.r(c),n.d(c,{ADDITION:()=>le,ARCOS:()=>x,ARCSIN:()=>q,ARCTAN:()=>C,BOTTOMARROW:()=>v,CLEAR:()=>g,COMMA:()=>M,COS:()=>_,DEGREE:()=>O,DEGREE_SCREEN:()=>Ee,DELETE:()=>y,DISPLAY_WHAT_SINGLE:()=>a,DIVIDE:()=>$,EE:()=>G,EIGHT:()=>j,ENTER:()=>ue,EX:()=>re,EXPONENT:()=>B,EXPRESSION_OBJECT:()=>i,FIVE:()=>J,FLAGLIST:()=>fe,FLIP_ONE:()=>d,FLIP_ZERO:()=>u,FORWARD:()=>Te,FOUR:()=>z,GRIDS:()=>m,INSERT:()=>R,LEFTARROW:()=>I,LEFTPARENTHESES:()=>k,LN:()=>te,LOG:()=>Y,MULTIPLE:()=>s,MULTIPLY:()=>Q,NEGATIVE:()=>se,NINE:()=>V,ON:()=>S,ONE:()=>oe,PERCENT_SIGN:()=>F,PI:()=>L,RADIAN:()=>A,RADIAN_SCREEN:()=>Se,RADIX:()=>ae,RIGHTARROW:()=>p,RIGHTPARENTHESES:()=>w,SCREEN_OFF:()=>E,SECOND:()=>T,SECOND_SCREEN:()=>de,SEVEN:()=>X,SIN:()=>P,SIX:()=>K,SQUARE:()=>W,SQUAREROOT:()=>H,SUBTRACT:()=>ee,TAN:()=>U,TENX:()=>Z,THREE:()=>ce,TON:()=>me,TWO:()=>ne,UPARROW:()=>h,WOFF:()=>N,WON:()=>f,ZERO:()=>ie,xNEGONE:()=>b,xROOT:()=>D});var i={string:[],listeners:[],push(e){this.string.push(e),this.notify()},clear(){this.string=[],this.notify()},listen(e){this.listeners.push(e)},notify(){this.listeners.forEach((e=>e(this.string)))},getLength(){return this.string.length},getCharacterLength(){return this.string.join("").length},getGridCountForToken:function(e){let t=s[e],r=new Set;if(t)for(let e in t)t[e].forEach((e=>r.add(e)));else a[e].forEach((e=>r.add(e)));return r.size+1}},a={0:[1,2,3,5,9,10,13,14,15,17,19,20,21,24,25,29,31,32,33],1:[2,6,7,12,17,22,27,31,32,33],2:[1,2,3,5,9,14,18,22,26,30,31,32,33,34],3:[0,1,2,3,4,8,12,18,24,25,29,31,32,33],4:[3,7,8,11,13,15,18,20,21,22,23,24,28,33],5:[0,1,2,3,4,5,10,11,12,13,19,24,25,29,31,32,33],6:[2,3,6,10,15,16,17,18,20,24,25,29,31,32,33],7:[0,1,2,3,4,9,13,17,21,26,31],8:[1,2,3,5,9,10,14,16,17,18,20,24,25,29,31,32,33],9:[1,2,3,5,9,10,14,16,17,18,19,24,28,31,32],p:[10,11,12,13,14,16,18,21,23,26,28,30,33,34],"^":[2,6,8,10,14],"!":[3,4,9,10,11,14,19],E:[11,12,13,14,16,21,22,23,26,31,32,33,34],"(":[3,7,11,16,21,27,33],")":[1,7,13,18,23,27,31],"/":[9,13,17,21,25],"@":[1,2,3,5,8,12,16,20,21,22,23],"*":[7,10,12,14,16,17,18,20,22,24,27],S:[15,16,17,18,19],"-":[15,16,17,18,19],"+":[7,12,15,16,17,18,19,22,27],".":[26,27,31,32],"%":[0,1,5,6,9,13,17,21,25,28,29,33,34],D:[0,1,2,5,8,10,14,15,19,20,24,25,28,30,31,32],O:[1,2,3,5,9,10,14,15,19,20,24,25,29,31,32,33],M:[0,4,5,6,8,9,10,12,14,15,17,19,20,24,25,29,30,34],A:[1,2,3,5,9,10,14,15,16,17,18,19,20,24,25,29,30,34],I:[1,2,3,7,12,17,22,27,31,32,33],N:[0,4,5,9,10,11,14,15,17,19,20,23,24,25,29,30,34],r:[12,13,16,19,21,26,31],e:[11,12,13,15,19,20,21,22,23,25,31,32],o:[11,12,13,15,19,20,24,25,29,31,32,33]},s={"sin(":{s:[11,12,13,15,21,22,23,29,30,31,32,33],i:[2,11,12,17,22,27,31,32,33],n:[10,12,13,15,16,19,20,24,25,29,30,34],"(":[3,7,11,16,21,27,33]},"asin(":{a:[11,12,13,19,21,22,23,24,25,29,31,32,33,34],s:[11,12,13,15,21,22,23,29,30,31,32,33],i:[2,11,12,17,22,27,31,32,33],n:[10,12,13,15,16,19,20,24,25,29,30,34],"(":[3,7,11,16,21,27,33]},"cos(":{c:[11,12,13,15,20,25,29,31,32,33],o:[11,12,13,15,19,20,24,25,29,31,32,33],s:[11,12,13,15,21,22,23,29,30,31,32,33],"(":[3,7,11,16,21,27,33]},"acos(":{a:[11,12,13,19,21,22,23,24,25,29,31,32,33,34],c:[11,12,13,15,20,25,29,31,32,33],o:[11,12,13,15,19,20,24,25,29,31,32,33],s:[11,12,13,15,21,22,23,29,30,31,32,33],"(":[3,7,11,16,21,27,33]},"tan(":{t:[1,6,10,11,12,16,21,26,29,32,33],a:[11,12,13,19,21,22,23,24,25,29,31,32,33,34],n:[10,12,13,15,16,19,20,24,25,29,30,34],"(":[3,7,11,16,21,27,33]},"atan(":{a:[11,12,13,19,21,22,23,24,25,29,31,32,33,34],t:[1,6,10,11,12,16,21,26,29,32,33],u:[11,12,13,19,21,22,23,24,25,29,31,32,33,34],n:[10,12,13,15,16,19,20,24,25,29,30,34],"(":[3,7,11,16,21,27,33]},xRt:{x:[2,4,8,12,14],ro:[2,3,4,7,12,17,20,22,26,27,32],"(":[3,7,11,16,21,27,33]},"2x":{ro:[2,3,4,7,12,17,20,22,26,27,32],"(":[3,7,11,16,21,27,33]},"log(":{l:[1,2,7,12,17,22,27,31,32,33],o:[11,12,13,15,19,20,24,25,29,31,32,33],g:[6,7,8,9,10,14,15,19,21,22,23,24,29,31,32,33],"(":[3,7,11,16,21,27,33]},"(tn":{"(":[3,7,11,16,21,27,33],ten:[10,12,13,14,15,17,19,20,22,24,25,27,29,30,32,33,34],"^":[2,6,8,10,14]},"e^(":{e:[11,12,13,15,19,20,21,22,23,25,31,32],"^":[2,6,8,10,14],"(":[3,7,11,16,21,27,33]},"ln(":{l:[1,2,7,12,17,22,27,31,32,33],n:[10,12,13,15,16,19,20,24,25,29,30,34],"(":[3,7,11,16,21,27,33]}};const u=document.querySelectorAll(".flip0"),d=document.querySelectorAll(".flip1"),E=document.querySelectorAll(".screenOff"),S=document.querySelector("#On"),T=document.querySelector("#Second"),m=document.querySelectorAll(".lcdGridSquare"),f=document.querySelector("#onSpan"),N=document.querySelector("#offSpan"),g=document.querySelector("#CLEAR_BUTTON"),O=document.querySelector("#DEGREE_SPAN"),A=document.querySelector("#RADIAN_SPAN"),y=document.querySelector("#DELETE_SPAN"),R=document.querySelector("#INSERT_SPAN"),h=document.querySelector("#UPARROW_BUTTON"),p=document.querySelector("#RIGHTARROW_BUTTON"),v=document.querySelector("#BOTTOMARROW_BUTTON"),I=document.querySelector("#LEFTARROW_BUTTON"),L=document.querySelector("#PI_BUTTON"),P=document.querySelector("#SIN_SPAN"),q=document.querySelector("#ARCSIN_SPAN"),_=document.querySelector("#COSINE_SPAN"),x=document.querySelector("#ARCOS_SPAN"),U=document.querySelector("#TANGENT_SPAN"),C=document.querySelector("#ARCTAN_SPAN"),B=document.querySelector("#EXPONENT_SPAN"),D=document.querySelector("#xROOT_SPAN"),b=document.querySelector("#xNegOne_SPAN"),G=document.querySelector("#EE_SPAN"),k=document.querySelector("#LEFT_PARENTHESES_SPAN"),F=document.querySelector("#PERCENT_SPAN"),w=document.querySelector("#RIGHT_PARENTHESES_SPAN"),M=document.querySelector("#COMMA_SPAN"),$=document.querySelector("#DIVIDE_BUTTON"),W=document.querySelector("#SQUARE_SPAN"),H=document.querySelector("#SQUARE_ROOT_SPAN"),X=document.querySelector("#SEVEN_BUTTON"),j=document.querySelector("#EIGHT_BUTTON"),V=document.querySelector("#NINE_BUTTON"),Q=document.querySelector("#MULTIPLY_BUTTON"),Y=document.querySelector("#LOG_SPAN"),Z=document.querySelector("#TENX_SPAN"),z=document.querySelector("#FOUR_BUTTON"),J=document.querySelector("#FIVE_BUTTON"),K=document.querySelector("#SIX_BUTTON"),ee=document.querySelector("#SUBTRACT_BUTTON"),te=document.querySelector("#NATURAL_LOG_SPAN"),re=document.querySelector("#EX_SPAN"),oe=document.querySelector("#ONE_BUTTON"),ne=document.querySelector("#TWO_BUTTON"),ce=document.querySelector("#THREE_BUTTON"),le=document.querySelector("#ADDITION_BUTTON"),ie=document.querySelector("#ZERO_BUTTON"),ae=document.querySelector("#RADIX_BUTTON"),se=document.querySelector("#NEGATIVE_BUTTON"),ue=document.querySelector("#ENTER_BUTTON"),de=document.querySelector("#secondScreenText"),Ee=document.querySelector("#degreeScreenText"),Se=document.querySelector("#radianScreenText"),Te=document.querySelector("#forwardSlash");var me=document.querySelector(".TURNON");const fe={isOn:!1,gridDefined:!1,angleMode:!1};let Ne,ge=0,Oe=0;function Ae(){if(fe.isOn){clearInterval(Ne);let e=document.getElementById(`gridspace${String(ge+1).padStart(2,"0")}`);if(!e)return void console.error(`No gridSpace found for cursorPosition ${ge}`);let t=Array.from(e.children);Ne=setInterval((()=>{t.forEach((e=>{e.classList.toggle("activeCursor")}))}),500)}}let ye,Re=!1;function he(e,t){if(Re)return;Re=!0;let r=document.getElementById(`gridspace${String(ge+1).padStart(2,"0")}`);for(r&&Array.from(r.children).forEach((e=>{e.classList.remove("activeCursor")})),clearInterval(Ne);t>=11;)t--,Oe+t<i.getCharacterLength()&&Oe++;for(;t<0&&Oe>0;)t++,Oe--;t=Math.max(0,t),t=Math.min(i.getCharacterLength(),t),ge=t,clearTimeout(ye),fe.isOn?(Ae(),ye=setTimeout((()=>{pe(i.string),Re=!1}),10)):(Le(),Re=!1)}function pe(e){console.log(`Updating grids with expression array ${e}`),e.flatMap((e=>(console.log(`Processing token: ${e}`),s[e]?Object.keys(s[e]).map((t=>(console.log(`Processing key: ${t}`),{token:e,key:t}))):(console.log(`No multiple for token: ${e}`),{token:e,key:e})))).slice(Oe,Oe+11).forEach(((e,t)=>{console.log(`Processing item at index ${t}:`,e);const r=s[e.token]?s:a;!function(e,t,r,o){const n=document.getElementById(`gridspace${r.toString().padStart(2,"0")}`);if(!n)return void console.error(`No container found with ID gridspace${r}`);const c=Array.from(n.children);c.forEach((e=>e.classList.remove("activatedPixel")));const l=o[e];if(!l)return void console.error(`No display data found for token '${e}'`);const i=Array.isArray(l[t])?l[t]:l;Array.isArray(i)?i.forEach((e=>{e<c.length&&(c[e].classList.add("activatedPixel"),console.log(`Added 'activatedPixel' to child at index ${e}`))})):console.error(`No array of indices found for token '${e}', key '${t}'`)}(e.token,e.key,t+1,r)})),console.log("Drawing cursor..."),Ae()}let ve,Ie=!1;function Le(){if(Ie)return;Ie=!0,clearInterval(Ne);let e=document.getElementById(`gridspace${String(ge+1).padStart(2,"0")}`);e&&Array.from(e.children).forEach((e=>{e.classList.remove("activeCursor")})),Ne=null,pe(i.string),ge=0,Ae(),ve=setTimeout((()=>{Oe=0,Ie=!1}),100)}function Pe(){clearTimeout(ve)}function qe(e){return function(t){fe.isOn&&(i.push(String(e)),pe(i.string),he(0,i.getGridCountForToken(String(e))))}}function _e(e){return function(t){fe.isOn&&(i.push(e),pe(i.string),he(0,i.getGridCountForToken(e)))}}function xe(e){i.string=[],S.classList.add("activatedBLUEOW"),E.forEach((e=>e.classList.add("on"))),fe.isOn=!0,Se.classList.add("activeScreenText"),Te.classList.add("activeScreenText"),function(e){for(let e=1;e<=22;e++){let t="gridspace"+(e>9?e:"0"+e);Array.from(document.querySelector("#"+t).children).forEach((e=>{e.className="onGrid"}))}}(),Le()}function Ue(e){for(let t=1;t<=22;t++){let r="gridspace"+(t>9?t:"0"+t);Array.from(document.querySelector("#"+r).children).forEach((t=>{t.classList.remove(e)}))}}g.addEventListener("mousedown",Pe),N.addEventListener("mousedown",Pe);const Ce=qe(0),Be=qe(1),De=qe(2),be=qe(3),Ge=qe(4),ke=qe(5),Fe=qe(6),we=qe(7),Me=qe(8),$e=qe(9),We=_e("p"),He=_e("sin("),Xe=_e("asin("),je=_e("cos("),Ve=_e("acos("),Qe=_e("tan("),Ye=_e("atan("),Ze=_e("^"),ze=_e("xRt"),Je=_e("!"),Ke=_e("(tn"),et=_e("("),tt=_e(")"),rt=_e("/"),ot=_e("@"),nt=_e("2x"),ct=_e("*"),lt=_e("S"),it=_e("+"),at=_e("log("),st=_e("(tn"),ut=_e("e^("),dt=_e("ln("),Et=_e("."),St=_e("-"),Tt=_e("%"),mt=(i.string,async function(e){let t=i.string;console.log(t);let r={p:"(pi)",E:"*10^","!":"^-1",S:"-","@":"^2",xRt:"nthRoot(","(tn":"(10^"};var o=t.map((e=>{let t=e;for(let e in r)t.includes(e)&&(t=t.replace(new RegExp(e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),"g"),r[e]));return t}));console.log(o);var c=o.join(""),l=(await Promise.all([n.e(786),n.e(180)]).then(n.bind(n,770))).default.evaluate(c);console.log(l),function(e){if("object"==typeof e){console.log("DomainErr.");let e="DOMAIN.err.".split("");for(let t=0;t<e.length;t++){const r=t+12,o=document.getElementById(`gridspace${String(r).padStart(2,"0")}`);if(o){const r=e[t],n=Array.from(o.children);n.forEach((e=>e.classList.remove("activatedPixel")));const c=a[r];c&&(Array.isArray(c)?c:[c]).forEach((e=>{e<n.length&&(n[e].classList.add("activatedPixel"),console.log(`Added 'activatedPixel' to child at index ${e}`))}))}}}else if("number"==typeof e){console.log("Result: ",e),console.log("Type: ",typeof e);const t=String(e).split("");console.log(t);for(let e=0;e<t.length;e++){const r=e+12,o=document.getElementById(`gridspace${String(r).padStart(2,"0")}`);if(o){const r=t[e],n=Array.from(o.children);n.forEach((e=>e.classList.remove("activatedPixel")));const c=a[r];c&&(Array.isArray(c)?c:[c]).forEach((e=>{e<n.length&&(n[e].classList.add("activatedPixel"),console.log(`Added 'activatedPixel' to child at index ${e}`))}))}}}}(l)});l(f,xe),l(N,(function(e){me.remove(),S.classList.remove("activatedBLUEOW"),E.forEach((e=>e.classList.remove("on"))),u.forEach((e=>e.classList.remove("flipF"))),d.forEach((e=>e.classList.remove("flipB"))),T.classList.remove("activatedBOW"),de.classList.remove("activeScreenText"),Se.classList.remove("activeScreenText"),Ee.classList.remove("activeScreenText"),Te.classList.remove("activeScreenText"),fe.angleMode=!1,fe.isOn=!1,i.string=[],Ue("activatedPixel"),Ue("onGrid"),Le()})),l(T,(function(e){console.log(e),fe.isOn&&(u.forEach((e=>e.classList.toggle("flipF"))),d.forEach((e=>e.classList.toggle("flipB"))),T.classList.toggle("activatedBOW"),de.classList.toggle("activeScreenText"))})),console.log(c.WOFF);const ft={CLEAR:function(e){fe.isOn&&(i.clear(),Ue("activatedPixel"),Le())},ZERO:Ce,ONE:Be,TWO:De,THREE:be,FOUR:Ge,FIVE:ke,SIX:Fe,SEVEN:we,EIGHT:Me,NINE:$e,PI:We,SIN:He,ARCSIN:Xe,COS:je,ARCOS:Ve,TAN:Qe,ARCTAN:Ye,EXPONENT:Ze,xROOT:ze,xNEGONE:Je,EE:Ke,LEFTPARENTHESES:et,RIGHTPARENTHESES:tt,PERCENT_SIGN:Tt,DIVIDE:rt,SQUARE:ot,SQUAREROOT:nt,MULTIPLY:ct,LOG:at,TENX:st,SUBTRACT:lt,LN:dt,EX:ut,ADDITION:it,RADIX:Et,NEGATIVE:St,ENTER:mt,DEGREE:function(){fe.isOn&&(Se.classList.remove("activeScreenText"),Ee.classList.add("activeScreenText"),fe.angleMode=!0,console.log(fe.angleMode))},RADIAN:function(){fe.isOn&&(Se.classList.add("activeScreenText"),Ee.classList.remove("activeScreenText"),fe.angleMode=!0,console.log(fe.angleMode))},RIGHTARROW:function(){he()},LEFTARROW:function(){he()}};for(const e in ft)l(c[e],ft[e]);console.log(i.string.length),document.addEventListener("DOMContentLoaded",xe)})();