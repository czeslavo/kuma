import{_ as l}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-ceaa1a9e.js";import{E as s}from"./ErrorBlock-30311e24.js";import{_ as n}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-3fc6a62a.js";import{d as f,o as r,j as a,b as o,A as i}from"./index-b62490ef.js";const m={key:3},p=f({__name:"StatusInfo",props:{isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},error:{type:[Error,null],required:!1,default:null}},setup(e){return(t,u)=>(r(),a("div",null,[e.isLoading?(r(),o(n,{key:0})):e.hasError||e.error!==null?(r(),o(s,{key:1,error:e.error},null,8,["error"])):e.isEmpty?(r(),o(l,{key:2})):(r(),a("div",m,[i(t.$slots,"default")]))]))}});export{p as _};