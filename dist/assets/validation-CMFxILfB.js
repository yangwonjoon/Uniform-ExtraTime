import{r as a,j as o}from"./index-0d2ZcZCT.js";import{c as n}from"./utils-CHtjtCvc.js";const i=a.forwardRef(({className:t,type:e,...s},r)=>o.jsx("input",{type:e,className:n("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...s}));i.displayName="Input";const d=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t),u=t=>t.length<10?!1:[/[A-Z]/.test(t),/[a-z]/.test(t),/[0-9]/.test(t),/[\W_]/.test(t)].filter(Boolean).length>=2,f=t=>/.+/.test(t),m=t=>t.trim()!=="",b=t=>{const e=parseFloat(t);return!Number.isNaN(e)&&e>0},g=t=>t.trim().length>10,p=t=>/^010-\d{4}-\d{4}$/.test(t);export{i as I,p as a,d as b,u as c,m as d,b as e,g as f,f as v};