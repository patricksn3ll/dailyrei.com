import{_ as re,o as O,c as j,a as m,b as ye,f as $e,g as oe,i as g,h as A,j as c,k as w,p as x,l as Le,n as De,m as Ie,q as we,w as ee,s as be,F as xe,d as Ne,t as _e}from"./index-89f77940.js";const Oe={name:"Tag",components:{},props:{article:{type:String},category:{type:String},tag:{type:String},item:{type:Object}},setup(){},methods:{formatTweetText:function(){var e,a,t;return this.category?"https://twitter.com/intent/tweet?text="+encodeURI(`Latest in ${this.category}`)+" https://www.dailyrei.com/category/"+this.category:this.tag?"https://twitter.com/intent/tweet?text="+encodeURI(`Latest tagged ${this.tag}`)+" https://www.dailyrei.com/tag/"+this.tag:"https://twitter.com/intent/tweet?text="+encodeURI((a=(e=this.item)==null?void 0:e.metadata_title)==null?void 0:a.replaceAll('"',""))+" https://www.dailyrei.com/article/"+((t=this.item)==null?void 0:t.slug)},formatFacebookText:function(){var e,a,t;return this.category?"https://www.facebook.com/sharer/sharer.php?u="+encodeURI(`Latest in ${this.category}`)+" https://www.dailyrei.com/category/"+this.category:this.tag?"https://www.facebook.com/sharer/sharer.php?u="+encodeURI(`Latest tagged ${this.tag}`)+" https://www.dailyrei.com/tag/"+this.tag:"https://www.facebook.com/sharer/sharer.php?u="+encodeURI((a=(e=this.item)==null?void 0:e.metadata_title)==null?void 0:a.replaceAll('"',""))+" https://www.dailyrei.com/article/"+((t=this.item)==null?void 0:t.slug)}}},je={class:"tags-share-box page-share hide-tags tags-share-box-s1 center-box social-align-default post-share",style:{opacity:"1"}},Ee=m("span",{class:"penci-social-share-text"},[m("i",{class:"penciicon-sharing"}),ye("Share")],-1),Re=["href"],Pe=m("i",{class:"penci-faicon fa fa-facebook"},null,-1),Be=m("span",{class:"dt-share"},"Facebook",-1),Ve=[Pe,Be],Ue=["href"],ze=m("i",{class:"penci-faicon fa fa-twitter"},null,-1),He=m("span",{class:"dt-share"},"Twitter",-1),Xe=[ze,He];function Fe(e,a,t,s,r,n){return O(),j("div",je,[Ee,m("a",{class:"new-ver-share post-share-item post-share-facebook show","aria-label":"Share on Facebook",target:"_blank",rel:"noreferrer",href:n.formatFacebookText()},Ve,8,Re),m("a",{class:"new-ver-share post-share-item post-share-twitter show","aria-label":"Share on Twitter",target:"_blank",rel:"noreferrer",href:n.formatTweetText()},Xe,8,Ue)])}const bt=re(Oe,[["render",Fe]]),Ye={name:"Pagination",components:{},setup(){}},Ge={class:"post-pagination"},We=$e('<div class="prev-post"><div class="prev-post-inner"><div class="prev-post-title"><span>previous post</span></div><a href="https://soledad.pencidesign.net/soledad-art-magazine/the-night-life-of-moscow/"><div class="pagi-text"><h5 class="prev-title">The Night Life of Moscow</h5></div></a></div></div><div class="next-post"><div class="next-post-inner"><div class="prev-post-title next-post-title"><span>next post</span></div><a href="https://soledad.pencidesign.net/soledad-art-magazine/valencia-architecture-landscape/"><div class="pagi-text"><h5 class="next-title">Valencia Architecture Landscape</h5></div></a></div></div>',2),qe=[We];function Je(e,a,t,s,r,n){return O(),j("div",Ge,qe)}const _t=re(Ye,[["render",Je]]);/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const f={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Se={itemsToShow:{default:f.itemsToShow,type:Number},itemsToScroll:{default:f.itemsToScroll,type:Number},wrapAround:{default:f.wrapAround,type:Boolean},throttle:{default:f.throttle,type:Number},snapAlign:{default:f.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:f.transition,type:Number},breakpoints:{default:f.breakpoints,type:Object},autoplay:{default:f.autoplay,type:Number},pauseAutoplayOnHover:{default:f.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:f.mouseDrag,type:Boolean},touchDrag:{default:f.touchDrag,type:Boolean},dir:{default:f.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:f.i18n,type:Object},settings:{default(){return{}},type:Object}};function Ke({config:e,slidesCount:a}){const{snapAlign:t,wrapAround:s,itemsToShow:r=1}=e;if(s)return Math.max(a-1,0);let n;switch(t){case"start":n=a-r;break;case"end":n=a-1;break;case"center":case"center-odd":n=a-Math.ceil((r-.5)/2);break;case"center-even":n=a-Math.ceil(r/2);break;default:n=0;break}return Math.max(n,0)}function Qe({config:e,slidesCount:a}){const{wrapAround:t,snapAlign:s,itemsToShow:r=1}=e;let n=0;if(t||r>a)return n;switch(s){case"start":n=0;break;case"end":n=r-1;break;case"center":case"center-odd":n=Math.floor((r-1)/2);break;case"center-even":n=Math.floor((r-2)/2);break;default:n=0;break}return n}function te({val:e,max:a,min:t}){return a<t?e:Math.min(Math.max(e,t),a)}function Ze({config:e,currentSlide:a,slidesCount:t}){const{snapAlign:s,wrapAround:r,itemsToShow:n=1}=e;let l=a;switch(s){case"center":case"center-odd":l-=(n-1)/2;break;case"center-even":l-=(n-2)/2;break;case"end":l-=n-1;break}return r?l:te({val:l,max:t-n,min:0})}function Te(e){return e?e.reduce((a,t)=>{var s;return t.type===xe?[...a,...Te(t.children)]:((s=t.type)===null||s===void 0?void 0:s.name)==="CarouselSlide"?[...a,t]:a},[]):[]}function z({val:e,max:a,min:t=0}){return e>a?z({val:e-(a+1),max:a,min:t}):e<t?z({val:e+(a+1),max:a,min:t}):e}function et(e,a){let t;return a?function(...s){const r=this;t||(e.apply(r,s),t=!0,setTimeout(()=>t=!1,a))}:e}function tt(e,a){let t;return function(...s){t&&clearTimeout(t),t=setTimeout(()=>{e(...s),t=null},a)}}function Ae(e="",a={}){return Object.entries(a).reduce((t,[s,r])=>t.replace(`{${s}}`,String(r)),e)}var at=oe({name:"ARIA",setup(){const e=g("config",A(Object.assign({},f))),a=g("currentSlide",c(0)),t=g("slidesCount",c(0));return()=>w("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Ae(e.i18n.itemXofY,{currentSlide:a.value+1,slidesCount:t.value}))}}),nt=oe({name:"Carousel",props:Se,setup(e,{slots:a,emit:t,expose:s}){var r;const n=c(null),l=c([]),u=c(0),p=c(0),i=A(Object.assign({},f));let b=Object.assign({},f),S;const d=c((r=e.modelValue)!==null&&r!==void 0?r:0),$=c(0),E=c(0),T=c(0),D=c(0);let L,H;x("config",i),x("slidesCount",p),x("currentSlide",d),x("maxSlide",T),x("minSlide",D),x("slideWidth",u);function X(){S=Object.assign({},e.breakpoints),b=Object.assign(Object.assign(Object.assign({},b),e),{i18n:Object.assign(Object.assign({},b.i18n),e.i18n),breakpoints:void 0}),se(b)}function R(){if(!S||!Object.keys(S).length)return;const o=Object.keys(S).map(h=>Number(h)).sort((h,y)=>+y-+h);let v=Object.assign({},b);o.some(h=>{const y=window.matchMedia(`(min-width: ${h}px)`).matches;return y&&(v=Object.assign(Object.assign({},v),S[h])),y}),se(v)}function se(o){Object.entries(o).forEach(([v,h])=>i[v]=h)}const ie=tt(()=>{R(),I()},16);function I(){if(!n.value)return;const o=n.value.getBoundingClientRect();u.value=o.width/i.itemsToShow}function F(){p.value<=0||(E.value=Math.ceil((p.value-1)/2),T.value=Ke({config:i,slidesCount:p.value}),D.value=Qe({config:i,slidesCount:p.value}),i.wrapAround||(d.value=te({val:d.value,max:T.value,min:D.value})))}Le(()=>{De(()=>I()),setTimeout(()=>I(),1e3),R(),de(),window.addEventListener("resize",ie,{passive:!0}),t("init")}),Ie(()=>{H&&clearTimeout(H),L&&clearInterval(L),window.removeEventListener("resize",ie,{passive:!0})});let _=!1;const P={x:0,y:0},B={x:0,y:0},k=A({x:0,y:0}),V=c(!1),Y=c(!1),ke=()=>{V.value=!0},Me=()=>{V.value=!1};function le(o){["INPUT","TEXTAREA","SELECT"].includes(o.target.tagName)||(_=o.type==="touchstart",_||o.preventDefault(),!(!_&&o.button!==0||M.value)&&(P.x=_?o.touches[0].clientX:o.clientX,P.y=_?o.touches[0].clientY:o.clientY,document.addEventListener(_?"touchmove":"mousemove",ce,!0),document.addEventListener(_?"touchend":"mouseup",ue,!0)))}const ce=et(o=>{Y.value=!0,B.x=_?o.touches[0].clientX:o.clientX,B.y=_?o.touches[0].clientY:o.clientY;const v=B.x-P.x,h=B.y-P.y;k.y=h,k.x=v},i.throttle);function ue(){const o=i.dir==="rtl"?-1:1,v=Math.sign(k.x)*.4,h=Math.round(k.x/u.value+v)*o;if(h&&!_){const y=J=>{J.stopPropagation(),window.removeEventListener("click",y,!0)};window.addEventListener("click",y,!0)}C(d.value-h),k.x=0,k.y=0,Y.value=!1,document.removeEventListener(_?"touchmove":"mousemove",ce,!0),document.removeEventListener(_?"touchend":"mouseup",ue,!0)}function de(){!i.autoplay||i.autoplay<=0||(L=setInterval(()=>{i.pauseAutoplayOnHover&&V.value||U()},i.autoplay))}function fe(){L&&(clearInterval(L),L=null),de()}const M=c(!1);function C(o){const v=i.wrapAround?o:te({val:o,max:T.value,min:D.value});d.value===v||M.value||(t("slide-start",{slidingToIndex:o,currentSlideIndex:d.value,prevSlideIndex:$.value,slidesCount:p.value}),M.value=!0,$.value=d.value,d.value=v,H=setTimeout(()=>{if(i.wrapAround){const h=z({val:v,max:T.value,min:0});h!==d.value&&(d.value=h,t("loop",{currentSlideIndex:d.value,slidingToIndex:o}))}t("update:modelValue",d.value),t("slide-end",{currentSlideIndex:d.value,prevSlideIndex:$.value,slidesCount:p.value}),M.value=!1,fe()},i.transition))}function U(){C(d.value+i.itemsToScroll)}function G(){C(d.value-i.itemsToScroll)}const pe={slideTo:C,next:U,prev:G};x("nav",pe),x("isSliding",M);const he=we(()=>Ze({config:i,currentSlide:d.value,slidesCount:p.value}));x("slidesToScroll",he);const Ce=we(()=>{const o=i.dir==="rtl"?-1:1,v=he.value*u.value*o;return{transform:`translateX(${k.x-v}px)`,transition:`${M.value?i.transition:0}ms`,margin:i.wrapAround?`0 -${p.value*u.value}px`:"",width:"100%"}});function ge(){X(),R(),F(),I(),fe()}Object.keys(Se).forEach(o=>{["modelValue"].includes(o)||ee(()=>e[o],ge)}),ee(()=>e.modelValue,o=>{o!==d.value&&C(Number(o))}),ee(p,F),t("before-init"),X();const ve={config:i,slidesCount:p,slideWidth:u,next:U,prev:G,slideTo:C,currentSlide:d,maxSlide:T,minSlide:D,middleSlide:E};s({updateBreakpointsConfigs:R,updateSlidesData:F,updateSlideWidth:I,initDefaultConfigs:X,restartCarousel:ge,slideTo:C,next:U,prev:G,nav:pe,data:ve});const W=a.default||a.slides,q=a.addons,me=A(ve);return()=>{const o=Te(W==null?void 0:W(me)),v=(q==null?void 0:q(me))||[];o.forEach((K,Q)=>K.props.index=Q);let h=o;if(i.wrapAround){const K=o.map((Z,N)=>be(Z,{index:-o.length+N,isClone:!0,key:`clone-before-${N}`})),Q=o.map((Z,N)=>be(Z,{index:o.length+N,isClone:!0,key:`clone-after-${N}`}));h=[...K,...o,...Q]}l.value=o,p.value=Math.max(o.length,1);const y=w("ol",{class:"carousel__track",style:Ce.value,onMousedownCapture:i.mouseDrag?le:null,onTouchstartPassiveCapture:i.touchDrag?le:null},h),J=w("div",{class:"carousel__viewport"},y);return w("section",{ref:n,class:{carousel:!0,"is-sliding":M.value,"is-dragging":Y.value,"is-hover":V.value,"carousel--rtl":i.dir==="rtl"},dir:i.dir,"aria-label":i.i18n.ariaGallery,tabindex:"0",onMouseenter:ke,onMouseleave:Me},[J,v,w(at)])}}}),ae;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(ae||(ae={}));const rt={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function ot(e){return e in ae}const ne=e=>{const a=g("config",A(Object.assign({},f))),t=String(e.name),s=`icon${t.charAt(0).toUpperCase()+t.slice(1)}`;if(!t||typeof t!="string"||!ot(t))return;const r=rt[t],n=w("path",{d:r}),l=a.i18n[s]||e.title||t,u=w("title",l);return w("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":l},[u,n])};ne.props={name:String,title:String};const st=(e,{slots:a,attrs:t})=>{const{next:s,prev:r}=a||{},n=g("config",A(Object.assign({},f))),l=g("maxSlide",c(1)),u=g("minSlide",c(1)),p=g("currentSlide",c(1)),i=g("nav",{}),{dir:b,wrapAround:S,i18n:d}=n,$=b==="rtl",E=w("button",{type:"button",class:["carousel__prev",!S&&p.value<=u.value&&"carousel__prev--disabled",t==null?void 0:t.class],"aria-label":d.ariaPreviousSlide,onClick:i.prev},(r==null?void 0:r())||w(ne,{name:$?"arrowRight":"arrowLeft"})),T=w("button",{type:"button",class:["carousel__next",!S&&p.value>=l.value&&"carousel__next--disabled",t==null?void 0:t.class],"aria-label":d.ariaNextSlide,onClick:i.next},(s==null?void 0:s())||w(ne,{name:$?"arrowLeft":"arrowRight"}));return[E,T]},it=()=>{const e=g("config",A(Object.assign({},f))),a=g("maxSlide",c(1)),t=g("minSlide",c(1)),s=g("currentSlide",c(1)),r=g("nav",{}),n=u=>z({val:s.value,max:a.value,min:0})===u,l=[];for(let u=t.value;u<a.value+1;u++){const p=w("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":n(u)},"aria-label":Ae(e.i18n.ariaNavigateToSlide,{slideNumber:u+1}),onClick:()=>r.slideTo(u)}),i=w("li",{class:"carousel__pagination-item",key:u},p);l.push(i)}return w("ol",{class:"carousel__pagination"},l)};var lt=oe({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:a}){const t=g("config",A(Object.assign({},f))),s=g("currentSlide",c(0)),r=g("slidesToScroll",c(0)),n=g("isSliding",c(!1)),l=()=>e.index===s.value,u=()=>e.index===s.value-1,p=()=>e.index===s.value+1,i=()=>{const b=Math.floor(r.value),S=Math.ceil(r.value+t.itemsToShow-1);return e.index>=b&&e.index<=S};return()=>{var b;return w("li",{style:{width:`${100/t.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":i(),"carousel__slide--active":l(),"carousel__slide--prev":u(),"carousel__slide--next":p(),"carousel__slide--sliding":n.value},"aria-hidden":!i()},(b=a.default)===null||b===void 0?void 0:b.call(a))}}});const ct={name:"Related",components:{Carousel:nt,Slide:lt,Pagination:it,Navigation:st},data(){return{results:[]}},setup(){},methods:{fecthContent:function(){fetch("https://newscluster.azurewebsites.net/api/GetFeedItemsBy?filter=flagged&domain=dailyrei.com&offset=0&limit=6&score=0.1").then(a=>a.json()).then(a=>{this.results=a})},formatHref:function(e){return`/article/${e==null?void 0:e.slug.replaceAll('"',"")}`},formatCategoryHref:function(e){return`/category/${e.replaceAll('"',"")}`},formatImage:function(e){var a,t;return((a=e==null?void 0:e.image)==null?void 0:a.replaceAll('"',""))==""?"/src/assets/images/place-holder.png":(t=e==null?void 0:e.image)==null?void 0:t.replaceAll('"',"")},formatBgImage:function(e){return(e==null?void 0:e.image.replaceAll('"',""))==""?"background-image: url('/src/assets/images/place-holder.png');":`background-image: url('${e==null?void 0:e.image.replaceAll('"',"")}');`},formatAuthorHref:function(e){return`/author/${e==null?void 0:e.author.replaceAll('"',"")}`},formatTitle:function(e){return e==null?void 0:e.metadata_title.replaceAll('"',"")},formatPublishDate:function(e){var t;const a=(t=e==null?void 0:e.publishDate)==null?void 0:t.replaceAll('"',"");return new Date(a).toLocaleDateString()},formatTimeSince:function(e){let a=new Date(e==null?void 0:e.publishDate.replaceAll('"',"")),s=Math.floor((new Date().getTime()-a.getTime())/1e3),r=s/31536e3,n=Math.floor(r)==1?"":"s";return r>1?this.formatPublishDate(e):(r=s/2592e3,r>1?this.formatPublishDate(e):(r=s/86400,r>1?this.formatPublishDate(e):(r=s/3600,r>1?(n=Math.floor(r)==1?"":"s",Math.floor(r)+" hour"+n):(r=s/60,r>1?(n=Math.floor(r)==1?"":"s",Math.floor(r)+" min"+n):Math.floor(s)+" second"+n))))}},beforeMount(){this.fecthContent()}},ut={class:"post-related penci-posts-related-grid"},dt=m("div",{class:"post-title-box"},[m("h4",{class:"post-box-title"},"You may also like")],-1),ft={class:"penci-related-carousel penci-related-grid-display"},pt=["data-bgset","href","title"],ht=["href"],gt={class:"date"},vt=["datetime"];function mt(e,a,t,s,r,n){return O(),j("div",ut,[dt,m("div",ft,[(O(!0),j(xe,null,Ne(r.results,l=>(O(),j("div",{class:"item-related",key:l},[m("a",{class:"related-thumb penci-image-holder penci-lazy","data-bgset":n.formatImage(l),href:n.formatHref(l),title:n.formatTitle(l)},null,8,pt),m("h3",null,[m("a",{href:n.formatHref(l)},_e(n.formatTitle(l)),9,ht)]),ye(),m("span",gt,[m("time",{class:"entry-date published",datetime:n.formatPublishDate(l)},_e(n.formatTimeSince(l)),9,vt)])]))),128))])])}const St=re(ct,[["render",mt]]);export{_t as P,St as R,bt as S};