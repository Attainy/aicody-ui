import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as y}from"./index-D4H_InIO.js";import{c as k,t as n}from"./index-DJ26ghjZ.js";const te=k({variants:{size:{sm:"h-4 w-7",md:"h-5 w-9",lg:"h-6 w-11"},kind:{primary:"focus:ring-primary-main",secondary:"focus:ring-secondary-main",plain:"focus:ring-brand-black"},checked:{true:"",false:"bg-gray-300"},disabled:{true:"opacity-50 cursor-not-allowed",false:""}},compoundVariants:[{kind:"primary",checked:!0,class:"bg-primary-main"},{kind:"secondary",checked:!0,class:"bg-secondary-main"},{kind:"plain",checked:!0,class:"bg-brand-black"}],defaultVariants:{size:"md",kind:"primary",checked:!1,disabled:!1}}),ce=k({variants:{size:{sm:"h-3 w-3 left-0.5",md:"h-4 w-4 left-0.5",lg:"h-5 w-5 left-[3px]"},checked:{true:"",false:"translate-x-0"}},compoundVariants:[{size:"sm",checked:!0,class:"translate-x-3"},{size:"md",checked:!0,class:"translate-x-4"},{size:"lg",checked:!0,class:"translate-x-5"}],defaultVariants:{size:"md",checked:!1}}),ie=k({variants:{size:{sm:"text-xs",md:"text-sm",lg:"text-base"}},defaultVariants:{size:"md"}}),f=y.forwardRef(({size:a="md",kind:Y="primary",checked:h,onCheckedChange:g,className:Z,label:b,id:ee,disabled:r,...w},ae)=>{const[re,se]=y.useState(h??!1),S=ee||`switch-${y.useId()}`,x=h!==void 0,s=x?h:re,ne=v=>{if(r)return;const z=v.target.checked;x||se(z),g==null||g(z,v)};return e.jsxs("label",{htmlFor:S,className:n("inline-flex items-center",r?"cursor-not-allowed":"cursor-pointer"),children:[e.jsx("input",{type:"checkbox",id:S,ref:ae,checked:s,onChange:ne,className:"sr-only",disabled:r,"aria-checked":s,"aria-label":w["aria-label"]??(b||"Toggle switch"),...w}),e.jsx("span",{className:n("relative inline-flex items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",te({size:a,kind:Y,checked:s,disabled:r}),Z),children:e.jsx("span",{className:n("absolute bg-white rounded-full transition-transform duration-200 ease-in-out",ce({size:a,checked:s}))})}),b&&e.jsx("span",{className:n("ml-2 text-sm font-medium text-brand-black",ie({size:a})),children:b})]})});f.displayName="Switch";f.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},kind:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'plain'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'plain'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:""},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  checked: boolean,
  event: React.ChangeEvent<HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const me={title:"Components/Switch",component:f,args:{size:"md",kind:"primary",label:"Toggle Switch"},argTypes:{kind:{control:{type:"inline-radio"},options:["primary","secondary","plain"]},size:{control:{type:"inline-radio"},options:["sm","md","lg"]},checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},label:{control:{type:"text"}}},decorators:[a=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{})})]},t={args:{kind:"primary",label:"Primary Switch"}},c={args:{kind:"secondary",label:"Secondary Switch"}},i={args:{kind:"plain",label:"Plain Switch"}},l={args:{size:"sm",label:"Small Switch"}},o={args:{size:"md",label:"Medium Switch"}},d={args:{size:"lg",label:"Large Switch"}},m={args:{checked:!0,label:"Checked Switch"}},u={args:{disabled:!0,label:"Disabled Switch"}},p={args:{disabled:!0,checked:!0,label:"Disabled & Checked Switch"}};var C,T,V;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    kind: 'primary',
    label: 'Primary Switch'
  }
}`,...(V=(T=t.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var j,D,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    kind: 'secondary',
    label: 'Secondary Switch'
  }
}`,...(E=(D=c.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var M,P,I;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    kind: 'plain',
    label: 'Plain Switch'
  }
}`,...(I=(P=i.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var L,N,R;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small Switch'
  }
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var q,_,H;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium Switch'
  }
}`,...(H=(_=o.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var O,F,$;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large Switch'
  }
}`,...($=(F=d.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var A,B,G;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Checked Switch'
  }
}`,...(G=(B=m.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled Switch'
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true,
    label: 'Disabled & Checked Switch'
  }
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ue=["Primary","Secondary","Plain","Small","Medium","Large","Checked","Disabled","DisabledChecked"];export{m as Checked,u as Disabled,p as DisabledChecked,d as Large,o as Medium,i as Plain,t as Primary,c as Secondary,l as Small,ue as __namedExportsOrder,me as default};
