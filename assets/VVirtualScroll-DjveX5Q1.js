import{p as D,H as O,k as A,v as F,a as o,Q as ue,q as Y,R as ie,X as ce,s as w,f as H,Z as de,ao as p,_ as Z,g as N,F as $,x as ve,Y as me,y as j,r as Q,j as z,aw as fe,ax as G,O as ge,a3 as he,am as be,l as ye,h as Te}from"./index-Ct2kX-QR.js";import{m as J,f as Ve,h as xe,k as Se,l as pe,n as ke,p as Ie,s as _e,a as Re,D as q,g as we,o as Pe}from"./VMain-BJ0VMScq.js";import{b as Be}from"./index-DpEqm0vl.js";import{c as Ce}from"./getScrollParent-D7uDFKzb.js";const He=D({text:String,...O(),...J()},"VToolbarTitle"),De=A()({name:"VToolbarTitle",props:He(),setup(e,n){let{slots:t}=n;return F(()=>{const s=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[s&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),Ee=[null,"prominent","default","comfortable","compact"],Ne=D({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ee.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ve(),...O(),...xe(),...Se(),...J({tag:"header"}),...ue()},"VToolbar"),Ze=A()({name:"VToolbar",props:Ne(),setup(e,n){var b;let{slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:a}=pe(Y(e,"color")),{borderClasses:i}=ke(e),{elevationClasses:d}=Ie(e),{roundedClasses:c}=_e(e),{themeClasses:u}=ie(e),{rtlClasses:g}=ce(),T=w(!!(e.extended||(b=t.extension)!=null&&b.call(t))),k=H(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),x=H(()=>T.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return de({VBtn:{variant:"text"}}),F(()=>{var m;const P=!!(e.title||t.title),h=!!(t.image||e.image),v=(m=t.extension)==null?void 0:m.call(t);return T.value=!!(e.extended||v),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,i.value,d.value,c.value,u.value,g.value,e.class],style:[a.value,e.style]},{default:()=>[h&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(q,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(Re,{key:"image-img",cover:!0,src:e.image},null)]),o(q,{defaults:{VTabs:{height:p(k.value)}}},{default:()=>{var f,I,_;return[o("div",{class:"v-toolbar__content",style:{height:p(k.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(f=t.prepend)==null?void 0:f.call(t)]),P&&o(De,{key:"title",text:e.title},{text:t.title}),(I=t.default)==null?void 0:I.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(_=t.append)==null?void 0:_.call(t)])])]}}),o(q,{defaults:{VTabs:{height:p(x.value)}}},{default:()=>[o(Be,null,{default:()=>[T.value&&o("div",{class:"v-toolbar__extension",style:{height:p(x.value)}},[v])]})]})]})}),{contentHeight:k,extensionHeight:x}}}),Oe=D({renderless:Boolean,...O()},"VVirtualScrollItem"),Ae=A()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Oe(),emits:{"update:height":e=>!0},setup(e,n){let{attrs:t,emit:s,slots:a}=n;const{resizeRef:i,contentRect:d}=Z(void 0,"border");N(()=>{var c;return(c=d.value)==null?void 0:c.height},c=>{c!=null&&s("update:height",c)}),F(()=>{var c,u;return e.renderless?o($,null,[(c=a.default)==null?void 0:c.call(a,{itemRef:i})]):o("div",ve({ref:i,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(u=a.default)==null?void 0:u.call(a)])})}}),Fe=-1,Me=1,U=100,ze=D({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function qe(e,n){const t=me(),s=w(0);j(()=>{s.value=parseFloat(e.itemHeight||0)});const a=w(0),i=w(Math.ceil((parseInt(e.height)||t.height.value)/(s.value||16))||1),d=w(0),c=w(0),u=Q(),g=Q();let T=0;const{resizeRef:k,contentRect:x}=Z();j(()=>{k.value=u.value});const b=H(()=>{var l;return u.value===document.documentElement?t.height.value:((l=x.value)==null?void 0:l.height)||parseInt(e.height)||0}),P=H(()=>!!(u.value&&g.value&&b.value&&s.value));let h=Array.from({length:n.value.length}),v=Array.from({length:n.value.length});const m=w(0);let f=-1;function I(l){return h[l]||s.value}const _=fe(()=>{const l=performance.now();v[0]=0;const r=n.value.length;for(let y=1;y<=r-1;y++)v[y]=(v[y-1]||0)+I(y-1);m.value=Math.max(m.value,performance.now()-l)},m),K=N(P,l=>{l&&(K(),T=g.value.offsetTop,_.immediate(),R(),~f&&ge(()=>{he&&window.requestAnimationFrame(()=>{X(f),f=-1})}))});G(()=>{_.clear()});function ee(l,r){const y=h[l],V=s.value;s.value=V?Math.min(s.value,r):r,(y!==r||V!==s.value)&&(h[l]=r,_())}function S(l){return l=z(l,0,n.value.length-1),v[l]||0}function L(l){return Ue(v,l)}let E=0,B=0,M=0;N(b,(l,r)=>{r&&(R(),l<r&&requestAnimationFrame(()=>{B=0,R()}))});function te(){if(!u.value||!g.value)return;const l=u.value.scrollTop,r=performance.now();r-M>500?(B=Math.sign(l-E),T=g.value.offsetTop):B=l-E,E=l,M=r,R()}function le(){!u.value||!g.value||(B=0,M=0,R())}let W=-1;function R(){cancelAnimationFrame(W),W=requestAnimationFrame(ae)}function ae(){if(!u.value||!b.value)return;const l=E-T,r=Math.sign(B),y=Math.max(0,l-U),V=z(L(y),0,n.value.length),oe=l+b.value+U,C=z(L(oe)+1,V+1,n.value.length);if((r!==Fe||V<a.value)&&(r!==Me||C>i.value)){const se=S(a.value)-S(V),re=S(C)-S(i.value);Math.max(se,re)>U?(a.value=V,i.value=C):(V<=0&&(a.value=V),C>=n.value.length&&(i.value=C))}d.value=S(a.value),c.value=S(n.value.length)-S(i.value)}function X(l){const r=S(l);!u.value||l&&!r?f=l:u.value.scrollTop=r}const ne=H(()=>n.value.slice(a.value,i.value).map((l,r)=>({raw:l,index:r+a.value})));return N(n,()=>{h=Array.from({length:n.value.length}),v=Array.from({length:n.value.length}),_.immediate(),R()},{deep:!0}),{calculateVisibleItems:R,containerRef:u,markerRef:g,computedItems:ne,paddingTop:d,paddingBottom:c,scrollToIndex:X,handleScroll:te,handleScrollend:le,handleItemResize:ee}}function Ue(e,n){let t=e.length-1,s=0,a=0,i=null,d=-1;if(e[t]<n)return t;for(;s<=t;)if(a=s+t>>1,i=e[a],i>n)t=a-1;else if(i<n)d=a,s=a+1;else return i===n?a:s;return d}const Le=D({items:{type:Array,default:()=>[]},renderless:Boolean,...ze(),...O(),...we()},"VVirtualScroll"),$e=A()({name:"VVirtualScroll",props:Le(),setup(e,n){let{slots:t}=n;const s=be("VVirtualScroll"),{dimensionStyles:a}=Pe(e),{calculateVisibleItems:i,containerRef:d,markerRef:c,handleScroll:u,handleScrollend:g,handleItemResize:T,scrollToIndex:k,paddingTop:x,paddingBottom:b,computedItems:P}=qe(e,Y(e,"items"));return ye(()=>e.renderless,()=>{function h(){var f,I;const m=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";d.value===document.documentElement?(document[m]("scroll",u,{passive:!0}),document[m]("scrollend",g)):((f=d.value)==null||f[m]("scroll",u,{passive:!0}),(I=d.value)==null||I[m]("scrollend",g))}Te(()=>{d.value=Ce(s.vnode.el,!0),h(!0)}),G(h)}),F(()=>{const h=P.value.map(v=>o(Ae,{key:v.index,renderless:e.renderless,"onUpdate:height":m=>T(v.index,m)},{default:m=>{var f;return(f=t.default)==null?void 0:f.call(t,{item:v.raw,index:v.index,...m})}}));return e.renderless?o($,null,[o("div",{ref:c,class:"v-virtual-scroll__spacer",style:{paddingTop:p(x.value)}},null),h,o("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:p(b.value)}},null)]):o("div",{ref:d,class:["v-virtual-scroll",e.class],onScrollPassive:u,onScrollend:g,style:[a.value,e.style]},[o("div",{ref:c,class:"v-virtual-scroll__container",style:{paddingTop:p(x.value),paddingBottom:p(b.value)}},[h])])}),{calculateVisibleItems:i,scrollToIndex:k}}});export{Ze as V,He as a,De as b,$e as c,Ne as m};