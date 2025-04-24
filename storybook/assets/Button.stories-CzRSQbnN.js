import{j as v}from"./jsx-runtime-Cf8x2fCZ.js";import{R as S}from"./index-BlmOqGMO.js";import{c as j,a as B}from"./argTypes-rA3dWJSf.js";import{m as P}from"./mergeClass-CBCMtIUI.js";import"./index-yBjzXJbu.js";const R=j({base:"inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",variants:{kind:{primary:"bg-primary-main text-white hover:bg-primary-sub focus:ring-primary-main",secondary:"bg-secondary-main text-white hover:bg-secondary-sub focus:ring-secondary-main",outline:"bg-transparent border border-primary-main text-primary-main hover:bg-primary-main/10 focus:ring-primary-main",plain:"bg-transparent text-inherit hover:bg-transparent focus:ring-0"},size:{sm:"px-2 py-1 text-sm rounded",md:"px-4 py-2 rounded-md",lg:"px-6 py-3 rounded-lg"}},defaultVariants:{kind:"primary",size:"md"}}),s=S.forwardRef(({kind:f,size:h,className:x,...k},z)=>v.jsx("button",{ref:z,className:P(R({kind:f,size:h}),x),...k}));s.displayName="Button";s.__docgenInfo={description:"",methods:[],displayName:"Button"};const E={title:"Components/Button",component:s,argTypes:B},r={args:{kind:"primary",size:"md",children:"버튼"}},e={args:{kind:"secondary",size:"md",children:"버튼"}},n={args:{kind:"outline",size:"md",children:"버튼"}},a={args:{kind:"plain",size:"md",children:"버튼"}};var i,o,t;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    kind: 'primary',
    size: 'md',
    children: '버튼'
  }
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var m,d,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    kind: 'secondary',
    size: 'md',
    children: '버튼'
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    kind: 'outline',
    size: 'md',
    children: '버튼'
  }
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    kind: 'plain',
    size: 'md',
    children: '버튼'
  }
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const T=["Primary","Secondary","Outline","Plain"];export{n as Outline,a as Plain,r as Primary,e as Secondary,T as __namedExportsOrder,E as default};
