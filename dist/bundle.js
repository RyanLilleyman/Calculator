(()=>{"use strict";var e,t,r={},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var c=o[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,n),c.loaded=!0,c.exports}n.m=r,n.amdD=function(){throw new Error("define cannot be used indirect")},n.amdO={},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+".bundle.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="calculator:",n.l=(r,o,c,i)=>{if(e[r])e[r].push(o);else{var l,a;if(void 0!==c)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+c){l=d;break}}l||(a=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+c),l.src=r),e[r]=[o];var E=(t,o)=>{l.onerror=l.onload=null,clearTimeout(S);var n=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(o))),t)return t(o)},S=setTimeout(E.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=E.bind(null,l.onerror),l.onload=E.bind(null,l.onload),a&&document.head.appendChild(l)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var c=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=c);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var c=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+c+": "+i+")",l.name="ChunkLoadError",l.type=c,l.request=i,o[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,c,[i,l,a]=r,s=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);a&&a(n)}for(t&&t(r);s<i.length;s++)c=i[s],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0},r=self.webpackChunkcalculator=self.webpackChunkcalculator||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c={};function i(e,t){e.addEventListener("click",t)}n.r(c),n.d(c,{ADDITION:()=>ie,ARCOS:()=>x,ARCSIN:()=>q,ARCTAN:()=>C,BOTTOMARROW:()=>v,CLEAR:()=>N,COMMA:()=>M,COS:()=>_,DEGREE:()=>O,DEGREE_SCREEN:()=>Ee,DELETE:()=>A,DISPLAY_WHAT_SINGLE:()=>a,DIVIDE:()=>$,EE:()=>G,EIGHT:()=>j,ENTER:()=>ue,EX:()=>re,EXPONENT:()=>B,EXPRESSION_OBJECT:()=>l,FIVE:()=>J,FLAGLIST:()=>me,FLIP_ONE:()=>d,FLIP_ZERO:()=>u,FORWARD:()=>Te,FOUR:()=>z,GRIDS:()=>f,INSERT:()=>h,LEFTARROW:()=>I,LEFTPARENTHESES:()=>k,LN:()=>te,LOG:()=>Y,MULTIPLE:()=>s,MULTIPLY:()=>Q,NEGATIVE:()=>se,NINE:()=>V,ON:()=>S,ONE:()=>oe,PERCENT_SIGN:()=>w,PI:()=>L,RADIAN:()=>y,RADIAN_SCREEN:()=>Se,RADIX:()=>ae,RIGHTARROW:()=>p,RIGHTPARENTHESES:()=>F,SCREEN_OFF:()=>E,SECOND:()=>T,SECOND_SCREEN:()=>de,SEVEN:()=>X,SIN:()=>P,SIX:()=>K,SQUARE:()=>W,SQUAREROOT:()=>H,SUBTRACT:()=>ee,TAN:()=>U,TENX:()=>Z,THREE:()=>ce,TON:()=>fe,TWO:()=>ne,UPARROW:()=>R,WOFF:()=>g,WON:()=>m,ZERO:()=>le,xNEGONE:()=>b,xROOT:()=>D});var l={string:[],listeners:[],push(e){this.string.push(e),this.notify()},clear(){this.string=[],this.notify()},listen(e){this.listeners.push(e)},notify(){this.listeners.forEach((e=>e(this.string)))},getLength(){return this.string.length},getCharacterLength(){return this.string.join("").length},getGridCountForToken:function(e){let t=s[e],r=new Set;if(t)for(let e in t)t[e].forEach((e=>r.add(e)));else a[e].forEach((e=>r.add(e)));return r.size+1}},a={0:[1,2,3,5,9,10,13,14,15,17,19,20,21,24,25,29,31,32,33],1:[2,6,7,12,17,22,27,31,32,33],2:[1,2,3,5,9,14,18,22,26,30,31,32,33,34],3:[0,1,2,3,4,8,12,18,24,25,29,31,32,33],4:[3,7,8,11,13,15,18,20,21,22,23,24,28,33],5:[0,1,2,3,4,5,10,11,12,13,19,24,25,29,31,32,33],6:[2,3,6,10,15,16,17,18,20,24,25,29,31,32,33],7:[0,1,2,3,4,9,13,17,21,26,31],8:[1,2,3,5,9,10,14,16,17,18,20,24,25,29,31,32,33],9:[1,2,3,5,9,10,14,16,17,18,19,24,28,31,32],p:[10,11,12,13,14,16,18,21,23,26,28,30,33,34],"^":[2,6,8,10,14],"!":[3,4,9,10,11,14,19],E:[11,12,13,14,16,21,22,23,26,31,32,33,34],"(":[3,7,11,16,21,27,33],")":[1,7,13,18,23,27,31],"/":[9,13,17,21,25],"@":[1,2,3,5,8,12,16,20,21,22,23],"*":[7,10,12,14,16,17,18,20,22,24,27],S:[15,16,17,18,19],"-":[15,16,17,18,19],"+":[7,12,15,16,17,18,19,22,27],".":[26,27,31,32],"%":[0,1,5,6,9,13,17,21,25,28,29,33,34],D:[0,1,2,5,8,10,14,15,19,20,24,25,28,30,31,32],O:[1,2,3,5,9,10,14,15,19,20,24,25,29,31,32,33],M:[0,4,5,6,8,9,10,12,14,15,17,19,20,24,25,29,30,34],A:[1,2,3,5,9,10,14,15,16,17,18,19,20,24,25,29,30,34],I:[1,2,3,7,12,17,22,27,31,32,33],N:[0,4,5,9,10,11,14,15,17,19,20,23,24,25,29,30,34],r:[12,13,16,19,21,26,31],e:[11,12,13,15,19,20,21,22,23,25,31,32],o:[11,12,13,15,19,20,24,25,29,31,32,33]},s={"sin(":{s:[11,12,13,15,21,22,23,29,30,31,32,33],i:[2,11,12,17,22,27,31,32,33],n:[10,12,13,15,16,19,20,24,25,29,30,34],"(":[3,7,11,16,21,27,33]},"asin(":{a:[11,12,13,19,21,22,23,24,25,29,31,32,33,34],s:[11,12,13,15,21,22,23,29,30,31,32,33],i:[2,11,12,17,22,27,31,32,33],n:[10,12,13,15,16,19,20,24,25,29,30,34],"(":[3,7,11,16,21,27,33]},"cos(":{c:[11,12,13,15,20,25,29,31,32,33],o:[11,12,13,15,19,20,24,25,29,31,32,33],s:[11,12,13,15,21,22,23,29,30,31,32,33],"(":[3,7,11,16,21,27,33]},"acos(":{a:[11,12,13,19,21,22,23,24,25,29,31,32,33,34],c:[11,12,13,15,20,25,29,31,32,33],o:[11,12,13,15,19,20,24,25,29,31,32,33],s:[11,12,13,15,21,22,23,29,30,31,32,33],"(":[3,7,11,16,21,27,33]},"tan(":{t:[1,6,10,11,12,16,21,26,29,32,33],a:[11,12,13,19,21,22,23,24,25,29,31,32,33,34],n:[10,12,13,15,16,19,20,24,25,29,30,34],"(":[3,7,11,16,21,27,33]},"atan(":{a:[11,12,13,19,21,22,23,24,25,29,31,32,33,34],t:[1,6,10,11,12,16,21,26,29,32,33],u:[11,12,13,19,21,22,23,24,25,29,31,32,33,34],n:[10,12,13,15,16,19,20,24,25,29,30,34],"(":[3,7,11,16,21,27,33]},xRt:{x:[2,4,8,12,14],ro:[2,3,4,7,12,17,20,22,26,27,32],"(":[3,7,11,16,21,27,33]},"2x":{ro:[2,3,4,7,12,17,20,22,26,27,32],"(":[3,7,11,16,21,27,33]},"log(":{l:[1,2,7,12,17,22,27,31,32,33],o:[11,12,13,15,19,20,24,25,29,31,32,33],g:[6,7,8,9,10,14,15,19,21,22,23,24,29,31,32,33],"(":[3,7,11,16,21,27,33]},"(tn":{"(":[3,7,11,16,21,27,33],ten:[10,12,13,14,15,17,19,20,22,24,25,27,29,30,32,33,34],"^":[2,6,8,10,14]},"e^(":{e:[11,12,13,15,19,20,21,22,23,25,31,32],"^":[2,6,8,10,14],"(":[3,7,11,16,21,27,33]},"ln(":{l:[1,2,7,12,17,22,27,31,32,33],n:[10,12,13,15,16,19,20,24,25,29,30,34],"(":[3,7,11,16,21,27,33]}};const u=document.querySelectorAll(".flip0"),d=document.querySelectorAll(".flip1"),E=document.querySelectorAll(".screenOff"),S=document.querySelector("#On"),T=document.querySelector("#Second"),f=document.querySelectorAll(".lcdGridSquare"),m=document.querySelector("#onSpan"),g=document.querySelector("#offSpan"),N=document.querySelector("#CLEAR_BUTTON"),O=document.querySelector("#DEGREE_SPAN"),y=document.querySelector("#RADIAN_SPAN"),A=document.querySelector("#DELETE_SPAN"),h=document.querySelector("#INSERT_SPAN"),R=document.querySelector("#UPARROW_BUTTON"),p=document.querySelector("#RIGHTARROW_BUTTON"),v=document.querySelector("#BOTTOMARROW_BUTTON"),I=document.querySelector("#LEFTARROW_BUTTON"),L=document.querySelector("#PI_BUTTON"),P=document.querySelector("#SIN_SPAN"),q=document.querySelector("#ARCSIN_SPAN"),_=document.querySelector("#COSINE_SPAN"),x=document.querySelector("#ARCOS_SPAN"),U=document.querySelector("#TANGENT_SPAN"),C=document.querySelector("#ARCTAN_SPAN"),B=document.querySelector("#EXPONENT_SPAN"),D=document.querySelector("#xROOT_SPAN"),b=document.querySelector("#xNegOne_SPAN"),G=document.querySelector("#EE_SPAN"),k=document.querySelector("#LEFT_PARENTHESES_SPAN"),w=document.querySelector("#PERCENT_SPAN"),F=document.querySelector("#RIGHT_PARENTHESES_SPAN"),M=document.querySelector("#COMMA_SPAN"),$=document.querySelector("#DIVIDE_BUTTON"),W=document.querySelector("#SQUARE_SPAN"),H=document.querySelector("#SQUARE_ROOT_SPAN"),X=document.querySelector("#SEVEN_BUTTON"),j=document.querySelector("#EIGHT_BUTTON"),V=document.querySelector("#NINE_BUTTON"),Q=document.querySelector("#MULTIPLY_BUTTON"),Y=document.querySelector("#LOG_SPAN"),Z=document.querySelector("#TENX_SPAN"),z=document.querySelector("#FOUR_BUTTON"),J=document.querySelector("#FIVE_BUTTON"),K=document.querySelector("#SIX_BUTTON"),ee=document.querySelector("#SUBTRACT_BUTTON"),te=document.querySelector("#NATURAL_LOG_SPAN"),re=document.querySelector("#EX_SPAN"),oe=document.querySelector("#ONE_BUTTON"),ne=document.querySelector("#TWO_BUTTON"),ce=document.querySelector("#THREE_BUTTON"),ie=document.querySelector("#ADDITION_BUTTON"),le=document.querySelector("#ZERO_BUTTON"),ae=document.querySelector("#RADIX_BUTTON"),se=document.querySelector("#NEGATIVE_BUTTON"),ue=document.querySelector("#ENTER_BUTTON"),de=document.querySelector("#secondScreenText"),Ee=document.querySelector("#degreeScreenText"),Se=document.querySelector("#radianScreenText"),Te=document.querySelector("#forwardSlash");var fe=document.querySelector(".TURNON");const me={isOn:!1,gridDefined:!1,angleMode:!1};let ge,Ne=0,Oe=0;function ye(){if(me.isOn){clearInterval(ge);let e=document.getElementById(`gridspace${String(Ne+1).padStart(2,"0")}`);if(!e)return void console.error(`No gridSpace found for cursorPosition ${Ne}`);let t=Array.from(e.children);ge=setInterval((()=>{t.forEach((e=>{e.classList.toggle("activeCursor")}))}),500)}}let Ae,he=!1;function Re(e,t){if(he)return;he=!0;let r=document.getElementById(`gridspace${String(Ne+1).padStart(2,"0")}`);for(r&&Array.from(r.children).forEach((e=>{e.classList.remove("activeCursor")})),clearInterval(ge);t>=11;)t--,Oe+t<l.getCharacterLength()&&Oe++;for(;t<0&&Oe>0;)t++,Oe--;t=Math.max(0,t),t=Math.min(l.getCharacterLength(),t),Ne=t,clearTimeout(Ae),me.isOn?(ye(),Ae=setTimeout((()=>{pe(l.string),he=!1}),10)):(Le(),he=!1)}function pe(e){console.log(`Updating grids with expression array ${e}`),e.flatMap((e=>(console.log(`Processing token: ${e}`),s[e]?Object.keys(s[e]).map((t=>(console.log(`Processing key: ${t}`),{token:e,key:t}))):(console.log(`No multiple for token: ${e}`),{token:e,key:e})))).slice(Oe,Oe+11).forEach(((e,t)=>{console.log(`Processing item at index ${t}:`,e);const r=s[e.token]?s:a;!function(e,t,r,o){const n=document.getElementById(`gridspace${r.toString().padStart(2,"0")}`);if(!n)return void console.error(`No container found with ID gridspace${r}`);const c=Array.from(n.children);c.forEach((e=>e.classList.remove("activatedPixel")));const i=o[e];if(!i)return void console.error(`No display data found for token '${e}'`);const l=Array.isArray(i[t])?i[t]:i;Array.isArray(l)?l.forEach((e=>{e<c.length&&(c[e].classList.add("activatedPixel"),console.log(`Added 'activatedPixel' to child at index ${e}`))})):console.error(`No array of indices found for token '${e}', key '${t}'`)}(e.token,e.key,t+1,r)})),console.log("Drawing cursor..."),ye()}let ve,Ie=!1;function Le(){if(Ie)return;Ie=!0,clearInterval(ge);let e=document.getElementById(`gridspace${String(Ne+1).padStart(2,"0")}`);e&&Array.from(e.children).forEach((e=>{e.classList.remove("activeCursor")})),ge=null,pe(l.string),Ne=0,ye(),ve=setTimeout((()=>{Oe=0,Ie=!1}),100)}function Pe(){clearTimeout(ve)}function qe(e){return function(t){me.isOn&&(l.push(String(e)),pe(l.string),Re(0,l.getGridCountForToken(String(e))))}}function _e(e){return function(t){me.isOn&&(l.push(e),pe(l.string),Re(0,l.getGridCountForToken(e)))}}function xe(e){l.string=[],S.classList.add("activatedBLUEOW"),E.forEach((e=>e.classList.add("on"))),me.isOn=!0,Se.classList.add("activeScreenText"),Te.classList.add("activeScreenText"),function(e){for(let e=1;e<=22;e++){let t="gridspace"+(e>9?e:"0"+e);Array.from(document.querySelector("#"+t).children).forEach((e=>{e.className="onGrid"}))}}(),Le()}function Ue(e){for(let t=1;t<=22;t++){let r="gridspace"+(t>9?t:"0"+t);Array.from(document.querySelector("#"+r).children).forEach((t=>{t.classList.remove(e)}))}}N.addEventListener("mousedown",Pe),g.addEventListener("mousedown",Pe);const Ce=["sin(","cos(","tan(","asin(","acos(","atan("];function Be(e,t,r){let o=e[t];if(Ce.some((e=>o.includes(e)))){if(!(t<e.length-1))throw new Error("Trigonometric function at end of expression without argument");e[t+1]=function(e,t){let r=parseFloat(e);return isNaN(r)?e:String(r*t.pi/180)}(e[t+1],r)}else if(o.includes("(")&&o.includes(")")){let n=o.indexOf("("),c=o.lastIndexOf(")");if(-1!==n&&-1!==c){let i=o.slice(n+1,c).split(" ");e[t]=o.slice(0,n+1)+De(i,r).join(" ")+o.slice(c)}}return e}function De(e,t){for(let r=0;r<e.length;r++)e=Be(e,r,t);return e}const be=qe(0),Ge=qe(1),ke=qe(2),we=qe(3),Fe=qe(4),Me=qe(5),$e=qe(6),We=qe(7),He=qe(8),Xe=qe(9),je=_e("p"),Ve=_e("sin("),Qe=_e("asin("),Ye=_e("cos("),Ze=_e("acos("),ze=_e("tan("),Je=_e("atan("),Ke=_e("^"),et=_e("xRt"),tt=_e("!"),rt=_e("(tn"),ot=_e("("),nt=_e(")"),ct=_e("/"),it=_e("@"),lt=_e("2x"),at=_e("*"),st=_e("S"),ut=_e("+"),dt=_e("log("),Et=_e("(tn"),St=_e("e^("),Tt=_e("ln("),ft=_e("."),mt=_e("-"),gt=_e("%"),Nt=(l.string,async function(e){let t=l.string;console.log(t);let r={p:"(pi)",E:"*10^","!":"^-1",S:"-","@":"^2",xRt:"nthRoot(","(tn":"(10^"};var o=t.map((e=>{let t=e;for(let e in r)t.includes(e)&&(t=t.replace(new RegExp(e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),"g"),r[e]));return t}));const c=(await Promise.all([n.e(786),n.e(180)]).then(n.bind(n,770))).default;!0===me.angleMode&&(o=De(o,c)),console.log(o);var i=o.join(""),s=c.evaluate(i);console.log(s),function(e){let t=document.querySelector("html");if("object"==typeof e){console.log("DomainErr.");let e="DOMAIN.err.".split("");for(let t=0;t<e.length;t++){const r=t+12,o=document.getElementById(`gridspace${String(r).padStart(2,"0")}`);if(o){const r=e[t],n=Array.from(o.children);n.forEach((e=>e.classList.remove("activatedPixel")));const c=a[r];c&&(Array.isArray(c)?c:[c]).forEach((e=>{e<n.length&&(n[e].classList.add("activatedPixel"),console.log(`Added 'activatedPixel' to child at index ${e}`))}))}}}else if("number"==typeof e)if("Infinity"==e||"-Infinity"==e||NaN==e)screams.play(),t.remove();else{console.log("Result: ",e),console.log("Type: ",typeof e);const t=String(e).split("");console.log(t);for(let e=0;e<t.length;e++){const r=e+12,o=document.getElementById(`gridspace${String(r).padStart(2,"0")}`);if(o){const r=t[e],n=Array.from(o.children);n.forEach((e=>e.classList.remove("activatedPixel")));const c=a[r];c&&(Array.isArray(c)?c:[c]).forEach((e=>{e<n.length&&(n[e].classList.add("activatedPixel"),console.log(`Added 'activatedPixel' to child at index ${e}`))}))}}}}(s)});i(m,xe),i(g,(function(e){fe.remove(),S.classList.remove("activatedBLUEOW"),E.forEach((e=>e.classList.remove("on"))),u.forEach((e=>e.classList.remove("flipF"))),d.forEach((e=>e.classList.remove("flipB"))),T.classList.remove("activatedBOW"),de.classList.remove("activeScreenText"),Se.classList.remove("activeScreenText"),Ee.classList.remove("activeScreenText"),Te.classList.remove("activeScreenText"),me.angleMode=!1,me.isOn=!1,l.string=[],Ue("activatedPixel"),Ue("onGrid"),Le()})),i(T,(function(e){console.log(e),me.isOn&&(u.forEach((e=>e.classList.toggle("flipF"))),d.forEach((e=>e.classList.toggle("flipB"))),T.classList.toggle("activatedBOW"),de.classList.toggle("activeScreenText"))})),console.log(c.WOFF);const Ot={CLEAR:function(e){me.isOn&&(l.clear(),Ue("activatedPixel"),Le())},ZERO:be,ONE:Ge,TWO:ke,THREE:we,FOUR:Fe,FIVE:Me,SIX:$e,SEVEN:We,EIGHT:He,NINE:Xe,PI:je,SIN:Ve,ARCSIN:Qe,COS:Ye,ARCOS:Ze,TAN:ze,ARCTAN:Je,EXPONENT:Ke,xROOT:et,xNEGONE:tt,EE:rt,LEFTPARENTHESES:ot,RIGHTPARENTHESES:nt,PERCENT_SIGN:gt,DIVIDE:ct,SQUARE:it,SQUAREROOT:lt,MULTIPLY:at,LOG:dt,TENX:Et,SUBTRACT:st,LN:Tt,EX:St,ADDITION:ut,RADIX:ft,NEGATIVE:mt,ENTER:Nt,DEGREE:function(){me.isOn&&(Se.classList.remove("activeScreenText"),Ee.classList.add("activeScreenText"),me.angleMode=!0,console.log(me.angleMode))},RADIAN:function(){me.isOn&&(Se.classList.add("activeScreenText"),Ee.classList.remove("activeScreenText"),me.angleMode=!1,console.log(me.angleMode))},RIGHTARROW:function(){console.log("Right arrow clicked - cursor position:",Ne),Re(0,Ne+1)},LEFTARROW:function(){console.log("Left arrow clicked - cursor position:",Ne),Re(0,Ne-1)},DELETE:function(){Ne<0||Ne>=l.string.length||(l.string.splice(Ne,1),Ne=Math.max(0,Ne-1),pe(l.string),Re(0,Ne))}};for(const e in Ot)i(c[e],Ot[e]);console.log(l.string.length),document.addEventListener("DOMContentLoaded",xe)})();