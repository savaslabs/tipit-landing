(this.webpackJsonptipit=this.webpackJsonptipit||[]).push([[0],[,function(e,t,a){e.exports={body:"appstyles_body__1WI_Y",container:"appstyles_container__1zCM8",label:"appstyles_label__7nTHQ",helper:"appstyles_helper__1ho5R",normalText:"appstyles_normalText__1t-HD",clearButton:"appstyles_clearButton__SrfMC",inputGroup:"appstyles_inputGroup__GSkwK",inputRow:"appstyles_inputRow__3wWaa",footer:"appstyles_footer__1lX5b",tableWrapper:"appstyles_tableWrapper__2zTL7"}},,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/x-close.749fc1ce.svg"},function(e,t,a){e.exports=a.p+"static/media/x-close-pink.af3523aa.svg"},,,,,,function(e,t,a){e.exports=a(57)},,,,,function(e,t,a){},,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/dashes.188e66f7.svg"},function(e,t,a){e.exports=a.p+"static/media/dashes-white.69f83b20.svg"},function(e,t,a){e.exports=a.p+"static/media/ava-blue.256311d1.svg"},function(e,t,a){e.exports=a.p+"static/media/labs.c7c96ed0.svg"},function(e,t,a){e.exports=a.p+"static/media/info.a21bafa4.svg"},function(e,t,a){e.exports=a.p+"static/media/info-white.023d2d3e.svg"},,,function(e,t,a){e.exports=a.p+"static/media/settings.6ae6bc54.svg"},function(e,t,a){e.exports=a.p+"static/media/settings-white.89059317.svg"},function(e,t,a){e.exports=a.p+"static/media/savas-logo-name.06fb7ad9.svg"},function(e,t,a){e.exports=a.p+"static/media/savas-logo-name-dark.aae17549.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),o=a.n(r),i=(a(33),a(2)),c=a(11),s="#FFFFFF",m="#252525",u="#F35A69",d="#828282",p={text:"#000000",clear:"#FF0000",link:"#0000EE",background:s,row:"#d3d3d3",inputBorder:d},g={default:Object(c.a)({},p),light:Object(c.a)({},p),dark:Object(c.a)(Object(c.a)({},p),{},{text:s,background:m,link:u,clear:u,row:d})},h=l.a.createContext(),f=function(){var e=Object(n.useContext)(h).theme;return{colors:e?g[e]:g.default,theme:e}},v=h,b=a(3),E=a(7),y=a.n(E),C=function(){var e=Object(n.useContext)(v).useTheme().colors;return l.a.createElement("h1",{style:{color:e.text,fontSize:36,marginTop:30,paddingBottom:10}},"tipit")},x=function(){var e=Object(n.useContext)(v),t=e.theme,r=e.useTheme().colors;return l.a.createElement("img",{src:a("light"===t?45:46),alt:"dashes",style:{maxWidth:500,width:"100%",paddingTop:10,paddingBottom:10,backgroundColor:r.background}})},w=a(1),N=a.n(w),_=function(){var e,t;y.a.setAppElement("#root");var r=Object(n.useContext)(v),o=r.theme,c=r.useTheme().colors,s=l.a.useState(!1),m=Object(i.a)(s,2),u=m[0],d=m[1];function p(){d(!1)}var g=null===(e=document.getElementById("tipit-preview"))||void 0===e?void 0:e.getBoundingClientRect(),h={height:(null===g||void 0===g?void 0:g.height)-20,left:null===g||void 0===g?void 0:g.left,top:null===g||void 0===g?void 0:g.top,width:(null===g||void 0===g?void 0:g.width)-20,margin:10,background:null};return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{isOpen:u,onAfterOpen:function(){},onRequestClose:p,style:{overlay:h,content:(t={backgroundColor:c.background,border:"none",width:"auto"},Object(b.a)(t,"width",h.width),Object(b.a)(t,"position","absolute"),Object(b.a)(t,"top",0),Object(b.a)(t,"left",0),Object(b.a)(t,"right",0),Object(b.a)(t,"bottom",0),t)}},l.a.createElement("div",{className:N.a.container,style:{color:c.text}},l.a.createElement("div",{className:N.a.inputRow,style:{alignItems:"baseline",justifyContent:"space-between",marginTop:-10}},l.a.createElement("button",{className:N.a.button,style:{padding:15,border:"none",backgroundColor:c.background},onClick:p},l.a.createElement("img",{className:N.a.icon,src:a("light"===o?21:22),alt:"close button"})),l.a.createElement("div",null,l.a.createElement(C,null)),l.a.createElement("div",{style:{paddingLeft:"14%"}})),l.a.createElement(x,null),l.a.createElement("div",null,l.a.createElement("div",{className:N.a.normalText,style:{textAlign:"center",paddingTop:15}},"What is this app?"),l.a.createElement("div",{className:N.a.label,style:{textAlign:"center",paddingTop:15}},"A means to enhance palindromic whimsy."),l.a.createElement("div",{className:N.a.footer,style:{position:"absolute",bottom:10,width:"90%"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},l.a.createElement("div",null,"(c) Savas Labs 2020"),l.a.createElement("div",{style:{paddingRight:10}},l.a.createElement("img",{alt:"Savas logo - Ava the owl",src:a(47)}))),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("a",{style:{color:c.link},href:"https://savaslabs.com"},"Learn more about our #labs initiative."),l.a.createElement("div",null,l.a.createElement("img",{style:{textAlign:"center"},src:a(48),alt:"Savas labs initiative logo"}))),l.a.createElement(x,null))))),l.a.createElement("button",{type:"image",id:"openInfo",style:{padding:5,border:"none",backgroundColor:c.background},onClick:function(){d(!0)}},l.a.createElement("img",{className:N.a.icon,src:a("light"===o?49:50),alt:"info icon"})))},j=a(72);function k(){var e=Object(n.useContext)(v);return l.a.createElement(j.a,{onChange:e.toggleTheme,checked:"light"!==e.theme})}var O=a(14),T=function(e){var t=e.value,a=e.onChange,r=Object(O.a)(e,["value","onChange"]),o=Object(n.useContext)(v).useTheme().colors;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",alignItems:"baseline",maxWidth:60,marginRight:15,color:o.text}},l.a.createElement("label",{style:{display:"none"},for:r.id},r.id),l.a.createElement("input",{style:{minWidth:40,paddingRight:20,textAlign:"right",backgroundColor:o.background,color:o.text},type:"number",min:"0",max:"100",step:"1",value:t,onChange:function(e){return a(e.target.value)},id:r.id}),l.a.createElement("span",{className:N.a.label,style:{marginLeft:-20}},"%")))},S=function(){var e=Object(n.useContext)(v),t=e.useTheme().colors,a=e.defaultTipLow,r=e.defaultTipHigh;return l.a.createElement("div",{style:{color:t.text}},l.a.createElement("h2",{className:N.a.normalText,style:{textAlign:"center"}},"Settings"),l.a.createElement("div",{className:N.a.inputRow},l.a.createElement("div",{className:N.a.label},"Low tip default:"),l.a.createElement(T,{value:a,onChange:e.updateTipLowContext})),l.a.createElement("div",{className:N.a.inputRow,style:{marginTop:20}},l.a.createElement("div",{className:N.a.label},"High tip default:"),l.a.createElement(T,{value:r,onChange:e.updateTipHighContext})),l.a.createElement("div",{className:N.a.inputRow,style:{marginTop:20}},l.a.createElement("div",{className:N.a.label},"Dark Mode:"),l.a.createElement(k,null)))},F=function(){var e,t;y.a.setAppElement("#root");var r=Object(n.useContext)(v),o=r.theme,c=r.useTheme().colors,s=l.a.useState(!1),m=Object(i.a)(s,2),u=m[0],d=m[1];function p(){d(!1)}var g=null===(e=document.getElementById("tipit-preview"))||void 0===e?void 0:e.getBoundingClientRect(),h={height:(null===g||void 0===g?void 0:g.height)-20,left:null===g||void 0===g?void 0:g.left,top:null===g||void 0===g?void 0:g.top,width:(null===g||void 0===g?void 0:g.width)-20,margin:10,background:null};return l.a.createElement("div",null,l.a.createElement(y.a,{isOpen:u,onRequestClose:p,style:{overlay:h,content:(t={backgroundColor:c.background,border:"none",width:"auto"},Object(b.a)(t,"width",h.width),Object(b.a)(t,"position","absolute"),Object(b.a)(t,"top",0),Object(b.a)(t,"left",0),Object(b.a)(t,"right",0),Object(b.a)(t,"bottom",0),t)}},l.a.createElement("div",{className:N.a.container},l.a.createElement("div",{className:N.a.inputRow,style:{marginTop:-10,alignItems:"baseline",justifyContent:"space-between"}},l.a.createElement("div",{style:{paddingLeft:"14%"}}),l.a.createElement("div",null,l.a.createElement(C,null)),l.a.createElement("button",{className:N.a.button,style:{padding:15,border:"none",backgroundColor:c.background},onClick:p},l.a.createElement("img",{className:N.a.icon,src:a("light"===o?21:22),alt:"close button"}))),l.a.createElement(x,null),l.a.createElement(S,null),l.a.createElement(x,null))),l.a.createElement("button",{id:"openSettings",style:{padding:5,border:"none",backgroundColor:c.background},onClick:function(){d(!0)}},l.a.createElement("img",{className:N.a.icon,src:a("light"===o?53:54),alt:"settings icon"})))},L=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},l.a.createElement(_,null),l.a.createElement(C,null),l.a.createElement(F,null)),l.a.createElement(x,null))},B=a(16),R=function(e){var t=e.value,a=e.onChange,r=Object(O.a)(e,["value","onChange"]),o=Object(n.useContext)(v).useTheme().colors;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",color:o.text}},l.a.createElement("span",{className:N.a.label},"$"),l.a.createElement("input",{style:{paddingLeft:5,backgroundColor:o.background,color:o.text,maxWidth:150},type:"number",min:"0",max:"10000",step:".01",value:t,onChange:function(e){return a(e.target.value)},id:r.id})))},M=function(e){var t=e.results,a=Object(n.useContext)(v).useTheme().colors;return l.a.createElement("div",{className:N.a.tableWrapper},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",style:{background:a.background}},"Bill"),l.a.createElement("th",{scope:"col",style:{background:a.background}},"Tip"),l.a.createElement("th",{scope:"col",style:{textAlign:"right",background:a.background}},"Total")),t.map((function(e){var t=e.bill,a=e.tip,n=e.total;return l.a.createElement("tr",{key:a},l.a.createElement("td",{key:t,style:{textAlign:"left"}},"$",t," +"," "),l.a.createElement("td",{key:a,style:{textAlign:"left"}},"$",a),l.a.createElement("td",{key:n,style:{textAlign:"right"}},"= $",n))})))))},A=0;function H(e){var t=e.toLowerCase().replace(".","");return t.split("").reverse().join("")===t}function I(e,t,a){return function(e,t){for(var a=[],n=e;n<=t;n+=.01){var l=n.toFixed(2);H(l.toString())&&a.push(parseFloat(l))}return a}(e*t*.01,e*a*.01)}function W(e,t,a,n){this.id=e,this.bill=t,this.tip=a,this.total=n}var Z=function(){var e=Object(n.useContext)(v),t=e.useTheme().colors,a=Object(n.useState)(e.defaultTipLow),r=Object(i.a)(a,2),o=r[0],c=r[1],s=Object(n.useState)(e.defaultTipHigh),m=Object(i.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(""),g=Object(i.a)(p,2),h=g[0],f=g[1],b=Object(n.useState)([]),E=Object(i.a)(b,2),y=E[0],C=E[1],w=Object(n.useState)(""),_=Object(i.a)(w,2),j=_[0],k=_[1],O=function(){var e=parseFloat(h),t=parseFloat(o),a=parseFloat(u);if(!(e&&t&&a&&t<=a))return[];var n=I(e,t,a),l=function(e,t){var a,n,l=[],r=e.toFixed(2).toString(),o=Object(B.a)(t);try{for(o.s();!(n=o.n()).done;){a=n.value;var i=Number(a)+Number(e),c=a.toFixed(2).toString(),s=i.toFixed(2).toString(),m=new W(A.toString(),r,c,s);l.push(m),A+=1}}catch(u){o.e(u)}finally{o.f()}return l}(e,n),r=function(e,t){var a,n,l=[],r=e.toFixed(2).toString(),o=Object(B.a)(t);try{for(o.s();!(n=o.n()).done;){a=n.value;var i=(Number(e)+Number(a)).toFixed(2).toString(),c=a.toFixed(2).toString();if(H(i)){var s=new W(A.toString(),r,c,i);l.push(s)}A+=1}}catch(m){o.e(m)}finally{o.f()}return l}(e,n);return r&&r.length?(k("Woot! There are "+r.length+" ways for the tip AND total to be palindromes!"),r):n&&n.length?(k("You can tip in "+n.length+" palindromes!"),l):void 0};return Object(n.useEffect)((function(){C(O)}),[h,o,u]),l.a.createElement("div",{style:{marginLeft:5,marginRight:5,backgroundColor:t.background}},l.a.createElement("div",{className:N.a.inputRow},l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("label",{htmlFor:"bill",name:"bill",id:"bill","aria-label":"Bill amount",className:N.a.label},"Your Bill:"),l.a.createElement("div",{className:N.a.helper},"Pre-tip amount")),l.a.createElement(R,{id:"bill",label:"Bill",value:h,onChange:function(e){f(e)}})),l.a.createElement("div",{className:N.a.inputRow,style:{marginTop:20}},l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("div",{className:N.a.label},"Tip Range:"),l.a.createElement("div",{className:N.a.helper},"Low to high")),l.a.createElement("div",{className:N.a.inputGroup},l.a.createElement(T,{id:"Tip percentage low",value:e.defaultTipLow,onChange:function(t){c(t),e.updateTipLowContext(t)}}),l.a.createElement("div",{className:N.a.normalText,style:{paddingRight:5}},"to"),l.a.createElement(T,{id:"Tip percentage high",value:e.defaultTipHigh,onChange:function(t){d(t),e.updateTipHighContext(t)}}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{minHeight:50,paddingTop:10,display:"flex",alignItems:"flex-end"}},y.length>0&&l.a.createElement("div",{className:N.a.inputRow,style:{width:"100%",alignItems:"flex-end"}},l.a.createElement("div",{className:N.a.normalText,style:{textAlign:"left"}},j),l.a.createElement("button",{onClick:function(){f(""),k("")},className:N.a.clearButton,"aria-label":"Clear button",style:{padding:10,color:t.clear}},"X Clear")))),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(x,null),y.length>0&&l.a.createElement(M,{results:y}))))},D=function(){return l.a.createElement("div",{style:{position:"fixed",left:0,right:0,bottom:10,maxWidth:"100%"}},l.a.createElement(x,null))},G=function(){var e=Object(n.useContext)(v),t=e.useTheme().colors,r=Object(n.useState)("none"),o=Object(i.a)(r,2),c=o[0],s=o[1],m=function(){s("none"===c?"lightgray":"none")},u=l.a.useRef(null),d=l.a.useState(null),p=Object(i.a)(d,2),g=p[0],h=p[1];return l.a.useEffect((function(){if(u.current){var e=u.current.getContext("2d");e.canvas.width=window.innerWidth,e.canvas.height=window.innerHeight,e.font="20px JetBrains Mono",e.fillStyle="rgba(102, 199, 112, .08)";for(var t=Math.floor(e.canvas.width/21),a=Math.floor(e.canvas.height/21),n=["0","1"],l=[],r=0;r<a;r++)for(var o=0;o<t;o++)l.push({x:21*o,y:21*r,value:n[Math.floor(Math.random()*n.length)],hasDrawn:!1});for(var i,c,s=Date.now(),m=0,d=l;m<d.length;m++){var p=d[m];e.clearRect(p.x,p.y,21,21),e.fillText(p.value,p.x,p.y+21),p.hasDrawn=!0}!function t(){if(window.requestAnimationFrame(t),i=Date.now(),(c=i-s)>100){for(var a=0,r=l;a<r.length;a++){var o=r[a];if(!0===o.hasDrawn&&100*Math.random()>95){var m=o.value===n[1]?n[0]:n[1];e.clearRect(o.x,o.y,21,21),e.fillText(m,o.x,o.y+21),o.value=m}}s=i-c%100}}(),e&&h(e)}}),[g]),l.a.createElement(l.a.Fragment,null,l.a.createElement("main",{className:"main"},l.a.createElement("div",{className:"container h-100"},l.a.createElement("div",{className:"row h-100 justify-space-between"},l.a.createElement("div",{className:"col-md-7 my-auto"},l.a.createElement("h1",{className:"my-4"},"tipit"),l.a.createElement("p",{className:"main__text pb-4"},"Why leave boring tip amounts when you can tip in palindrome? Excellent question! Tipit quickly calculates gratuity that will add a little bit of numerical fun to your next bill."),l.a.createElement("div",{className:"row w-100 my-auto justify-content-between"},l.a.createElement("div",{className:"col-lg-6 highlight__text my-auto"},"Coming Soon to the ",l.a.createElement("br",null),"App Store & Google Play"),l.a.createElement("div",{className:"col-lg m-auto"},l.a.createElement("div",{className:"toggle__wrapper"},l.a.createElement("input",{className:"toggle-input",id:"toggle-input",type:"checkbox",onChange:e.toggleTheme,checked:"dark"===e.theme,"aria-label":"Dark mode toggle",onFocus:m,onBlur:m}),l.a.createElement("svg",{className:"toggle",width:"226",height:"78",viewBox:"0 0 226 78",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("g",{filter:"url(#filter0_d)"},l.a.createElement("rect",{x:"10",y:"8",width:"206",height:"58",rx:"29",fill:"white",stroke:c,"stroke-width":"4"})),l.a.createElement("rect",{className:"shade",x:"10",y:"8",width:"110",height:"58",rx:"29"}),l.a.createElement("path",{className:"moon",d:"M179.375 39.4758C178.846 39.0617 178.119 39.0156 177.542 39.3592C172.389 42.4321 165.821 41.6171 161.57 37.3775C157.325 33.1437 156.508 26.6033 159.583 21.4724C159.929 20.8956 159.886 20.1648 159.476 19.6327C159.065 19.1004 158.37 18.876 157.727 19.0675C154.911 19.9053 152.318 21.4498 150.228 23.5342C146.857 26.8968 145 31.3682 145 36.1247C145 40.8813 146.857 45.3526 150.228 48.715C153.705 52.1831 158.272 53.9167 162.839 53.9163C163.571 53.9162 164.303 53.8711 165.031 53.7819C166.049 53.5061 167.083 53.2854 168.125 53.1211C170.807 52.2956 173.331 50.8278 175.45 48.7149C177.541 46.6294 179.09 44.0414 179.931 41.2305C180.124 40.5864 179.903 39.8898 179.375 39.4758Z"}),l.a.createElement("g",{className:"sun"},l.a.createElement("path",{className:"sun__part",d:"M64.5 45.6492C59.4551 45.6492 55.3507 41.5449 55.3507 36.4999C55.3507 31.4549 59.4551 27.3506 64.5 27.3506C69.5449 27.3506 73.6493 31.455 73.6493 36.4999C73.6493 41.5448 69.5449 45.6492 64.5 45.6492ZM64.5 29.9873C60.909 29.9873 57.9874 32.9089 57.9874 36.4999C57.9874 40.0909 60.9089 43.0125 64.5 43.0125C68.0911 43.0125 71.0126 40.0909 71.0126 36.4999C71.0126 32.9089 68.091 29.9873 64.5 29.9873Z"}),l.a.createElement("path",{className:"sun__part",d:"M64.5 24.2016C63.7719 24.2016 63.1816 23.6113 63.1816 22.8832V15.3184C63.1816 14.5903 63.7719 14 64.5 14C65.2281 14 65.8184 14.5903 65.8184 15.3184V22.8832C65.8184 23.6113 65.2281 24.2016 64.5 24.2016Z"}),l.a.createElement("path",{className:"sun__part",d:"M54.8715 28.19C54.5341 28.19 54.1967 28.0613 53.9393 27.8039L48.5901 22.4547C48.0752 21.9398 48.0752 21.1051 48.5901 20.5902C49.1048 20.0754 49.9396 20.0754 50.4545 20.5902L55.8037 25.9394C56.3185 26.4542 56.3185 27.2889 55.8037 27.8038C55.5463 28.0612 55.2089 28.19 54.8715 28.19Z"}),l.a.createElement("path",{className:"sun__part",d:"M50.8832 37.8184H43.3184C42.5903 37.8184 42 37.2281 42 36.5C42 35.7719 42.5903 35.1816 43.3184 35.1816H50.8832C51.6113 35.1816 52.2016 35.7719 52.2016 36.5C52.2016 37.2281 51.6113 37.8184 50.8832 37.8184Z"}),l.a.createElement("path",{className:"sun__part",d:"M49.5223 52.7959C49.1849 52.7959 48.8475 52.6672 48.5901 52.4097C48.0753 51.8948 48.0753 51.0601 48.5901 50.5453L53.9393 45.1961C54.4542 44.6814 55.289 44.6814 55.8037 45.1961C56.3186 45.711 56.3186 46.5457 55.8037 47.0606L50.4545 52.4098C50.1971 52.6671 49.8597 52.7959 49.5223 52.7959Z"}),l.a.createElement("path",{className:"sun__part",d:"M64.5 58.9999C63.7719 58.9999 63.1816 58.4096 63.1816 57.6815V50.1167C63.1816 49.3886 63.7719 48.7983 64.5 48.7983C65.2281 48.7983 65.8184 49.3886 65.8184 50.1167V57.6815C65.8184 58.4096 65.2281 58.9999 64.5 58.9999Z"}),l.a.createElement("path",{className:"sun__part",d:"M79.4777 52.7958C79.1403 52.7958 78.8029 52.6672 78.5456 52.4097L73.1964 47.0606C72.6815 46.5458 72.6815 45.7111 73.1964 45.1962C73.7111 44.6813 74.5459 44.6813 75.0608 45.1962L80.41 50.5453C80.9248 51.0602 80.9248 51.8949 80.41 52.4097C80.1525 52.6671 79.8151 52.7958 79.4777 52.7958Z"}),l.a.createElement("path",{className:"sun__part",d:"M85.6816 37.8184H78.1168C77.3887 37.8184 76.7984 37.2281 76.7984 36.5C76.7984 35.7719 77.3887 35.1816 78.1168 35.1816H85.6816C86.4097 35.1816 87 35.7719 87 36.5C87 37.2281 86.4097 37.8184 85.6816 37.8184Z"}),l.a.createElement("path",{className:"sun__part",d:"M74.1285 28.1899C73.7911 28.1899 73.4537 28.0612 73.1964 27.8037C72.6815 27.2889 72.6815 26.4542 73.1964 25.9393L78.5456 20.5902C79.0603 20.0755 79.8951 20.0753 80.41 20.5902C80.9248 21.105 80.9248 21.9397 80.41 22.4546L75.0608 27.8037C74.8033 28.0611 74.4658 28.1899 74.1285 28.1899Z"}),l.a.createElement("circle",{className:"sun__part",cx:"64.5",cy:"36.5002",r:"8.35714"})),l.a.createElement("defs",null,l.a.createElement("filter",{id:"filter0_d",x:"0",y:"0",width:"226",height:"78",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},l.a.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),l.a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),l.a.createElement("feOffset",{dy:"2"}),l.a.createElement("feGaussianBlur",{stdDeviation:"5"}),l.a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),l.a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),l.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})))))))),l.a.createElement("div",{className:"col-sm"},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"5%"}},l.a.createElement("p",{style:{fontSize:"21px",fontWeight:"600",marginRight:"10px"}},"try me"),l.a.createElement("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{className:"try-me__arrow","fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.8246 0H10.4153V16.1029H0L13.5964 27.9997L27.1927 16.1029H16.8246V0Z"}))),l.a.createElement("div",{className:"calculator",style:{backgroundColor:t.background,color:t.text},id:"tipit-preview"},l.a.createElement("span",{className:"calculator__top"}),l.a.createElement("div",{className:"w-100"},l.a.createElement(L,null),l.a.createElement(Z,null),l.a.createElement(D,null)))))),l.a.createElement("canvas",{id:"canvas",ref:u})),l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"footer__text"},"Powered by"),l.a.createElement("a",{href:"https://www.savaslabs.com/"},l.a.createElement("img",{src:"light"===e.theme?a(55):a(56),alt:"Savas labs logo",height:"50"})))))},V=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("18"),c=Object(i.a)(o,2),s=c[0],m=c[1],u=Object(n.useState)("25"),d=Object(i.a)(u,2),p=d[0],g=d[1],h=Object(n.useState)("light"),b=Object(i.a)(h,2),E=b[0],y=b[1],C={defaultTipLow:s,defaultTipHigh:p,theme:E,useTheme:f,toggleTheme:function(){var e=document.getElementById("theme");e.href.includes("light")?e.href="/tipit-landing/dark.css":e.href="/tipit-landing/light.css",y("light"===E?"dark":"light")},updateTipLowContext:function(e){m(e)},updateTipHighContext:function(e){g(e)}};return Object(n.useEffect)((function(){a?function(){try{var e=localStorage.getItem("@store:appContext"),t=JSON.parse(e),a=document.getElementById("theme");null!==t&&(m(t.defaultTipLow),g(t.defaultTipHigh),y(t.theme),a.href="/tipit-landing/"+t.theme+".css")}catch(n){console.log("No user setting data was retrieved")}r(!1)}():function(){try{localStorage.clear();var e={defaultTipLow:C.defaultTipLow,defaultTipHigh:C.defaultTipHigh,theme:C.theme};localStorage.setItem("@store:appContext",JSON.stringify(e))}catch(t){console.log("Error saving user settings.")}}()})),l.a.createElement(v.Provider,{value:C},l.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.9c6fa128.chunk.js.map