import{y as d,z as f,A as m,B as p,C as u,D as h,E as _,G as w,H as g,I as b,J as y,_ as x,o as r,c as o,a as e,F as k,d as v,L as z,t as n,f as c,b as S}from"./index-36edeb24.js";const I={name:"Sidebar",data(){return{results:[]}},setup(){return{}},methods:{fecthContent:function(){fetch("https://newscluster.azurewebsites.net/api/GetFeedItemsFlagged?category=galleries&domain=dailyrei.com&offset=0&limit=5").then(a=>a.json()).then(a=>{this.results=a})},formatHref:function(t){return d(t)},formatTitle:function(t,a){return a=a||88,f(t,a)},formatDescription:function(t,a){return a=a||300,m(t,a)},formatImage:function(t){return p(t)},formatAuthor:function(t){return u(t)},formatBgImage:function(t){return h(t)},formatCategoryHref:function(t){return _(t)},formatCategory:function(t){return w(t)},formatAuthorHref:function(t){return g(t)},formatPublishDate:function(t){return b(t)},formatTimeSince:function(t){return y(t)}},beforeMount(){this.fecthContent()}},T={id:"sidebar",class:"penci-sidebar-right penci-sidebar-content style-3 pcalign-left pcsb-boxed-whole pciconp-right pcicon-right penci-sticky-sidebar",style:{position:"relative",overflow:"visible","box-sizing":"border-box","min-height":"1px"}},F={class:"theiaStickySidebar",style:{"padding-top":"0px","padding-bottom":"1px",position:"static"}},H=c('<aside id="penci_social_widget-2" class="widget penci_social_widget"><h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Follow Us</span></h3><div class="widget-social pc_alignleft show-text penci-social-colored"><a href="https://www.facebook.com/profile.php?id=100095033030506" aria-label="Facebook" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-facebook" style="font-size:14px;"></i> <span style="font-size:13px;">Facebook</span></a><a href="https://www.twitter.com/dailyrei_com" aria-label="Twitter" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-twitter" style="font-size:14px;"></i> <span style="font-size:13px;">Twitter</span></a><a href="https://www.instagram.com/dailyreidotcom" aria-label="Instagram" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-instagram" style="font-size:14px;"></i> <span style="font-size:13px;">Instagram</span></a><a href="https://www.pinterest.com/dailyreicom" aria-label="Pinterest" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-pinterest" style="font-size:14px;"></i> <span style="font-size:13px;">Pinterest</span></a><a href="https://www.linkedin.com/in/dailyrei" aria-label="Linkedin" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-linkedin" style="font-size:14px;"></i> <span style="font-size:13px;">Linkedin</span></a><a href="#" aria-label="Youtube" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-youtube-play" style="font-size:14px;"></i> <span style="font-size:13px;">Youtube</span></a></div></aside>',1),C={id:"penci_latest_news_widget-2",class:"widget penci_latest_news_widget"},L=e("h3",{class:"widget-title penci-border-arrow"},[e("span",{class:"inner-arrow"},"Recent Posts")],-1),A={id:"penci-latestwg-1042",class:"side-newsfeed"},B={class:"side-item"},D={class:"side-image"},N=["data-bgset","href","title"],E={class:"side-item-text"},P={class:"side-title-post"},M=["href","title"],V={class:"grid-post-box-meta penci-side-item-meta pcsnmt-below"},G={class:"side-item-meta side-wdate"},Y=["datetime"],j=e("aside",{id:"mc4wp_form_widget-2",class:"widget widget_mc4wp_form_widget"},[e("h3",{class:"widget-title penci-border-arrow"},[e("span",{class:"inner-arrow"},"Newsletter")]),e("form",{id:"mc4wp-form-1",class:"mc4wp-form mc4wp-form-790",method:"post","data-id":"790","data-name":"Form"},[e("div",{class:"mc4wp-form-fields"},[e("p",{class:"mdes"},"Subscribe our newsletter for latest news around the world. Let's stay updated!"),e("p",{class:"mname"},[e("input",{type:"text",name:"NAME",placeholder:"Name..."})]),e("p",{class:"memail"},[e("input",{type:"email",id:"mc4wp_email",name:"EMAIL",placeholder:"Email..."})]),e("p",{class:"msubmit"},[e("input",{type:"submit",value:"Subscribe"})])]),e("label",{style:{display:"none !important"}},[S("Leave this field empty if you're human: "),e("input",{type:"text",name:"_mc4wp_honeypot",tabindex:"-1",autocomplete:"off"})]),e("input",{type:"hidden",name:"_mc4wp_timestamp",value:"1690725841"}),e("input",{type:"hidden",name:"_mc4wp_form_id",value:"790"}),e("input",{type:"hidden",name:"_mc4wp_form_element_id",value:"mc4wp-form-1"}),e("div",{class:"mc4wp-response"})])],-1),J=c('<aside id="categories-2" class="widget widget_categories"><h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Categories</span></h3><ul><li class="cat-item cat-item-10"><a href="/category/education/">Education </a></li><li class="cat-item cat-item-10"><a href="/category/finance/">Finance </a></li><li class="cat-item cat-item-10"><a href="/category/investing/">Investing </a></li><li class="cat-item cat-item-10"><a href="/category/legal/">Legal </a></li><li class="cat-item cat-item-10"><a href="/category/news/">News </a></li><li class="cat-item cat-item-10"><a href="/category/market/">Market </a></li><li class="cat-item cat-item-10"><a href="/category/trends/">Trends </a></li></ul></aside>',1);function R(t,a,U,q,l,s){return r(),o("div",T,[e("div",F,[H,e("aside",C,[L,e("ul",A,[(r(!0),o(k,null,v(l.results,i=>(r(),o("li",{class:"penci-feed",key:i},[e("div",B,[e("div",D,[e("a",{class:"penci-image-holder penci-lazy small-fix-size lazyloaded pcloaded",rel:"bookmark","data-bgset":s.formatImage(i),href:s.formatHref(i),title:s.formatTitle(i),"data-ll-status":"loaded",style:z(s.formatBgImage(i))},null,12,N)]),e("div",E,[e("h4",P,[e("a",{href:s.formatHref(i),rel:"bookmark",title:s.formatTitle(i)},n(s.formatTitle(i)),9,M)]),e("div",V,[e("span",G,[e("time",{class:"entry-date published",datetime:s.formatPublishDate(i)},n(s.formatTimeSince(i)),9,Y)])])])])]))),128))])]),j,J])])}const O=x(I,[["render",R]]);export{O as S};
