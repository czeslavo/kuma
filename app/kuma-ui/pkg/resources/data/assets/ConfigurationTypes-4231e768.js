import{e as r}from"./kongponents.es-d381709c.js";import{O as b,a as y,b as V}from"./OnboardingPage-6314c061.js";import{d as h,e as x,f as C}from"./index-9b1ea976.js";import{u as G}from"./store-0af1ff9f.js";import{d as k,r as M,k as P,c as p,o as d,b as i,w as o,g as s,h as t,i as m,s as T,e as u}from"./index-61cef882.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-01e79acb.js";import"./DoughnutChart-c8c5de26.js";const O={class:"graph-list mb-6"},w={class:"radio-button-group"},B=k({__name:"ConfigurationTypes",setup(K){const g=h(),c=x(),f={postgres:C(),memory:c,kubernetes:g},l=G(),e=M("kubernetes");P(function(){e.value=l.getters["config/getConfigurationType"]});const _=p(()=>l.getters["config/getMulticlusterStatus"]?"onboarding-multi-zone":"onboarding-create-mesh"),v=p(()=>f[e.value]);return(U,a)=>(d(),i(V,{"with-image":""},{header:o(()=>[s(b,null,{title:o(()=>[t(`
          Learn about configuration storage
        `)]),_:1})]),content:o(()=>[m("div",O,[(d(),i(T(v.value)))]),t(),m("div",w,[s(u(r),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=n=>e.value=n),name:"deployment","selected-value":"kubernetes"},{default:o(()=>[t(`
          Kubernetes
        `)]),_:1},8,["modelValue"]),t(),s(u(r),{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=n=>e.value=n),name:"deployment","selected-value":"postgres"},{default:o(()=>[t(`
          Postgres
        `)]),_:1},8,["modelValue"]),t(),s(u(r),{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=n=>e.value=n),name:"deployment","selected-value":"memory"},{default:o(()=>[t(`
          Memory
        `)]),_:1},8,["modelValue"])])]),navigation:o(()=>[s(y,{"next-step":_.value,"previous-step":"onboarding-deployment-types"},null,8,["next-step"])]),_:1}))}});const E=N(B,[["__scopeId","data-v-673391df"]]);export{E as default};
