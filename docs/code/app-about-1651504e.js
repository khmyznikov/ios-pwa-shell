import{i as at,s as $t,x as mt,e as gt}from"./index-b6000672.js";const yt=at`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-left: 25px;
  }
`,At=at`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var x=window,V=x.ShadowRoot&&(x.ShadyCSS===void 0||x.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),Z=new WeakMap,lt=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(V&&e===void 0){const r=s!==void 0&&s.length===1;r&&(e=Z.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Z.set(s,e))}return e}toString(){return this.cssText}},bt=t=>new lt(typeof t=="string"?t:t+"",void 0,W),ht=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((r,i,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new lt(s,t,W)},Et=(t,e)=>{V?t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):e.forEach(s=>{const r=document.createElement("style"),i=x.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)})},J=V?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const r of e.cssRules)s+=r.cssText;return bt(s)})(t):t,R,O=window,X=O.trustedTypes,St=X?X.emptyScript:"",Y=O.reactiveElementPolyfillSupport,I={toAttribute(t,e){switch(e){case Boolean:t=t?St:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},dt=(t,e)=>e!==t&&(e==e||t==t),M={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:dt},m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const r=this._$Ep(s,e);r!==void 0&&(this._$Ev.set(r,s),t.push(r))}),t}static createProperty(t,e=M){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||M}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of s)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(J(r))}else t!==void 0&&e.push(J(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Et(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=M){var r;const i=this.constructor._$Ep(t,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?s.converter:I).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$El=null}}_$AK(t,e){var s;const r=this.constructor,i=r._$Ev.get(t);if(i!==void 0&&this._$El!==i){const o=r.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:I;this._$El=i,this[i]=n.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let r=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||dt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,i)=>this[i]=r),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdate)===null||i===void 0?void 0:i.call(r)}),this.update(s)):this._$Ek()}catch(r){throw e=!1,this._$Ek(),r}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},Y?.({ReactiveElement:m}),((R=O.reactiveElementVersions)!==null&&R!==void 0?R:O.reactiveElementVersions=[]).push("1.6.1");var k,T=window,y=T.trustedTypes,F=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,ct="?"+v,wt=`<${ct}>`,A=document,C=(t="")=>A.createComment(t),P=t=>t===null||typeof t!="object"&&typeof t!="function",ut=Array.isArray,Ct=t=>ut(t)||typeof t?.[Symbol.iterator]=="function",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,Q=/>/g,f=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,pt=/^(?:script|style|textarea|title)$/i,Pt=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),xt=Pt(1),$=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,g=A.createTreeWalker(A,129,null,!1),Ot=(t,e)=>{const s=t.length-1,r=[];let i,o=e===2?"<svg>":"",n=S;for(let a=0;a<s;a++){const c=t[a];let u,h,p=-1,E=0;for(;E<c.length&&(n.lastIndex=E,h=n.exec(c),h!==null);)E=n.lastIndex,n===S?h[1]==="!--"?n=G:h[1]!==void 0?n=Q:h[2]!==void 0?(pt.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=f):h[3]!==void 0&&(n=f):n===f?h[0]===">"?(n=i??S,p=-1):h[1]===void 0?p=-2:(p=n.lastIndex-h[2].length,u=h[1],n=h[3]===void 0?f:h[3]==='"'?et:tt):n===et||n===tt?n=f:n===G||n===Q?n=S:(n=f,i=void 0);const _=n===f&&t[a+1].startsWith("/>")?" ":"";o+=n===S?c+wt:p>=0?(r.push(u),c.slice(0,p)+"$lit$"+c.slice(p)+v+_):c+v+(p===-2?(r.push(void 0),a):_)}const l=o+(t[s]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[F!==void 0?F.createHTML(l):l,r]},N=class{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0;const n=t.length-1,l=this.parts,[a,c]=Ot(t,e);if(this.el=N.createElement(a,s),g.currentNode=this.el.content,e===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(r=g.nextNode())!==null&&l.length<n;){if(r.nodeType===1){if(r.hasAttributes()){const u=[];for(const h of r.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(v)){const p=c[o++];if(u.push(h),p!==void 0){const E=r.getAttribute(p.toLowerCase()+"$lit$").split(v),_=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:_[2],strings:E,ctor:_[1]==="."?Nt:_[1]==="?"?Ht:_[1]==="@"?Rt:H})}else l.push({type:6,index:i})}for(const h of u)r.removeAttribute(h)}if(pt.test(r.tagName)){const u=r.textContent.split(v),h=u.length-1;if(h>0){r.textContent=y?y.emptyScript:"";for(let p=0;p<h;p++)r.append(u[p],C()),g.nextNode(),l.push({type:2,index:++i});r.append(u[h],C())}}}else if(r.nodeType===8)if(r.data===ct)l.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(v,u+1))!==-1;)l.push({type:7,index:i}),u+=v.length-1}i++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}};function b(t,e,s=t,r){var i,o,n,l;if(e===$)return e;let a=r!==void 0?(i=s._$Co)===null||i===void 0?void 0:i[r]:s._$Cl;const c=P(e)?void 0:e._$litDirective$;return a?.constructor!==c&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),c===void 0?a=void 0:(a=new c(t),a._$AT(t,s,r)),r!==void 0?((n=(l=s)._$Co)!==null&&n!==void 0?n:l._$Co=[])[r]=a:s._$Cl=a),a!==void 0&&(e=b(t,a._$AS(t,e.values),a,r)),e}var Tt=class{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:r}=this._$AD,i=((e=t?.creationScope)!==null&&e!==void 0?e:A).importNode(s,!0);g.currentNode=i;let o=g.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new U(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Mt(o,this,t)),this.u.push(c),a=r[++l]}n!==a?.index&&(o=g.nextNode(),n++)}return i}p(t){let e=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},U=class{constructor(t,e,s,r){var i;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cm=(i=r?.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==$&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ct(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=N.createElement(r.h,this.options)),r);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.p(s);else{const o=new Tt(i,this),n=o.v(this.options);o.p(s),this.T(n),this._$AH=o}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new N(t)),e}k(t){ut(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new U(this.O(C()),this.O(C()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},H=class{constructor(t,e,s,r,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,r){const i=this.strings;let o=!1;if(i===void 0)t=b(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==$,o&&(this._$AH=t);else{const n=t;let l,a;for(t=i[0],l=0;l<i.length-1;l++)a=b(this,n[s+l],e,l),a===$&&(a=this._$AH[l]),o||(o=!P(a)||a!==this._$AH[l]),a===d?t=d:t!==d&&(t+=(a??"")+i[l+1]),this._$AH[l]=a}o&&!r&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Nt=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},Ut=y?y.emptyScript:"",Ht=class extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==d?this.element.setAttribute(this.name,Ut):this.element.removeAttribute(this.name)}},Rt=class extends H{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){var s;if((t=(s=b(this,t,e,0))!==null&&s!==void 0?s:d)===$)return;const r=this._$AH,i=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==d&&(r===d||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},Mt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}},rt=T.litHtmlPolyfillSupport;rt?.(N,U),((k=T.litHtmlVersions)!==null&&k!==void 0?k:T.litHtmlVersions=[]).push("2.6.1");var kt=(t,e,s)=>{var r,i;const o=(r=s?.renderBefore)!==null&&r!==void 0?r:e;let n=o._$litPart$;if(n===void 0){const l=(i=s?.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new U(e.insertBefore(C(),l),l,void 0,s??{})}return n._$AI(t),n},D,L,w=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return $}};w.finalized=!0,w._$litElement$=!0,(D=globalThis.litElementHydrateSupport)===null||D===void 0||D.call(globalThis,{LitElement:w});var it=globalThis.litElementPolyfillSupport;it?.({LitElement:w});((L=globalThis.litElementVersions)!==null&&L!==void 0?L:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Dt=ht`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Lt=ht`
  ${Dt}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,jt=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}},It={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zt=t=>(...e)=>({_$litDirective$:t,values:e}),Bt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,r){this._$Ct=e,this._$AM=s,this._$Ci=r}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Vt=zt(class extends Bt{constructor(t){var e;if(super(t),t.type!==It.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,r;if(this.nt===void 0){this.nt=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in e)e[o]&&!(!((s=this.st)===null||s===void 0)&&s.has(o))&&this.nt.add(o);return this.render(e)}const i=t.element.classList;this.nt.forEach(o=>{o in e||(i.remove(o),this.nt.delete(o))});for(const o in e){const n=!!e[o];n===this.nt.has(o)||!((r=this.st)===null||r===void 0)&&r.has(o)||(n?(i.add(o),this.nt.add(o)):(i.remove(o),this.nt.delete(o)))}return $}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var vt=Object.defineProperty,Wt=Object.defineProperties,qt=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,ot=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,Jt=Object.prototype.propertyIsEnumerable,nt=(t,e,s)=>e in t?vt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,_t=(t,e)=>{for(var s in e||(e={}))Zt.call(e,s)&&nt(t,s,e[s]);if(ot)for(var s of ot(e))Jt.call(e,s)&&nt(t,s,e[s]);return t},Xt=(t,e)=>Wt(t,Kt(e)),q=(t,e,s,r)=>{for(var i=r>1?void 0:r?qt(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(r?n(e,s,i):n(i))||i);return r&&i&&vt(e,s,i),i},Yt=t=>e=>typeof e=="function"?((s,r)=>(customElements.define(s,r),r))(t,e):((s,r)=>{const{kind:i,elements:o}=r;return{kind:i,elements:o,finisher(n){customElements.define(s,n)}}})(t,e),Ft=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Xt(_t({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function ft(t){return(e,s)=>s!==void 0?((r,i,o)=>{i.constructor.createProperty(o,r)})(t,e,s):Ft(t,e)}var j;((j=window.HTMLSlotElement)===null||j===void 0?void 0:j.prototype.assignedElements)!=null;var K=class extends w{emit(t,e){const s=new CustomEvent(t,_t({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(s),s}};q([ft()],K.prototype,"dir",2);q([ft()],K.prototype,"lang",2);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var z=class extends K{constructor(){super(...arguments),this.hasSlotController=new jt(this,"footer","header","image")}render(){return xt`
      <div
        part="base"
        class=${Vt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};z.styles=Lt;z=q([Yt("sl-card")],z);var Gt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,te=(t,e,s,r)=>{for(var i=r>1?void 0:r?Qt(e,s):e,o=t.length-1,n;o>=0;o--)(n=t[o])&&(i=(r?n(e,s,i):n(i))||i);return r&&i&&Gt(e,s,i),i};let B=class extends $t{render(){return mt`
      <app-header ?enableBack="${!0}"></app-header>

      <main>
        <h2>About Page</h2>

        <sl-card>
          <h2>Did you know?</h2>

          <p>PWAs have access to many useful APIs in modern browsers! These
            APIs have enabled many new types of apps that can be built as PWAs, such as advanced graphics editing apps, games,
            apps that use machine learning and more!
          </p>

          <p>Check out <a
              href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these
              docs</a> to learn more about the advanced features that you can use in your PWA</p>
        </sl-card>
      </main>
    `}};B.styles=[At,yt];B=te([gt("app-about")],B);export{B as AppAbout};
//# sourceMappingURL=app-about-1651504e.js.map
