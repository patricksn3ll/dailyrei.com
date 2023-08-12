import{S as M}from"./Sidebar-922c26a7.js";import{y as B,z as j,A as I,B as L,C as p,D as C,E as b,G as S,H as x,I as v,_,o as c,c as i,F as m,d as H,a as t,J as h,K as A,t as s,b as l,W as P,r as d,L as f,e as y}from"./index-4f1add5c.js";import{C as D}from"./CategorySection-b268baa3.js";const $={name:"CategorySearchSection",components:{},props:{category:{type:String,default:""},showLoadMore:{type:Boolean,default:!1}},data(){return{results:[],pageCounter:0,pageSize:10,item:{},query:this.$route.query.query}},setup(){return{}},methods:{fecthContent:function(){let e=`https://newscluster.azurewebsites.net/api/GetFeedItemsBy?filter=search&query=${this.query}&domain=dailyrei.com&page=${this.pageCounter}&pageSize=${this.pageSize}&count=100`;fetch(e).then(o=>o.json()).then(o=>{this.results=this.results.concat(o),this.pageCounter++})},formatHref:function(e){return B(e)},formatImage:function(e){return j(e)},formatBgImage:function(e){return I(e)},formatTitle:function(e){return length=length||82,L(e,length)},formatAuthor:function(e){return p(e)},formatCategory:function(e){return C(this.category)},formatCategoryHref:function(e){return b(this.category)},formatAuthorHref:function(e){return S(e)},formatPublishDate:function(e){return x(e)},formatTimeSince:function(e){return v(e)}},beforeMount(){this.fecthContent()}},V={class:"penci-wrapper-data penci-grid"},N={class:"item hentry"},q={class:"thumbnail"},W=["data-bgset","href","title"],F={class:"content-list-right content-list-center"},E={class:"header-list-style"},G={class:"cat"},J=["href"],K={class:"penci-entry-title entry-title grid-title"},O=["href"],Q={class:"penci-hide-tagupdated"},R={class:"author-italic author vcard"},U=["href"],X=["datetime"],Y={class:"grid-post-box-meta"},Z={class:"otherl-date-author author-italic author vcard"},tt=["href"],et={class:"otherl-date"},at=["datetime"],rt={class:"item-content entry-content"},ot={key:0,class:"penci-pagination penci-ajax-more penci-ajax-home penci-ajax-more-scroll"},st=t("span",{class:"ajax-more-text"},"Load More Posts",-1),nt=[st];function ct(e,o,u,g,n,r){return c(),i("ul",V,[(c(!0),i(m,null,H(n.results,a=>(c(),i("li",{key:a,class:"list-post pclist-layout"},[t("article",N,[t("div",q,[t("a",{class:"penci-image-holder penci-lazy lazyloaded pcloaded","data-bgset":r.formatImage(a),href:r.formatHref(a),title:r.formatTitle(a),"data-ll-status":"loaded",style:A(r.formatBgImage(a))},null,12,W)]),t("div",F,[t("div",E,[t("span",G,[t("a",{class:"penci-cat-name penci-cat-8",href:r.formatCategoryHref(a),rel:"category tag"},[t("span",null,s(r.formatCategory(a)),1)],8,J)]),t("h2",K,[t("a",{href:r.formatHref(a)},s(r.formatTitle(a)),9,O)]),t("div",Q,[t("span",R,[l("by "),t("a",{class:"author-url url fn n",href:r.formatAuthorHref(a)},s(r.formatAuthor(a)),9,U)]),l(),t("time",{class:"entry-date published",datetime:r.formatPublishDate(a)},s(r.formatTimeSince(a)),9,X)]),t("div",Y,[t("span",Z,[l("by "),t("a",{class:"author-url url fn n",href:r.formatAuthorHref(a)},s(r.formatAuthor(a)),9,tt)]),l(),t("span",et,[t("time",{class:"entry-date published",datetime:r.formatPublishDate(a)},s(r.formatTimeSince(a)),9,at)])])]),t("div",rt,[t("p",null,s(a==null?void 0:a.metadata_description.replaceAll('"',"")),1)])])])]))),128)),u.showLoadMore?(c(),i("div",ot,[t("a",{class:"penci-ajax-more-button","aria-label":"More Posts","data-mes":"Sorry, No more posts",onClick:o[0]||(o[0]=(...a)=>r.fecthContent&&r.fecthContent(...a)),style:{hand:"cursor"}},nt)])):h("",!0)])}const it=_($,[["render",ct]]),lt={name:"CategoryVideoSection",components:{},props:{category:{type:String,default:""},author:{type:String,default:""},tag:{type:String,default:""},showLoadMore:{type:Boolean,default:!1}},data(){return{results:[],pageCounter:0,pageSize:10,item:{}}},setup(){return{}},methods:{fecthContent:function(){let e=`https://www.dailyrei.com/api/videos?page=${this.pageCounter}&pageSize=${this.pageSize}&count=100`;fetch(e).then(o=>o.json()).then(o=>{this.results=this.results.concat(o),this.pageCounter++})},formatHref:function(e){return e["media:content"].url},formatTitle:function(e,o){return o=o||88,e["media:title"].substring(0,o)},formatImage:function(e){return e["media:thumbnail"].url},formatAuthor:function(e){return p(e)},formatBgImage:function(e){return`background-image: url('${e["media:thumbnail"].url}');`},formatCategory:function(e){return C(e)},formatCategoryHref:function(e){return b(e)},formatAuthorHref:function(e){return S(e)},formatPublishDate:function(e){return x(e)},formatTimeSince:function(e){return v(e)}},beforeMount(){this.fecthContent()}},dt={class:"penci-wrapper-data penci-grid"},ht={class:"item hentry"},ut={class:"thumbnail"},ft=["data-bgset","href","title"],_t={class:"content-list-right content-list-center"},mt={class:"header-list-style"},gt={class:"cat"},yt=["href"],pt={class:"penci-entry-title entry-title grid-title"},Ct=["href"],bt={class:"penci-hide-tagupdated"},St={class:"author-italic author vcard"},xt=["href"],vt=["datetime"],Ht={class:"grid-post-box-meta"},At={class:"otherl-date-author author-italic author vcard"},kt=["href"],wt={class:"otherl-date"},zt=["datetime"],Tt={key:0,class:"penci-pagination penci-ajax-more penci-ajax-home penci-ajax-more-scroll"},Mt=t("span",{class:"ajax-more-text"},"Load More Posts",-1),Bt=[Mt];function jt(e,o,u,g,n,r){return c(),i("ul",dt,[(c(!0),i(m,null,H(n.results,a=>(c(),i("li",{key:a,class:"list-post pclist-layout"},[t("article",ht,[t("div",ut,[t("a",{class:"penci-image-holder penci-lazy lazyloaded pcloaded","data-bgset":r.formatImage(a),href:r.formatHref(a),title:r.formatTitle(a),"data-ll-status":"loaded",style:A(r.formatBgImage(a))},null,12,ft)]),t("div",_t,[t("div",mt,[t("span",gt,[t("a",{class:"penci-cat-name penci-cat-8",href:r.formatCategoryHref(a),rel:"category tag"},[t("span",null,s(r.formatCategory(a)),1)],8,yt)]),t("h2",pt,[t("a",{href:r.formatHref(a)},s(r.formatTitle(a)),9,Ct)]),t("div",bt,[t("span",St,[l("by "),t("a",{class:"author-url url fn n",href:r.formatAuthorHref(a)},s(r.formatAuthor(a)),9,xt)]),l(),t("time",{class:"entry-date published",datetime:r.formatPublishDate(a)},s(r.formatTimeSince(a)),9,vt)]),t("div",Ht,[t("span",At,[l("by "),t("a",{class:"author-url url fn n",href:r.formatAuthorHref(a)},s(r.formatAuthor(a)),9,kt)]),l(),t("span",wt,[t("time",{class:"entry-date published",datetime:r.formatPublishDate(a)},s(r.formatTimeSince(a)),9,zt)])])])])])]))),128)),u.showLoadMore?(c(),i("div",Tt,[t("a",{class:"penci-ajax-more-button","aria-label":"More Posts","data-mes":"Sorry, No more posts",onClick:o[0]||(o[0]=(...a)=>r.fecthContent&&r.fecthContent(...a)),style:{hand:"cursor"}},Bt)])):h("",!0)])}const It=_(lt,[["render",jt]]),Lt={name:"Category",components:{Sidebar:M,WidgetArea:P,CategorySection:D,CategorySearchSection:it,CategoryVideoSection:It},setup(){},data(){return{selectedCategory:""}},methods:{fecthContent:function(){this.selectedCategory=this.$route.params.category}},beforeMount(){this.fecthContent()}},Pt={class:"container penci-breadcrumb",style:{"margin-top":"25px","text-transform":"capitalize"}},Dt=t("span",null,[t("a",{class:"crumb",href:"/"},"Home")],-1),$t=t("i",{class:"penci-faicon fa fa-angle-right"},null,-1),Vt={class:"archive-box",style:{"padding-left":"30px","text-align":"left"}},Nt={class:"title-bar"},qt=t("span",null,"Category:",-1),Wt={class:"container penci_sidebar right-sidebar",style:{transform:"none"}},Ft={id:"main",class:"penci-layout-list penci-main-sticky-sidebar",style:{position:"relative",overflow:"visible","box-sizing":"border-box","min-height":"1px"}},Et={class:"theiaStickySidebar",style:{"padding-top":"0px","padding-bottom":"1px",position:"static",top:"80px",left:"77.4025px"}};function Gt(e,o,u,g,n,r){const a=d("CategorySection"),k=d("CategorySearchSection"),w=d("CategoryVideoSection"),z=d("Sidebar"),T=d("WidgetArea");return c(),i(m,null,[t("div",Pt,[Dt,$t,t("span",null,s(n.selectedCategory),1)]),t("div",Vt,[t("div",Nt,[qt,t("h1",null,s(n.selectedCategory),1)])]),t("div",Wt,[t("div",Ft,[t("div",Et,[n.selectedCategory!="video"&&n.selectedCategory!="search"?(c(),f(a,{key:0,category:n.selectedCategory,showLoadMore:!0},null,8,["category"])):h("",!0),n.selectedCategory=="search"?(c(),f(k,{key:1,category:n.selectedCategory,showLoadMore:!0},null,8,["category"])):h("",!0),n.selectedCategory=="video"?(c(),f(w,{key:2,category:n.selectedCategory,showLoadMore:!0},null,8,["category"])):h("",!0)])]),y(z)]),y(T)],64)}const Qt=_(Lt,[["render",Gt]]);export{Qt as default};