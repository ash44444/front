import{u as S,d as y,aX as C,r as D,j as e,S as o,v as k,b2 as E,aj as H}from"./index-DPAlgBSY.js";import{U as T}from"./UserItem-DhDGDGJ0.js";import{b as v,a as w}from"./Menu-yFgrmoKM.js";import{D as B,a as F}from"./DialogTitle-C-OEUpIA.js";import{T as I}from"./Typography-CpCffKiV.js";import{B as c}from"./Button-B4A8DecB.js";import"./ListItem-DnuMBu9S.js";import"./Menu-vXmcSy6l.js";import"./Modal-DxxNvPa-.js";import"./isMuiElement-B7JLx7nT.js";import"./Avatar-DsBU-ydw.js";import"./IconButton-Rg8D1abI.js";import"./Delete-BWw4RSpC.js";const P=({chatId:n})=>{var d,m;const l=S(),{isAddMember:p}=y(s=>s.misc),{isLoading:u,data:r,isError:b,error:x}=C(n),[g,h]=v(E),[a,j]=D.useState([]),M=s=>{j(i=>i.includes(s)?i.filter(A=>A!==s):[...i,s])},t=()=>{l(H(!1))},f=()=>{g("Adding Members...",{members:a,chatId:n}),t()};return w([{isError:b,error:x}]),e.jsx(B,{open:p,onClose:t,children:e.jsxs(o,{p:"2rem",width:"20rem",spacing:"2rem",children:[e.jsx(F,{textAlign:"center",children:"Add Member"}),e.jsx(o,{spacing:"1rem",children:u?e.jsx(k,{}):((d=r==null?void 0:r.friends)==null?void 0:d.length)>0?(m=r==null?void 0:r.friends)==null?void 0:m.map(s=>e.jsx(T,{user:s,handler:M,isAdded:a.includes(s._id)},s._id)):e.jsx(I,{textAlign:"center",children:"No Friends"})}),e.jsxs(o,{direction:"row",alignItems:"center",justifyContent:"space-evenly",children:[e.jsx(c,{color:"error",onClick:t,children:"Cancel"}),e.jsx(c,{onClick:f,variant:"contained",disabled:h,children:"Submit Changes"})]})]})})};export{P as default};