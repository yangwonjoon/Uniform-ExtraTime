import{E as u,K as p,k as g,d as h,l as x,G as b,H as c,u as m,e as w,r as l,j as e}from"./index-0d2ZcZCT.js";import{b as j,c as v,I as d}from"./validation-CMFxILfB.js";import"./utils-CHtjtCvc.js";const N=async(r,o)=>{await u(c,b);const s=await p(c,r,o),{user:a}=s;if(a){const i=g(h,"users",a.uid),n=await x(i);if(n.exists())return{uid:a.uid,...n.data()}}else console.log("loginUser error")},f=()=>{const r=m(),o=w(t=>t.setUser),[s,a]=l.useState({email:"",password:""}),[i,n]=l.useState("");return{formData:s,setFormData:a,msg:i,login:async()=>{if(!j(s.email)){n("이메일을 다시 확인해주세요");return}if(!v(s.password)){n("비밀번호를 다시 확인해주세요");return}try{const t=await N(s.email,s.password);o(t),r("/")}catch(t){console.error(t),n("로그인 실패")}},inputChange:t=>{a({...s,[t.target.name]:t.target.value})}}},P=()=>{const{msg:r,login:o,inputChange:s}=f(),a=m();return e.jsxs("div",{className:"seller-container pt-32 pl-16 pr-16",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl pl-3",children:"Login"}),e.jsx("hr",{className:"border-t-2 border-black my-4"})]}),e.jsxs("div",{className:"p-10 pl-6 pr-6",children:[e.jsx(d,{type:"EMAIL",name:"email",placeholder:"EMAIL",className:"w-5/6 h-12 mb-6 border-0",onChange:s}),e.jsx(d,{type:"PASSWORD",name:"password",placeholder:"PASSWORD",className:"w-5/6 h-12 mb-6 border-0",onChange:s}),e.jsxs("div",{className:"text-center pt-5",children:[r&&e.jsx("p",{className:"text-red-500 pb-5",children:r}),e.jsx("button",{type:"button",className:"bg-main w-32 h-12 rounded-md text-white",onClick:o,children:"로그인"}),e.jsx("p",{className:"mt-3 text-xs hover:text-sm hover:font-bold cursor-pointer",onClick:()=>a("/signup"),children:"Join Us?"})]})]})]})};export{P as default};