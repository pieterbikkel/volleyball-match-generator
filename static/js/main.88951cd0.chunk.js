(this["webpackJsonpvolleybal-generator"]=this["webpackJsonpvolleybal-generator"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(8),i=a.n(c),l=(a(15),a(9)),r=a(3),o=a(4),m=a(2),h=a(6),d=a(5),u=(a(16),a(17),a.p+"static/media/polygon.b9a6ff53.svg"),j=a(0),b=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state=e.state,n}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{className:"polygon",src:u,alt:"polygon"}),Object(j.jsxs)("div",{className:"date-section",children:[Object(j.jsxs)("div",{className:"dag-maand",children:[Object(j.jsx)("h4",{className:"dag",children:this.state.day}),Object(j.jsx)("h4",{className:"maand",children:this.state.month})]}),Object(j.jsx)("h4",{className:"tijd",children:this.state.time})]}),Object(j.jsxs)("div",{className:"teams",children:[Object(j.jsx)("h4",{className:"team",children:this.state.homeTeam}),Object(j.jsx)("h4",{className:"vs",children:"VS"}),Object(j.jsx)("h4",{className:"team",children:this.state.otherTeam})]})]})}}]),a}(s.a.Component),p=a(10);a(21);var O=function(){var e=function(e){e.preventDefault(),e.target.classList.remove("animate"),e.target.classList.add("animate"),setTimeout((function(){e.target.classList.remove("animate")}),700)};return Object(n.useEffect)((function(){for(var t=document.getElementsByClassName("bubbly-button"),a=0;a<t.length;a++)t[a].addEventListener("click",e,!1)}),[]),Object(j.jsx)("button",{className:"bubbly-button",children:"Export to image"})},g=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={day:12,month:"april",time:"18:00",homeTeam:"Dash Heren 1",otherTeam:"DVO Heren 1"},n.handleInputChange=n.handleInputChange.bind(Object(m.a)(n)),n.handleDateChange=n.handleDateChange.bind(Object(m.a)(n)),n.componentRef=s.a.createRef(),n}return Object(o.a)(a,[{key:"handleInputChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(l.a)({},n,a))}},{key:"handleDateChange",value:function(e){var t=e.target,a=new Date(t.value),n=a.getDate(),s=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"][a.getMonth()],c=a.getHours().toString().padStart(2,"0")+":"+a.getMinutes().toString().padStart(2,"0");this.setState({day:n,month:s,time:c})}},{key:"componentDidMount",value:function(){document.querySelectorAll(".text-input").forEach((function(e){e.addEventListener("blur",(function(e){""!==e.target.value?e.target.nextElementSibling.classList.add("filled"):e.target.nextElementSibling.classList.remove("filled")}))}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Volleyball Match Generator"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"game-card",children:Object(j.jsx)(b,{state:this.state,ref:this.componentRef},"".concat(this.state.homeTeam,"-").concat(this.state.otherTeam))}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"input-export",children:[Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"input-container",children:[Object(j.jsx)("input",{type:"datetime-local",id:"username",className:"date-input ",autoComplete:"off",placeholder:"Enter date",required:!0,name:"date",onChange:this.handleDateChange}),Object(j.jsx)("label",{className:"label",htmlFor:"date"})]}),Object(j.jsxs)("div",{className:"input-container",children:[Object(j.jsx)("input",{type:"text",id:"username",className:"text-input",autoComplete:"off",maxlength:"22",placeholder:this.state.homeTeam,required:!0,name:"homeTeam",onChange:this.handleInputChange}),Object(j.jsx)("label",{className:"label",htmlFor:"homeTeam",children:"Home team"})]}),Object(j.jsxs)("div",{className:"input-container",children:[Object(j.jsx)("input",{type:"text",id:"username",className:"text-input",autoComplete:"off",maxlength:"22",placeholder:this.state.otherTeam,required:!0,name:"otherTeam",onChange:this.handleInputChange}),Object(j.jsx)("label",{className:"label",htmlFor:"otherTeam",children:"Other team"})]})]}),Object(j.jsx)("div",{className:"button-div",onClick:function(){return Object(p.exportComponentAsJPEG)(e.componentRef,{fileName:"match-".concat(e.state.homeTeam,"-").concat(e.state.otherTeam)})},children:Object(j.jsx)(O,{})})]})]})}}]),a}(s.a.Component);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.88951cd0.chunk.js.map