import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{r as t,R as _}from"./index-D4H_InIO.js";import{c as E,t as y}from"./index-DJ26ghjZ.js";import{C as M,a as $}from"./chevron-up-CImWT_yG.js";import"./createLucideIcon-BSUWg1y8.js";const K=E({base:"flex items-center justify-between w-full px-4 py-2 rounded-md transition-colors cursor-pointer",variants:{kind:{primary:"bg-primary-base text-primary-main hover:bg-primary-main hover:text-white",secondary:"bg-secondary-base text-secondary-main hover:bg-secondary-main hover:text-white",plain:"bg-gray-100 text-gray-800 hover:bg-gray-200"},isOpen:{true:"rounded-b-none",false:""}},defaultVariants:{kind:"primary",isOpen:!1}}),U=E({base:"transition-all duration-300 ease-in-out overflow-hidden",variants:{kind:{primary:"bg-white border border-primary-base",secondary:"bg-white border border-secondary-base",plain:"bg-white border border-brand-base"},isOpen:{true:"opacity-100",false:"opacity-0 max-h-0"}},defaultVariants:{kind:"primary",isOpen:!1}}),a=({triggerText:c="Toggle Content",children:u,defaultOpen:I=!1,kind:g="primary"})=>{const[r,q]=t.useState(I),[H,P]=t.useState(0),d=t.useRef(null),m=_.useId(),f=()=>q(n=>!n);return t.useEffect(()=>{d.current&&P(d.current.scrollHeight)},[u,r]),e.jsxs("div",{className:"w-[500px]",children:[e.jsxs("div",{onClick:f,className:y(K({kind:g,isOpen:r})),role:"button","aria-expanded":r,"aria-controls":`${m}-content`,tabIndex:0,onKeyDown:n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),f())},children:[e.jsx("span",{children:c}),r?e.jsx(M,{className:"h-5 w-5"}):e.jsx($,{className:"h-5 w-5"})]}),e.jsx("div",{ref:d,className:y(U({kind:g,isOpen:r})),style:{maxHeight:r?`${H}px`:"0px"},id:`${m}-content`,role:"region","aria-labelledby":m,children:e.jsx("div",{className:"px-4 py-2",children:u})})]})};a.displayName="Collapsible";a.__docgenInfo={description:"",methods:[],displayName:"Collapsible",props:{triggerText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Toggle Content'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},kind:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'plain'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'plain'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}}};const J={title:"Components/Collapsible",component:a,args:{triggerText:"Toggle Content",children:"This is the collapsible content. Click the trigger to toggle visibility.",kind:"primary",defaultOpen:!1},argTypes:{kind:{control:{type:"inline-radio"},options:["primary","secondary","plain"]},triggerText:{control:{type:"text"}},children:{control:{type:"text"}},defaultOpen:{control:{type:"boolean"}}},decorators:[c=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(c,{})})]},s={args:{kind:"primary"}},o={args:{kind:"secondary"}},i={args:{kind:"plain"}},l={args:{defaultOpen:!0}},p={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{triggerText:"Section 1",kind:"plain",defaultOpen:!0,children:"Content for Section 1"}),e.jsx(a,{triggerText:"Section 2",kind:"plain",defaultOpen:!1,children:"Content for Section 2"}),e.jsx(a,{triggerText:"Section 3",kind:"plain",defaultOpen:!1,children:"Content for Section 3"})]})};var b,x,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    kind: 'primary'
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var C,v,k;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    kind: 'secondary'
  }
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var O,S,T;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    kind: 'plain'
  }
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,w,N;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...(N=(w=l.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var R,V,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Collapsible triggerText="Section 1" kind="plain" defaultOpen={true}>
        Content for Section 1
      </Collapsible>
      <Collapsible triggerText="Section 2" kind="plain" defaultOpen={false}>
        Content for Section 2
      </Collapsible>
      <Collapsible triggerText="Section 3" kind="plain" defaultOpen={false}>
        Content for Section 3
      </Collapsible>
    </div>
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const L=["Primary","Secondary","Plain","DefaultOpen","MultipleCollapsible"];export{l as DefaultOpen,p as MultipleCollapsible,i as Plain,s as Primary,o as Secondary,L as __namedExportsOrder,J as default};
