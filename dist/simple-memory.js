!function(){var t,e,n,i,o,s,r,a,l,c,u,h,p={902:function(t,e){"use strict";e.A={init(){$.__event.scroll={},$.__event.scroll.handle=[],$.__event.scroll.temScroll=0,$.__event.scroll.docScroll=$(document).scrollTop(),$.__event.scroll.homeScroll=$("#home").offset().top-40,$(window).scroll((()=>{$.__event.scroll.docScroll=$(document).scrollTop(),$.__event.scroll.homeScroll=$("#home").offset().top-40,this.handle.scroll(),$.__event.scroll.temScroll=$.__event.scroll.docScroll})),$.__event.resize={},$.__event.resize.handle=[],$(window).resize((()=>{this.handle.resize()}))},handle:{scroll:()=>{for(let t=0;t<$.__event.scroll.handle.length;t++)$.__event.scroll.handle[t]()},resize:()=>{for(let t=0;t<$.__event.resize.handle.length;t++)$.__event.resize.handle[t]();$.__tools.setDomHomePosition()}}}},348:function(t,e,n){var i={"./article":[684,508,551],"./article.js":[684,508,551],"./books":[736,508,111],"./books.js":[736,508,111],"./common/com-article":[508,508,153],"./common/com-article.js":[508,508,153],"./home":[819,390],"./home.js":[819,390],"./links":[775,508,510],"./links.js":[775,508,510]};function o(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],o=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(i)},o.id=348,t.exports=o},879:function(t,e,n){"use strict";async function i(t="",e="GET",n={},i={}){let o={method:e,mode:"cors",redirect:"follow",referrerPolicy:"no-referrer"};Object.keys(i).length&&(o.headers=i),Object.keys(n).length&&(o.body=JSON.stringify(n));return(await fetch(t,o)).json()}n.d(e,{E:function(){return i}})}},d={};function f(t){var e=d[t];if(void 0!==e)return e.exports;var n=d[t]={exports:{}};return p[t](n,n.exports,f),n.exports}f.m=p,t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",i=function(t){t&&t.d<1&&(t.d=1,t.forEach((function(t){t.r--})),t.forEach((function(t){t.r--?t.r++:t()})))},f.a=function(o,s,r){var a;r&&((a=[]).d=-1);var l,c,u,h=new Set,p=o.exports,d=new Promise((function(t,e){u=e,c=t}));d[e]=p,d[t]=function(t){a&&t(a),h.forEach(t),d.catch((function(){}))},o.exports=d,s((function(o){var s;l=function(o){return o.map((function(o){if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var s=[];s.d=0,o.then((function(t){r[e]=t,i(s)}),(function(t){r[n]=t,i(s)}));var r={};return r[t]=function(t){t(s)},r}}var a={};return a[t]=function(){},a[e]=o,a}))}(o);var r=function(){return l.map((function(t){if(t[n])throw t[n];return t[e]}))},c=new Promise((function(e){(s=function(){e(r)}).r=0;var n=function(t){t!==a&&!h.has(t)&&(h.add(t),t&&!t.d&&(s.r++,t.push(s)))};l.map((function(e){e[t](n)}))}));return s.r?c:r()}),(function(t){t?u(d[n]=t):c(p),i(a)})),a&&a.d<0&&(a.d=0)},o=[],f.O=function(t,e,n,i){if(!e){var s=1/0;for(c=0;c<o.length;c++){e=o[c][0],n=o[c][1],i=o[c][2];for(var r=!0,a=0;a<e.length;a++)(!1&i||s>=i)&&Object.keys(f.O).every((function(t){return f.O[t](e[a])}))?e.splice(a--,1):(r=!1,i<s&&(s=i));if(r){o.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=o.length;c>0&&o[c-1][2]>i;c--)o[c]=o[c-1];o[c]=[e,n,i]},f.F={},f.E=function(t){Object.keys(f.F).map((function(e){f.F[e](t)}))},f.H={},f.G=function(t){Object.keys(f.H).map((function(e){f.H[e](t)}))},r=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},f.t=function(t,e){if(1&e&&(t=this(t)),8&e)return t;if("object"==typeof t&&t){if(4&e&&t.__esModule)return t;if(16&e&&"function"==typeof t.then)return t}var n=Object.create(null);f.r(n);var i={};s=s||[null,r({}),r([]),r(r)];for(var o=2&e&&t;"object"==typeof o&&!~s.indexOf(o);o=r(o))Object.getOwnPropertyNames(o).forEach((function(e){i[e]=function(){return t[e]}}));return i.default=function(){return t},f.d(n,i),n},f.d=function(t,e){for(var n in e)f.o(e,n)&&!f.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},f.f={},f.e=function(t){return Promise.all(Object.keys(f.f).reduce((function(e,n){return f.f[n](t,e),e}),[]))},f.u=function(t){return"script/"+({74:"mouse-mouse",87:"mouse-click",111:"page-books",139:"article-code",261:"circle-magic",287:"iconfont",327:"com-after",381:"nh-banner-animation",390:"page-home",489:"gf-blink",510:"page-links",542:"com-before",551:"page-article",596:"code-hljs",667:"background-ribbons",673:"background-particles",677:"mouse-mo",808:"banner-images",866:"day-night",951:"background-season",987:"mouse-bubble",999:"google-fonts"}[t]||t)+"."+{74:"94fa54d3",87:"e293f3fa",111:"49d06fa6",139:"bef7a999",261:"fbc978f0",287:"bccf406a",327:"6a9befd3",381:"8e2950ad",390:"99d0e52b",489:"b59b3904",508:"3056e5d7",510:"c30a7b6d",542:"37bb1aae",551:"bca80479",596:"2bb708b4",667:"817d7cf1",673:"b1ff9ebc",677:"b54f5304",808:"58aa73ec",866:"3267b143",951:"5098f6ee",987:"8aec228a",999:"4602e00f"}[t]+".js"},f.miniCssF=function(t){return"style/"+{74:"mouse-mouse",111:"page-books",153:"page-common-com-article",287:"iconfont",381:"nh-banner-animation",489:"gf-blink",510:"page-links",542:"com-before",551:"page-article",673:"background-particles",866:"day-night",999:"google-fonts"}[t]+"."+{74:"5e68e4e5",111:"d2212f9a",153:"de68d80d",287:"cfd96386",381:"7ff7a955",489:"0cc7f6e2",510:"cb8ec4a1",542:"623dd38a",551:"de68d80d",673:"457e1a14",866:"b7356ffd",999:"66c39700"}[t]+".css"},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),f.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a={},l="cnblogs-theme:",f.l=function(t,e,n,i){if(a[t])a[t].push(e);else{var o,s;if(void 0!==n)for(var r=document.getElementsByTagName("script"),c=0;c<r.length;c++){var u=r[c];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==l+n){o=u;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,f.nc&&o.setAttribute("nonce",f.nc),o.setAttribute("data-webpack",l+n),o.src=t),a[t]=[e];var h=function(e,n){o.onerror=o.onload=null,clearTimeout(p);var i=a[t];if(delete a[t],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=h.bind(null,o.onerror),o.onload=h.bind(null,o.onload),s&&document.head.appendChild(o)}},f.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t;f.g.importScripts&&(t=f.g.location+"");var e=f.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&(!t||!/^http(s?):/.test(t));)t=n[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),f.p=t}(),c=function(t){return new Promise((function(e,n){var i=f.miniCssF(t),o=f.p+i;if(function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var o=(r=n[i]).getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){var r;if((o=(r=s[i]).getAttribute("data-href"))===t||o===e)return r}}(i,o))return e();!function(t,e,n,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(s){if(o.onerror=o.onload=null,"load"===s.type)n();else{var r=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=a,o.parentNode.removeChild(o),i(l)}},o.href=e,document.head.appendChild(o)}(t,o,e,n)}))},u={792:0},f.f.miniCss=function(t,e){u[t]?e.push(u[t]):0!==u[t]&&{74:1,111:1,153:1,287:1,381:1,489:1,510:1,542:1,551:1,673:1,866:1,999:1}[t]&&e.push(u[t]=c(t).then((function(){u[t]=0}),(function(e){throw delete u[t],e})))},function(){var t={792:0};f.f.j=function(e,n){var i=f.o(t,e)?t[e]:void 0;if(0!==i)if(i)n.push(i[2]);else if(153!=e){var o=new Promise((function(n,o){i=t[e]=[n,o]}));n.push(i[2]=o);var s=f.p+f.u(e),r=new Error;f.l(s,(function(n){if(f.o(t,e)&&(0!==(i=t[e])&&(t[e]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;r.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",r.name="ChunkLoadError",r.type=o,r.request=s,i[1](r)}}),"chunk-"+e,e)}else t[e]=0},f.F.j=function(e){if((!f.o(t,e)||void 0===t[e])&&153!=e){t[e]=null;var n=document.createElement("link");f.nc&&n.setAttribute("nonce",f.nc),n.rel="prefetch",n.as="script",n.href=f.p+f.u(e),document.head.appendChild(n)}},f.H.j=function(e){if((!f.o(t,e)||void 0===t[e])&&153!=e){t[e]=null;var n=document.createElement("link");n.charset="utf-8",f.nc&&n.setAttribute("nonce",f.nc),n.rel="preload",n.as="script",n.href=f.p+f.u(e),document.head.appendChild(n)}},f.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,o,s=n[0],r=n[1],a=n[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(i in r)f.o(r,i)&&(f.m[i]=r[i]);if(a)var c=a(f)}for(e&&e(n);l<s.length;l++)o=s[l],f.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return f.O(c)},n=self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),h={111:[489],139:[596],327:[866],510:[489],542:[808],551:[139]},f.f.prefetch=function(t,e){Promise.all(e).then((function(){var e=h[t];Array.isArray(e)&&e.map(f.E)}))},function(){var t={542:[999,287]};f.f.preload=function(e){var n=t[e];Array.isArray(n)&&n.map(f.G)}}(),f.O(0,[792],(function(){[542,327,508,551,111,153,390,510].map(f.E)}),5);var g={};!function(){"use strict";let t={};!function(){let e=t.util={},n=Array.prototype.concat,i=Array.prototype.slice;e.bind=function(t,e){let o=i.call(arguments,2);return function(){t.apply(e,n.call(o,i.call(arguments)))}},e.extend=function(t,e){for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};let o=t.SpringSystem=function(t){this._springRegistry={},this._activeSprings=[],this.listeners=[],this._idleSpringIndices=[],this.looper=t||new l,this.looper.springSystem=this};e.extend(o.prototype,{_springRegistry:null,_isIdle:!0,_lastTimeMillis:-1,_activeSprings:null,listeners:null,_idleSpringIndices:null,createSpring:function(t,e){let n;return n=void 0===t||void 0===e?a.DEFAULT_ORIGAMI_SPRING_CONFIG:a.fromOrigamiTensionAndFriction(t,e),this.createSpringWithConfig(n)},createSpringWithBouncinessAndSpeed:function(t,e){let n;return n=void 0===t||void 0===e?a.DEFAULT_ORIGAMI_SPRING_CONFIG:a.fromBouncinessAndSpeed(t,e),this.createSpringWithConfig(n)},createSpringWithConfig:function(t){let e=new s(this);return this.registerSpring(e),e.setSpringConfig(t),e},getIsIdle:function(){return this._isIdle},registerSpring:function(t){this._springRegistry[t.getId()]=t},deregisterSpring:function(t){f(this._activeSprings,t),delete this._springRegistry[t.getId()]},advance:function(t,e){for(;this._idleSpringIndices.length>0;)this._idleSpringIndices.pop();for(let n=0,i=this._activeSprings.length;n<i;n++){let i=this._activeSprings[n];i.systemShouldAdvance()?i.advance(t/1e3,e/1e3):this._idleSpringIndices.push(this._activeSprings.indexOf(i))}for(;this._idleSpringIndices.length>0;){let t=this._idleSpringIndices.pop();t>=0&&this._activeSprings.splice(t,1)}},loop:function(t){let e;-1===this._lastTimeMillis&&(this._lastTimeMillis=t-1);let n=t-this._lastTimeMillis;this._lastTimeMillis=t;let i=0,o=this.listeners.length;for(i=0;i<o;i++)e=this.listeners[i],e.onBeforeIntegrate&&e.onBeforeIntegrate(this);for(this.advance(t,n),0===this._activeSprings.length&&(this._isIdle=!0,this._lastTimeMillis=-1),i=0;i<o;i++)e=this.listeners[i],e.onAfterIntegrate&&e.onAfterIntegrate(this);this._isIdle||this.looper.run()},activateSpring:function(t){let e=this._springRegistry[t];-1==this._activeSprings.indexOf(e)&&this._activeSprings.push(e),this.getIsIdle()&&(this._isIdle=!1,this.looper.run())},addListener:function(t){this.listeners.push(t)},removeListener:function(t){f(this.listeners,t)},removeAllListeners:function(){this.listeners=[]}});let s=t.Spring=function t(e){this._id="s"+t._ID++,this._springSystem=e,this.listeners=[],this._currentState=new r,this._previousState=new r,this._tempState=new r};e.extend(s,{_ID:0,MAX_DELTA_TIME_SEC:.064,SOLVER_TIMESTEP_SEC:.001}),e.extend(s.prototype,{_id:0,_springConfig:null,_overshootClampingEnabled:!1,_currentState:null,_previousState:null,_tempState:null,_startValue:0,_endValue:0,_wasAtRest:!0,_restSpeedThreshold:.001,_displacementFromRestThreshold:.001,listeners:null,_timeAccumulator:0,_springSystem:null,destroy:function(){this.listeners=[],this.frames=[],this._springSystem.deregisterSpring(this)},getId:function(){return this._id},setSpringConfig:function(t){return this._springConfig=t,this},setCurrentValue:function(t,e){return this._startValue=t,this._currentState.position=t,e||this.setAtRest(),this.notifyPositionUpdated(!1,!1),this},getCurrentValue:function(){return this._currentState.position},getDisplacementDistanceForState:function(t){return Math.abs(this._endValue-t.position)},setEndValue:function(t){if(this._endValue==t&&this.isAtRest())return this;this._startValue=this.getCurrentValue(),this._endValue=t,this._springSystem.activateSpring(this.getId());for(let t=0,e=this.listeners.length;t<e;t++){let e=this.listeners[t].onSpringEndStateChange;e&&e(this)}return this},setVelocity:function(t){return t===this._currentState.velocity||(this._currentState.velocity=t,this._springSystem.activateSpring(this.getId())),this},setRestSpeedThreshold:function(t){return this._restSpeedThreshold=t,this},isOvershooting:function(){let t=this._startValue,e=this._endValue;return this._springConfig.tension>0&&(t<e&&this.getCurrentValue()>e||t>e&&this.getCurrentValue()<e)},advance:function(t,e){let n=this.isAtRest();if(n&&this._wasAtRest)return;let i=e;e>s.MAX_DELTA_TIME_SEC&&(i=s.MAX_DELTA_TIME_SEC),this._timeAccumulator+=i;let o,r,a,l,c,u,h,p,d,f,g=this._springConfig.tension,m=this._springConfig.friction,_=this._currentState.position,y=this._currentState.velocity,b=this._tempState.position,S=this._tempState.velocity;for(;this._timeAccumulator>=s.SOLVER_TIMESTEP_SEC;)this._timeAccumulator-=s.SOLVER_TIMESTEP_SEC,this._timeAccumulator<s.SOLVER_TIMESTEP_SEC&&(this._previousState.position=_,this._previousState.velocity=y),o=y,r=g*(this._endValue-b)-m*y,b=_+o*s.SOLVER_TIMESTEP_SEC*.5,S=y+r*s.SOLVER_TIMESTEP_SEC*.5,a=S,l=g*(this._endValue-b)-m*S,b=_+a*s.SOLVER_TIMESTEP_SEC*.5,S=y+l*s.SOLVER_TIMESTEP_SEC*.5,c=S,u=g*(this._endValue-b)-m*S,b=_+c*s.SOLVER_TIMESTEP_SEC*.5,S=y+u*s.SOLVER_TIMESTEP_SEC*.5,h=S,p=g*(this._endValue-b)-m*S,d=1/6*(o+2*(a+c)+h),f=1/6*(r+2*(l+u)+p),_+=d*s.SOLVER_TIMESTEP_SEC,y+=f*s.SOLVER_TIMESTEP_SEC;this._tempState.position=b,this._tempState.velocity=S,this._currentState.position=_,this._currentState.velocity=y,this._timeAccumulator>0&&this._interpolate(this._timeAccumulator/s.SOLVER_TIMESTEP_SEC),(this.isAtRest()||this._overshootClampingEnabled&&this.isOvershooting())&&(this._springConfig.tension>0?(this._startValue=this._endValue,this._currentState.position=this._endValue):(this._endValue=this._currentState.position,this._startValue=this._endValue),this.setVelocity(0),n=!0);let v=!1;this._wasAtRest&&(this._wasAtRest=!1,v=!0);let w=!1;n&&(this._wasAtRest=!0,w=!0),this.notifyPositionUpdated(v,w)},notifyPositionUpdated:function(t,e){for(let n=0,i=this.listeners.length;n<i;n++){let i=this.listeners[n];t&&i.onSpringActivate&&i.onSpringActivate(this),i.onSpringUpdate&&i.onSpringUpdate(this),e&&i.onSpringAtRest&&i.onSpringAtRest(this)}},systemShouldAdvance:function(){return!this.isAtRest()||!this.wasAtRest()},wasAtRest:function(){return this._wasAtRest},isAtRest:function(){return Math.abs(this._currentState.velocity)<this._restSpeedThreshold&&(this.getDisplacementDistanceForState(this._currentState)<=this._displacementFromRestThreshold||0===this._springConfig.tension)},setAtRest:function(){return this._endValue=this._currentState.position,this._tempState.position=this._currentState.position,this._currentState.velocity=0,this},_interpolate:function(t){this._currentState.position=this._currentState.position*t+this._previousState.position*(1-t),this._currentState.velocity=this._currentState.velocity*t+this._previousState.velocity*(1-t)},getListeners:function(){return this.listeners},addListener:function(t){return this.listeners.push(t),this},removeListener:function(t){return f(this.listeners,t),this},removeAllListeners:function(){return this.listeners=[],this}});let r=function(){};e.extend(r.prototype,{position:0,velocity:0});let a=t.SpringConfig=function(t,e){this.tension=t,this.friction=e},l=t.AnimationLooper=function(){this.springSystem=null;let t=this,n=function(){t.springSystem.loop(Date.now())};this.run=function(){e.onFrame(n)}};t.SimulationLooper=function(t){this.springSystem=null;let e=0,n=!1;t=t||16.667,this.run=function(){if(!n){for(n=!0;!this.springSystem.getIsIdle();)this.springSystem.loop(e+=t);n=!1}}},t.SteppingSimulationLooper=function(t){this.springSystem=null;let e=0;this.run=function(){},this.step=function(t){this.springSystem.loop(e+=t)}};let c=t.OrigamiValueConverter={tensionFromOrigamiValue:function(t){return 3.62*(t-30)+194},frictionFromOrigamiValue:function(t){return 3*(t-8)+25}},u=t.BouncyConversion=function(t,e){this.speed=e;var n=this.normalize(t/1.7,0,20);n=this.projectNormal(n,0,.8);var i=this.normalize(e/1.7,0,20);this.bouncyTension=this.projectNormal(i,.5,200),this.bouncyFriction=this.quadraticOutInterpolation(n,this.b3Nobounce(this.bouncyTension),.01)};e.extend(u.prototype,{normalize:function(t,e,n){return(t-e)/(n-e)},projectNormal:function(t,e,n){return e+t*(n-e)},linearInterpolation:function(t,e,n){return t*n+(1-t)*e},quadraticOutInterpolation:function(t,e,n){return this.linearInterpolation(2*t-t*t,e,n)},b3Friction1:function(t){return 7e-4*Math.pow(t,3)-.031*Math.pow(t,2)+.64*t+1.28},b3Friction2:function(t){return 44e-6*Math.pow(t,3)-.006*Math.pow(t,2)+.36*t+2},b3Friction3:function(t){return 45e-8*Math.pow(t,3)-332e-6*Math.pow(t,2)+.1078*t+5.84},b3Nobounce:function(t){let e=0;return e=t<=18?this.b3Friction1(t):t>18&&t<=44?this.b3Friction2(t):this.b3Friction3(t),e}}),e.extend(a,{fromOrigamiTensionAndFriction:function(t,e){return new a(c.tensionFromOrigamiValue(t),c.frictionFromOrigamiValue(e))},fromBouncinessAndSpeed:function(e,n){var i=new t.BouncyConversion(e,n);return this.fromOrigamiTensionAndFriction(i.bouncyTension,i.bouncyFriction)}}),a.DEFAULT_ORIGAMI_SPRING_CONFIG=a.fromOrigamiTensionAndFriction(40,7),e.extend(a.prototype,{friction:0,tension:0});let h={};e.hexToRGB=function(t){if(h[t])return h[t];3===(t=t.replace("#","")).length&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);let e=t.match(/.{2}/g),n={r:parseInt(e[0],16),g:parseInt(e[1],16),b:parseInt(e[2],16)};return h[t]=n,n},e.rgbToHex=function(t,e,n){return t=t.toString(16),e=e.toString(16),n=n.toString(16),"#"+(t=t.length<2?"0"+t:t)+(e=e.length<2?"0"+e:e)+(n=n.length<2?"0"+n:n)};let p,d=t.MathUtil={mapValueInRange:function(t,e,n,i,o){return i+(t-e)/(n-e)*(o-i)},degreesToRadians:function(t){return t*Math.PI/180}};function f(t,e){let n=t.indexOf(e);-1!=n&&t.splice(n,1)}e.extend(e,d),"undefined"!=typeof window&&(p=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}),p||"undefined"==typeof process||"node"!==process.title||(p=setImmediate),e.onFrame=function(t){return p(t)},"undefined"!=typeof exports?e.extend(exports,t):"undefined"!=typeof window&&(window.rebound=t)}();var e=function(){function t(t,e){for(let n=0;n<e.length;n++){let i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();let n=function(){function n(){let t=arguments.length<=0||void 0===arguments[0]?100:arguments[0],e=arguments.length<=1||void 0===arguments[1]?3:arguments[1],o=arguments.length<=2||void 0===arguments[2]?0:arguments[2],s=arguments[3];i(this,n),this._radius=t,this._sides=e,this._depth=o,this._colors=s,this._x=0,this._y=0,this.rotation=0,this.scale=1,this.points=this._getRegularPolygonPoints()}return e(n,[{key:"_getRegularPolygonPoints",value:function(){let t=[],e=0;for(;e<this._sides;){let n=-this._radius*Math.sin(2*e*Math.PI/this._sides),i=this._radius*Math.cos(2*e*Math.PI/this._sides);t.push({x:n,y:i}),e++}return t}},{key:"_getInscribedPoints",value:function(t,e){let n=this,i=[];return t.forEach((function(o,s){let r=o,a=t[s+1];a||(a=t[0]);let l=n._getInterpolatedPoint(r,a,e);i.push(l)})),i}},{key:"_getInterpolatedPoint",value:function(t,e,n){let i=t.x,o=t.y;return{x:i+(e.x-i)*n,y:o+(e.y-o)*n}}},{key:"_getUpdatedChildren",value:function(t){let e=[];for(let n=0;n<this._depth;n++){let i=e[n-1]||this.points,o=this._getInscribedPoints(i,t);e.push(o)}return e}},{key:"renderChildren",value:function(e,n){let i=this,o=this._getUpdatedChildren(n);o.forEach((function(n,s){e.beginPath(),n.forEach((function(t){return e.lineTo(t.x,t.y)})),e.closePath();let r=i._colors.stroke,a=i._colors.child;if(r&&(e.strokeStyle=r,e.stroke()),a){let n=t.util.hexToRGB(a),i=1/o.length,r=i+i*s,l="rgba("+n.r+", "+n.g+", "+n.b+", "+r+")";e.fillStyle=l,e.shadowColor="rgba(0,0,0, 0.1)",e.shadowBlur=10,e.shadowOffsetX=0,e.shadowOffsetY=0,e.fill()}}))}},{key:"render",value:function(e){e.save(),e.translate(this._x,this._y),0!==this.rotation&&e.rotate(t.MathUtil.degreesToRadians(this.rotation)),1!==this.scale&&e.scale(this.scale,this.scale),e.beginPath(),this.points.forEach((function(t){return e.lineTo(t.x,t.y)})),e.closePath();let n=this._colors.stroke,i=this._colors.base;n&&(e.strokeStyle=n,e.stroke()),i&&(e.fillStyle=i,e.fill()),e.restore()}}]),n}();e=function(){function t(t,e){for(let n=0;n<e.length;n++){let i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}let o=function(){function o(t){i(this,o);let e=t.radius,s=t.sides,r=t.depth,a=t.colors,l=t.alwaysForward,c=t.restAt,u=t.renderBase;s<3&&(console.warn("At least 3 sides required."),s=3),this._canvas=document.createElement("canvas"),this._canvas.style.backgroundColor=a.background,this._canvas.style.zIndex=1100,this._canvasW=null,this._canvasH=null,this._canvasOpacity=1,this._centerX=null,this._centerY=null,this._alwaysForward=l,this._restThreshold=c,this._renderBase=u,this._springRangeLow=0,this._springRangeHigh=this._restThreshold||1,this._basePolygon=new n(e,s,r,a),this._progress=0,this._isAutoSpin=null,this._isCompleting=null}return e(o,[{key:"init",value:function(t,e){this._addCanvas(),this._spring=t,this._addSpringListener(),this._isAutoSpin=e,e?this._spin():(this._spring.setEndValue(0),this.render())}},{key:"_addCanvas",value:function(){document.body.appendChild(this._canvas),this._context=this._canvas.getContext("2d"),this._setCanvasSize()}},{key:"_setCanvasSize",value:function(){this._canvasW=this._canvas.width=window.innerWidth,this._canvasH=this._canvas.height=window.innerHeight,this._canvas.style.position="fixed",this._canvas.style.top=0,this._canvas.style.left=0,this._centerX=this._canvasW/2,this._centerY=this._canvasH/2}},{key:"_addSpringListener",value:function(){let e=this;this._spring.addListener({onSpringUpdate:function(n){let i=n.getCurrentValue(),o=e._springRangeLow,s=e._springRangeHigh;i=t.MathUtil.mapValueInRange(i,0,1,o,s),e.render(i)}})}},{key:"setComplete",value:function(){this._isCompleting=!0}},{key:"_completeAnimation",value:function(){this._canvasOpacity-=.1,this._canvas.style.opacity=this._canvasOpacity,this._canvasOpacity<=0&&(this._isAutoSpin=!1,this._spring.setAtRest(),this._canvas.remove())}},{key:"_spin",value:function(){if(this._alwaysForward){let t=this._spring.getCurrentValue();this._restThreshold&&1===t&&this._switchSpringRange(),1===t&&this._spring.setCurrentValue(0).setAtRest()}this._spring.setEndValue(1===this._spring.getCurrentValue()?0:1)}},{key:"_switchSpringRange",value:function(){let t=this._restThreshold;this._springRangeLow=this._springRangeLow===t?0:t,this._springRangeHigh=this._springRangeHigh===t?1:t}},{key:"render",value:function(t){t&&(this._progress=Math.round(1e4*t)/1e4),this._isAutoSpin&&this._spring.isAtRest()&&this._spin(),this._isCompleting&&this._completeAnimation(),this._context.clearRect(0,0,this._canvasW,this._canvasH),this._context.save(),this._context.translate(this._centerX,this._centerY),this._context.lineWidth=1.5,this._renderBase&&this._basePolygon.render(this._context),this._basePolygon.renderChildren(this._context,this._progress),this._context.restore()}}]),o}();var s=JSON.parse('{"info":{"name":"","startDate":"2021-01-01","avatar":"","blogIcon":""},"sidebar":{"navList":[],"customList":{},"infoBackground":"","titleMsg":"欢迎访问本博客~","blogStatus":true,"submenu":{"pointsRank":false,"latestPosts":false,"myTags":false,"postsClassify":false,"articleClassify":false,"readRank":false,"recommendRank":false,"latestComment":false,"postsArchive":false,"articleArchive":false,"customList":false}},"banner":{"text":false,"home":{"background":[],"title":[],"titleSource":"jinrishici"},"article":{"background":[]}},"loading":{"rebound":{"tension":16,"friction":5},"spinner":{"id":"spinner","radius":90,"sides":3,"depth":4,"colors":{"background":"#f0f0f0","stroke":"#272633","base":null,"child":"#272633"},"alwaysForward":true,"restAt":0.5,"renderBase":false}},"fontIconExtend":"","progressBar":{"id":"top-progress-bar","color":"#77b6ff","height":"2px","duration":0.2},"title":{"onblur":"(oﾟvﾟ)ノ Hi","onblurTime":500,"focus":"(*´∇｀*) 欢迎回来！","focusTime":1000},"footer":{"text":{"left":"","right":"","iconFont":{"icon":"icon-xinlv","color":"red","fontSize":"16px"}},"style":2,"aplayer":{"enable":false,"options":{"lrcColor":"#00ab08","lrcCurrentColor":"#FDD835","id":"3778678","api":"","server":"netease","type":"playlist","auto":"netease","fixed":"true","mini":"true","autoplay":"false","theme":"#2980b9","loop":"all","order":"random","preload":"auto","volume":"0.7","mutex":"true","lrcType":"0","listFolded":"true","listMaxHeight":"340px","storageName":"cnblogsTheme"}}},"links":{"footer":[],"page":[]},"umami":{"url":"","shareId":""},"rtMenu":{"qrCode":"","reward":{"alipay":"","wechatpay":""},"downScrollDom":""},"switchDayNight":{"enable":true,"nightMode":false,"auto":{"enable":false,"dayHour":5,"nightHour":19}},"animate":{"bannerImages":{"enable":false,"options":{"itemNum":5,"current":0,"sort":1,"time":30000}},"homeBanner":{"enable":false,"options":{"radius":15,"density":0.2,"color":"rgba(255,255,255, .2)","clearOffset":0.3}},"articleTitle":{"enable":true},"articleBanner":{"enable":false},"background":{"ribbons":{"enable":false,"options":{"colorSaturation":"60%","colorBrightness":"50%","colorAlpha":0.5,"colorCycleSpeed":5,"verticalPosition":"random","horizontalSpeed":200,"ribbonCount":3,"strokeSize":0,"parallaxAmount":-0.2,"animateSections":true}},"particles":{"enable":false,"options":{}},"season":{"enable":false,"options":{"img":"","size":40}}},"mouse":{"bubble":{"enable":false,"options":{"live":30,"colors":["149, 197, 252","224, 199, 252"],"quantity":15,"size":5}},"mouse":{"enable":false,"options":{"size":8,"sizeF":36}},"mo":{"enable":false,"options":{"radius":{"0":100},"count":5,"children":{"shape":"polygon","fill":{"cyan":"yellow"},"radius":20,"rotate":{"360":0},"duration":2000}}},"click":{"enable":false,"options":{}}},"infoName":{"enable":false},"avatar":{"enable":false}},"code":{"type":"","options":{"hljs":{"theme":"atom-one-dark-reasonable","languages":[]},"maxHeight":"","line":false,"macStyle":true}},"articleSuffix":{"imgUrl":"","aboutHtml":"","copyrightHtml":"","supportHtml":"","copyText":{"enable":false,"length":100,"copyright":""}},"articleDirectory":{"position":"right","minBodyWeight":900,"autoWidthScroll":false},"consoleList":[],"bookList":[],"memorialDays":["12-13"],"articleContent":{"link":false,"iconfont":false,"commentTyping":{"enable":false,"options":{"colorful":true,"shake":false}},"commentBackground":{"enable":false,"options":{"day":"rgba(0, 0, 0, 0) url(\\"https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_230301073716_comment_bg_day.png\\") no-repeat scroll 100% 31% / 35% padding-box border-box","night":"rgba(0, 0, 0, 0) url(\\"https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_230301073520_comment_bg_dark.png\\") no-repeat scroll 100% 31% / 35% padding-box border-box"}},"diggit":false,"iconfontArr":["hebaodan","bingtanghulu","kesong","qianceng","fengmi","feiyuguantou","shengjian","youtiao","yuzijiang","zhutongfan","doujiang","sanmingzhi","paofu","shanbei","dangaojuan","futejia","huangyou","xiangchang","banji","danta","qingning","lajiao","shizi","mojituo","pijiu","putaojiu","kouxiangtang","xiangcaobingqilin","jiaozi","tilamisu","huoguo","hongshu","bingkuai","mianhuatang","paobing","meishikafei","mantou","qishui","ganlan","jiroujuan","guodong","baozi","pingguo","chengzi","qingjiao","jidan","xihongshi","mangguo","baocai","niunai","mianbao","huluobu","zhangyu","pangxie","longxia","yangcong","rou","jitui","huage","xianyu","mogu","qiezi","xilanhua","ningmeng","liulian","banli","sanwenyu","tudou","xigua","nangua","huolongguo","fantuan","zhusun","shuiluobu","shanzhu","lanmei","shiliu","yezi","tiangua","mihoutao","boluo","kaixinguo","hetao","xiaweiyiguo","huasheng","bigenguo","kuihuazi","songzi","xiguazi","badanmu","yaoguo","danhuangsu","dangao","binggan","buding","tangguo","qiaokeli","hongzao","candou","putaogan","manyuemei","taozi","xiangjiao","caomei","niuyouguo","hamigua","chelizi","li","bale","kafei1","shutiao","zhenzhunaicha","xuegao","nailao","kele","tiantong","hanbao","xiezishousi","baomihua","regou","makalong","tianfuluo","juzi","baixiangguo","putao","shaomai","yumi","pipa","yangtao","youzi","lianwu","wuhuaguo","paomian","wandou","huanggua","suantou","tiantianquan","shupian","huafubing","bangbangtang","shousi","lizhi","doufu","mocha","boluomi","zhouzi","bingsha","suannai","pisa","haixing","haizhe","tongluoshao","nuomici","kuangquanshui","roujiamo","cha","zhangyuxiaowanzi","chengzhi","yuancaitou","baicai"],"roughNotation":{"enable":false,"options":{"underline":{"type":"underline","color":"blue"},"circle":{"type":"circle","color":"red"},"box":{"type":"box","color":"orange"},"highlight":{"type":"highlight","color":"yellow","iterations":1,"multiline":true},"bracket":{"type":"bracket","color":"red","padding":[2,10],"brackets":["left","right"],"strokeWidth":3},"strikeThrough":{"type":"strike-through","color":"red"},"crossedOff":{"type":"crossed-off","color":"red"}}},"hide":{"recommendPosts":false,"readingRanking":false}},"default":{"autoupdate":"false","version":"v2.2.17","commentTyping":"https://files.cnblogs.com/files/wangyang0210/commentTyping.js?t=1676464468","iconfont":"https://at.alicdn.com/t/c/font_3628204_t6n3fw8b1zn.js","avatar":"https://images.cnblogs.com/cnblogs_com/wangyang0210/1943283/o_221114123823_default_avatar.webp","mojs":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/mo-js/0.288.2/mo.min.js","moment":"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/moment.js/2.29.1/moment.min.js","gsap":"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gsap/3.9.1/gsap.min.js","highlight":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/highlight.js/11.4.0/highlight.min.js","hljscss":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/highlight.js/11.4.0/styles/","fancybox":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/fancybox/3.5.7/jquery.fancybox.min.js","fancyboxcss":"https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/fancybox/3.5.7/jquery.fancybox.min.css","bootstrap":"https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-y/bootstrap/5.0.0-beta3/js/bootstrap.min.js","clipboard":"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/clipboard.js/2.0.10/clipboard.min.js","optiscroll":"https://npm.elemecdn.com/optiscroll@3.2.1/dist/optiscroll.min.js","optiscrollcss":"https://npm.elemecdn.com/optiscroll@3.2.1/dist/optiscroll.css","snapsvg":"https://npm.elemecdn.com/snapsvg-cjs@0.0.6/dist/snap.svg.js","toprogress":"https://npm.elemecdn.com/toprogress@0.1.3/ToProgress.min.js","jqueryrotate":"https://files.cnblogs.com/files/wangyang0210/jQueryRotateCompressed.js?t=1677086282","aplayer":"https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-y/aplayer/1.10.1/APlayer.min.js","aplayercss":"https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/aplayer/1.10.1/APlayer.min.css","meting":"https://cdn.staticfile.org/meting/2.0.1/Meting.min.js","roughNotation":"https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/rough-notation/0.5.1/rough-notation.iife.min.js"}}');let r={url:"",user:"",pageType:"",articleId:""};r.url=window.location.href;let a=r.url.split("/");r.user=a[3],r.homeUrl=[a[0],a[1],a[2],a[3]].join("/");let l=$("#topics").length;r.pageType=l?$("#bookListFlg").length?"books":$("#linkListFlg").length?"links":"article":"home",l&&(r.articleId=a[a.length-1].split(".")[0]);var c=r,u=f(879);function h(t,e){const n=t.split("."),i=e.split(".");let o=0;for(;o<n.length||o<i.length;){let t=0,e=0;if(o<n.length&&(t=parseInt(n[o])),o<i.length&&(e=parseInt(i[o])),t>e)return 1;if(t<e)return-1;o++}return 0}var p={getTodayStart:function(){return moment().startOf("day").format("x")},getTodayEnd:function(){return moment().endOf("day").format("x")},getYesterdayStart:function(){return moment().subtract(1,"days").startOf("day").format("x")},getYesterdayEnd:function(){return moment().subtract(1,"days").endOf("day").format("x")},getTodayDate:function(){return moment().format("MM-DD")},articleInfo:function(t,e){let n=1===e?"icon-marketing_fill":"icon-label-fill",i=1===e?"article-tag-class-color":"article-tag-color";$.each(t,(e=>{let o=$(t[e]);o.prepend(`<span class="iconfont ${n}"></span>`),$("#articleInfo").append(`<a href="${o.attr("href")}" target="_blank">\n                <span class="article-info-tag ${i}"> ${o.text()} </span>\n            </a>`)}))},tempReplacement:function(t,e,n){let i=new RegExp(`##${e}##`,"g");return t.replace(i,n)},batchTempReplacement:function(t,e){let n=t;return $.each(e,(function(t){let i=e[t],o=new RegExp(`##${i[0]}##`,"g");n=n.replace(o,i[1])})),n},dynamicLoadingCss:function(t){$("head").append("<link>"),$("head").children(":last").attr({rel:"stylesheet",type:"text/css",href:t})},dynamicLoadingJs:function(t){return new Promise(((e,n)=>{$.ajax({type:"GET",dataType:"script",cache:!0,url:t,success:function(t){e(t)},error:function(t){n(t)}})}))},htmlFiltrationScript:function(t){let e=new RegExp("<script.*<\/script>","ig");return t.replace(e,"")},clearIntervalTimeId:function(t){null!=t&&window.clearInterval(t)},actScroll:function(t,e){$("html,body").stop().animate({scrollTop:t},e)},getScrollPercent:function(){const t=$(window).height(),e=$(document).height();return e===t?"0":($(window).scrollTop()/(e-t)*100).toFixed(0)},randomNum:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1);case 2:return parseInt(Math.random()*(e-t+1)+t);default:return 0}},setDomHomePosition:function(){$("#home").css("margin-top",`${$(".main-header").outerHeight()}px`)},getRunDate:function(t){let e=t.split("-"),n=new Date;n.setUTCFullYear(e[0],e[1]-1,e[2]),n.setUTCHours(0,0,0,0);let i=n,o=((new Date).getTime()-i.getTime())/864e5,s=Math.floor(o),r=-24*(s-o),a=Math.floor(r),l=-60*(a-r),c=Math.floor(-60*(a-r));return{daysold:s,hrsold:a,minsold:c,seconds:Math.floor(-60*(c-l)).toString()}},setCookie:function(t,e,n){let i=new Date;i.setTime(i.getTime()+1e3*n),document.cookie=t+"="+escape(e)+"; expires="+i.toGMTString()+"; path=/"},getCookie:function(t){let e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return e=document.cookie.match(n),e?unescape(e[2]):null},randomString:function(t){t=t||32;let e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n="";for(let i=0;i<t;i++)n+=e.charAt(Math.floor(48*Math.random()));return n},minToTime:function(t){let e=parseInt(t),n=parseInt(60*(t-e));return n=1===(""+n).length?"0"+n:n,`${e}:${n}`},compareVersion:h,getVersion:function(){return(0,u.E)("https://api.github.com/repos/wangyang0210/cnblogs-theme/releases/latest").then((t=>{localStorage.setItem("version",t.tag_name),localStorage.setItem("repoUrl",t.html_url)})),h(localStorage.getItem("version"),$.__config.default.version)},setCommentBackground:function(t){"day"==t?$("textarea").css("background",$.__config.articleContent.commentBackground.options.day):$("textarea").css("background",$.__config.articleContent.commentBackground.options.night)},htmlReplace:function(t,e,n){$(t).html($(t).html().replace(e,n))},handlePostDesc:function(t){const e=t.replace(/[\r\n]/g,""),n=[/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*推荐\s*\((\d*)\).*/,/.*posted\s*@\s*([0-9\-:\s]{16}).*阅读\s*\((\d*)\).*评论\s*\((\d*)\).*/,/.*posted\s*@\s*([0-9\-:\s]{16}).*/].reduce(((t,n)=>{const i=e.match(n);return i&&i.length>t.length?i:t}),[]),[,i,o,s,r]=n;return{date:i||"1970-01-01 00:00",vnum:o||"0",cnum:s||"0",tnum:r||$("#digg_count").text()||"0"}}},d=f(902);$.__loading=new function(){let e=this;this.config=$?.__config?.loading||{rebound:{tension:16,friction:5},spinner:{id:"spinner",radius:90,sides:3,depth:4,colors:{background:"#f0f0f0",stroke:"#272633",base:null,child:"#272633"},alwaysForward:!0,restAt:.5,renderBase:!1}},this.spring=null,this.spinner=null,this.initRebound=()=>{let n=e.config.rebound,i=new t.SpringSystem;e.spring=i.createSpring(n.tension,n.friction)},this.initSpinner=()=>{let t=e.config.spinner;e.spinner=new o(t)},this.start=()=>{$("#blog-news").prepend('<div id="loading"></div>'),e.initRebound(),e.initSpinner(),e.spinner.init(e.spring,!0)},this.stop=()=>{$("body").css("overflow","auto"),e.spinner.setComplete(),$("div#loading").hide(),$('a[name="top"]').hide()}},$.__loading.start(),$(document).ready((function(){$.__config=$.extend(!0,s,window?.cnblogsConfig||{}),$.__status=c,$.__tools=p,$.__timeIds={},$.__event={},$.__config.info.name||=$.__status.user,$.__tools.dynamicLoadingJs($.__config.default.moment).then((t=>{f(348)(`./${$.__status.pageType}`).then((t=>{const e=t.default;f.e(542).then(f.bind(f,561)).then((t=>{(0,t.default)(),e(),f.e(327).then(f.bind(f,523)).then((t=>{(0,t.default)(),$.__tools.setDomHomePosition(),d.A.handle.scroll(),d.A.handle.resize()}))}))}))})).catch((t=>console.error("moment.js",t)))}))}(),g=f.O(g)}();