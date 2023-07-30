import{y as f,z as u,A as d,B as m,C as g,D as _,E as p,G as y,H as C,I as b,J as S,K as z,_ as w,o as n,c as i,F as L,d as H,a as e,L as x,M as B,t as s,b as c}from"./index-3de52ae0.js";const A={name:"CategorySection",components:{},props:{category:{type:String,default:""},author:{type:String,default:""},tag:{type:String,default:""},showLoadMore:{type:Boolean,default:!1}},data(){return{fullClassName:"mag-cat-"+this.className,categoryPath:"/category/"+this.category.toLowerCase(),featuredClassName:"penci-fea-cat-"+this.className,results:[],pageCounter:0,pageSize:6,item:{}}},setup(){return{}},methods:{fecthContent:function(){let t=`https://newscluster.azurewebsites.net/api/GetFeedItemsByCategory?category=${this.category.toLocaleLowerCase()}&domain=dailyrei.com&offset=${this.pageSize*this.pageCounter}&limit=${this.pageSize}&score=.1`;this.author!=""&&(t=`https://newscluster.azurewebsites.net/api/GetFeedItemsByAuthor?author=${this.author.toLocaleLowerCase()}&domain=dailyrei.com&offset=${this.pageSize*this.pageCounter}&limit=${this.pageSize}&score=.1`),this.tag!=""&&(t=`https://newscluster.azurewebsites.net/api/GetFeedItemsByTag?tag=${this.tag.toLocaleLowerCase()}&domain=dailyrei.com&offset=${this.pageSize*this.pageCounter}&limit=${this.pageSize}&score=.1`),fetch(t).then(o=>o.json()).then(o=>{this.results=this.results.concat(o),this.pageCounter++})},formatHref:function(t){return f(t)},formatTitle:function(t){return`${u(t).substring(0,d)}...`},formatDescription:function(t){return m(t)},formatImage:function(t){return g(t)},formatAuthor:function(t){return _(t)},formatBgImage:function(t){return p(t)},formatCategoryHref:function(t){return y(t)},formatCategory:function(t){return C(t)},formatAuthorHref:function(t){return b(t)},formatPublishDate:function(t){return S(t)},formatTimeSince:function(t){return z(t)}},beforeMount(){this.fecthContent()}},I={class:"penci-wrapper-data penci-grid"},T={class:"item hentry"},v={class:"thumbnail"},D=["data-bgset","href","title"],N={class:"content-list-right content-list-center"},P={class:"header-list-style"},j={class:"cat"},M=["href"],k={class:"penci-entry-title entry-title grid-title"},F=["href"],G={class:"penci-hide-tagupdated"},V={class:"author-italic author vcard"},E=["href"],J=["datetime"],K={class:"grid-post-box-meta"},q={class:"otherl-date-author author-italic author vcard"},O=["href"],Q={class:"otherl-date"},R=["datetime"],U={class:"item-content entry-content"},W={key:0,class:"penci-pagination penci-ajax-more penci-ajax-home penci-ajax-more-scroll"},X=e("span",{class:"ajax-more-text"},"Load More Posts",-1),Y=[X];function Z(t,o,l,$,h,r){return n(),i("ul",I,[(n(!0),i(L,null,H(h.results,a=>(n(),i("li",{key:a,class:"list-post pclist-layout"},[e("article",T,[e("div",v,[e("a",{class:"penci-image-holder penci-lazy lazyloaded pcloaded","data-bgset":r.formatImage(a),href:r.formatHref(a),title:r.formatTitle(a),"data-ll-status":"loaded",style:B(r.formatBgImage(a))},null,12,D)]),e("div",N,[e("div",P,[e("span",j,[e("a",{class:"penci-cat-name penci-cat-8",href:r.formatCategoryHref(a),rel:"category tag"},[e("span",null,s(r.formatCategory(a)),1)],8,M)]),e("h2",k,[e("a",{href:r.formatHref(a)},s(r.formatTitle(a)),9,F)]),e("div",G,[e("span",V,[c("by "),e("a",{class:"author-url url fn n",href:r.formatAuthorHref(a)},s(r.formatAuthor(a)),9,E)]),c(),e("time",{class:"entry-date published",datetime:r.formatPublishDate(a)},s(r.formatTimeSince(a)),9,J)]),e("div",K,[e("span",q,[c("by "),e("a",{class:"author-url url fn n",href:r.formatAuthorHref(a)},s(r.formatAuthor(a)),9,O)]),c(),e("span",Q,[e("time",{class:"entry-date published",datetime:r.formatPublishDate(a)},s(r.formatTimeSince(a)),9,R)])])]),e("div",U,[e("p",null,s(r.formatDescription(a)),1)])])])]))),128)),l.showLoadMore?(n(),i("div",W,[e("a",{class:"penci-ajax-more-button","aria-label":"More Posts","data-mes":"Sorry, No more posts",onClick:o[0]||(o[0]=(...a)=>r.fecthContent&&r.fecthContent(...a)),style:{hand:"cursor"}},Y)])):x("",!0)])}const et=w(A,[["render",Z]]);export{et as C};