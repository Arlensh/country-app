import{G as s,H as l,I as d,J as u,L as f,O as a,P as C,Q as M,S as g,T as v,f as e,h as c,i as r,o as n,p,q as m}from"./chunk-BQFEVPCQ.js";var w=[{path:"about",component:C},{path:"contact",component:M},{path:"countries",loadChildren:()=>import("./chunk-KLVQQE3C.js").then(t=>t.CountriesModule)},{path:"**",redirectTo:"countries"}],A=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=r({type:t});static \u0275inj=e({imports:[a.forRoot(w),a]})}return t})();var b=(()=>{class t{title="countryApp";static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(o,N){o&1&&(n(0,"div",0)(1,"div",1),m(2,"shared-sidebar"),p(),n(3,"div",2),m(4,"router-outlet"),p()())},dependencies:[f,g]})}return t})();var y=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=r({type:t,bootstrap:[b]});static \u0275inj=e({providers:[s()],imports:[u,A,v,l]})}return t})();d().bootstrapModule(y,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
