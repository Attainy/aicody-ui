import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{R as n}from"./index-D4H_InIO.js";import{c as V,t as _}from"./index-DJ26ghjZ.js";const I=V({variants:{ratio:{square:"aspect-[1/1]",video:"aspect-[16/9]",photo:"aspect-[4/3]"}},defaultVariants:{ratio:"video"}}),w=""+new URL("defaultAspectRatio-C_FVjU4R.jpg",import.meta.url).href,i=n.forwardRef(({ratio:s,className:y,children:c,defaultImage:S,...q},A)=>{const C=n.Children.count(c)>0,N=S??w;return e.jsx("div",{ref:A,className:_("relative w-full min-w-[300px] overflow-hidden",I({ratio:s}),y),...q,children:e.jsx("div",{className:"absolute top-0 left-0 h-full w-full",children:C?c:e.jsx("img",{src:N,alt:"Default Photo",className:"h-full w-full object-cover"})})})});i.displayName="AspectRatio";i.__docgenInfo={description:"",methods:[],displayName:"AspectRatio"};const U={title:"Components/AspectRatio",component:i,decorators:[s=>e.jsx("div",{style:{width:300,border:"1px solid #ddd"},children:e.jsx(s,{})})],args:{ratio:"video",defaultImage:w},argTypes:{ratio:{control:{type:"inline-radio"},options:["square","video","photo"]},defaultImage:{control:{type:"file"}},children:{control:{type:"text"}}}},o={args:{ratio:"square"}},r={args:{ratio:"video"}},a={args:{ratio:"photo"}},t={};var d,p,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ratio: 'square' // 명시적 설정 추가
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,u,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ratio: 'video'
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ratio: 'photo'
  }
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var R,x,j;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:"{}",...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const W=["Square","Video","Photo","WithoutChildren"];export{a as Photo,o as Square,r as Video,t as WithoutChildren,W as __namedExportsOrder,U as default};
