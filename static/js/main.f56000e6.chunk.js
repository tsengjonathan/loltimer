(this.webpackJsonploltimer=this.webpackJsonploltimer||[]).push([[0],{60:function(e,t,n){e.exports=n(77)},65:function(e,t,n){},66:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},67:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),l=(n(65),n(66),n(67),n(11)),u=n(25),s=n.n(u),i=n(110),f=n(111),m=n(109),d=n(15),p=n.n(d),h=n(33);function g(){return v.apply(this,arguments)}function v(){return(v=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://ddragon.leagueoflegends.com/api/versions.json").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return n=e.sent,e.next=5,fetch("http://ddragon.leagueoflegends.com/cdn/".concat(n,"/data/en_US/champion/").concat(t,".json")).then((function(e){return e.json()}));case 5:return a=e.sent,e.abrupt("return",a.data[t]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.next=5,fetch("http://ddragon.leagueoflegends.com/cdn/".concat(t,"/data/en_US/champion.json")).then((function(e){return e.json()})).then((function(e){return e.data}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,e.next=5,fetch("http://ddragon.leagueoflegends.com/cdn/".concat(t,"/data/en_US/summoner.json")).then((function(e){return e.json()})).then((function(e){return e.data}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=n(118),S=n(117),w=n(35),y=n.n(w),k=n(39),x=n.n(k);function C(e){var t=e.duration,n=Object(a.useState)(!1),r=Object(l.a)(n,2),o=r[0],u=r[1],s=Object(a.useState)(t),i=Object(l.a)(s,2),f=i[0],m=i[1];Object(a.useEffect)((function(){m(t),u(!1)}),[t]),Object(a.useEffect)((function(){if(o&&f>0){var e=setInterval((function(){return m(f-1)}),1e3);return function(){clearInterval(e)}}0===f&&(u(!1),m(t))}),[o,f,t]);var d=o?c.a.createElement(y.a,null):c.a.createElement(x.a,null),p=c.a.createElement(S.a,null,"U");return c.a.createElement(O.a,{avatar:p,onDelete:function(){o&&m(t),u(!o)},label:f,deleteIcon:d})}var D=n(116);n(75);function I(e){var t=e.spellData,n=e.version,r=e.isOpen,o=e.onClose,l=e.setSpell,u=Object(a.useCallback)((function(e){l(e.target.title),o()}),[o,l]),s=[];return Object(a.useEffect)((function(){for(var e in t){var a=t[e],r="http://ddragon.leagueoflegends.com/cdn/".concat(n,"/img/spell/").concat(a.image.full);a.modes.includes("CLASSIC")&&s.push(c.a.createElement(m.a,{className:"summoner-icon",image:r,key:e,title:e,onClick:u}))}}),[u,t,s,n]),c.a.createElement(D.a,{open:r,onClose:o},s)}function N(e){var t=e.spell,n=e.setSpell,r=e.imgUrl,o=e.spellData,u=Object(a.useState)(!1),i=Object(l.a)(u,2),f=i[0],m=i[1],d=Object(a.useState)(-1),p=Object(l.a)(d,2),h=p[0],v=p[1],b=Object(a.useState)(!1),j=Object(l.a)(b,2),E=j[0],w=j[1],k=Object(a.useState)(""),C=Object(l.a)(k,2),D=C[0],N=C[1],U=o[t],F=s.a.get(U,"cooldown[0]",-1);Object(a.useEffect)((function(){g().then((function(e){return N(e)}))}),[]);var J=Object(a.useCallback)((function(){v(F),m(!1)}),[F]);Object(a.useEffect)((function(){J()}),[J]),Object(a.useEffect)((function(){if(f&&h>0){var e=setInterval((function(){return v(h-1)}),1e3);return function(){clearInterval(e)}}0===h&&J()}),[f,h,J]);var L=f?c.a.createElement(y.a,null):c.a.createElement(x.a,null),T=c.a.createElement(S.a,{src:r,alt:U});return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.a,{avatar:T,onClick:function(){f||w(!0)},onDelete:function(){f&&v(F),m(!f)},label:h,deleteIcon:L}),c.a.createElement(I,{isOpen:E,onClose:function(){w(!1)},spellData:o,version:D,setSpell:n}))}var U=n(112),F=n(115);var J=function(e){var t=e.id,n=e.onChange,r=Object(a.useState)([]),o=Object(l.a)(r,2),u=o[0],i=o[1];Object(a.useEffect)((function(){(function(){return j.apply(this,arguments)})().then((function(e){return i(s.a.values(e))}))}),[]);var f=u.map((function(e){return c.a.createElement(F.a,{key:e.id,value:e.id},e.name)}));return c.a.createElement(U.a,{value:t,onChange:n},f)};n(76);var L=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)("Taliyah"),u=Object(l.a)(o,2),d=u[0],p=u[1],h=Object(a.useState)({}),v=Object(l.a)(h,2),j=v[0],O=v[1],S=Object(a.useState)({}),w=Object(l.a)(S,2),y=w[0],k=w[1],x=Object(a.useState)("SummonerDot"),D=Object(l.a)(x,2),I=D[0],U=D[1],F=Object(a.useState)("SummonerFlash"),L=Object(l.a)(F,2),T=L[0],_=L[1],B="http://ddragon.leagueoflegends.com/cdn/".concat(n,"/img/champion/").concat(d,".png"),W="http://ddragon.leagueoflegends.com/cdn/".concat(n,"/img/spell/").concat(I,".png"),z="http://ddragon.leagueoflegends.com/cdn/".concat(n,"/img/spell/").concat(T,".png");Object(a.useEffect)((function(){g().then((function(e){return r(e)})),function(){return E.apply(this,arguments)}().then((function(e){return k(e)}))}),[]),Object(a.useEffect)((function(){(function(e){return b.apply(this,arguments)})(d).then((function(e){return O(e)}))}),[d]);var A=s.a.get(j.spells,"3.cooldown[0]",0);return n?c.a.createElement(i.a,{className:"card"},c.a.createElement(m.a,{className:"card-media",image:B,title:d}),c.a.createElement("div",{className:"card-details"},c.a.createElement(f.a,null,c.a.createElement(J,{id:d,onChange:function(e){p(e.target.value)}})),c.a.createElement("div",{className:"card-timers"},c.a.createElement(C,{duration:A}),c.a.createElement(N,{spell:I,setSpell:U,spellData:y,imgUrl:W}),c.a.createElement(N,{spell:T,setSpell:_,spellData:y,imgUrl:z})))):null};var T=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"column"},c.a.createElement(L,{id:"Jax"}),c.a.createElement(L,{id:"LeeSin"}),c.a.createElement(L,{id:"Taliyah"}),c.a.createElement(L,{id:"Caitlyn"}),c.a.createElement(L,{id:"Thresh"})),c.a.createElement("div",{className:"column"},c.a.createElement(L,{id:"Malphite"}),c.a.createElement(L,{id:"Kayn"}),c.a.createElement(L,{id:"Orianna"}),c.a.createElement(L,{id:"Ezreal"}),c.a.createElement(L,{id:"Leona"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.f56000e6.chunk.js.map