"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[162],{3162:function(n,e,t){t.r(e),t.d(e,{default:function(){return En}});var i,r,a,o,s,d,l,c,x,u,p,h,f,m,g,b,Z,j,y,w,v,P=t(2791),k=t(9434),z=t(6052),C=function(n){return n.contacts.items},A=function(n){return n.contacts.error},N=function(n){return n.contacts.isLoading},E=t(168),F=t(7691),M=F.ZP.div(i||(i=(0,E.Z)(["\n  max-width: 1200px;\n  padding: 5px 15px;\n  margin: 0 auto;\n"]))),_=F.ZP.h1(r||(r=(0,E.Z)(["\n  margin-bottom: 10px;\n  font-size: 40px;\n  font-weight: 700;\n"]))),S=F.ZP.h2(a||(a=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n  font-size: 26px;\n  font-weight: 700;\n"]))),I=t(5705),L=(0,F.ZP)(I.l0)(o||(o=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px 0px;\n  width: 100%;\n  margin-bottom: 10px;\n"]))),q=F.ZP.label(s||(s=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),D=F.ZP.input(d||(d=(0,E.Z)(["\n  max-width: 240px;\n  padding-left: 5px;\n  height: 24px;\n  font-size: 14px;\n  outline: none;\n  border: 2px solid grey;\n  border-radius: 3px;\n  background-color: transparent;\n"]))),J=F.ZP.span(l||(l=(0,E.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n"]))),T=F.ZP.button(c||(c=(0,E.Z)(["\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n  gap: 4px;\n  height: 28px;\n  max-width: 125px;\n  font-weight: 700;\n  font-size: 14px;\n  outline: none;\n  border: 1px solid skyblue;\n  border-radius: 4px;\n  &:hover {\n    background-color: skyblue;\n  }\n"]))),B=t(3329),V=function(){var n=(0,k.v9)(C),e=(0,k.I0)();return(0,B.jsx)(I.J9,{initialValues:{name:"",number:""},onSubmit:function(t,i){var r=i.resetForm;!function(t){if(n.find((function(n){return n.name===t.name})))return alert("".concat(t.name," is already in contacts.")),"";e((0,z.uK)(t))}(t),r()},children:function(n){return(0,B.jsxs)(L,{children:[(0,B.jsxs)(q,{children:[(0,B.jsx)(J,{children:"Name"}),(0,B.jsx)(I.gN,{as:D,type:"text",name:"name",placeholder:"Enter contacts name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoFocus:!0})]}),(0,B.jsxs)(q,{children:[(0,B.jsx)(J,{children:"Number"}),(0,B.jsx)(I.gN,{as:D,type:"tel",name:"number",placeholder:"Enter phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,B.jsx)(T,{type:"submit",children:"Add contact"})]})}})},$=t(9439),K=F.ZP.ul(x||(x=(0,E.Z)(["\n  /* list-style: circle; */\n  max-width: 520px;\n"]))),W=F.ZP.li(u||(u=(0,E.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n"]))),Y=F.ZP.p(p||(p=(0,E.Z)(["\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  font-size: 15px;\n  font-weight: 500;\n"]))),G=F.ZP.button(h||(h=(0,E.Z)(["\n  max-width: 80px;\n  height: 24px;\n  font-weight: 500;\n  font-size: 14px;\n  outline: none;\n  border: 1px solid skyblue;\n  border-radius: 4px;\n  margin-left: 15px;\n  padding: 0px 10px;\n  &:hover {\n    background-color: skyblue;\n  }\n"]))),H=F.ZP.div(f||(f=(0,E.Z)(["\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n"]))),O=t(2134),Q=function(n){var e=n.id,t=n.name,i=n.number,r=n.setModalData,a=n.toggleModal,o=(0,k.I0)();return(0,B.jsxs)(W,{children:[(0,B.jsxs)(Y,{children:[(0,B.jsx)(O.Nhm,{size:16})," ",t,": ",i]}),(0,B.jsxs)(H,{children:[(0,B.jsx)(G,{type:"button",onClick:function(){a(),r({id:e,name:t,number:i})},children:"Edit"}),(0,B.jsx)(G,{type:"button",onClick:function(){o((0,z.zY)(e))},children:"Delete"})]})]})},R=t(4164),U=F.ZP.div(m||(m=(0,E.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),X=F.ZP.div(g||(g=(0,E.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),nn=(0,F.ZP)(I.l0)(b||(b=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px 20px;\n  border: 2px solid black;\n  width: 480px;\n  height: 480px;\n  margin: 0 auto;\n  background-color: #85ffbd;\n  background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);\n"]))),en=F.ZP.label(Z||(Z=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]))),tn=F.ZP.input(j||(j=(0,E.Z)(["\n  width: 240px;\n  padding-left: 5px;\n  height: 24px;\n  font-size: 14px;\n  outline: none;\n  border: 2px solid grey;\n  border-radius: 3px;\n"]))),rn=F.ZP.span(y||(y=(0,E.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n"]))),an=F.ZP.div(w||(w=(0,E.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),on=F.ZP.button(v||(v=(0,E.Z)(["\n  padding: 0px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n  gap: 4px;\n  height: 28px;\n  max-width: 125px;\n  font-weight: 500;\n  font-size: 14px;\n  outline: none;\n  border: 1px solid skyblue;\n  border-radius: 4px;\n  &:hover {\n    background-color: skyblue;\n  }\n"])));var sn=function(n){var e=n.modalData,t=n.toggleModal,i=e.name,r=e.number,a=e.id,o=(0,k.I0)(),s=(0,P.useCallback)((function(n){n.target!==n.currentTarget&&"Escape"!==n.code||t()}),[t]);return(0,P.useEffect)((function(){return window.addEventListener("keydown",s),function(){return window.removeEventListener("keydown",s)}}),[s]),(0,R.createPortal)((0,B.jsx)(U,{onClick:s,children:(0,B.jsx)(X,{children:(0,B.jsx)(I.J9,{initialValues:{name:i,number:r,id:a},onSubmit:function(n){o((0,z.mP)(n)),t()},children:function(n){return(0,B.jsxs)(nn,{children:[(0,B.jsxs)(en,{children:[(0,B.jsx)(rn,{children:"Name"}),(0,B.jsx)(I.gN,{as:tn,type:"text",name:"name",autoFocus:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,B.jsxs)(en,{children:[(0,B.jsx)(rn,{children:"Number"}),(0,B.jsx)(I.gN,{as:tn,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,B.jsxs)(an,{children:[(0,B.jsx)(on,{type:"submit",disabled:n.isSubmitting,children:"Edit contact"}),(0,B.jsx)(on,{type:"button",disabled:n.isSubmitting,onClick:function(){return t()},children:"Cancel"})]})]})}})})}),document.querySelector("#modal"))},dn=t(6916),ln=function(n){return n.filter},cn=(0,dn.P1)([C,ln],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}));var xn,un,pn,hn,fn,mn,gn=function(){var n=(0,P.useState)({}),e=(0,$.Z)(n,2),t=e[0],i=e[1],r=(0,P.useState)(!1),a=(0,$.Z)(r,2),o=a[0],s=a[1],d=(0,k.v9)(cn),l=function(){s((function(n){return!n}))};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(K,{children:d.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,B.jsx)(Q,{id:r,name:e,number:t,setModalData:i,toggleModal:l},r)}))}),o&&(0,B.jsx)(sn,{modalData:t,toggleModal:l})]})},bn=t(1634),Zn=F.ZP.label(xn||(xn=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n"]))),jn=F.ZP.input(un||(un=(0,E.Z)(["\n  max-width: 240px;\n  height: 24px;\n  font-size: 14px;\n\n  outline: none;\n  border-radius: 3px;\n  border: 2px solid grey;\n"]))),yn=F.ZP.span(pn||(pn=(0,E.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n"]))),wn=function(){var n=(0,k.I0)(),e=(0,k.v9)(ln);return(0,B.jsxs)(Zn,{children:[(0,B.jsx)(yn,{children:"Find contacts by name"}),(0,B.jsx)(jn,{type:"text",name:"filter",value:e,onChange:function(e){n((0,bn.T)(e.target.value))}})]})},vn=t(1538),Pn=F.ZP.div(hn||(hn=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n"]))),kn=F.ZP.p(fn||(fn=(0,E.Z)(["\n  font-size: 18px;\n  font-weight: 700;\n  color: red;\n"]))),zn=F.ZP.button(mn||(mn=(0,E.Z)(["\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  height: 28px;\n  width: 115px;\n  font-weight: 600;\n  font-size: 14px;\n  outline: none;\n  border: 1px solid skyblue;\n  border-radius: 4px;\n"])));function Cn(){var n=(0,k.I0)(),e=(0,k.v9)(A);return(0,B.jsxs)(Pn,{children:[(0,B.jsx)(kn,{children:e}),(0,B.jsx)(zn,{type:"button",onClick:function(){return n((0,vn.s)())},children:"Close message"})]})}var An=t(5243),Nn=function(){return(0,B.jsx)(An.iT,{height:25,width:25,color:"#4fa94d",visible:!0,ariaLabel:"oval-loading",strokeWidth:7})};var En=function(){var n=(0,k.I0)(),e=(0,k.v9)(A),t=(0,k.v9)(N);return(0,P.useEffect)((function(){n((0,z.yF)())}),[n]),(0,B.jsxs)(M,{children:[(0,B.jsx)(_,{children:"ThePhonebook"}),(0,B.jsx)(V,{}),(0,B.jsxs)(S,{children:["Contacts",t&&(0,B.jsx)(Nn,{})]}),(0,B.jsx)(wn,{}),e?(0,B.jsx)(Cn,{}):(0,B.jsx)(gn,{})]})}}}]);
//# sourceMappingURL=162.44c6a6f3.chunk.js.map