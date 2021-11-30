#!/usr/bin/env node
var Qe=Object.create;var T=Object.defineProperty,e0=Object.defineProperties,t0=Object.getOwnPropertyDescriptor,n0=Object.getOwnPropertyDescriptors,r0=Object.getOwnPropertyNames,ne=Object.getOwnPropertySymbols,o0=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty,s0=Object.prototype.propertyIsEnumerable;var oe=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,se=(e,t)=>{for(var n in t||(t={}))re.call(t,n)&&oe(e,n,t[n]);if(ne)for(var n of ne(t))s0.call(t,n)&&oe(e,n,t[n]);return e},ae=(e,t)=>e0(e,n0(t)),a0=e=>T(e,"__esModule",{value:!0});var v=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var l0=(e,t,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of r0(t))!re.call(e,r)&&r!=="default"&&T(e,r,{get:()=>t[r],enumerable:!(n=t0(t,r))||n.enumerable});return e},le=e=>l0(a0(T(e!=null?Qe(o0(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var ie=v((q0,ce)=>{"use strict";ce.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}});var q=v((G0,fe)=>{var S=ie(),ue={};for(let e of Object.keys(S))ue[S[e]]=e;var i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};fe.exports=i;for(let e of Object.keys(i)){if(!("channels"in i[e]))throw new Error("missing channels property: "+e);if(!("labels"in i[e]))throw new Error("missing channel labels property: "+e);if(i[e].labels.length!==i[e].channels)throw new Error("channel and label counts mismatch: "+e);let{channels:t,labels:n}=i[e];delete i[e].channels,delete i[e].labels,Object.defineProperty(i[e],"channels",{value:t}),Object.defineProperty(i[e],"labels",{value:n})}i.rgb.hsl=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),s=Math.max(t,n,r),a=s-o,c,l;s===o?c=0:t===s?c=(n-r)/a:n===s?c=2+(r-t)/a:r===s&&(c=4+(t-n)/a),c=Math.min(c*60,360),c<0&&(c+=360);let u=(o+s)/2;return s===o?l=0:u<=.5?l=a/(s+o):l=a/(2-s-o),[c,l*100,u*100]};i.rgb.hsv=function(e){let t,n,r,o,s,a=e[0]/255,c=e[1]/255,l=e[2]/255,u=Math.max(a,c,l),h=u-Math.min(a,c,l),b=function(Je){return(u-Je)/6/h+1/2};return h===0?(o=0,s=0):(s=h/u,t=b(a),n=b(c),r=b(l),a===u?o=r-n:c===u?o=1/3+t-r:l===u&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[o*360,s*100,u*100]};i.rgb.hwb=function(e){let t=e[0],n=e[1],r=e[2],o=i.rgb.hsl(e)[0],s=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,s*100,r*100]};i.rgb.cmyk=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r),s=(1-t-o)/(1-o)||0,a=(1-n-o)/(1-o)||0,c=(1-r-o)/(1-o)||0;return[s*100,a*100,c*100,o*100]};function c0(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}i.rgb.keyword=function(e){let t=ue[e];if(t)return t;let n=1/0,r;for(let o of Object.keys(S)){let s=S[o],a=c0(e,s);a<n&&(n=a,r=o)}return r};i.keyword.rgb=function(e){return S[e]};i.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;let o=t*.4124+n*.3576+r*.1805,s=t*.2126+n*.7152+r*.0722,a=t*.0193+n*.1192+r*.9505;return[o*100,s*100,a*100]};i.rgb.lab=function(e){let t=i.rgb.xyz(e),n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;let s=116*r-16,a=500*(n-r),c=200*(r-o);return[s,a,c]};i.hsl.rgb=function(e){let t=e[0]/360,n=e[1]/100,r=e[2]/100,o,s,a;if(n===0)return a=r*255,[a,a,a];r<.5?o=r*(1+n):o=r+n-r*n;let c=2*r-o,l=[0,0,0];for(let u=0;u<3;u++)s=t+1/3*-(u-1),s<0&&s++,s>1&&s--,6*s<1?a=c+(o-c)*6*s:2*s<1?a=o:3*s<2?a=c+(o-c)*(2/3-s)*6:a=c,l[u]=a*255;return l};i.hsl.hsv=function(e){let t=e[0],n=e[1]/100,r=e[2]/100,o=n,s=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=s<=1?s:2-s;let a=(r+n)/2,c=r===0?2*o/(s+o):2*n/(r+n);return[t,c*100,a*100]};i.hsv.rgb=function(e){let t=e[0]/60,n=e[1]/100,r=e[2]/100,o=Math.floor(t)%6,s=t-Math.floor(t),a=255*r*(1-n),c=255*r*(1-n*s),l=255*r*(1-n*(1-s));switch(r*=255,o){case 0:return[r,l,a];case 1:return[c,r,a];case 2:return[a,r,l];case 3:return[a,c,r];case 4:return[l,a,r];case 5:return[r,a,c]}};i.hsv.hsl=function(e){let t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01),s,a;a=(2-n)*r;let c=(2-n)*o;return s=n*o,s/=c<=1?c:2-c,s=s||0,a/=2,[t,s*100,a*100]};i.hwb.rgb=function(e){let t=e[0]/360,n=e[1]/100,r=e[2]/100,o=n+r,s;o>1&&(n/=o,r/=o);let a=Math.floor(6*t),c=1-r;s=6*t-a,(a&1)!=0&&(s=1-s);let l=n+s*(c-n),u,h,b;switch(a){default:case 6:case 0:u=c,h=l,b=n;break;case 1:u=l,h=c,b=n;break;case 2:u=n,h=c,b=l;break;case 3:u=n,h=l,b=c;break;case 4:u=l,h=n,b=c;break;case 5:u=c,h=n,b=l;break}return[u*255,h*255,b*255]};i.cmyk.rgb=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100,s=1-Math.min(1,t*(1-o)+o),a=1-Math.min(1,n*(1-o)+o),c=1-Math.min(1,r*(1-o)+o);return[s*255,a*255,c*255]};i.xyz.rgb=function(e){let t=e[0]/100,n=e[1]/100,r=e[2]/100,o,s,a;return o=t*3.2406+n*-1.5372+r*-.4986,s=t*-.9689+n*1.8758+r*.0415,a=t*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,o=Math.min(Math.max(0,o),1),s=Math.min(Math.max(0,s),1),a=Math.min(Math.max(0,a),1),[o*255,s*255,a*255]};i.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;let o=116*n-16,s=500*(t-n),a=200*(n-r);return[o,s,a]};i.lab.xyz=function(e){let t=e[0],n=e[1],r=e[2],o,s,a;s=(t+16)/116,o=n/500+s,a=s-r/200;let c=s**3,l=o**3,u=a**3;return s=c>.008856?c:(s-16/116)/7.787,o=l>.008856?l:(o-16/116)/7.787,a=u>.008856?u:(a-16/116)/7.787,o*=95.047,s*=100,a*=108.883,[o,s,a]};i.lab.lch=function(e){let t=e[0],n=e[1],r=e[2],o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);let a=Math.sqrt(n*n+r*r);return[t,a,o]};i.lch.lab=function(e){let t=e[0],n=e[1],o=e[2]/360*2*Math.PI,s=n*Math.cos(o),a=n*Math.sin(o);return[t,s,a]};i.rgb.ansi16=function(e,t=null){let[n,r,o]=e,s=t===null?i.rgb.hsv(e)[2]:t;if(s=Math.round(s/50),s===0)return 30;let a=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return s===2&&(a+=60),a};i.hsv.ansi16=function(e){return i.rgb.ansi16(i.hsv.rgb(e),e[2])};i.rgb.ansi256=function(e){let t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};i.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];let n=(~~(e>50)+1)*.5,r=(t&1)*n*255,o=(t>>1&1)*n*255,s=(t>>2&1)*n*255;return[r,o,s]};i.ansi256.rgb=function(e){if(e>=232){let s=(e-232)*10+8;return[s,s,s]}e-=16;let t,n=Math.floor(e/36)/5*255,r=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,r,o]};i.rgb.hex=function(e){let n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};i.hex.rgb=function(e){let t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(c=>c+c).join(""));let r=parseInt(n,16),o=r>>16&255,s=r>>8&255,a=r&255;return[o,s,a]};i.rgb.hcg=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),s=Math.min(Math.min(t,n),r),a=o-s,c,l;return a<1?c=s/(1-a):c=0,a<=0?l=0:o===t?l=(n-r)/a%6:o===n?l=2+(r-t)/a:l=4+(t-n)/a,l/=6,l%=1,[l*360,a*100,c*100]};i.hsl.hcg=function(e){let t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n),o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],r*100,o*100]};i.hsv.hcg=function(e){let t=e[1]/100,n=e[2]/100,r=t*n,o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};i.hcg.rgb=function(e){let t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];let o=[0,0,0],s=t%1*6,a=s%1,c=1-a,l=0;switch(Math.floor(s)){case 0:o[0]=1,o[1]=a,o[2]=0;break;case 1:o[0]=c,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=a;break;case 3:o[0]=0,o[1]=c,o[2]=1;break;case 4:o[0]=a,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=c}return l=(1-n)*r,[(n*o[0]+l)*255,(n*o[1]+l)*255,(n*o[2]+l)*255]};i.hcg.hsv=function(e){let t=e[1]/100,n=e[2]/100,r=t+n*(1-t),o=0;return r>0&&(o=t/r),[e[0],o*100,r*100]};i.hcg.hsl=function(e){let t=e[1]/100,r=e[2]/100*(1-t)+.5*t,o=0;return r>0&&r<.5?o=t/(2*r):r>=.5&&r<1&&(o=t/(2*(1-r))),[e[0],o*100,r*100]};i.hcg.hwb=function(e){let t=e[1]/100,n=e[2]/100,r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};i.hwb.hcg=function(e){let t=e[1]/100,n=e[2]/100,r=1-n,o=r-t,s=0;return o<1&&(s=(r-o)/(1-o)),[e[0],o*100,s*100]};i.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};i.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};i.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};i.gray.hsl=function(e){return[0,0,e[0]]};i.gray.hsv=i.gray.hsl;i.gray.hwb=function(e){return[0,100,e[0]]};i.gray.cmyk=function(e){return[0,0,0,e[0]]};i.gray.lab=function(e){return[e[0],0,0]};i.gray.hex=function(e){let t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r};i.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}});var de=v((U0,he)=>{var I=q();function i0(){let e={},t=Object.keys(I);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}function u0(e){let t=i0(),n=[e];for(t[e].distance=0;n.length;){let r=n.pop(),o=Object.keys(I[r]);for(let s=o.length,a=0;a<s;a++){let c=o[a],l=t[c];l.distance===-1&&(l.distance=t[r].distance+1,l.parent=r,n.unshift(c))}}return t}function f0(e,t){return function(n){return t(e(n))}}function h0(e,t){let n=[t[e].parent,e],r=I[t[e].parent][e],o=t[e].parent;for(;t[o].parent;)n.unshift(t[o].parent),r=f0(I[t[o].parent][o],r),o=t[o].parent;return r.conversion=n,r}he.exports=function(e){let t=u0(e),n={},r=Object.keys(t);for(let o=r.length,s=0;s<o;s++){let a=r[s];t[a].parent!==null&&(n[a]=h0(a,t))}return n}});var ge=v((V0,be)=>{var G=q(),d0=de(),O={},b0=Object.keys(G);function g0(e){let t=function(...n){let r=n[0];return r==null?r:(r.length>1&&(n=r),e(n))};return"conversion"in e&&(t.conversion=e.conversion),t}function x0(e){let t=function(...n){let r=n[0];if(r==null)return r;r.length>1&&(n=r);let o=e(n);if(typeof o=="object")for(let s=o.length,a=0;a<s;a++)o[a]=Math.round(o[a]);return o};return"conversion"in e&&(t.conversion=e.conversion),t}b0.forEach(e=>{O[e]={},Object.defineProperty(O[e],"channels",{value:G[e].channels}),Object.defineProperty(O[e],"labels",{value:G[e].labels});let t=d0(e);Object.keys(t).forEach(r=>{let o=t[r];O[e][r]=x0(o),O[e][r].raw=g0(o)})});be.exports=O});var ke=v((H0,ve)=>{"use strict";var xe=(e,t)=>(...n)=>`[${e(...n)+t}m`,pe=(e,t)=>(...n)=>{let r=e(...n);return`[${38+t};5;${r}m`},ye=(e,t)=>(...n)=>{let r=e(...n);return`[${38+t};2;${r[0]};${r[1]};${r[2]}m`},L=e=>e,me=(e,t,n)=>[e,t,n],M=(e,t,n)=>{Object.defineProperty(e,t,{get:()=>{let r=n();return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0}),r},enumerable:!0,configurable:!0})},U,R=(e,t,n,r)=>{U===void 0&&(U=ge());let o=r?10:0,s={};for(let[a,c]of Object.entries(U)){let l=a==="ansi16"?"ansi":a;a===t?s[l]=e(n,o):typeof c=="object"&&(s[l]=e(c[t],o))}return s};function p0(){let e=new Map,t={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};t.color.gray=t.color.blackBright,t.bgColor.bgGray=t.bgColor.bgBlackBright,t.color.grey=t.color.blackBright,t.bgColor.bgGrey=t.bgColor.bgBlackBright;for(let[n,r]of Object.entries(t)){for(let[o,s]of Object.entries(r))t[o]={open:`[${s[0]}m`,close:`[${s[1]}m`},r[o]=t[o],e.set(s[0],s[1]);Object.defineProperty(t,n,{value:r,enumerable:!1})}return Object.defineProperty(t,"codes",{value:e,enumerable:!1}),t.color.close="[39m",t.bgColor.close="[49m",M(t.color,"ansi",()=>R(xe,"ansi16",L,!1)),M(t.color,"ansi256",()=>R(pe,"ansi256",L,!1)),M(t.color,"ansi16m",()=>R(ye,"rgb",me,!1)),M(t.bgColor,"ansi",()=>R(xe,"ansi16",L,!0)),M(t.bgColor,"ansi256",()=>R(pe,"ansi256",L,!0)),M(t.bgColor,"ansi16m",()=>R(ye,"rgb",me,!0)),t}Object.defineProperty(ve,"exports",{enumerable:!0,get:p0})});var Ce=v((z0,we)=>{"use strict";we.exports=(e,t=process.argv)=>{let n=e.startsWith("-")?"":e.length===1?"-":"--",r=t.indexOf(n+e),o=t.indexOf("--");return r!==-1&&(o===-1||r<o)}});var Me=v((W0,Oe)=>{"use strict";var y0=require("os"),Ee=require("tty"),y=Ce(),{env:d}=process,k;y("no-color")||y("no-colors")||y("color=false")||y("color=never")?k=0:(y("color")||y("colors")||y("color=true")||y("color=always"))&&(k=1);"FORCE_COLOR"in d&&(d.FORCE_COLOR==="true"?k=1:d.FORCE_COLOR==="false"?k=0:k=d.FORCE_COLOR.length===0?1:Math.min(parseInt(d.FORCE_COLOR,10),3));function V(e){return e===0?!1:{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function H(e,t){if(k===0)return 0;if(y("color=16m")||y("color=full")||y("color=truecolor"))return 3;if(y("color=256"))return 2;if(e&&!t&&k===void 0)return 0;let n=k||0;if(d.TERM==="dumb")return n;if(process.platform==="win32"){let r=y0.release().split(".");return Number(r[0])>=10&&Number(r[2])>=10586?Number(r[2])>=14931?3:2:1}if("CI"in d)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","GITHUB_ACTIONS","BUILDKITE"].some(r=>r in d)||d.CI_NAME==="codeship"?1:n;if("TEAMCITY_VERSION"in d)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(d.TEAMCITY_VERSION)?1:0;if(d.COLORTERM==="truecolor")return 3;if("TERM_PROGRAM"in d){let r=parseInt((d.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(d.TERM_PROGRAM){case"iTerm.app":return r>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(d.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(d.TERM)||"COLORTERM"in d?1:n}function m0(e){let t=H(e,e&&e.isTTY);return V(t)}Oe.exports={supportsColor:m0,stdout:V(H(!0,Ee.isatty(1))),stderr:V(H(!0,Ee.isatty(2)))}});var Ae=v((K0,Re)=>{"use strict";var v0=(e,t,n)=>{let r=e.indexOf(t);if(r===-1)return e;let o=t.length,s=0,a="";do a+=e.substr(s,r-s)+t+n,s=r+o,r=e.indexOf(t,s);while(r!==-1);return a+=e.substr(s),a},k0=(e,t,n,r)=>{let o=0,s="";do{let a=e[r-1]==="\r";s+=e.substr(o,(a?r-1:r)-o)+t+(a?`\r
`:`
`)+n,o=r+1,r=e.indexOf(`
`,o)}while(r!==-1);return s+=e.substr(o),s};Re.exports={stringReplaceAll:v0,stringEncaseCRLFWithFirstIndex:k0}});var Te=v((X0,je)=>{"use strict";var w0=/(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,Se=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,C0=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,E0=/\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,O0=new Map([["n",`
`],["r","\r"],["t","	"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a","\x07"]]);function _e(e){let t=e[0]==="u",n=e[1]==="{";return t&&!n&&e.length===5||e[0]==="x"&&e.length===3?String.fromCharCode(parseInt(e.slice(1),16)):t&&n?String.fromCodePoint(parseInt(e.slice(2,-1),16)):O0.get(e)||e}function M0(e,t){let n=[],r=t.trim().split(/\s*,\s*/g),o;for(let s of r){let a=Number(s);if(!Number.isNaN(a))n.push(a);else if(o=s.match(C0))n.push(o[2].replace(E0,(c,l,u)=>l?_e(l):u));else throw new Error(`Invalid Chalk template style argument: ${s} (in style '${e}')`)}return n}function R0(e){Se.lastIndex=0;let t=[],n;for(;(n=Se.exec(e))!==null;){let r=n[1];if(n[2]){let o=M0(r,n[2]);t.push([r].concat(o))}else t.push([r])}return t}function Be(e,t){let n={};for(let o of t)for(let s of o.styles)n[s[0]]=o.inverse?null:s.slice(1);let r=e;for(let[o,s]of Object.entries(n))if(!!Array.isArray(s)){if(!(o in r))throw new Error(`Unknown Chalk style: ${o}`);r=s.length>0?r[o](...s):r[o]}return r}je.exports=(e,t)=>{let n=[],r=[],o=[];if(t.replace(w0,(s,a,c,l,u,h)=>{if(a)o.push(_e(a));else if(l){let b=o.join("");o=[],r.push(n.length===0?b:Be(e,n)(b)),n.push({inverse:c,styles:R0(l)})}else if(u){if(n.length===0)throw new Error("Found extraneous } in Chalk template literal");r.push(Be(e,n)(o.join(""))),o=[],n.pop()}else o.push(h)}),r.push(o.join("")),n.length>0){let s=`Chalk template literal is missing ${n.length} closing bracket${n.length===1?"":"s"} (\`}\`)`;throw new Error(s)}return r.join("")}});var Z=v((Z0,Ye)=>{"use strict";var _=ke(),{stdout:z,stderr:W}=Me(),{stringReplaceAll:A0,stringEncaseCRLFWithFirstIndex:S0}=Ae(),{isArray:N}=Array,Ie=["ansi","ansi","ansi256","ansi16m"],A=Object.create(null),_0=(e,t={})=>{if(t.level&&!(Number.isInteger(t.level)&&t.level>=0&&t.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");let n=z?z.level:0;e.level=t.level===void 0?n:t.level},Le=class{constructor(t){return Ne(t)}},Ne=e=>{let t={};return _0(t,e),t.template=(...n)=>De(t.template,...n),Object.setPrototypeOf(t,F.prototype),Object.setPrototypeOf(t.template,t),t.template.constructor=()=>{throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.")},t.template.Instance=Le,t.template};function F(e){return Ne(e)}for(let[e,t]of Object.entries(_))A[e]={get(){let n=P(this,K(t.open,t.close,this._styler),this._isEmpty);return Object.defineProperty(this,e,{value:n}),n}};A.visible={get(){let e=P(this,this._styler,!0);return Object.defineProperty(this,"visible",{value:e}),e}};var Fe=["rgb","hex","keyword","hsl","hsv","hwb","ansi","ansi256"];for(let e of Fe)A[e]={get(){let{level:t}=this;return function(...n){let r=K(_.color[Ie[t]][e](...n),_.color.close,this._styler);return P(this,r,this._isEmpty)}}};for(let e of Fe){let t="bg"+e[0].toUpperCase()+e.slice(1);A[t]={get(){let{level:n}=this;return function(...r){let o=K(_.bgColor[Ie[n]][e](...r),_.bgColor.close,this._styler);return P(this,o,this._isEmpty)}}}}var B0=Object.defineProperties(()=>{},ae(se({},A),{level:{enumerable:!0,get(){return this._generator.level},set(e){this._generator.level=e}}})),K=(e,t,n)=>{let r,o;return n===void 0?(r=e,o=t):(r=n.openAll+e,o=t+n.closeAll),{open:e,close:t,openAll:r,closeAll:o,parent:n}},P=(e,t,n)=>{let r=(...o)=>N(o[0])&&N(o[0].raw)?Pe(r,De(r,...o)):Pe(r,o.length===1?""+o[0]:o.join(" "));return Object.setPrototypeOf(r,B0),r._generator=e,r._styler=t,r._isEmpty=n,r},Pe=(e,t)=>{if(e.level<=0||!t)return e._isEmpty?"":t;let n=e._styler;if(n===void 0)return t;let{openAll:r,closeAll:o}=n;if(t.indexOf("")!==-1)for(;n!==void 0;)t=A0(t,n.close,n.open),n=n.parent;let s=t.indexOf(`
`);return s!==-1&&(t=S0(t,o,r,s)),r+t+o},X,De=(e,...t)=>{let[n]=t;if(!N(n)||!N(n.raw))return t.join(" ");let r=t.slice(1),o=[n.raw[0]];for(let s=1;s<n.length;s++)o.push(String(r[s-1]).replace(/[{}\\]/g,"\\$&"),String(n.raw[s]));return X===void 0&&(X=Te()),X(e,o.join(""))};Object.defineProperties(F.prototype,A);var D=F();D.supportsColor=z;D.stderr=F({level:W?W.level:0});D.stderr.supportsColor=W;Ye.exports=D});var E=le(Z());var f=le(Z());var Y=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,92821,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,23232,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,37600,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],$e=["\u6B63","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u5341","\u51AC","\u814A"],m={0:"\u521D",1:"\u4E00",2:"\u4E8C",3:"\u4E09",4:"\u56DB",5:"\u4E94",6:"\u516D",7:"\u4E03",8:"\u516B",9:"\u4E5D",10:"\u5341",20:"\u5EFF"},qe=["\u9F20","\u725B","\u864E","\u5154","\u9F99","\u86C7","\u9A6C","\u7F8A","\u7334","\u9E21","\u72D7","\u732A"],Ge=["\u7532","\u4E59","\u4E19","\u4E01","\u620A","\u5DF1","\u5E9A","\u8F9B","\u58EC","\u7678"],Ue=["\u5B50","\u4E11","\u5BC5","\u536F","\u8FB0","\u5DF3","\u5348","\u672A","\u7533","\u9149","\u620C","\u4EA5"];var J={"1.1":"\u6625\u8282","1.15":"\u5143\u5BB5\u8282","2.2":"\u9F99\u62AC\u5934","3.3":"\u4E0A\u5DF3\u8282","5.5":"\u7AEF\u5348\u8282","7.7":"\u4E03\u5915\u8282","7.15":"\u4E2D\u5143\u8282","8.15":"\u4E2D\u79CB\u8282","9.9":"\u91CD\u9633\u8282","10.1":"\u5BD2\u8863\u8282","10.15":"\u4E0B\u5143\u8282","12.8":"\u814A\u516B\u8282","12.23":"\u5317\u65B9\u5C0F\u5E74","12.24":"\u5357\u65B9\u5C0F\u5E74","12.30":"\u9664\u5915"},Ve={"1.1":"\u5143\u65E6\u8282","2.14":"\u60C5\u4EBA\u8282","3.8":"\u5987\u5973\u8282","3.12":"\u690D\u6811\u8282","4.1":"\u611A\u4EBA\u8282","5.1":"\u52B3\u52A8\u8282","5.4":"\u9752\u5E74\u8282","5.12":"\u62A4\u58EB\u8282","6.1":"\u513F\u7AE5\u8282","7.1":"\u5EFA\u515A\u8282","8.1":"\u5EFA\u519B\u8282","9.10":"\u6559\u5E08\u8282","10.1":"\u56FD\u5E86\u8282","12.24":"\u5E73\u5B89\u591C","12.25":"\u5723\u8BDE\u8282"};function $(e=1901,t=0,n=1){var r=Date.UTC(1900,0,31),o=Date.UTC(e,t,n),s=(o-r)/(24*60*60*1e3)+1,a,c,l={short:""};if(e<1901||e>2100)return l;for(let u=1900;u<=2100;u++){let h=j0(u);if(s-=h,s<=0){l.year=u,s+=h;break}}a=He(l.year),c=Q(l.year);for(let u=0;u<a.length;u++)if(s-=a[u],s<=0){l.month=u,l.day=s+a[u],c>0&&u>=c&&(l.leap=u===c,l.month-=1);break}return l.festival=Ve[`${t+1}.${n}`],l.leap||(l.month===11&&l.day===a.pop()?l.festival=J["12.30"]:l.festival=J[`${l.month+1}.${l.day}`]||l.festival),l.yearCN=ee(l.year),l.monthCN=(l.leap>0?"\u95F0":"")+$e[l.month]+"\u6708",l.day<11?l.dayCN=m[0]+m[l.day]:l.day<20?l.dayCN=m[10]+m[l.day-10]:l.day===20?l.dayCN=m[2]+m[10]:l.day<30?l.dayCN=m[20]+m[l.day-20]:l.day===30&&(l.dayCN=m[3]+m[10]),l.short=l.festival?l.festival:l.day===1?l.monthCN:l.dayCN,l}function j0(e){var t=He(e);return t.reduce((n,r)=>n+=r,0)}function Q(e){var t=Y[e-1900];return t&15}function T0(e){var t=Y[e-1900],n=Q(e);return n>0?t&983040?30:29:0}function He(e){var t=Y[e-1900],n=Q(e),r=T0(e),o=[];for(let s=32768;s>8;s>>=1)o.push(t&s?30:29);return n>0&&o.splice(n,0,r),o}function ee(e){var t=(e-3)%10,n=(e-3)%12;return t=t===0?10:t,n=n===0?12:n,Ge[t-1]+Ue[n-1]+qe[(e-4)%12]+"\u5E74"}var I0=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"].map((e,t)=>(e="\u661F\u671F"+e,(t===0||t===6)&&(e=f.default.red(e)),"  "+e+"  "+f.default.grey("|"))),B=f.default.grey("|"),nt=f.default.grey("|"+(" ".repeat(10)+"|").repeat(7));function ze(e="",t=" "){return f.default.grey(e+(t.repeat(10)+"|").repeat(7))}function We(){var e=new Date;return[e.getFullYear(),e.getMonth()]}function Ke(e,t){return new Date(e,t+1,0).getDate()}function Xe(e,t,n){return new Date(e,t,n||1).getDay()}function L0({year:e,month:t,day:n},r){return r.year===e&&r.month===t&&r.day===n}function N0(){var e=new Date;return{year:e.getFullYear(),month:e.getMonth(),day:e.getDate()}}function F0(e,t){var n=Ke(e,t-1),r=Ke(e,t),o=1-Xe(e,t),s=0,a=N0(),c=[];for(let l=o;l<=r;l++){let u={day:l<1?n- -l:(l+"").padStart(2,"0")};if(l>0){let h=Xe(e,t,l),b=$(e,t,l);u.weekend=h===0||h===6,u.picked=!!L0({year:e,month:t,day:l},a),u.lunar=b.short,u.highlight=!!b.festival}else u.grey=1,u.lunar=$(e,t-1,n+l).short;c.push(u)}s=c.length%7,s=s>0?7-s:0;for(let l=1;l<=s;l++)c.push({day:(l+"").padStart(2,"0"),lunar:$(e,t+1,l).short,grey:1});return c}function P0(e,t){var n=`${e}\u5E74${t+1}\u6708${" ".repeat(10)}${ee(e,t)}`;n=f.default.grey("| ")+f.default.cyan(n)+" ".repeat(75-n.length-2)+f.default.grey("|"),console.log(f.default.grey(" "+"_".repeat(76))),console.log(f.default.grey("|"+" ".repeat(76)+"|")),console.log(n),console.log(f.default.grey("|"+"_".repeat(76)+"|")),console.log(ze("|")),console.log(f.default.grey("|")+I0.join("")),console.log(ze("|","_"))}function D0(e,t){var n=F0(e,t),r=0;for(let o=0;o<3*Math.ceil(n.length/7)+1;o++){let s="";for(let a=0;a<7;a++){let c=n[r+a];if(!c)break;switch(a===0&&(s+=B),o%3){case 0:o===0?s+=f.default.grey(" ".repeat(10)+"|"):(s+=f.default.grey("-".repeat(a===6?10:11)+(a===6?"|":"")),a===6&&(r+=7));break;case 1:c.picked?s+=f.default.bgRed.whiteBright.bold(" ".repeat(4)+c.day+" ".repeat(4))+B:(c.grey?c.day=f.default.grey(c.day):c.weekend?c.day=f.default.redBright.bold(c.day):c.day=f.default.whiteBright.bold(c.day),s+=" ".repeat(4)+c.day+" ".repeat(4)+B);break;case 2:if(c.picked)s+=f.default.bgRed.white.bold(" ".repeat(3)+c.lunar+" ".repeat(3))+B;else{let l=5;c.lunar&&(l=(10-c.lunar.length*2)/2,c.lunar=c.highlight?f.default.cyan.dim(c.lunar):f.default.grey(c.lunar)),s+=" ".repeat(l)+c.lunar+" ".repeat(l)+B}break}}console.log(s)}console.log("")}function C(e,t){P0(e,t),D0(e,t)}var Ze="1.0.0",w=process.argv.slice(2),j=w.shift(),[p,g]=We();function te(e){for(let t=0;t<12;t++)C(e,t)}function x(...e){e[0]=e[0].padEnd(20," "),e.length>1&&e.splice(1,0,"   -   "),console.log.apply(null,e)}function Y0(){x("=".repeat(64)),x(`\u7EC8\u7AEF\u7248\u4E07\u5E74\u5386                    v${Ze},    \u4F5C\u8005: \u5B87\u5929`),x("=".repeat(64)),x("\u7528\u6CD5: cal [command] args..."),x("Commands:"),x("  -y {year}","\u6253\u5370\u6307\u5B9A\u5E74\u4EFD\u7684\u65E5\u5386"),x("  -m","\u6253\u5370\u6307\u5B9A\u6708\u4EFD\u7684\u65E5\u5386"),x("  -h","\u67E5\u770B\u5E2E\u52A9\u6587\u6863"),x("  -v",`\u67E5\u770B\u7A0B\u5E8F\u7684\u7248\u672C
`),x("\u793A\u4F8B: "),x("  cal      "+E.default.grey("# \u4E0D\u5E26\u53C2\u6570\u6253\u5370\u5F53\u524D\u5E74\u6708")),x("  cal -y      "+E.default.grey("# -y \u4E0D\u63A5\u53C2\u6570, \u6253\u5370\u5F53\u524D\u5E74\u7684\u6240\u6709\u6708\u4EFD")),x("  cal -y 2000      "+E.default.grey("# \u6253\u5370\u6307\u5B9A\u5E74\u4EFD\u7684\u6240\u6709\u6708\u4EFD")),x("  cal -y 2021 5      "+E.default.grey("# \u6253\u5370\u6307\u5B9A\u5E74\u4EFD, \u6307\u5B9A\u6708\u4EFD")),x("  cal -y 2000 -m 3      "+E.default.grey("# \u540C\u4E0A")),x("  cal -m 5      "+E.default.grey("# \u6253\u5370\u5F53\u524D\u5E74\u4EFD\u7684 \u6307\u5B9A\u6708\u4EFD")),process.exit()}switch(j){case"-y":switch(w.length){case 0:te(p);break;case 1:case 2:p=+w.shift(),g=+w.shift(),p===p?g<13&&g>0?C(p,g-1):te(p):console.log("-y \u53C2\u6570\u5F02\u5E38");break;case 3:j=w.shift(),g=+w.shift(),j==="-m"&&g<13&&g>0?C(p,g-1):console.log("-m \u53C2\u6570\u5F02\u5E38");break;default:console.log("-y \u53C2\u6570\u5F02\u5E38");break}break;case"-m":g=+w.shift(),g<13&&g>0?C(p,g-1):console.log("-m \u53C2\u6570\u5F02\u5E38");break;case"-v":x(Ze);break;case"-h":Y0();break;default:j?(p=+j,g=+w.shift(),p===p?g<13&&g>0?C(p,g-1):te(p):console.log("\u53C2\u6570\u5F02\u5E38")):C(p,g);break}process.exit();
