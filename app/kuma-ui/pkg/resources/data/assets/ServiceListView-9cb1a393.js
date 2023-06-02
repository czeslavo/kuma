import{d as P,u as C,r as l,v as L,o as g,b as w,w as T,g as V,e as z,L as h,f as B}from"./index-61cef882.js";import{S as q}from"./ServiceSummary-ff5fde8c.js";import{C as F}from"./ContentWrapper-2a9c151a.js";import{D as M}from"./DataOverview-ef20b89d.js";import{u as O}from"./index-01e79acb.js";import{Q as y}from"./QueryParameter-70743f73.js";import"./kongponents.es-d381709c.js";import"./DefinitionListItem-841dbb71.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-bae3fcaa.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-4f359e86.js";import"./TextWithCopyButton-037745d5.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-6ccffd0b.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-5a7795a6.js";import"./ErrorBlock-e115e1aa.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-fa2a2bb6.js";import"./toYaml-4e00099e.js";import"./StatusBadge-69eda1cc.js";import"./TagList-25ddbb01.js";const se=P({__name:"ServiceListView",props:{selectedServiceName:{type:String,required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(_){const c=_,m=O(),k=[{label:"Name",key:"entity"},{label:"Type",key:"serviceType"},{label:"Address",key:"addressPort"},{label:"Status",key:"status"},{label:"DP proxies (online / total)",key:"dpProxiesStatus"}],D={title:"No Data",message:"There are no service insights present."},p=C(),v=l(!0),d=l(null),S=l(null),b=l(c.offset),t=l(null),o=l(null),n=l({headers:k,data:[]});L(()=>p.params.mesh,function(){p.name==="services-list-view"&&f(0)}),f(c.offset);async function f(a){var i;b.value=a,y.set("offset",a>0?a:null),v.value=!0,d.value=null;const e=p.params.mesh,s=h;try{const{items:r,next:u}=await m.getAllServiceInsightsFromMesh({mesh:e},{size:s,offset:a});S.value=u,n.value.data=A(r??[]),await x({name:c.selectedServiceName??((i=n.value.data[0])==null?void 0:i.entity.name),mesh:e})}catch(r){n.value.data=[],t.value=null,o.value=null,r instanceof Error?d.value=r:console.error(r)}finally{v.value=!1}}function A(a){return a.map(e=>{const{serviceType:s="internal",addressPort:i}=e,r={name:"service-detail-view",params:{mesh:e.mesh,service:e.name}};let u="—";if(e.dataplanes){const{online:E=0,total:N=0}=e.dataplanes;u=`${E} / ${N}`}return{entity:e,detailViewRoute:r,serviceType:s,dpProxiesStatus:u,addressPort:i}})}async function x({name:a,mesh:e}){a!==void 0?(t.value=await m.getServiceInsight({mesh:e,name:a}),t.value.serviceType==="external"&&(o.value=await m.getExternalServiceByServiceInsightName(e,a)),y.set("service",a)):(t.value=null,o.value=null,y.set("service",null))}return(a,e)=>(g(),w(F,null,{content:T(()=>{var s;return[V(M,{"selected-entity-name":(s=t.value)==null?void 0:s.name,"page-size":z(h),error:d.value,"is-loading":v.value,"empty-state":D,"table-data":n.value,"table-data-is-empty":n.value.data.length===0,next:S.value,"page-offset":b.value,onTableAction:x,onLoadData:f},null,8,["selected-entity-name","page-size","error","is-loading","table-data","table-data-is-empty","next","page-offset"])]}),sidebar:T(()=>[t.value!==null?(g(),w(q,{key:0,service:t.value,"external-service":o.value},null,8,["service","external-service"])):B("",!0)]),_:1}))}});export{se as default};
