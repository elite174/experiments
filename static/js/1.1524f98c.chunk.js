webpackJsonp([1],{59:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),s=n(74),l=(n.n(s),n(62)),c=n(76),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=function(t){function e(){var t,n,i,a;r(this,e);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),i.state={scrollState:0},i.height=2e3,i.scroll=Object(l.g)(function(t){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:i).setState({scrollState:t.target.scrollTop})}),i.WPAnim=[{selector:"text-container",properties:[{property:"scale",keyframes:[{state:0,value:1},{state:100,value:2}],unit:"",transform:!0},{property:"opacity",keyframes:[{state:0,value:0},{state:33,value:1},{state:66,value:1},{state:100,value:0}],unit:""},{property:"translateY",keyframes:[{state:0,value:50},{state:100,value:0}],unit:"px",transform:!0}]}],a=n,o(i,a)}return i(e,t),u(e,[{key:"render",value:function(){return Object(a.e)(1,"div","scroll-scene",[Object(a.e)(1,"div","scroll-container",Object(a.e)(1,"div","scroll-view",null,1,{style:{height:this.height}}),2,{onScroll:this.scroll}),Object(a.c)(2,c.a,{animation:this.WPAnim,scrollState:this.state.scrollState,start:"0%",end:"30%",length:this.height})],4)}}]),e}(a.a);e.default=f},62:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"g",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"f",function(){return s}),n.d(e,"c",function(){return l}),n.d(e,"b",function(){return c});var r=function(t,e){return t+Math.round(Math.random()*(e-t))},o=function(t){return t+"px"},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:17,n=void 0;return function(){if(!n){var r=arguments,o=this;t.apply(o,r),n=!0,setTimeout(function(){return n=!1},e)}}},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],null),r=!0,o=Math.round(1e3/e);return{pause:function(){clearInterval(n),r=!0},play:function(){r=!1,n=setInterval(t,16)},isPaused:function(){return r},setFPS:function(t){o=1e3/t},destroy:function(){n=null,r=null,o=null}}},s=function(t,e,n){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,i=document.getElementsByClassName(t),a=0;a<i.length;a++)i[a].style[e]=void 0!==o?""+(parseInt(i[a].getAttribute(o))+n)+r:void 0!==r?""+n+r:n},l=function(t){return t[r(0,t.length-1)]},c=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[],o=n;if("function"===typeof t)for(var i=0;i<e;i++)r.push(t());else for(var a=0;a<e;a++)r.push(t+o),o+=n;return r}},74:function(t,e,n){var r=n(75);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0,o.insertInto=void 0;n(56)(r,o);r.locals&&(t.exports=r.locals)},75:function(t,e,n){e=t.exports=n(55)(!0),e.push([t.i,".scroll-container{width:100%;height:100%;overflow-y:scroll;opacity:0;position:absolute}.scroll-view{opacity:0;height:2000px}.scroll-scene{position:relative;height:100vh;width:100vw}.scroll-hello{position:absolute}","",{version:3,sources:["/Users/macbook/experiments/src/experiments/Scroll/style.css"],names:[],mappings:"AAAA,kBACI,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,UAAW,AACX,iBAAmB,CACtB,AAED,aACI,UAAW,AACX,aAAe,CAClB,AAED,cACI,kBAAmB,AACnB,aAAc,AACd,WAAa,CAChB,AAED,cACI,iBAAmB,CACtB",file:"style.css",sourcesContent:[".scroll-container {\n    width: 100%;\n    height: 100%;\n    overflow-y: scroll;\n    opacity: 0;\n    position: absolute;\n}\n\n.scroll-view {\n    opacity: 0;\n    height: 2000px;\n}\n\n.scroll-scene {\n    position: relative;\n    height: 100vh;\n    width: 100vw;\n}\n\n.scroll-hello {\n    position: absolute;\n}"],sourceRoot:""}])},76:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=n(0),s=n(77),l=n(79),c=(n.n(l),function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()),u=Object(s.a)(function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),c(e,[{key:"render",value:function(){return Object(a.e)(1,"div","text-container",Object(a.e)(1,"div","text",Object(a.d)("There are several movies I like"),2),2)}}]),e}(a.a));e.a=u},77:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return function(e){function n(t){r(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));e.computeAnimation=function(t){var n=!0,r=!1,o=void 0;try{for(var i,a=e.animation[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=i.value,c=[],u=!0,f=!1,p=void 0;try{for(var y,h=s.properties[Symbol.iterator]();!(u=(y=h.next()).done);u=!0){var v=y.value;if(t>=v.animStart&&t<=v.animEnd)for(var A=0;A<v.keyframes.length-1;A++)if(v.keyframes[A].state<=t&&v.keyframes[A+1].state>=t){c.push({property:v.property,value:v.keyframes[A].value+(v.keyframes[A+1].value-v.keyframes[A].value)/(v.keyframes[A+1].state-v.keyframes[A].state)*(t-v.keyframes[A].state),unit:v.unit,transform:v.transform});break}}}catch(t){f=!0,p=t}finally{try{!u&&h.return&&h.return()}finally{if(f)throw p}}Object(l.b)(s.selector,c)}}catch(t){r=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}},e.state={visible:Number((e.props.length/100*parseFloat(e.props.start)).toFixed(2))>=0,start:Number((e.props.length/100*parseFloat(e.props.start)).toFixed(2)),end:Number((e.props.length/100*parseFloat(e.props.end)).toFixed(2))},e.animation=[];var i=!0,a=!1,s=void 0;try{for(var c,u=e.props.animation[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var f=c.value;e.animation.push(new l.a(f.selector,f.properties,e.state.start,e.state.end))}}catch(t){a=!0,s=t}finally{try{!i&&u.return&&u.return()}finally{if(a)throw s}}return e}return i(n,e),c(n,[{key:"componentWillReceiveProps",value:function(t,e){var n=this;t.scrollState>=this.state.start&&t.scrollState<=this.state.end?this.state.visible?this.computeAnimation(t.scrollState):this.setState({visible:!0},function(){return n.computeAnimation(t.scrollState)}):this.state.visible&&this.setState({visible:!1})}},{key:"render",value:function(){return this.state.visible?Object(s.h)(Object(s.c)(2,t,Object.assign({start:this.state.start,end:this.state.end},this.props))):null}}]),n}(s.a)}e.a=a;var s=n(0),l=(n(11),n(78)),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},78:function(t,e,n){"use strict";function r(t,e,n,r){this.selector=t;var o=[],i=r-n,a=!0,s=!1,l=void 0;try{for(var c,u=e[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var f=c.value,p=[],y=!0,h=!1,v=void 0;try{for(var A,b=f.keyframes[Symbol.iterator]();!(y=(A=b.next()).done);y=!0){var m=A.value;p.push(Object.assign({},m,{state:Math.round(n+m.state*i/100)}))}}catch(t){h=!0,v=t}finally{try{!y&&b.return&&b.return()}finally{if(h)throw v}}o.push({property:f.property,keyframes:p,unit:f.unit,transform:f.transform,animStart:p[0].state,animEnd:p[p.length-1].state})}}catch(t){s=!0,l=t}finally{try{!a&&u.return&&u.return()}finally{if(s)throw l}}this.properties=o}n.d(e,"b",function(){return o}),e.a=r;var o=function(t,e){var n=document.getElementsByClassName(t),r=void 0,o=!0,i=!1,a=void 0;try{for(var s,l=n[Symbol.iterator]();!(o=(s=l.next()).done);o=!0){var c=s.value;r="";var u=!0,f=!1,p=void 0;try{for(var y,h=e[Symbol.iterator]();!(u=(y=h.next()).done);u=!0){var v=y.value;v.transform?r+=" "+v.property+"("+v.value+v.unit+")":c.style[v.property]=""+v.value+v.unit}}catch(t){f=!0,p=t}finally{try{!u&&h.return&&h.return()}finally{if(f)throw p}}c.style.transform=r}}catch(t){i=!0,a=t}finally{try{!o&&l.return&&l.return()}finally{if(i)throw a}}}},79:function(t,e,n){var r=n(80);"string"===typeof r&&(r=[[t.i,r,""]]);var o={hmr:!1};o.transform=void 0,o.insertInto=void 0;n(56)(r,o);r.locals&&(t.exports=r.locals)},80:function(t,e,n){e=t.exports=n(55)(!0),e.push([t.i,".text-container{color:#b01515;font-size:20px;font-weight:800;position:absolute;width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;top:40%}","",{version:3,sources:["/Users/macbook/experiments/src/experiments/Scroll/ScollObjects/WannaParallax/style.css"],names:[],mappings:"AAAA,gBACI,cAAwB,AACxB,eAAgB,AAChB,gBAAiB,AACjB,kBAAmB,AACnB,WAAY,AACZ,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAsB,AAClB,uBAAwB,AAC5B,OAAS,CACZ",file:"style.css",sourcesContent:[".text-container {\n    color: rgb(176, 21, 21);\n    font-size: 20px;\n    font-weight: 800;\n    position: absolute;\n    width: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    top: 40%;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=1.1524f98c.chunk.js.map