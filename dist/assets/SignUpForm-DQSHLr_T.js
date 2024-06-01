import{D as u,E as h,G as g,H as o,I as x,k as w,d as N,J as b,u as A,r as m,j as a}from"./index-0d2ZcZCT.js";import{b as j,c as S,v as p,I as l}from"./validation-CMFxILfB.js";const v=async(r,e)=>{const t=await u(o,r,e);await h(o,g),await x(o);const{uid:i}=t.user;return i},C=async(r,e)=>{const t=w(N,"users",r);return await b(t,{email:e.email,name:e.name,nickname:e.nickname,isSeller:e.isSeller,createdAt:e.createdAt,updatedAt:e.updatedAt}),t},E=r=>{const e=new Date,t=A(),[i,s]=m.useState(""),[n,d]=m.useState({email:"",password:"",name:"",nickname:"",isSeller:r,createdAt:e,updatedAt:e});return{signUpFormData:n,setSignUpFormData:d,msg:i,signUp:async()=>{if(!j(n.email)){s("email 형식에 맞춰 주세요");return}if(!S(n.password)){s("비밀번호는 영어 대문자, 소문자, 숫자, 특수문자 중 2종류 문자 조합으로 구성해주세요");return}if(!p(n.name)){s("이름을 입력해주세요");return}if(!p(n.nickname)){s("닉네임을 입력해주세요");return}try{const c=await v(n.email,n.password);await C(c,n),alert("회원가입에 성공하였습니다!"),t("/login")}catch{s("회원가입이 실패하였습니다")}},inputChange:c=>{d({...n,[c.target.name]:c.target.value})}}},M=({isSeller:r,name:e})=>{const{msg:t,signUp:i,inputChange:s}=E(r);return a.jsxs("div",{className:"pt-24 pl-16 pr-16",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"text-2xl pl-3",children:[e," SignUp"]}),a.jsx("hr",{className:"border-t-2 border-black my-4"})]}),a.jsxs("div",{className:"p-10 pl-6 pr-6",children:[a.jsx(l,{type:"EMAIL",name:"email",placeholder:"EMAIL",className:"w-5/6 h-12 mb-6 border-0",onChange:s}),a.jsx(l,{type:"PASSWORD",name:"password",placeholder:"PASSWORD",className:"w-5/6 h-12 mb-6 border-0",onChange:s}),a.jsx(l,{type:"NAME",name:"name",placeholder:"NAME",className:"w-5/6 h-12 mb-6 border-0",onChange:s}),a.jsx(l,{type:"NICKNAME",name:"nickname",placeholder:"NICKNAME",className:"w-5/6 h-12 mb-6 border-0",onChange:s}),a.jsxs("div",{className:"text-center pt-5",children:[t&&a.jsx("p",{className:"text-red-500 pb-5",children:t}),a.jsx("button",{type:"button",className:"bg-main w-32 h-12 rounded-md text-white",onClick:i,children:"회원가입"})]})]})]})};export{M as S};