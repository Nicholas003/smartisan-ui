import{e as E,f as v,r as m,o as n,c,a,h as C,O as s,I as V,J as b,g as t,z as i,S as g,Q as S,j as h}from"./vendor.6c704e30.js";const U={class:"smart-bg-full"},w={class:"my-3"},x={class:"m-3"},A={class:"mt-3"},j=E({setup(N){let l=v("\u5409\u4ED6"),u=v(!1),_=["\u5409\u4ED6","\u67B6\u5B50\u9F13","\u8D1D\u65AF"],D=k=>{console.log(k)};return(k,o)=>{const B=m("sm-nav-bar"),r=m("SmCell"),p=m("sm-radio"),f=m("sm-radio-group"),y=m("SmCellGroup"),F=m("SmSwitch");return n(),c("div",U,[a(B,{title:"Radio"}),a(r,{class:"mt-3",title:"\u57FA\u7840\u7528\u6CD5"}),C("div",w,[a(f,{disabled:t(u),modelValue:t(l),"onUpdate:modelValue":o[0]||(o[0]=e=>i(l)?l.value=e:l=e)},{default:s(()=>[(n(!0),c(V,null,b(t(_),(e,d)=>(n(),g(p,{class:"ml-3",key:d,name:e},{default:s(()=>[S(h(e),1)]),_:2},1032,["name"]))),128))]),_:1},8,["disabled","modelValue"])]),a(r,{class:"mt-3",title:"\u57FA\u7840\u7528\u6CD5-\u884C\u5185"}),C("div",x,[a(f,{inline:"",modelValue:t(l),"onUpdate:modelValue":o[1]||(o[1]=e=>i(l)?l.value=e:l=e)},{default:s(()=>[(n(!0),c(V,null,b(t(_),(e,d)=>(n(),g(p,{disabled:d==1&&t(u),class:"ml-3",key:d,name:e},{default:s(()=>[S(h(e),1)]),_:2},1032,["disabled","name"]))),128))]),_:1},8,["modelValue"])]),a(r,{class:"mt-3",title:"\u5355\u5143\u683C\u7EC4\u5408"}),C("div",A,[a(f,{disabled:t(u),onChange:t(D),modelValue:t(l),"onUpdate:modelValue":o[2]||(o[2]=e=>i(l)?l.value=e:l=e)},{default:s(()=>[a(y,null,{default:s(()=>[(n(!0),c(V,null,b(t(_),(e,d)=>(n(),g(r,{onClick:G=>i(l)?l.value=e:l=e,clickable:"",key:d,title:e},{right:s(()=>[a(p,{"checked-color":"red",name:e},null,8,["name"])]),_:2},1032,["onClick","title"]))),128))]),_:1})]),_:1},8,["disabled","onChange","modelValue"])]),a(r,{class:"mt-3",title:"disabled"},{right:s(()=>[a(F,{modelValue:t(u),"onUpdate:modelValue":o[3]||(o[3]=e=>i(u)?u.value=e:u=e)},null,8,["modelValue"])]),_:1})])}}});export{j as default};
