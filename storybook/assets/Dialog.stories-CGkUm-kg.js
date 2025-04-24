import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{c as k,a as v}from"./argTypes-rA3dWJSf.js";import{m as h}from"./mergeClass-CBCMtIUI.js";import"./index-yBjzXJbu.js";const C=k({base:"fixed inset-0 flex items-center justify-center bg-black/40",variants:{kind:{primary:"",secondary:"",outline:"",plain:""},size:{sm:"p-4",md:"p-6",lg:"p-8"}},defaultVariants:{kind:"primary",size:"md"}}),o=({open:m,onClose:c,kind:l,size:u,className:g,children:f,...y})=>m?s.jsx("div",{className:h(C({kind:l,size:u}),g),onClick:c,...y,children:s.jsx("div",{className:"bg-white rounded-md shadow-xl",onClick:x=>x.stopPropagation(),children:f})}):null;o.displayName="Dialog";o.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["VariantProps"]};const N={title:"Components/Dialog",component:o,argTypes:{open:{control:"boolean"},...v}},e={args:{open:!0,kind:"primary",size:"md",children:s.jsx("div",{children:"대화상자 내용"})}},r={args:{open:!1}};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    open: true,
    kind: 'primary',
    size: 'md',
    children: <div>대화상자 내용</div>
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var t,p,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    open: false
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const T=["Open","Closed"];export{r as Closed,e as Open,T as __namedExportsOrder,N as default};
