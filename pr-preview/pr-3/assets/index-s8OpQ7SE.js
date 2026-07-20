(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();class xn{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,so.unregister(this),t}free(){const t=this.__destroy_into_raw();Se.__wbg_wasmsim_free(t,0)}boid_count(){return Se.wasmsim_boid_count(this.__wbg_ptr)>>>0}boids_len(){return Se.wasmsim_boids_len(this.__wbg_ptr)>>>0}boids_ptr(){return Se.wasmsim_boids_ptr(this.__wbg_ptr)>>>0}detected(){return Se.wasmsim_detected(this.__wbg_ptr)!==0}feed_landmarks(t,r,i,n,a,s,u,l,p){Se.wasmsim_feed_landmarks(this.__wbg_ptr,t,r,i,n,a,s,u,l,p)}midpoint_x(){return Se.wasmsim_midpoint_x(this.__wbg_ptr)}midpoint_y(){return Se.wasmsim_midpoint_y(this.__wbg_ptr)}constructor(t,r,i){const n=Se.wasmsim_new(t,r,i);return this.__wbg_ptr=n,so.register(this,this.__wbg_ptr,this),this}pinch_amount(){return Se.wasmsim_pinch_amount(this.__wbg_ptr)}resize(t,r){Se.wasmsim_resize(this.__wbg_ptr,t,r)}set_params(t){const r=Lg(t,Se.__wbindgen_malloc),i=Gd;Se.wasmsim_set_params(this.__wbg_ptr,r,i)}step(t){Se.wasmsim_step(this.__wbg_ptr,t)}}Symbol.dispose&&(xn.prototype[Symbol.dispose]=xn.prototype.free);function Dg(){return{__proto__:null,"./pinch_boids_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_344f42d3211c4765:function(t,r){throw new Error(Pg(t,r))},__wbindgen_init_externref_table:function(){const t=Se.__wbindgen_externrefs,r=t.grow(4);t.set(0,void 0),t.set(r+0,void 0),t.set(r+1,null),t.set(r+2,!0),t.set(r+3,!1)}}}}const so=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>Se.__wbg_wasmsim_free(e,1));let sr=null;function Ug(){return(sr===null||sr.byteLength===0)&&(sr=new Float32Array(Se.memory.buffer)),sr}function Pg(e,t){return Vg(e>>>0,t)}let or=null;function qg(){return(or===null||or.byteLength===0)&&(or=new Uint8Array(Se.memory.buffer)),or}function Lg(e,t){const r=t(e.length*4,4)>>>0;return Ug().set(e,r/4),Gd=e.length,r}let Lr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Lr.decode();const Wg=2146435072;let Si=0;function Vg(e,t){return Si+=t,Si>=Wg&&(Lr=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Lr.decode(),Si=t),Lr.decode(qg().subarray(e,e+t))}let Gd=0,Se;function Gg(e,t){return Se=e.exports,sr=null,or=null,Se.__wbindgen_start(),Se}async function Hg(e,t){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,t)}catch(n){if(e.ok&&r(e.type)&&e.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}const i=await e.arrayBuffer();return await WebAssembly.instantiate(i,t)}else{const i=await WebAssembly.instantiate(e,t);return i instanceof WebAssembly.Instance?{instance:i,module:e}:i}function r(i){switch(i){case"basic":case"cors":case"default":return!0}return!1}}async function Fg(e){if(Se!==void 0)return Se;e!==void 0&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),e===void 0&&(e=new URL(""+new URL("pinch_boids_core_bg-02kmKZ_A.wasm",import.meta.url).href,import.meta.url));const t=Dg();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:r,module:i}=await Hg(await e,t);return Gg(r)}const jg=""+new URL("pinch_boids_core_bg-02kmKZ_A.wasm",import.meta.url).href,Hd={maxSpeed:3,maxForce:.05,perception:50,sepRadius:25,wSep:1.5,wAli:1,wCoh:1,arriveRadius:120,orbitRadius:80,orbitSpeed:2.5,kSpring:.05,gapOpen:1.2,gapClosed:.25,smooth:.3};function Kg(e){return new Float32Array([e.maxSpeed,e.maxForce,e.perception,e.sepRadius,e.wSep,e.wAli,e.wCoh,e.arriveRadius,e.orbitRadius,e.orbitSpeed,e.kSpring,e.gapOpen,e.gapClosed,e.smooth])}const Xg=400;function Zg(e,t){const r=Math.max(e,t);return{scale:r,offsetX:(e-r)/2,offsetY:(t-r)/2}}const Yg=1e3/30,Qg=0,Jg=4,e0=8,t0=9,r0=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]],oo={detected:!1,landmarks:[]};/*!
 * ONNX Runtime Web v1.27.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var qn=Object.defineProperty,i0=Object.getOwnPropertyDescriptor,n0=Object.getOwnPropertyNames,a0=Object.prototype.hasOwnProperty,s0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t)=>()=>(e&&(t=e(e=0)),t),Ht=(e,t)=>{for(var r in t)qn(e,r,{get:t[r],enumerable:!0})},o0=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of n0(t))!a0.call(e,n)&&n!==r&&qn(e,n,{get:()=>t[n],enumerable:!(i=i0(t,n))||i.enumerable});return e},hr=e=>o0(qn({},"__esModule",{value:!0}),e),Zt,ft,Lt,uo,Fd,jd=P(()=>{Zt=new Map,ft=[],Lt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Zt.get(e);if(i===void 0)Zt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=ft.indexOf(e);n!==-1&&ft.splice(n,1);for(let a=0;a<ft.length;a++)if(Zt.get(ft[a]).priority<=r){ft.splice(a,0,e);return}ft.push(e)}return}throw new TypeError("not a valid backend")},uo=async e=>{let t=Zt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Fd=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?ft:r,n,a=[],s=new Set;for(let l of i){let p=await uo(l);typeof p=="string"?a.push({name:l,err:p}):(n||(n=p),n===p&&s.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:p}of a)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${p}`);let u=t.filter(l=>s.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,p)=>p==="executionProviders"?u:Reflect.get(l,p)})]}}),u0=P(()=>{jd()}),Kd,l0=P(()=>{Kd="1.27.0"}),ki,ze,Xd=P(()=>{l0(),ki="warning",ze={wasm:{},webgl:{},webgpu:{},versions:{common:Kd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ki=e}},get logLevel(){return ki}},Object.defineProperty(ze,"logLevel",{enumerable:!0})}),ye,d0=P(()=>{Xd(),ye=ze}),Zd,Yd,p0=P(()=>{Zd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",u=t?.norm,l,p;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let f=a*n,h=0,g=f,y=f*2,_=-1;s==="RGBA"?(h=0,g=f,y=f*2,_=f*3):s==="RGB"?(h=0,g=f,y=f*2):s==="RBG"&&(h=0,y=f,g=f*2);for(let w=0;w<a;w++)for(let k=0;k<n;k++){let x=(e.data[h++]-p[0])*l[0],b=(e.data[g++]-p[1])*l[1],I=(e.data[y++]-p[2])*l[2],S=_===-1?255:(e.data[_++]-p[3])*l[3];i.fillStyle="rgba("+x+","+b+","+I+","+S+")",i.fillRect(k,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Yd=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t?.norm,p,f;l===void 0||l.mean===void 0?p=[255,255,255,255]:typeof l.mean=="number"?p=[l.mean,l.mean,l.mean,l.mean]:(p=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(p[3]=l.mean[3])),l===void 0||l.bias===void 0?f=[0,0,0,0]:typeof l.bias=="number"?f=[l.bias,l.bias,l.bias,l.bias]:(f=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(f[3]=l.bias[3]));let h=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let g=4,y=0,_=1,w=2,k=3,x=0,b=h,I=h*2,S=-1;u==="RGBA"?(x=0,b=h,I=h*2,S=h*3):u==="RGB"?(x=0,b=h,I=h*2):u==="RBG"&&(x=0,I=h,b=h*2),i=r.createImageData(n,a);for(let E=0;E<a*n;y+=g,_+=g,w+=g,k+=g,E++)i.data[y]=(e.data[x++]-f[0])*p[0],i.data[_]=(e.data[b++]-f[1])*p[1],i.data[w]=(e.data[I++]-f[2])*p[2],i.data[k]=S===-1?255:(e.data[S++]-f[3])*p[3]}else throw new Error("Can not access image data");return i}}),Er,Qd,Jd,ep,tp,rp,c0=P(()=>{Ln(),Er=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,f=l==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),h=4,g=0,y=1,_=2,w=3,k=0,x=p,b=p*2,I=-1;u==="RGB"&&(h=3,g=0,y=1,_=2,w=-1),l==="RGBA"?I=p*3:l==="RBG"?(k=0,b=p,x=p*2):l==="BGR"&&(b=0,x=p,k=p*2);for(let S=0;S<p;S++,g+=h,_+=h,y+=h,w+=h)f[k++]=(e[g]+s[0])/a[0],f[x++]=(e[y]+s[1])/a[1],f[b++]=(e[_]+s[2])/a[2],I!==-1&&w!==-1&&(f[I++]=(e[w]+s[3])/a[3]);return l==="RGBA"?new Ue("float32",f,[1,4,r,i]):new Ue("float32",f,[1,3,r,i])},Qd=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,u=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=l();f.width=e.width,f.height=e.height;let h=p(f);if(h!=null){let g=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(g=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=g,u.width=y}else u.tensorFormat="RGBA",u.height=g,u.width=y;h.drawImage(e,0,0),s=h.getImageData(0,0,y,g).data}else throw new Error("Can not access image data")}else if(i){let f,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,h=t.resizedWidth):(f=e.height,h=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=f,u.width=h,t!==void 0){let g=l();g.width=h,g.height=f;let y=p(g);if(y!=null)y.putImageData(e,0,0),s=y.getImageData(0,0,h,f).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=l();f.width=e.width,f.height=e.height;let h=p(f);if(h!=null){let g=e.height,y=e.width;return h.drawImage(e,0,0,y,g),s=h.getImageData(0,0,y,g).data,u.height=g,u.width=y,Er(s,u)}else throw new Error("Can not access image data")}else{if(a)return new Promise((f,h)=>{let g=l(),y=p(g);if(!e||!y)return h();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{g.width=_.width,g.height=_.height,y.drawImage(_,0,0,g.width,g.height);let w=y.getImageData(0,0,g.width,g.height);u.height=g.height,u.width=g.width,f(Er(w.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Er(s,u);throw new Error("Input data provided is not supported - aborted tensor creation")},Jd=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new Ue({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},ep=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Ue({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},tp=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Ue({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},rp=(e,t,r)=>new Ue({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),It,ur,Ti,ip,h0=P(()=>{It=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ur=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ti=!1,ip=()=>{if(!Ti){Ti=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(It.set("int64",BigInt64Array),ur.set(BigInt64Array,"int64")),t&&(It.set("uint64",BigUint64Array),ur.set(BigUint64Array,"uint64")),i?(It.set("float16",r),ur.set(r,"float16")):It.set("float16",Uint16Array)}}}),np,ap,f0=P(()=>{Ln(),np=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},ap=(e,t)=>{switch(e.location){case"cpu":return new Ue(e.type,e.data,t);case"cpu-pinned":return new Ue({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ue({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ue({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Ue({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ue,Ln=P(()=>{p0(),c0(),h0(),f0(),Ue=class{constructor(e,t,r){ip();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=It.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let l=It.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?s=l.from(t,BigInt):s=l.from(t)}else if(t instanceof l)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",s=e;else if(l==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let l=ur.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,s=e}if(u===void 0)u=[s.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");n=u,this.cpuData=s,this.dataLocation="cpu"}let a=np(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return Qd(e,t)}static fromTexture(e,t){return Jd(e,t)}static fromGpuBuffer(e,t){return ep(e,t)}static fromMLTensor(e,t){return tp(e,t)}static fromPinnedBuffer(e,t,r){return rp(e,t,r)}toDataURL(e){return Zd(this,e)}toImageData(e){return Yd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return ap(this,e)}}}),Ze,sp=P(()=>{Ln(),Ze=Ue}),Gr,Ii,it,Ye,Ct,At,op=P(()=>{Xd(),Gr=(e,t)=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeStamp(`${e}::ORT::${t}`)},Ii=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Gr("CPU",a);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},it=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Ii("BEGIN",e)},Ye=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||Ii("END",e)},Ct=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.time(`ORT::${e}`)},At=e=>{(typeof ze.trace>"u"?!ze.wasm.trace:!ze.trace)||console.timeEnd(`ORT::${e}`)}}),up,m0=P(()=>{jd(),sp(),op(),up=class lp{constructor(t){this.handler=t}async run(t,r,i){it(),Ct("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof Ze||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ze)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);n[p]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,f=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(f.indexOf(h)!==-1){let g=r[h];(g===null||g instanceof Ze)&&(p=!0,s=!1,n[h]=g)}if(p){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(s)for(let p of this.outputNames)n[p]=null;let u=await this.handler.run(t,n,a),l={};for(let p in u)if(Object.hasOwnProperty.call(u,p)){let f=u[p];f instanceof Ze?l[p]=f:l[p]=new Ze(f.type,f.data,f.dims)}return At("InferenceSession.run"),Ye(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){it(),Ct("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,h=0,g=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(g=t.byteLength-h,typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteLength' must be an integer.");if(g<=0||h+g>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-h}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(f,h,g)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,l]=await Fd(s),p=await u.createInferenceSessionHandler(a,l);return At("InferenceSession.create"),Ye(),new lp(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Hr,g0=P(()=>{m0(),Hr=up}),y0=P(()=>{}),_0=P(()=>{}),b0=P(()=>{}),w0=P(()=>{}),$0={};Ht($0,{InferenceSession:()=>Hr,TRACE:()=>Gr,TRACE_EVENT_BEGIN:()=>Ct,TRACE_EVENT_END:()=>At,TRACE_FUNC_BEGIN:()=>it,TRACE_FUNC_END:()=>Ye,Tensor:()=>Ze,env:()=>ye,registerBackend:()=>Lt});var We=P(()=>{u0(),d0(),g0(),sp(),y0(),_0(),op(),b0(),w0()}),Wn=P(()=>{}),dp={};Ht(dp,{default:()=>pp});var Ei,zi,pp,v0=P(()=>{yf(),Mt(),Vn(),Ei="ort-wasm-proxy-worker",zi=globalThis.self?.name===Ei,zi&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Gn(r.wasm).then(()=>{oa(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:n}=r;ua(n,i).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})});break}case"copy-from":{let{buffer:i}=r,n=Qr(i);postMessage({type:t,out:n});break}case"create":{let{model:i,options:n}=r;la(i,n).then(a=>{postMessage({type:t,out:a})},a=>{postMessage({type:t,err:a})});break}case"release":da(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:n,inputs:a,outputIndices:s,options:u}=r;pa(i,n,a,s,new Array(s.length).fill(null),u).then(l=>{l.some(p=>p[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:l},ha([...a,...l]))},l=>{postMessage({type:t,err:l})});break}case"end-profiling":ca(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),pp=zi?null:e=>new Worker(e??De,{type:"module",name:Ei})}),cp={};Ht(cp,{default:()=>hp});async function lo(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(o,d)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Xc||(t.Xc=new Map)).set(o,d)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=o=>async(...d)=>{try{if(t.Yc)throw Error("Session already started");let m=t.Yc={Kd:d[0],errors:[]},c=await o(...d);if(t.Yc!==m)throw Error("Session mismatch");t.dd?.flush();let $=m.errors;if(0<$.length){let T=await Promise.all($);if(T=T.filter(z=>z),0<T.length)throw Error(T.join(`
`))}return c}finally{t.Yc=null}};t.jsepInit=(o,d)=>{if(o==="webgpu"){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=d;let m=t.dd;t.jsepRegisterBuffer=(c,$,T,z)=>m.registerBuffer(c,$,T,z),t.jsepGetBuffer=c=>m.getBuffer(c),t.jsepCreateDownloader=(c,$,T)=>m.createDownloader(c,$,T),t.jsepOnCreateSession=c=>{m.onCreateSession(c)},t.jsepOnReleaseSession=c=>{m.onReleaseSession(c)},t.jsepOnRunStart=c=>m.onRunStart(c),t.Id=(c,$)=>{m.upload(c,$)}}else if(o==="webnn"){let m=d[0];[t.Sd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=d.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=c=>m.onRunStart(c),t.webnnOnRunEnd=m.onRunEnd.bind(m),t.webnnOnReleaseSession=c=>{m.onReleaseSession(c)},t.webnnCreateMLTensorDownloader=(c,$)=>m.createMLTensorDownloader(c,$),t.webnnRegisterMLTensor=(c,$,T,z)=>m.registerMLTensor(c,$,T,z),t.webnnCreateMLContext=c=>m.createMLContext(c),t.webnnRegisterMLConstant=(c,$,T,z,B,L)=>m.registerMLConstant(c,$,T,z,B,t.Xc,L),t.webnnRegisterGraphInput=m.registerGraphInput.bind(m),t.webnnIsGraphInput=m.isGraphInput.bind(m),t.webnnRegisterGraphOutput=m.registerGraphOutput.bind(m),t.webnnIsGraphOutput=m.isGraphOutput.bind(m),t.webnnCreateTemporaryTensor=m.createTemporaryTensor.bind(m),t.webnnIsGraphInputOutputTypeSupported=m.isGraphInputOutputTypeSupported.bind(m)}};let s=()=>{let o=d=>(...m)=>{let c=et;return m=d(...m),et!=c?new Promise(($,T)=>{pi={resolve:$,reject:T}}):m};(()=>{for(let d of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[d]=o(t[d])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s?.()};var u,l,p=(o,d)=>{throw d},f=import.meta.url,h="";if(r||i){try{h=new URL(".",f).href}catch{}i&&(l=o=>{var d=new XMLHttpRequest;return d.open("GET",o,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),u=async o=>{if(C(o))return new Promise((m,c)=>{var $=new XMLHttpRequest;$.open("GET",o,!0),$.responseType="arraybuffer",$.onload=()=>{$.status==200||$.status==0&&$.response?m($.response):c($.status)},$.onerror=c,$.send(null)});var d=await fetch(o,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw Error(d.status+" : "+d.url)}}var g,y,_,w,k,x,b=console.log.bind(console),I=console.error.bind(console),S=b,E=I,A=!1,C=o=>o.startsWith("file://");function v(){dt.buffer!=q.buffer&&Q()}if(n){let o=function(d){try{var m=d.data,c=m.Sc;if(c==="load"){let $=[];self.onmessage=T=>$.push(T),x=()=>{postMessage({Sc:"loaded"});for(let T of $)o(T);self.onmessage=o};for(let T of m.xd)t[T]&&!t[T].proxy||(t[T]=(...z)=>{postMessage({Sc:"callHandler",wd:T,args:z})},T=="print"&&(S=t[T]),T=="printErr"&&(E=t[T]));dt=m.Od,Q(),y=m.Pd,Ae(),Ir()}else if(c==="run"){(function($){var T=(v(),N)[$+52>>>2>>>0];$=(v(),N)[$+56>>>2>>>0],gs(T,T-$),oe(T)})(m.Rc),gi(m.Rc,0,0,1,0,0),ya(),ui(m.Rc),D||(ds(),D=!0);try{zf(m.Md,m.bd)}catch($){if($!="unwind")throw $}}else m.target!=="setimmediate"&&(c==="checkMailbox"?D&&wr():c&&(E(`worker: received unknown command ${c}`),E(m)))}catch($){throw ps(),$}};var D=!1;self.onunhandledrejection=d=>{throw d.reason||d},self.onmessage=o}var q,Y,F,K,R,N,G,J,ee,re,ae,U=!1;function Q(){var o=dt.buffer;t.HEAP8=q=new Int8Array(o),F=new Int16Array(o),t.HEAPU8=Y=new Uint8Array(o),K=new Uint16Array(o),t.HEAP32=R=new Int32Array(o),t.HEAPU32=N=new Uint32Array(o),G=new Float32Array(o),J=new Float64Array(o),ee=new BigInt64Array(o),re=new BigUint64Array(o)}function Z(){U=!0,n?x():at.sb()}function V(o){throw E(o="Aborted("+o+")"),A=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),k?.(o),o}function Ie(){return{a:{ma:Qm,gb:Ym,g:Cf,J:Af,f:Of,o:Rf,h:Bf,ha:Mf,b:Nf,T:Df,Ha:xa,n:Uf,$:Ia,Xa:Ea,Da:za,Fa:Ca,Ya:Aa,Va:Oa,Oa:Ra,Ua:Ba,ka:Ma,Ea:Na,Ba:Da,Wa:Ua,Ca:Pa,bb:Pf,ea:qf,wa:Lf,ua:Vf,da:Hf,O:Ff,H:jf,va:Kf,_:tm,xa:rm,Ra:im,za:am,Ia:sm,sa:om,fa:um,Qa:ui,_a:lm,R:hm,r:_m,c:si,hb:bm,y:wm,M:$m,D:vm,l:xm,s:ja,ib:Sm,I:km,S:Tm,j:Im,u:Em,q:zm,k:Cm,La:Am,Ma:Om,Na:Rm,Ja:Ya,Ka:Qa,ta:Ja,db:Mm,ab:Dm,v:Um,aa:Pm,ga:qm,$a:Nm,W:Lm,Za:Wm,Aa:Vm,F:Bm,U:Gm,la:kr,ya:Fm,fb:Hm,eb:jm,Sa:is,Ta:ns,Ga:ti,V:as,ja:ss,Pa:os,ia:us,kb:Bg,na:zg,lb:Rg,oa:Eg,G:bg,e:rg,t:eg,w:Jm,B:cg,mb:kg,K:gg,x:ag,pa:Tg,Y:Cg,ba:Sg,nb:xg,ob:vg,P:hg,qa:$g,pb:wg,N:yg,Z:Ig,d:tg,A:ng,m:ig,jb:Mg,p:og,z:ug,C:sg,E:lg,L:fg,qb:_g,Q:Ag,ca:mg,X:Og,rb:pg,ra:dg,i:Xm,a:dt,cb:ei}}}async function Ae(){function o(c,$){var T=at=c.exports;c={};for(let[z,B]of Object.entries(T))typeof B=="function"?(T=dm(B),c[z]=T):c[z]=B;return at=c,at=function(){var z=at,B=W=>se=>W(se)>>>0,L=W=>()=>W()>>>0;return(z=Object.assign({},z)).tb=B(z.tb),z.Xb=L(z.Xb),z.Zb=B(z.Zb),z.lc=B(z.lc),z.mc=L(z.mc),z.qc=B(z.qc),z}(),ma.push(at._b),ls=(c=at).tb,ds=c.ub,t._OrtInit=c.vb,t._OrtGetLastError=c.wb,t._OrtCreateSessionOptions=c.xb,t._OrtAppendExecutionProvider=c.yb,t._OrtAddFreeDimensionOverride=c.zb,t._OrtAddSessionConfigEntry=c.Ab,t._OrtReleaseSessionOptions=c.Bb,t._OrtCreateSession=c.Cb,t._OrtReleaseSession=c.Db,t._OrtGetInputOutputCount=c.Eb,t._OrtGetInputOutputMetadata=c.Fb,t._OrtFree=c.Gb,t._OrtCreateTensor=c.Hb,t._OrtGetTensorData=c.Ib,t._OrtReleaseTensor=c.Jb,t._OrtCreateRunOptions=c.Kb,t._OrtAddRunConfigEntry=c.Lb,t._OrtReleaseRunOptions=c.Mb,t._OrtCreateBinding=c.Nb,t._OrtBindInput=c.Ob,t._OrtBindOutput=c.Pb,t._OrtClearBoundOutputs=c.Qb,t._OrtReleaseBinding=c.Rb,t._OrtRunWithBinding=c.Sb,t._OrtRun=c.Tb,t._OrtEndProfiling=c.Ub,t._JsepOutput=c.Vb,t._JsepGetNodeName=c.Wb,Tr=c.Xb,tt=t._free=c.Yb,Kt=t._malloc=c.Zb,gi=c.ac,ps=c.bc,cs=c.cc,hs=c.dc,yi=c.ec,fs=c.fc,ms=c.gc,le=c.hc,Xt=c.ic,gs=c.jc,oe=c.kc,_i=c.lc,ue=c.mc,ys=c.nc,bi=c.oc,_s=c.pc,bs=c.qc,ws=c.rc,wi=c.sc,$s=c.tc,vs=c.uc,xs=c.vc,Ss=c.wc,ks=c.xc,Ts=c.yc,Is=c.zc,Es=c.Ac,zs=c.Bc,Cs=c.Cc,As=c.Dc,Os=c.Ec,Rs=c.Fc,Bs=c.Gc,Ms=c.Hc,Ns=c.Ic,Ds=c.Jc,Us=c.Kc,Ps=c.Lc,qs=c.Mc,Ls=c.Nc,Ws=c.Pc,Vs=c.Qc,Gs=c.$c,Hs=c.ad,Fs=c.fd,js=c.jd,Ks=c.kd,Xs=c.ld,Zs=c.md,Ys=c.nd,Qs=c.od,Js=c.pd,eo=c.qd,to=c.vd,ro=c.Td,io=c.Ud,no=c.Vd,ao=c.Wd,y=$,at}var d,m=Ie();return t.instantiateWasm?new Promise(c=>{t.instantiateWasm(m,($,T)=>{c(o($,T))})}):n?o(new WebAssembly.Instance(y,Ie()),y):(ae??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href,import.meta.url).href,d=await async function(c){var $=ae;if(!g&&!C($))try{var T=fetch($,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(T,c)}catch(z){E(`wasm streaming compile failed: ${z}`),E("falling back to ArrayBuffer instantiation")}return async function(z,B){try{var L=await async function(W){if(!g)try{var se=await u(W);return new Uint8Array(se)}catch{}if(W==ae&&g)W=new Uint8Array(g);else{if(!l)throw"both async and sync fetching of the wasm failed";W=l(W)}return W}(z);return await WebAssembly.instantiate(L,B)}catch(W){E(`failed to asynchronously prepare wasm: ${W}`),V(W)}}($,c)}(m),o(d.instance,d.module))}class $e{name="ExitStatus";constructor(d){this.message=`Program terminated with exit(${d})`,this.status=d}}var Oe=o=>{o.terminate(),o.onmessage=()=>{}},me=[],we=0,Be=null,mr=o=>{lt.length==0&&(ba(),_a(lt[0]));var d=lt.pop();if(!d)return 6;Ft.push(d),bt[o.Rc]=d,d.Rc=o.Rc;var m={Sc:"run",Md:o.Ld,bd:o.bd,Rc:o.Rc};return d.postMessage(m,o.rd),0},Qe=0,ve=(o,d,...m)=>{var c,$=16*m.length,T=ue(),z=_i($),B=z>>>3;for(c of m)typeof c=="bigint"?((v(),ee)[B++>>>0]=1n,(v(),ee)[B++>>>0]=c):((v(),ee)[B++>>>0]=0n,(v(),J)[B++>>>0]=c);return o=cs(o,0,$,z,d),oe(T),o};function ei(o){if(n)return ve(0,1,o);if(_=o,!(0<Qe)){for(var d of Ft)Oe(d);for(d of lt)Oe(d);lt=[],Ft=[],bt={},A=!0}p(0,new $e(o))}function fa(o){if(n)return ve(1,0,o);ti(o)}var ti=o=>{if(_=o,n)throw fa(o),"unwind";ei(o)},lt=[],Ft=[],ma=[],bt={},ga=o=>{var d=o.Rc;delete bt[d],lt.push(o),Ft.splice(Ft.indexOf(o),1),o.Rc=0,hs(d)};function ya(){ma.forEach(o=>o())}var _a=o=>new Promise(d=>{o.onmessage=$=>{var T=$.data;if($=T.Sc,T.Zc&&T.Zc!=Tr()){var z=bt[T.Zc];z?z.postMessage(T,T.rd):E(`Internal error! Worker sent a message "${$}" to target pthread ${T.Zc}, but that thread no longer exists!`)}else $==="checkMailbox"?wr():$==="spawnThread"?mr(T):$==="cleanupThread"?br(()=>{ga(bt[T.Nd])}):$==="loaded"?(o.loaded=!0,d(o)):T.target==="setimmediate"?o.postMessage(T):$==="uncaughtException"?o.onerror(T.error):$==="callHandler"?t[T.wd](...T.args):$&&E(`worker sent an unknown command ${$}`)},o.onerror=$=>{throw E(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var m,c=[];for(m of[])t.propertyIsEnumerable(m)&&c.push(m);o.postMessage({Sc:"load",xd:c,Od:dt,Pd:y})});function ba(){var o=new Worker((()=>{let d=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new d("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});lt.push(o)}var dt,zf=(o,d)=>{Qe=0,o=wi(o,d),0<Qe?_=o:yi(o)},gr=[],yr=0;function Cf(o){var d=new ri(o>>>=0);return(v(),q)[d.Tc+12>>>0]==0&&(wa(d,!0),yr--),$a(d,!1),gr.push(d),bs(o)}var Dt=0,Af=()=>{le(0,0);var o=gr.pop();ys(o.cd),Dt=0};function wa(o,d){d=d?1:0,(v(),q)[o.Tc+12>>>0]=d}function $a(o,d){d=d?1:0,(v(),q)[o.Tc+13>>>0]=d}class ri{constructor(d){this.cd=d,this.Tc=d-24}}var ii=o=>{var d=Dt;if(!d)return Xt(0),0;var m=new ri(d);(v(),N)[m.Tc+16>>>2>>>0]=d;var c=(v(),N)[m.Tc+4>>>2>>>0];if(!c)return Xt(0),d;for(var $ of o){if($===0||$===c)break;if(_s($,c,m.Tc+16))return Xt($),d}return Xt(c),d};function Of(){return ii([])}function Rf(o){return ii([o>>>0])}function Bf(o,d,m,c){return ii([o>>>0,d>>>0,m>>>0,c>>>0])}var Mf=()=>{var o=gr.pop();o||V("no exception to throw");var d=o.cd;throw(v(),q)[o.Tc+13>>>0]==0&&(gr.push(o),$a(o,!0),wa(o,!1),yr++),bi(d),Dt=d};function Nf(o,d,m){var c=new ri(o>>>=0);throw d>>>=0,m>>>=0,(v(),N)[c.Tc+16>>>2>>>0]=0,(v(),N)[c.Tc+4>>>2>>>0]=d,(v(),N)[c.Tc+8>>>2>>>0]=m,bi(o),yr++,Dt=o}var Df=()=>yr;function va(o,d,m,c){return n?ve(2,1,o,d,m,c):xa(o,d,m,c)}function xa(o,d,m,c){if(o>>>=0,d>>>=0,m>>>=0,c>>>=0,!globalThis.SharedArrayBuffer)return 6;var $=[];return n&&$.length===0?va(o,d,m,c):(o={Ld:m,Rc:o,bd:c,rd:$},n?(o.Sc="spawnThread",postMessage(o,$),0):mr(o))}function Uf(o){throw Dt||=o>>>0,Dt}var Sa=globalThis.TextDecoder&&new TextDecoder,ka=(o,d,m,c)=>{if(m=d+m,c)return m;for(;o[d]&&!(d>=m);)++d;return d},Ta=(o,d=0,m,c)=>{if(16<(m=ka(o,d>>>=0,m,c))-d&&o.buffer&&Sa)return Sa.decode(o.buffer instanceof ArrayBuffer?o.subarray(d,m):o.slice(d,m));for(c="";d<m;){var $=o[d++];if(128&$){var T=63&o[d++];if((224&$)==192)c+=String.fromCharCode((31&$)<<6|T);else{var z=63&o[d++];65536>($=(240&$)==224?(15&$)<<12|T<<6|z:(7&$)<<18|T<<12|z<<6|63&o[d++])?c+=String.fromCharCode($):($-=65536,c+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else c+=String.fromCharCode($)}return c},Te=(o,d,m)=>(o>>>=0)?Ta((v(),Y),o,d,m):"";function Ia(o,d,m){return n?ve(3,1,o,d,m):0}function Ea(o,d){if(n)return ve(4,1,o,d)}function za(o,d){if(n)return ve(5,1,o,d)}function Ca(o,d,m){if(n)return ve(6,1,o,d,m)}function Aa(o,d,m){return n?ve(7,1,o,d,m):0}function Oa(o,d){if(n)return ve(8,1,o,d)}function Ra(o,d,m){if(n)return ve(9,1,o,d,m)}function Ba(o,d,m,c){if(n)return ve(10,1,o,d,m,c)}function Ma(o,d,m,c){if(n)return ve(11,1,o,d,m,c)}function Na(o,d,m,c){if(n)return ve(12,1,o,d,m,c)}function Da(o){if(n)return ve(13,1,o)}function Ua(o,d){if(n)return ve(14,1,o,d)}function Pa(o,d,m){if(n)return ve(15,1,o,d,m)}var Pf=()=>V(""),Je=o=>{o>>>=0;for(var d="";;){var m=(v(),Y)[o++>>>0];if(!m)return d;d+=String.fromCharCode(m)}},ni={},ai={},Ut=class extends Error{constructor(o){super(o),this.name="BindingError"}};function nt(o,d,m={}){return function(c,$,T={}){var z=$.name;if(!c)throw new Ut(`type "${z}" must have a positive integer typeid pointer`);if(ai.hasOwnProperty(c)){if(T.yd)return;throw new Ut(`Cannot register type '${z}' twice`)}ai[c]=$,ni.hasOwnProperty(c)&&($=ni[c],delete ni[c],$.forEach(B=>B()))}(o,d,m)}var qa=(o,d,m)=>{switch(d){case 1:return m?c=>(v(),q)[c>>>0]:c=>(v(),Y)[c>>>0];case 2:return m?c=>(v(),F)[c>>>1>>>0]:c=>(v(),K)[c>>>1>>>0];case 4:return m?c=>(v(),R)[c>>>2>>>0]:c=>(v(),N)[c>>>2>>>0];case 8:return m?c=>(v(),ee)[c>>>3>>>0]:c=>(v(),re)[c>>>3>>>0];default:throw new TypeError(`invalid integer width (${d}): ${o}`)}};function qf(o,d,m,c,$){o>>>=0,m>>>=0,d=Je(d>>>0);let T=z=>z;if(c=c===0n){let z=8*m;T=B=>BigInt.asUintN(z,B),$=T($)}nt(o,{name:d,Oc:T,Vc:(z,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Uc:qa(d,m,!c),Wc:null})}function Lf(o,d,m,c){nt(o>>>=0,{name:d=Je(d>>>0),Oc:function($){return!!$},Vc:function($,T){return T?m:c},Uc:function($){return this.Oc((v(),Y)[$>>>0])},Wc:null})}var La=[],wt=[0,1,,1,null,1,!0,1,!1,1];function si(o){9<(o>>>=0)&&--wt[o+1]===0&&(wt[o]=void 0,La.push(o))}var qe=o=>{if(!o)throw new Ut(`Cannot use deleted val. handle = ${o}`);return wt[o]},Ve=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let d=La.pop()||wt.length;return wt[d]=o,wt[d+1]=1,d}};function oi(o){return this.Oc((v(),N)[o>>>2>>>0])}var Wf={name:"emscripten::val",Oc:o=>{var d=qe(o);return si(o),d},Vc:(o,d)=>Ve(d),Uc:oi,Wc:null};function Vf(o){return nt(o>>>0,Wf)}var Gf=(o,d)=>{switch(d){case 4:return function(m){return this.Oc((v(),G)[m>>>2>>>0])};case 8:return function(m){return this.Oc((v(),J)[m>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${o}`)}};function Hf(o,d,m){m>>>=0,nt(o>>>=0,{name:d=Je(d>>>0),Oc:c=>c,Vc:(c,$)=>$,Uc:Gf(d,m),Wc:null})}function Ff(o,d,m,c,$){o>>>=0,m>>>=0,d=Je(d>>>0);let T=B=>B;if(c===0){var z=32-8*m;T=B=>B<<z>>>z,$=T($)}nt(o,{name:d,Oc:T,Vc:(B,L)=>L,Uc:qa(d,m,c!==0),Wc:null})}function jf(o,d,m){function c(T){var z=(v(),N)[T>>>2>>>0];return T=(v(),N)[T+4>>>2>>>0],new $((v(),q).buffer,T,z)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][d];nt(o>>>=0,{name:m=Je(m>>>0),Oc:c,Uc:c},{yd:!0})}var pt=(o,d,m)=>{var c=(v(),Y);if(d>>>=0,0<m){var $=d;m=d+m-1;for(var T=0;T<o.length;++T){var z=o.codePointAt(T);if(127>=z){if(d>=m)break;c[d++>>>0]=z}else if(2047>=z){if(d+1>=m)break;c[d++>>>0]=192|z>>6,c[d++>>>0]=128|63&z}else if(65535>=z){if(d+2>=m)break;c[d++>>>0]=224|z>>12,c[d++>>>0]=128|z>>6&63,c[d++>>>0]=128|63&z}else{if(d+3>=m)break;c[d++>>>0]=240|z>>18,c[d++>>>0]=128|z>>12&63,c[d++>>>0]=128|z>>6&63,c[d++>>>0]=128|63&z,T++}}c[d>>>0]=0,o=d-$}else o=0;return o},_r=o=>{for(var d=0,m=0;m<o.length;++m){var c=o.charCodeAt(m);127>=c?d++:2047>=c?d+=2:55296<=c&&57343>=c?(d+=4,++m):d+=3}return d};function Kf(o,d){nt(o>>>=0,{name:d=Je(d>>>0),Oc(m){var c=(v(),N)[m>>>2>>>0];return c=Te(m+4,c,!0),tt(m),c},Vc(m,c){c instanceof ArrayBuffer&&(c=new Uint8Array(c));var $=typeof c=="string";if(!($||ArrayBuffer.isView(c)&&c.BYTES_PER_ELEMENT==1))throw new Ut("Cannot pass non-string to std::string");var T=$?_r(c):c.length,z=Kt(4+T+1),B=z+4;return(v(),N)[z>>>2>>>0]=T,$?pt(c,B,T+1):(v(),Y).set(c,B>>>0),m!==null&&m.push(tt,z),z},Uc:oi,Wc(m){tt(m)}})}var Wa=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Xf=(o,d,m)=>{if(o>>>=1,16<(d=ka((v(),K),o,d/2,m))-o&&Wa)return Wa.decode((v(),K).slice(o,d));for(m="";o<d;++o){var c=(v(),K)[o>>>0];m+=String.fromCharCode(c)}return m},Zf=(o,d,m)=>{if(m??=2147483647,2>m)return 0;var c=d;m=(m-=2)<2*o.length?m/2:o.length;for(var $=0;$<m;++$){var T=o.charCodeAt($);(v(),F)[d>>>1>>>0]=T,d+=2}return(v(),F)[d>>>1>>>0]=0,d-c},Yf=o=>2*o.length,Qf=(o,d,m)=>{var c="";o>>>=2;for(var $=0;!($>=d/4);$++){var T=(v(),N)[o+$>>>0];if(!T&&!m)break;c+=String.fromCodePoint(T)}return c},Jf=(o,d,m)=>{if(d>>>=0,m??=2147483647,4>m)return 0;var c=d;m=c+m-4;for(var $=0;$<o.length;++$){var T=o.codePointAt($);if(65535<T&&$++,(v(),R)[d>>>2>>>0]=T,(d+=4)+4>m)break}return(v(),R)[d>>>2>>>0]=0,d-c},em=o=>{for(var d=0,m=0;m<o.length;++m)65535<o.codePointAt(m)&&m++,d+=4;return d};function tm(o,d,m){if(o>>>=0,d>>>=0,m=Je(m>>>=0),d===2)var c=Xf,$=Zf,T=Yf;else c=Qf,$=Jf,T=em;nt(o,{name:m,Oc:z=>{var B=(v(),N)[z>>>2>>>0];return B=c(z+4,B*d,!0),tt(z),B},Vc:(z,B)=>{if(typeof B!="string")throw new Ut(`Cannot pass non-string to C++ string type ${m}`);var L=T(B),W=Kt(4+L+d);return(v(),N)[W>>>2>>>0]=L/d,$(B,W+4,L+d),z!==null&&z.push(tt,W),W},Uc:oi,Wc(z){tt(z)}})}function rm(o,d){nt(o>>>=0,{zd:!0,name:d=Je(d>>>0),Oc:()=>{},Vc:()=>{}})}function im(o){gi(o>>>0,!i,1,!r,131072,!1),ya()}var br=o=>{if(!A)try{if(o(),!(0<Qe))try{n?Tr()&&yi(_):ti(_)}catch(d){d instanceof $e||d=="unwind"||p(0,d)}}catch(d){d instanceof $e||d=="unwind"||p(0,d)}},nm=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ui(o){o>>>=0,nm||(Atomics.waitAsync((v(),R),o>>>2,o).value.then(wr),o+=128,Atomics.store((v(),R),o>>>2,1))}var wr=()=>br(()=>{var o=Tr();o&&(ui(o),ms())});function am(o,d){(o>>>=0)==d>>>0?setTimeout(wr):n?postMessage({Zc:o,Sc:"checkMailbox"}):(o=bt[o])&&o.postMessage({Sc:"checkMailbox"})}var li=[];function sm(o,d,m,c,$){for(d>>>=0,$>>>=0,li.length=0,m=$>>>3,c=$+c>>>3;m<c;){var T;T=(v(),ee)[m++>>>0]?(v(),ee)[m++>>>0]:(v(),J)[m++>>>0],li.push(T)}return(d?$i[d]:Zm[o])(...li)}var om=()=>{Qe=0};function um(o){o>>>=0,n?postMessage({Sc:"cleanupThread",Nd:o}):ga(bt[o])}function lm(o){}var $r=o=>{try{o()}catch(d){V(d)}};function dm(o){var d=(...m)=>{vr.push(o);try{return o(...m)}finally{A||(vr.pop(),et&&ct===1&&vr.length===0&&(ct=0,Qe+=1,$r(io),typeof Fibers<"u"&&Fibers.Zd()))}};return Ha.set(o,d),d}var ct=0,et=null,Va=0,vr=[],di=new Map,Ga=new Map,Ha=new Map,pm=0,pi=null,cm=[],Fa=o=>function(d){if(!A){if(ct===0){var m=!1,c=!1;d(($=0)=>{if(!A&&(Va=$,m=!0,c)){ct=2,$r(()=>no(et)),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.resume(),$=!1;try{var T=function(){var L=(v(),R)[et+8>>>2>>>0];return L=Ga.get(L),L=Ha.get(L),--Qe,L()}()}catch(L){T=L,$=!0}var z=!1;if(!et){var B=pi;B&&(pi=null,($?B.reject:B.resolve)(T),z=!0)}if($&&!z)throw T}}),c=!0,m||(ct=1,et=function(){var $=Kt(65548),T=$+12;if((v(),N)[$>>>2>>>0]=T,(v(),N)[$+4>>>2>>>0]=T+65536,T=vr[0],!di.has(T)){var z=pm++;di.set(T,z),Ga.set(z,T)}return T=di.get(T),(v(),R)[$+8>>>2>>>0]=T,$}(),typeof MainLoop<"u"&&MainLoop.ud&&MainLoop.pause(),$r(()=>ro(et)))}else ct===2?(ct=0,$r(ao),tt(et),et=null,cm.forEach(br)):V(`invalid state: ${ct}`);return Va}}(d=>{o().then(d)});function hm(o){return o>>>=0,Fa(async()=>{var d=await qe(o);return Ve(d)})}var ci=[],fm=o=>{var d=ci.length;return ci.push(o),d},mm=(o,d)=>{for(var m=Array(o),c=0;c<o;++c){var $=c,T=(v(),N)[d+4*c>>>2>>>0],z=ai[T];if(z===void 0)throw o=`parameter ${c}`,T=ls(T),d=Je(T),tt(T),new Ut(`${o} has unknown type ${d}`);m[$]=z}return m},gm=(o,d,m)=>{var c=[];return o=o(c,m),c.length&&((v(),N)[d>>>2>>>0]=Ve(c)),o},ym={},xr=o=>{var d=ym[o];return d===void 0?Je(o):d};function _m(o,d,m){var[c,...$]=mm(o,d>>>0);d=c.Vc.bind(c);var T=$.map(L=>L.Uc.bind(L));o--;var z={toValue:qe};switch(o=T.map((L,W)=>{var se=`argFromPtr${W}`;return z[se]=L,`${se}(args${W?"+"+8*W:""})`}),m){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:z.getStringOrSymbol=xr,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${o})`,c.zd||(z.toReturnWire=d,z.emval_returnValue=gm,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,m=new Function(Object.keys(z),B)(...Object.values(z)),B=`methodCaller<(${$.map(L=>L.name)}) => ${c.name}>`,fm(Object.defineProperty(m,"name",{value:B}))}function bm(o,d){return d>>>=0,(o=qe(o>>>0))==qe(d)}function wm(o){return(o>>>=0)?(o=xr(o),Ve(globalThis[o])):Ve(globalThis)}function $m(o){return o=xr(o>>>0),Ve(t[o])}function vm(o,d){return d>>>=0,o=qe(o>>>0),d=qe(d),Ve(o[d])}function xm(o){9<(o>>>=0)&&(wt[o+1]+=1)}function ja(o,d,m,c,$){return ci[o>>>0](d>>>0,m>>>0,c>>>0,$>>>0)}function Sm(o,d,m,c,$){return ja(o>>>0,d>>>0,m>>>0,c>>>0,$>>>0)}function km(){return Ve([])}function Tm(o){o=qe(o>>>0);for(var d=Array(o.length),m=0;m<o.length;m++)d[m]=o[m];return Ve(d)}function Im(o){return Ve(xr(o>>>0))}function Em(){return Ve({})}function zm(o){for(var d=qe(o>>>=0);d.length;){var m=d.pop();d.pop()(m)}si(o)}function Cm(o,d,m){d>>>=0,m>>>=0,o=qe(o>>>0),d=qe(d),m=qe(m),o[d]=m}function Am(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(v(),R)[d>>>2>>>0]=o.getUTCSeconds(),(v(),R)[d+4>>>2>>>0]=o.getUTCMinutes(),(v(),R)[d+8>>>2>>>0]=o.getUTCHours(),(v(),R)[d+12>>>2>>>0]=o.getUTCDate(),(v(),R)[d+16>>>2>>>0]=o.getUTCMonth(),(v(),R)[d+20>>>2>>>0]=o.getUTCFullYear()-1900,(v(),R)[d+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(v(),R)[d+28>>>2>>>0]=o}var Ka=o=>o%4==0&&(o%100!=0||o%400==0),Xa=[0,31,60,91,121,152,182,213,244,274,305,335],Za=[0,31,59,90,120,151,181,212,243,273,304,334];function Om(o,d){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),d>>>=0,o=new Date(1e3*o),(v(),R)[d>>>2>>>0]=o.getSeconds(),(v(),R)[d+4>>>2>>>0]=o.getMinutes(),(v(),R)[d+8>>>2>>>0]=o.getHours(),(v(),R)[d+12>>>2>>>0]=o.getDate(),(v(),R)[d+16>>>2>>>0]=o.getMonth(),(v(),R)[d+20>>>2>>>0]=o.getFullYear()-1900,(v(),R)[d+24>>>2>>>0]=o.getDay();var m=(Ka(o.getFullYear())?Xa:Za)[o.getMonth()]+o.getDate()-1|0;(v(),R)[d+28>>>2>>>0]=m,(v(),R)[d+36>>>2>>>0]=-60*o.getTimezoneOffset(),m=new Date(o.getFullYear(),6,1).getTimezoneOffset();var c=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(m!=c&&o.getTimezoneOffset()==Math.min(c,m)),(v(),R)[d+32>>>2>>>0]=o}function Rm(o){o>>>=0;var d=new Date((v(),R)[o+20>>>2>>>0]+1900,(v(),R)[o+16>>>2>>>0],(v(),R)[o+12>>>2>>>0],(v(),R)[o+8>>>2>>>0],(v(),R)[o+4>>>2>>>0],(v(),R)[o>>>2>>>0],0),m=(v(),R)[o+32>>>2>>>0],c=d.getTimezoneOffset(),$=new Date(d.getFullYear(),6,1).getTimezoneOffset(),T=new Date(d.getFullYear(),0,1).getTimezoneOffset(),z=Math.min(T,$);return 0>m?(v(),R)[o+32>>>2>>>0]=+($!=T&&z==c):0<m!=(z==c)&&($=Math.max(T,$),d.setTime(d.getTime()+6e4*((0<m?z:$)-c))),(v(),R)[o+24>>>2>>>0]=d.getDay(),m=(Ka(d.getFullYear())?Xa:Za)[d.getMonth()]+d.getDate()-1|0,(v(),R)[o+28>>>2>>>0]=m,(v(),R)[o>>>2>>>0]=d.getSeconds(),(v(),R)[o+4>>>2>>>0]=d.getMinutes(),(v(),R)[o+8>>>2>>>0]=d.getHours(),(v(),R)[o+12>>>2>>>0]=d.getDate(),(v(),R)[o+16>>>2>>>0]=d.getMonth(),(v(),R)[o+20>>>2>>>0]=d.getYear(),o=d.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Ya(o,d,m,c,$,T,z){return n?ve(16,1,o,d,m,c,$,T,z):-52}function Qa(o,d,m,c,$,T){if(n)return ve(17,1,o,d,m,c,$,T)}var jt={},Bm=()=>performance.timeOrigin+performance.now();function Ja(o,d){if(n)return ve(18,1,o,d);if(jt[o]&&(clearTimeout(jt[o].id),delete jt[o]),!d)return 0;var m=setTimeout(()=>{delete jt[o],br(()=>fs(o,performance.timeOrigin+performance.now()))},d);return jt[o]={id:m,Yd:d},0}function Mm(o,d,m,c){o>>>=0,d>>>=0,m>>>=0,c>>>=0;var $=new Date().getFullYear(),T=new Date($,0,1).getTimezoneOffset();$=new Date($,6,1).getTimezoneOffset();var z=Math.max(T,$);(v(),N)[o>>>2>>>0]=60*z,(v(),R)[d>>>2>>>0]=+(T!=$),o=(d=B=>{var L=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(L/60)).padStart(2,"0")}${String(L%60).padStart(2,"0")}`})(T),d=d($),$<T?(pt(o,m,17),pt(d,c,17)):(pt(o,c,17),pt(d,m,17))}var Nm=()=>Date.now();function Dm(o,d,m){return m>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),(v(),ee)[m>>>3>>>0]=BigInt(o),0):28}var hi=[],es=(o,d)=>{hi.length=0;for(var m;m=(v(),Y)[o++>>>0];){var c=m!=105;d+=(c&=m!=112)&&d%8?4:0,hi.push(m==112?(v(),N)[d>>>2>>>0]:m==106?(v(),ee)[d>>>3>>>0]:m==105?(v(),R)[d>>>2>>>0]:(v(),J)[d>>>3>>>0]),d+=c?8:4}return hi};function Um(o,d,m){return o>>>=0,d=es(d>>>0,m>>>0),$i[o](...d)}function Pm(o,d,m){return o>>>=0,d=es(d>>>0,m>>>0),$i[o](...d)}var qm=()=>{};function Lm(o,d){return E(Te(o>>>0,d>>>0))}var Wm=()=>{throw Qe+=1,"unwind"};function Vm(){return 4294901760}var Gm=()=>navigator.hardwareConcurrency,$t={},Sr=o=>{var d;return(d=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+d[1]:(d=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+d[1]:0},ts=o=>{for(var d of o)(o=Sr(d))&&($t[o]=d)};function Hm(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),ts(o),$t.gd=Sr(o[3]),$t.Jd=o,$t.gd}function kr(o){if(!(o=$t[o>>>0]))return 0;var d;if(d=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=d[1];else if(d=/^\s+at (.*) \(.*\)$/.exec(o))o=d[1];else{if(!(d=/^(.+?)@/.exec(o)))return 0;o=d[1]}tt(kr.hd??0),d=_r(o)+1;var m=Kt(d);return m&&pt(o,m,d),kr.hd=m,kr.hd}function Fm(o){o>>>=0;var d=(v(),Y).length;if(o<=d||4294901760<o)return!1;for(var m=1;4>=m;m*=2){var c=d*(1+.2/m);c=Math.min(c,o+100663296);e:{c=(Math.min(4294901760,65536*Math.ceil(Math.max(o,c)/65536))-dt.buffer.byteLength+65535)/65536|0;try{dt.grow(c),Q();var $=1;break e}catch{}$=void 0}if($)return!0}return!1}function jm(o,d,m){if(o>>>=0,d>>>=0,$t.gd==o)var c=$t.Jd;else(c=Error().stack.toString().split(`
`))[0]=="Error"&&c.shift(),ts(c);for(var $=3;c[$]&&Sr(c[$])!=o;)++$;for(o=0;o<m&&c[o+$];++o)(v(),R)[d+4*o>>>2>>>0]=Sr(c[o+$]);return o}var fi,mi={},rs=()=>{if(!fi){var o,d={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in mi)mi[o]===void 0?delete d[o]:d[o]=mi[o];var m=[];for(o in d)m.push(`${o}=${d[o]}`);fi=m}return fi};function is(o,d){if(n)return ve(19,1,o,d);o>>>=0,d>>>=0;var m,c=0,$=0;for(m of rs()){var T=d+c;(v(),N)[o+$>>>2>>>0]=T,c+=pt(m,T,1/0)+1,$+=4}return 0}function ns(o,d){if(n)return ve(20,1,o,d);o>>>=0,d>>>=0;var m=rs();for(var c of((v(),N)[o>>>2>>>0]=m.length,o=0,m))o+=_r(c)+1;return(v(),N)[d>>>2>>>0]=o,0}function as(o){return n?ve(21,1,o):52}function ss(o,d,m,c){return n?ve(22,1,o,d,m,c):52}function os(o,d,m,c){return n?ve(23,1,o,d,m,c):70}var Km=[null,[],[]];function us(o,d,m,c){if(n)return ve(24,1,o,d,m,c);d>>>=0,m>>>=0,c>>>=0;for(var $=0,T=0;T<m;T++){var z=(v(),N)[d>>>2>>>0],B=(v(),N)[d+4>>>2>>>0];d+=8;for(var L=0;L<B;L++){var W=o,se=(v(),Y)[z+L>>>0],pe=Km[W];se===0||se===10?((W===1?S:E)(Ta(pe)),pe.length=0):pe.push(se)}$+=B}return(v(),N)[c>>>2>>>0]=$,0}function Xm(o){return o>>>0}n||function(){for(var o=t.numThreads-1;o--;)ba();me.push(async()=>{var d=async function(){if(!n)return Promise.all(lt.map(_a))}();we++,await d,--we==0&&Be&&(d=Be,Be=null,d())})}(),n||(dt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Q()),t.wasmBinary&&(g=t.wasmBinary),t.stackSave=()=>ue(),t.stackRestore=o=>oe(o),t.stackAlloc=o=>_i(o),t.setValue=function(o,d,m="i8"){switch(m.endsWith("*")&&(m="*"),m){case"i1":case"i8":(v(),q)[o>>>0]=d;break;case"i16":(v(),F)[o>>>1>>>0]=d;break;case"i32":(v(),R)[o>>>2>>>0]=d;break;case"i64":(v(),ee)[o>>>3>>>0]=BigInt(d);break;case"float":(v(),G)[o>>>2>>>0]=d;break;case"double":(v(),J)[o>>>3>>>0]=d;break;case"*":(v(),N)[o>>>2>>>0]=d;break;default:V(`invalid type for setValue: ${m}`)}},t.getValue=function(o,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":return(v(),q)[o>>>0];case"i16":return(v(),F)[o>>>1>>>0];case"i32":return(v(),R)[o>>>2>>>0];case"i64":return(v(),ee)[o>>>3>>>0];case"float":return(v(),G)[o>>>2>>>0];case"double":return(v(),J)[o>>>3>>>0];case"*":return(v(),N)[o>>>2>>>0];default:V(`invalid type for getValue: ${d}`)}},t.UTF8ToString=Te,t.stringToUTF8=pt,t.lengthBytesUTF8=_r;var ls,ds,Tr,tt,Kt,gi,ps,cs,hs,yi,fs,ms,le,Xt,gs,oe,_i,ue,ys,bi,_s,bs,ws,wi,$s,vs,xs,Ss,ks,Ts,Is,Es,zs,Cs,As,Os,Rs,Bs,Ms,Ns,Ds,Us,Ps,qs,Ls,Ws,Vs,Gs,Hs,Fs,js,Ks,Xs,Zs,Ys,Qs,Js,eo,to,ro,io,no,ao,at,Zm=[ei,fa,va,Ia,Ea,za,Ca,Aa,Oa,Ra,Ba,Ma,Na,Da,Ua,Pa,Ya,Qa,Ja,is,ns,as,ss,os,us],$i={1003524:(o,d,m,c,$)=>{if(t===void 0||!t.Xc)return 1;if((o=Te(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Xc.get(o)))return 2;if(d=Number(d>>>0),m=Number(m>>>0),c=Number(c>>>0),d+m>o.byteLength)return 3;try{let T=o.subarray(d,d+m);switch($){case 0:(v(),Y).set(T,c>>>0);break;case 1:t.Qd?t.Qd(c,T):t.Id(c,T);break;default:return 4}return 0}catch{return 4}},1004348:(o,d,m)=>{t.td(o,(v(),Y).subarray(d>>>0,d+m>>>0))},1004412:()=>t.Sd(),1004454:o=>{t.sd(o)},1004491:()=>{t.Bd()},1004522:()=>{t.Cd()},1004551:()=>{t.Gd()},1004576:o=>t.Ad(o),1004609:o=>t.Ed(o),1004641:(o,d,m)=>{t.ed(Number(o),Number(d),Number(m),!0)},1004704:(o,d,m)=>{t.ed(Number(o),Number(d),Number(m))},1004761:()=>typeof wasmOffsetConverter<"u",1004818:o=>{t.$b("Abs",o,void 0)},1004869:o=>{t.$b("Neg",o,void 0)},1004920:o=>{t.$b("Floor",o,void 0)},1004973:o=>{t.$b("Ceil",o,void 0)},1005025:o=>{t.$b("Reciprocal",o,void 0)},1005083:o=>{t.$b("Sqrt",o,void 0)},1005135:o=>{t.$b("Exp",o,void 0)},1005186:o=>{t.$b("Erf",o,void 0)},1005237:o=>{t.$b("Sigmoid",o,void 0)},1005292:(o,d,m)=>{t.$b("HardSigmoid",o,{alpha:d,beta:m})},1005371:o=>{t.$b("Log",o,void 0)},1005422:o=>{t.$b("Sin",o,void 0)},1005473:o=>{t.$b("Cos",o,void 0)},1005524:o=>{t.$b("Tan",o,void 0)},1005575:o=>{t.$b("Asin",o,void 0)},1005627:o=>{t.$b("Acos",o,void 0)},1005679:o=>{t.$b("Atan",o,void 0)},1005731:o=>{t.$b("Sinh",o,void 0)},1005783:o=>{t.$b("Cosh",o,void 0)},1005835:o=>{t.$b("Asinh",o,void 0)},1005888:o=>{t.$b("Acosh",o,void 0)},1005941:o=>{t.$b("Atanh",o,void 0)},1005994:o=>{t.$b("Tanh",o,void 0)},1006046:o=>{t.$b("Not",o,void 0)},1006097:(o,d,m)=>{t.$b("Clip",o,{min:d,max:m})},1006166:o=>{t.$b("Clip",o,void 0)},1006218:(o,d)=>{t.$b("Elu",o,{alpha:d})},1006276:o=>{t.$b("Gelu",o,void 0)},1006328:o=>{t.$b("Relu",o,void 0)},1006380:(o,d)=>{t.$b("LeakyRelu",o,{alpha:d})},1006444:(o,d)=>{t.$b("ThresholdedRelu",o,{alpha:d})},1006514:(o,d)=>{t.$b("Cast",o,{to:d})},1006572:o=>{t.$b("Add",o,void 0)},1006623:o=>{t.$b("Sub",o,void 0)},1006674:o=>{t.$b("Mul",o,void 0)},1006725:o=>{t.$b("Div",o,void 0)},1006776:o=>{t.$b("Pow",o,void 0)},1006827:o=>{t.$b("Equal",o,void 0)},1006880:o=>{t.$b("Greater",o,void 0)},1006935:o=>{t.$b("GreaterOrEqual",o,void 0)},1006997:o=>{t.$b("Less",o,void 0)},1007049:o=>{t.$b("LessOrEqual",o,void 0)},1007108:(o,d,m,c,$)=>{t.$b("ReduceMean",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1007283:(o,d,m,c,$)=>{t.$b("ReduceMax",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1007457:(o,d,m,c,$)=>{t.$b("ReduceMin",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1007631:(o,d,m,c,$)=>{t.$b("ReduceProd",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1007806:(o,d,m,c,$)=>{t.$b("ReduceSum",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1007980:(o,d,m,c,$)=>{t.$b("ReduceL1",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1008153:(o,d,m,c,$)=>{t.$b("ReduceL2",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1008326:(o,d,m,c,$)=>{t.$b("ReduceLogSum",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1008503:(o,d,m,c,$)=>{t.$b("ReduceSumSquare",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1008683:(o,d,m,c,$)=>{t.$b("ReduceLogSumExp",o,{keepDims:!!d,noopWithEmptyAxes:!!m,axes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1008863:o=>{t.$b("Where",o,void 0)},1008916:(o,d,m)=>{t.$b("Transpose",o,{perm:d?Array.from((v(),R).subarray(Number(d)>>>0,Number(m)>>>0)):[]})},1009040:(o,d,m,c)=>{t.$b("DepthToSpace",o,{blocksize:d,mode:Te(m),format:c?"NHWC":"NCHW"})},1009173:(o,d,m,c)=>{t.$b("DepthToSpace",o,{blocksize:d,mode:Te(m),format:c?"NHWC":"NCHW"})},1009306:(o,d,m,c,$,T,z,B,L,W,se,pe,ge,be,ht)=>{t.$b("ConvTranspose",o,{format:L?"NHWC":"NCHW",autoPad:d,dilations:[m],group:c,kernelShape:[$],pads:[T,z],strides:[B],wIsConst:()=>!!(v(),q)[W>>>0],outputPadding:se?Array.from((v(),R).subarray(Number(se)>>>0,Number(pe)>>>0)):[],outputShape:ge?Array.from((v(),R).subarray(Number(ge)>>>0,Number(be)>>>0)):[],activation:Te(ht)})},1009739:(o,d,m,c,$,T,z,B,L,W,se,pe,ge,be)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:d,dilations:Array.from((v(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:c,kernelShape:Array.from((v(),R).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((v(),R).subarray(Number(T)>>>0,(Number(T)>>>0)+4>>>0)),strides:Array.from((v(),R).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),q)[L>>>0],outputPadding:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],outputShape:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[],activation:Te(be)})},1010400:(o,d,m,c,$,T,z,B,L,W,se,pe,ge,be,ht)=>{t.$b("ConvTranspose",o,{format:L?"NHWC":"NCHW",autoPad:d,dilations:[m],group:c,kernelShape:[$],pads:[T,z],strides:[B],wIsConst:()=>!!(v(),q)[W>>>0],outputPadding:se?Array.from((v(),R).subarray(Number(se)>>>0,Number(pe)>>>0)):[],outputShape:ge?Array.from((v(),R).subarray(Number(ge)>>>0,Number(be)>>>0)):[],activation:Te(ht)})},1010833:(o,d,m,c,$,T,z,B,L,W,se,pe,ge,be)=>{t.$b("ConvTranspose",o,{format:B?"NHWC":"NCHW",autoPad:d,dilations:Array.from((v(),R).subarray(Number(m)>>>0,(Number(m)>>>0)+2>>>0)),group:c,kernelShape:Array.from((v(),R).subarray(Number($)>>>0,(Number($)>>>0)+2>>>0)),pads:Array.from((v(),R).subarray(Number(T)>>>0,(Number(T)>>>0)+4>>>0)),strides:Array.from((v(),R).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),wIsConst:()=>!!(v(),q)[L>>>0],outputPadding:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],outputShape:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[],activation:Te(be)})},1011494:(o,d)=>{t.$b("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1011585:(o,d,m,c,$,T,z,B,L,W,se,pe,ge,be)=>{t.$b("AveragePool",o,{format:be?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:$,dilations:T?Array.from((v(),R).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(L)>>>0)):[],pads:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},1012064:(o,d)=>{t.$b("GlobalAveragePool",o,{format:d?"NHWC":"NCHW"})},1012155:(o,d,m,c,$,T,z,B,L,W,se,pe,ge,be)=>{t.$b("AveragePool",o,{format:be?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:$,dilations:T?Array.from((v(),R).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(L)>>>0)):[],pads:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},1012634:(o,d)=>{t.$b("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1012721:(o,d,m,c,$,T,z,B,L,W,se,pe,ge,be)=>{t.$b("MaxPool",o,{format:be?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:$,dilations:T?Array.from((v(),R).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(L)>>>0)):[],pads:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},1013196:(o,d)=>{t.$b("GlobalMaxPool",o,{format:d?"NHWC":"NCHW"})},1013283:(o,d,m,c,$,T,z,B,L,W,se,pe,ge,be)=>{t.$b("MaxPool",o,{format:be?"NHWC":"NCHW",auto_pad:d,ceil_mode:m,count_include_pad:c,storage_order:$,dilations:T?Array.from((v(),R).subarray(Number(T)>>>0,Number(z)>>>0)):[],kernel_shape:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(L)>>>0)):[],pads:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],strides:pe?Array.from((v(),R).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},1013758:(o,d,m,c,$)=>{t.$b("Gemm",o,{alpha:d,beta:m,transA:c,transB:$})},1013862:o=>{t.$b("MatMul",o,void 0)},1013916:(o,d,m,c)=>{t.$b("ArgMax",o,{keepDims:!!d,selectLastIndex:!!m,axis:c})},1014024:(o,d,m,c)=>{t.$b("ArgMin",o,{keepDims:!!d,selectLastIndex:!!m,axis:c})},1014132:(o,d)=>{t.$b("Softmax",o,{axis:d})},1014195:(o,d)=>{t.$b("Concat",o,{axis:d})},1014255:(o,d,m,c,$)=>{t.$b("Split",o,{axis:d,numOutputs:m,splitSizes:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1014411:o=>{t.$b("Expand",o,void 0)},1014465:(o,d)=>{t.$b("Gather",o,{axis:Number(d)})},1014536:(o,d)=>{t.$b("GatherElements",o,{axis:Number(d)})},1014615:(o,d)=>{t.$b("GatherND",o,{batch_dims:Number(d)})},1014694:(o,d,m,c,$,T,z,B,L,W,se)=>{t.$b("Resize",o,{antialias:d,axes:m?Array.from((v(),R).subarray(Number(m)>>>0,Number(c)>>>0)):[],coordinateTransformMode:Te($),cubicCoeffA:T,excludeOutside:z,extrapolationValue:B,keepAspectRatioPolicy:Te(L),mode:Te(W),nearestMode:Te(se)})},1015056:(o,d,m,c,$,T,z)=>{t.$b("Slice",o,{starts:d?Array.from((v(),R).subarray(Number(d)>>>0,Number(m)>>>0)):[],ends:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[],axes:T?Array.from((v(),R).subarray(Number(T)>>>0,Number(z)>>>0)):[]})},1015320:o=>{t.$b("Tile",o,void 0)},1015372:(o,d,m)=>{t.$b("InstanceNormalization",o,{epsilon:d,format:m?"NHWC":"NCHW"})},1015486:(o,d,m)=>{t.$b("InstanceNormalization",o,{epsilon:d,format:m?"NHWC":"NCHW"})},1015600:o=>{t.$b("Range",o,void 0)},1015653:(o,d)=>{t.$b("Einsum",o,{equation:Te(d)})},1015734:(o,d,m,c,$)=>{t.$b("Pad",o,{mode:d,value:m,pads:c?Array.from((v(),R).subarray(Number(c)>>>0,Number($)>>>0)):[]})},1015877:(o,d,m,c,$,T)=>{t.$b("BatchNormalization",o,{epsilon:d,momentum:m,spatial:!!$,trainingMode:!!c,format:T?"NHWC":"NCHW"})},1016046:(o,d,m,c,$,T)=>{t.$b("BatchNormalization",o,{epsilon:d,momentum:m,spatial:!!$,trainingMode:!!c,format:T?"NHWC":"NCHW"})},1016215:(o,d,m)=>{t.$b("CumSum",o,{exclusive:Number(d),reverse:Number(m)})},1016312:(o,d,m)=>{t.$b("DequantizeLinear",o,{axis:d,blockSize:m})},1016402:(o,d,m,c,$)=>{t.$b("GridSample",o,{align_corners:d,mode:Te(m),padding_mode:Te(c),format:$?"NHWC":"NCHW"})},1016572:(o,d,m,c,$)=>{t.$b("GridSample",o,{align_corners:d,mode:Te(m),padding_mode:Te(c),format:$?"NHWC":"NCHW"})},1016742:(o,d)=>{t.$b("ScatterND",o,{reduction:Te(d)})},1016827:(o,d,m,c,$,T,z,B,L)=>{t.$b("Attention",o,{numHeads:d,isUnidirectional:m,maskFilterValue:c,scale:$,doRotary:T,qkvHiddenSizes:z?Array.from((v(),R).subarray(Number(B)>>>0,Number(B)+z>>>0)):[],pastPresentShareBuffer:!!L})},1017099:o=>{t.$b("BiasAdd",o,void 0)},1017154:o=>{t.$b("BiasSplitGelu",o,void 0)},1017215:o=>{t.$b("FastGelu",o,void 0)},1017271:(o,d,m,c,$,T,z,B,L,W,se,pe,ge,be,ht,vi)=>{t.$b("Conv",o,{format:pe?"NHWC":"NCHW",auto_pad:d,dilations:m?Array.from((v(),R).subarray(Number(m)>>>0,Number(c)>>>0)):[],group:$,kernel_shape:T?Array.from((v(),R).subarray(Number(T)>>>0,Number(z)>>>0)):[],pads:B?Array.from((v(),R).subarray(Number(B)>>>0,Number(L)>>>0)):[],strides:W?Array.from((v(),R).subarray(Number(W)>>>0,Number(se)>>>0)):[],w_is_const:()=>!!(v(),q)[Number(ge)>>>0],activation:Te(be),activation_params:ht?Array.from((v(),G).subarray(Number(ht)>>>0,Number(vi)>>>0)):[]})},1017855:o=>{t.$b("Gelu",o,void 0)},1017907:(o,d,m,c,$,T,z,B,L)=>{t.$b("GroupQueryAttention",o,{numHeads:d,kvNumHeads:m,scale:c,softcap:$,doRotary:T,rotaryInterleaved:z,smoothSoftmax:B,localWindowSize:L})},1018124:(o,d,m,c)=>{t.$b("LayerNormalization",o,{axis:d,epsilon:m,simplified:!!c})},1018235:(o,d,m,c)=>{t.$b("LayerNormalization",o,{axis:d,epsilon:m,simplified:!!c})},1018346:(o,d,m,c,$,T)=>{t.$b("MatMulNBits",o,{k:d,n:m,accuracyLevel:c,bits:$,blockSize:T})},1018473:(o,d,m,c,$,T)=>{t.$b("MultiHeadAttention",o,{numHeads:d,isUnidirectional:m,maskFilterValue:c,scale:$,doRotary:T})},1018632:(o,d)=>{t.$b("QuickGelu",o,{alpha:d})},1018696:(o,d,m,c,$)=>{t.$b("RotaryEmbedding",o,{interleaved:!!d,numHeads:m,rotaryEmbeddingDim:c,scale:$})},1018835:(o,d,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:d,simplified:!!m})},1018937:(o,d,m)=>{t.$b("SkipLayerNormalization",o,{epsilon:d,simplified:!!m})},1019039:(o,d,m,c)=>{t.$b("GatherBlockQuantized",o,{gatherAxis:d,quantizeAxis:m,blockSize:c})},1019160:o=>{t.Fd(o)},1019194:(o,d)=>t.Hd(Number(o),Number(d),t.Yc.Kd,t.Yc.errors)};function Ym(o,d,m){return Fa(async()=>{await t.Dd(Number(o),Number(d),Number(m))})}function Qm(){return typeof wasmOffsetConverter<"u"}function Jm(o,d,m,c){var $=ue();try{return Es(o,d,m,c)}catch(T){if(oe($),T!==T+0)throw T;le(1,0)}}function eg(o,d,m){var c=ue();try{return Ss(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;le(1,0)}}function tg(o){var d=ue();try{$s(o)}catch(m){if(oe(d),m!==m+0)throw m;le(1,0)}}function rg(o,d){var m=ue();try{return wi(o,d)}catch(c){if(oe(m),c!==c+0)throw c;le(1,0)}}function ig(o,d,m){var c=ue();try{ws(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;le(1,0)}}function ng(o,d){var m=ue();try{zs(o,d)}catch(c){if(oe(m),c!==c+0)throw c;le(1,0)}}function ag(o,d,m,c,$,T,z){var B=ue();try{return Ts(o,d,m,c,$,T,z)}catch(L){if(oe(B),L!==L+0)throw L;le(1,0)}}function sg(o,d,m,c,$,T){var z=ue();try{vs(o,d,m,c,$,T)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function og(o,d,m,c){var $=ue();try{Is(o,d,m,c)}catch(T){if(oe($),T!==T+0)throw T;le(1,0)}}function ug(o,d,m,c,$){var T=ue();try{xs(o,d,m,c,$)}catch(z){if(oe(T),z!==z+0)throw z;le(1,0)}}function lg(o,d,m,c,$,T,z){var B=ue();try{As(o,d,m,c,$,T,z)}catch(L){if(oe(B),L!==L+0)throw L;le(1,0)}}function dg(o,d,m,c,$,T,z){var B=ue();try{Os(o,d,m,c,$,T,z)}catch(L){if(oe(B),L!==L+0)throw L;le(1,0)}}function pg(o,d,m,c,$,T,z,B){var L=ue();try{Ns(o,d,m,c,$,T,z,B)}catch(W){if(oe(L),W!==W+0)throw W;le(1,0)}}function cg(o,d,m,c,$){var T=ue();try{return Cs(o,d,m,c,$)}catch(z){if(oe(T),z!==z+0)throw z;le(1,0)}}function hg(o,d,m){var c=ue();try{return Ds(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;le(1,0)}}function fg(o,d,m,c,$,T,z,B){var L=ue();try{Us(o,d,m,c,$,T,z,B)}catch(W){if(oe(L),W!==W+0)throw W;le(1,0)}}function mg(o,d,m,c,$,T,z,B,L,W,se,pe){var ge=ue();try{Rs(o,d,m,c,$,T,z,B,L,W,se,pe)}catch(be){if(oe(ge),be!==be+0)throw be;le(1,0)}}function gg(o,d,m,c,$,T){var z=ue();try{return Bs(o,d,m,c,$,T)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function yg(o,d,m){var c=ue();try{return Ps(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;return le(1,0),0n}}function _g(o,d,m,c,$,T,z,B,L){var W=ue();try{ks(o,d,m,c,$,T,z,B,L)}catch(se){if(oe(W),se!==se+0)throw se;le(1,0)}}function bg(o){var d=ue();try{return qs(o)}catch(m){if(oe(d),m!==m+0)throw m;le(1,0)}}function wg(o,d){var m=ue();try{return to(o,d)}catch(c){if(oe(m),c!==c+0)throw c;return le(1,0),0n}}function $g(o){var d=ue();try{return Ls(o)}catch(m){if(oe(d),m!==m+0)throw m;return le(1,0),0n}}function vg(o,d,m,c){var $=ue();try{return js(o,d,m,c)}catch(T){if(oe($),T!==T+0)throw T;le(1,0)}}function xg(o,d,m,c,$){var T=ue();try{return Ks(o,d,m,c,$)}catch(z){if(oe(T),z!==z+0)throw z;le(1,0)}}function Sg(o,d,m,c,$,T){var z=ue();try{return Xs(o,d,m,c,$,T)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function kg(o,d,m,c,$,T){var z=ue();try{return Zs(o,d,m,c,$,T)}catch(B){if(oe(z),B!==B+0)throw B;le(1,0)}}function Tg(o,d,m,c,$,T,z,B){var L=ue();try{return Ms(o,d,m,c,$,T,z,B)}catch(W){if(oe(L),W!==W+0)throw W;le(1,0)}}function Ig(o,d,m,c,$){var T=ue();try{return Ys(o,d,m,c,$)}catch(z){if(oe(T),z!==z+0)throw z;return le(1,0),0n}}function Eg(o,d,m,c){var $=ue();try{return Qs(o,d,m,c)}catch(T){if(oe($),T!==T+0)throw T;le(1,0)}}function zg(o,d,m,c){var $=ue();try{return Js(o,d,m,c)}catch(T){if(oe($),T!==T+0)throw T;le(1,0)}}function Cg(o,d,m,c,$,T,z,B,L,W,se,pe){var ge=ue();try{return eo(o,d,m,c,$,T,z,B,L,W,se,pe)}catch(be){if(oe(ge),be!==be+0)throw be;le(1,0)}}function Ag(o,d,m,c,$,T,z,B,L,W,se){var pe=ue();try{Hs(o,d,m,c,$,T,z,B,L,W,se)}catch(ge){if(oe(pe),ge!==ge+0)throw ge;le(1,0)}}function Og(o,d,m,c,$,T,z,B,L,W,se,pe,ge,be,ht,vi){var Ng=ue();try{Fs(o,d,m,c,$,T,z,B,L,W,se,pe,ge,be,ht,vi)}catch(xi){if(oe(Ng),xi!==xi+0)throw xi;le(1,0)}}function Rg(o,d,m){var c=ue();try{return Ws(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;le(1,0)}}function Bg(o,d,m){var c=ue();try{return Vs(o,d,m)}catch($){if(oe(c),$!==$+0)throw $;le(1,0)}}function Mg(o,d,m,c){var $=ue();try{Gs(o,d,m,c)}catch(T){if(oe($),T!==T+0)throw T;le(1,0)}}function Ir(){if(0<we)Be=Ir;else if(n)w?.(t),Z();else{for(var o=me;0<o.length;)o.shift()(t);0<we?Be=Ir:(t.calledRun=!0,A||(Z(),w?.(t)))}}return n||(at=await Ae(),Ir()),t.PTR_SIZE=4,U?t:new Promise((o,d)=>{w=o,k=d})}var hp,po,x0=P(()=>{hp=lo,po=globalThis.self?.name?.startsWith("em-pthread"),po&&lo()}),Ci,Sn,co,De,fp,zr,ho,fo,Ai,mo,Oi,mp,Ri,gp,Vn=P(()=>{Wn(),Ci=typeof location>"u"?void 0:location.origin,Sn=import.meta.url>"file:"&&import.meta.url<"file;",co=()=>{{if(Sn){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Ci).href}return import.meta.url}},De=co(),fp=()=>{if(De&&!De.startsWith("blob:"))return De.substring(0,De.lastIndexOf("/")+1)},zr=(e,t)=>{try{let r=t??De;return(r?new URL(e,r):new URL(e)).origin===Ci}catch{return!1}},ho=(e,t)=>{let r=t??De;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},fo=(e,t)=>`${t??"./"}${e}`,Ai=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},mo=async e=>(await import(e)).default,Oi=(v0(),hr(dp)).default,mp=async()=>{if(!De)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(zr(De))return[void 0,Oi()];let e=await Ai(De);return[e,Oi(e)]},Ri=(x0(),hr(cp)).default,gp=async(e,t,r,i)=>{let n=Ri&&!(e||t);if(n)if(De)n=zr(De)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,Ri];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??ho(a,t),u=r&&s&&!zr(s,t),l=u?await Ai(s):s??fo(a,t);return[u?l:void 0,await mo(l)]}}}),Bi,Cr,Yt,Mi,go,yo,_o,Gn,_e,Mt=P(()=>{Vn(),Cr=!1,Yt=!1,Mi=!1,go=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},yo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},_o=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Gn=async e=>{if(Cr)return Promise.resolve();if(Yt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Mi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Yt=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!_o())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!yo())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=go();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n?.mjs,u=s?.href??s,l=n?.wasm,p=l?.href??l,f=e.wasmBinary,[h,g]=await gp(u,a,r>1,!!f||!!p),y=!1,_=[];if(t>0&&_.push(new Promise(w=>{setTimeout(()=>{y=!0,w()},t)})),_.push(new Promise((w,k)=>{let x={numThreads:r};if(f)x.wasmBinary=f,x.locateFile=b=>b;else if(p||a)x.locateFile=b=>p??a+b;else if(u&&u.indexOf("blob:")!==0)x.locateFile=b=>new URL(b,u).href;else if(h){let b=fp();b&&(x.locateFile=I=>b+I)}g(x).then(b=>{Yt=!1,Cr=!0,Bi=b,w(),h&&URL.revokeObjectURL(h)},b=>{Yt=!1,Mi=!0,k(b)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},_e=()=>{if(Cr&&Bi)return Bi;throw new Error("WebAssembly is not initialized yet.")}}),Xe,Fr,fe,Hn=P(()=>{Mt(),Xe=(e,t)=>{let r=_e(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},Fr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")Fr(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},fe=e=>{let t=_e(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),u=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),yp,S0=P(()=>{Mt(),Hn(),yp=e=>{let t=_e(),r=0,i=[],n=e||{};try{if(e?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(n.terminate=!1);let a=0;return e?.tag!==void 0&&(a=Xe(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&fe("Can't create run options."),e?.extra!==void 0&&Fr(e.extra,"",new WeakSet,(s,u)=>{let l=Xe(s,i),p=Xe(u,i);t._OrtAddRunConfigEntry(r,l,p)!==0&&fe(`Can't set a run config entry: ${s} - ${u}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),bo,wo,$o,vt,vo,_p,k0=P(()=>{Mt(),Hn(),bo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},wo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},$o=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},vt=(e,t,r,i)=>{let n=Xe(t,i),a=Xe(r,i);_e()._OrtAddSessionConfigEntry(e,n,a)!==0&&fe(`Can't set a session config entry: ${t} - ${r}.`)},vo=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[];switch(a){case"webnn":if(a="WEBNN",vt(e,"session.disable_quant_qdq","1",r),vt(e,"session.disable_qdq_constant_folding","1",r),typeof n!="string"){let h=n?.deviceType;h&&vt(e,"deviceType",h,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let h=n;if(h?.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);vt(e,"preferredLayout",h.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let u=Xe(a,r),l=s.length,p=0,f=0;if(l>0){p=_e()._malloc(l*_e().PTR_SIZE),r.push(p),f=_e()._malloc(l*_e().PTR_SIZE),r.push(f);for(let h=0;h<l;h++)_e().setValue(p+h*_e().PTR_SIZE,s[h][0],"*"),_e().setValue(f+h*_e().PTR_SIZE,s[h][1],"*")}await _e()._OrtAppendExecutionProvider(e,u,p,f,l)!==0&&fe(`Can't append execution provider: ${a}.`)}},_p=async e=>{let t=_e(),r=0,i=[],n=e||{};$o(n);try{let a=bo(n.graphOptimizationLevel??"all"),s=wo(n.executionMode??"sequential"),u=typeof n.logId=="string"?Xe(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let p=n.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let f=typeof n.optimizedModelFilePath=="string"?Xe(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,u,l,p,f),r===0&&fe("Can't create session options."),n.executionProviders&&await vo(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);vt(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[h,g]of Object.entries(n.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof g!="number"||!Number.isInteger(g)||g<0)throw new Error(`free dimension override value must be a non-negative integer: ${g}`);let y=Xe(h,i);t._OrtAddFreeDimensionOverride(r,y,g)!==0&&fe(`Can't set a free dimension override: ${h} - ${g}.`)}return n.extra!==void 0&&Fr(n.extra,"",new WeakSet,(h,g)=>{vt(r,h,g,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&fe("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),Et,ot,zt,Jr,jr,Fn,jn,kn,te=P(()=>{Et=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ot=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},zt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},Jr=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},jr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Fn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",jn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",kn=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Kn,bp=P(()=>{Wn(),Kn=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let l=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw u}let s=0;for(;;){let{done:u,value:l}=await n.read();if(u)break;let p=l.byteLength;new Uint8Array(a,s,p).set(l),s+=p}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),xo,So,ko,To,Xn,Io,de,ut=P(()=>{te(),xo=["V","I","W","E","F"],So=(e,t)=>{console.log(`[${xo[e]},${new Date().toISOString()}]${t}`)},Xn=(e,t)=>{ko=e,To=t},Io=(e,t)=>{let r=jr(e),i=jr(ko);r>=i&&So(r,typeof t=="function"?t():t)},de=(...e)=>{To&&Io(...e)}}),Eo,Vt,O,Kr,wp,$p,vp,ie=P(()=>{Eo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Vt=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let u=Eo.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(u===void 0)return;[s[a-2],s[a-1]]=u}for(let u=r?3:1;u<=a;u++){let l=i-u<0?1:e[i-u],p=n-u<0?1:t[n-u];if(l!==p&&l>1&&p>1)return;let f=Math.max(l,p);if(l&&p)s[a-u]=Math.max(l,p);else{if(f>1)return;s[a-u]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},O=class Wr{static size(t){return Wr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Wr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Wr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},Kr=class lr{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<n.length){if(n[u]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length*2;u++)if(u<s.length){if(s[u]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[u]>=i[u]||s[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,u){if(u){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)lr.adjustPadAndReturnShape(t[l+(s?1:2)],r[l],i[l],n[l],a,l,l+t.length-2,u)}}static computePoolOutputShape(t,r,i,n,a,s,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return lr.computeShapeHelper(t,r,l,i,n,a,s,u),l}static computeConvOutputShape(t,r,i,n,a,s,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return lr.computeShapeHelper(!1,t,l,i,n,a,s,u),l}static computeShapeHelper(t,r,i,n,a,s,u,l){if(t)for(let p=0;p<r.length-2;p++)i.push(1);else for(let p=0;p<r.length-2;p++)i.push(lr.adjustPadAndReturnShape(r[p+2],n[p],a[p],s[p],u,p,p+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,n,a,s,u,l){let p=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return a[s]=0,a[u]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+n-t;return a[s]=Math.floor(l==="SAME_LOWER"?(f+1)/2:f/2),a[u]=f-a[s],Math.floor((t+f-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[u]-p)/r+1)}},wp=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,u;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let l=-1;if(i?(u=r[0],l=1):(u=r[1],l=0),r[l]!==s)throw new Error("dimension mismatch");if(a<=0||u<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Vt.isValidBroadcast(n,[a,u]))throw new Error("gemm: invalid bias shape for broadcast");return[a,u,s]}},$p=-34028234663852886e22,vp=34028234663852886e22}),Zn,xp=P(()=>{te(),Zn=(e,t)=>new(Jr(t))(e)}),Ni,Tn,Di,zo,Ui,Co,Pi,qi,Li,Ao,Sp,T0=P(()=>{te(),ut(),Ni=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Tn=(e,t)=>{if(t==="int32")return e;let r=Ni.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(Jr(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let u=0;u<n;u++){let l=a[u];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[u]=Number(l)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(u=>u>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Di=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},zo=1,Ui=()=>zo++,Co=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Pi=(e,t)=>{let r=Ni.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},qi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Pi(this.dataType,this.tensorShape)}destroy(){de("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Di(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return new Uint8Array(r).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},Li=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!a?.input.dataTypes.includes(t)){if(s=Co.get(t),!s||a?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);de("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Pi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let u=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,u,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Tn(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else de("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?Di(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Ao=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Ui();return this.tensorTrackersById.set(e,new Li(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){de("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){de("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=Ui(),s=new qi({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new Li(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let u=this.getMLContext(e);for(let[p,f]of this.freeTensors.entries())if(f.canReuseTensor(u,t,r)){de("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let h=this.freeTensors.splice(p,1)[0];return h.sessionId=e,h}de("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let l=await u.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new qi({sessionId:e,context:u,tensor:l,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Sp=(...e)=>new Ao(...e)}),Qt,Oo,kp,I0=P(()=>{te(),Mt(),xp(),T0(),ut(),Qt=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Oo=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},kp=class{constructor(e){this.tensorManager=Sp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Xn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){de("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){de("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)de("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Oo(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){de("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=Qt.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){de("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=Qt.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!_e().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");de("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Zn(r,t)}}registerMLTensor(e,t,r,i){let n=Qt.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return de("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,n,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let l=a.get(u);if(!l)throw new Error(`File with name ${u} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let p=l.slice(t,t+r).buffer,f;switch(n.dataType){case"float32":f=new Float32Array(p);break;case"float16":f=typeof Float16Array<"u"?new Float16Array(p):new Uint16Array(p);break;case"int32":f=new Int32Array(p);break;case"uint32":f=new Uint32Array(p);break;case"int64":if(s){let h=Tn(new Uint8Array(p),"int64");f=new Int32Array(h.buffer),n.dataType="int32"}else f=new BigInt64Array(p);break;case"uint64":f=new BigUint64Array(p);break;case"int8":f=new Int8Array(p);break;case"int4":case"uint4":case"uint8":f=new Uint8Array(p);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return de("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,f)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=Qt.get(Et(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!n?.input.dataTypes.includes(i):!!n?.output.dataTypes.includes(i)}flush(){}}}),Yn=P(()=>{}),Wi,Ar,Or,Ro,Bo,Vi,In,Mo,Tp,E0=P(()=>{ut(),Yn(),Wi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ar=[],Or=e=>Math.ceil(Number(e)/16)*16,Ro=e=>{for(let t=0;t<Ar.length;t++){let r=Ar[t];if(e<=r)return r}return Math.ceil(e/16)*16},Bo=1,Vi=()=>Bo++,In=async(e,t,r,i)=>{let n=Or(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let u=a.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(u,0,r)),l}else return new Uint8Array(u.slice(0,r))}finally{a.destroy()}},Mo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Wi)Ar.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=Or(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=u.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,n)),u.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(u,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([p.finish()]),u.destroy(),de("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Or(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Vi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),de("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Ro(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let u=(n?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:Vi(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),de("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return de("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await In(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Wi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(de("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Tp=(...e)=>new Mo(...e)}),No,he,ke=P(()=>{No=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new No(e)}),Gt,Rr,Ee,Re,X,xe,En,Wt,yt,j,Jt,M,H,Ip,Qn,Do,Ep,ne=P(()=>{te(),ie(),Gt=64,Rr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ee=(e,t=1)=>{let r=Rr(e,t);return typeof r=="string"?r:r[0]},Re=(e,t=1)=>{let r=Rr(e,t);return typeof r=="string"?r:r[1]},X=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},xe=e=>e%4===0?4:e%2===0?2:1,En=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Wt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,yt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,j=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Jt=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,u=[...new Array(s).keys()],l=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,p=Rr(t,n),f=typeof p=="string"?p:p[1],h=typeof p=="string"?p:p[0],g={indices:l,value:f,storage:h,tensor:t},y=U=>typeof U=="string"?U:`${U}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=a?"uniforms.":"",k=`${w}${e}_shape`,x=`${w}${e}_strides`,b="";for(let U=0;U<s-1;U++)b+=`
    let dim${U} = current / ${j(x,U,s)};
    let rest${U} = current % ${j(x,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;b+=`indices[${s-1}] = current;`;let I=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${g.indices} {
    var indices: ${g.indices};
    var current = offset;
    ${b}
    return indices;
  }`,S=U=>(_.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),E=[];if(s>=2)for(let U=s-1;U>=0;U--)E.push(`${j(x,U,s)} * (indices[${U}])`);let A=s<2?"":`
  fn i2o_${e}(indices: ${g.indices}) -> u32 {
    return ${E.join("+")};
  }`,C=U=>(_.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),v=(...U)=>s===0?"0u":`${g.indices}(${U.map(y).join(",")})`,D=(U,Q)=>s<2?`${U}`:`${j(U,Q,s)}`,q=(U,Q,Z)=>s<2?`${U}=${Z};`:`${j(U,Q,s)}=${Z};`,Y={},F=(U,Q)=>{_.broadcastedIndicesToOffset=!0;let Z=`${Q.name}broadcastedIndicesTo${e}Offset`;if(Z in Y)return`${Z}(${U})`;let V=[];for(let Ie=s-1;Ie>=0;Ie--){let Ae=Q.indicesGet("outputIndices",Ie+Q.rank-s);V.push(`${D(x,Ie)} * (${Ae} % ${D(k,Ie)})`)}return Y[Z]=`fn ${Z}(outputIndices: ${Q.type.indices}) -> u32 {
             return ${V.length>0?V.join("+"):"0u"};
           }`,`${Z}(${U})`},K=(U,Q)=>(()=>{if(g.storage===g.value)return`${e}[${U}]=${Q};`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${Q}), select(0u, 0xFFFFFFFFu, ${Q} < 0));`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${Q}), 0u);`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Q}));`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),R=U=>(()=>{if(g.storage===g.value)return`${e}[${U}]`;if(g.storage==="vec2<u32>"&&g.value==="i32")return`i32(${e}[${U}].x)`;if(g.storage==="vec2<u32>"&&g.value==="u32")return`u32(${e}[${U}].x)`;if(g.storage==="u32"&&g.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${g.storage} and value type ${g.value} yet`)})(),N=s<2?"":`
  fn get_${e}ByIndices(indices: ${g.indices}) -> ${f} {
    return ${R(`i2o_${e}(indices)`)};
  }`,G=s<2?"":(()=>{let U=u.map(Z=>`d${Z}: u32`).join(", "),Q=u.map(Z=>`d${Z}`).join(", ");return`
  fn get_${e}(${U}) -> ${f} {
    return get_${e}ByIndices(${v(Q)});
  }`})(),J=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let Q=U.map(y).join(",");return s===0?R("0u"):s===1?R(Q[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${Q})`)},ee=U=>s<2?R(U):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${U})`),re=s<2?"":`
  fn set_${e}ByIndices(indices: ${g.indices}, value: ${f}) {
    ${K(`i2o_${e}(indices)`,"value")}
  }`,ae=s<2?"":(()=>{let U=u.map(Z=>`d${Z}: u32`).join(", "),Q=u.map(Z=>`d${Z}`).join(", ");return`
  fn set_${e}(${U}, value: ${f}) {
    set_${e}ByIndices(${v(Q)}, value);
  }`})();return{impl:()=>{let U=[],Q=!1;return _.offsetToIndices&&(U.push(I),Q=!0),_.indicesToOffset&&(U.push(A),Q=!0),_.broadcastedIndicesToOffset&&(Object.values(Y).forEach(Z=>U.push(Z)),Q=!0),_.set&&(U.push(ae),Q=!0),_.setByIndices&&(U.push(re),Q=!0),_.get&&(U.push(G),Q=!0),_.getByIndices&&(U.push(N),Q=!0),!a&&Q&&U.unshift(`const ${k} = ${g.indices}(${r.join(",")});`,`const ${x} = ${g.indices}(${O.computeStrides(r).join(",")});`),U.join(`
`)},type:g,offsetToIndices:S,indicesToOffset:C,broadcastedIndicesToOffset:F,indices:v,indicesGet:D,indicesSet:q,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let Q=U[s];if(typeof Q!="string")throw new Error("value must be string");let Z=U.slice(0,s).map(y).join(",");return s===0?K("0u",Q):s===1?K(Z[0],Q):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${Z}, ${Q})`)},setByOffset:K,setByIndices:(U,Q)=>s<2?K(U,Q):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${Q});`),get:J,getByOffset:R,getByIndices:ee,usage:i,name:e,strides:x,shape:k,rank:s}},M=(e,t,r,i=1)=>Jt(e,t,r,"input",i),H=(e,t,r,i=1)=>Jt(e,t,r,"output",i),Ip=(e,t,r)=>Jt(e,t,r,"atomicOutput",1),Qn=(e,t,r,i=1)=>Jt(e,t,r,"internal",i),Do=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Gt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ep=(e,t)=>new Do(e,t)}),Uo,Gi,Po,qo,Lo,Wo,Pe,zp,Cp,_t=P(()=>{te(),ie(),ke(),ne(),Uo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Gi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Po=(e,t)=>O.sortBasedOnPerm(e,Gi(e.length,t)),qo=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},Lo=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},Wo=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Pe=(e,t)=>{let r=e.dataType,i=e.dims.length,n=Gi(i,t),a=Po(e.dims,n),s=e.dims,u=a,l=i<2||Wo(n,e.dims),p;if(l)return p=_=>{let w=M("input",r,s,4),k=H("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,k)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:p};let{newShape:f,newPerm:h}=Lo(e.dims,n),g=O.areEqual(h,[2,3,1]),y=O.areEqual(h,[3,1,2]);if(f.length===2||g||y){s=g?[f[0],f[1]*f[2]]:y?[f[0]*f[1],f[2]]:f,u=[s[1],s[0]];let _=16;return p=w=>{let k=M("a",r,s.length),x=H("output",r,u.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(k,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${_+1}>, ${_}>;
  ${w.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${k.getByIndices(`${k.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:w},...X(s,u)]}},getShaderSource:p}}return p=_=>{let w=M("a",r,s.length),k=H("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,k)}

  ${qo(n,i,w,k)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${k.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${k.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...X(s,u)]}},getShaderSource:p}},zp=(e,t)=>{Uo(e.inputs,t.perm),e.compute(Pe(e.inputs[0],t.perm))},Cp=e=>he({perm:e.perm})}),Vo,Go,Ho,Fo,jo,Ko,Xo,Zo,Yo,Qo,Ge,Ap,Op,Rp,Bp,Mp,Np,Dp,Up,Pp,qp,z0=P(()=>{te(),ie(),ne(),Jn(),_t(),Vo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Go={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ho={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Fo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},jo=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Ko=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},Xo=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},Zo=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Yo=(e,t)=>{let r=[];if(!Zo(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Qo=(e,t,r,i,n,a,s)=>{let u=r[0].dims,l=O.size(a),p=O.size(s),f=M("_A",r[0].dataType,u),h=H("output",n,a),g=64;l===1&&(g=256);let y=`
          var<workgroup> aBestValues : array<f32, ${g}>;
       `,_=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(f,h)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(g)}

          let outputIndex = global_idx / ${g};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ho[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${g}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Vo[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${g}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Go[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${Fo[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${g}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:p}]})}},Ge=(e,t,r,i)=>{let n=e.inputs.length===1?r:zn(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((y,_)=>_));let s=O.normalizeAxes(a,e.inputs[0].dims.length),u=s,l=e.inputs[0],p=Yo(u,e.inputs[0].dims.length);p.length>0&&(l=e.compute(Pe(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],u=jo(u.length,l.dims.length));let[f,h]=Ko(l.dims,u),g=f;n.keepDims&&(g=Xo(f,s)),e.compute(Qo(t,n.cacheKey,[l],i,e.inputs[0].dataType,g,h),{inputs:[l]})},Ap=(e,t)=>{Ge(e,"ReduceMeanShared",t,"mean")},Op=(e,t)=>{Ge(e,"ReduceL1Shared",t,"l1")},Rp=(e,t)=>{Ge(e,"ReduceL2Shared",t,"l2")},Bp=(e,t)=>{Ge(e,"ReduceLogSumExpShared",t,"logSumExp")},Mp=(e,t)=>{Ge(e,"ReduceMaxShared",t,"max")},Np=(e,t)=>{Ge(e,"ReduceMinShared",t,"min")},Dp=(e,t)=>{Ge(e,"ReduceProdShared",t,"prod")},Up=(e,t)=>{Ge(e,"ReduceSumShared",t,"sum")},Pp=(e,t)=>{Ge(e,"ReduceSumSquareShared",t,"sumSquare")},qp=(e,t)=>{Ge(e,"ReduceLogSumShared",t,"logSum")}}),He,Jo,Xr,zn,Fe,eu,tu,ru,iu,nu,au,su,ou,uu,lu,je,Lp,Wp,Vp,Gp,Hp,Fp,jp,Kp,Xp,Zp,Jn=P(()=>{te(),ie(),ke(),ne(),z0(),He=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Jo=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Xr=(e,t,r,i,n,a,s=!1,u=!1)=>{let l=[],p=r[0].dims,f=p.length,h=O.normalizeAxes(n,f),g=!u&&h.length===0;p.forEach((w,k)=>{g||h.indexOf(k)>=0?s&&l.push(1):l.push(w)});let y=l.length,_=O.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let k=[],x=M("_A",r[0].dataType,f),b=H("output",a,y),I=i(x,b,h),S=I[2];for(let E=0,A=0;E<f;E++)g||h.indexOf(E)>=0?(s&&A++,S=`for(var j${E}: u32 = 0; j${E} < ${p[E]}; j${E}++) {
                  ${I[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${x.indicesSet("input_indices",E,`j${E}`)}
                  ${S}
                }`):(k.push(`${x.indicesSet("input_indices",E,b.indicesGet("output_indices",A))};`),A++);return`

        ${w.registerUniform("output_size","u32").declareVariables(x,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${k.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${S}
          ${I[3]}
          ${I.length===4?b.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...X(p,l)]})}},zn=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Fe=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:zn(n,r);e.compute(Xr(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?Jo:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},eu=(e,t)=>{He(e.inputs),Fe(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},tu=(e,t)=>{He(e.inputs),Fe(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},ru=(e,t)=>{He(e.inputs),Fe(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},iu=(e,t)=>{He(e.inputs),Fe(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},nu=(e,t)=>{He(e.inputs),Fe(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},au=(e,t)=>{He(e.inputs),Fe(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},su=(e,t)=>{He(e.inputs),Fe(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},ou=(e,t)=>{He(e.inputs),Fe(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},uu=(e,t)=>{He(e.inputs),Fe(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},lu=(e,t)=>{He(e.inputs),Fe(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},je=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},Lp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?au(e,t):Ap(e,t)},Wp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tu(e,t):Op(e,t)},Vp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ru(e,t):Rp(e,t)},Gp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?iu(e,t):Bp(e,t)},Hp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nu(e,t):Mp(e,t)},Fp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?su(e,t):Np(e,t)},jp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ou(e,t):Dp(e,t)},Kp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uu(e,t):Up(e,t)},Xp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lu(e,t):Pp(e,t)},Zp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eu(e,t):qp(e,t)}}),Hi,Yp,Qp,Cn,C0=P(()=>{te(),ke(),Jn(),Hi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Yp=(e,t)=>{Hi(e.inputs);let r=(i,n,a)=>{let s=[];for(let u=0;u<i.rank;u++)(a.indexOf(u)>=0||a.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Xr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Qp=(e,t)=>{Hi(e.inputs);let r=(i,n,a)=>{let s=[];for(let u=0;u<i.rank;u++)(a.indexOf(u)>=0||a.length===0)&&s.push(`input_indices[${u}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Xr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Cn=e=>he(e)}),du,Br,pu,cu,hu,fr,fu,Jp,ea=P(()=>{te(),ie(),Yn(),ne(),du=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],u=e[5];if(s&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],p=r.dims[1],f=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=n.dims[0]/3,g=h,y=g;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],g=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=p;if(h!==g)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==h+g+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(s){if(g!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==g/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=s.dims[3])}let k=_+w,x=-1,b=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==l||u.dims[1]!==t.numHeads||u.dims[2]!==p||u.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:p,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:k,maxSequenceLength:x,inputHiddenSize:f,hiddenSize:h,vHiddenSize:y,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Br=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,pu=(e,t,r,i,n,a,s,u)=>{let l=xe(s?1:a),p=64,f=a/l;f<p&&(p=32);let h=Math.ceil(a/l/p),g=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:f},{type:12,data:h}],y=Ee(e.dataType,l),_=Re(1,l),w=["type"];s&&w.push("type"),u&&w.push("type");let k=x=>{let b=H("x",e.dataType,e.dims,l),I=[b],S=s?M("seq_lens",s.dataType,s.dims):void 0;S&&I.push(S);let E=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;E&&I.push(E);let A=Re(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${x.registerUniforms(C).declareVariables(...I)}
  ${x.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Br(S,E,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${A}(1.0) / ${A}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${A}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${y};${l}`,inputDependencies:w},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:g})}},cu=(e,t,r,i,n,a,s,u,l)=>{let p=s+a.kvSequenceLength,f=[a.batchSize,a.numHeads,a.sequenceLength,p],h=e>1&&i,g=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=h?[a.batchSize,g,p,a.headSize]:void 0,_=a.nReps?a.nReps:1,w=a.scale===0?1/Math.sqrt(a.headSize):a.scale,k=xe(a.headSize),x=a.headSize/k,b=12,I={x:Math.ceil(p/b),y:Math.ceil(a.sequenceLength/b),z:a.batchSize*a.numHeads},S=[{type:12,data:a.sequenceLength},{type:12,data:x},{type:12,data:p},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:w},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:_}],E=h&&i&&O.size(i.dims)>0,A=["type","type"];E&&A.push("type"),n&&A.push("type"),u&&A.push("type"),l&&A.push("type");let C=[{dims:f,dataType:t.dataType,gpuDataType:0}];h&&C.push({dims:y,dataType:t.dataType,gpuDataType:0});let v=D=>{let q=M("q",t.dataType,t.dims,k),Y=M("key",r.dataType,r.dims,k),F=[q,Y];if(E){let re=M("past_key",i.dataType,i.dims,k);F.push(re)}n&&F.push(M("attention_bias",n.dataType,n.dims));let K=u?M("seq_lens",u.dataType,u.dims):void 0;K&&F.push(K);let R=l?M("total_sequence_length_input",l.dataType,l.dims):void 0;R&&F.push(R);let N=H("output",t.dataType,f),G=[N];h&&G.push(H("present_key",t.dataType,y,k));let J=Re(1,k),ee=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${q.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${q.type.storage}, ${b*b}>;
  ${D.registerUniforms(ee).declareVariables(...F,...G)}
  ${D.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Br(K,R,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${E&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${J}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${E&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${J}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${N.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${n!==void 0};${i!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:C,dispatchGroup:I,programUniforms:S}),getShaderSource:v}},hu=(e,t,r,i,n,a,s=void 0,u=void 0)=>{let l=a+n.kvSequenceLength,p=n.nReps?n.nReps:1,f=n.vHiddenSize*p,h=e>1&&i,g=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=h?[n.batchSize,g,l,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,f],w=12,k={x:Math.ceil(n.vHeadSize/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},x=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:f},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:p}],b=h&&i&&O.size(i.dims)>0,I=["type","type"];b&&I.push("type"),s&&I.push("type"),u&&I.push("type");let S=[{dims:_,dataType:t.dataType,gpuDataType:0}];h&&S.push({dims:y,dataType:t.dataType,gpuDataType:0});let E=A=>{let C=M("probs",t.dataType,t.dims),v=M("v",r.dataType,r.dims),D=[C,v];b&&D.push(M("past_value",i.dataType,i.dims));let q=s?M("seq_lens",s.dataType,s.dims):void 0;s&&D.push(q);let Y=u?M("total_sequence_length_input",u.dataType,u.dims):void 0;u&&D.push(Y);let F=[H("output",t.dataType,_)];h&&F.push(H("present_value",t.dataType,y));let K=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${C.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${C.type.value}, ${w*w}>;
  ${A.registerUniforms(K).declareVariables(...D,...F)}
  ${A.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Br(q,Y,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:S,dispatchGroup:k,programUniforms:x}),getShaderSource:E}},fr=(e,t,r,i,n,a,s,u,l,p,f=void 0,h=void 0)=>{let g=Math.min(e.outputCount,1+(s?1:0)+(u?1:0)),y=g>1?s:void 0,_=g>1?u:void 0,w=g>1?p.pastSequenceLength:0,k=w+p.kvSequenceLength,x=l&&O.size(l.dims)>0?l:void 0,b=[t,r];y&&O.size(y.dims)>0&&b.push(y),x&&b.push(x),f&&b.push(f),h&&b.push(h);let I=e.compute(cu(g,t,r,y,x,p,w,f,h),{inputs:b,outputs:g>1?[-1,1]:[-1]})[0];e.compute(pu(I,p.batchSize,p.numHeads,w,p.sequenceLength,k,f,h),{inputs:f&&h?[I,f,h]:[I],outputs:[]});let S=[I,i];_&&O.size(_.dims)>0&&S.push(_),f&&S.push(f),h&&S.push(h),e.compute(hu(g,I,i,_,p,w,f,h),{inputs:S,outputs:g>1?[0,2]:[0]})},fu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,u={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=h=>{let g=H("output_q",l[0].dataType,r),y=H("output_k",l[0].dataType,r),_=H("output_v",l[0].dataType,r),w=M("input",l[0].dataType,l[0].dims),k=M("weight",l[1].dataType,l[1].dims),x=M("bias",l[2].dataType,l[2].dims),b=w.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${h.registerUniforms(I).declareVariables(w,k,x,g,y,_)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:p}),getShaderSource:f},{inputs:l,outputs:[-1,-1,-1]})},Jp=(e,t)=>{let r=du(e.inputs,t),[i,n,a]=fu(e,r);return fr(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),mu,gu,yu,ec,A0=P(()=>{We(),te(),ie(),ke(),ne(),mu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((u,l)=>{if(u!==i[l])throw new Error(`${a}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},gu=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?xe(a[a.length-1]):1,u=n==="NHWC"&&a.length>1?s:1,l=O.size(a)/s,p=i,f=p?a.length:a,h=M("x",e[0].dataType,e[0].dims,s),g=M("scale",e[1].dataType,e[1].dims,u),y=M("bias",e[2].dataType,e[2].dims,u),_=M("inputMean",e[3].dataType,e[3].dims,u),w=M("inputVar",e[4].dataType,e[4].dims,u),k=H("y",e[0].dataType,f,s),x=()=>{let I="";if(i)I=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")I=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${g.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let S=1;S<g.rank;S++)I+=`cIndices[${S}] = outputIndices[${S}];`;I+=`let cOffset = ${g.indicesToOffset("cIndices")};`}return I},b=I=>`
  const epsilon = ${r};
  ${I.registerUniform("outputSize","u32").declareVariables(h,g,y,_,w,k)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${s}`)};
    ${x()}
    let scale = ${g.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p?[{type:12,data:l},...X(a)]:[{type:12,data:l}]})}},yu=e=>he(e),ec=(e,t)=>{let{inputs:r,outputCount:i}=e,n=yu({...t,outputCount:i});if(ye.webgpu.validateInputContent&&mu(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(gu(r,n))}}),_u,bu,tc,O0=P(()=>{ie(),ne(),_u=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},bu=e=>{let t=e[0].dims,r=e[0].dims[2],i=O.size(t)/4,n=e[0].dataType,a=M("input",n,t,4),s=M("bias",n,[r],4),u=M("residual",n,t,4),l=H("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(a,s,u,l)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},tc=e=>{_u(e.inputs),e.compute(bu(e.inputs))}}),wu,ce,rc,ic,nc,ac,sc,oc,uc,lc,dc,$u,pc,cc,hc,fc,dr,mc,Vr,gc,yc,_c,bc,wc,$c,vc,xc,Sc,kc,Tc,Ic,Ec,zc,Cc,Ac,Fi,Oc,An,On,Rc,Bc,Mc,vu,xu,Nc,ta=P(()=>{te(),ie(),ke(),ne(),wu=(e,t,r,i,n,a,s)=>{let u=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let p=M("inputData",r,[u],4),f=H("outputData",i,[u],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(p,f)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",l)}
  }`},ce=(e,t,r,i,n,a=e.dataType,s,u)=>{let l=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&l.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:p=>wu(p,O.size(e.dims),e.dataType,a,r,i,u),getRunData:p=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(O.size(p[0].dims)/64/4)},programUniforms:l})}},rc=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},ic=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},nc=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},ac=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},sc=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},oc=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},uc=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},lc=e=>he(e),dc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},$u=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},pc=(e,t)=>{let r=t||$u(e.inputs),i=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},cc=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},hc=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},fc=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},dr=e=>he(e),mc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Vr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,gc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Vr(t)))},yc=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},_c=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},bc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Vr(t)))},wc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},$c=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},vc=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},xc=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Sc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},kc=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Tc=e=>he(e),Ic=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Ec=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},zc=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},Cc=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},Ac=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},Fi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Oc=e=>{e.compute(ce(e.inputs[0],"Tanh",Fi))},An=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Fi("v")};
}
`,On=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Rc=e=>{let t=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",On,An(t),void 0,e.inputs[0].dataType))},Bc=(e,t)=>{let r=Re(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Mc=e=>{e.compute(ce(e.inputs[0],"Log","log"))},vu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,xu=e=>`quick_gelu_impl(${e})`,Nc=(e,t)=>{let r=Re(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",xu,vu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Su,ku,Dc,R0=P(()=>{ie(),ne(),ta(),Su=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ku=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=M("input",e[0].dataType,e[0].dims,4),i=M("bias",e[0].dataType,[e[0].dims[2]],4),n=H("output",e[0].dataType,t,4),a=O.size(t)/4,s=Ee(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,n)}

  ${Vr(s)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Dc=e=>{Su(e.inputs),e.compute(ku(e.inputs))}}),Tu,Iu,Ke,Uc,Pc,qc,Lc,Wc,Vc,Gc,Hc,Fc,jc,B0=P(()=>{te(),ie(),ne(),Tu=(e,t,r,i,n,a,s,u,l,p,f,h)=>{let g,y;typeof u=="string"?g=y=(b,I)=>`${u}((${b}),(${I}))`:typeof u=="function"?g=y=u:(g=u.scalar,y=u.vector);let _=H("outputData",f,i.length,4),w=M("aData",l,t.length,4),k=M("bData",p,r.length,4),x;if(n)if(a){let b=O.size(t)===1,I=O.size(r)===1,S=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;b||I?x=_.setByOffset("global_idx",y(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),I?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):x=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(s||S?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=_.setByOffset("global_idx",y(w.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(I,S,E="")=>{let A=`aData[indexA${S}][componentA${S}]`,C=`bData[indexB${S}][componentB${S}]`;return`
            let outputIndices${S} = ${_.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offsetA${S} = ${w.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let offsetB${S} = ${k.broadcastedIndicesToOffset(`outputIndices${S}`,_)};
            let indexA${S} = offsetA${S} / 4u;
            let indexB${S} = offsetB${S} / 4u;
            let componentA${S} = offsetA${S} % 4u;
            let componentB${S} = offsetB${S} % 4u;
            ${I}[${S}] = ${E}(${g(A,C)});
          `};f===9?x=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,k,_)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},Iu=(e,t,r,i,n,a,s=r.dataType)=>{let u=r.dims.map(Number),l=i.dims.map(Number),p=!O.areEqual(u,l),f=u,h=O.size(u),g=!1,y=!1,_=[p];if(p){let w=Vt.calcShape(u,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");f=w.slice(),h=O.size(f);let k=O.size(u)===1,x=O.size(l)===1,b=u.length>0&&u[u.length-1]%4===0,I=l.length>0&&l[l.length-1]%4===0;_.push(k),_.push(x),_.push(b),_.push(I);let S=1;for(let E=1;E<f.length;E++){let A=u[u.length-E],C=l[l.length-E];if(A===C)S*=A;else break}S%4===0?(y=!0,g=!0):(k||x||b||I)&&(g=!0)}else g=!0;return _.push(g),{name:e,shaderCache:{hint:t+_.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>Tu(w,u,l,f,g,p,y,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:f,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(f)/4)},...X(u,l,f)]})}},Ke=(e,t,r,i,n,a)=>{e.compute(Iu(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},Uc=e=>{Ke(e,"Add",(t,r)=>`${t}+${r}`)},Pc=e=>{Ke(e,"Div",(t,r)=>`${t}/${r}`)},qc=e=>{Ke(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Lc=e=>{Ke(e,"Mul",(t,r)=>`${t}*${r}`)},Wc=e=>{let t=M("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ke(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Vc=e=>{Ke(e,"Sub",(t,r)=>`${t}-${r}`)},Gc=e=>{Ke(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Hc=e=>{Ke(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Fc=e=>{Ke(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},jc=e=>{Ke(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Eu,zu,Cu,Au,Kc,Xc,M0=P(()=>{te(),ie(),ke(),ne(),Eu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,u)=>{if(u!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((l,p)=>{if(p!==t&&l!==i.dims[p])throw new Error("non concat dimensions must match")})}})},zu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Cu=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},Au=(e,t,r,i)=>{let n=O.size(r),a=new Array(e.length),s=new Array(e.length),u=0,l=[],p=[],f=[{type:12,data:n}];for(let w=0;w<e.length;++w)u+=e[w].dims[t],a[w]=u,p.push(e[w].dims.length),s[w]=M(`input${w}`,i,p[w]),l.push("rank"),f.push({type:12,data:a[w]});for(let w=0;w<e.length;++w)f.push(...X(e[w].dims));f.push(...X(r));let h=H("output",i,r.length),g=h.indicesGet("indices",t),y=Array.from(Array(a.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),_=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)w.registerUniform(`sizeInConcatAxis${k}`,"u32");return w.declareVariables(...s,h)})()}

  ${zu(a.length,y)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${g});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${y});
      ${g} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Cu(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:f}),getShaderSource:_}},Kc=(e,t)=>{let r=e.inputs,i=r[0].dims,n=O.normalizeAxis(t.axis,i.length);Eu(r,n);let a=i.slice();a[n]=r.reduce((u,l)=>u+(l.dims.length>n?l.dims[n]:0),0);let s=r.filter(u=>O.size(u.dims)>0);e.compute(Au(s,n,a,r[0].dataType),{inputs:s})},Xc=e=>he({axis:e.axis})}),Ot,Rt,Bt,ra,Nt=P(()=>{te(),ie(),Ot=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Rt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Bt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ra=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[$p,vp];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ce,Zc,ia=P(()=>{Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Zc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Yc,N0=P(()=>{Yc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),cr,na,aa=P(()=>{te(),ie(),ne(),Nt(),cr=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,u)=>`
      if (${j(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,j(n,u+a,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},na=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,u=e[1].dims,l=s[s.length-2],p=u[u.length-1],f=s[s.length-1],h=xe(p),g=xe(f),y=xe(l),_=O.size(r)/h/y,w=e.length>2,k=i?i.slice(0,-2):r.slice(0,-2),x=[O.size(k),l,p],b=[{type:12,data:_},{type:12,data:l},{type:12,data:p},{type:12,data:f}];Rt(t,b),b.push(...X(k,s,u)),w&&b.push(...X(e[2].dims)),b.push(...X(x));let I=S=>{let E=Qn("batch_dims",e[0].dataType,k.length),A=M("a",e[0].dataType,s.length,g),C=M("b",e[1].dataType,u.length,h),v=H("output",e[0].dataType,x.length,h),D=Ee(v.type.tensor),q=Ot(t,v.type.value,D),Y=[A,C],F="";if(w){let N=n?h:1;Y.push(M("bias",e[2].dataType,e[2].dims.length,N)),F=`${n?`value += bias[col / ${N}];`:`value += ${v.type.value}(bias[row + i]);`}`}let K=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Bt(t,K);let R=()=>{let N=`var a_data: ${A.type.value};`;for(let G=0;G<g;G++)N+=`
              let b_data${G} = b[(b_offset + (k + ${G}) * uniforms.N + col) / ${h}];`;for(let G=0;G<y;G++){N+=`a_data = a[(a_offset + (row + ${G}) * uniforms.K + k) / ${g}];`;for(let J=0;J<g;J++)N+=`
            values[${G}] = fma(${C.type.value}(a_data${g===1?"":`[${J}]`}), b_data${J}, values[${G}]);
`}return N};return`
  ${S.registerUniforms(K).registerInternalVariables(E).declareVariables(...Y,v)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}

    var a_indices: ${A.type.indices};
    ${cr("a_indices",A,A.rank-2,E.rank,"batch_indices")}
    ${A.indicesSet("a_indices",A.rank-2,0)}
    ${A.indicesSet("a_indices",A.rank-1,0)}
    let a_offset = ${A.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${cr("b_indices",C,C.rank-2,E.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${v.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${g}) {
      ${R()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${F}
      ${q}
      let cur_indices = ${v.type.indices}(batch, row + i, col);
      let offset = ${v.indicesToOffset("cur_indices")};
      ${v.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${g};${y};${n}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:b}),getShaderSource:I}}}),Ou,Ru,Rn,ji,Bu,Bn,Mu,Zr,sa=P(()=>{te(),ie(),ne(),Nt(),aa(),ia(),Ou=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ru=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Rn=(e,t,r="f32",i,n=!1,a=32,s=!1,u=32)=>{let l=t[1]*e[1],p=t[0]*e[0],f=n?l:a,h=n?a:l,g=f/t[0],y=a/t[1];if(!((n&&g===4&&e[1]===4||!n&&(g===3||g===4))&&f%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${g} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${g} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${g}<${r}>, ${f/g}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${g};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${s?`${Math.ceil(u/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ou(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${g===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Ru(n,g)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ji=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Bu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Bn=(e,t,r="f32",i,n=!1,a=32,s=!1,u=32,l=!1)=>{let p=e[1]*t[1],f=e[0]*t[0],h=n?p:a,g=n?a:p;if(!(g%t[1]===0&&h%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${g} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let y=g/t[1],_=h/t[0],w=a/t[1],k=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${g}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${ji(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ji(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Bu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${g}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(u/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${k}
  }
`},Mu=(e,t,r,i,n=!1)=>{let[a,s,u,l]=i,p=Ee(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ce(e,p)} {
      var value = ${Ce(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${cr("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ce(e,p)} {
      var value = ${Ce(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${cr("bIndices",u,u.rank-2,a.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ce(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ce(e,p)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Zr=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,u=e[1].dims,l=s.slice(0,-2),p=u.slice(0,-2),f=i?i.slice(0,-2):r.slice(0,-2),h=O.size(f),g=s[s.length-2],y=s[s.length-1],_=u[u.length-1],w=y%4===0&&_%4===0,k=g<=8?[4,1,1]:[4,4,1],x=[8,8,1],b=[Math.ceil(_/x[0]/k[0]),Math.ceil(g/x[1]/k[1]),Math.ceil(h/x[2]/k[2])],I=w?4:1,S=[...l,g,y/I],E=S.length,A=[...p,y,_/I],C=A.length,v=[h,g,_/I],D=[{type:6,data:g},{type:6,data:_},{type:6,data:y}];Rt(t,D),D.push(...X(f,S,A));let q=["rank","rank"],Y=e.length>2;Y&&(D.push(...X(e[2].dims)),q.push("rank")),D.push(...X(v));let F=K=>{let R=f.length,N=Qn("batchDims",e[0].dataType,R,1),G=Ee(e[0].dataType),J=M("a",e[0].dataType,E,I),ee=M("b",e[1].dataType,C,I),re=H("result",e[0].dataType,v.length,I),ae=[J,ee];if(Y){let Ie=n?I:1;ae.push(M("bias",e[2].dataType,e[2].dims.length,Ie))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Bt(t,U);let Q=Ee(re.type.tensor),Z=Ot(t,re.type.value,Q),V=Mu(I,Y,Z,[N,J,ee,re],n);return`
  ${K.registerUniforms(U).registerInternalVariables(N).declareVariables(...ae,re)}
  ${V}
  ${w?Rn(k,x,G,N):Bn(k,x,G,N)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${w};${n}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:D}),getShaderSource:F}}}),Nu,Qc,D0=P(()=>{te(),ut(),ne(),Nt(),ia(),N0(),sa(),Nu=(e,t,r,i,n=!1,a,s=4,u=4,l=4,p="f32")=>{let f=D=>{switch(D){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},h=D=>{switch(D){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${D} is not supported.`)}},g=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",x=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${Ce(s,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${w}) {
      ${g}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(s)}
    }
    return resData;`,I=e?t&&i?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Ce(s,p)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Ce(s,p)}(0.0);`,S=e?i&&r?h(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(u)}
    }
    return ${Ce(u,p)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(u)}
    }
    return ${Ce(u,p)}(0.0);`,E=Ce(l,p),A=Ce(e?s:u,p),C=Ce(e?u:s,p),v=Ot(a,E,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?I:S}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${Zc(n)}
      ${v}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Qc=(e,t,r,i,n,a,s,u,l)=>{let p=t.format==="NHWC",f=p?e[0].dims[3]:e[0].dims[1],h=r[0],g=p?r[2]:r[3],y=p?r[1]:r[2],_=p?r[3]:r[1],w=p&&(f%4===0||f%3===0)&&_%4===0,k=p?_:g*y,x=p?g*y:_,b=[8,8,1],I=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(k/b[0]/I[0]),Math.ceil(x/b[1]/I[1]),Math.ceil(h/b[2]/I[2])];de("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${S}`);let E=w?p&&f%4!==0?3:4:1,A=b[1]*I[1],C=b[0]*I[0],v=Math.max(b[0]*E,b[1]),D=i%A===0,q=n%C===0,Y=a%v===0,F=w?[E,4,4]:[1,1,1],K=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Rt(t,K),K.push(...X(e[0].dims,e[1].dims));let R=["rank","rank"];s&&(K.push(...X(e[2].dims)),R.push("rank")),K.push(...X(r));let N=G=>{let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Bt(t,J);let ee=w?4:1,re=Ee(e[0].dataType),ae=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${re}>`:re}) {
        result[flatIndex] = ${w?`vec4<${re}>`:re}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${re}>`:re}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,U=M("x",e[0].dataType,e[0].dims.length,E===3?1:E),Q=M("w",e[1].dataType,e[1].dims.length,ee),Z=[U,Q],V=H("result",e[0].dataType,r.length,ee);if(s){let Ie=M("bias",e[2].dataType,e[2].dims.length,ee);Z.push(Ie),ae+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${re}>`:re} {
          return bias[coords.${p?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${Yc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${G.registerUniforms(J).declareVariables(...Z,V)}
        ${ae}
        ${Nu(p,D,q,Y,s,t,F[0],F[1],F[2],re)}
        ${w?Rn(I,b,re,void 0,!p,v):Bn(I,b,re,void 0,!p,v,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${w};${D};${q};${Y};${A};${C};${v}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:K}),getShaderSource:N}}}),Du,Ki,er,Uu,Xi,Pu,Jc,eh,U0=P(()=>{te(),ut(),ie(),ne(),Nt(),ia(),Du=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ki=e=>typeof e=="number"?[e,e,e]:e,er=(e,t)=>t<=1?e:e+(e-1)*(t-1),Uu=(e,t,r,i=1)=>{let n=er(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},Xi=(e,t,r,i,n)=>{n==null&&(n=Uu(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},Pu=(e,t,r,i,n,a,s,u,l,p)=>{let f,h,g,y;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=Xi([t,r,i,1],[u,l,p],1,[n,a,s],e);h=_[0],g=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((w,k,x)=>w===x[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=Xi([t,r,i,1],[u,l,p],1,[n,a,s],e[0]);h=_[0],g=_[1],y=_[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/n),g=Math.ceil(r/a),y=Math.ceil(i/s);let _=(h-1)*n+u-t,w=(g-1)*a+l-r,k=(y-1)*s+p-i,x=Math.floor(_/2),b=_-x,I=Math.floor(w/2),S=w-I,E=Math.floor(k/2),A=k-E;f={top:I,bottom:S,left:E,right:A,front:x,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:h,outHeight:g,outWidth:y}},Jc=(e,t,r,i,n,a=!1,s="channelsLast")=>{let u,l,p,f,h;if(s==="channelsLast")[u,l,p,f,h]=e;else if(s==="channelsFirst")[u,h,l,p,f]=e;else throw new Error(`Unknown dataFormat ${s}`);let[g,,y,_,w]=t,[k,x,b]=Ki(r),[I,S,E]=Ki(i),A=er(y,I),C=er(_,S),v=er(w,E),{padInfo:D,outDepth:q,outHeight:Y,outWidth:F}=Pu(n,l,p,f,k,x,b,A,C,v),K=a?g*h:g,R=[0,0,0,0,0];return s==="channelsFirst"?R=[u,K,q,Y,F]:s==="channelsLast"&&(R=[u,q,Y,F,K]),{batchSize:u,dataFormat:s,inDepth:l,inHeight:p,inWidth:f,inChannels:h,outDepth:q,outHeight:Y,outWidth:F,outChannels:K,padInfo:D,strideDepth:k,strideHeight:x,strideWidth:b,filterDepth:y,filterHeight:_,filterWidth:w,effectiveFilterDepth:A,effectiveFilterHeight:C,effectiveFilterWidth:v,dilationDepth:I,dilationHeight:S,dilationWidth:E,inShape:e,outShape:R,filterShape:t}},eh=(e,t,r,i,n,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],l={x:r.map((k,x)=>x)},p=[Math.ceil(Du(l.x.map(k=>r[k]))/u[0]),1,1];de("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let f=1,h=O.size(r),g=[{type:12,data:h},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Rt(t,g),g.push(...X(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(g.push(...X(e[2].dims)),y.push("rank")),g.push(...X(r));let w=k=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Bt(t,x);let b=1,I=Ee(e[0].dataType),S=M("x",e[0].dataType,e[0].dims.length,f),E=M("W",e[1].dataType,e[1].dims.length,b),A=[S,E],C=H("result",e[0].dataType,r.length,b),v="";if(_){let Y=M("bias",e[2].dataType,e[2].dims.length,b);A.push(Y),v+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${s?j("coords",4,5):j("coords",1,5)}];
        }`}let D=Ce(f,I),q=Ot(t,D,I);return`
            ${v}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${S.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${k.registerUniforms(x).declareVariables(...A,C)}
          ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${j("coords",0,S.rank)};
              let d2 = ${s?j("coords",S.rank-1,S.rank):j("coords",1,S.rank)};
              let xFRCCorner = vec3<u32>(${s?j("coords",1,S.rank):j("coords",2,S.rank)},
              ${s?j("coords",2,S.rank):j("coords",3,S.rank)},
              ${s?j("coords",3,S.rank):j("coords",4,S.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?j("uniforms.x_shape",1,S.rank):j("uniforms.x_shape",2,S.rank)};
              let xShapeZ = ${s?j("uniforms.x_shape",2,S.rank):j("uniforms.x_shape",3,S.rank)};
              let xShapeW = ${s?j("uniforms.x_shape",3,S.rank):j("uniforms.x_shape",4,S.rank)};
              let xShapeU = ${s?j("uniforms.x_shape",4,S.rank):j("uniforms.x_shape",1,S.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${q}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${f};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:g}),getShaderSource:w}}}),th,rh,P0=P(()=>{te(),ie(),ne(),Nt(),th=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,u=e[1].dims,l=t.format==="NHWC",p=l?r[3]:r[1],f=p/t.group,h=l&&f>=4?xe(p):1,g=O.size(r)/h,y=[{type:12,data:g},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];Rt(t,y),y.push(...X(s,[u[0],u[1],u[2],u[3]/h]));let _=n?["rank","rank","rank"]:["rank","rank"];y.push(...X([r[0],r[1],r[2],r[3]/h]));let w=k=>{let x=H("output",e[0].dataType,r.length,h),b=Ee(x.type.tensor),I=Ot(t,x.type.value,b),S=M("x",e[0].dataType,s.length),E=M("w",e[1].dataType,u.length,h),A=[S,E];n&&A.push(M("b",e[2].dataType,e[2].dims,h));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Bt(t,C);let v=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${S.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${S.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(C).declareVariables(...A,x)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${v}
    ${a}
    ${I}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:w}},rh=(e,t,r,i)=>{let n=e.length>2,a=xe(r[3]),s=xe(r[2]),u=O.size(r)/a/s,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],f=[r[0],r[1],r[2],r[3]/a],h=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Rt(t,h),h.push(...X(l,p,f));let g=(s-1)*t.strides[1]+p[1],y=_=>{let w=H("output",e[0].dataType,f.length,a),k=Ee(w.type.tensor),x=Ot(t,w.type.value,k),b=M("x",e[0].dataType,l.length,a),I=M("w",e[1].dataType,p.length,a),S=[b,I];n&&S.push(M("b",e[2].dataType,e[2].dims,a));let E=n?"value += b[output_channel];":"",A=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Bt(t,A),`
  ${_.registerUniforms(A).declareVariables(...S,w)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${g}>;
    var values: array<${w.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${g}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${I.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${x}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${g};${p[0]};${p[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:y}}}),qu,Mr,Lu,Nr,Mn,Zi,Wu,Vu,Nn,q0=P(()=>{ie(),D0(),U0(),sa(),P0(),Nt(),aa(),_t(),qu=(e,t,r,i,n,a)=>{let s=e[0],u=e.slice(a?1:2,a?3:4),l=u.length,p=t[0],f=t.slice(2).map((g,y)=>g+(g-1)*(r[y]-1)),h=u.map((g,y)=>g+i[y]+i[y+l]).map((g,y)=>Math.floor((g-f[y]+n[y])/n[y]));return h.splice(0,0,s),h.splice(a?3:1,0,p),h},Mr=[2,3,1,0],Lu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Nr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();Kr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},Mn=e=>{let t=ra(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,u=e.pads,l=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:u,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Zi=(e,t,r,i)=>{let n=r.format==="NHWC",a=qu(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let A=[t[0]];if(n){let C=e.kernelCustomData.wT??e.compute(Pe(t[1],Mr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),A.push(C)}else A.push(t[1]);t.length===3&&A.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(rh(A,r,a,i),{inputs:A}):e.compute(th(A,r,a,i),{inputs:A});return}let s=t.length===3,u=t[0].dims[n?1:2],l=t[0].dims[n?2:3],p=t[0].dims[n?3:1],f=t[1].dims[2],h=t[1].dims[3],g=a[n?1:2],y=a[n?2:3],_=a[n?3:1],w=n&&f===u&&h===l&&r.pads[0]===0&&r.pads[1]===0;if(w||f===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let A=a[0],C,v,D,q=[];if(n){let K=e.kernelCustomData.wT??e.compute(Pe(t[1],Mr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=K),w){let R=u*l*p;C=t[0].reshape([1,A,R]),v=K.reshape([1,R,_]),D=[1,A,_]}else C=t[0].reshape([A,u*l,p]),v=K.reshape([1,p,_]),D=[A,g*y,_];q.push(C),q.push(v)}else C=t[0].reshape([A,p,u*l]),v=t[1].reshape([1,_,p]),D=[A,_,g*y],q.push(v),q.push(C);s&&q.push(t[2]);let Y=D[2],F=q[0].dims[q[0].dims.length-1];Y<8&&F<8?e.compute(na(q,r,a,D,n,i),{inputs:q}):e.compute(Zr(q,r,a,D,n,i),{inputs:q});return}let k=!0,x=e.kernelCustomData.wT??e.compute(Pe(t[1],Mr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let b=[t[0],x];s&&b.push(t[2]);let I=n?g*y:_,S=n?_:g*y,E=f*h*p;e.compute(Qc(b,r,a,I,S,E,s,k,i),{inputs:b})},Wu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),u=[1].concat(t.kernelShape),l=Nr({...t,pads:n,strides:a,dilations:s,kernelShape:u},i);Zi(e,i,l,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Vu=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Nr(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Jc(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(eh(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},Nn=(e,t)=>{if(Lu(e.inputs,t),e.inputs[0].dims.length===3)Wu(e,t);else if(e.inputs[0].dims.length===5)Vu(e,e.inputs,t);else{let r=Nr(t,e.inputs);Zi(e,e.inputs,r)}}}),ih,L0=P(()=>{te(),ut(),ie(),ne(),ih=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,u=e[1].dims,l=u[2]/s,p=u[3],f=a?xe(l):1,h=a&&p===1&&l>=4,g=h?Math.floor(l/4)*4:Math.floor(l/f)*f,y=l-g,_=a?xe(p):1,w=a?p===1?f:_:1,k=O.size(n)/_,x=[Math.ceil(k/64),1,1];de("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let b=["rank","rank"],I=[t.strides[0],t.strides[1]],S=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],E=[t.dilations[0],t.dilations[1]],A=[S[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),S[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[A[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),A[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],v=[{type:12,data:k},{type:12,data:I},{type:12,data:S},{type:12,data:E},{type:12,data:A},{type:6,data:C},{type:12,data:g},{type:12,data:l},{type:12,data:p},...X(e[0].dims,e[1].dims)];i&&(v.push(...X(e[2].dims)),b.push("rank")),v.push(...X(n));let D=q=>{let Y=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:S.length},{name:"dilations",type:"u32",length:S.length},{name:"effective_filter_dims",type:"u32",length:A.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],F=Ee(e[0].dataType),K=a?1:2,R=a?2:3,N=a?3:1,G=M("W",e[1].dataType,e[1].dims.length,w),J=M("Dy",e[0].dataType,e[0].dims.length,f),ee=[J,G];i&&ee.push(M("bias",e[2].dataType,[n[N]].length,_));let re=H("result",e[0].dataType,n.length,_),ae=()=>{let Z="";if(h)f===4?Z+=`
        let xValue = ${J.getByOffset("x_offset")};
        let wValue = ${G.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:f===2?Z+=`
          dotProd = dotProd + dot(vec4<${F}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}), vec4<${F}>(${G.getByOffset("w_offset")}, ${G.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:f===1&&(Z+=`
          dotProd = dotProd + dot(vec4<${F}>(${J.getByOffset("x_offset")}, ${J.getByOffset("x_offset + 1u")}, ${J.getByOffset("x_offset + 2u")}, ${J.getByOffset("x_offset + 3u")}), vec4<${F}>(${G.getByOffset("w_offset")}, ${G.getByOffset("w_offset + 1u")}, ${G.getByOffset("w_offset + 2u")}, ${G.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Z+=`
                  let xValue = ${a?J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):J.get("batch","inputChannel","idyR","idyC")};
        `,f===1)Z+=`
          let w_offset = ${G.indicesToOffset(`${G.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${G.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let V=0;V<f;V++)Z+=`
            let wValue${V} = ${G.getByOffset(`${G.indicesToOffset(`${G.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${V}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${V}] * wValue${V};`;return Z},U=()=>{if(y===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let Z="";if(f===1){Z+="dotProd = dotProd";for(let V=0;V<y;V++)Z+=`
            + ${J.getByOffset(`x_offset + ${V}`)} * ${G.getByOffset(`w_offset + ${V}`)}`;Z+=";"}else if(f===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);Z+=`
          let xValue = ${J.getByOffset("x_offset")};
          let wValue = ${G.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Z},Q=`
            let outputIndices = ${re.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${re.indicesGet("outputIndices",0)};
            let d1 = ${re.indicesGet("outputIndices",N)};
            let r = ${re.indicesGet("outputIndices",K)};
            let c = ${re.indicesGet("outputIndices",R)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${re.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${F}(dyRCorner) + ${F}(wR)) / ${F}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${F}(uniforms.Dy_shape[${K}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${F}(dyCCorner) + ${F}(wC)) / ${F}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${F}(uniforms.Dy_shape[${R}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${J.indicesToOffset(`${J.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f};
                var w_offset = ${G.indicesToOffset(`${G.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:f}) {
                  ${ae()}
                  inputChannel = inputChannel + ${h?4:f};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${re.setByOffset("global_idx","value")};
          `;return`
    ${q.registerUniforms(Y).declareVariables(...ee,re)}
      ${q.mainStart()}
      ${q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Q}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${w}${_}${h}${y}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:v}),getShaderSource:D}}}),Gu,Hu,Fu,Yi,nh,ju,Qi,Ku,ah,W0=P(()=>{L0(),Nt(),_t(),Gu=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,Hu=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},Fu=(e,t,r,i,n,a,s,u,l,p)=>{let f=e.length-2,h=p.length===0;l.length<f&&l.push(...Array(f-l.length).fill(0));let g=e[0],y=t[u?3:1]*n;for(let _=0,w=e.length-f-(u?1:0);_<f;++_,++w){let k=e[w],x=h?k*s[_]:p[_],b=Gu(k,s[_],a[_],t[w],r[_],x);Hu(b,i,a,_,_+f),h&&p.push(s[_]*(k-1)+l[_]+(t[w]-1)*r[_]+1-a[_]-a[_+f])}p.splice(0,0,g),p.splice(u?3:1,0,y)},Yi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,g)=>h*g,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),u=t[0].dims,l=e.dilations.slice();if(l.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let p=e.strides.slice();if(p.reduce((h,g)=>h+g,0)===0){let h=t[0].dims.length-2;p=new Array(h).fill(1)}Fu(u,r,l,e.autoPad,e.group,n,p,i,s,a);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:l,strides:p}),f},nh=e=>{let t=ra(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,u=e.pads,l=e.strides,p=e.wIsConst(),f=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:f,outputShape:h,pads:u,strides:l,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},ju=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,u)=>s+u,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,u)=>s+u,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,u)=>s+u,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,u)=>s+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Qi=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(Pe(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(ih(a,r,i),{inputs:a})},Ku=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let p=Yi({...t,pads:u,strides:s,dilations:a,kernelShape:n,outputPadding:l},i);Qi(e,i,p,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},ah=(e,t)=>{if(ju(e.inputs,t),e.inputs[0].dims.length===3)Ku(e,t);else{let r=Yi(t,e.inputs);Qi(e,e.inputs,r)}}}),Xu,sh,oh,V0=P(()=>{te(),ie(),ke(),ne(),Xu=(e,t,r,i)=>{let n=O.size(t),a=t.length,s=M("input",e,a),u=H("output",e,a),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=O.normalizeAxis(l,a),f=h=>{let g=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,y=j("uniforms.input_shape","uniforms.axis",a),_=i.reverse?g+(i.exclusive?" + 1":""):"0",w=i.reverse?y:g+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,u)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:p},...X(t,t)]}),getShaderSource:f}},sh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(Xu(i,r,n,t),{inputs:[0]})},oh=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),Zu,Yu,Qu,uh,lh,G0=P(()=>{te(),ie(),ke(),ne(),Zu=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Yu=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},Qu=(e,t)=>{let r,i,n,a,s,u,l=t.format==="NHWC",p=t.blocksize,f=t.mode==="DCR";l?([r,i,n,a]=e.dims,s=f?[r,i,n,p,p,a/p**2]:[r,i,n,a/p**2,p,p],u=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=f?[r,p,p,a/p**2,i,n]:[r,a/p**2,p,p,i,n],u=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),g=h.dims.length,y=e.dataType,_=M("a",y,g),w=H("output",y,g),k=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(_,w)}

  ${Yu(u,g,_,w)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let b=l?[r,i*p,n*p,a/p**2]:[r,a/p**2,i*p,n*p],I=O.size(b),S=h.dims,E=O.sortBasedOnPerm(S,u);return{outputs:[{dims:b,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...X(S,E)]}},getShaderSource:k}},uh=(e,t)=>{Zu(e.inputs),e.compute(Qu(e.inputs[0],t))},lh=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Dr,tr,Ji,Ju,el,tl,rl,en,il,dh,ph,H0=P(()=>{te(),ie(),ke(),ne(),Dr="[a-zA-Z]|\\.\\.\\.",tr="("+Dr+")+",Ji="^"+tr+"$",Ju="("+tr+",)*"+tr,el="^"+Ju+"$",tl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},rl=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(el)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,a)=>{let s=e[a].dims.slice();if(!n.match(RegExp(Ji)))throw new Error("Invalid LHS term");let u=this.processTerm(n,!0,s,a);this.lhs.push(u)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,a])=>a.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(tr)))throw new Error("Invalid RHS");i.match(RegExp(Dr,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(n);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],u=0;if(!e.match(RegExp(Ji))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Dr,"g")),p=new tl(i);return l?.forEach((f,h)=>{if(f==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let g=n-l.length+1;if(g<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(u,u+g),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<s.length;y++){let _=String.fromCharCode(48+y);p.addSymbol(_,h+y),this.addSymbol(_,r[u++],i)}}else p.addSymbol(f,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[u++],i)}),p}},en=e=>e+"_max",il=(e,t,r,i)=>{let n=e.map(p=>p.length).map((p,f)=>M(`input${f}`,t,p)),a=O.size(i),s=H("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),l=p=>{let f=[],h="var prod = 1.0;",g="var sum = 0.0;",y="sum += prod;",_=[],w=[],k=[],x=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((S,E)=>{if(r.rhs.symbolToIndices.has(E)){let A=r.rhs.symbolToIndices.get(E)?.[0];A!==void 0&&r.lhs.forEach((C,v)=>{if(S.inputIndices.includes(v)){let D=C.symbolToIndices.get(E);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(q=>{f.push(`${n[v].indicesSet(`input${v}Indices`,q,s.indicesGet("outputIndices",A))}`)})}})}else r.lhs.forEach((A,C)=>{if(S.inputIndices.includes(C)){let v=A.symbolToIndices.get(E);if(v===void 0)throw new Error("Invalid symbol error");v.forEach(D=>{_.push(`${n[C].indicesSet(`input${C}Indices`,D,`${E}`)}`)}),x.push(`prod *= ${n[C].getByIndices(`input${C}Indices`)};`)}}),w.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${en(E)}; ${E}++) {`),k.push("}")});let I=b?[...f,`let sum = ${n.map((S,E)=>S.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...f,g,...w,..._,h,...x,y,...k];return`
            ${p.registerUniforms(u.map(S=>({name:`${en(S)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((S,E)=>`var input${E}Indices: ${n[E].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=u.filter(h=>r.symbolToInfo.has(h)).map(h=>({type:12,data:r.symbolToInfo.get(h)?.dimValue||0}));p.push({type:12,data:a});let f=e.map((h,g)=>[...X(h)]).reduce((h,g)=>h.concat(g),p);return f.push(...X(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}},getShaderSource:l}},dh=(e,t)=>{let r=new rl(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(il(n,e.inputs[0].dataType,r,i))},ph=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),nl,tn,al,sl,ch,F0=P(()=>{te(),ie(),ne(),nl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},tn=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},al=(e,t)=>e.length>t.length?tn(e,t):tn(t,e),sl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=al(t,r),n=e[0].dataType,a=n===9||O.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,u=a||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(O.size(i)/u),p=h=>{let g=M("input",n,t.length,s),y=H("output",n,i.length,u),_;if(n===9){let w=(k,x,b="")=>`
          let outputIndices${x} = ${y.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${g.broadcastedIndicesToOffset(`outputIndices${x}`,y)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${k}[${x}] = ${b}(${g.getByOffset(`index${x}`)}[component${x}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${g.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${g.getByOffset(`inputOffset / ${s}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(g,y)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},f=[{type:12,data:l},...X(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${u}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f})}},ch=e=>{nl(e.inputs),e.compute(sl(e.inputs),{inputs:[0]})}}),ol,hh,j0=P(()=>{te(),ie(),ne(),ta(),ol=e=>{let t=e[0].dataType,r=O.size(e[0].dims),i=O.size(e[1].dims),n=i%4===0,a=s=>{let u=M("x",t,[1],4),l=M("bias",t,[1],4),p=H("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,g=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(f).declareVariables(u,l,p)}

    ${An(Re(t))}

    ${s.mainStart(Gt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${g}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",On("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Gt/4)}})}},hh=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?Rc(e):e.compute(ol(e.inputs))}}),ul,ll,fh,mh,K0=P(()=>{te(),ie(),ke(),ne(),ul=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},ll=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=O.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let u=r[a],l=e[0].dataType===9?4:1,p=Math.ceil(O.size(s)/l),f=[{type:12,data:p},{type:6,data:u},{type:12,data:a},...X(e[0].dims,e[1].dims,s)],h=g=>{let y=M("data",e[0].dataType,e[0].dims.length,l),_=M("inputIndices",e[1].dataType,e[1].dims.length),w=H("output",e[0].dataType,s.length,l),k=b=>{let I=i.length,S=`var indicesIndices${b}  = ${_.type.indices}(0);`;for(let E=0;E<I;E++)S+=`${I>1?`indicesIndices${b}[${E}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${E}]`:`outputIndices${b}`};`;S+=`
          var idx${b} = ${_.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${y.type.indices};
        `;for(let E=0,A=0;E<n;E++)E===a?(S+=`${n>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = u32(idx${b});`,A+=I):(S+=`${n>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${A}]`:`outputIndices${b}`};`,A++);return S},x;if(e[0].dataType===9){let b=(I,S,E="")=>`
          let outputIndices${S} = ${w.offsetToIndices(`outputOffset + ${S}u`)};
          ${k(S)};
          let offset${S} = ${y.indicesToOffset(`dataIndices${S}`)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${I}[${S}] = ${E}(${y.getByOffset(`index${S}`)}[component${S}]);
        `;x=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${y.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${g.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,w)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:h}},fh=e=>he({axis:e.axis}),mh=(e,t)=>{let r=e.inputs;ul(r),e.compute(ll(e.inputs,t))}}),dl,gh,yh,X0=P(()=>{te(),ie(),ne(),dl=(e,t,r,i,n,a,s,u,l)=>{let p=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:u},{type:12,data:l}],f=[a];p.push(...X(t.dims,f));let h=g=>{let y=M("indices_data",t.dataType,t.dims.length),_=H("input_slice_offsets_data",12,1,1),w=[y,_],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${g.registerUniforms(k).declareVariables(...w)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},gh=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],u=O.sizeToDimension(a,a.length-1),l=O.sizeFromDimension(i,t.batchDims+s),p=O.sizeToDimension(i,t.batchDims),f=O.sizeFromDimension(i,t.batchDims),h=u/p,g=new Array(s),y=l;for(let S=0;S<s;++S)g[s-1-S]=y,y*=i[t.batchDims+s-1-S];let _=dl(e,r[1],g,t.batchDims,i,u,h,f,s),w=t.batchDims+s;if(w>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=a.slice(0,-1).concat(i.slice(w)),x=O.size(k),b=[{type:12,data:x},{type:12,data:l},...X(r[0].dims,_.dims,k)],I=S=>{let E=M("data",r[0].dataType,r[0].dims.length),A=M("slice_offsets",12,_.dims.length),C=H("output",r[0].dataType,k.length);return`
          ${S.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(E,A,C)}
            ${S.mainStart()}
            ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:n}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:b}),getShaderSource:I},{inputs:[r[0],_]})},yh=e=>({batchDims:e.batch_dims,cacheKey:""})}),pl,cl,_h,bh,Z0=P(()=>{te(),ie(),ke(),ne(),pl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((u,l)=>l===r?Math.ceil(u/i)===a.dims[l]:u===a.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((u,l)=>u===a.dims[l]).reduce((u,l)=>u&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},cl=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=O.normalizeAxis(t.gatherAxis,n),s=O.normalizeAxis(t.quantizeAxis,n),u=r.slice(0);u.splice(a,1,...i);let l=O.size(u),p=e[2].dataType,f=e[0].dataType===22,h=[{type:12,data:l},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...X(...e.map((y,_)=>y.dims),u)],g=y=>{let _=M("data",e[0].dataType,e[0].dims.length),w=M("inputIndices",e[1].dataType,e[1].dims.length),k=M("scales",e[2].dataType,e[2].dims.length),x=e.length>3?M("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=H("output",p,u.length),I=[_,w,k];x&&I.push(x);let S=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(S).declareVariables(...I,b)}
        ${y.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${k.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${k.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${k.getByIndices("scale_indices")};
        ${x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Re(p)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:p}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:g}},_h=(e,t)=>{let r=e.inputs;pl(r,t),e.compute(cl(e.inputs,t))},bh=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),hl,fl,wh,$h,Y0=P(()=>{te(),ie(),ke(),ne(),hl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},fl=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,u=O.normalizeAxis(t.axis,n),l=r[u],p=a.slice(0),f=O.size(p),h=M("input",i,n),g=M("indicesInput",s,a.length),y=H("output",i,p.length),_=[{type:12,data:f},{type:6,data:l},{type:12,data:u}];return _.push(...X(r,a,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:_}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,g,y)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${g.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},wh=e=>he({axis:e.axis}),$h=(e,t)=>{let r=e.inputs;hl(r),e.compute(fl(e.inputs,t))}}),ml,gl,vh,xh,Q0=P(()=>{te(),ie(),ne(),ml=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},gl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=wp.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[n,a];if(!u)throw new Error("Can't use gemm on the given tensors");let l=16,p=Math.ceil(a/l),f=Math.ceil(n/l),h=!0,g=O.size(u),y=[{type:12,data:h?p:g},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...X(e[2].dims)),_.push("rank")),y.push(...X(u));let w=x=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",S=M("a",e[0].dataType,e[0].dims),E=M("b",e[1].dataType,e[1].dims),A=S.type.value,C=null,v=[S,E];e.length===3&&(C=M("c",e[2].dataType,e[2].dims.length),v.push(C));let D=H("output",e[0].dataType,u.length);v.push(D);let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(q).declareVariables(...v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${I}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",D)}; value += ${A}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=x=>{let b=M("a",e[0].dataType,e[0].dims),I=M("b",e[1].dataType,e[1].dims),S=null,E=[b,I];e.length===3&&(S=M("c",e[2].dataType,e[2].dims.length),E.push(S));let A=H("output",e[0].dataType,u.length);E.push(A);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],v="",D="";t.transA&&t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(D=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(D=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,v="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let q=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(C).declareVariables(...E)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${l}>, ${l}>;
  ${x.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${A.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${D}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${v}
      }
      workgroupBarrier();
    }

    ${q}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${S!=null?`let cOffset = ${S.broadcastedIndicesToOffset("vec2(m, n)",A)}; value += ${A.type.value}(uniforms.beta) * ${S.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:p*f},programUniforms:y}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:y}),getShaderSource:w}},vh=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},xh=(e,t)=>{ml(e.inputs),e.compute(gl(e.inputs,t))}}),rt,st,xt,St,yl,_l,bl,wl,$l,vl,xl,Sl,Sh,kh,J0=P(()=>{te(),ie(),ke(),ne(),[rt,st,xt,St]=[0,1,2,3],yl=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},_l=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,bl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,wl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,$l=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,vl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${rt}] = batch;
     indices[${st}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${xt}] = u32(r);
            indices[${St}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${xt}] = u32(clamp(r, 0, H - 1));
          indices[${St}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${xt}] = gs_reflect(r, border[1], border[3]);
          indices[${St}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,xl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${rt}], indices[${st}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${rt}], indices[${st}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${rt}], indices[${st}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${rt}], indices[${st}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${rt}], indices[${st}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${rt}], indices[${st}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Sl=(e,t)=>{let r=M("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=M("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[rt,st,xt,St]=[0,3,1,2]);let s=H("output",e[0].dataType,a.length),u=r.type.value,l=O.size(a),p=[{type:12,data:l},...X(e[0].dims,i,a)],f=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${_l}
  ${bl(u)}
  ${wl(t)}
  ${$l(t)}
  ${vl(r,u,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${xt}]);
      let W_in = i32(uniforms.x_shape[${St}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${rt}], indices[${xt}], indices[${St}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${xl(s,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let g=O.size(a);return{outputs:[{dims:a,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:p}},getShaderSource:f}},Sh=(e,t)=>{yl(e.inputs),e.compute(Sl(e.inputs,t))},kh=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Me,kl,Th,rn,Tl,pr,Ih,Eh=P(()=>{te(),ie(),ke(),Yn(),ea(),ne(),_t(),Me=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,kl=(e,t)=>{let r=e[0],i=Me(e,1),n=Me(e,2),a=Me(e,3),s=Me(e,4),u=Me(e,5),l=Me(e,6),p=Me(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],h=r.dims[1],g=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=h,_=0,w=0,k=Math.floor(g/t.numHeads);if(l&&p&&O.size(l.dims)&&O.size(p.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==f||l.dims[1]!==t.numHeads||l.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==f||p.dims[1]!==t.numHeads||p.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],w=l.dims[2]}else if(l&&O.size(l.dims)||p&&O.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(i&&O.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(a&&O.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=_+y,I=0;if(s&&O.size(s.dims)>0){I=8;let C=s.dims;throw C.length===1?C[0]===f?I=1:C[0]===3*f+2&&(I=3):C.length===2&&C[0]===f&&C[1]===b&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let S=!1,E=g;if(n&&O.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(y!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=n.dims[2]}else{if(y!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=n.dims[1]*n.dims[3],S=!0}}let A=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(u&&O.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==f||u.dims[1]!==t.numHeads||u.dims[2]!==h||u.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:h,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:g,vHiddenSize:E,headSize:k,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:A,passPastInKv:S,qkvFormat:x}},Th=e=>he({...e}),rn=he({perm:[0,2,1,3]}),Tl=(e,t,r,i,n,a,s)=>{let u=[i,n,a],l=O.size(u),p=[{type:12,data:l},{type:12,data:s},{type:12,data:a}],f=h=>{let g=H("qkv_with_bias",t.dataType,u),y=M("qkv",t.dataType,u),_=M("bias",r.dataType,u),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(y,_,g)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},pr=(e,t,r,i,n,a,s,u)=>{let l=a;if(s&&O.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=Tl(e,a,s,t,i,r*n,u),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute(Pe(l,rn.perm),{inputs:[l],outputs:[-1]})[0]}else return a.dims.length===3&&(l=a.reshape([t,i,r,n])),r===1||i===1?l:e.compute(Pe(l,rn.perm),{inputs:[l],outputs:[-1]})[0]},Ih=(e,t)=>{let r=kl(e.inputs,t),i=e.inputs[0],n=Me(e.inputs,1),a=Me(e.inputs,2),s=Me(e.inputs,3),u=Me(e.inputs,4),l=Me(e.inputs,5),p=Me(e.inputs,6),f=Me(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let h=n&&a&&n.dims.length===4&&a.dims.length===4,g=pr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(h)return fr(e,g,n,a,u,void 0,p,f,l,r);if(!n||!a)throw new Error("key and value must be provided");let y=pr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),_=pr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);fr(e,g,y,_,u,void 0,p,f,l,r)}}),Il,El,zl,Cl,Dn,zh,Ch,Ah=P(()=>{te(),ie(),ke(),ne(),Il=e=>{if(!e||e.length<1)throw new Error("too few inputs")},El=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},zl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${j("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Cl=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Dn=(e,t)=>{let r=e[0].dims,i=O.size(r),n=e[0].dataType,a=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),u=M("input",n,r.length),l=new Array(t.numOutputs),p=[],f=[],h=0,g=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){h+=t.splitSizes[_],l[_]=h;let w=r.slice();w[a]=t.splitSizes[_],f.push(w),s[_]=H(`output${_}`,n,w.length),p.push({dims:f[_],dataType:e[0].dataType})}g.push({type:12,data:l},...X(r,...f));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(u,...s)}
  ${zl(l.length)}
  ${Cl(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${j("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${u.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:g})}},zh=(e,t)=>{Il(e.inputs);let r=e.inputs.length===1?t:El(e.inputs,t);e.compute(Dn(e.inputs,r),{inputs:[0]})},Ch=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),Al,Yr,Oh,Rh=P(()=>{te(),ie(),ke(),ne(),Al=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(i.dims,[])&&!O.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!O.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],p=r.dims[r.dims.length-2],f=n.dims[0],h=O.sizeFromDimension(r.dims,1)/p,g=u===0?n.dims[1]*2:h/s;if(u>g)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(p>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if(g/2!==n.dims[1]&&u/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`)},Yr=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],u=O.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],p=u/l,f=e[2].dims[1],h=n===0?f*2:p/i,g=new Array(s,l,p/h,h-f),y=O.computeStrides(g),_=[{type:1,data:a},{type:12,data:g},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[u,p,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,h,l*h,1]}):[],...X(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=k=>{let x=M("input",e[0].dataType,e[0].dims.length),b=M("position_ids",e[1].dataType,e[1].dims.length),I=M("cos_cache",e[2].dataType,e[2].dims.length),S=M("sin_cache",e[3].dataType,e[3].dims.length),E=H("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:g.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${k.declareVariables(x,b,I,S,E)}

        ${k.mainStart(Gt)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",H("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${x.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(g)/Gt)},programUniforms:_})}},Oh=(e,t)=>{Al(e.inputs,t),e.compute(Yr(e.inputs,t))}}),Ol,Rl,nn,Bl,Bh,ey=P(()=>{ke(),te(),ea(),Eh(),Ah(),_t(),Rh(),ne(),Ol=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,l=r.dims[0],p=r.dims[1],f=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=p,g=0,y=!i||i.dims.length===0,_=Math.floor(y?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);y&&(f=_*t.numHeads);let w=a&&a.dims.length!==0,k=s&&s.dims.length!==0;if(w&&a.dims.length===4&&a.dims[0]===l&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&k){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');g=a.dims[2]}else if(w||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let b=0,I=!1,S=t.kvNumHeads?_*t.kvNumHeads:f;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(h!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');S=n.dims[2]}else{if(h!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');S=n.dims[1]*n.dims[3],I=!0}}let E=e.length>4?e[5]:void 0;if(E){if(E.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let A=E.dims.reduce((C,v)=>C*v,1);if(A!==l)throw new Error(`seqlens_k must have batch_size (${l}) elements, got ${A}.`);for(let C=0;C<E.dims.length;C++)if(E.dims[C]!==1&&E.dims[C]!==l)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${l}), got dims[${C}] = ${E.dims[C]}.`)}return{batchSize:l,sequenceLength:p,pastSequenceLength:g,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:f,vHiddenSize:S,headSize:_,vHeadSize:Math.floor(S/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:x}},Rl=he({perm:[0,2,1,3]}),nn=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(Pe(i,Rl.perm),{inputs:[i],outputs:[-1]})[0]),i},Bl=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],u=e*t,l=[{type:12,data:u},{type:12,data:t},{type:12,data:e}],p=f=>{let h=M("seq_lens",r.dataType,r.dims),g=M("total_seq_lens",i.dataType,i.dims),y=H("pos_ids",n,s),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${f.registerUniforms(_).declareVariables(h,g,y)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${g.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:p}},Bh=(e,t)=>{let r=Ol(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[g,y,_]=!n&&!a?e.compute(Dn([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],w,k;if(t.doRotary){let S=e.compute(Bl(r.batchSize,r.sequenceLength,l,p),{inputs:[l,p],outputs:[-1]})[0],E=e.inputs[7],A=e.inputs[8],C=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),v=[g,S,E,A],D=[-1];w=e.compute(Yr(v,C),{inputs:v,outputs:D})[0],v.splice(0,1,y);let q=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});k=e.compute(Yr(v,q),{inputs:v,outputs:D})[0]}let x=pr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:g,void 0,0),b=nn(e,t.doRotary?k:y,r),I=nn(e,_,r);fr(e,x,b,I,void 0,void 0,s,u,void 0,r,l,p)}}),an,Ml,Nl,Mh,ty=P(()=>{te(),ie(),_t(),ne(),an=(e,t,r,i,n,a,s,u)=>{let l=xe(a),p=l===1?"f32":`vec${l}f`,f=l===1?"vec2f":`mat2x${l}f`,h=n*s,g=64;h===1&&(g=256);let y=[n,s,a/l],_=[n,s,2],w=["rank","type","type"],k=[];k.push(...X(y,_));let x=b=>{let I=M("x",t.dataType,3,l),S=M("scale",r.dataType,r.dims),E=M("bias",i.dataType,i.dims),A=H("output",1,3,2),C=[I,S,E,A];return`
  var<workgroup> workgroup_shared : array<${f}, ${g}>;
  const workgroup_size = ${g}u;
  ${b.declareVariables(...C)}
  ${b.mainStart(g)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${I.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${yt("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${yt("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${u};${g}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:h},programUniforms:k}),getShaderSource:x},{inputs:[t,r,i],outputs:[-1]})[0]},Ml=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],u=i[1],l=O.sizeFromDimension(i,a),p=xe(l),f=O.size(n)/p,h=an(e,t[0],t[1],t[2],s,l,u,r.epsilon),g=[s,u,l/p],y=[s,u],_=["type","none"],w=k=>{let x=M("x",t[0].dataType,g.length,p),b=M("scale_shift",1,y.length,2),I=H("output",t[0].dataType,g.length,p),S=[x,b,I];return`
  ${k.registerUniform("output_size","u32").declareVariables(...S)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...X(g,y,g)]}),getShaderSource:w},{inputs:[t[0],h]})},Nl=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],u=O.sizeFromDimension(i,1)/s,l=xe(s),p=O.size(n)/l,f=[{type:12,data:u},{type:12,data:Math.floor(s/l)}],h=["type","type"],g=!1,y=[0,i.length-1];for(let x=0;x<i.length-2;x++)g=g||i[x+1]!==1,y.push(x+1);g=g&&i[i.length-1]!==1;let _=g?e.compute(Pe(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(x,b)=>i[y[b]])),w=an(e,_,t[1],t[2],a,u,s,r.epsilon),k=x=>{let b=Ee(t[0].dataType),I=l===1?"vec2f":`mat${l}x2f`,S=C=>{let v=C===0?"x":"y",D=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${D}(scale.${v}))`;case 2:return`vec2<${b}>(${D}(scale[0].${v}, scale[1].${v}))`;case 4:return`vec4<${b}>(${D}(scale[0].${v}, scale[1].${v}, scale[2].${v}, scale[3].${v}))`;default:throw new Error(`Not supported compoents ${l}`)}},E=M("input",t[0].dataType,t[0].dims,l),A=H("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${E.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${A.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${S(0)}, ${S(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:k},{inputs:[t[0],w]})},Mh=(e,t)=>{t.format==="NHWC"?Nl(e,e.inputs,t):Ml(e,e.inputs,t)}}),Dl,Ul,Nh,ry=P(()=>{te(),ie(),ne(),Dl=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Ul=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],u=n,l=O.normalizeAxis(t.axis,n.length),p=O.sizeToDimension(n,l),f=O.sizeFromDimension(n,l),h=O.size(a.dims),g=s?O.size(s.dims):0;if(h!==f||s&&g!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${g}`);let y=[];for(let E=0;E<n.length;++E)E<l?y.push(n[E]):y.push(1);let _=xe(f),w=["type","type"],k=[{type:12,data:p},{type:1,data:f},{type:12,data:Math.floor(f/_)},{type:1,data:t.epsilon}];s&&w.push("type");let x=r>1,b=r>2,I=E=>{let A=Ee(e[0].dataType),C=[M("x",e[0].dataType,e[0].dims,_),M("scale",a.dataType,a.dims,_)];s&&C.push(M("bias",s.dataType,s.dims,_)),C.push(H("output",e[0].dataType,u,_)),x&&C.push(H("mean_data_output",1,y)),b&&C.push(H("inv_std_output",1,y));let v=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(v).declareVariables(...C)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${En("f32",_)};
    var mean_square_vector = ${En("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Wt(A,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${yt("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${yt("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Wt(A,_,"x[j + offset]")};
      let f32scale = ${Wt(A,_,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Wt(A,_,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},S=[{dims:u,dataType:e[0].dataType}];return x&&S.push({dims:y,dataType:1}),b&&S.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:w},getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:k}),getShaderSource:I}},Nh=(e,t)=>{Dl(e.inputs),e.compute(Ul(e.inputs,t,e.outputCount))}}),Pl,Dh,iy=P(()=>{ie(),aa(),sa(),Pl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Dh=e=>{Pl(e.inputs);let t=Vt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(na(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let u=e.inputs[0].reshape([1,a,i]),l=e.inputs[1].reshape([1,i,r]),p=[1,a,r],f=[u,l];e.compute(Zr(f,{activation:""},t,p),{inputs:f})}else e.compute(Zr(e.inputs,{activation:""},t))}}}),ql,Ll,Wl,Uh,Ph,ny=P(()=>{te(),ie(),ke(),ne(),ql=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(O.size(u)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,p=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(O.size(l)!==p)throw new Error("zeroPoints input size error.")}},Ll=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),p=e[1].dims[2]/4,f=e[0].dataType,h=xe(t.k),g=xe(p),y=xe(s),_=u.concat([n,s]),w=n>1&&s/y%2===0?2:1,k=O.size(_)/y/w,x=64,b=[],I=[l,n,a/h],S=O.convertShape(e[1].dims).slice();S.splice(-1,1,p/g),b.push(...X(I)),b.push(...X(S)),b.push(...X(e[2].dims)),e.length===4&&b.push(...X(O.convertShape(e[3].dims)));let E=[l,n,s/y];b.push(...X(E));let A=C=>{let v=I.length,D=M("a",e[0].dataType,v,h),q=M("b",12,S.length,g),Y=M("scales",e[2].dataType,e[2].dims.length),F=[D,q,Y],K=e.length===4?M("zero_points",12,e[3].dims.length):void 0;K&&F.push(K);let R=E.length,N=H("output",e[0].dataType,R,y),G=Ee(e[0].dataType),J=(()=>{switch(h){case 1:return`array<${G}, 8>`;case 2:return`mat4x2<${G}>`;case 4:return`mat2x4<${G}>`;default:throw new Error(`${h}-component is not supported.`)}})(),ee=Math.floor(32/t.bits),re=Math.floor(ee/8),ae=()=>{let Z="";for(let V=0;V<re;V++){let Ie=V*t.bits*4,Ae=Ie+t.bits;Z+=`
          // reuse a data (pass ${V})
            var input_offset${V>0?V:""} = ${V===0?D.indicesToOffset(`${D.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${V>0?V:""}: ${J};
            for (var j${V>0?V:""}: u32 = 0; j${V>0?V:""} < ${8/h}; j${V>0?V:""}++) {
              a_data${V>0?V:""}[j${V>0?V:""}] = ${D.getByOffset(`input_offset${V>0?V:""}`)};
              input_offset${V>0?V:""}++;
            }
          `;for(let $e=0;$e<y*w;$e++)Z+=`
            b_value = ${g===1?`b${$e}_data`:`b${$e}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${V*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${Ie}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Ae}u) & b_mask);`}
            b_quantized_values = ${J}(${Array.from({length:4},(Oe,me)=>`${G}(b_value_lower[${me}]), ${G}(b_value_upper[${me}])`).join(", ")});
            b_dequantized_values = ${h===1?`${J}(${Array.from({length:8},(Oe,me)=>`(b_quantized_values[${me}] - ${K?`zero_point${$e}`:"zero_point"}) * scale${$e}`).join(", ")});`:`(b_quantized_values - ${J}(${Array(8).fill(`${K?`zero_point${$e}`:"zero_point"}`).join(",")})) * scale${$e};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor($e/y)}]${y>1?`[${$e%y}]`:""} += ${Array.from({length:8/h},(Oe,me)=>`${h===1?`a_data${V>0?V:""}[${me}] * b_dequantized_values[${me}]`:`dot(a_data${V>0?V:""}[${me}], b_dequantized_values[${me}])`}`).join(" + ")};
          `}return Z},U=()=>{let Z=`
            var col_index = col * ${y};
            ${K?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${G}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let V=0;V<y*w;V++)Z+=`
            let scale${V} = ${Y.getByOffset("col_index * nBlocksPerCol + block")};
            ${K?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${V} = ${G}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return Z},Q=()=>{let Z=`col_index = col * ${y};`;for(let V=0;V<y*w;V++)Z+=`
            let b${V}_data = ${q.getByIndices(`${q.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Z+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${J};
            var b_dequantized_values: ${J};`,Z};return`
        var<workgroup> workgroup_shared: array<${N.type.value}, ${w*x}>;
        ${C.declareVariables(...F,N)}
        ${C.mainStart([x,1,1])}
          let output_indices = ${N.offsetToIndices(`(global_idx / ${x}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${U()}
            for (var word: u32 = 0; word < ${p}; word += ${g}) {
              ${Q()}
              for (var i: u32 = 0; i < ${g}; i++) {
                ${ae()}
                word_offset += ${ee/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${N.type.value} = ${N.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${N.setByIndices(`${N.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${g};${y};${w};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x:k},programUniforms:b}),getShaderSource:A}},Wl=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,u=r.slice(0,i-2),l=O.size(u),p=e[1].dims[2]/4,f=e[0].dataType,h=xe(t.k),g=xe(p),y=u.concat([n,s]),_=128,w=s%8===0?8:s%4===0?4:1,k=_/w,x=Math.floor(32/t.bits),b=k*g*x,I=b/h,S=b/t.blockSize,E=O.size(y)/w,A=[],C=[l,n,a/h],v=O.convertShape(e[1].dims).slice();v.splice(-1,1,p/g),A.push(...X(C)),A.push(...X(v)),A.push(...X(e[2].dims)),e.length===4&&A.push(...X(O.convertShape(e[3].dims)));let D=[l,n,s];A.push(...X(D));let q=Y=>{let F=C.length,K=M("a",e[0].dataType,F,h),R=M("b",12,v.length,g),N=M("scales",e[2].dataType,e[2].dims.length),G=[K,R,N],J=e.length===4?M("zero_points",12,e[3].dims.length):void 0;J&&G.push(J);let ee=D.length,re=H("output",e[0].dataType,ee),ae=Ee(e[0].dataType),U=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${ae}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ae}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ae}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ae}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${K.type.value}, ${I}>;
        var<workgroup> inter_results: array<array<${re.type.value}, ${k}>, ${w}>;
        ${Y.declareVariables(...G,re)}
        ${Y.mainStart([k,w,1])}
          let output_indices = ${re.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${I};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${I}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${K.getByIndices(`${K.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${K.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${J?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ae}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ae}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${N.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${R.getByIndices(`${R.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${g}; i++) {
              let b_value = ${g===1?"b_data":"b_data[i]"};
              ${(()=>{let Q=Math.floor(x/8),Z="";for(let V=0;V<Q;V++){let Ie=V*t.bits*4,Ae=Ie+t.bits;Z+=`
              ${U()}
              {${t.bits===2?`
                let half_word = b_value >> ${V*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${Ie}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Ae}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ae}>(${Array.from({length:4},($e,Oe)=>`${ae}(b_value_lower[${Oe}]), ${ae}(b_value_upper[${Oe}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ae}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},($e,Oe)=>`${`dot(a_data${Oe}, b_dequantized_values[${Oe}])`}`).join(" + ")};
              }
              word_offset += ${8/h};`}return Z})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${re.type.value} = ${re.type.value}(0);
            for (var b = 0u; b < ${k}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${re.setByIndices(`${re.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${g};${k};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:f}],dispatchGroup:{x:E},programUniforms:A}),getShaderSource:q}},Uh=(e,t)=>{ql(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Wl(e.inputs,t)):e.compute(Ll(e.inputs,t))},Ph=e=>he(e)}),Vl,Gl,Hl,Fl,jl,Kl,Xl,Zl,qh,ay=P(()=>{te(),ie(),ne(),Vl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Gl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${j("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${j("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${j("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Hl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${j("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${j("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${j("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${j("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Fl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${j("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${j("uniforms.x_shape",n,t)})) {
                  k = i32(${j("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${j("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},jl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${j("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${j("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${j("uniforms.x_shape",n,t)})) {
                  k -= i32(${j("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${j("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Kl=(e,t,r)=>{switch(r.mode){case 0:return Gl(e,t,r.pads.length);case 1:return Hl(e,t,r.pads.length);case 2:return Fl(e,t,r.pads.length);case 3:return jl(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Xl=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=O.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...X(e[0].dims,r));let u=["rank"],l=p=>{let f=H("output",e[0].dataType,r.length),h=M("x",e[0].dataType,i.length),g=h.type.value,y=Kl(f,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?g:"f32"}),`
            ${p.registerUniforms(_).declareVariables(h,f)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${g}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:a}),getShaderSource:l}},Zl=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let l=0;l<u.length;l++)a[Number(u[l])]=Number(r[l]),a[Number(u[l])+n]=Number(r[l+u.length])}else r.forEach((u,l)=>a[Number(l)]=Number(u));let s=[];return a.forEach(u=>s.push(u)),{mode:t.mode,value:i,pads:s}}else return t},qh=(e,t)=>{Vl(e.inputs);let r=Zl(e.inputs,t);e.compute(Xl(e.inputs,r),{inputs:[0]})}}),rr,sn,on,un,ln,Yl,Ql,dn,pn,Lh,Wh,cn,Vh,Gh,hn,Hh,Fh,jh,Kh,sy=P(()=>{We(),te(),ie(),ne(),rr=e=>{if(ye.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},sn=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),u=t.strides.slice(),l=a?t.dilations.slice():[],p=t.pads.slice();Kr.adjustPoolAttributes(r,n,s,u,l,p);let f=Kr.computePoolOutputShape(r,n,u,l,s,p,t.autoPad),h=Object.assign({},t);a?Object.assign(h,{kernelShape:s,strides:u,pads:p,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:u,pads:p,cacheKey:t.cacheKey});let g=f.slice();return g.push(g.splice(1,1)[0]),[h,i?g:f]},on=(e,t)=>{let r=t.format==="NHWC",i=O.size(e),n=O.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],h=!!(p+f);a.push({type:12,data:u},{type:12,data:l},{type:12,data:p},{type:12,data:f}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let g=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];g=!!(w+k),a.push({type:12,data:y},{type:12,data:_},{type:12,data:w},{type:12,data:k}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,h,g]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=O.computeStrides(t.kernelShape);a.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((p,f)=>p+f);return[a,s,!!l,!1,!1]}},un=(e,t,r,i,n,a,s,u,l,p,f,h)=>{let g=n.format==="NHWC",y=t.type.value,_=H("output",t.type.tensor,i);if(n.kernelShape.length<=2){let w="",k="",x="",b=r-(g?2:1);if(f?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let I=r-(g?3:2);h?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${u});
              var pad = 0;
              ${k}
              ${w}
              ${x}
              ${s}

              output[global_idx] = value;
            }`}else{if(g)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=n.kernelShape.length,k=n.pads.length,x="";return p?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${y}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${j("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${j("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${j("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${j("uniforms.pads","j - 2u",k)};
                  ${x}
              }
              ${s}

              output[global_idx] = value;
            }`}},ln=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Yl=e=>`${ln(e)};${e.countIncludePad}`,Ql=e=>`${ln(e)};${e.storageOrder};${e.dilations}`,dn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),pn=(e,t,r,i)=>{let[n,a]=sn(t,i,r),s=M("x",t.dataType,t.dims.length),u=s.type.value,l="value += x_val;",p="";n.countIncludePad?p+=`value /= ${u}(uniforms.kernelSize);`:p+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[f,h,g,y,_]=on(a,n);f.push(...X(t.dims,a));let w=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(a)/64)},programUniforms:f}),getShaderSource:k=>un(k,s,t.dims.length,a.length,n,l,p,0,h,g,y,_)}},Lh=e=>{let t=e.count_include_pad!==0,r=dn(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Yl(i)}},Wh=(e,t)=>{rr(e.inputs),e.compute(pn("AveragePool",e.inputs[0],!1,t))},cn={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Vh=e=>{let t=e.format;return{format:t,...cn,cacheKey:t}},Gh=(e,t)=>{rr(e.inputs),e.compute(pn("GlobalAveragePool",e.inputs[0],!0,t))},hn=(e,t,r,i)=>{let[n,a]=sn(t,i,r),s=`
      value = max(x_val, value);
    `,u="",l=M("x",t.dataType,t.dims.length),p=["rank"],[f,h,g,y,_]=on(a,n);return f.push(...X(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${g};${y};${_}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(a)/64)},programUniforms:f}),getShaderSource:w=>un(w,l,t.dims.length,a.length,n,s,u,t.dataType===10?-65504:-1e5,h,g,y,_)}},Hh=(e,t)=>{rr(e.inputs),e.compute(hn("MaxPool",e.inputs[0],!1,t))},Fh=e=>{let t=e.storage_order,r=e.dilations,i=dn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:Ql(n)}},jh=e=>{let t=e.format;return{format:t,...cn,cacheKey:t}},Kh=(e,t)=>{rr(e.inputs),e.compute(hn("GlobalMaxPool",e.inputs[0],!0,t))}}),Jl,ed,Xh,Zh,oy=P(()=>{te(),ie(),ke(),ne(),Jl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},ed=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,u=O.size(a),l=i===3||i===2,p=l?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,h=e.length>2?e[2]:void 0,g=h?l?[Math.ceil(O.size(h.dims)/4)]:h.dims:void 0,y=f.length===0||f.length===1&&f[0]===1,_=y===!1&&f.length===1,w=xe(u),k=y&&(!l||w===4),x=k?w:1,b=k&&!l?w:1,I=M("input",l?12:i,p.length,b),S=M("scale",s,f.length),E=h?M("zero_point",l?12:i,g.length):void 0,A=H("output",s,a.length,x),C=[I,S];E&&C.push(E);let v=[p,f];h&&v.push(g);let D=[{type:12,data:u/x},{type:12,data:r},{type:12,data:t.blockSize},...X(...v,a)],q=Y=>{let F=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Y.registerUniforms(F).declareVariables(...C,A)}
      ${Y.mainStart()}
          ${Y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${A.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${S.getByOffset("0")}`:_?`
            let scale_index = ${A.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${S.getByOffset("scale_index")};`:`
            var scale_indices: ${S.type.indices} = output_indices;
            let index = ${S.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${S.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${S.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?y?l?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:_?l?`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${A.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${S.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${A.setByOffset("global_idx",`${A.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:q,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(u/x/64),y:1,z:1},programUniforms:D})}},Xh=(e,t)=>{Jl(e.inputs,t),e.compute(ed(e.inputs,t))},Zh=e=>he({axis:e.axis,blockSize:e.blockSize})}),td,rd,Yh,uy=P(()=>{We(),te(),ne(),td=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},rd=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,u=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...X(a)],l=p=>{let f=H("output",i,a.length),h=f.type.value,g=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${p.registerUniforms(g).declareVariables(f)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:u})}},Yh=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ye.webgpu.validateInputContent&&td(t,r,i),e.compute(rd(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),id,nd,Qh,Jh,ly=P(()=>{te(),ie(),ke(),ne(),id=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},nd=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(O.sizeToDimension(i,i.length-1)/a),u=i[i.length-1],l=O.sizeFromDimension(r,u),p=[{type:12,data:s},{type:12,data:u},{type:12,data:l},...X(e[1].dims,e[2].dims,n)],f=h=>{let g=M("indices",e[1].dataType,e[1].dims.length),y=M("updates",e[2].dataType,e[2].dims.length,a),_=t.reduction!=="none"&&t.reduction!==""?Ip("output",e[0].dataType,n.length):H("output",e[0].dataType,n.length,a);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(g,y,_)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${id(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:f}},Qh=e=>he({reduction:e.reduction}),Jh=(e,t)=>{e.compute(nd(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ad,sd,od,fn,ud,ld,dd,pd,cd,hd,fd,md,mn,gd,yd,_d,bd,wd,ef,tf,dy=P(()=>{te(),ie(),ke(),ne(),ad=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},sd=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},od=(e,t,r,i,n,a)=>{let[s,u,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(f=>a.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(f=>i.push(f)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ad(i,t),t.axes.length>0&&sd(i,t.axes,p).forEach((f,h)=>i[h]=f)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(f=>n.push(Number(f))),n.length!==0&&n.length!==p&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},fn=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,ud=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${fn("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${fn("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ld=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",dd=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},pd=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},cd=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},hd=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${j("uniforms.scales","i",i)};
        var roi_low = ${j("uniforms.roi","i",n)};
        var roi_hi = ${j("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${j("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${j("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,fd=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${j("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${j("uniforms.roi","i",a)};
          var roi_hi = ${j("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${j("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${j("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,md=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${j("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,mn=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",gd=(e,t,r,i,n)=>{let[a,s,u,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${mn(e,l,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${s}];
      var col:${p} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},yd=(e,t,r,i,n,a,s,u,l,p)=>{let f=r.length===2,[h,g]=f?[0,1]:[2,3],y=e.type.value,_=w=>{let k=w===h?"row":"col";return`
      fn ${k}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[w]},
        ${i[w]}, ${r[w]}, ${a[w]}, ${a[w]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${k}: ${y} = originalIdx + ${y}(i);
          if (${k} < 0 || ${k} >= ${r[w]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${l};`:`${k} = max(0, min(${k}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${k})`)};
          data[i + 1] = ${w===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(h)};
    ${_(g)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},_d=(e,t,r,i,n)=>{let[a,s,u,l,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${mn(e,p,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${s}];
      var height:${f} = originalIndices[${u}];
      var width:${f} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},bd=(e,t,r,i,n,a)=>{let s=e.dims,u=dd(a,t.axes,s.length),l=pd(s,i,n,t.axes),p=i.slice();i.length===0&&(p=s.map((b,I)=>b===0?1:l[I]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=cd(s,p,t)));let f=H("output",e.dataType,l.length),h=M("input",e.dataType,s.length),g=O.size(l),y=s.length===l.length&&s.every((b,I)=>b===l[I]),_=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,k=h.type.value,x=b=>`
      ${y?"":`
      ${ud(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${md(h,s)};
              ${ld(t.nearestMode,r,k)};
              ${fd(h,f,s,l,p.length,u.length,_)};
              `;case"linear":return`
              ${hd(f,s,l,p.length,u.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${gd(h,f,s,_,w)}`;if(s.length===3||s.length===5)return`${_d(h,f,s,_,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${yd(h,f,s,l,p,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",u.length).declareVariables(h,f)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${n.length>0?n:""}|${u.length>0?u:""}|${y}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},{type:1,data:p},{type:1,data:u},...X(s,l)]})}},wd=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},ef=(e,t)=>{let r=[],i=[],n=[],a=wd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");od(e.inputs,t,a,r,i,n),e.compute(bd(e.inputs[0],t,a,r,i,n),{inputs:[0]})},tf=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,u=e.keepAspectRatioPolicy,l=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:u,mode:l,nearestMode:p})}}),$d,vd,rf,py=P(()=>{te(),ie(),ne(),$d=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},vd=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=O.size(a),u=a,l=s,p=a.slice(-1)[0],f=i?a.slice(0,-1).concat(1):[],h=!n&&e.length>3,g=e.length>4,y=i&&r>1,_=i&&r>2,w=r>3,k=64,x=xe(p),b=[{type:12,data:l},{type:12,data:x},{type:12,data:p},{type:1,data:t.epsilon}],I=E=>{let A=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[M("x",e[0].dataType,e[0].dims,x),M("skip",e[1].dataType,e[1].dims,x),M("gamma",e[2].dataType,e[2].dims,x)];h&&C.push(M("beta",e[3].dataType,e[3].dims,x)),g&&C.push(M("bias",e[4].dataType,e[4].dims,x)),C.push(H("output",e[0].dataType,u,x)),y&&C.push(H("mean_output",1,f)),_&&C.push(H("inv_std_output",1,f)),w&&C.push(H("input_skip_bias_sum",e[0].dataType,u,x));let v=Ee(e[0].dataType),D=Ee(1,x);return`

      ${E.registerUniforms(A).declareVariables(...C)}
      var<workgroup> sum_shared : array<${D}, ${k}>;
      var<workgroup> sum_squared_shared : array<${D}, ${k}>;

      ${E.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${g?"bias[offset1d + i]":v+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Wt(v,x,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${yt("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${yt("square_sum",x)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${v}(mean)`}) *
            ${v}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},S=[{dims:u,dataType:e[0].dataType}];return r>1&&S.push({dims:f,dataType:1}),r>2&&S.push({dims:f,dataType:1}),r>3&&S.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${y};${_};${w}`,inputDependencies:e.map((E,A)=>"type")},getShaderSource:I,getRunData:()=>({outputs:S,dispatchGroup:{x:Math.ceil(l/p)},programUniforms:b})}},rf=(e,t)=>{$d(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(vd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),xd,ir,Sd,gn,kd,Td,nf,af,cy=P(()=>{te(),ie(),ke(),ne(),xd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},ir=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Sd=(e,t)=>{if(e.length>1){let r=ir(e,1),i=ir(e,2),n=ir(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:n})}else return t},gn=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},kd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${j("uniforms.input_shape","i",r.length)};
            let steps_i = ${j("uniforms.steps","i",r.length)};
            let signs_i = ${j("uniforms.signs","i",r.length)};
            let starts_i = ${j("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Td=(e,t)=>{let r=e[0].dims,i=O.size(r),n=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=ir(e,4);a.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map((x,b)=>gn(x,b,r,n,a)),u=t.ends.map((x,b)=>gn(x,b,r,n,a));if(n.length!==s.length||n.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let x=0;x<r.length;++x)n.includes(x)||(s.splice(x,0,0),u.splice(x,0,r[x]),a.splice(x,0,1));let l=a.map(x=>Math.sign(x));a.forEach((x,b,I)=>{if(x<0){let S=(u[b]-s[b])/x,E=s[b],A=E+S*a[b];s[b]=A,u[b]=E,I[b]=-x}});let p=r.slice(0);n.forEach((x,b)=>{p[x]=Math.ceil((u[x]-s[x])/a[x])});let f={dims:p,dataType:e[0].dataType},h=H("output",e[0].dataType,p.length),g=M("input",e[0].dataType,e[0].dims.length),y=O.size(p),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:a.length}],w=[{type:12,data:y},{type:12,data:s},{type:6,data:l},{type:12,data:a},...X(e[0].dims,p)],k=x=>`
      ${x.registerUniforms(_).declareVariables(g,h)}
        ${kd(g,h,r)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",g.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:w})}},nf=(e,t)=>{xd(e.inputs,t);let r=Sd(e.inputs,t);e.compute(Td(e.inputs,r),{inputs:[0]})},af=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),Id,Ed,sf,of,hy=P(()=>{te(),ie(),ke(),_t(),ne(),Id=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ed=(e,t)=>{let r=e.inputs[0],i=r.dims,n=O.size(i),a=i.length,s=O.normalizeAxis(t.axis,a),u=s<i.length-1,l,p=[];u?(p=Array.from({length:a},(C,v)=>v),p[s]=a-1,p[a-1]=s,l=e.compute(Pe(r,p),{inputs:[r],outputs:[-1]})[0]):l=r;let f=l.dims,h=f[a-1],g=n/h,y=xe(h),_=h/y,w=64;g===1&&(w=256);let k=(C,v)=>v===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:v===2?`max(${C}.x, ${C}.y)`:v===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,x=M("x",l.dataType,l.dims,y),b=H("result",l.dataType,l.dims,y),I=x.type.value,S=Ee(l.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,E=C=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables(x,b)}
      ${C.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${S}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${I}(${k("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${I}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${I}(${yt("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,A=e.compute({name:"Softmax",shaderCache:{hint:`${y};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:l.dataType}],dispatchGroup:{x:g},programUniforms:[{type:6,data:_}]}),getShaderSource:E},{inputs:[l],outputs:[u?-1:0]})[0];u&&e.compute(Pe(A,p),{inputs:[A]})},sf=(e,t)=>{Id(e.inputs),Ed(e,t)},of=e=>he({axis:e.axis})}),yn,zd,Cd,Ad,uf,fy=P(()=>{te(),ie(),ne(),yn=e=>Array.from(e.getBigInt64Array(),Number),zd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(yn(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Cd=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Ad=(e,t)=>{let r=e[0].dims,i=t??yn(e[1]),n=Cd(r,i),a=O.size(n),s=e[0].dataType,u=M("input",s,r.length),l=H("output",s,n.length),p=f=>`
      const inputShape = ${u.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(u,l)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...X(e[0].dims,n)]}),getShaderSource:p}},uf=e=>{zd(e.inputs),e.compute(Ad(e.inputs),{inputs:[0]})}}),Od,Rd,lf,my=P(()=>{te(),ie(),ne(),Od=(e,t,r,i,n)=>{let a=H("output_data",n,r.length,4),s=M("a_data",t[1].dataType,t[1].dims.length,4),u=M("b_data",t[2].dataType,t[2].dims.length,4),l=M("c_data",t[0].dataType,t[0].dims.length,4),p,f=(h,g,y)=>`select(${g}, ${h}, ${y})`;if(!i)p=a.setByOffset("global_idx",f(s.getByOffset("global_idx"),u.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(g,y,_="")=>{let w=`a_data[index_a${y}][component_a${y}]`,k=`b_data[index_b${y}][component_b${y}]`,x=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${a.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${s.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_b${y} = ${u.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let offset_c${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,a)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${g}[${y}] = ${_}(${f(w,k,x)});
          `};n===9?p=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,s,u,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},Rd=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(O.areEqual(t,r)&&O.areEqual(r,i)),s=t,u=O.size(t);if(a){let p=Vt.calcShape(Vt.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");s=p,u=O.size(s)}let l=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>Od(p,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:l},...X(i,t,r,s)]})}},lf=e=>{e.compute(Rd(e.inputs))}}),df,gy=P(()=>{C0(),ea(),A0(),O0(),R0(),B0(),M0(),q0(),W0(),V0(),G0(),H0(),F0(),j0(),K0(),X0(),Z0(),Y0(),Q0(),J0(),ey(),ty(),ry(),iy(),ny(),Eh(),ay(),sy(),oy(),uy(),ly(),Jn(),dy(),Rh(),py(),cy(),hy(),Ah(),fy(),_t(),ta(),my(),df=new Map([["Abs",[rc]],["Acos",[ic]],["Acosh",[nc]],["Add",[Uc]],["ArgMax",[Qp,Cn]],["ArgMin",[Yp,Cn]],["Asin",[ac]],["Asinh",[sc]],["Atan",[oc]],["Atanh",[uc]],["Attention",[Jp]],["AveragePool",[Wh,Lh]],["BatchNormalization",[ec]],["BiasAdd",[tc]],["BiasSplitGelu",[Dc]],["Cast",[dc,lc]],["Ceil",[cc]],["Clip",[pc]],["Concat",[Kc,Xc]],["Conv",[Nn,Mn]],["ConvTranspose",[ah,nh]],["Cos",[hc]],["Cosh",[fc]],["CumSum",[sh,oh]],["DepthToSpace",[uh,lh]],["DequantizeLinear",[Xh,Zh]],["Div",[Pc]],["Einsum",[dh,ph]],["Elu",[mc,dr]],["Equal",[qc]],["Erf",[gc]],["Exp",[yc]],["Expand",[ch]],["FastGelu",[hh]],["Floor",[_c]],["FusedConv",[Nn,Mn]],["Gather",[mh,fh]],["GatherElements",[$h,wh]],["GatherBlockQuantized",[_h,bh]],["GatherND",[gh,yh]],["Gelu",[bc]],["Gemm",[xh,vh]],["GlobalAveragePool",[Gh,Vh]],["GlobalMaxPool",[Kh,jh]],["Greater",[Gc]],["GreaterOrEqual",[Fc]],["GridSample",[Sh,kh]],["GroupQueryAttention",[Bh]],["HardSigmoid",[Ic,Tc]],["InstanceNormalization",[Mh]],["LayerNormalization",[Nh]],["LeakyRelu",[wc,dr]],["Less",[Hc]],["LessOrEqual",[jc]],["Log",[Mc]],["MatMul",[Dh]],["MatMulNBits",[Uh,Ph]],["MaxPool",[Hh,Fh]],["Mul",[Lc]],["MultiHeadAttention",[Ih,Th]],["Neg",[vc]],["Not",[$c]],["Pad",[qh]],["Pow",[Wc]],["QuickGelu",[Nc,dr]],["Range",[Yh]],["Reciprocal",[xc]],["ReduceMin",[Fp]],["ReduceMean",[Lp]],["ReduceMax",[Hp]],["ReduceSum",[Kp]],["ReduceProd",[jp]],["ReduceL1",[Wp]],["ReduceL2",[Vp]],["ReduceLogSum",[Zp]],["ReduceLogSumExp",[Gp]],["ReduceSumSquare",[Xp]],["Relu",[Sc]],["Resize",[ef,tf]],["RotaryEmbedding",[Oh]],["ScatterND",[Jh,Qh]],["Sigmoid",[kc]],["Sin",[Ec]],["Sinh",[zc]],["Slice",[nf,af]],["SkipLayerNormalization",[rf]],["Split",[zh,Ch]],["Sqrt",[Cc]],["Softmax",[sf,of]],["Sub",[Vc]],["Tan",[Ac]],["Tanh",[Oc]],["ThresholdedRelu",[Bc,dr]],["Tile",[uf]],["Transpose",[zp,Cp]],["Where",[lf]]])}),pf,yy=P(()=>{We(),ut(),ne(),pf=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){it(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let p of t)u.push({binding:u.length,resource:{buffer:p.buffer}});for(let p of r)u.push({binding:u.length,resource:{buffer:p.buffer}});n&&u.push({binding:u.length,resource:n});let l=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}s.setPipeline(e.computePipeline),s.setBindGroup(0,l),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ye(e.programInfo.name)}dispose(){}build(e,t){it(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(p=>{r.features.has(p.feature)&&i.push(`enable ${p.extension};`)});let n=Ep(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,u=r.createShaderModule({code:s,label:e.name});de("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let l=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Ye(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),cf={};Ht(cf,{WebGpuBackend:()=>hf});var Bd,Md,Nd,hf,_y=P(()=>{We(),te(),ut(),xp(),E0(),gy(),yy(),Bd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Md=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Bd(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},Nd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},hf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=u=>t.features.has(u)&&r.push(u)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i);let a=t,s=t.info??(typeof a.requestAdapterInfo=="function"?await a.requestAdapterInfo():void 0);this.adapterInfo=new Nd(s),this.gpuDataManager=Tp(this),this.programManager=new pf(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Xn(e.logLevel,!!e.debug),this.device.onuncapturederror=u=>{u.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${u.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;it(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let n=r[i],a=n.kernelId,s=this.kernels.get(a),u=s.kernelType,l=s.kernelName,p=n.programName,f=n.inputTensorViews,h=n.outputTensorViews,g=t[i*2],y=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=g);let _=Number(g-this.queryTimeBase),w=Number(y-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger(w))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:f.map(k=>({dims:k.dims,dataType:ot(k.dataType)})),outputsMetadata:h.map(k=>({dims:k.dims,dataType:ot(k.dataType)})),kernelId:a,kernelType:u,kernelName:l,programName:p,startTime:_,endTime:w});else{let k="";f.forEach((b,I)=>{k+=`input[${I}]: [${b.dims}] | ${ot(b.dataType)}, `});let x="";h.forEach((b,I)=>{x+=`output[${I}]: [${b.dims}] | ${ot(b.dataType)}, `}),console.log(`[profiling] kernel "${a}|${u}|${l}|${p}" ${k}${x}start time: ${_} ns, execution time: ${w-_} ns`)}Gr("GPU",`${p}::${g}::${y}`)}e.unmap(),this.pendingQueries.delete(e)}),Ye()}run(e,t,r,i,n,a){it(e.name);let s=[];for(let b=0;b<t.length;++b){let I=t[b].data;if(I===0)continue;let S=this.gpuDataManager.get(I);if(!S)throw new Error(`no GPU data for input: ${I}`);s.push(S)}let{outputs:u,dispatchGroup:l,programUniforms:p}=e.getRunData(t),f=r.length===0?u.map((b,I)=>I):r;if(f.length!==u.length)throw new Error(`Output size ${f.length} must be equal to ${u.length}.`);let h=[],g=[];for(let b=0;b<u.length;++b){if(!Number.isInteger(f[b])||f[b]<-3||f[b]>=a)throw new Error(`Invalid output index: ${f[b]}`);if(f[b]===-3)continue;let I=f[b]===-1,S=f[b]===-2,E=I||S?n(u[b].dataType,u[b].dims):i(f[b],u[b].dataType,u[b].dims);if(h.push(E),E.data===0)continue;let A=this.gpuDataManager.get(E.data);if(!A)throw new Error(`no GPU data for output: ${E.data}`);if(I&&this.temporaryData.push(A),S){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(A)}g.push(A)}if(s.length!==t.length||g.length!==h.length){if(g.length===0)return Ye(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(p){let b=0,I=[];p.forEach(C=>{let v=typeof C.data=="number"?[C.data]:C.data;if(v.length===0)return;let D=C.type===10?2:4,q,Y;C.type===10?(Y=v.length>4?16:v.length>2?8:v.length*D,q=v.length>4?16:D*v.length):(Y=v.length<=2?v.length*D:16,q=16),b=Math.ceil(b/Y)*Y,I.push(b);let F=C.type===10?8:4;b+=v.length>4?Math.ceil(v.length/F)*q:v.length*D});let S=16;b=Math.ceil(b/S)*S;let E=new ArrayBuffer(b);p.forEach((C,v)=>{let D=I[v],q=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(E,D,q.length).set(q);else if(C.type===12)new Uint32Array(E,D,q.length).set(q);else if(C.type===10)new Uint16Array(E,D,q.length).set(q);else if(C.type===1)new Float32Array(E,D,q.length).set(q);else throw new Error(`Unsupported uniform type: ${ot(C.type)}`)});let A=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(A.buffer,0,E,0,b),this.gpuDataManager.release(A.id),y={offset:0,size:b,buffer:A.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),w=_[1]===1&&_[2]===1,k=Md(e,t,w),x=this.programManager.getArtifact(k);if(x||(x=this.programManager.build(e,_),this.programManager.setArtifact(k,x),de("info",()=>`[artifact] key: ${k}, programName: ${e.name}`)),p&&x.uniformVariablesInfo){if(p.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${p.length} in program "${x.programInfo.name}".`);for(let b=0;b<p.length;b++){let I=p[b],S=I.type,E=typeof I.data=="number"?1:I.data.length,[A,C]=x.uniformVariablesInfo[b];if(S!==A||E!==C)throw new Error(`Uniform variable ${b} mismatch: expect type ${A} with size ${C}, got type ${S} with size ${E} in program "${x.programInfo.name}".`)}}if(de("info",()=>`[ProgramManager] run "${e.name}" (key=${k}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(x,s,g,_,y),Ye(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=df.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),de("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),s(t,u[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${p}`)),1}finally{l&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${n}] ${a}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await In(this,e,t);return Zn(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){de("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){de("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){de("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),ff={};Ht(ff,{init:()=>mf});var Ur,Dd,mf,by=P(()=>{te(),ut(),ie(),I0(),Ur=class gf{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new gf(this.module,this.dataType,this.data,t)}},Dd=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let u=[];for(let l=0;l<s;l++){let p=Number(e.getValue(i*n++,a)),f=Number(e.getValue(i*n++,"*")),h=Number(e.getValue(i*n++,a)),g=[];for(let y=0;y<h;y++)g.push(Number(e.getValue(i*n++,a)));u.push(new Ur(e,p,f,g))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],n=(s,u,l)=>new Ur(this.module,u,this.output(s,l),l),a=(s,u)=>{let l=zt(s,u);if(!l)throw new Error(`Unsupported data type: ${s}`);let p=l>0?this.backend.gpuDataManager.create(l).id:0;return new Ur(this.module,s,p,u)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},mf=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(_y(),hr(cf)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,u=>s.alloc(Number(u)),u=>s.free(u),(u,l,p,f=!1)=>{if(f)de("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(l)}, size=${Number(p)}`),s.memcpy(Number(u),Number(l));else{de("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(l)}, size=${Number(p)}`);let h=t.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(p));s.upload(Number(l),h)}},async(u,l,p)=>{de("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${l}, size=${p}`),await s.download(Number(u),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+p)>>>0))},(u,l,p)=>s.createKernel(u,Number(l),p,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),u=>s.releaseKernel(u),(u,l,p,f)=>{de("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${p}, kernel=${u}, contextDataOffset=${l}`);let h=new Dd(t,s,Number(l));return s.computeKernel(Number(u),h,f)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new kp(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,u,l,p,f)=>a.ensureTensor(s,u,l,p,f),(s,u)=>{a.uploadTensor(s,u)},async(s,u)=>a.downloadTensor(s,u),(s,u)=>a.registerMLContext(s,u),!!r.trace])}}}),Ud,oa,ua,mt,Pd,_n,Qr,la,da,bn,pa,ca,ha,yf=P(()=>{We(),S0(),k0(),te(),Mt(),Hn(),bp(),Ud=(e,t)=>{_e()._OrtInit(e,t)!==0&&fe("Can't initialize onnxruntime.")},oa=async e=>{Ud(e.wasm.numThreads,jr(e.logLevel))},ua=async(e,t)=>{_e().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(by(),hr(ff)).init;t==="webgpu"&&await i("webgpu",_e(),e,r),t==="webnn"&&await i("webnn",_e(),e)}},mt=new Map,Pd=e=>{let t=_e(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&fe("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},_n=(e,t)=>{let r=_e(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&fe("Can't get session input/output metadata.");let u=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let l=r.HEAP32[n/4];if(l===0)return[u,0];let p=r.HEAPU32[n/4+1],f=[];for(let h=0;h<p;h++){let g=Number(r.getValue(n+8+h*a,"*"));f.push(g!==0?r.UTF8ToString(g):Number(r.getValue(n+8+(h+p)*a,"*")))}return[u,l,f]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},Qr=e=>{let t=_e(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},la=async(e,t)=>{let r,i,n=_e();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Qr(e);let a=0,s=0,u=0,l=[],p=[],f=[];try{if([s,l]=await _p(t),t?.externalData&&n.mountExternalData){let S=[];for(let E of t.externalData){let A=typeof E=="string"?E:E.path;S.push(Kn(typeof E=="string"?E:E.data).then(C=>{n.mountExternalData(A,C)}))}await Promise.all(S)}for(let S of t?.executionProviders??[])if((typeof S=="string"?S:S.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof S!="string"){let E=S,A=E?.context,C=E?.gpuDevice,v=E?.deviceType,D=E?.powerPreference;A?n.currentContext=A:C?n.currentContext=await n.webnnCreateMLContext(C):n.currentContext=await n.webnnCreateMLContext({deviceType:v,powerPreference:D})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),n.webgpuOnCreateSession?.(a),a===0&&fe("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[h,g]=Pd(a),y=!!t?.enableGraphCapture,_=[],w=[],k=[],x=[],b=[];for(let S=0;S<h;S++){let[E,A,C]=_n(a,S);E===0&&fe("Can't get an input name."),p.push(E);let v=n.UTF8ToString(E);_.push(v),k.push(A===0?{name:v,isTensor:!1}:{name:v,isTensor:!0,type:ot(A),shape:C})}for(let S=0;S<g;S++){let[E,A,C]=_n(a,S+h);E===0&&fe("Can't get an output name."),f.push(E);let v=n.UTF8ToString(E);w.push(v),x.push(A===0?{name:v,isTensor:!1}:{name:v,isTensor:!0,type:ot(A),shape:C});{if(y&&t?.preferredOutputLocation===void 0){b.push("gpu-buffer");continue}let D=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[v]??"cpu",q=n.webnnIsGraphOutput;if(D==="cpu"&&q&&q(a,v)){b.push("ml-tensor-cpu-output");continue}if(D!=="cpu"&&D!=="cpu-pinned"&&D!=="gpu-buffer"&&D!=="ml-tensor")throw new Error(`Not supported preferred output location: ${D}.`);if(y&&D!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${D}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);b.push(D)}}let I=null;return b.some(S=>S==="gpu-buffer"||S==="ml-tensor"||S==="ml-tensor-cpu-output")&&(u=n._OrtCreateBinding(a),u===0&&fe("Can't create IO binding."),I={handle:u,outputPreferredLocations:b,outputPreferredLocationsEncoded:b.map(S=>S==="ml-tensor-cpu-output"?"ml-tensor":S).map(S=>kn(S))}),mt.set(a,[a,p,f,I,y,!1]),[a,_,w,k,x]}catch(h){throw p.forEach(g=>n._OrtFree(g)),f.forEach(g=>n._OrtFree(g)),u!==0&&n._OrtReleaseBinding(u)!==0&&fe("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&fe("Can't release session."),h}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&fe("Can't release session options."),l.forEach(h=>n._free(h)),n.unmountExternalData?.()}},da=e=>{let t=_e(),r=mt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,u]=r;s&&(u&&t._OrtClearBoundOutputs(s.handle)!==0&&fe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&fe("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),n.forEach(l=>t._OrtFree(l)),a.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(i)!==0&&fe("Can't release session."),mt.delete(e)},bn=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let u=_e(),l=u.PTR_SIZE,p=e[0],f=e[1],h=e[3],g=h,y,_;if(p==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let x=e[2].gpuBuffer;_=zt(Et(p),f);{let b=u.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=b(i,a,x,_)}}else if(h==="ml-tensor"){let x=e[2].mlTensor;_=zt(Et(p),f);let b=u.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=b(i,x,Et(p),f)}else{let x=e[2];if(Array.isArray(x)){_=l*x.length,y=u._malloc(_),r.push(y);for(let b=0;b<x.length;b++){if(typeof x[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);u.setValue(y+b*l,Xe(x[b],r),"*")}}else{let b=u.webnnIsGraphInput,I=u.webnnIsGraphOutput;if(p!=="string"&&b&&I){let S=u.UTF8ToString(n);if(b(i,S)||I(i,S)){let E=Et(p);_=zt(E,f),g="ml-tensor";let A=u.webnnCreateTemporaryTensor,C=u.webnnUploadTensor;if(!A||!C)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let v=await A(i,E,f);C(v,new Uint8Array(x.buffer,x.byteOffset,x.byteLength)),y=v}else _=x.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),y)}else _=x.byteLength,y=u._malloc(_),r.push(y),u.HEAPU8.set(new Uint8Array(x.buffer,x.byteOffset,_),y)}}let w=u.stackSave(),k=u.stackAlloc(4*f.length);try{f.forEach((b,I)=>u.setValue(k+I*l,b,l===4?"i32":"i64"));let x=u._OrtCreateTensor(Et(p),y,_,k,f.length,kn(g));x===0&&fe(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(x)}finally{u.stackRestore(w)}},pa=async(e,t,r,i,n,a)=>{let s=_e(),u=s.PTR_SIZE,l=mt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=l[0],f=l[1],h=l[2],g=l[3],y=l[4],_=l[5],w=t.length,k=i.length,x=0,b=[],I=[],S=[],E=[],A=[],C=s.stackSave(),v=s.stackAlloc(w*u),D=s.stackAlloc(w*u),q=s.stackAlloc(k*u),Y=s.stackAlloc(k*u);try{[x,b]=yp(a),Ct("wasm prepareInputOutputTensor");for(let N=0;N<w;N++)await bn(r[N],I,E,e,f[t[N]],t[N],y);for(let N=0;N<k;N++)await bn(n[N],S,E,e,h[i[N]],w+i[N],y);At("wasm prepareInputOutputTensor");for(let N=0;N<w;N++)s.setValue(v+N*u,I[N],"*"),s.setValue(D+N*u,f[t[N]],"*");for(let N=0;N<k;N++)s.setValue(q+N*u,S[N],"*"),s.setValue(Y+N*u,h[i[N]],"*");if(g&&!_){let{handle:N,outputPreferredLocations:G,outputPreferredLocationsEncoded:J}=g;if(f.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${f.length}).`);Ct("wasm bindInputsOutputs");for(let ee=0;ee<w;ee++){let re=t[ee];await s._OrtBindInput(N,f[re],I[ee])!==0&&fe(`Can't bind input[${ee}] for session=${e}.`)}for(let ee=0;ee<k;ee++){let re=i[ee];n[ee]?.[3]?(A.push(S[ee]),s._OrtBindOutput(N,h[re],S[ee],0)!==0&&fe(`Can't bind pre-allocated output[${ee}] for session=${e}.`)):s._OrtBindOutput(N,h[re],0,J[re])!==0&&fe(`Can't bind output[${ee}] to ${G[ee]} for session=${e}.`)}At("wasm bindInputsOutputs"),mt.set(e,[p,f,h,g,y,!0])}s.jsepOnRunStart?.(p),s.webnnOnRunStart?.(p);let F;g?F=await s._OrtRunWithBinding(p,g.handle,k,q,x):F=await s._OrtRun(p,D,v,w,Y,k,q,x),F!==0&&fe("failed to call OrtRun().");let K=[],R=[];Ct("wasm ProcessOutputTensor");for(let N=0;N<k;N++){let G=Number(s.getValue(q+N*u,"*"));if(G===S[N]||A.includes(S[N])){K.push(n[N]),G!==S[N]&&s._OrtReleaseTensor(G)!==0&&fe("Can't release tensor.");continue}let J=s.stackSave(),ee=s.stackAlloc(4*u),re=!1,ae,U=0;try{s._OrtGetTensorData(G,ee,ee+u,ee+2*u,ee+3*u)!==0&&fe(`Can't access output tensor data on index ${N}.`);let Q=u===4?"i32":"i64",Z=Number(s.getValue(ee,Q));U=s.getValue(ee+u,"*");let V=s.getValue(ee+u*2,"*"),Ie=Number(s.getValue(ee+u*3,Q)),Ae=[];for(let me=0;me<Ie;me++)Ae.push(Number(s.getValue(V+me*u,Q)));s._OrtFree(V)!==0&&fe("Can't free memory for tensor dims.");let $e=Ae.reduce((me,we)=>me*we,1);ae=ot(Z);let Oe=g?.outputPreferredLocations[i[N]];if(ae==="string"){if(Oe==="gpu-buffer"||Oe==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let me=[];for(let we=0;we<$e;we++){let Be=s.getValue(U+we*u,"*"),mr=s.getValue(U+(we+1)*u,"*"),Qe=we===$e-1?void 0:mr-Be;me.push(s.UTF8ToString(Be,Qe))}K.push([ae,Ae,me,"cpu"])}else if(Oe==="gpu-buffer"&&$e>0){let me=s.jsepGetBuffer;if(!me)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let we=me(U),Be=zt(Z,$e);if(Be===void 0||!Fn(ae))throw new Error(`Unsupported data type: ${ae}`);re=!0,K.push([ae,Ae,{gpuBuffer:we,download:s.jsepCreateDownloader(we,Be,ae),dispose:()=>{s._OrtReleaseTensor(G)!==0&&fe("Can't release tensor.")}},"gpu-buffer"])}else if(Oe==="ml-tensor"&&$e>0){let me=s.webnnEnsureTensor,we=s.webnnIsGraphInputOutputTypeSupported;if(!me||!we)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(zt(Z,$e)===void 0||!jn(ae))throw new Error(`Unsupported data type: ${ae}`);if(!we(e,ae,!1))throw new Error(`preferredLocation "ml-tensor" for ${ae} output is not supported by current WebNN Context.`);let Be=await me(e,U,Z,Ae,!1);re=!0,K.push([ae,Ae,{mlTensor:Be,download:s.webnnCreateMLTensorDownloader(U,ae),dispose:()=>{s.webnnReleaseTensorId(U),s._OrtReleaseTensor(G)}},"ml-tensor"])}else if(Oe==="ml-tensor-cpu-output"&&$e>0){let me=s.webnnCreateMLTensorDownloader(U,ae)(),we=K.length;re=!0,R.push((async()=>{let Be=[we,await me];return s.webnnReleaseTensorId(U),s._OrtReleaseTensor(G),Be})()),K.push([ae,Ae,[],"cpu"])}else{let me=Jr(ae),we=new me($e);new Uint8Array(we.buffer,we.byteOffset,we.byteLength).set(s.HEAPU8.subarray(U,U+we.byteLength)),K.push([ae,Ae,we,"cpu"])}}finally{s.stackRestore(J),ae==="string"&&U&&s._free(U),re||s._OrtReleaseTensor(G)}}g&&!y&&(s._OrtClearBoundOutputs(g.handle)!==0&&fe("Can't clear bound outputs."),mt.set(e,[p,f,h,g,y,!1]));for(let[N,G]of await Promise.all(R))K[N][2]=G;return At("wasm ProcessOutputTensor"),K}finally{s.webnnOnRunEnd?.(p),s.stackRestore(C),I.forEach(F=>s._OrtReleaseTensor(F)),S.forEach(F=>s._OrtReleaseTensor(F)),E.forEach(F=>s._free(F)),x!==0&&s._OrtReleaseRunOptions(x),b.forEach(F=>s._free(F))}},ca=e=>{let t=_e(),r=mt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&fe("Can't get an profile file name."),t._OrtFree(n)},ha=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),gt,Le,Pt,nr,ar,Pr,wn,qr,kt,Tt,qd,_f,bf,wf,$f,vf,xf,Sf,kf=P(()=>{We(),yf(),Mt(),Vn(),gt=()=>!!ye.wasm.proxy&&typeof document<"u",Pt=!1,nr=!1,ar=!1,qr=new Map,kt=(e,t)=>{let r=qr.get(e);r?r.push(t):qr.set(e,[t])},Tt=()=>{if(Pt||!nr||ar||!Le)throw new Error("worker not ready")},qd=e=>{switch(e.data.type){case"init-wasm":Pt=!1,e.data.err?(ar=!0,wn[1](e.data.err)):(nr=!0,wn[0]()),Pr&&(URL.revokeObjectURL(Pr),Pr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=qr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},_f=async()=>{if(!nr){if(Pt)throw new Error("multiple calls to 'initWasm()' detected.");if(ar)throw new Error("previous call to 'initWasm()' failed.");if(Pt=!0,gt())return new Promise((e,t)=>{Le?.terminate(),mp().then(([r,i])=>{try{Le=i,Le.onerror=a=>t(a),Le.onmessage=qd,wn=[e,t];let n={type:"init-wasm",in:ye};!n.in.wasm.wasmPaths&&(r||Sn)&&(n.in.wasm.wasmPaths={wasm:new URL(""+new URL("ort-wasm-simd-threaded.jsep-DC5y_g6C.wasm",import.meta.url).href,import.meta.url).href}),Le.postMessage(n),Pr=r}catch(n){t(n)}},t)});try{await Gn(ye.wasm),await oa(ye),nr=!0}catch(e){throw ar=!0,e}finally{Pt=!1}}},bf=async e=>{if(gt())return Tt(),new Promise((t,r)=>{kt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ye}};Le.postMessage(i)});await ua(ye,e)},wf=async e=>gt()?(Tt(),new Promise((t,r)=>{kt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Le.postMessage(i,[e.buffer])})):Qr(e),$f=async(e,t)=>{if(gt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Tt(),new Promise((r,i)=>{kt("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Le.postMessage(n,a)})}else return la(e,t)},vf=async e=>{if(gt())return Tt(),new Promise((t,r)=>{kt("release",[t,r]);let i={type:"release",in:e};Le.postMessage(i)});da(e)},xf=async(e,t,r,i,n,a)=>{if(gt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Tt(),new Promise((s,u)=>{kt("run",[s,u]);let l=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:a}};Le.postMessage(p,ha(l))})}else return pa(e,t,r,i,n,a)},Sf=async e=>{if(gt())return Tt(),new Promise((t,r)=>{kt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Le.postMessage(i)});ca(e)}}),$n,Ld,Tf,wy=P(()=>{We(),kf(),te(),Wn(),bp(),$n=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Ld=e=>{switch(e[3]){case"cpu":return new Ze(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Fn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return Ze.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!jn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return Ze.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Tf=class{async fetchModelAndCopyToWasmMemory(e){return wf(await Kn(e))}async loadModel(e,t){it();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await $f(r,t),Ye()}async dispose(){return vf(this.sessionId)}async run(e,t,r){it();let i=[],n=[];Object.entries(e).forEach(h=>{let g=h[0],y=h[1],_=this.inputNames.indexOf(g);if(_===-1)throw new Error(`invalid input '${g}'`);i.push(y),n.push(_)});let a=[],s=[];Object.entries(t).forEach(h=>{let g=h[0],y=h[1],_=this.outputNames.indexOf(g);if(_===-1)throw new Error(`invalid output '${g}'`);a.push(y),s.push(_)});let u=i.map((h,g)=>$n(h,()=>`input "${this.inputNames[n[g]]}"`)),l=a.map((h,g)=>h?$n(h,()=>`output "${this.outputNames[s[g]]}"`):null),p=await xf(this.sessionId,n,u,s,l,r),f={};for(let h=0;h<p.length;h++)f[this.outputNames[s[h]]]=a[h]??Ld(p[h]);return Ye(),f}startProfiling(){}endProfiling(){Sf(this.sessionId)}}}),If={};Ht(If,{OnnxruntimeWebAssemblyBackend:()=>Pn,initializeFlags:()=>Un,wasmBackend:()=>Ef});var Un,Pn,Ef,$y=P(()=>{We(),kf(),wy(),Un=()=>{(typeof ye.wasm.initTimeout!="number"||ye.wasm.initTimeout<0)&&(ye.wasm.initTimeout=0);let e=ye.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ye.wasm.simd=!1),typeof ye.wasm.proxy!="boolean"&&(ye.wasm.proxy=!1),typeof ye.wasm.trace!="boolean"&&(ye.wasm.trace=!1),typeof ye.wasm.numThreads!="number"||!Number.isInteger(ye.wasm.numThreads)||ye.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ye.wasm.numThreads=1;else{let t=typeof navigator>"u"?s0("node:os").cpus().length:navigator.hardwareConcurrency;ye.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Pn=class{async init(e){Un(),await _f(),await bf(e)}async createInferenceSessionHandler(e,t){let r=new Tf;return await r.loadModel(e,t),r}},Ef=new Pn});We();We();We();var vy="1.27.0";{let e=($y(),hr(If)).wasmBackend;Lt("webgpu",e,5),Lt("webnn",e,5),Lt("cpu",e,10),Lt("wasm",e,10)}Object.defineProperty(ye.versions,"web",{value:vy,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wd=""+new URL("handpose_estimation_mediapipe_2023feb-C23aXCoD.onnx",import.meta.url).href,Ne=224,Vd=21,xy=.5;function Sy(e){return 1/(1+Math.exp(-e))}class ky{session=null;_backend="uninitialized";cropCanvas;cropCtx;inputData=new Float32Array(Ne*Ne*3);constructor(){this.cropCanvas=document.createElement("canvas"),this.cropCanvas.width=Ne,this.cropCanvas.height=Ne;const t=this.cropCanvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("2D context unavailable for hand preprocessing");this.cropCtx=t}get backend(){return this._backend}async init(){ye.wasm.wasmPaths=new URL("ort/",document.baseURI).href,ye.wasm.numThreads=1;const t={graphOptimizationLevel:"all"};if(typeof navigator<"u"&&navigator.gpu)try{this.session=await Hr.create(Wd,{...t,executionProviders:["webgpu"]}),this._backend="webgpu";return}catch(r){console.warn("[hand] WebGPU init failed, falling back to wasm:",r)}this.session=await Hr.create(Wd,{...t,executionProviders:["wasm"]}),this._backend="wasm"}async detect(t){if(!this.session)throw new Error("OrtWebHand.init() not called");this.preprocess(t);const r=new Ze("float32",this.inputData,[1,Ne,Ne,3]),i=await this.session.run({input_1:r}),n=i.Identity,a=i.Identity_1;if(!n||!a)return{detected:!1,landmarks:[]};let u=a.data[0];(u<0||u>1)&&(u=Sy(u));const l=u>=xy,p=n.data,f=new Array(Vd);for(let h=0;h<Vd;h++)f[h]={x:p[h*3]/Ne,y:p[h*3+1]/Ne,z:p[h*3+2]/Ne};return{detected:l,landmarks:f}}preprocess(t){const r=t instanceof HTMLVideoElement?t.videoWidth:t.width,i=t instanceof HTMLVideoElement?t.videoHeight:t.height,n=Math.min(r,i)||Ne,a=(r-n)/2,s=(i-n)/2;this.cropCtx.save(),this.cropCtx.translate(Ne,0),this.cropCtx.scale(-1,1),this.cropCtx.drawImage(t,a,s,n,n,0,0,Ne,Ne),this.cropCtx.restore();const{data:u}=this.cropCtx.getImageData(0,0,Ne,Ne),l=this.inputData;for(let p=0,f=0;p<u.length;p+=4,f+=3)l[f]=u[p]/255,l[f+1]=u[p+1]/255,l[f+2]=u[p+2]/255}}const vn="#0a0e14",Ty=.18,Iy=4.5,Ey="#7fd1ff",zy="rgba(120, 255, 200, 0.9)",Cy="rgba(120, 255, 200, 0.10)",Ay="rgba(180, 255, 230, 0.95)";class Oy{constructor(t){this.canvas=t;const r=t.getContext("2d",{alpha:!1});if(!r)throw new Error("2D context unavailable");this.ctx=r}ctx;width=0;height=0;showDebug=!0;trails=!0;resize(t,r,i){this.width=t,this.height=r,this.canvas.width=Math.round(t*i),this.canvas.height=Math.round(r*i),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${r}px`,this.ctx.setTransform(i,0,0,i,0,0),this.ctx.fillStyle=vn,this.ctx.fillRect(0,0,t,r)}draw(t,r){const i=this.ctx;this.trails?(i.fillStyle=Ry(vn,Ty),i.fillRect(0,0,this.width,this.height)):(i.fillStyle=vn,i.fillRect(0,0,this.width,this.height)),this.drawBoids(t),r.detected&&r.landmarks.length===21&&this.drawHand(r,t),t.detected&&this.drawTarget(t),this.showDebug&&this.drawDebug(t,r)}drawBoids(t){const r=this.ctx,i=t.boids;r.fillStyle=Ey,r.beginPath();const n=Iy;for(let a=0;a<t.boidCount;a++){const s=a*4,u=i[s],l=i[s+1],p=i[s+2],f=i[s+3],h=Math.atan2(f,p),g=Math.cos(h),y=Math.sin(h),_=u+g*n,w=l+y*n,k=u+g*-n*.6-y*n*.5,x=l+y*-n*.6+g*n*.5,b=u+g*-n*.6+y*n*.5,I=l+y*-n*.6-g*n*.5;r.moveTo(_,w),r.lineTo(k,x),r.lineTo(b,I),r.closePath()}r.fill()}drawHand(t,r){const i=this.ctx,n=t.landmarks.map(s=>({x:r.handOffsetX+s.x*r.handScale,y:r.handOffsetY+s.y*r.handScale})),a=By(n);if(a.length>=3){i.beginPath(),i.moveTo(a[0].x,a[0].y);for(let s=1;s<a.length;s++)i.lineTo(a[s].x,a[s].y);i.closePath(),i.fillStyle=Cy,i.fill()}i.strokeStyle=zy,i.lineWidth=4,i.lineCap="round",i.lineJoin="round",i.beginPath();for(const[s,u]of r0)i.moveTo(n[s].x,n[s].y),i.lineTo(n[u].x,n[u].y);i.stroke(),i.fillStyle=Ay;for(const s of n)i.beginPath(),i.arc(s.x,s.y,3,0,Math.PI*2),i.fill()}drawTarget(t){const r=this.ctx,i=t.midpointX,n=t.midpointY,a=6+t.pinch*10;r.strokeStyle=`rgba(255, 200, 120, ${.3+.6*t.pinch})`,r.lineWidth=2,r.beginPath(),r.arc(i,n,a,0,Math.PI*2),r.stroke()}drawDebug(t,r){const i=this.ctx;i.fillStyle="rgba(220, 230, 240, 0.85)",i.font="12px ui-monospace, Menlo, monospace",i.textBaseline="top";const n=[`boids: ${t.boidCount}`,`hand: ${r.detected?"detected":"—"}`,`pinch p: ${t.pinch.toFixed(3)}`,`midpoint: ${t.midpointX.toFixed(0)}, ${t.midpointY.toFixed(0)}`];let a=8;for(const s of n)i.fillText(s,8,a),a+=15}}function Ry(e,t){const r=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16);return`rgba(${r}, ${i}, ${n}, ${t})`}function By(e){const t=e.slice().sort((a,s)=>a.x===s.x?a.y-s.y:a.x-s.x);if(t.length<3)return t;const r=(a,s,u)=>(s.x-a.x)*(u.y-a.y)-(s.y-a.y)*(u.x-a.x),i=[];for(const a of t){for(;i.length>=2&&r(i[i.length-2],i[i.length-1],a)<=0;)i.pop();i.push(a)}const n=[];for(let a=t.length-1;a>=0;a--){const s=t[a];for(;n.length>=2&&r(n[n.length-2],n[n.length-1],s)<=0;)n.pop();n.push(s)}return i.pop(),n.pop(),i.concat(n)}function qt(e,t="info"){const r=document.getElementById("status");if(r){if(t==="hidden"){r.style.display="none";return}r.style.display="block",r.textContent=e,r.classList.toggle("error",t==="error")}}async function My(e){if(!navigator.mediaDevices?.getUserMedia)throw new Error("getUserMedia is unavailable (needs HTTPS + a supported browser).");const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1});e.srcObject=t,await e.play()}class Ny{video;renderer;hand;sim;wasmMemory;config={...Hd};worldW=0;worldH=0;lastHand=oo;inferenceInFlight=!1;lastInferenceAt=0;cameraReady=!1;lastFrameTime=0;constructor(t,r,i,n,a){this.video=r,this.sim=i,this.wasmMemory=n,this.hand=a,this.renderer=new Oy(t),this.applyConfig(this.config),window.addEventListener("resize",()=>this.resize()),this.resize()}applyConfig(t){this.config=t,this.sim.set_params(Kg(t))}getConfig(){return{...this.config}}setCameraReady(t){this.cameraReady=t}resize(){const t=Math.min(window.devicePixelRatio||1,2);this.worldW=window.innerWidth,this.worldH=window.innerHeight,this.renderer.resize(this.worldW,this.worldH,t),this.sim.resize(this.worldW,this.worldH)}start(){const t=r=>{const i=this.lastFrameTime?(r-this.lastFrameTime)/1e3:.016666666666666666;this.lastFrameTime=r,this.frame(r,i),requestAnimationFrame(t)};requestAnimationFrame(t)}frame(t,r){this.cameraReady&&!this.inferenceInFlight&&t-this.lastInferenceAt>=Yg&&this.video.readyState>=2&&(this.inferenceInFlight=!0,this.lastInferenceAt=t,this.hand.detect(this.video).then(g=>{this.lastHand=g}).catch(g=>{console.error("[hand] inference error:",g),this.lastHand=oo}).finally(()=>{this.inferenceInFlight=!1}));const i=this.lastHand,n=Zg(this.worldW,this.worldH),a=g=>n.offsetX+g*n.scale,s=g=>n.offsetY+g*n.scale;if(i.detected&&i.landmarks.length===21){const g=i.landmarks[Jg],y=i.landmarks[e0],_=i.landmarks[Qg],w=i.landmarks[t0];this.sim.feed_landmarks(a(g.x),s(g.y),a(y.x),s(y.y),a(_.x),s(_.y),a(w.x),s(w.y),!0)}else this.sim.feed_landmarks(0,0,0,0,0,0,0,0,!1);const u=Math.min(r*60,3);this.sim.step(u);const l=this.sim.boids_ptr(),p=this.sim.boids_len(),h={boids:new Float32Array(this.wasmMemory.buffer,l,p),boidCount:this.sim.boid_count(),pinch:this.sim.pinch_amount(),midpointX:this.sim.midpoint_x(),midpointY:this.sim.midpoint_y(),detected:this.sim.detected(),handOffsetX:n.offsetX,handOffsetY:n.offsetY,handScale:n.scale};this.renderer.draw(h,i)}}async function Dy(){const e=document.getElementById("scene"),t=document.getElementById("cam");if(!e||!t)throw new Error("missing #scene / #cam elements");qt("Loading simulation core…");const r=await Fg({module_or_path:jg}),i=new xn(window.innerWidth,window.innerHeight,Xg);qt("Loading hand model…");const n=new ky;await n.init();const a=new Ny(e,t,i,r.memory,n);a.start(),window.pinchBoids={getConfig:()=>a.getConfig(),applyConfig:s=>a.applyConfig(s),defaultConfig:Hd};try{qt(`Requesting camera… (inference backend: ${n.backend})`),await My(t),a.setCameraReady(!0),qt("","hidden")}catch(s){console.error("[camera]",s),qt(`Camera unavailable — flock will roam only.
${s.message}`,"error")}}Dy().catch(e=>{console.error(e),qt(`Failed to start: ${e.message}`,"error")});
