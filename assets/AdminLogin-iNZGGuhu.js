import{d as s,u as o,r as m,al as l,j as e,am as d,b as u,an as p}from"./index-DPAlgBSY.js";import{u as c}from"./index-CzE5ocB5.js";import{C as h}from"./Container-nILuM4Z0.js";import{P as x}from"./Modal-DxxNvPa-.js";import{T as f}from"./Typography-CpCffKiV.js";import{T as g}from"./TextField-ors3nFoh.js";import{B as y}from"./Button-B4A8DecB.js";import"./isMuiElement-B7JLx7nT.js";import"./Menu-vXmcSy6l.js";const E=()=>{const{isAdmin:i}=s(r=>r.auth),t=o(),a=c(""),n=r=>{r.preventDefault(),t(p(a.value))};return m.useEffect(()=>{t(l())},[t]),i?e.jsx(d,{to:"/admin/dashboard"}):e.jsx("div",{style:{backgroundImage:u},children:e.jsx(h,{component:"main",maxWidth:"xs",sx:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs(x,{elevation:3,sx:{padding:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(f,{variant:"h5",children:"Admin Login"}),e.jsxs("form",{style:{width:"100%",marginTop:"1rem"},onSubmit:n,children:[e.jsx(g,{required:!0,fullWidth:!0,label:"Secret Key",type:"password",margin:"normal",variant:"outlined",value:a.value,onChange:a.changeHandler}),e.jsx(y,{sx:{marginTop:"1rem"},variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Login"})]})]})})})};export{E as default};
