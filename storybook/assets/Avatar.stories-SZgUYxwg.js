import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{R as g}from"./index-BlmOqGMO.js";import{m as v}from"./mergeClass-CBCMtIUI.js";import"./index-yBjzXJbu.js";const h={sm:"h-8 w-8 text-sm",md:"h-10 w-10",lg:"h-14 w-14 text-lg"},r=g.forwardRef(({fallback:i,size:p="md",className:u,...t},f)=>s.jsx("div",{ref:f,className:v("relative inline-block overflow-hidden rounded-full bg-brand-gray",h[p],u),children:t.src?s.jsx("img",{...t,className:"h-full w-full object-cover"}):s.jsx("span",{className:"flex h-full w-full items-center justify-center",children:i})}));r.displayName="Avatar";r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{fallback:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const j={title:"Components/Avatar",component:r,argTypes:{size:{control:"select",options:["sm","md","lg"]}}},e={args:{size:"md",src:"https://via.placeholder.com/80",alt:"아바타"}},a={args:{size:"md",fallback:"AB"}};var l,o,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'md',
    src: 'https://via.placeholder.com/80',
    alt: '아바타'
  }
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var c,n,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'md',
    fallback: 'AB'
  }
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const y=["Image","Fallback"];export{a as Fallback,e as Image,y as __namedExportsOrder,j as default};
