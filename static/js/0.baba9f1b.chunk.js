webpackJsonp([0],{57:function(t,n,e){"use strict";function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?t:n}function i(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var r=e(0),A=e(64),s=(e.n(A),e(62)),c=e(12),l=function(){function t(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(n,e,a){return e&&t(n.prototype,e),a&&t(n,a),n}}(),p=function(t){function n(){var t,e,i,r;a(this,n);for(var A=arguments.length,c=Array(A),l=0;l<A;l++)c[l]=arguments[l];return e=i=o(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(c))),i.state={galaxy:Object(s.e)(1,5),muted:!1,playing:!1},i.layers=Object(s.b)("star",10),i.speeds=Object(s.b)(1,10,20),i.nextGalaxy=function(){i.setState({galaxy:i.state.galaxy+1===6?1:i.state.galaxy+1})},i.setPlaying=function(t){t?i.player.play():i.player.pause(),i.setState({playing:t})},i.setMuted=function(t){i.player.muted=t,i.setState({muted:t})},i.createStar=function(){var t=document.createElement("div");t.classList.add("galaxy__star"),t.classList.add(Object(s.c)(["galaxy__star--1","galaxy__star--2"])),t.classList.add(Object(s.c)(i.layers));var n=Object(s.e)(-5,105)+"%",e=Object(s.e)(-5,105)+"%";t.style.left=n,t.style.top=e,t.style.animationDuration=Object(s.e)(200,1200)+"ms";var a="hsl("+Object(s.e)(190,350)+", 62%, 69%)";t.style.backgroundColor=a,i.self.appendChild(t)},i.computeOffset=function(t){var n=t.pageX,e=t.pageY,a=window.innerWidth,o=Math.floor(a/2),r=window.innerHeight,A=Math.floor(r/2),c=(n-o)/o,l=(e-A)/A;for(var p in i.layers)Object(s.f)(i.layers[p],"transform","translateX("+c*i.speeds[p]+"px) translateY("+l*i.speeds[p]+"px)");Object(s.f)("galaxy__back","background-position",20*c+"px center")},r=e,o(i,r)}return i(n,t),l(n,[{key:"componentDidMount",value:function(){for(var t=Object(s.e)(100,200),n=0;n<t;n++)this.createStar()}},{key:"render",value:function(){var t=this;return Object(r.e)(1,"div","galaxy",[Object(r.e)(1,"div","galaxy__button-control",[Object(r.c)(2,c.a,{onClick:this.nextGalaxy}),Object(r.e)(1,"i","material-icons galaxy__icon",this.state.playing?"pause":"play_arrow",0,{onClick:function(){return t.setPlaying(!t.state.playing)}}),Object(r.e)(1,"i","material-icons galaxy__icon",this.state.muted?"volume_off":"volume_up",0,{onClick:function(){return t.setMuted(!t.state.muted)}})],4),Object(r.e)(1,"div","galaxy__back galaxy__back--"+this.state.galaxy,Object(r.e)(1,"audio",null,null,1,{id:"video",style:{left:"150px",position:"absolute",top:159,display:"none"},controls:"controls",src:"http://storage.mp3cc.org/listen/99278140/cVpnRlpvRVUyQ28wcjJHNXZtL1lOMmtJQWkxdmtTUlBrV1hBS0MrQ2V5SDc4M3RJbm1LL2hmSnRPaUJMYXJ1c0lmTWZPa2pQNUNZSlZVdFhvSVd6TGk1NGJ6RmJRamZFSGxpRytUMEhJcEpaQ0YrY0dCSHlRSldKdXhHWmtZV2E/mass-effect-end-titles-theme-ost_(mp3.cc).mp3"},null,function(n){return t.player=n}),2,{onMouseMove:function(n){window.requestAnimationFrame(function(){t.computeOffset(n)})}},null,function(n){return t.self=n})],4)}}]),n}(r.a);n.default=p},62:function(t,n,e){"use strict";e.d(n,"e",function(){return a}),e.d(n,"d",function(){return o}),e.d(n,"g",function(){return i}),e.d(n,"a",function(){return r}),e.d(n,"f",function(){return A}),e.d(n,"c",function(){return s}),e.d(n,"b",function(){return c});var a=function(t,n){return t+Math.round(Math.random()*(n-t))},o=function(t){return t+"px"},i=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:17,e=void 0;return function(){if(!e){var a=arguments,o=this;t.apply(o,a),e=!0,setTimeout(function(){return e=!1},n)}}},r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,e=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],null),a=!0,o=Math.round(1e3/n);return{pause:function(){clearInterval(e),a=!0},play:function(){a=!1,e=setInterval(t,16)},isPaused:function(){return a},setFPS:function(t){o=1e3/t},destroy:function(){e=null,a=null,o=null}}},A=function(t,n,e){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,i=document.getElementsByClassName(t),r=0;r<i.length;r++)i[r].style[n]=void 0!==o?""+(parseInt(i[r].getAttribute(o))+e)+a:void 0!==a?""+e+a:e},s=function(t){return t[a(0,t.length-1)]},c=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=[],o=e;if("function"===typeof t)for(var i=0;i<n;i++)a.push(t());else for(var r=0;r<n;r++)a.push(t+o),o+=e;return a}},63:function(t,n){t.exports=function(t){return"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},64:function(t,n,e){var a=e(65);"string"===typeof a&&(a=[[t.i,a,""]]);var o={hmr:!1};o.transform=void 0,o.insertInto=void 0;e(56)(a,o);a.locals&&(t.exports=a.locals)},65:function(t,n,e){var a=e(63);n=t.exports=e(55)(!0),n.push([t.i,".galaxy{width:100%;height:100%;position:relative;--white:hsla(0,0%,100%,.5);--white-hover:hsla(0,0%,100%,.9)}.galaxy__back{background-color:#1b1b1b;background-repeat:no-repeat;background-size:cover;background-position:50%;-webkit-transition-property:background-image;-o-transition-property:background-image;transition-property:background-image;-webkit-transition-duration:1s;-o-transition-duration:1s;transition-duration:1s;height:110%;width:110%;margin-left:-5%;margin-top:-5%}.galaxy__back--1{background-image:url("+a(e(66))+")}.galaxy__back--2{background-image:url("+a(e(67))+")}.galaxy__back--3{background-image:url("+a(e(68))+")}.galaxy__back--4{background-image:url("+a(e(69))+")}.galaxy__back--5{background-image:url("+a(e(70))+")}.galaxy__button{position:absolute;cursor:pointer;width:50px;height:50px;right:0;top:50px;background-color:red}.galaxy__star{position:absolute;background-color:#f5fdff;border-radius:50%;-webkit-box-shadow:0 0 3px 1px #fff;box-shadow:0 0 3px 1px #fff;-webkit-animation-name:star-animation;animation-name:star-animation;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.galaxy__star--1{width:2px;height:2px}.galaxy__star--2{width:1px;height:1px}#app{overflow:hidden}.galaxy__button-control{position:absolute;top:10%;right:0;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-ms-flex-direction:row-reverse;flex-direction:row-reverse;padding:15px}.galaxy__button-control,.galaxy__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.galaxy__icon{width:40px;height:40px;-ms-flex-pack:center;justify-content:center;font-size:40px;margin-right:40px;color:var(--white);-webkit-transition-property:color,-webkit-transform;transition-property:color,-webkit-transform;-o-transition-property:color,transform;transition-property:color,transform;transition-property:color,transform,-webkit-transform;-webkit-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s;cursor:pointer}.galaxy__icon:hover{-webkit-transform:scale(1.2);transform:scale(1.2);color:var(--white-hover)}@-webkit-keyframes star-animation{0%{-webkit-box-shadow:0 0 5px 1px #fff;box-shadow:0 0 5px 1px #fff}to{-webkit-box-shadow:0 0 5px 2px #fff;box-shadow:0 0 5px 2px #fff}}@keyframes star-animation{0%{-webkit-box-shadow:0 0 5px 1px #fff;box-shadow:0 0 5px 1px #fff}to{-webkit-box-shadow:0 0 5px 2px #fff;box-shadow:0 0 5px 2px #fff}}","",{version:3,sources:["/Users/macbook/experiments/src/experiments/Galaxy/style.css"],names:[],mappings:"AAAA,QACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,2BAAkC,AAClC,gCAAwC,CACzC,AAED,cACE,yBAAkC,AAClC,4BAA6B,AAC7B,sBAAuB,AACvB,wBAAmC,AACnC,6CAA8C,AAC9C,wCAAyC,AACzC,qCAAsC,AACtC,+BAAgC,AAC3B,0BAA2B,AACxB,uBAAwB,AAChC,YAAa,AACb,WAAY,AACZ,gBAAiB,AACjB,cAAgB,CACjB,AAED,iBACE,8CAA2C,CAC5C,AAED,iBACE,8CAA2C,CAC5C,AAED,iBACE,8CAA2C,CAC5C,AAED,iBACE,8CAA2C,CAC5C,AAED,iBACE,8CAA2C,CAC5C,AAED,gBACE,kBAAmB,AACnB,eAAgB,AAChB,WAAY,AACZ,YAAa,AACb,QAAS,AACT,SAAU,AACV,oBAAsB,CACvB,AAED,cACE,kBAAmB,AACnB,yBAAqC,AACrC,kBAAmB,AACnB,oCAAsC,AAC9B,4BAA8B,AACtC,sCAAuC,AAC/B,8BAA+B,AACvC,2CAA4C,AACpC,mCAAoC,AAC5C,sCAAuC,AAC/B,6BAA+B,CACxC,AAED,iBACE,UAAW,AACX,UAAY,CACb,AAED,iBACE,UAAW,AACX,UAAY,CACb,AAED,KACE,eAAiB,CAClB,AAED,wBACE,kBAAmB,AACnB,QAAQ,AACR,QAAS,AACT,0BAA2B,AAC3B,uBAAwB,AACxB,kBAAmB,AAGnB,+BAAgC,AAC5B,2BAA4B,AAChC,YAAc,CAGf,AAED,sCATE,oBAAqB,AACrB,aAAc,AAId,sBAAuB,AACnB,kBAAoB,CAwBzB,AArBD,cACE,WAAY,AACZ,YAAa,AAKb,qBAAsB,AAClB,uBAAwB,AAC5B,eAAgB,AAChB,kBAAmB,AACnB,mBAAoB,AACpB,oDAAsD,AACtD,4CAA8C,AAC9C,uCAAyC,AACzC,oCAAsC,AACtC,sDAAyD,AACzD,gCAAmC,AAC9B,2BAA8B,AAC3B,wBAA2B,AACnC,cAAgB,CACjB,AAED,oBACE,6BAA8B,AACtB,qBAAsB,AAC9B,wBAA0B,CAC3B,AAED,kCACE,GACE,oCAAsC,AAC9B,2BAA8B,CACvC,AACD,GACE,oCAAsC,AAC9B,2BAA8B,CACvC,CACF,AAED,0BACE,GACE,oCAAsC,AAC9B,2BAA8B,CACvC,AACD,GACE,oCAAsC,AAC9B,2BAA8B,CACvC,CACF",file:"style.css",sourcesContent:[".galaxy {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  --white: rgba(255, 255, 255, 0.5);\n  --white-hover: rgba(255, 255, 255, 0.9);\n}\n\n.galaxy__back {\n  background-color: rgb(27, 27, 27);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center center;\n  -webkit-transition-property: background-image;\n  -o-transition-property: background-image;\n  transition-property: background-image;\n  -webkit-transition-duration: 1s;\n       -o-transition-duration: 1s;\n          transition-duration: 1s;\n  height: 110%;\n  width: 110%;\n  margin-left: -5%;\n  margin-top: -5%;\n}\n\n.galaxy__back--1 {\n  background-image: url(assets/galaxy-1.jpg);\n}\n\n.galaxy__back--2 {\n  background-image: url(assets/galaxy-2.jpg);\n}\n\n.galaxy__back--3 {\n  background-image: url(assets/galaxy-3.jpg);\n}\n\n.galaxy__back--4 {\n  background-image: url(assets/galaxy-4.jpg);\n}\n\n.galaxy__back--5 {\n  background-image: url(assets/galaxy-5.jpg);\n}\n\n.galaxy__button {\n  position: absolute;\n  cursor: pointer;\n  width: 50px;\n  height: 50px;\n  right: 0;\n  top: 50px;\n  background-color: red;\n}\n\n.galaxy__star {\n  position: absolute;\n  background-color: rgb(245, 253, 255);\n  border-radius: 50%;\n  -webkit-box-shadow: 0 0 3px 1px white;\n          box-shadow: 0 0 3px 1px white;\n  -webkit-animation-name: star-animation;\n          animation-name: star-animation;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n\n.galaxy__star--1 {\n  width: 2px;\n  height: 2px;\n}\n\n.galaxy__star--2 {\n  width: 1px;\n  height: 1px;\n}\n\n#app {\n  overflow: hidden;\n}\n\n.galaxy__button-control {\n  position: absolute;\n  top:10%;\n  right: 0;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n  padding: 15px;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.galaxy__icon {\n  width: 40px;\n  height: 40px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  font-size: 40px;\n  margin-right: 40px;\n  color: var(--white);\n  -webkit-transition-property: color, -webkit-transform;\n  transition-property: color, -webkit-transform;\n  -o-transition-property: color, transform;\n  transition-property: color, transform;\n  transition-property: color, transform, -webkit-transform;\n  -webkit-transition-duration: 500ms;\n       -o-transition-duration: 500ms;\n          transition-duration: 500ms;\n  cursor: pointer;\n}\n\n.galaxy__icon:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  color: var(--white-hover);\n}\n\n@-webkit-keyframes star-animation {\n  from {\n    -webkit-box-shadow: 0 0 5px 1px white;\n            box-shadow: 0 0 5px 1px white;\n  }\n  to {\n    -webkit-box-shadow: 0 0 5px 2px white;\n            box-shadow: 0 0 5px 2px white;\n  }\n}\n\n@keyframes star-animation {\n  from {\n    -webkit-box-shadow: 0 0 5px 1px white;\n            box-shadow: 0 0 5px 1px white;\n  }\n  to {\n    -webkit-box-shadow: 0 0 5px 2px white;\n            box-shadow: 0 0 5px 2px white;\n  }\n}"],sourceRoot:""}])},66:function(t,n,e){t.exports=e.p+"static/media/galaxy-1.33ce2151.jpg"},67:function(t,n,e){t.exports=e.p+"static/media/galaxy-2.1af7650c.jpg"},68:function(t,n,e){t.exports=e.p+"static/media/galaxy-3.c53ab51d.jpg"},69:function(t,n,e){t.exports=e.p+"static/media/galaxy-4.90512c5f.jpg"},70:function(t,n,e){t.exports=e.p+"static/media/galaxy-5.882a4fa2.jpg"}});
//# sourceMappingURL=0.baba9f1b.chunk.js.map