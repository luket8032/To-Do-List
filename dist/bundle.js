(()=>{"use strict";var n={681:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([n.id,'/* Got code for checkbox styling here: https://bun.js.org/ */\n\n.b-contain *,\n.b-contain *::before,\n.b-contain *::after {\n  box-sizing: content-box !important;\n}\n\n.b-contain input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.b-contain span {\n  line-height: 1em;\n  font-size: 1.2rem;\n  font-family: inherit;\n}\n\n.b-contain {\n  align-items: end;\n  display: flex;\n  position: relative;\n  padding-left: 2rem;\n  margin-bottom: 0.4rem;\n}\n\n.b-contain input[type="checkbox"] ~ .b-input {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  height: 1.25rem;\n  width: 1.25rem;\n  background: #f1f5f9;\n  transition: background 250ms;\n  transform: translateY(-50%);\n  border: 1px solid #94a3b8;\n  border-radius: 0.2rem;\n}\n\n.b-contain input[type="radio"] ~ .b-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 1.25rem;\n  width: 1.25rem;\n  background: #f1f5f9;\n  transition: background 250ms;\n  border: 1px solid #94a3b8;\n  border-radius: 3rem;\n}\n\n.b-contain input[type="checkbox"] ~ .b-input::after {\n  content: "";\n  position: absolute;\n  display: none;\n  left: 7px;\n  top: 3px;\n  width: 0.3rem;\n  height: 0.6rem;\n  border: solid #ffffff;\n  border-width: 0 2px 2px 0;\n  transition: background 250ms;\n  transform: rotate(45deg);\n}\n\n.b-contain input[type="radio"] ~ .b-input::after {\n  content: "";\n  position: absolute;\n  display: none;\n  left: 4px;\n  top: 4px;\n  width: 0.75rem;\n  height: 0.75rem;\n  border-radius: 3rem;\n  background: #ffffff;\n  transition: background 250ms;\n}\n\n.b-contain input[type="checkbox"]:disabled ~ .b-input::after {\n  border-color: #ffffff;\n}\n\n.b-contain input:checked ~ .b-input::after {\n  display: block;\n}\n\n.b-contain:hover input[type="checkbox"]:not([disabled]) ~ .b-input,\n.b-contain input[type="checkbox"]:focus ~ .b-input {\n  background: #e2e8f0;\n  border-color: #64748b;\n}\n\n.b-contain:hover input[type="radio"]:not([disabled]) ~ .b-input,\n.b-contain input[type="radio"]:focus ~ .b-input {\n  background: #e2e8f0;\n  border-color: #64748b;\n}\n\n.b-contain input:focus ~ .b-input {\n  box-shadow: 0 0 0 2px #60a5fa;\n}\n\n.b-contain input[type="checkbox"]:checked ~ .b-input {\n  background: #3b82f6;\n  border-color: #1d4ed8;\n}\n\n.b-contain input[type="radio"]:checked ~ .b-input {\n  background: #3b82f6;\n  border-color: #1d4ed8;\n}\n\n.b-contain input[type="checkbox"]:disabled ~ .b-input,\n.b-contain input[type="radio"]:disabled ~ .b-input {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.b-contain input[type="radio"]:disabled ~ .b-input::after {\n  background: #ffffff;\n}\n\n.b-contain:hover input[type="checkbox"]:not([disabled]):checked ~ .b-input,\n.b-contain input[type="checkbox"]:checked:focus ~ .b-input {\n  background: #2563eb;\n  border-color: #1e40af;\n}\n\n.b-contain:hover input[type="radio"]:not([disabled]):checked ~ .b-input,\n.b-contain input[type="radio"]:checked:focus ~ .b-input {\n  background: #2563eb;\n  border-color: #1e40af;\n}',""]);const s=a},426:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),a.push([n.id,":root {\n    --secondary: #f5f5f5;\n  }\n\n\n/* Browser Default Settings */\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Poppins', sans-serif;\n    -moz-box-sizing: border-box; \n    -webkit-box-sizing: border-box; \n    box-sizing: border-box; \n}\n\n/* Page Layout */\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.content {\n    display: flex;\n    flex-grow: 1;\n}\n\n\n/* Nav Elements */\n.add {\n    align-items: center;\n    color: white;\n    display: flex;\n    font-size: 1.2em;\n    position: absolute;\n    right: 2%;\n}\n\n.add-icon {\n    height: 2em;\n    margin-left: 8px;\n    transition: .3s;\n}\n\n.add-icon:hover {\n    scale: 1.2;\n    transition: .3s;\n}\n\n.menu-icon {\n    height: 2em;\n    left: 2%;\n    position: absolute;\n    transition: .3s;\n}\n\n.menu-icon:hover {\n    scale: 1.2;\n    transition: .3s;\n}\n\n.nav {\n    align-items: center;\n    /* Background gradient found here: https://uigradients.com/#AzurLane */\n    background: #7F7FD5;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    display: flex;\n    height: 75px;\n    position: relative;\n}\n\n.nav h1 {\n    color: white;\n}\n\n.title {\n    align-items: center;\n    display: flex;\n    margin: auto;\n}\n\n.title-icon {\n    height: 2.5em;\n    margin-right: 4px;\n}\n\n/* Menu */\n.menu {\n    background-color: var(--secondary);\n    overflow-x: hidden;\n    padding: 16px;\n    transition: 0.5s;\n    width: 20%;\n    z-index: 1;\n}\n\n.menu-buttons {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n}\n.menu-buttons button {\n    border: none;\n    border-radius: 8px;\n    background-color: var(--secondary);\n    font-size: 1.1em;\n    margin: 8px 0;\n    padding: 4px;\n    transition: .3s;\n    width: 85%;\n}\n\n.menu-buttons button:hover {\n    filter: brightness(85%);\n}\n\n.menu-buttons button[data-state=\"active\"] {\n    background-color: lightgray;\n}\n\n.menu-btn {\n    align-items: center;\n    display: flex;\n}\n\n/* Main Content */\n.task-container {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    padding: 50px 50px 0 50px;\n    position: relative;\n}\n\n.task-header {\n    border-bottom: solid black 1px;\n    width: 80%;\n}\n\n.task-item {\n    align-items: end;\n    border-bottom: solid lightgrey 1px;\n    display: flex;\n    font-size: 1.3em;\n    margin: 12px;\n    width: 90%;\n}\n\n.task-list {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n}\n\n\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=t(u),b={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(b);else{var f=i(b,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var s=t(r[a]);e[s].references--}for(var c=o(n,i),d=0;d<r.length;d++){var l=t(r[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=(()=>{const n=[];return{createTask:(e,t,o,i,r)=>{if(!1===(a=e,n.some((n=>n.title===a)))){const a=((n,e,t,o,i)=>({title:n,description:e,dueDate:t,priority:o,project:i}))(e,t,o,i,r);return n.push(a),a}var a},allTasks:n}})(),e=(()=>{const n=document.getElementById("menu");function e(){n.style.width="0%",n.style.padding="0px",menuToggle.dataset.state="close"}function t(){n.style.width="20%",n.style.padding="16px",menuToggle.dataset.state="open"}return{toggleMenu:()=>{const n=document.getElementById("menuToggle");n.addEventListener("click",(()=>{switch(n.dataset.state){case"open":e();break;case"close":t()}}))}}})(),o=(()=>{document.getElementById("task-container");const e=document.getElementById("taskHeader"),t=document.getElementById("taskList");return{showAllTasks:()=>{e.textContent=`All Tasks (${n.allTasks.length})`,t.innerHTML="",n.allTasks.forEach((n=>(n=>{const e=(n=>{const e=document.createElement("label"),t=document.createElement("span"),o=document.createElement("input"),i=document.createElement("div");return t.textContent=n,o.type="checkbox",e.classList.add("b-contain"),i.classList.add("b-input"),e.append(t,o,i),e})(n.title),o=document.createElement("div");o.classList.add("task-item"),o.append(e),t.append(o)})(n)))},showTodayTasks:()=>{e.textContent="Today's Tasks",t.innerHTML=""},showUpcomingTasks:()=>{e.textContent="Upcoming Tasks",t.innerHTML=""}}})(),i=(()=>{const n=document.querySelectorAll("#menu-btn");return document.getElementById("task-container"),{switchPage:()=>{n.forEach((n=>{n.addEventListener("click",(e=>{switch(n.textContent){case"All Tasks":o.showAllTasks();break;case"Today":o.showTodayTasks();break;case"Upcoming":o.showUpcomingTasks()}}))}))}}})();var r=t(379),a=t.n(r),s=t(795),c=t.n(s),d=t(569),l=t.n(d),u=t(565),p=t.n(u),b=t(216),f=t.n(b),m=t(589),h=t.n(m),g=t(426),y={};y.styleTagTransform=h(),y.setAttributes=p(),y.insert=l().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=f(),a()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;var x=t(681),k={};k.styleTagTransform=h(),k.setAttributes=p(),k.insert=l().bind(null,"head"),k.domAPI=c(),k.insertStyleElement=f(),a()(x.Z,k),x.Z&&x.Z.locals&&x.Z.locals;const v=[];n.createTask("task 1","this is a description",Date(),"High","none",v),n.createTask("task 2","this is a description",Date(),"High","none",v),o.showAllTasks(),i.switchPage(v),e.toggleMenu()})()})();