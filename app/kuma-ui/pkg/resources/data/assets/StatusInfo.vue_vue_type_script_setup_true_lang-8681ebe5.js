import{_ as l}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-4748827a.js";import{E as s}from"./ErrorBlock-4c3026f3.js";import{_ as n}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-6f8d6e1a.js";import{d as f,o as r,j as a,b as o,A as i}from"./index-55dfb012.js";const m={key:3},p=f({__name:"StatusInfo",props:{isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},error:{type:[Error,null],required:!1,default:null}},setup(e){return(t,u)=>(r(),a("div",null,[e.isLoading?(r(),o(n,{key:0})):e.hasError||e.error!==null?(r(),o(s,{key:1,error:e.error},null,8,["error"])):e.isEmpty?(r(),o(l,{key:2})):(r(),a("div",m,[i(t.$slots,"default")]))]))}});export{p as _};