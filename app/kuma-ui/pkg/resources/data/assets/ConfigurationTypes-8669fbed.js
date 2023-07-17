import{w as l}from"./kongponents.es-3d043985.js";import{O as y,a as V,b as h}from"./OnboardingPage-5ddf7a62.js";import{s as x,t as C,v as G,e as k,j as M,f as P,_ as w,g as T}from"./RouteView.vue_vue_type_script_setup_true_lang-112c8af9.js";import{_ as N}from"./RouteTitle.vue_vue_type_script_setup_true_lang-8b8b4841.js";import{d as O,q as B,v as K,c as i,o as d,a as p,w as e,h as o,b as r,g as a,k as m,i as S}from"./index-41121ee3.js";const U={class:"graph-list mb-6"},$={class:"radio-button-group"},I=O({__name:"ConfigurationTypes",setup(j){const c=x(),g=C(),_={postgres:G(),memory:g,kubernetes:c},u=k(),{t:f}=M(),t=B("kubernetes");K(function(){t.value=u.getters["config/getConfigurationType"]});const v=i(()=>u.getters["config/getMulticlusterStatus"]?"onboarding-multi-zone":"onboarding-create-mesh"),b=i(()=>_[t.value]);return(z,n)=>(d(),p(w,null,{default:e(()=>[o(N,{title:r(f)("onboarding.routes.configuration-types.title")},null,8,["title"]),a(),o(P,null,{default:e(()=>[o(y,{"with-image":""},{header:e(()=>[o(V,null,{title:e(()=>[a(`
              Learn about configuration storage
            `)]),_:1})]),content:e(()=>[m("div",U,[(d(),p(S(b.value)))]),a(),m("div",$,[o(r(l),{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=s=>t.value=s),name:"deployment","selected-value":"kubernetes"},{default:e(()=>[a(`
              Kubernetes
            `)]),_:1},8,["modelValue"]),a(),o(r(l),{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=s=>t.value=s),name:"deployment","selected-value":"postgres"},{default:e(()=>[a(`
              Postgres
            `)]),_:1},8,["modelValue"]),a(),o(r(l),{modelValue:t.value,"onUpdate:modelValue":n[2]||(n[2]=s=>t.value=s),name:"deployment","selected-value":"memory"},{default:e(()=>[a(`
              Memory
            `)]),_:1},8,["modelValue"])])]),navigation:e(()=>[o(h,{"next-step":v.value,"previous-step":"onboarding-deployment-types"},null,8,["next-step"])]),_:1})]),_:1})]),_:1}))}});const F=T(I,[["__scopeId","data-v-ec87faf1"]]);export{F as default};