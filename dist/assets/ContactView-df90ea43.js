import{S as f}from"./Sidebar-e4fe5320.js";import{F as h}from"./Footer-edc5340b.js";import{W as _,_ as w,r,o as b,c as v,a as e,u as y,v as i,x as n,e as l,F as g}from"./index-3de52ae0.js";const x={name:"ContactView",components:{Sidebar:f,Footer:h,WidgetArea:_},setup(){},data(){return{name:"",email:"",subject:"",message:""}},methods:{sendEmail(c){console.log(`sendEmail : ${this.name} ${this.subject} ${this.email} ${this.message}`);let s=`https://www.dailyrei.com/api/mail?name=${this.name}&subject=${this.subject}&email=${this.email}&message=${this.message}`;fetch(s).then(o=>o.json()).then(o=>{this.name="",this.email="",this.subject="",this.message="",alert("Your message has been sent. Thank you!")}).catch(o=>{}),c.preventDefault()}}},j={class:"container penci_sidebar right-sidebar",style:{transform:"none"}},S={id:"main",class:"penci-main-sticky-sidebar",style:{position:"relative",overflow:"visible","box-sizing":"border-box","min-height":"1px"}},V={class:"theiaStickySidebar",style:{"padding-top":"0px","padding-bottom":"1px",position:"static",top:"80px",left:"77.4025px"}},q={id:"post-74",class:"post-74 page type-page status-publish hentry penci-portfolio-meta-wrapper"},k=e("div",{class:"penci-page-header"},[e("h1",{class:"entry-title"},"Contact")],-1),E={class:"post-entry blockquote-style-2"},F={class:"inner-post-entry entry-content"},C={class:"wpcf7 js",id:"wpcf7-f1159-p74-o1",lang:"en-US",dir:"ltr"},U=e("div",{class:"screen-reader-response"},[e("p",{role:"status","aria-live":"polite","aria-atomic":"true"}),e("ul")],-1),z=e("div",{style:{display:"none"}},[e("input",{type:"hidden",name:"_wpcf7",value:"x"})],-1),A={class:"name"},W={class:"wpcf7-form-control-wrap","data-name":"your-name"},B={class:"email"},M={class:"wpcf7-form-control-wrap","data-name":"your-email"},N={class:"subject"},$={class:"wpcf7-form-control-wrap","data-name":"your-subject"},D={class:"message"},T={class:"wpcf7-form-control-wrap","data-name":"your-message"},Y=e("p",{class:"submit"},[e("input",{class:"wpcf7-form-control has-spinner wpcf7-submit pcalign-right",type:"submit",value:"Submit"}),e("span",{class:"wpcf7-spinner"})],-1),G=e("div",{class:"wpcf7-response-output","aria-hidden":"true"},null,-1),H=e("p",null," ",-1),I=e("div",{class:"clear-footer"},null,-1);function J(c,s,o,K,a,p){const d=r("Sidebar"),m=r("WidgetArea"),u=r("Footer");return b(),v(g,null,[e("div",j,[e("div",S,[e("div",V,[e("article",q,[k,e("div",E,[e("div",F,[e("div",C,[U,e("form",{onSubmit:s[4]||(s[4]=y((...t)=>p.sendEmail&&p.sendEmail(...t),["prevent"])),class:"wpcf7-form init","aria-label":"Contact form"},[z,e("p",A,[e("span",W,[i(e("input",{size:"40",class:"wpcf7-form-control wpcf7-text wpcf7-validates-as-required","aria-required":"true","aria-invalid":"false",placeholder:"Name*",type:"text",name:"your-name","onUpdate:modelValue":s[0]||(s[0]=t=>a.name=t)},null,512),[[n,a.name]])])]),e("p",B,[e("span",M,[i(e("input",{size:"40",class:"wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email","aria-required":"true","aria-invalid":"false",placeholder:"Email*","onUpdate:modelValue":s[1]||(s[1]=t=>a.email=t),type:"email",name:"your-email"},null,512),[[n,a.email]])])]),e("p",N,[e("span",$,[i(e("input",{size:"40",class:"wpcf7-form-control wpcf7-text","aria-invalid":"false",placeholder:"Subject","onUpdate:modelValue":s[2]||(s[2]=t=>a.subject=t),type:"text",name:"your-subject"},null,512),[[n,a.subject]])])]),e("p",D,[e("span",T,[i(e("textarea",{cols:"40",rows:"10",class:"wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required","aria-required":"true","aria-invalid":"false",placeholder:"Your Message","onUpdate:modelValue":s[3]||(s[3]=t=>a.message=t),name:"your-message"},null,512),[[n,a.message]])])]),Y,G],32)]),H])])])])]),l(d),I,l(m)]),l(u)],64)}const Q=w(x,[["render",J]]);export{Q as default};