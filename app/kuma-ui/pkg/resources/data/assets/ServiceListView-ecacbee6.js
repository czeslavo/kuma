import{d as V,r as l,o as t,i as r,w as a,j as i,p as b,n as o,E as x,H as m,a3 as R,l as _,F as d,k as g,$ as B,K as T,q as A,m as h,t as D}from"./index-a890e85a.js";import{A as I}from"./AppCollection-4f22d81f.js";import{S as L}from"./StatusBadge-a76321ce.js";import{S as N}from"./SummaryView-34f4bed6.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-b1564545.js";const $=V({__name:"ServiceListView",setup(E){return(K,q)=>{const w=l("RouteTitle"),u=l("RouterLink"),f=l("KCard"),C=l("RouterView"),S=l("AppView"),v=l("DataSource"),z=l("RouteView");return t(),r(v,{src:"/me"},{default:a(({data:y})=>[y?(t(),r(z,{key:0,name:"service-list-view",params:{page:1,size:y.pageSize,mesh:"",service:""}},{default:a(({route:s,t:c})=>[i(v,{src:`/meshes/${s.params.mesh}/service-insights?page=${s.params.page}&size=${s.params.size}`},{default:a(({data:n,error:p})=>[i(S,null,{title:a(()=>[b("h2",null,[i(w,{title:c("services.routes.items.title"),render:!0},null,8,["title"])])]),default:a(()=>[o(),i(f,null,{body:a(()=>[p!==void 0?(t(),r(x,{key:0,error:p},null,8,["error"])):(t(),r(I,{key:1,class:"service-collection","data-testid":"service-collection","empty-state-message":c("common.emptyState.message",{type:"Services"}),headers:[{label:"Name",key:"name"},{label:"Type",key:"serviceType"},{label:"Address",key:"addressPort"},{label:"DP proxies (online / total)",key:"online"},{label:"Status",key:"status"},{label:"Details",key:"details",hideLabel:!0}],"page-number":parseInt(s.params.page),"page-size":parseInt(s.params.size),total:n==null?void 0:n.total,items:n==null?void 0:n.items,error:p,"is-selected-row":e=>e.name===s.params.service,onChange:s.update},{name:a(({row:e})=>[i(u,{to:{name:"service-summary-view",params:{mesh:e.mesh,service:e.name},query:{page:s.params.page,size:s.params.size}}},{default:a(()=>[o(m(e.name),1)]),_:2},1032,["to"])]),serviceType:a(({rowValue:e})=>[o(m(e||"internal"),1)]),addressPort:a(({rowValue:e})=>[e?(t(),r(R,{key:0,text:e},null,8,["text"])):(t(),_(d,{key:1},[o(m(c("common.collection.none")),1)],64))]),online:a(({row:e})=>[e.dataplanes?(t(),_(d,{key:0},[o(m(e.dataplanes.online||0)+" / "+m(e.dataplanes.total||0),1)],64)):(t(),_(d,{key:1},[o(m(c("common.collection.none")),1)],64))]),status:a(({row:e})=>[i(L,{status:e.status||"not_available"},null,8,["status"])]),details:a(({row:e})=>[i(u,{class:"details-link","data-testid":"details-link",to:{name:"service-detail-view",params:{mesh:e.mesh,service:e.name}}},{default:a(()=>[o(m(c("common.collection.details_link"))+" ",1),i(g(B),{display:"inline-block",decorative:"",size:g(T)},null,8,["size"])]),_:2},1032,["to"])]),_:2},1032,["empty-state-message","headers","page-number","page-size","total","items","error","is-selected-row","onChange"]))]),_:2},1024),o(),s.params.service?(t(),r(C,{key:0},{default:a(e=>[i(N,{onClose:k=>s.replace({name:"service-list-view",params:{mesh:s.params.mesh},query:{page:s.params.page,size:s.params.size}})},{default:a(()=>[(t(),r(A(e.Component),{name:s.params.service,service:n==null?void 0:n.items.find(k=>k.name===s.params.service)},null,8,["name","service"]))]),_:2},1032,["onClose"])]),_:2},1024)):h("",!0)]),_:2},1024)]),_:2},1032,["src"])]),_:2},1032,["params"])):h("",!0)]),_:1})}}});const U=D($,[["__scopeId","data-v-c8d7a3c2"]]);export{U as default};