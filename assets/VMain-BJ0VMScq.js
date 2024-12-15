import{aY as X,k as x,ap as Ye,aU as Ke,H as E,K as pe,p as y,av as Ge,Z as Qe,f as v,aH as ke,aZ as N,a_ as ce,a$ as Ze,b0 as Je,b1 as et,aM as L,ao as h,V as we,Q as ne,r as ae,R as se,b2 as tt,q as Y,v as I,b3 as nt,b4 as at,a as u,x as xe,aT as st,T as Pe,b5 as ie,am as re,s as T,g as q,aP as it,O as Te,i as Ee,a7 as de,a8 as rt,F as Le,a9 as ot,C as ve,X as Be,u as lt,j as fe,a3 as $e,b6 as ut,b7 as me,E as ge,a5 as ct,ax as dt,b8 as vt,b9 as he,h as ft,aK as mt,aF as gt}from"./index-Ct2kX-QR.js";const Ve=["top","bottom"],ht=["start","end","left","right"];function bt(e,t){let[n,a]=e.split(" ");return a||(a=X(Ve,n)?"start":X(ht,n)?"top":"center"),{side:be(n,t),align:be(a,t)}}function be(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function en(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function tn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function nn(e){return{side:e.align,align:e.side}}function an(e){return X(Ve,e.side)?"y":"x"}function sn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return x()({name:n??Ye(Ke(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...E()},setup(a,i){let{slots:s}=i;return()=>{var r;return pe(a.tag,{class:[e,a.class],style:a.style},(r=s.default)==null?void 0:r.call(s))}}})}const G=y({tag:{type:String,default:"div"}},"tag"),yt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),St=x(!1)({name:"VDefaultsProvider",props:yt(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:i,reset:s,root:r,scoped:o}=Ge(e);return Qe(a,{reset:s,root:r,scoped:o,disabled:i}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});function oe(e){return ke(()=>{const t=[],n={};if(e.value.background)if(ce(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&Ze(e.value.background)){const a=Je(e.value.background);if(a.a==null||a.a===1){const i=et(a);n.color=i,n.caretColor=i}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ce(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Re(e,t){const n=v(()=>({text:N(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:i}=oe(n);return{textColorClasses:a,textColorStyles:i}}function U(e,t){const n=v(()=>({background:N(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:i}=oe(n);return{backgroundColorClasses:a,backgroundColorStyles:i}}const _t=["x-small","small","default","large","x-large"],ze=y({size:{type:[String,Number],default:"default"}},"size");function Ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return ke(()=>{let n,a;return X(_t,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:h(e.size),height:h(e.size)}),{sizeClasses:n,sizeStyles:a}})}const Ct=y({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:we,...E(),...ze(),...G({tag:"i"}),...ne()},"VIcon"),pt=x()({name:"VIcon",props:Ct(),setup(e,t){let{attrs:n,slots:a}=t;const i=ae(),{themeClasses:s}=se(e),{iconData:r}=tt(v(()=>i.value||e.icon)),{sizeClasses:o}=Ne(e),{textColorClasses:l,textColorStyles:c}=Re(Y(e,"color"));return I(()=>{var b,f;const d=(b=a.default)==null?void 0:b.call(a);d&&(i.value=(f=nt(d).filter(_=>_.type===at&&_.children&&typeof _.children=="string")[0])==null?void 0:f.children);const g=!!(n.onClick||n.onClickOnce);return u(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",s.value,o.value,l.value,{"v-icon--clickable":g,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},c.value,e.style],role:g?"button":void 0,"aria-hidden":!g,tabindex:g?e.disabled?-1:0:void 0},{default:()=>[d]})}),{}}}),Ie=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Oe(e){return{dimensionStyles:v(()=>{const n={},a=h(e.height),i=h(e.maxHeight),s=h(e.maxWidth),r=h(e.minHeight),o=h(e.minWidth),l=h(e.width);return a!=null&&(n.height=a),i!=null&&(n.maxHeight=i),s!=null&&(n.maxWidth=s),r!=null&&(n.minHeight=r),o!=null&&(n.minWidth=o),l!=null&&(n.width=l),n})}}function kt(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const He=y({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...E(),...Ie()},"VResponsive"),ye=x()({name:"VResponsive",props:He(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=kt(e),{dimensionStyles:i}=Oe(e);return I(()=>{var s;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[u("div",{class:"v-responsive__sizer",style:a.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),le=y({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{roundedClasses:v(()=>{const a=N(e)?e.value:e.rounded,i=N(e)?e.value:e.tile,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const r of String(a).split(" "))s.push(`rounded-${r}`);else(i||a===!1)&&s.push("rounded-0");return s})}}const wt=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),j=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:i,group:s,...r}=e,{component:o=s?st:Pe,...l}=typeof a=="object"?a:{};return pe(o,xe(typeof a=="string"?{name:i?"":a}:l,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:i,group:s}).filter(c=>{let[d,g]=c;return g!==void 0})),r),n)};function xt(e,t){if(!ie)return;const n=t.modifiers||{},a=t.value,{handler:i,options:s}=typeof a=="object"?a:{handler:a,options:{}},r=new IntersectionObserver(function(){var g;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const c=(g=e._observe)==null?void 0:g[t.instance.$.uid];if(!c)return;const d=o.some(b=>b.isIntersecting);i&&(!n.quiet||c.init)&&(!n.once||d||c.init)&&i(d,o,l),d&&n.once?Fe(e,t):c.init=!0},s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Fe(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Pt={mounted:xt,unmounted:Fe},Tt=y({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...He(),...E(),...le(),...wt()},"VImg"),Et=x()({name:"VImg",directives:{intersect:Pt},props:Tt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:i,backgroundColorStyles:s}=U(Y(e,"color")),{roundedClasses:r}=ue(e),o=re("VImg"),l=T(""),c=ae(),d=T(e.eager?"loading":"idle"),g=T(),b=T(),f=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),_=v(()=>f.value.aspect||g.value/b.value||0);q(()=>e.src,()=>{w(d.value!=="idle")}),q(_,(m,S)=>{!m&&S&&c.value&&p(c.value)}),it(()=>w());function w(m){if(!(e.eager&&m)&&!(ie&&!m&&!e.eager)){if(d.value="loading",f.value.lazySrc){const S=new Image;S.src=f.value.lazySrc,p(S,null)}f.value.src&&Te(()=>{var S;n("loadstart",((S=c.value)==null?void 0:S.currentSrc)||f.value.src),setTimeout(()=>{var k;if(!o.isUnmounted)if((k=c.value)!=null&&k.complete){if(c.value.naturalWidth||B(),d.value==="error")return;_.value||p(c.value,null),d.value==="loading"&&A()}else _.value||p(c.value),M()})})}}function A(){var m;o.isUnmounted||(M(),p(c.value),d.value="loaded",n("load",((m=c.value)==null?void 0:m.currentSrc)||f.value.src))}function B(){var m;o.isUnmounted||(d.value="error",n("error",((m=c.value)==null?void 0:m.currentSrc)||f.value.src))}function M(){const m=c.value;m&&(l.value=m.currentSrc||m.src)}let P=-1;Ee(()=>{clearTimeout(P)});function p(m){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const k=()=>{if(clearTimeout(P),o.isUnmounted)return;const{naturalHeight:z,naturalWidth:D}=m;z||D?(g.value=D,b.value=z):!m.complete&&d.value==="loading"&&S!=null?P=window.setTimeout(k,S):(m.currentSrc.endsWith(".svg")||m.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,b.value=1)};k()}const $=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),O=()=>{var k;if(!f.value.src||d.value==="idle")return null;const m=u("img",{class:["v-img__img",$.value],style:{objectPosition:e.position},src:f.value.src,srcset:f.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:A,onError:B},null),S=(k=a.sources)==null?void 0:k.call(a);return u(j,{transition:e.transition,appear:!0},{default:()=>[de(S?u("picture",{class:"v-img__picture"},[S,m]):m,[[ot,d.value==="loaded"]])]})},V=()=>u(j,{transition:e.transition},{default:()=>[f.value.lazySrc&&d.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",$.value],style:{objectPosition:e.position},src:f.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Q=()=>a.placeholder?u(j,{transition:e.transition,appear:!0},{default:()=>[(d.value==="loading"||d.value==="error"&&!a.error)&&u("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,R=()=>a.error?u(j,{transition:e.transition,appear:!0},{default:()=>[d.value==="error"&&u("div",{class:"v-img__error"},[a.error()])]}):null,Z=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=T(!1);{const m=q(_,S=>{S&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),m())})}return I(()=>{const m=ye.filterProps(e);return de(u(ye,xe({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!H.value},i.value,r.value,e.class],style:[{width:h(e.width==="auto"?g.value:e.width)},s.value,e.style]},m,{aspectRatio:_.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(Le,null,[u(O,null,null),u(V,null,null),u(Z,null,null),u(Q,null,null),u(R,null,null)]),default:a.default}),[[rt("intersect"),{handler:w,options:e.options},null,{once:!0}]])}),{currentSrc:l,image:c,state:d,naturalWidth:g,naturalHeight:b}}}),Lt=y({border:[Boolean,Number,String]},"border");function Bt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{borderClasses:v(()=>{const a=N(e)?e.value:e.border,i=[];if(a===!0||a==="")i.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const s of String(a).split(" "))i.push(`border-${s}`);return i})}}const $t=[null,"default","comfortable","compact"],Vt=y({density:{type:String,default:"default",validator:e=>$t.includes(e)}},"density");function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{densityClasses:v(()=>`${t}--density-${e.density}`)}}const zt=["elevated","flat","tonal","outlined","text","plain"];function Nt(e,t){return u(Le,null,[e&&u("span",{key:"overlay",class:`${t}__overlay`},null),u("span",{key:"underlay",class:`${t}__underlay`},null)])}const It=y({color:String,variant:{type:String,default:"elevated",validator:e=>zt.includes(e)}},"variant");function Ot(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();const n=v(()=>{const{variant:s}=ve(e);return`${t}--variant-${s}`}),{colorClasses:a,colorStyles:i}=oe(v(()=>{const{variant:s,color:r}=ve(e);return{[["elevated","flat"].includes(s)?"background":"text"]:r}}));return{colorClasses:a,colorStyles:i,variantClasses:n}}const Ht=y({start:Boolean,end:Boolean,icon:we,image:String,text:String,...Lt(),...E(),...Vt(),...le(),...ze(),...G(),...ne(),...It({variant:"flat"})},"VAvatar"),rn=x()({name:"VAvatar",props:Ht(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=se(e),{borderClasses:i}=Bt(e),{colorClasses:s,colorStyles:r,variantClasses:o}=Ot(e),{densityClasses:l}=Rt(e),{roundedClasses:c}=ue(e),{sizeClasses:d,sizeStyles:g}=Ne(e);return I(()=>u(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,i.value,s.value,l.value,c.value,d.value,o.value,e.class],style:[r.value,g.value,e.style]},{default:()=>[n.default?u(St,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?u(Et,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?u(pt,{key:"icon",icon:e.icon},null):e.text,Nt(!1,"v-avatar")]})),{}}}),on=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function ln(e){return{elevationClasses:v(()=>{const n=N(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}function Ft(e,t){const n=ae(),a=T(!1);if(ie){const i=new IntersectionObserver(s=>{a.value=!!s.find(r=>r.isIntersecting)},t);Ee(()=>{i.disconnect()}),q(n,(s,r)=>{r&&(i.unobserve(r),a.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const Se={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Wt=y({location:String},"location");function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=Be();return{locationStyles:v(()=>{if(!e.location)return{};const{side:s,align:r}=bt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(c){return n?n(c):0}const l={};return s!=="center"&&(t?l[Se[s]]=`calc(100% - ${o(s)}px)`:l[s]=0),r!=="center"?t?l[Se[r]]=`calc(100% - ${o(r)}px)`:l[r]=0:(s==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),l})}}const Mt=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...E(),...Wt({location:"top"}),...le(),...G(),...ne()},"VProgressLinear"),Dt=x()({name:"VProgressLinear",props:Mt(),emits:{"update:modelValue":e=>!0},setup(e,t){var H;let{slots:n}=t;const a=lt(e,"modelValue"),{isRtl:i,rtlClasses:s}=Be(),{themeClasses:r}=se(e),{locationStyles:o}=At(e),{textColorClasses:l,textColorStyles:c}=Re(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:g}=U(v(()=>e.bgColor||e.color)),{backgroundColorClasses:b,backgroundColorStyles:f}=U(v(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:_,backgroundColorStyles:w}=U(e,"color"),{roundedClasses:A}=ue(e),{intersectionRef:B,isIntersecting:M}=Ft(),P=v(()=>parseFloat(e.max)),p=v(()=>parseFloat(e.height)),$=v(()=>fe(parseFloat(e.bufferValue)/P.value*100,0,100)),O=v(()=>fe(parseFloat(a.value)/P.value*100,0,100)),V=v(()=>i.value!==e.reverse),Q=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),R=$e&&((H=window.matchMedia)==null?void 0:H.call(window,"(forced-colors: active)").matches);function Z(m){if(!B.value)return;const{left:S,right:k,width:z}=B.value.getBoundingClientRect(),D=V.value?z-m.clientX+(k-z):m.clientX-S;a.value=Math.round(D/z*P.value)}return I(()=>u(e.tag,{ref:B,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&M.value,"v-progress-linear--reverse":V.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},A.value,r.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?h(p.value):0,"--v-progress-linear-height":h(p.value),...e.absolute?o.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:O.value,onClick:e.clickable&&Z},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...c.value,[V.value?"left":"right"]:h(-p.value),borderTop:`${h(p.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${h(p.value/4)})`,width:h(100-$.value,"%"),"--v-progress-linear-stream-to":h(p.value*(V.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",R?void 0:d.value],style:[g.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),u("div",{class:["v-progress-linear__buffer",R?void 0:b.value],style:[f.value,{opacity:parseFloat(e.bufferOpacity),width:h($.value,"%")}]},null),u(Pe,{name:Q.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(m=>u("div",{key:m,class:["v-progress-linear__indeterminate",m,R?void 0:_.value],style:w.value},null))]):u("div",{class:["v-progress-linear__determinate",R?void 0:_.value],style:[w.value,{width:h(O.value,"%")}]},null)]}),n.default&&u("div",{class:"v-progress-linear__content"},[n.default({value:O.value,buffer:$.value})])]})),{}}}),un=y({loading:[Boolean,String]},"loader");function cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{loaderClasses:v(()=>({[`${t}--loading`]:e.loading}))}}function dn(e,t){var a;let{slots:n}=t;return u("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||u(Dt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const jt=["static","relative","fixed","absolute","sticky"],vn=y({position:{type:String,validator:e=>jt.includes(e)}},"position");function fn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{positionClasses:v(()=>e.position?`${t}--${e.position}`:void 0)}}function qt(){const e=re("useRoute");return v(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function mn(){var e,t;return(t=(e=re("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function gn(e,t){var g,b;const n=ut("RouterLink"),a=v(()=>!!(e.href||e.to)),i=v(()=>(a==null?void 0:a.value)||me(t,"click")||me(e,"click"));if(typeof n=="string"||!("useLink"in n)){const f=Y(e,"href");return{isLink:a,isClickable:i,href:f,linkProps:ge({href:f})}}const s=v(()=>({...e,to:Y(()=>e.to||"")})),r=n.useLink(s.value),o=v(()=>e.to?r:void 0),l=qt(),c=v(()=>{var f,_,w;return o.value?e.exact?l.value?((w=o.value.isExactActive)==null?void 0:w.value)&&ct(o.value.route.value.query,l.value.query):((_=o.value.isExactActive)==null?void 0:_.value)??!1:((f=o.value.isActive)==null?void 0:f.value)??!1:!1}),d=v(()=>{var f;return e.to?(f=o.value)==null?void 0:f.route.value.href:e.href});return{isLink:a,isClickable:i,isActive:c,route:(g=o.value)==null?void 0:g.route,navigate:(b=o.value)==null?void 0:b.navigate,href:d,linkProps:ge({href:d,"aria-current":v(()=>c.value?"page":void 0)})}}const hn=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let J=!1;function bn(e,t){let n=!1,a,i;$e&&(Te(()=>{window.addEventListener("popstate",s),a=e==null?void 0:e.beforeEach((r,o,l)=>{J?n?t(l):l():setTimeout(()=>n?t(l):l()),J=!0}),i=e==null?void 0:e.afterEach(()=>{J=!1})}),dt(()=>{window.removeEventListener("popstate",s),a==null||a(),i==null||i()}));function s(r){var o;(o=r.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}const ee=Symbol("rippleStop"),Ut=80;function _e(e,t){e.style.transform=t,e.style.webkitTransform=t}function te(e){return e.constructor.name==="TouchEvent"}function We(e){return e.constructor.name==="KeyboardEvent"}const Xt=function(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,i=0;if(!We(e)){const b=t.getBoundingClientRect(),f=te(e)?e.touches[e.touches.length-1]:e;a=f.clientX-b.left,i=f.clientY-b.top}let s=0,r=.3;(g=t._ripple)!=null&&g.circle?(r=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((a-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-s*2)/2}px`,l=`${(t.clientHeight-s*2)/2}px`,c=n.center?o:`${a-s}px`,d=n.center?l:`${i-s}px`;return{radius:s,scale:r,x:c,y:d,centerX:o,centerY:l}},K={show(e,t){var f;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((f=t==null?void 0:t._ripple)!=null&&f.enabled))return;const a=document.createElement("span"),i=document.createElement("span");a.appendChild(i),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:s,scale:r,x:o,y:l,centerX:c,centerY:d}=Xt(e,t,n),g=`${s*2}px`;i.className="v-ripple__animation",i.style.width=g,i.style.height=g,t.appendChild(a);const b=window.getComputedStyle(t);b&&b.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),_e(i,`translate(${o}, ${l}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),_e(i,`translate(${c}, ${d}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),i=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function Ae(e){return typeof e>"u"||!!e}function F(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ee])){if(e[ee]=!0,te(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||We(e),n._ripple.class&&(t.class=n._ripple.class),te(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{K.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Ut)}else K.show(e,n,t)}}function Ce(e){e[ee]=!0}function C(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{C(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),K.hide(t)}}function Me(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let W=!1;function De(e){!W&&(e.keyCode===he.enter||e.keyCode===he.space)&&(W=!0,F(e))}function je(e){W=!1,C(e)}function qe(e){W&&(W=!1,C(e))}function Ue(e,t,n){const{value:a,modifiers:i}=t,s=Ae(a);if(s||K.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,vt(a)&&a.class&&(e._ripple.class=a.class),s&&!n){if(i.stop){e.addEventListener("touchstart",Ce,{passive:!0}),e.addEventListener("mousedown",Ce);return}e.addEventListener("touchstart",F,{passive:!0}),e.addEventListener("touchend",C,{passive:!0}),e.addEventListener("touchmove",Me,{passive:!0}),e.addEventListener("touchcancel",C),e.addEventListener("mousedown",F),e.addEventListener("mouseup",C),e.addEventListener("mouseleave",C),e.addEventListener("keydown",De),e.addEventListener("keyup",je),e.addEventListener("blur",qe),e.addEventListener("dragstart",C,{passive:!0})}else!s&&n&&Xe(e)}function Xe(e){e.removeEventListener("mousedown",F),e.removeEventListener("touchstart",F),e.removeEventListener("touchend",C),e.removeEventListener("touchmove",Me),e.removeEventListener("touchcancel",C),e.removeEventListener("mouseup",C),e.removeEventListener("mouseleave",C),e.removeEventListener("keydown",De),e.removeEventListener("keyup",je),e.removeEventListener("dragstart",C),e.removeEventListener("blur",qe)}function Yt(e,t){Ue(e,t,!1)}function Kt(e){delete e._ripple,Xe(e)}function Gt(e,t){if(t.value===t.oldValue)return;const n=Ae(t.oldValue);Ue(e,t,n)}const yn={mounted:Yt,unmounted:Kt,updated:Gt};function Qt(){const e=T(!1);return ft(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:mt(e)}}const Zt=y({scrollable:Boolean,...E(),...Ie(),...G({tag:"main"})},"VMain"),Sn=x()({name:"VMain",props:Zt(),setup(e,t){let{slots:n}=t;const{dimensionStyles:a}=Oe(e),{mainStyles:i}=gt(),{ssrBootStyles:s}=Qt();return I(()=>u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[i.value,s.value,a.value,e.style]},{default:()=>{var r,o;return[e.scrollable?u("div",{class:"v-main__scroller"},[(r=n.default)==null?void 0:r.call(n)]):(o=n.default)==null?void 0:o.call(n)]}})),{}}});export{Ne as A,gn as B,Nt as C,St as D,wt as E,un as F,cn as G,Re as H,mn as I,be as J,Dt as K,dn as L,j as M,bt as N,en as O,tn as P,nn as Q,yn as R,an as S,bn as T,Pt as U,ye as V,Ft as W,Et as a,Sn as b,sn as c,rn as d,pt as e,Lt as f,Ie as g,on as h,Wt as i,vn as j,le as k,U as l,G as m,Bt as n,Oe as o,ln as p,At as q,fn as r,ue as s,Vt as t,Qt as u,ze as v,It as w,hn as x,Ot as y,Rt as z};