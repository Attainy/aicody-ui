import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{R as x}from"./index-BlmOqGMO.js";import{c as k,a as b}from"./argTypes-rA3dWJSf.js";import{m as i}from"./mergeClass-CBCMtIUI.js";import"./index-yBjzXJbu.js";const S=k({base:"inline-flex items-center cursor-pointer transition-colors focus:outline-none",variants:{kind:{primary:"",secondary:"",outline:"",plain:""},size:{sm:"h-4 w-8",md:"h-5 w-10",lg:"h-6 w-12"}},defaultVariants:{kind:"primary",size:"md"}}),n=x.forwardRef(({kind:f,size:r,checked:e,onCheckedChange:t,className:g,...y},h)=>{const w=r==="sm"?"translate-x-4":r==="lg"?"translate-x-6":"translate-x-5";return o.jsx("button",{ref:h,role:"switch","aria-checked":e,onClick:()=>t==null?void 0:t(!e),className:i(S({kind:f,size:r}),e?"bg-primary-main":"bg-gray-200",g),...y,children:o.jsx("span",{className:i("bg-white rounded-full transition-transform",r==="sm"?"h-3 w-3":r==="lg"?"h-5 w-5":"h-4 w-4",e?w:"translate-x-1")})})});n.displayName="Switch";n.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""}},composes:["VariantProps"]};const v={title:"Components/Switch",component:n,argTypes:{checked:{control:"boolean"},...b}},s={args:{kind:"primary",size:"md",checked:!1}},a={args:{kind:"primary",size:"md",checked:!0}};var m,c,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    kind: 'primary',
    size: 'md',
    checked: false
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,l,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    kind: 'primary',
    size: 'md',
    checked: true
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const V=["Off","On"];export{s as Off,a as On,V as __namedExportsOrder,v as default};
