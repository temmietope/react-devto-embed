/*! For license information please see main.f8efc1f4.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-devto-embed-example"]=this["webpackJsonpreact-devto-embed-example"]||[]).push([[0],{3:function(e,t,r){e.exports=r(9)},4:function(e,t,r){},9:function(e,t,r){"use strict";r.r(t);r(4);var o=r(0),n=r.n(o),a=r(2),i=r.n(a);function s(e,t){return e(t={exports:{}},t.exports),t.exports}var c="function"===typeof Symbol&&Symbol.for,l=c?Symbol.for("react.element"):60103,p=c?Symbol.for("react.portal"):60106,u=c?Symbol.for("react.fragment"):60107,f=c?Symbol.for("react.strict_mode"):60108,m=c?Symbol.for("react.profiler"):60114,d=c?Symbol.for("react.provider"):60109,g=c?Symbol.for("react.context"):60110,b=c?Symbol.for("react.async_mode"):60111,y=c?Symbol.for("react.concurrent_mode"):60111,h=c?Symbol.for("react.forward_ref"):60112,x=c?Symbol.for("react.suspense"):60113,S=c?Symbol.for("react.suspense_list"):60120,w=c?Symbol.for("react.memo"):60115,C=c?Symbol.for("react.lazy"):60116,v=c?Symbol.for("react.block"):60121,T=c?Symbol.for("react.fundamental"):60117,O=c?Symbol.for("react.responder"):60118,E=c?Symbol.for("react.scope"):60119;function j(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case l:switch(e=e.type){case b:case y:case u:case m:case f:case x:return e;default:switch(e=e&&e.$$typeof){case g:case h:case C:case w:case d:return e;default:return t}}case p:return t}}}function P(e){return j(e)===y}var $={AsyncMode:b,ConcurrentMode:y,ContextConsumer:g,ContextProvider:d,Element:l,ForwardRef:h,Fragment:u,Lazy:C,Memo:w,Portal:p,Profiler:m,StrictMode:f,Suspense:x,isAsyncMode:function(e){return P(e)||j(e)===b},isConcurrentMode:P,isContextConsumer:function(e){return j(e)===g},isContextProvider:function(e){return j(e)===d},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===l},isForwardRef:function(e){return j(e)===h},isFragment:function(e){return j(e)===u},isLazy:function(e){return j(e)===C},isMemo:function(e){return j(e)===w},isPortal:function(e){return j(e)===p},isProfiler:function(e){return j(e)===m},isStrictMode:function(e){return j(e)===f},isSuspense:function(e){return j(e)===x},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===u||e===y||e===m||e===f||e===x||e===S||"object"===typeof e&&null!==e&&(e.$$typeof===C||e.$$typeof===w||e.$$typeof===d||e.$$typeof===g||e.$$typeof===h||e.$$typeof===T||e.$$typeof===O||e.$$typeof===E||e.$$typeof===v)},typeOf:j},z=(s((function(e,t){0})),s((function(e){e.exports=$})),Object.getOwnPropertySymbols),_=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;function R(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(n){return!1}})()&&Object.assign;var M="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function F(e,t,r,o,n){}F.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function B(){}function W(){}W.resetWarningCache=B;var H=s((function(e){e.exports=function(){function e(e,t,r,o,n,a){if(a!==M){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:W,resetWarningCache:B};return r.PropTypes=r,r}()}));function L(e){var t=Object(o.useState)(!1),r=t[0],n=t[1];return Object(o.useEffect)((function(){var t=window.matchMedia(e);t.matches!==r&&n(t.matches);var o=function(){n(t.matches)};return t.addListener(o),function(){return t.removeListener(o)}}),[r,e]),r}var D=function(e){var t,r=e.post,o=e.itemsPerRow,a=e.margin,i=e.postHeight,s=e.headerSize,c=e.headerColor,l=e.headerTextTransform,p=e.excerptSize,u=e.excerptColor,f=e.buttonBgColor,m=e.buttonFontColor,d=e.buttonText,g=L("(max-width: 768px)"),b=L("(max-width: 500px)"),y={a:{textDecoration:"none",color:"inherit"},postCard:{height:i?g?"100%":i:"20rem",borderRadius:"10px",padding:"1.5% 2%",boxSizing:"border-box",display:g?"flex":"grid",flexFlow:g&&"column",gridTemplateRows:"35% 10% 40% 15%",marginBottom:"1rem",margin:a?a+" 0":"1% 0",boxShadow:"0 0 1px 0 rgba(0,0,0,0.6)",width:[1,2,3,4].includes(o)&&!g?"calc(((1 / "+o+") * 100%) - "+(a||"1%")+")":"100%"},postHeader:{fontSize:s?g?"1.25rem":b?"1.05rem":s:"1.5rem",color:c||"#333",maxHeight:"100%",lineHeight:"110%",textTransform:l||"capitalize",margin:g?"1% 0":"0",padding:"0",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"2",overflow:"hidden"},postExcerpt:{fontSize:p?g?"0.95rem":b?"0.85rem":p:"1.05rem",color:u||"#333",margin:"2% 0"},postDate:{textAlign:"right",fontSize:b?"0.5rem":"0.7rem",margin:"0",padding:"0"},postButton:{cursor:"pointer",padding:g?"1.5% 3%":"2% 5%",boxSizing:"border-box",background:f||"linear-gradient(225deg, rgb(38, 60, 139) 0%, rgb(6, 14, 76) 100%)",color:m||"#fff",fontWeight:"700",border:"none",outline:"none",borderRadius:"5px",fontSize:b?"0.7rem":"0.9rem"}};return n.a.createElement("div",{style:y.postCard},n.a.createElement("h3",{style:y.postHeader},n.a.createElement("a",{href:r.canonical_url,target:"_blank",rel:"noopener noreferrer",style:y.a},r.title)),n.a.createElement("div",{style:y.postDate},n.a.createElement("span",null,(t=r.created_at,new Date(t).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})))),n.a.createElement("p",{style:y.postExcerpt},r.description),n.a.createElement("a",{href:r.canonical_url,target:"_blank",rel:"noopener noreferrer",style:{width:"100%"}},n.a.createElement("button",{style:y.postButton},d)))};D.propTypes={post:H.object,itemsPerRow:H.number,postHeight:H.string,margin:H.string,headerSize:H.string,headerColor:H.string,headerTextTransform:H.string,excerptSize:H.string,excerptColor:H.string,buttonBgColor:H.string,buttonFontColor:H.string,buttonText:H.string};var I=function(e){var t,r=e.username,a=e.itemsPerRow,i=e.postHeight,s=e.margin,c=e.headerSize,l=e.headerColor,p=e.headerTextTransform,u=e.excerptSize,f=e.excerptColor,m=e.buttonBgColor,d=e.buttonFontColor,g=e.buttonText,b=e.errorMessage,y=e.loadingMessage,h=L("(max-width: 768px)"),x=Object(o.useState)([]),S=x[0],w=x[1],C=Object(o.useState)(!0),v=C[0],T=C[1];Object(o.useEffect)((function(){fetch("https://dev.to/api/articles?username="+r).then((function(e){return e.json()})).then((function(e){T(!1),w(e)})).catch((function(){T(!1)}))}),[]);var O={postWrapper:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"},postContainer:(t={width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",flexDirection:h?"column":"row"},t.flexWrap=h?"no-wrap":"wrap",t)};return n.a.createElement("div",{style:O.postWrapper},v?n.a.createElement("div",{className:"loading"},y):!v&&S&&S.length>0?n.a.createElement("div",{className:"container",style:O.postContainer},S.map((function(e){return n.a.createElement(D,{post:e,key:e.id,itemsPerRow:a,postHeight:i,margin:s,headerSize:c,headerColor:l,headerTextTransform:p,excerptSize:u,excerptColor:f,buttonBgColor:m,buttonFontColor:d,buttonText:g})}))):n.a.createElement("div",{className:"error__page"}," ",b," "))};I.propTypes={username:H.string,itemsPerRow:H.number,postHeight:H.string,margin:H.string,headerSize:H.string,headerColor:H.string,headerTextTransform:H.string,excerptSize:H.string,excerptColor:H.string,buttonBgColor:H.string,buttonFontColor:H.string,buttonText:H.string,errorMessage:H.string,loadingMessage:H.string};var N=I,A=function(){return n.a.createElement(N,{username:"temmietope",itemsPerRow:2,postHeight:"15rem",margin:"1%",headerSize:"2rem",headerColor:"#333",headerTextTransform:"capitalize",excerptSize:"1.05rem",excerptColor:"#333",buttonBgColor:"linear-gradient(225deg, rgb(38, 60, 139) 0%, rgb(6, 14, 76) 100%)",buttonFontColor:"#f2f2f2",buttonText:"Read Post",loadingMessage:"Loading",errorMessage:"Nothing to display :)"})};i.a.render(n.a.createElement(A,null),document.getElementById("root"))}},[[3,1,2]]]);
//# sourceMappingURL=main.f8efc1f4.chunk.js.map