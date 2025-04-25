import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as p}from"./index-D4H_InIO.js";import{c as X,t as x}from"./index-DJ26ghjZ.js";const Y=X({variants:{kind:{primary:"focus-visible:ring-primary-main",secondary:"focus-visible:ring-secondary-main",outline:"bg-brand-white focus-visible:ring-primary-main",plain:"focus-visible:ring-brand-black"},size:{sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6"},shape:{rounded:"rounded",square:"rounded-none"},disabled:{true:"opacity-50 cursor-not-allowed",false:""}},compoundVariants:[{kind:"primary",class:["checked:bg-primary-main","checked:border-primary-main",'checked:before:content-["✓"]',"checked:before:absolute","checked:before:inset-0","checked:before:flex","checked:before:items-center","checked:before:justify-center","checked:before:text-white"].join(" ")},{kind:"secondary",class:["checked:bg-secondary-main","checked:border-secondary-main",'checked:before:content-["✓"]',"checked:before:absolute","checked:before:inset-0","checked:before:flex","checked:before:items-center","checked:before:justify-center","checked:before:text-white"].join(" ")},{kind:"plain",class:["checked:bg-brand-black","checked:border-brand-black",'checked:before:content-["✓"]',"checked:before:absolute","checked:before:inset-0","checked:before:flex","checked:before:items-center","checked:before:justify-center","checked:before:text-white"].join(" ")},{kind:"outline",class:['checked:before:content-["✓"]',"checked:before:absolute","checked:before:inset-0","checked:before:flex","checked:before:items-center","checked:before:justify-center","checked:before:text-brand-black"].join(" ")}],defaultVariants:{kind:"primary",size:"md",disabled:!1}}),h=p.forwardRef(({kind:l="primary",size:G="md",shape:H="rounded",label:r,className:J,disabled:s,checked:u,onChange:m,...b},K)=>{const[L,Q]=p.useState(u??!1),k=p.useId(),f=u!==void 0,y=f?u:L,U=g=>{if(s)return;const W=g.target.checked;f||Q(W),m==null||m(g)};return e.jsxs("label",{htmlFor:k,className:x("inline-flex items-center gap-2",s?"cursor-not-allowed":"cursor-pointer","text-brand-black"),children:[e.jsx("input",{type:"checkbox",id:k,ref:K,checked:y,onChange:U,className:x("appearance-none relative inline-flex items-center justify-center","border border-brand-black transition-colors duration-200","focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1",Y({kind:l,size:G,shape:H,disabled:s}),J),disabled:s,"aria-checked":y,"aria-label":b["aria-label"]??(typeof r=="string"?r:"Checkbox"),...b}),r&&e.jsx("span",{children:r})]})});h.displayName="Checkbox";h.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},kind:{defaultValue:{value:"'primary'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},shape:{defaultValue:{value:"'rounded'",computed:!1},required:!1}},composes:["Omit","VariantProps"]};const re={title:"Components/Checkbox",component:h,args:{kind:"primary",size:"md",label:"Check me"},argTypes:{kind:{control:{type:"inline-radio"},options:["primary","secondary","outline","plain"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},shape:{control:{type:"inline-radio"},options:["rounded","square"]},label:{control:"text"},checked:{control:"boolean"},disabled:{control:"boolean"}},decorators:[l=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(l,{})})]},a={args:{kind:"primary",size:"md",shape:"rounded"}},n={args:{kind:"secondary",size:"md",shape:"rounded"}},c={args:{kind:"outline",size:"md",shape:"rounded"}},o={args:{kind:"plain",size:"md",shape:"rounded"}},d={args:{checked:!0,size:"md",shape:"rounded"}},i={args:{disabled:!0,size:"md",shape:"rounded"}},t={args:{disabled:!0,checked:!0,size:"md",shape:"rounded"}};var z,j,C;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    kind: 'primary',
    size: 'md',
    shape: 'rounded'
  }
}`,...(C=(j=a.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var v,w,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    kind: 'secondary',
    size: 'md',
    shape: 'rounded'
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var R,q,N;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    kind: 'outline',
    size: 'md',
    shape: 'rounded'
  }
}`,...(N=(q=c.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var V,I,P;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    kind: 'plain',
    size: 'md',
    shape: 'rounded'
  }
}`,...(P=(I=o.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var D,O,_;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    checked: true,
    size: 'md',
    shape: 'rounded'
  }
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var T,E,F;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true,
    size: 'md',
    shape: 'rounded'
  }
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var M,A,B;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    size: 'md',
    shape: 'rounded'
  }
}`,...(B=(A=t.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const se=["Primary","Secondary","Outline","Plain","Checked","Disabled","DisabledChecked"];export{d as Checked,i as Disabled,t as DisabledChecked,c as Outline,o as Plain,a as Primary,n as Secondary,se as __namedExportsOrder,re as default};
