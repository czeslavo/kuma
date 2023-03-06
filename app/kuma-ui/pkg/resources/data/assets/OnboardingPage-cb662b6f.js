import{d as g,R as S,o as s,h as p,g as a,Q as i,f as o,u as c,b as u,a as f,w as l,e as y,t as k,I as x,p as $,k as O}from"./runtime-dom.esm-bundler-60661421.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{A as _}from"./kongponents.es-397ed6da.js";import{u as w}from"./store-a0dee8a0.js";const N={class:"onboarding-heading"},B={class:"onboarding-title"},I={key:0,class:"onboarding-description"},q=g({__name:"OnboardingHeading",setup(n){const e=S();return(t,d)=>(s(),p("div",N,[a("h1",B,[i(t.$slots,"title",{},void 0,!0)]),o(),c(e).description?(s(),p("div",I,[i(t.$slots,"description",{},void 0,!0)])):u("",!0)]))}});const J=v(q,[["__scopeId","data-v-8bc5c25a"]]),C={class:"onboarding-actions"},A={class:"button-list"},V=g({__name:"OnboardingNavigation",props:{shouldAllowNext:{type:Boolean,required:!1,default:!0},showSkip:{type:Boolean,required:!1,default:!0},nextStep:{type:String,required:!0},previousStep:{type:String,required:!1,default:""},nextStepTitle:{type:String,required:!1,default:"Next"},lastStep:{type:Boolean,required:!1,default:!1}},setup(n){const e=n,t=w();function d(){t.dispatch("onboarding/completeOnboarding")}function b(m){t.dispatch("onboarding/changeStep",m)}return(m,r)=>(s(),p("div",C,[e.previousStep?(s(),f(c(_),{key:0,appearance:"secondary",to:{name:e.previousStep},"data-testid":"onboarding-previous-button",onClick:r[0]||(r[0]=h=>b(e.previousStep))},{default:l(()=>[o(`
      Back
    `)]),_:1},8,["to"])):u("",!0),o(),a("div",A,[e.showSkip?(s(),f(c(_),{key:0,appearance:"outline","data-testid":"onboarding-skip-button",to:{name:"home"},onClick:d},{default:l(()=>[o(`
        Skip setup
      `)]),_:1})):u("",!0),o(),y(c(_),{disabled:!e.shouldAllowNext,appearance:e.lastStep?"creation":"primary",to:{name:e.lastStep?"home":e.nextStep},"data-testid":"onboarding-next-button",onClick:r[1]||(r[1]=h=>e.lastStep?d():b(e.nextStep))},{default:l(()=>[o(k(e.nextStepTitle),1)]),_:1},8,["disabled","appearance","to"])])]))}});const K=v(V,[["__scopeId","data-v-da07ae4c"]]),H=n=>($("data-v-18dc3352"),n=n(),O(),n),P={class:"onboarding-container"},T={class:"onboarding-container__header"},z={class:"onboarding-container__inner-content"},D={class:"mt-4"},E=H(()=>a("div",{class:"background-image"},null,-1)),Q=g({__name:"OnboardingPage",props:{withImage:{type:Boolean,required:!1,default:!1}},setup(n){const e=n;return(t,d)=>(s(),p("div",null,[a("div",P,[a("div",T,[i(t.$slots,"header",{},void 0,!0)]),o(),a("div",{class:x(["onboarding-container__content",{"onboarding-container__content--with-image":e.withImage}])},[a("div",z,[i(t.$slots,"content",{},void 0,!0)])],2),o(),a("div",D,[i(t.$slots,"navigation",{},void 0,!0)])]),o(),E]))}});const L=v(Q,[["__scopeId","data-v-18dc3352"]]);export{L as O,J as a,K as b};