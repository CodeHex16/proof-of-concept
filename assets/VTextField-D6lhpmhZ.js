import{p as O,H as Q,k as K,f as c,v as H,a as n,a7 as le,a9 as oe,W as Be,aM as de,u as Z,a6 as j,V as q,Q as ce,R as fe,X as ve,ab as ie,r as A,q as ge,g as U,ao as Me,F as G,x as Y,S as De,aN as pe,ai as J,s as ae,ad as $e,aO as Ae,ac as Oe,am as Ee,C as Te,aP as Le,i as We,h as ze,l as ue,O as ne,aQ as Ne,ay as Ue,a8 as je,aR as Ke,aS as He}from"./index-Ct2kX-QR.js";import{c as me,a as qe}from"./index-DpEqm0vl.js";import{E as ye,M as he,e as Qe,F as Xe,k as Ge,G as Ye,s as Je,l as Ze,H as be,L as et,D as tt,t as at,g as nt,z as lt,o as it,U as st}from"./VMain-BJ0VMScq.js";import{V as ut}from"./VLabel-DaHY_r6h.js";import{n as rt,a as ot,s as dt}from"./getScrollParent-D7uDFKzb.js";const ct=O({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Q(),...ye({transition:{component:me}})},"VCounter"),ft=K()({name:"VCounter",functional:!0,props:ct(),setup(e,u){let{slots:i}=u;const l=c(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return H(()=>n(he,{transition:e.transition},{default:()=>[le(n("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[i.default?i.default({counter:l.value,max:e.max,value:e.value}):l.value]),[[oe,e.active]])]})),{}}}),vt=O({floating:Boolean,...Q()},"VFieldLabel"),X=K()({name:"VFieldLabel",props:vt(),setup(e,u){let{slots:i}=u;return H(()=>n(ut,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}});function Ve(e){const{t:u}=Be();function i(l){let{name:a}=l;const t={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[a],s=e[`onClick:${a}`],f=s&&t?u(`$vuetify.input.${t}`,e.label??""):void 0;return n(Qe,{icon:e[`${a}Icon`],"aria-label":f,onClick:s},null)}return{InputIcon:i}}const xe=O({focused:Boolean,"onUpdate:focused":j()},"focus");function Ce(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:de();const i=Z(e,"focused"),l=c(()=>({[`${u}--focused`]:i.value}));function a(){i.value=!0}function t(){i.value=!1}return{focusClasses:l,isFocused:i,focus:a,blur:t}}const gt=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Ie=O({appendInnerIcon:q,bgColor:String,clearable:Boolean,clearIcon:{type:q,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:q,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>gt.includes(e)},"onClick:clear":j(),"onClick:appendInner":j(),"onClick:prependInner":j(),...Q(),...Xe(),...Ge(),...ce()},"VField"),_e=K()({name:"VField",inheritAttrs:!1,props:{id:String,...xe(),...Ie()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:i,emit:l,slots:a}=u;const{themeClasses:t}=fe(e),{loaderClasses:s}=Ye(e),{focusClasses:f,isFocused:V,focus:h,blur:o}=Ce(e),{InputIcon:d}=Ve(e),{roundedClasses:m}=Je(e),{rtlClasses:v}=ve(),P=c(()=>e.dirty||e.active),b=c(()=>!e.singleLine&&!!(e.label||a.label)),D=ie(),x=c(()=>e.id||`input-${D}`),R=c(()=>`${x.value}-messages`),r=A(),y=A(),k=A(),g=c(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:C,backgroundColorStyles:S}=Ze(ge(e,"bgColor")),{textColorClasses:w,textColorStyles:E}=be(c(()=>e.error||e.disabled?void 0:P.value&&V.value?e.color:e.baseColor));U(P,I=>{if(b.value){const _=r.value.$el,F=y.value.$el;requestAnimationFrame(()=>{const B=rt(_),M=F.getBoundingClientRect(),N=M.x-B.x,T=M.y-B.y-(B.height/2-M.height/2),L=M.width/.75,W=Math.abs(L-B.width)>1?{maxWidth:Me(L)}:void 0,Re=getComputedStyle(_),se=getComputedStyle(F),ke=parseFloat(Re.transitionDuration)*1e3||150,we=parseFloat(se.getPropertyValue("--v-field-label-scale")),Fe=se.getPropertyValue("color");_.style.visibility="visible",F.style.visibility="hidden",ot(_,{transform:`translate(${N}px, ${T}px) scale(${we})`,color:Fe,...W},{duration:ke,easing:dt,direction:I?"normal":"reverse"}).finished.then(()=>{_.style.removeProperty("visibility"),F.style.removeProperty("visibility")})})}},{flush:"post"});const $=c(()=>({isActive:P,isFocused:V,controlRef:k,blur:o,focus:h}));function z(I){I.target!==document.activeElement&&I.preventDefault()}function p(I){var _;I.key!=="Enter"&&I.key!==" "||(I.preventDefault(),I.stopPropagation(),(_=e["onClick:clear"])==null||_.call(e,new MouseEvent("click")))}return H(()=>{var N,T,L;const I=e.variant==="outlined",_=!!(a["prepend-inner"]||e.prependInnerIcon),F=!!(e.clearable||a.clear),B=!!(a["append-inner"]||e.appendInnerIcon||F),M=()=>a.label?a.label({...$.value,label:e.label,props:{for:x.value}}):e.label;return n("div",Y({class:["v-field",{"v-field--active":P.value,"v-field--appended":B,"v-field--center-affix":e.centerAffix??!g.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":_,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!M(),[`v-field--variant-${e.variant}`]:!0},t.value,C.value,f.value,s.value,m.value,v.value,e.class],style:[S.value,e.style],onClick:z},i),[n("div",{class:"v-field__overlay"},null),n(et,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),_&&n("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&n(d,{key:"prepend-icon",name:"prependInner"},null),(N=a["prepend-inner"])==null?void 0:N.call(a,$.value)]),n("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&b.value&&n(X,{key:"floating-label",ref:y,class:[w.value],floating:!0,for:x.value,style:E.value},{default:()=>[M()]}),b.value&&n(X,{key:"label",ref:r,for:x.value},{default:()=>[M()]}),(T=a.default)==null?void 0:T.call(a,{...$.value,props:{id:x.value,class:"v-field__input","aria-describedby":R.value},focus:h,blur:o})]),F&&n(qe,{key:"clear"},{default:()=>[le(n("div",{class:"v-field__clearable",onMousedown:W=>{W.preventDefault(),W.stopPropagation()}},[n(tt,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[a.clear?a.clear({...$.value,props:{onKeydown:p,onFocus:h,onBlur:o,onClick:e["onClick:clear"]}}):n(d,{name:"clear",onKeydown:p,onFocus:h,onBlur:o},null)]})]),[[oe,e.dirty]])]}),B&&n("div",{key:"append",class:"v-field__append-inner"},[(L=a["append-inner"])==null?void 0:L.call(a,$.value),e.appendInnerIcon&&n(d,{key:"append-icon",name:"appendInner"},null)]),n("div",{class:["v-field__outline",w.value],style:E.value},[I&&n(G,null,[n("div",{class:"v-field__outline__start"},null),b.value&&n("div",{class:"v-field__outline__notch"},[n(X,{ref:y,floating:!0,for:x.value},{default:()=>[M()]})]),n("div",{class:"v-field__outline__end"},null)]),g.value&&b.value&&n(X,{ref:y,floating:!0,for:x.value},{default:()=>[M()]})])])}),{controlRef:k}}});function mt(e){const u=Object.keys(_e.props).filter(i=>!De(i)&&i!=="class"&&i!=="style");return pe(e,u)}const yt=O({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Q(),...ye({transition:{component:me,leaveAbsolute:!0,group:!0}})},"VMessages"),ht=K()({name:"VMessages",props:yt(),setup(e,u){let{slots:i}=u;const l=c(()=>J(e.messages)),{textColorClasses:a,textColorStyles:t}=be(c(()=>e.color));return H(()=>n(he,{transition:e.transition,tag:"div",class:["v-messages",a.value,e.class],style:[t.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&l.value.map((s,f)=>n("div",{class:"v-messages__message",key:`${f}-${l.value}`},[i.message?i.message({message:s}):s]))]})),{}}}),Se=Symbol.for("vuetify:form"),Ft=O({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function Bt(e){const u=Z(e,"modelValue"),i=c(()=>e.disabled),l=c(()=>e.readonly),a=ae(!1),t=A([]),s=A([]);async function f(){const o=[];let d=!0;s.value=[],a.value=!0;for(const m of t.value){const v=await m.validate();if(v.length>0&&(d=!1,o.push({id:m.id,errorMessages:v})),!d&&e.fastFail)break}return s.value=o,a.value=!1,{valid:d,errors:s.value}}function V(){t.value.forEach(o=>o.reset())}function h(){t.value.forEach(o=>o.resetValidation())}return U(t,()=>{let o=0,d=0;const m=[];for(const v of t.value)v.isValid===!1?(d++,m.push({id:v.id,errorMessages:v.errorMessages})):v.isValid===!0&&o++;s.value=m,u.value=d>0?!1:o===t.value.length?!0:null},{deep:!0,flush:"post"}),$e(Se,{register:o=>{let{id:d,vm:m,validate:v,reset:P,resetValidation:b}=o;t.value.some(D=>D.id===d),t.value.push({id:d,validate:v,reset:P,resetValidation:b,vm:Ae(m),isValid:null,errorMessages:[]})},unregister:o=>{t.value=t.value.filter(d=>d.id!==o)},update:(o,d,m)=>{const v=t.value.find(P=>P.id===o);v&&(v.isValid=d,v.errorMessages=m)},isDisabled:i,isReadonly:l,isValidating:a,isValid:u,items:t,validateOn:ge(e,"validateOn")}),{errors:s,isDisabled:i,isReadonly:l,isValidating:a,isValid:u,items:t,validate:f,reset:V,resetValidation:h}}function bt(e){const u=Oe(Se,null);return{...u,isReadonly:c(()=>!!((e==null?void 0:e.readonly)??(u==null?void 0:u.isReadonly.value))),isDisabled:c(()=>!!((e==null?void 0:e.disabled)??(u==null?void 0:u.isDisabled.value)))}}const Vt=O({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...xe()},"validation");function xt(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:de(),i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ie();const l=Z(e,"modelValue"),a=c(()=>e.validationValue===void 0?l.value:e.validationValue),t=bt(e),s=A([]),f=ae(!0),V=c(()=>!!(J(l.value===""?null:l.value).length||J(a.value===""?null:a.value).length)),h=c(()=>{var r;return(r=e.errorMessages)!=null&&r.length?J(e.errorMessages).concat(s.value).slice(0,Math.max(0,+e.maxErrors)):s.value}),o=c(()=>{var k;let r=(e.validateOn??((k=t.validateOn)==null?void 0:k.value))||"input";r==="lazy"&&(r="input lazy"),r==="eager"&&(r="input eager");const y=new Set((r==null?void 0:r.split(" "))??[]);return{input:y.has("input"),blur:y.has("blur")||y.has("input")||y.has("invalid-input"),invalidInput:y.has("invalid-input"),lazy:y.has("lazy"),eager:y.has("eager")}}),d=c(()=>{var r;return e.error||(r=e.errorMessages)!=null&&r.length?!1:e.rules.length?f.value?s.value.length||o.value.lazy?null:!0:!s.value.length:!0}),m=ae(!1),v=c(()=>({[`${u}--error`]:d.value===!1,[`${u}--dirty`]:V.value,[`${u}--disabled`]:t.isDisabled.value,[`${u}--readonly`]:t.isReadonly.value})),P=Ee("validation"),b=c(()=>e.name??Te(i));Le(()=>{var r;(r=t.register)==null||r.call(t,{id:b.value,vm:P,validate:R,reset:D,resetValidation:x})}),We(()=>{var r;(r=t.unregister)==null||r.call(t,b.value)}),ze(async()=>{var r;o.value.lazy||await R(!o.value.eager),(r=t.update)==null||r.call(t,b.value,d.value,h.value)}),ue(()=>o.value.input||o.value.invalidInput&&d.value===!1,()=>{U(a,()=>{if(a.value!=null)R();else if(e.focused){const r=U(()=>e.focused,y=>{y||R(),r()})}})}),ue(()=>o.value.blur,()=>{U(()=>e.focused,r=>{r||R()})}),U([d,h],()=>{var r;(r=t.update)==null||r.call(t,b.value,d.value,h.value)});async function D(){l.value=null,await ne(),await x()}async function x(){f.value=!0,o.value.lazy?s.value=[]:await R(!o.value.eager)}async function R(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const y=[];m.value=!0;for(const k of e.rules){if(y.length>=+(e.maxErrors??1))break;const C=await(typeof k=="function"?k:()=>k)(a.value);if(C!==!0){if(C!==!1&&typeof C!="string"){console.warn(`${C} is not a valid value. Rule functions must return boolean true or a string.`);continue}y.push(C||"")}}return s.value=y,m.value=!1,f.value=r,s.value}return{errorMessages:h,isDirty:V,isDisabled:t.isDisabled,isReadonly:t.isReadonly,isPristine:f,isValid:d,isValidating:m,reset:D,resetValidation:x,validate:R,validationClasses:v}}const Pe=O({id:String,appendIcon:q,centerAffix:{type:Boolean,default:!0},prependIcon:q,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":j(),"onClick:append":j(),...Q(),...at(),...Ne(nt(),["maxWidth","minWidth","width"]),...ce(),...Vt()},"VInput"),re=K()({name:"VInput",props:{...Pe()},emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:i,slots:l,emit:a}=u;const{densityClasses:t}=lt(e),{dimensionStyles:s}=it(e),{themeClasses:f}=fe(e),{rtlClasses:V}=ve(),{InputIcon:h}=Ve(e),o=ie(),d=c(()=>e.id||`input-${o}`),m=c(()=>`${d.value}-messages`),{errorMessages:v,isDirty:P,isDisabled:b,isReadonly:D,isPristine:x,isValid:R,isValidating:r,reset:y,resetValidation:k,validate:g,validationClasses:C}=xt(e,"v-input",d),S=c(()=>({id:d,messagesId:m,isDirty:P,isDisabled:b,isReadonly:D,isPristine:x,isValid:R,isValidating:r,reset:y,resetValidation:k,validate:g})),w=c(()=>{var E;return(E=e.errorMessages)!=null&&E.length||!x.value&&v.value.length?v.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return H(()=>{var I,_,F,B;const E=!!(l.prepend||e.prependIcon),$=!!(l.append||e.appendIcon),z=w.value.length>0,p=!e.hideDetails||e.hideDetails==="auto"&&(z||!!l.details);return n("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},t.value,f.value,V.value,C.value,e.class],style:[s.value,e.style]},[E&&n("div",{key:"prepend",class:"v-input__prepend"},[(I=l.prepend)==null?void 0:I.call(l,S.value),e.prependIcon&&n(h,{key:"prepend-icon",name:"prepend"},null)]),l.default&&n("div",{class:"v-input__control"},[(_=l.default)==null?void 0:_.call(l,S.value)]),$&&n("div",{key:"append",class:"v-input__append"},[e.appendIcon&&n(h,{key:"append-icon",name:"append"},null),(F=l.append)==null?void 0:F.call(l,S.value)]),p&&n("div",{class:"v-input__details"},[n(ht,{id:m.value,active:z,messages:w.value},{message:l.message}),(B=l.details)==null?void 0:B.call(l,S.value)])])}),{reset:y,resetValidation:k,validate:g,isValid:R,errorMessages:v}}}),ee=Symbol("Forwarded refs");function te(e,u){let i=e;for(;i;){const l=Reflect.getOwnPropertyDescriptor(i,u);if(l)return l;i=Object.getPrototypeOf(i)}}function Ct(e){for(var u=arguments.length,i=new Array(u>1?u-1:0),l=1;l<u;l++)i[l-1]=arguments[l];return e[ee]=i,new Proxy(e,{get(a,t){if(Reflect.has(a,t))return Reflect.get(a,t);if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const s of i)if(s.value&&Reflect.has(s.value,t)){const f=Reflect.get(s.value,t);return typeof f=="function"?f.bind(s.value):f}}},has(a,t){if(Reflect.has(a,t))return!0;if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const s of i)if(s.value&&Reflect.has(s.value,t))return!0;return!1},set(a,t,s){if(Reflect.has(a,t))return Reflect.set(a,t,s);if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const f of i)if(f.value&&Reflect.has(f.value,t))return Reflect.set(f.value,t,s);return!1},getOwnPropertyDescriptor(a,t){var f;const s=Reflect.getOwnPropertyDescriptor(a,t);if(s)return s;if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const V of i){if(!V.value)continue;const h=te(V.value,t)??("_"in V.value?te((f=V.value._)==null?void 0:f.setupState,t):void 0);if(h)return h}for(const V of i){const h=V.value&&V.value[ee];if(!h)continue;const o=h.slice();for(;o.length;){const d=o.shift(),m=te(d.value,t);if(m)return m;const v=d.value&&d.value[ee];v&&o.push(...v)}}}}})}const It=["color","file","time","date","datetime-local","week","month"],_t=O({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Pe(),...Ie()},"VTextField"),Mt=K()({name:"VTextField",directives:{Intersect:st},inheritAttrs:!1,props:_t(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{attrs:i,emit:l,slots:a}=u;const t=Z(e,"modelValue"),{isFocused:s,focus:f,blur:V}=Ce(e),h=c(()=>typeof e.counterValue=="function"?e.counterValue(t.value):typeof e.counterValue=="number"?e.counterValue:(t.value??"").toString().length),o=c(()=>{if(i.maxlength)return i.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),d=c(()=>["plain","underlined"].includes(e.variant));function m(g,C){var S,w;!e.autofocus||!g||(w=(S=C[0].target)==null?void 0:S.focus)==null||w.call(S)}const v=A(),P=A(),b=A(),D=c(()=>It.includes(e.type)||e.persistentPlaceholder||s.value||e.active);function x(){var g;b.value!==document.activeElement&&((g=b.value)==null||g.focus()),s.value||f()}function R(g){l("mousedown:control",g),g.target!==b.value&&(x(),g.preventDefault())}function r(g){x(),l("click:control",g)}function y(g){g.stopPropagation(),x(),ne(()=>{t.value=null,He(e["onClick:clear"],g)})}function k(g){var S;const C=g.target;if(t.value=C.value,(S=e.modelModifiers)!=null&&S.trim&&["text","search","password","tel","url"].includes(e.type)){const w=[C.selectionStart,C.selectionEnd];ne(()=>{C.selectionStart=w[0],C.selectionEnd=w[1]})}}return H(()=>{const g=!!(a.counter||e.counter!==!1&&e.counter!=null),C=!!(g||a.details),[S,w]=Ue(i),{modelValue:E,...$}=re.filterProps(e),z=mt(e);return n(re,Y({ref:v,modelValue:t.value,"onUpdate:modelValue":p=>t.value=p,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":d.value},e.class],style:e.style},S,$,{centerAffix:!d.value,focused:s.value}),{...a,default:p=>{let{id:I,isDisabled:_,isDirty:F,isReadonly:B,isValid:M}=p;return n(_e,Y({ref:P,onMousedown:R,onClick:r,"onClick:clear":y,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},z,{id:I.value,active:D.value||F.value,dirty:F.value||e.dirty,disabled:_.value,focused:s.value,error:M.value===!1}),{...a,default:N=>{let{props:{class:T,...L}}=N;const W=le(n("input",Y({ref:b,value:t.value,onInput:k,autofocus:e.autofocus,readonly:B.value,disabled:_.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:x,onBlur:V},L,w),null),[[je("intersect"),{handler:m},null,{once:!0}]]);return n(G,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),a.default?n("div",{class:T,"data-no-activator":""},[a.default(),W]):Ke(W,{class:T}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:C?p=>{var I;return n(G,null,[(I=a.details)==null?void 0:I.call(a,p),g&&n(G,null,[n("span",null,null),n(ft,{active:e.persistentCounter||s.value,value:h.value,max:o.value,disabled:e.disabled},a.counter)])])}:void 0})}),Ct({},v,P,b)}});export{Mt as V,Ft as a,Bt as c,Ct as f,_t as m,bt as u};