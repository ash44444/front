import{j as s,D as p,ak as j,d as g,r as u,am as M,a7 as i,g as I,aH as b,u as v,S as n,ai as H,aI as f}from"./index-DPAlgBSY.js";import{B as k,M as C,D as V}from"./Menu-yFgrmoKM.js";import{M as z}from"./IconButton-Rg8D1abI.js";import{c,T as h}from"./Typography-CpCffKiV.js";import{E as L}from"./ExitToApp-D6jdU8bl.js";const w=c(s.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),y=c(s.jsx("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"}),"Dashboard"),D=c(s.jsx("path",{d:"M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91M4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29M20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3"}),"Groups"),A=c([s.jsx("circle",{cx:"10",cy:"8",r:"4"},"0"),s.jsx("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98M20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},"1")],"ManageAccounts"),S=c(s.jsx("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"}),"Message"),m=p(j)`
  text-decoration: none;
  border-radius: 2rem;
  padding: 1rem 2rem;
  color: black;
  &:hover {
    color: rgba(0, 0, 0, 0.54);
  }
`,T=[{name:"Dashboard",path:"/admin/dashboard",icon:s.jsx(y,{})},{name:"Users",path:"/admin/users",icon:s.jsx(A,{})},{name:"Chats",path:"/admin/chats",icon:s.jsx(D,{})},{name:"Messages",path:"/admin/messages",icon:s.jsx(S,{})}],l=({w:r="100%"})=>{const t=b(),a=v(),e=()=>{a(f())};return s.jsxs(n,{width:r,direction:"column",p:"3rem",spacing:"3rem",children:[s.jsx(h,{variant:"h5",textTransform:"uppercase",children:"Chattu"}),s.jsxs(n,{spacing:"1rem",children:[T.map(o=>s.jsx(m,{to:o.path,sx:t.pathname===o.path&&{bgcolor:H,color:"white",":hover":{color:"white"}},children:s.jsxs(n,{direction:"row",alignItems:"center",spacing:"1rem",children:[o.icon,s.jsx(h,{children:o.name})]})},o.path)),s.jsx(m,{onClick:e,children:s.jsxs(n,{direction:"row",alignItems:"center",spacing:"1rem",children:[s.jsx(L,{}),s.jsx(h,{children:"Logout"})]})})]})]})},R=({children:r})=>{const{isAdmin:t}=g(x=>x.auth),[a,e]=u.useState(!1),o=()=>e(!a),d=()=>e(!1);return t?s.jsxs(i,{container:!0,minHeight:"100vh",children:[s.jsx(k,{sx:{display:{xs:"block",md:"none"},position:"fixed",right:"1rem",top:"1rem"},children:s.jsx(z,{onClick:o,children:a?s.jsx(w,{}):s.jsx(C,{})})}),s.jsx(i,{item:!0,md:4,lg:3,sx:{display:{xs:"none",md:"block"}},children:s.jsx(l,{})}),s.jsx(i,{item:!0,xs:12,md:8,lg:9,sx:{bgcolor:I},children:r}),s.jsx(V,{open:a,onClose:d,children:s.jsx(l,{w:"50vw"})})]}):s.jsx(M,{to:"/admin"})};export{R as A,S as M};
