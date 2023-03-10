/*! For license information please see 465.js.LICENSE.txt */
(self.webpackChunkglivera_webpack_template=self.webpackChunkglivera_webpack_template||[]).push([[465],{465:(u,D,e)=>{"use strict";e.r(D),e.d(D,{default:()=>l});var t=e(358),r=e(546),n=e(107),i=e(678),o=e(348),s=e(365);const l=function(){var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".js-fade-trigger",D=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".js-hero",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".js-partners",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".js-fade-item",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:".js-subtitle-fade",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:".js-quote",F=arguments.length>6&&void 0!==arguments[6]?arguments[6]:".decor_text_in",C=arguments.length>7&&void 0!==arguments[7]?arguments[7]:".js-description-fade",p=arguments.length>8&&void 0!==arguments[8]?arguments[8]:".js-link-fade",d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:".js-bg-fade",f=arguments.length>10&&void 0!==arguments[10]?arguments[10]:".js-img-parallax";t.ZP.registerPlugin(r.ScrollTrigger,n.SplitText,i.ScrollSmoother);var h=document.querySelectorAll(u);if(h.length){var E=document.querySelector(D);if(E){var g=document.querySelector(e);if(g){var y=document.querySelectorAll(f);if(y.length){var v=[];h.forEach((function(u,D){var e=u.querySelectorAll(l),t=u.querySelector(a),r=u.querySelector(c);if(r){var i=new n.SplitText(r,{type:"lines,words,chars",linesClass:"split-line"}),o=u.querySelector(F),s=u.querySelectorAll(C),d=u.querySelectorAll(p),h=u.querySelectorAll(f),E={$section:u,$item:Array.from(e),$subTitle:t,mySplitText:i,$description:Array.from(s),$link:Array.from(d),$imgParallax:Array.from(h),$textDecor:o};v.push(E)}}));var m,A=(0,o.bY)().windowWidth,B=!1;(0,o.KN)((function(){A=(0,o.bY)().windowWidth,A>s.j$.mediaPoint1?B||((m=i.ScrollSmoother.create({wrapper:".wrapper",content:".wrapper_in",smooth:2,effects:!0})).effects(Array.from(y),{speed:"auto"}),B=!0):B&&(m.kill(),B=!1)}));var b,S,x,w,T,_,N,k,P;b=E.querySelectorAll(c),S=E.querySelectorAll(d),x=E.querySelectorAll(a),w=E.querySelectorAll(C),T=E.querySelectorAll(p),_=new n.SplitText(b,{type:"lines,words,chars",linesClass:"split-line"}),N=_.chars,k=t.ZP.timeline({onComplete:function(){_.revert()}}),(P=function(u){t.ZP.set(u,{opacity:0})})(S),P(x),P(w),P(T),t.ZP.set(N,{opacity:0,y:80}),k.to(S,{opacity:1,duration:.5}).to(x,{opacity:1,delay:.2,duration:.5}).to(N,{opacity:1,duration:.5,delay:.1,ease:"circ.out",y:0,stagger:.02}).to(w,{opacity:1,delay:.1,duration:.4}).to(T,{opacity:1,duration:.4});!function(){var u=g.querySelectorAll(l);if(u.length){var D=t.ZP.timeline();u.length&&D.fromTo(u,{opacity:0,y:50},{opacity:1,y:0,duration:.4,stagger:.2})}}(),v.forEach((function(u,D){var e=t.ZP.timeline({paused:!0}),n=u.mySplitText.chars;r.ScrollTrigger.create({trigger:u.$section,start:"top 65%",end:"bottom center",markers:!1,animation:e}),e.addLabel("step_1"),u.$subTitle&&e.fromTo(u.$subTitle,{opacity:0},{opacity:1,delay:.2,duration:.4},"step_1"),u.$item.length&&e.fromTo(u.$item,{opacity:0,y:100},{opacity:1,duration:.4,delay:.3,y:0,stagger:.6},"step_1+=0.6"),n&&e.fromTo(n,{opacity:0,y:80},{opacity:1,duration:.4,delay:.2,ease:"circ.out",y:0,stagger:.02},"step_1+=0.4"),u.$description.length&&e.fromTo(u.$description,{opacity:0},{opacity:1,delay:.2,duration:.4},"step_1+=0.8"),e.addLabel("step_4"),u.$link.length&&e.fromTo(u.$link,{opacity:0},{opacity:1,duration:.4},"step_4"),u.$textDecor&&e.fromTo(u.$textDecor,{opacity:0,y:60},{opacity:1,duration:.4,y:0,onComplete:function(){u.mySplitText.revert()}},"step_4")}))}}}}}},678:function(u,D){var e,t,r,n;function i(u){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(u){return typeof u}:function(u){return u&&"function"==typeof Symbol&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},i(u)}n=function(u){"use strict";function D(u,D){for(var e=0;e<D.length;e++){var t=D[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(u,t.key,t)}}function e(){return"undefined"!=typeof window}function t(){return r||e()&&(r=window.gsap)&&r.registerPlugin&&r}var r,n,i,o,s,l,a,c,F,C,p,d,f,h=(E.register=function(u){return n||(r=u||t(),e()&&window.document&&(i=window,o=document,s=o.documentElement,l=o.body),r&&(a=r.utils.toArray,c=r.utils.clamp,p=r.parseEase("expo"),F=r.core.globals().ScrollTrigger,r.core.globals("ScrollSmoother",E),l&&F&&(d=F.core._getVelocityProp,f=F.core._inputObserver,E.refresh=F.refresh,n=1))),n},function(u,e,t){e&&D(u.prototype,e),t&&D(u,t)}(E,[{key:"progress",get:function(){return this.scrollTrigger.animation._time/100}}]),E);function E(u){var D=this;function e(){return X.update(-G)}function t(){return w.style.overflow="visible"}function h(u){u.update();var D=u.getTween();D&&(D.pause(),D._time=D._dur,D._tTime=D._tDur),H=!1,u.animation.progress(u.progress,!0)}function g(u,D){(u!==G&&!R||D)&&(K&&(w.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+u+", 0, 1)"),J=u-G,G=u,F.isUpdating||F.update())}function y(u){return arguments.length?(R?G=-u:g(-u),uu.y=-u,H=!0,Y(u),this):-G-Y.offset}function v(u){T.scrollTop=0,Z&&!1===Z(D,u)||(F.isInViewport(u.target)||u.target===O||D.scrollTo(u.target,!1,"center center"),O=u.target)}function m(u){var D,e,t,n;k.forEach((function(i){D=i.pins,n=i.markers,u.forEach((function(u){u.trigger!==i.trigger&&u.pinnedContainer!==i.trigger||i===u||(e=u.start,t=(e-i.start-i.offset)/i.ratio-(e-i.start),D.forEach((function(u){return t-=u.distance/i.ratio-u.distance})),u.setPositions(e+t,u.end+t),u.markerStart&&n.push(r.quickSetter([u.markerStart,u.markerEnd],"y","px")),u.pin&&0<u.end&&(t=u.end-u.start,D.push({start:u.start,end:u.end,distance:t,trig:u}),i.setPositions(i.start,i.end+t),i.vars.onRefresh(i)))}))}))}function A(){t(),requestAnimationFrame(t),k&&(k.forEach((function(u){var D=u.start,e=u.auto?Math.min(F.maxScroll(u.scroller),u.end):D+(u.end-D)/u.ratio,t=(e-u.end)/2;D-=t,e-=t,u.offset=t||1e-4,u.pins.length=0,u.setPositions(Math.min(D,e),Math.max(D,e)),u.vars.onRefresh(u)})),m(F.sort())),X.reset()}function B(){return k&&k.forEach((function(u){return u.vars.onRefresh(u)}))}function b(){return k&&k.forEach((function(u){return u.vars.onRefreshInit(u)})),B}function S(u,D,e,t){return function(){var r="function"==typeof D?D(e,t):D;return r||0===r||(r=t.getAttribute("data-"+u)||("speed"===u?1:0)),t.setAttribute("data-"+u,r),"auto"===r?r:parseFloat(r)}}function x(u,D,e,t){function n(){D=g(),e=y(),a=parseFloat(D)||1,h=(d="auto"===D)?0:.5,f&&f.kill(),f=e&&r.to(u,{ease:p,overwrite:!1,y:"+=0",duration:e}),C&&(C.ratio=a,C.autoSpeed=d)}function o(){m.y=v+"px",m.renderTransform(1),n()}function l(D){if(d){o();var e=function(u,D){var e,t,r=u.parentNode||s,n=u.getBoundingClientRect(),o=r.getBoundingClientRect(),l=o.top-n.top,a=o.bottom-n.bottom,c=(Math.abs(l)>Math.abs(a)?l:a)/(1-D),F=-c*D;return 0<c&&(F+=-(t=.5==(e=o.height/(i.innerHeight+o.height))?2*o.height:2*Math.min(o.height,-c*e/(2*e-1)))/2,c+=t),{change:c,offset:F}}(u,c(0,1,-D.start/(D.end-D.start)));x=e.change,E=e.offset}else x=(D.end-D.start)*(1-a),E=0;A.forEach((function(u){return x-=u.distance*(1-a)})),D.vars.onUpdate(D),f&&f.progress(1)}var a,C,d,f,h,E,g=S("speed",D,t,u),y=S("lag",e,t,u),v=r.getProperty(u,"y"),m=u._gsap,A=[],B=[],x=0;return n(),(1!==a||d||f)&&(l(C=F.create({trigger:d?u.parentNode:u,scroller:T,scrub:!0,refreshPriority:-999,onRefreshInit:o,onRefresh:l,onKill:function(u){var D=k.indexOf(u);0<=D&&k.splice(D,1),o()},onUpdate:function(u){var D,e,t,n=v+x*(u.progress-h),i=A.length,o=0;if(u.offset){if(i){for(e=-G,t=u.end;i--;){if((D=A[i]).trig.isActive||e>=D.start&&e<=D.end)return void(f&&(D.trig.progress+=D.trig.direction<0?.001:-.001,D.trig.update(0,0,1),f.resetTo("y",parseFloat(m.y),-J,!0),Q&&f.progress(1)));e>D.end&&(o+=D.distance),t-=D.distance}n=v+o+x*((r.utils.clamp(u.start,u.end,e)-u.start-o)/(t-u.start)-h)}n=function(u){return Math.round(1e5*u)/1e5||0}(n+E),B.length&&!d&&B.forEach((function(u){return u(n-o)})),f?(f.resetTo("y",n,-J,!0),Q&&f.progress(1)):(m.y=n+"px",m.renderTransform(1))}}})),r.core.getCache(C.trigger).stRevert=b,C.startY=v,C.pins=A,C.markers=B,C.ratio=a,C.autoSpeed=d,u.style.willChange="transform"),C}n||E.register(r)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),u=this.vars=u||{},C&&C.kill(),C=this;var w,T,_,N,k,P,q,L,j,R,$,M,H,O,W=u.smoothTouch,V=u.onUpdate,z=u.onStop,I=u.smooth,Z=u.onFocusIn,U=u.normalizeScroll,Y=F.getScrollFunc(i),K=1===F.isTouch?!0===W?.8:parseFloat(W)||0:0===I||!1===I?0:parseFloat(I)||.8,G=0,J=0,Q=1,X=d(0),uu={y:0};function Du(){return _=w.clientHeight,w.style.overflow="visible",l.style.height=_+"px",_-i.innerHeight}F.addEventListener("refresh",A),r.delayedCall(.5,(function(){return Q=0})),this.scrollTop=y,this.scrollTo=function(u,e,t){var n=r.utils.clamp(0,F.maxScroll(i),isNaN(u)?D.offset(u,t):+u);e?R?r.to(D,{duration:K,scrollTop:n,overwrite:"auto",ease:p}):Y(n):y(n)},this.offset=function(u,D){var e,t=(u=a(u)[0]).style.cssText,n=F.create({trigger:u,start:D||"top top"});return k&&m([n]),e=n.start,n.kill(!1),u.style.cssText=t,r.core.getCache(u).uncache=1,e},this.content=function(u){if(arguments.length){var D=a(u||"#smooth-content")[0]||l.children[0];return D!==w&&(j=(w=D).getAttribute("style")||"",r.set(w,{overflow:"visible",width:"100%",boxSizing:"border-box"})),this}return w},this.wrapper=function(u){return arguments.length?(T=a(u||"#smooth-wrapper")[0]||function(u){var D=o.querySelector(".ScrollSmoother-wrapper");return D||((D=o.createElement("div")).classList.add("ScrollSmoother-wrapper"),u.parentNode.insertBefore(D,u),D.appendChild(u)),D}(w),L=T.getAttribute("style")||"",Du(),r.set(T,K?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):T},this.effects=function(u,D){if(k=k||[],!u)return k.slice(0);(u=a(u)).forEach((function(u){for(var D=k.length;D--;)k[D].trigger===u&&(k[D].kill(),k.splice(D,1))}));var e,t,r=(D=D||{}).speed,n=D.lag,i=[];for(e=0;e<u.length;e++)(t=x(u[e],r,n,e))&&i.push(t);return k.push.apply(k,i),i},this.sections=function(u,D){if(P=P||[],!u)return P.slice(0);var e=a(u).map((function(u){return F.create({trigger:u,start:"top 120%",end:"bottom -20%",onToggle:function(D){u.style.opacity=D.isActive?"1":"0",u.style.pointerEvents=D.isActive?"all":"none"}})}));return D&&D.add?P.push.apply(P,e):P=e.slice(0),e},this.content(u.content),this.wrapper(u.wrapper),this.render=function(u){return g(u||0===u?u:G)},this.getVelocity=function(){return X.getVelocity(-G)},F.scrollerProxy(T,{scrollTop:y,scrollHeight:function(){return Du()&&l.scrollHeight},fixedMarkers:!1!==u.fixedMarkers&&!!K,content:w,getBoundingClientRect:function(){return{top:0,left:0,width:i.innerWidth,height:i.innerHeight}}}),F.defaults({scroller:T});var eu=F.getAll().filter((function(u){return u.scroller===i||u.scroller===T}));eu.forEach((function(u){return u.revert(!0)})),N=F.create({animation:r.to(uu,{y:function(){return-Du()},ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){var u=H;u&&(uu.y=G,h(N)),g(uu.y,u),e(),V&&!R&&V(D)}}),onRefreshInit:function(){M=G,uu.y=T.scrollTop=0},id:"ScrollSmoother",scroller:i,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:Du,onScrubComplete:function(){X.reset(),z&&z(D)},scrub:K||!0,onRefresh:function(u){h(u),uu.y=-Y(),g(uu.y),Q||u.animation.progress(r.utils.clamp(0,1,M/-u.end))}}),this.smooth=function(u){return K=u,arguments.length?N.scrubDuration(u):N.getTween()?N.getTween().duration():0},N.getTween()&&(N.getTween().vars.ease=u.ease||p),this.scrollTrigger=N,u.effects&&this.effects(!0===u.effects?"[data-speed], [data-lag]":u.effects,{}),u.sections&&this.sections(!0===u.sections?"[data-section]":u.sections),eu.forEach((function(u){u.vars.scroller=T,u.init(u.vars,u.animation)})),this.paused=function(u,D){return arguments.length?(!!R!==u&&(u?(N.getTween()&&N.getTween().pause(),Y(-G),X.reset(),($=F.normalizeScroll())&&$.disable(),(R=F.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return y(-G)}})).nested=f(s,"wheel,touch,scroll",!0,!1!==D)):(R.nested.kill(),R.kill(),R=0,$&&$.enable(),N.progress=(-G-N.start)/(N.end-N.start),h(N))),this):!!R},this.kill=function(){D.paused(!1),h(N),N.kill();for(var u=(k||[]).concat(P||[]),e=u.length;e--;)u[e].kill();F.scrollerProxy(T),F.removeEventListener("refresh",A),l.style.removeProperty("height"),T.style.cssText=L,w.style.cssText=j;var t=F.defaults({});t&&t.scroller===T&&F.defaults({scroller:i}),D.normalizer&&F.normalizeScroll(!1),clearInterval(q),C=null,i.removeEventListener("focusin",v)},this.refresh=function(u,D){return N.refresh(u,D)},U&&(this.normalizer=F.normalizeScroll(!0===U?{debounce:!0,content:w}:U)),F.config(u),"overscrollBehavior"in i.getComputedStyle(l)&&r.set([l,s],{overscrollBehavior:"none"}),"scrollBehavior"in i.getComputedStyle(l)&&r.set([l,s],{scrollBehavior:"auto"}),i.addEventListener("focusin",v),q=setInterval(e,250),"loading"===o.readyState||requestAnimationFrame((function(){return F.refresh()}))}h.version="3.10.4",h.create=function(u){return C&&u&&C.content()===a(u.content)[0]?C:new h(u)},h.get=function(){return C},t()&&r.registerPlugin(h),u.ScrollSmoother=h,u.default=h,"undefined"==typeof window||window!==u?Object.defineProperty(u,"__esModule",{value:!0}):delete u.default},"object"==i(D)?n(D):(t=[D],void 0===(r="function"==typeof(e=n)?e.apply(D,t):e)||(u.exports=r))},107:function(u,D){var e,t,r,n;function i(u){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(u){return typeof u}:function(u){return u&&"function"==typeof Symbol&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},i(u)}n=function(u){"use strict";var D=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function e(u){return h.getComputedStyle(u)}function t(u,D){var e;return m(u)?u:"string"==(e=i(u))&&!D&&u?A.call(f.querySelectorAll(u),0):u&&"object"==e&&"length"in u?A.call(u,0):u?[u]:[]}function r(u){return"absolute"===u.position||!0===u.absolute}function n(u,D){for(var e,t=D.length;-1<--t;)if(e=D[t],u.substr(0,e.length)===e)return e.length}function o(u,D){void 0===u&&(u="");var e=~u.indexOf("++"),t=1;return e&&(u=u.split("++").join("")),function(){return"<"+D+" style='position:relative;display:inline-block;'"+(u?" class='"+u+(e?t++:"")+"'>":">")}}function s(u,D,e){var t=u.nodeType;if(1===t||9===t||11===t)for(u=u.firstChild;u;u=u.nextSibling)s(u,D,e);else 3!==t&&4!==t||(u.nodeValue=u.nodeValue.split(D).join(e))}function l(u,D){for(var e=D.length;-1<--e;)u.push(D[e])}function a(u,D,e){for(var t;u&&u!==D;){if(t=u._next||u.nextSibling)return t.textContent.charAt(0)===e;u=u.parentNode||u._parent}}function c(u){var D,e,r=t(u.childNodes),n=r.length;for(D=0;D<n;D++)(e=r[D])._isSplit?c(e):D&&e.previousSibling&&3===e.previousSibling.nodeType?(e.previousSibling.nodeValue+=3===e.nodeType?e.nodeValue:e.firstChild.nodeValue,u.removeChild(e)):3!==e.nodeType&&(u.insertBefore(e.firstChild,e),u.removeChild(e))}function F(u,D){return parseFloat(D[u])||0}function C(u,D,t,n,i,o,C){var p,d,h,E,g,y,v,m,A,B,b,S,x=e(u),w=F("paddingLeft",x),T=-999,_=F("borderBottomWidth",x)+F("borderTopWidth",x),N=F("borderLeftWidth",x)+F("borderRightWidth",x),k=F("paddingTop",x)+F("paddingBottom",x),P=F("paddingLeft",x)+F("paddingRight",x),q=F("fontSize",x)*(D.lineThreshold||.2),L=x.textAlign,j=[],R=[],$=[],M=D.wordDelimiter||" ",H=D.tag?D.tag:D.span?"span":"div",O=D.type||D.split||"chars,words,lines",W=i&&~O.indexOf("lines")?[]:null,V=~O.indexOf("words"),z=~O.indexOf("chars"),I=r(D),Z=D.linesClass,U=~(Z||"").indexOf("++"),Y=[],K="flex"===x.display,G=u.style.display;for(U&&(Z=Z.split("++").join("")),K&&(u.style.display="block"),h=(d=u.getElementsByTagName("*")).length,g=[],p=0;p<h;p++)g[p]=d[p];if(W||I)for(p=0;p<h;p++)((y=(E=g[p]).parentNode===u)||I||z&&!V)&&(S=E.offsetTop,W&&y&&Math.abs(S-T)>q&&("BR"!==E.nodeName||0===p)&&(v=[],W.push(v),T=S),I&&(E._x=E.offsetLeft,E._y=S,E._w=E.offsetWidth,E._h=E.offsetHeight),W&&((E._isSplit&&y||!z&&y||V&&y||!V&&E.parentNode.parentNode===u&&!E.parentNode._isSplit)&&(v.push(E),E._x-=w,a(E,u,M)&&(E._wordEnd=!0)),"BR"===E.nodeName&&(E.nextSibling&&"BR"===E.nextSibling.nodeName||0===p)&&W.push([])));for(p=0;p<h;p++)if(y=(E=g[p]).parentNode===u,"BR"!==E.nodeName)if(I&&(A=E.style,V||y||(E._x+=E.parentNode._x,E._y+=E.parentNode._y),A.left=E._x+"px",A.top=E._y+"px",A.position="absolute",A.display="block",A.width=E._w+1+"px",A.height=E._h+"px"),!V&&z)if(E._isSplit)for(E._next=d=E.nextSibling,E.parentNode.appendChild(E);d&&3===d.nodeType&&" "===d.textContent;)E._next=d.nextSibling,E.parentNode.appendChild(d),d=d.nextSibling;else E.parentNode._isSplit?(E._parent=E.parentNode,!E.previousSibling&&E.firstChild&&(E.firstChild._isFirst=!0),E.nextSibling&&" "===E.nextSibling.textContent&&!E.nextSibling.nextSibling&&Y.push(E.nextSibling),E._next=E.nextSibling&&E.nextSibling._isFirst?null:E.nextSibling,E.parentNode.removeChild(E),g.splice(p--,1),h--):y||(S=!E.nextSibling&&a(E.parentNode,u,M),E.parentNode._parent&&E.parentNode._parent.appendChild(E),S&&E.parentNode.appendChild(f.createTextNode(" ")),"span"===H&&(E.style.display="inline"),j.push(E));else E.parentNode._isSplit&&!E._isSplit&&""!==E.innerHTML?R.push(E):z&&!E._isSplit&&("span"===H&&(E.style.display="inline"),j.push(E));else W||I?(E.parentNode&&E.parentNode.removeChild(E),g.splice(p--,1),h--):V||u.appendChild(E);for(p=Y.length;-1<--p;)Y[p].parentNode.removeChild(Y[p]);if(W){for(I&&(B=f.createElement(H),u.appendChild(B),b=B.offsetWidth+"px",S=B.offsetParent===u?0:u.offsetLeft,u.removeChild(B)),A=u.style.cssText,u.style.cssText="display:none;";u.firstChild;)u.removeChild(u.firstChild);for(m=" "===M&&(!I||!V&&!z),p=0;p<W.length;p++){for(v=W[p],(B=f.createElement(H)).style.cssText="display:block;text-align:"+L+";position:"+(I?"absolute;":"relative;"),Z&&(B.className=Z+(U?p+1:"")),$.push(B),h=v.length,d=0;d<h;d++)"BR"!==v[d].nodeName&&(E=v[d],B.appendChild(E),m&&E._wordEnd&&B.appendChild(f.createTextNode(" ")),I&&(0===d&&(B.style.top=E._y+"px",B.style.left=w+S+"px"),E.style.top="0px",S&&(E.style.left=E._x-S+"px")));0===h?B.innerHTML="&nbsp;":V||z||(c(B),s(B,String.fromCharCode(160)," ")),I&&(B.style.width=b,B.style.height=E._h+"px"),u.appendChild(B)}u.style.cssText=A}I&&(C>u.clientHeight&&(u.style.height=C-k+"px",u.clientHeight<C&&(u.style.height=C+_+"px")),o>u.clientWidth&&(u.style.width=o-P+"px",u.clientWidth<o&&(u.style.width=o+N+"px"))),K&&(G?u.style.display=G:u.style.removeProperty("display")),l(t,j),V&&l(n,R),l(i,$)}function p(u,e,t,i){var o,l,a,c,F,C,p,d,h=e.tag?e.tag:e.span?"span":"div",E=~(e.type||e.split||"chars,words,lines").indexOf("chars"),g=r(e),m=e.wordDelimiter||" ",A=" "!==m?"":g?"&#173; ":" ",B="</"+h+">",b=1,S=e.specialChars?"function"==typeof e.specialChars?e.specialChars:n:null,x=f.createElement("div"),w=u.parentNode;for(w.insertBefore(x,u),x.textContent=u.nodeValue,w.removeChild(u),p=-1!==(o=function u(D){var e=D.nodeType,t="";if(1===e||9===e||11===e){if("string"==typeof D.textContent)return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)t+=u(D)}else if(3===e||4===e)return D.nodeValue;return t}(u=x)).indexOf("<"),!1!==e.reduceWhiteSpace&&(o=o.replace(v," ").replace(y,"")),p&&(o=o.split("<").join("{{LT}}")),F=o.length,l=(" "===o.charAt(0)?A:"")+t(),a=0;a<F;a++)if(C=o.charAt(a),S&&(d=S(o.substr(a),e.specialChars)))C=o.substr(a,d||1),l+=E&&" "!==C?i()+C+"</"+h+">":C,a+=d-1;else if(C===m&&o.charAt(a-1)!==m&&a){for(l+=b?B:"",b=0;o.charAt(a+1)===m;)l+=A,a++;a===F-1?l+=A:")"!==o.charAt(a+1)&&(l+=A+t(),b=1)}else"{"===C&&"{{LT}}"===o.substr(a,6)?(l+=E?i()+"{{LT}}</"+h+">":"{{LT}}",a+=5):55296<=C.charCodeAt(0)&&C.charCodeAt(0)<=56319||65024<=o.charCodeAt(a+1)&&o.charCodeAt(a+1)<=65039?(c=((o.substr(a,12).split(D)||[])[1]||"").length||2,l+=E&&" "!==C?i()+o.substr(a,c)+"</"+h+">":o.substr(a,c),a+=c-1):l+=E&&" "!==C?i()+C+"</"+h+">":C;u.outerHTML=l+(b?B:""),p&&s(w,"{{LT}}","<")}function d(u,D,n,i){var o,s,l=t(u.childNodes),a=l.length,c=r(D);if(3!==u.nodeType||1<a){for(D.absolute=!1,o=0;o<a;o++)(s=l[o])._next=s._isFirst=s._parent=s._wordEnd=null,3===s.nodeType&&!/\S+/.test(s.nodeValue)||(c&&3!==s.nodeType&&"inline"===e(s).display&&(s.style.display="inline-block",s.style.position="relative"),s._isSplit=!0,d(s,D,n,i));return D.absolute=c,void(u._isSplit=!0)}p(u,D,n,i)}var f,h,E,g,y=/(?:\r|\n|\t\t)/g,v=/(?:\s\s+)/g,m=Array.isArray,A=[].slice,B=((g=b.prototype).split=function(u){this.isSplit&&this.revert(),this.vars=u=u||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var D,e,t,r=this.elements.length,n=u.tag?u.tag:u.span?"span":"div",i=o(u.wordsClass,n),s=o(u.charsClass,n);-1<--r;)t=this.elements[r],this._originals[r]=t.innerHTML,D=t.clientHeight,e=t.clientWidth,d(t,u,i,s),C(t,u,this.chars,this.words,this.lines,e,D);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},g.revert=function(){var u=this._originals;if(!u)throw"revert() call wasn't scoped properly.";return this.elements.forEach((function(D,e){return D.innerHTML=u[e]})),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},b.create=function(u,D){return new b(u,D)},b);function b(u,D){E||(f=document,h=window,E=1),this.elements=t(u),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=D||{},this.split(D)}B.version="3.10.4",u.SplitText=B,u.default=B,"undefined"==typeof window||window!==u?Object.defineProperty(u,"__esModule",{value:!0}):delete u.default},"object"==i(D)?n(D):(t=[D],void 0===(r="function"==typeof(e=n)?e.apply(D,t):e)||(u.exports=r))}}]);