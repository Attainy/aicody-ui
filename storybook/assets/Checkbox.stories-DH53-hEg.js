import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{R as h}from"./index-BlmOqGMO.js";import{c as f,a as k}from"./argTypes-rA3dWJSf.js";import{m as n}from"./mergeClass-CBCMtIUI.js";import"./index-yBjzXJbu.js";const g=f({base:"inline-flex items-center gap-2 cursor-pointer",variants:{kind:{primary:"",secondary:"",outline:"",plain:""},size:{sm:"text-sm",md:"text-base",lg:"text-lg"}},defaultVariants:{kind:"primary",size:"md"}}),t=h.forwardRef(({kind:e,size:y,label:o,className:x,...u},b)=>s.jsxs("label",{className:n(g({kind:e,size:y}),x),children:[s.jsx("input",{type:"checkbox",ref:b,className:n("h-4 w-4 rounded border focus:ring-primary-main",e==="primary"?"border-primary-main text-primary-main":e==="secondary"?"border-secondary-main text-secondary-main":e==="outline"?"border-primary-main text-primary-main":"border-transparent text-inherit"),...u}),o&&s.jsx("span",{children:o})]}));t.displayName="Checkbox";t.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit","VariantProps"]};const _={title:"Components/Checkbox",component:t,argTypes:k},r={args:{kind:"primary",size:"md",label:"체크박스 라벨",checked:!1}},a={args:{kind:"primary",size:"md",label:"체크된 상태",checked:!0}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    kind: 'primary',
    size: 'md',
    label: '체크박스 라벨',
    checked: false
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    kind: 'primary',
    size: 'md',
    label: '체크된 상태',
    checked: true
  }
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const w=["Default","Checked"];export{a as Checked,r as Default,w as __namedExportsOrder,_ as default};
