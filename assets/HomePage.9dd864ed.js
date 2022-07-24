var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import{d as s,_ as c,a as u,o as l,c as f,b as d,n as p,u as h,t as v,r as m,w as g,F as y,e as b,f as E,g as w,h as O,i as R,j as _,k as S,l as j,m as A,p as C,q as x,s as T,v as N,S as P}from"./app.94a28a89.js";var k,D={exports:{}},U=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},B=U,L=Object.prototype.toString,I=(k=Object.create(null),function(e){var t=L.call(e);return k[t]||(k[t]=t.slice(8,-1).toLowerCase())});function F(e){return e=e.toLowerCase(),function(t){return I(t)===e}}function q(e){return Array.isArray(e)}function $(e){return void 0===e}var H=F("ArrayBuffer");function M(e){return null!==e&&"object"==typeof e}function z(e){if("object"!==I(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var J=F("Date"),W=F("File"),V=F("Blob"),X=F("FileList");function K(e){return"[object Function]"===L.call(e)}var Q=F("URLSearchParams");function G(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),q(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var Y,Z=(Y="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return Y&&e instanceof Y}),ee={isArray:q,isArrayBuffer:H,isBuffer:function(e){return null!==e&&!$(e)&&null!==e.constructor&&!$(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||L.call(e)===t||K(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&H(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:M,isPlainObject:z,isUndefined:$,isDate:J,isFile:W,isBlob:V,isFunction:K,isStream:function(e){return M(e)&&K(e.pipe)},isURLSearchParams:Q,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:G,merge:function e(){var t={};function n(n,r){z(t[r])&&z(n)?t[r]=e(t[r],n):z(n)?t[r]=e({},n):q(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)G(arguments[r],n);return t},extend:function(e,t,n){return G(t,(function(t,r){e[r]=n&&"function"==typeof t?B(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,o,i,a={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)a[i=r[o]]||(t[i]=e[i],a[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:I,kindOfTest:F,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if($(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:Z,isFileList:X},te=ee;function ne(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var re=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(te.isURLSearchParams(t))r=t.toString();else{var o=[];te.forEach(t,(function(e,t){null!=e&&(te.isArray(e)?t+="[]":e=[e],te.forEach(e,(function(e){te.isDate(e)?e=e.toISOString():te.isObject(e)&&(e=JSON.stringify(e)),o.push(ne(t)+"="+ne(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e},oe=ee;function ie(){this.handlers=[]}ie.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},ie.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},ie.prototype.forEach=function(e){oe.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var ae=ie,se=ee,ce=ee;function ue(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ce.inherits(ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var le=ue.prototype,fe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){fe[e]={value:e}})),Object.defineProperties(ue,fe),Object.defineProperty(le,"isAxiosError",{value:!0}),ue.from=function(e,t,n,r,o,i){var a=Object.create(le);return ce.toFlatObject(e,a,(function(e){return e!==Error.prototype})),ue.call(a,e.message,t,n,r,o),a.name=e.name,i&&Object.assign(a,i),a};var de=ue,pe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},he=ee;var ve=function(e,t){t=t||new FormData;var n=[];function r(e){return null===e?"":he.isDate(e)?e.toISOString():he.isArrayBuffer(e)||he.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(o,i){if(he.isPlainObject(o)||he.isArray(o)){if(-1!==n.indexOf(o))throw Error("Circular reference detected in "+i);n.push(o),he.forEach(o,(function(n,o){if(!he.isUndefined(n)){var a,s=i?i+"."+o:o;if(n&&!i&&"object"==typeof n)if(he.endsWith(o,"{}"))n=JSON.stringify(n);else if(he.endsWith(o,"[]")&&(a=he.toArray(n)))return void a.forEach((function(e){!he.isUndefined(e)&&t.append(s,r(e))}));e(n,s)}})),n.pop()}else t.append(i,r(o))}(e),t},me=de,ge=ee,ye=ge.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),ge.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),ge.isString(r)&&a.push("path="+r),ge.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},be=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Ee=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},we=function(e,t){return e&&!be(t)?Ee(e,t):t},Oe=ee,Re=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],_e=ee,Se=_e.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=_e.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},je=de;function Ae(e){je.call(this,null==e?"canceled":e,je.ERR_CANCELED),this.name="CanceledError"}ee.inherits(Ae,je,{__CANCEL__:!0});var Ce=Ae,xe=ee,Te=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new me("Request failed with status code "+n.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)},Ne=ye,Pe=re,ke=we,De=function(e){var t,n,r,o={};return e?(Oe.forEach(e.split("\n"),(function(e){if(r=e.indexOf(":"),t=Oe.trim(e.substr(0,r)).toLowerCase(),n=Oe.trim(e.substr(r+1)),t){if(o[t]&&Re.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}})),o):o},Ue=Se,Be=pe,Le=de,Ie=Ce,Fe=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},qe=function(e){return new Promise((function(t,n){var r,o=e.data,i=e.headers,a=e.responseType;function s(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}xe.isFormData(o)&&xe.isStandardBrowserEnv()&&delete i["Content-Type"];var c=new XMLHttpRequest;if(e.auth){var u=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(u+":"+l)}var f=ke(e.baseURL,e.url);function d(){if(c){var r="getAllResponseHeaders"in c?De(c.getAllResponseHeaders()):null,o={data:a&&"text"!==a&&"json"!==a?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c};Te((function(e){t(e),s()}),(function(e){n(e),s()}),o),c=null}}if(c.open(e.method.toUpperCase(),Pe(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(d)},c.onabort=function(){c&&(n(new Le("Request aborted",Le.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new Le("Network Error",Le.ERR_NETWORK,e,c,c)),c=null},c.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||Be;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Le(t,r.clarifyTimeoutError?Le.ETIMEDOUT:Le.ECONNABORTED,e,c)),c=null},xe.isStandardBrowserEnv()){var p=(e.withCredentials||Ue(f))&&e.xsrfCookieName?Ne.read(e.xsrfCookieName):void 0;p&&(i[e.xsrfHeaderName]=p)}"setRequestHeader"in c&&xe.forEach(i,(function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:c.setRequestHeader(t,e)})),xe.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&"json"!==a&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(r=function(e){c&&(n(!e||e&&e.type?new Ie:e),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r))),o||(o=null);var h=Fe(f);h&&-1===["http","https","file"].indexOf(h)?n(new Le("Unsupported protocol "+h+":",Le.ERR_BAD_REQUEST,e)):c.send(o)}))},$e=ee,He=function(e,t){se.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},Me=de,ze=ve,Je={"Content-Type":"application/x-www-form-urlencoded"};function We(e,t){!$e.isUndefined(e)&&$e.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var Ve,Xe={transitional:pe,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(Ve=qe),Ve),transformRequest:[function(e,t){if(He(t,"Accept"),He(t,"Content-Type"),$e.isFormData(e)||$e.isArrayBuffer(e)||$e.isBuffer(e)||$e.isStream(e)||$e.isFile(e)||$e.isBlob(e))return e;if($e.isArrayBufferView(e))return e.buffer;if($e.isURLSearchParams(e))return We(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,r=$e.isObject(e),o=t&&t["Content-Type"];if((n=$e.isFileList(e))||r&&"multipart/form-data"===o){var i=this.env&&this.env.FormData;return ze(n?{"files[]":e}:e,i&&new i)}return r||"application/json"===o?(We(t,"application/json"),function(e,t,n){if($e.isString(e))try{return(t||JSON.parse)(e),$e.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||Xe.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&$e.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw Me.from(i,Me.ERR_BAD_RESPONSE,this,null,this.response);throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:null},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};$e.forEach(["delete","get","head"],(function(e){Xe.headers[e]={}})),$e.forEach(["post","put","patch"],(function(e){Xe.headers[e]=$e.merge(Je)}));var Ke=Xe,Qe=ee,Ge=Ke,Ye=function(e){return!(!e||!e.__CANCEL__)},Ze=ee,et=function(e,t,n){var r=this||Ge;return Qe.forEach(n,(function(n){e=n.call(r,e,t)})),e},tt=Ye,nt=Ke,rt=Ce;function ot(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new rt}var it=ee,at=function(e,t){t=t||{};var n={};function r(e,t){return it.isPlainObject(e)&&it.isPlainObject(t)?it.merge(e,t):it.isPlainObject(t)?it.merge({},t):it.isArray(t)?t.slice():t}function o(n){return it.isUndefined(t[n])?it.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function i(e){if(!it.isUndefined(t[e]))return r(void 0,t[e])}function a(n){return it.isUndefined(t[n])?it.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function s(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return it.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,r=t(e);it.isUndefined(r)&&t!==s||(n[e]=r)})),n},st="0.27.2",ct=st,ut=de,lt={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){lt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var ft={};lt.transitional=function(e,t,n){function r(e,t){return"[Axios v"+ct+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,i){if(!1===e)throw new ut(r(o," has been removed"+(t?" in "+t:"")),ut.ERR_DEPRECATED);return t&&!ft[o]&&(ft[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var dt=ee,pt=re,ht=ae,vt=function(e){return ot(e),e.headers=e.headers||{},e.data=et.call(e,e.data,e.headers,e.transformRequest),e.headers=Ze.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ze.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||nt.adapter)(e).then((function(t){return ot(e),t.data=et.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return tt(t)||(ot(e),t&&t.response&&(t.response.data=et.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},mt=at,gt=we,yt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new ut("options must be an object",ut.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),o=r.length;o-- >0;){var i=r[o],a=t[i];if(a){var s=e[i],c=void 0===s||a(s,i,e);if(!0!==c)throw new ut("option "+i+" must be "+c,ut.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ut("Unknown option "+i,ut.ERR_BAD_OPTION)}},validators:lt},bt=yt.validators;function Et(e){this.defaults=e,this.interceptors={request:new ht,response:new ht}}Et.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=mt(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&yt.assertOptions(n,{silentJSONParsing:bt.transitional(bt.boolean),forcedJSONParsing:bt.transitional(bt.boolean),clarifyTimeoutError:bt.transitional(bt.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!o){var s=[vt,void 0];for(Array.prototype.unshift.apply(s,r),s=s.concat(a),i=Promise.resolve(t);s.length;)i=i.then(s.shift(),s.shift());return i}for(var c=t;r.length;){var u=r.shift(),l=r.shift();try{c=u(c)}catch(f){l(f);break}}try{i=vt(c)}catch(f){return Promise.reject(f)}for(;a.length;)i=i.then(a.shift(),a.shift());return i},Et.prototype.getUri=function(e){e=mt(this.defaults,e);var t=gt(e.baseURL,e.url);return pt(t,e.params,e.paramsSerializer)},dt.forEach(["delete","get","head","options"],(function(e){Et.prototype[e]=function(t,n){return this.request(mt(n||{},{method:e,url:t,data:(n||{}).data}))}})),dt.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(mt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Et.prototype[e]=t(),Et.prototype[e+"Form"]=t(!0)}));var wt=Et,Ot=Ce;function Rt(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new Ot(e),t(n.reason))}))}Rt.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Rt.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},Rt.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},Rt.source=function(){var e;return{token:new Rt((function(t){e=t})),cancel:e}};var _t=Rt,St=ee,jt=ee,At=U,Ct=wt,xt=at;var Tt=function e(t){var n=new Ct(t),r=At(Ct.prototype.request,n);return jt.extend(r,Ct.prototype,n),jt.extend(r,n),r.create=function(n){return e(xt(t,n))},r}(Ke);Tt.Axios=Ct,Tt.CanceledError=Ce,Tt.CancelToken=_t,Tt.isCancel=Ye,Tt.VERSION=st,Tt.toFormData=ve,Tt.AxiosError=de,Tt.Cancel=Tt.CanceledError,Tt.all=function(e){return Promise.all(e)},Tt.spread=function(e){return function(t){return e.apply(null,t)}},Tt.isAxiosError=function(e){return St.isObject(e)&&!0===e.isAxiosError},D.exports=Tt,D.exports.default=Tt;var Nt=D.exports;const Pt="https://cdn.jsdelivr.net/gh/devicons/devicon@master/",kt=["plain","line","original","plain-wordmark","line-wordmark","original-wordmark"],Dt=async()=>{const e={};return(await Nt.get(`${Pt}devicon.json`).then((e=>e.data))).forEach((s=>{let c=s.versions.font[0];for(const e of kt)e in s.versions.font&&(c=e);var u;e[s.name]=(u=((e,t)=>{for(var n in t||(t={}))o.call(t,n)&&a(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&a(e,n,t[n]);return e})({},s),t(u,n({base:c})))})),e},Ut=(e,t)=>`${Pt}icons/${e}/${e}-${t}.svg`,Bt=s({id:"app",state:()=>({colored:!0})});const Lt=["textContent"];var It=c(u({__name:"IconComponent",props:{icon:null},setup(e){const t=Bt();return(n,r)=>{var o;return l(),f("button",{class:p(["icon",{active:(null==(o=h(t).focusIcon)?void 0:o.name)===e.icon.name}])},[d("i",{class:p(["cbp-ig-icon",{[`devicon-${e.icon.name}-${e.icon.base}`]:!0,colored:h(t).colored}])},null,2),d("h3",{textContent:v(e.icon.name)},null,8,Lt)],2)}}}),[["__scopeId","data-v-9b5c4b40"]]);const Ft={class:"icons"};var qt=c(u({__name:"IconsComponent",async setup(e){let t,n;const r=Bt(),o=m(([t,n]=g((()=>Dt())),t=await t,n(),t));return(e,t)=>(l(),f("div",Ft,[(l(!0),f(y,null,b(o,((e,t)=>(l(),E(It,{key:t,icon:e,onClick:e=>(e=>{var t;(null==(t=r.focusIcon)?void 0:t.name)===e?r.focusIcon=void 0:r.focusIcon=o[e]})(t)},null,8,["icon","onClick"])))),128))]))}}),[["__scopeId","data-v-d4d447d6"]]);const $t=e=>(C("data-v-195f06cb"),e=e(),x(),e),Ht={key:0,class:"icon-info"},Mt={class:"font-version"},zt=$t((()=>d("h1",null,"Font versions",-1))),Jt={class:"content"},Wt={class:"svg-version"},Vt=$t((()=>d("h1",null,"SVG versions",-1))),Xt={class:"content"},Kt=["alt","src","onClick"],Qt={class:"download-buttons"},Gt=["onClick"],Yt={ref:"download-href",hidden:""};var Zt=c(u({__name:"IconInfo",setup(e){const t=Bt(),n=w("download-href"),r=O((()=>t.focusIcon)),o=R(""),i=R(),a=O((()=>{var e;return i.value||(null==(e=r.value)?void 0:e.versions.svg[0])}));_(r,(e=>e&&s(e.versions.svg[0])));const s=async e=>{var t,n;r.value&&(o.value="",o.value=await(t=r.value.name||"",n=e,Nt.get(Ut(t,n)).then((e=>e.data))),i.value=e)},c=(e,t)=>{var r,o,i;null==(r=n.value)||r.setAttribute("href",e),null==(o=n.value)||o.setAttribute("download",t),null==(i=n.value)||i.click()},u=e=>{var t;if(!i.value)return;if("svg"===e)return c(`data:image/svg+xml;charset=utf-8;base64,${btoa(o.value)}`,`${[(null==(t=r.value)?void 0:t.name)||"file",i.value||"original"].join("-")}.svg`);if(!["png","jpg","webp"].includes(e))return;const n=document.createElement("div");document.body.appendChild(n),n.innerHTML=o.value;const a=n.querySelector("svg"),s=(new XMLSerializer).serializeToString(a),u=document.createElement("img");return u.src=`data:image/svg+xml;charset=utf-8;base64,${btoa(s)}`,(l=u,new Promise((e=>{if(l.complete)return e(void 0);l.onload=e,l.onerror=e}))).then((t=>{var r;const o=document.createElement("canvas");return o.width=a.clientWidth,o.height=a.clientHeight,null==(r=o.getContext("2d"))||r.drawImage(u,0,0,a.clientWidth,a.clientHeight),n.remove(),o.toDataURL(`image/${"jpg"===e?"jpeg":e}`,1)})).then((t=>{var n;c(t,`${[(null==(n=r.value)?void 0:n.name)||"file",i.value||"original"].join("-")}.${e}`)})).catch(console.error);var l};return(e,n)=>{const i=S("CodeCopy"),c=S("SvgIcon");return h(r)?(l(),f("div",Ht,[d("div",Mt,[zt,d("ul",Jt,[(l(!0),f(y,null,b(h(r).versions.font,(e=>(l(),f("li",{key:e},[d("i",{class:p({[`devicon-${h(r).name}-${e}`]:!0})},null,2)])))),128))])]),d("div",Wt,[Vt,d("ul",Xt,[(l(!0),f(y,null,b(h(r).versions.svg,(e=>(l(),f("li",{key:e,class:p({active:h(a)===e})},[d("img",{alt:h(r).name,src:h(Ut)(h(r).name,e),onClick:t=>s(e)},null,8,Kt)],2)))),128))]),j(i,{code:o.value},null,8,["code"]),d("div",Qt,[(l(),f(y,null,b(["png","jpg","webp","svg"],(e=>d("button",{key:e,onClick:t=>u(e)},[j(c,{name:"file_download",size:"20px"}),T(" "+v(e),1)],8,Gt))),64)),d("a",Yt,null,512)])]),d("div",{class:"close-btn",onClick:n[0]||(n[0]=e=>h(t).focusIcon=void 0)},[j(c,{name:"close",size:"24px"})])])):A("",!0)}}}),[["__scopeId","data-v-195f06cb"]]);const en={},tn=[(e=>(C("data-v-9b8ec6bc"),e=e(),x(),e))((()=>d("div",{class:"footer"},[T(" This website is not officially produced by devicon. It is produced by monkey cat. If you have any questions related to the website, please post questions on "),d("a",{href:"https://github.com/a3510377/devicon"},"a3510377-devicon"),T(". For other questions related to icons, please go to "),d("a",{href:"https://github.com/devicons/devicon"},"devicon")],-1)))];var nn=c(en,[["render",function(e,t){return l(),f("footer",null,tn)}],["__scopeId","data-v-9b8ec6bc"]]);const rn={class:"view"},on={class:"full-page"};var an=c(u({__name:"HomePage",setup:e=>(e,t)=>(l(),f(y,null,[d("div",rn,[d("div",on,[(l(),E(P,null,{default:N((()=>[j(qt,{class:"icons"})])),_:1})),j(Zt)])]),j(nn)],64))}),[["__scopeId","data-v-b9067db6"]]);export{an as default};
