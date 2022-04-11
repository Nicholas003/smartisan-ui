import{S as q}from"./Stepper.49e4203a.js";import{e as k,f as V,t as U,l as h,m as S,o as g,c as y,h as f,v as N,x as j,g as t,y as K,z as p,a,A as M,k as E,i as B,j as W,n as F,q as R,s as G,p as P,C as T,w as O,r as $,O as u,V as Q,W as X,X as J,Q as I}from"./vendor.6c704e30.js";import{_ as A}from"./index.874da794.js";import{S as Y}from"./Button.0b4b7f2a.js";import{C as D,_ as Z}from"./Checkbox.5e215f20.js";import{S as z}from"./Switch.f09a0ff3.js";const ee={class:"input-father"},le=["disabled","maxlength","placeholder","rows"],ae={class:"close"},te={key:0,class:"word-limit"},oe=k({props:{disabled:{type:Boolean,default:!1},type:{default:"text"},modelValue:{default:void 0},placeholder:{default:""},rows:{default:1},showWordLimit:{type:Boolean,default:!1},maxlength:{default:""},clearable:{type:Boolean,default:!1},label:{default:""},labelWidth:{default:"50px"},inputAlign:{default:"left"},autosize:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(d,{emit:l}){const r=d;V(!1);let n=V(),s=U(r),m=h(()=>s.disabled.value),i=S("smart-form");if(i){i=i;let _=i.props;m=h(()=>_.disabled||s.disabled.value)}let c=h({get(){return s.type.value=="number"?r.modelValue:`${r.modelValue}`},set(_){m.value||l("update:modelValue",_)}}),x=h(()=>`${c.value}`.length),o=()=>{m.value||l("update:modelValue","")},C=(..._)=>{let e=_[0];if((e.key=="Enter"||e.code=="Enter"||e.keyCode==13)&&s.type.value!="textarea")return e.returnValue=!1,!1};return(_,e)=>(g(),y("div",{class:F(["smart-input-container",[`input-${d.inputAlign}`,d.type]])},[f("div",ee,[N(f("textarea",{"auto-height":"true",disabled:t(m),maxlength:d.maxlength,class:"input",ref_key:"textarea",ref:n,onKeydown:e[0]||(e[0]=K((...w)=>t(C)&&t(C)(...w),["enter"])),"onUpdate:modelValue":e[1]||(e[1]=w=>p(c)?c.value=w:c=w),placeholder:d.placeholder,rows:d.type=="textarea"?d.rows:1},`
        `,40,le),[[j,t(c)]]),f("div",ae,[d.clearable&&t(x)&&!t(m)&&d.type!=="textarea"?(g(),y("div",{key:0,onClick:e[2]||(e[2]=(...w)=>t(o)&&t(o)(...w)),class:"close-btn"},[a(t(M),{size:"10px",class:"text-gray-500","stroke-linecap":"butt","stroke-width":5})])):E("",!0),B(_.$slots,"button",{},void 0,!0)])]),d.showWordLimit&&d.maxlength?(g(),y("div",te,[f("div",null,W(t(x))+"/"+W(d.maxlength),1)])):E("",!0)],2))}});var v=A(oe,[["__scopeId","data-v-8cb56cfa"]]);const de={class:"smart-form"},ue=k({props:{labelAlign:{default:void 0},disabled:{type:Boolean,default:!1}},setup(d){let l=G();return R("smart-form",l),(r,n)=>(g(),y("div",de,[B(r.$slots,"default",{},void 0,!0)]))}});var L=A(ue,[["__scopeId","data-v-d1ccea28"]]);const se={class:"name"},ie={key:0,class:"asterisk"},re=k({props:{label:{default:""},labelWidth:{default:"80px"},labelAlign:{default:"left"},required:{type:Boolean,default:!1}},setup(d){let r=U(d),n=S("smart-form");if(!n)throw new Error("FormItem\u5FC5\u987B\u5728Form\u7EC4\u4EF6\u4E0B");let s=n.props,m=h(()=>s.disabled),i=h(()=>s.labelAlign||r.labelAlign.value);return(c,x)=>(g(),y("div",{class:F(["form-item",{"label-null":!d.label,disabled:t(m)}])},[f("div",{class:"label-name",style:P({width:d.labelWidth})},[f("span",se,W(d.label),1),d.required?(g(),y("span",ie,"*")):E("",!0)],4),f("div",{class:F(["slot",[t(i)]])},[B(c.$slots,"default",{},void 0,!0)],2)],2))}});var b=A(re,[["__scopeId","data-v-6d031dfa"]]);const ne={class:"contents"},me=k({props:{modelValue:null,disabled:{type:Boolean,default:!1},inline:{type:Boolean,default:!1}},emits:["change","update:modelValue"],setup(d,{emit:l}){const r=d;U(r),R("setRadio",s=>{r.disabled||(l("change",s),l("update:modelValue",s))});let n=G();return R("getRadioGroup",n),(s,m)=>(g(),y("div",ne,[B(s.$slots,"default")]))}});const pe={class:"icon"},fe={class:"text"},ce=k({props:{name:null,checkedColor:{default:""},disabled:{type:Boolean,default:!1}},setup(d){const l=d;U(l);let r=S("setRadio"),s=S("getRadioGroup").props,m=h(()=>s.disabled||l.disabled),i=h(()=>s.modelValue==l.name),c=h(()=>s.inline),x=()=>{m.value||r(l.name)};return(o,C)=>(g(),y("div",{class:F(["radio-father",{inline:t(c)}])},[f("div",{class:F(["radio",{disabled:t(m)}]),onClick:C[0]||(C[0]=O((..._)=>t(x)&&t(x)(..._),["stop"]))},[B(o.$slots,"icon",{row:{active:t(i)}},()=>[f("div",{class:F(["check",{active:t(i)}]),style:P(`${d.checkedColor?"--sm-active-color":""}:${d.checkedColor}`)},[f("span",pe,[a(t(T),{"stroke-linecap":"butt","stroke-width":5})])],6)],!0),f("div",fe,[B(o.$slots,"default",{},void 0,!0)])],2)],2))}});var H=A(ce,[["__scopeId","data-v-0dbefda1"]]);const be=d=>(X("data-v-5a0e6b16"),d=d(),J(),d),_e={class:"smart-bg-full"},ve={class:"m-5"},Ve={class:"m-5"},he=be(()=>f("div",{class:"my-3 mx-5 text-gray-600"}," \u4F7F\u7528smart-form ",-1)),ge=I(" \u53D1\u9001\u9A8C\u8BC1\u7801 "),ye=I(" \u591A\u9009 "),xe=I(" 2 "),Ce=I(" left "),we=I(" right "),Fe={class:"p-5"},Be=k({setup(d){let l=V(""),r=V(""),n=V(!0),s=V(["left"]),m=V("left"),i=V(!1),c=V(0);return(x,o)=>{const C=$("sm-nav-bar"),_=$("Cell");return g(),y("div",_e,[a(C,{title:"Input"}),a(_,{class:"mt-0",title:"\u57FA\u7840\u7528\u6CD5"}),f("div",ve,[a(v,{disabled:t(i),placeholder:"\u5355\u72EC\u4F7F\u7528",label:"\u59D3\u540D",clearable:"",modelValue:t(r),"onUpdate:modelValue":o[0]||(o[0]=e=>p(r)?r.value=e:r=e)},null,8,["disabled","modelValue"])]),f("div",Ve,[a(v,{disabled:t(i),label:"\u59D3\u540D",maxlength:"100",placeholder:"\u6587\u672C\u6846",clearable:"",showWordLimit:"",type:"textarea",rows:"7",modelValue:t(l),"onUpdate:modelValue":o[1]||(o[1]=e=>p(l)?l.value=e:l=e)},null,8,["disabled","modelValue"])]),a(L,{class:"m-5",disabled:t(i)},{default:u(()=>[a(b,{"label-align":"right",label:"disabled"},{default:u(()=>[a(z,{modelValue:t(i),"onUpdate:modelValue":o[2]||(o[2]=e=>p(i)?i.value=e:i=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["disabled"]),he,a(L,{class:"m-5","label-align":t(m),disabled:t(i)},{default:u(()=>[a(b,{label:"\u4F60\u597D\u54C8"},{default:u(()=>[a(v,{placeholder:"\u8BF7\u8F93\u5165",label:"HH",modelValue:t(l),"onUpdate:modelValue":o[3]||(o[3]=e=>p(l)?l.value=e:l=e)},null,8,["modelValue"])]),_:1}),a(b,{label:"HH"},{default:u(()=>[a(v,{label:"HH",maxlength:"100",showWordLimit:"",placeholder:"smart",clearable:"",type:"textarea",rows:"7",modelValue:t(l),"onUpdate:modelValue":o[4]||(o[4]=e=>p(l)?l.value=e:l=e)},null,8,["modelValue"])]),_:1}),a(b,{"label-align":"right",maxlength:"50000",showWordLimit:"",label:"\u81EA\u5B9A\u4E49label-width","label-width":"180px"},{default:u(()=>[a(v,{placeholder:"\u8FD9\u91CC\u5199\u70B9\u4EC0\u4E48",modelValue:t(l),"onUpdate:modelValue":o[5]||(o[5]=e=>p(l)?l.value=e:l=e)},null,8,["modelValue"])]),_:1}),a(b,{"label-align":"right"},{default:u(()=>[a(v,{placeholder:"\u6CA1\u6709label",modelValue:t(l),"onUpdate:modelValue":o[6]||(o[6]=e=>p(l)?l.value=e:l=e)},null,8,["modelValue"])]),_:1}),a(b,null,{default:u(()=>[a(v,{"input-align":"right",placeholder:"\u53F3\u5BF9\u9F50",clearable:"",modelValue:t(l),"onUpdate:modelValue":o[7]||(o[7]=e=>p(l)?l.value=e:l=e)},null,8,["modelValue"])]),_:1}),a(b,{label:"\u624B\u673A\u53F7"},{default:u(()=>[a(v,{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",clearable:"",type:"number",modelValue:t(l),"onUpdate:modelValue":o[8]||(o[8]=e=>p(l)?l.value=e:l=e)},{button:u(()=>[a(Y,{class:"ml-2",type:"success",size:"mini"},{default:u(()=>[ge]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(b,{required:"",label:"\u9A8C\u8BC1\u7801"},{default:u(()=>[a(v,{placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",type:"number",modelValue:t(l),"onUpdate:modelValue":o[9]||(o[9]=e=>p(l)?l.value=e:l=e)},null,8,["modelValue"])]),_:1}),a(b,{"label-align":"right",label:"\u4F60\u597D\u54C8"},{default:u(()=>[a(D,{checkedColor:"red",modelValue:t(n),"onUpdate:modelValue":o[10]||(o[10]=e=>p(n)?n.value=e:n=e)},{icon:u(({row:{active:e}})=>[a(t(Q),{class:"start",theme:e?"filled":"outline",size:"20",strokeWidth:3,strokeLinecap:"butt"},null,8,["theme"])]),_:1},8,["modelValue"])]),_:1}),a(b,{"label-align":"right",label:"\u4F60\u597D\u54C8"},{default:u(()=>[a(Z,{modelValue:t(s),"onUpdate:modelValue":o[11]||(o[11]=e=>p(s)?s.value=e:s=e)},{default:u(()=>[a(D,{name:"left"},{default:u(()=>[ye]),_:1}),a(D,{name:"right"},{default:u(()=>[xe]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(b,{"label-width":"100px",label:"label-align"},{default:u(()=>[a(me,{inline:"",modelValue:t(m),"onUpdate:modelValue":o[12]||(o[12]=e=>p(m)?m.value=e:m=e)},{default:u(()=>[a(H,{name:"left"},{default:u(()=>[Ce]),_:1}),a(H,{name:"right"},{default:u(()=>[we]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(b,{label:"\u4F60\u597D\u54C8"},{default:u(()=>[f("div",null,[a(z,{modelValue:t(n),"onUpdate:modelValue":o[13]||(o[13]=e=>p(n)?n.value=e:n=e)},null,8,["modelValue"])])]),_:1}),a(b,{label:"\u8FDB\u6B65\u5668"},{default:u(()=>[f("div",null,[a(q,{modelValue:t(c),"onUpdate:modelValue":o[14]||(o[14]=e=>p(c)?c.value=e:c=e)},null,8,["modelValue"])])]),_:1})]),_:1},8,["label-align","disabled"]),f("div",Fe,[a(v,{maxlength:"50000",showWordLimit:"",type:"textarea",rows:1,modelValue:t(l),"onUpdate:modelValue":o[15]||(o[15]=e=>p(l)?l.value=e:l=e)},null,8,["modelValue"])])])}}});var Ee=A(Be,[["__scopeId","data-v-5a0e6b16"]]);export{Ee as default};
