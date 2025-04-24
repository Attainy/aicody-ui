import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{R as c}from"./index-BlmOqGMO.js";import{c as y,a as b}from"./argTypes-rA3dWJSf.js";import{m as g}from"./mergeClass-CBCMtIUI.js";import"./index-yBjzXJbu.js";const u=y({base:"w-full border rounded-md transition-colors",variants:{kind:{primary:"border-primary-main bg-primary-main/10 hover:bg-primary-main/20 text-primary-main",secondary:"border-secondary-main bg-secondary-main/10 hover:bg-secondary-main/20 text-secondary-main",outline:"border-primary-main bg-transparent hover:bg-primary-main/10 text-primary-main",plain:"border-none bg-transparent text-inherit hover:bg-transparent"},size:{sm:"p-2 text-sm",md:"p-4",lg:"p-6 text-lg"}},defaultVariants:{kind:"primary",size:"md"}}),e=c.forwardRef(({kind:m,size:o,className:t,children:d,...p},l)=>r.jsx("details",{ref:l,className:g(u({kind:m,size:o}),t),...p,children:d}));e.displayName="Collapsible";e.__docgenInfo={description:"",methods:[],displayName:"Collapsible"};const C={title:"Components/Collapsible",component:e,argTypes:b},a={args:{kind:"primary",size:"md",children:r.jsxs(r.Fragment,{children:[r.jsx("summary",{children:"접기/펼치기"}),r.jsx("div",{children:"숨겨진 내용"})]})}};var s,n,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    kind: 'primary',
    size: 'md',
    children: <>
        <summary>접기/펼치기</summary>
        <div>숨겨진 내용</div>
      </>
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,C as default};
