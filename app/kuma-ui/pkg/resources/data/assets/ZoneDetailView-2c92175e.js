import{d as _,u as d,r as i,v as u,j as c,e as l,g as k,o}from"./index-43c320be.js";import{_ as w}from"./ZoneDetails.vue_vue_type_script_setup_true_lang-272eeda8.js";import{_ as z}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-cb473e51.js";import{E as h}from"./ErrorBlock-421b13a4.js";import{_ as y}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-536db56a.js";import{u as g}from"./store-d059bdbe.js";import{u as B}from"./index-cb63a76c.js";import"./kongponents.es-e03ce4a3.js";import"./AccordionList-222659ec.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-20a73060.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-61ec7012.js";import"./TabsWidget-e5fb688e.js";import"./datadogLogEvents-302eea7b.js";import"./QueryParameter-70743f73.js";import"./WarningsWidget.vue_vue_type_script_setup_true_lang-e5002519.js";const E={class:"zone-details"},$={key:3,class:"kcard-border"},F=_({__name:"ZoneDetailView",setup(x){const p=B(),e=d(),f=g(),a=i(null),n=i(!0),r=i(null);u(()=>e.params.mesh,function(){e.name==="zone-detail-view"&&s()}),u(()=>e.params.name,function(){e.name==="zone-detail-view"&&s()}),v();function v(){f.dispatch("updatePageTitle",e.params.zone),s()}async function s(){n.value=!0,r.value=null;const m=e.params.zone;try{a.value=await p.getZoneOverview({name:m})}catch(t){a.value=null,t instanceof Error?r.value=t:console.error(t)}finally{n.value=!1}}return(m,t)=>(o(),c("div",E,[n.value?(o(),l(y,{key:0})):r.value!==null?(o(),l(h,{key:1,error:r.value},null,8,["error"])):a.value===null?(o(),l(z,{key:2})):(o(),c("div",$,[k(w,{"zone-overview":a.value},null,8,["zone-overview"])]))]))}});export{F as default};