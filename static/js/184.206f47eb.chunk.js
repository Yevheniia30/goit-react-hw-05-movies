"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[184],{1844:function(e,t,n){n.d(t,{d:function(){return x}});var r={mWrapper:"MoviesInfo_mWrapper__e9Zid"},a=n(885),u=n(2791),c="Search_SearchForm__E1jYk",i="Search_SearchForm_button__sKGyb",o="Search_SearchForm_input__Eajgl",s=n(9135),p=n(184),f=function(e){var t=e.onSubmit,n=(0,u.useState)(""),r=(0,a.Z)(n,2),f=r[0],l=r[1];return(0,p.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault(),""!==f.trim()?(t(f),l("")):alert("Enter query")},children:[(0,p.jsx)("button",{type:"submit",className:i,children:(0,p.jsx)(s.U41,{})}),(0,p.jsx)("input",{className:o,value:f,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){l(e.target.value)}})]})},l=n(501),v="MovieItem_item__iPuYx",d="MovieItem_title__JQYXo",m=n(6871),h=function(e){var t,n=e.item,r=(0,m.TH)();return console.log("location",r),(0,p.jsx)("li",{className:v,children:(0,p.jsx)(l.rU,{to:"/"===(null===r||void 0===r?void 0:r.pathname)?"/movies/".concat(n.id):"".concat(n.id),state:{from:r},children:(0,p.jsx)("span",{className:d,children:null!==(t=n.title)&&void 0!==t?t:n.original_title})})})},_=n(2380),x=function(e){var t=e.isSearch,n=e.isHome,a=e.handleSubmit,u=e.isLoading,c=e.movies,i=e.error,o=e.notFound;return(0,p.jsxs)("div",{className:r.mWrapper,children:[t&&(0,p.jsx)(f,{onSubmit:a}),n&&(0,p.jsx)("h2",{children:"Trending today"}),u?(0,p.jsx)(_.a,{}):i?(0,p.jsx)("p",{children:"Something went wrong, try again"}):o?(0,p.jsx)("p",{children:o}):(0,p.jsx)("ul",{className:r.list,children:c.map((function(e){return(0,p.jsx)(h,{item:e},e.id)}))})]})}},4184:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(5861),a=n(885),u=n(7757),c=n.n(u),i=n(2791),o=n(4390),s=n(1844),p=n(501),f=n(184),l=function(){var e,t=(0,i.useState)([]),n=(0,a.Z)(t,2),u=n[0],l=n[1],v=(0,i.useState)(!1),d=(0,a.Z)(v,2),m=d[0],h=d[1],_=(0,i.useState)(null),x=(0,a.Z)(_,2),g=x[0],y=x[1],b=(0,i.useState)(null),S=(0,a.Z)(b,2),w=S[0],j=S[1],k=(0,p.lr)(),Z=(0,a.Z)(k,2),N=Z[0],F=Z[1],q=null!==(e=N.get("query"))&&void 0!==e?e:"";(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),j(null),y(null),e.prev=3,e.next=6,(0,o.gA)(q);case 6:(t=e.sent).length?l(t):j("No movies found for ".concat(q)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),y({error:e.t0});case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[3,10,13,16]])})));return function(){return e.apply(this,arguments)}}();q&&e()}),[q]);return(0,f.jsx)(s.d,{isSearch:!0,handleSubmit:function(e){F({query:e})},movies:u,isLoading:m,error:g,notFound:w})}},4390:function(e,t,n){n.d(t,{FB:function(){return h},MG:function(){return m},We:function(){return l},gA:function(){return d},tv:function(){return v}});var r=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c),o=n(2007),s=n.n(o),p="c4360f2fc66490777a6befee451fce21",f=i().create({baseURL:"https://api.themoviedb.org/3"}),l=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/trending/movie/day?api_key=".concat(p));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/movie/".concat(t,"?api_key=").concat(p));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/search/movie?api_key=".concat(p),{params:{query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/movie/".concat(t,"/credits?api_key=").concat(p));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/movie/".concat(t,"/reviews?api_key=").concat(p));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();h.propTypes={id:s().func.isRequired}}}]);
//# sourceMappingURL=184.206f47eb.chunk.js.map