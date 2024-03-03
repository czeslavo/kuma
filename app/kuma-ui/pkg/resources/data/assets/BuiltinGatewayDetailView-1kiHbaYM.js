import{d as P,a as c,o as s,b as n,w as t,E as b,A as T,e as o,t as r,f as l,F as u,c as p,p as y,m as $,T as I,K as C,q as k,U as N,D as E,_ as F}from"./index-CffSmxg2.js";import{A as K}from"./AppCollection-V-4zAFlh.js";import{F as L}from"./FilterBar-5z4wU0EP.js";import{S as R}from"./StatusBadge-p92uMEL_.js";import{S as A}from"./SummaryView--AO5b2LG.js";const G={key:0},O={key:1},U=P({__name:"BuiltinGatewayDetailView",setup(Z){return(J,W)=>{const _=c("RouterLink"),x=c("KTooltip"),S=c("RouterView"),f=c("DataSource"),V=c("KCard"),q=c("AppView"),B=c("RouteView");return s(),n(f,{src:"/me"},{default:t(({data:h})=>[h?(s(),n(B,{key:0,name:"builtin-gateway-detail-view",params:{mesh:"",gateway:"",page:1,size:h.pageSize,query:"",s:"",dataPlane:""}},{default:t(({can:z,route:a,t:i})=>[o(q,null,{default:t(()=>[o(f,{src:`/meshes/${a.params.mesh}/mesh-gateways/${a.params.gateway}`},{default:t(({data:v,error:w})=>[w?(s(),n(b,{key:0,error:w},null,8,["error"])):v===void 0?(s(),n(T,{key:1})):(s(),n(V,{key:2},{default:t(()=>[o(f,{src:`/meshes/${a.params.mesh}/dataplanes/for/${v.selectors[0].match["kuma.io/service"]}?page=${a.params.page}&size=${a.params.size}&search=${a.params.s}`},{default:t(({data:m,error:g})=>[g!==void 0?(s(),n(b,{key:0,error:g},null,8,["error"])):(s(),n(K,{key:1,class:"data-plane-collection","data-testid":"data-plane-collection","page-number":a.params.page,"page-size":a.params.size,headers:[{label:"Name",key:"name"},...z("use zones")?[{label:"Zone",key:"zone"}]:[],{label:"Certificate Info",key:"certificate"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Details",key:"details",hideLabel:!0}],items:m==null?void 0:m.items,total:m==null?void 0:m.total,error:g,"is-selected-row":e=>e.name===a.params.dataPlane,"summary-route-name":"builtin-gateway-data-plane-summary-view","empty-state-message":i("common.emptyState.message",{type:"Data Plane Proxies"}),"empty-state-cta-to":i("data-planes.href.docs.data_plane_proxy"),"empty-state-cta-text":i("common.documentation"),onChange:a.update},{toolbar:t(()=>[o(L,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:a.params.query,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},...z("use zones")&&{zone:{description:"filter by “kuma.io/zone” value"}}},onFieldsChange:e=>a.update({query:e.query,s:e.query.length>0?JSON.stringify(e.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"])]),name:t(({row:e})=>[o(_,{class:"name-link",title:e.name,to:{name:"builtin-gateway-data-plane-summary-view",params:{mesh:e.mesh,dataPlane:e.name},query:{page:a.params.page,size:a.params.size,query:a.params.query}}},{default:t(()=>[l(r(e.name),1)]),_:2},1032,["title","to"])]),zone:t(({row:e})=>[e.zone?(s(),n(_,{key:0,to:{name:"zone-cp-detail-view",params:{zone:e.zone}}},{default:t(()=>[l(r(e.zone),1)]),_:2},1032,["to"])):(s(),p(u,{key:1},[l(r(i("common.collection.none")),1)],64))]),certificate:t(({row:e})=>{var d;return[(d=e.dataplaneInsight.mTLS)!=null&&d.certificateExpirationTime?(s(),p(u,{key:0},[l(r(i("common.formats.datetime",{value:Date.parse(e.dataplaneInsight.mTLS.certificateExpirationTime)})),1)],64)):(s(),p(u,{key:1},[l(r(i("data-planes.components.data-plane-list.certificate.none")),1)],64))]}),status:t(({row:e})=>[o(R,{status:e.status},null,8,["status"])]),warnings:t(({row:e})=>[e.isCertExpired||e.warnings.length>0?(s(),n(x,{key:0},{content:t(()=>[$("ul",null,[e.warnings.length>0?(s(),p("li",G,r(i("data-planes.components.data-plane-list.version_mismatch")),1)):y("",!0),l(),e.isCertExpired?(s(),p("li",O,r(i("data-planes.components.data-plane-list.cert_expired")),1)):y("",!0)])]),default:t(()=>[l(),o(I,{class:"mr-1",size:k(C),"hide-title":""},null,8,["size"])]),_:2},1024)):(s(),p(u,{key:1},[l(r(i("common.collection.none")),1)],64))]),details:t(({row:e})=>[o(_,{class:"details-link","data-testid":"details-link",to:{name:"data-plane-detail-view",params:{dataPlane:e.name}}},{default:t(()=>[l(r(i("common.collection.details_link"))+" ",1),o(k(N),{display:"inline-block",decorative:"",size:k(C)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["page-number","page-size","headers","items","total","error","is-selected-row","empty-state-message","empty-state-cta-to","empty-state-cta-text","onChange"])),l(),a.params.dataPlane?(s(),n(S,{key:2},{default:t(e=>[o(A,{onClose:d=>a.replace({name:a.name,params:{mesh:a.params.mesh},query:{page:a.params.page,size:a.params.size}})},{default:t(()=>[(s(),n(E(e.Component),{name:a.params.dataPlane,"dataplane-overview":m==null?void 0:m.items.find(d=>d.name===a.params.dataPlane)},null,8,["name","dataplane-overview"]))]),_:2},1032,["onClose"])]),_:2},1024)):y("",!0)]),_:2},1032,["src"])]),_:2},1024))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["params"])):y("",!0)]),_:1})}}}),Y=F(U,[["__scopeId","data-v-4d59cf9b"]]);export{Y as default};