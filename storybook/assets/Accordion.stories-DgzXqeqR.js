import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{R as p}from"./index-BlmOqGMO.js";import{m as l}from"./mergeClass-CBCMtIUI.js";import{c as y,a as g}from"./argTypes-rA3dWJSf.js";import"./index-yBjzXJbu.js";const b=y({base:"w-full border rounded-md transition-colors",variants:{kind:{primary:"border-primary-main bg-primary-main/10 text-primary-main hover:bg-primary-main/20",secondary:"border-secondary-main bg-secondary-main/10 text-secondary-main hover:bg-secondary-main/20",outline:"border-primary-main bg-transparent text-primary-main hover:bg-primary-main/10",plain:"border-none bg-transparent text-inherit hover:bg-transparent"},size:{sm:"p-2 text-sm",md:"p-4",lg:"p-6 text-lg"}},defaultVariants:{kind:"primary",size:"md"}}),e=p.forwardRef(({kind:s,size:m,className:t,...d},c)=>r.jsx("details",{ref:c,className:l(b({kind:s,size:m}),t),...d}));e.displayName="Accordion";e.__docgenInfo={description:"",methods:[],displayName:"Accordion"};const j={title:"Components/Accordion",component:e,argTypes:g},a={args:{kind:"primary",size:"md",children:r.jsxs(r.Fragment,{children:[r.jsx("summary",{children:"아코디언 제목"}),r.jsx("div",{children:"아코디언 내용"})]})}};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    kind: 'primary',
    size: 'md',
    children: <>
        <summary>아코디언 제목</summary>
        <div>아코디언 내용</div>
      </>
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const A=["Default"];export{a as Default,A as __namedExportsOrder,j as default};
