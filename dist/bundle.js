(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),i.push([n.id,":root {\n    --secondary: #f5f5f5;\n  }\n\n\n/* Browser Default Settings */\n* {\n    margin: 0;\n    padding: 0;\n    font-family: 'Poppins', sans-serif;\n    -moz-box-sizing: border-box; \n    -webkit-box-sizing: border-box; \n    box-sizing: border-box; \n}\n\n/* Page Layout */\nbody {\n    position: relative;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.content {\n    display: flex;\n    flex-grow: 1;\n}\n\n\n/* Nav Elements */\n.add {\n    align-items: center;\n    color: white;\n    display: flex;\n    font-size: 1.2em;\n    position: absolute;\n    right: 2%;\n}\n\n.add-icon {\n    height: 2em;\n    margin-left: 8px;\n    transition: .3s;\n}\n\n.add-icon:hover {\n    scale: 1.2;\n    transition: .3s;\n}\n\n.menu-icon {\n    height: 2em;\n    left: 2%;\n    position: absolute;\n    transition: .3s;\n}\n\n.menu-icon:hover {\n    scale: 1.2;\n    transition: .3s;\n}\n\n.nav {\n    align-items: center;\n    /* Background gradient found here: https://uigradients.com/#AzurLane */\n    background: #7F7FD5;  /* fallback for old browsers */\n    background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    display: flex;\n    height: 75px;\n    position: relative;\n}\n\n.nav h1 {\n    color: white;\n}\n\n.title {\n    align-items: center;\n    display: flex;\n    margin: auto;\n}\n\n.title-icon {\n    height: 2.5em;\n    margin-right: 4px;\n}\n\n/* Menu */\n.menu {\n    background-color: var(--secondary);\n    overflow-x: hidden;\n    padding: 16px;\n    transition: 0.5s;\n    width: 20%;\n    z-index: 1;\n}\n\n.menu-buttons {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.menu-buttons button {\n    border: none;\n    border-radius: 8px;\n    background-color: var(--secondary);\n    font-size: 1.1em;\n    margin: 8px 0;\n    padding: 4px;\n    transition: .3s;\n    width: 85%;\n}\n\n.menu-buttons button:hover {\n    filter: brightness(85%);\n}\n\n.menu-buttons button[data-state=\"active\"] {\n    background-color: lightgray;\n}\n\n.menu-btn {\n    align-items: center;\n    display: flex;\n}\n\n/* Main Content */\ninput[type=checkbox]:checked + label.task-crossout{\n    text-decoration: line-through;\n}\n\n.task-check {\n    margin: 12px;\n    scale: 1.3;\n}\n\n.task-container {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    padding: 50px 50px 0 50px;\n    position: relative;\n}\n\n.task-crossout {\n    width: 500px;\n    overflow: hidden;\n    pointer-events: none;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.task-header {\n    border-bottom: solid black 1px;\n    width: 80%;\n}\n\n.task-item {\n    align-items: center;\n    border-bottom: solid lightgrey 1px;\n    display: flex;\n    font-size: 1.3em;\n    margin: 12px;\n    width: 90%;\n}\n\n.task-item i {\n    scale: 1.3;\n    margin: 12px;\n    transition: .2s;\n}\n\n.task-item i:hover {\n    scale: 1.5;\n    transition: .2s;\n}\n\n.task-item span {\n    font-size: .8em;\n    margin-right: 12px;\n}\n\n.icons{\n    margin-left: auto;\n     \n}\n\n.task-list {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n}\n\n/* Task Form */\n.close-icon {\n    height: 1.2em;\n    position: absolute;\n    top: 2%;\n    right: 2%;\n    transition: .2s\n}\n\n.close-icon:hover {\n    scale: 1.3;\n    transition: .2s\n}\n\n.task-form {\n    background-color: var(--secondary);\n    border: none;\n    border-radius: 12px;\n    display: none;\n    padding: 32px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n}\n\n.task-form div {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 12px;\n}\n\n.task-form input {\n    padding: 2px 8px;\n}\n\n.task-form textarea {\n    padding: 8px;\n    resize: none;\n}\n\n.task-form-background {\n    background-color: rgba(0, 0, 0, .4);\n    display: none;\n    height: 100%;\n    position: fixed;\n    top: 0%;\n    width: 100%;\n    z-index: 2;\n}\n\n.form-submit {\n    margin: auto;\n    width: 50%;\n}\n\n.form-submit button {\n    background: #7F7FD5;\n    background: -webkit-linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5);  \n    background: linear-gradient(to right, #91EAE4, #86A8E7, #7F7FD5); \n    border-radius: 12px;\n    font-size: 1.2rem;\n    margin-top: 12px;\n    padding: 8px;\n    transition: .2s;\n}\n\n.form-submit button:hover {\n    scale: 1.05;\n    transition: .2s;\n}\n\n/* Priority classes */\n.High {\n    color: red;\n}\n\n.Medium {\n    color: orange;\n}\n\n.Low {\n    color: green;\n}\n\n\n/* Project menu */\n.project-btn {\n    border: none;\n    border-radius: 8px;\n    background-color: var(--secondary);\n    font-size: 1.1em;\n    margin: 8px 0;\n    padding: 4px;\n    transition: .3s;\n    width: 85%;\n    text-align: center;\n}\n\n.project-btn:hover {\n    filter: brightness(85%);\n}\n\n.project-dropdown {\n    align-items: center;\n    display: flex;\n}\n\n.project-list {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.project-list button {\n    border: none;\n    border-radius: 8px;\n    background-color: var(--secondary);\n    font-size: 1.1em;\n    margin: 8px 0;\n    padding: 4px;\n    transition: .3s;\n    width: 85%;\n}\n\n.project-list button:hover {\n    filter: brightness(85%);\n}\n\n.project-menu div {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n}\n\n/* Project Form */\n.project-form {\n    background-color: var(--secondary);\n    border: none;\n    border-radius: 12px;\n    display: none;\n    padding: 32px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n}\n\n.project-form  div {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 12px;\n}\n\n.project-form  input {\n    padding: 2px 8px;\n}\n\n.project-form  textarea {\n    padding: 8px;\n    resize: none;\n}",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{function n(n){if(null===n||!0===n||!1===n)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(n)}function r(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}Math.pow(10,8);var o=36e5;var a={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,s=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function l(n){return n?parseInt(n):1}function d(n){return n&&parseFloat(n.replace(",","."))||0}var u=[31,null,31,30,31,30,31,31,30,31,30,31];function p(n){return n%400==0||n%4==0&&n%100!=0}const m=(()=>{const t=[];let m=["None"];return{createTask:(n,e,r,o,a)=>{if(!1===(i=n,t.some((n=>n.title===i)))){const i=((n,e,t,r,o)=>({title:n,description:e,dueDate:t,priority:r,project:o}))(n,e,r,o,a);return t.push(i),"success"}var i},deleteTask:n=>{t.forEach(((e,r)=>{e.title===n&&t.splice(r,1)}))},getTodaysTasks:()=>{const n=[],e=(new Date).toISOString().split("T")[0];return t.forEach((t=>{t.dueDate==e&&n.push(t)})),n},getUpcomingTasks:()=>{const m=[],f=(new Date).setHours(0,0,0,0),g=function(t,o){r(2,arguments);var a=function(n){r(1,arguments);var t=Object.prototype.toString.call(n);return n instanceof Date||"object"===e(n)&&"[object Date]"===t?new Date(n.getTime()):"number"==typeof n||"[object Number]"===t?new Date(n):("string"!=typeof n&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}(t),i=n(o);return isNaN(i)?new Date(NaN):i?(a.setDate(a.getDate()+i),a):a}(f,7);return t.forEach((e=>{const t=function(e,t){var m;r(1,arguments);var f=n(null!==(m=null==t?void 0:t.additionalDigits)&&void 0!==m?m:2);if(2!==f&&1!==f&&0!==f)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var g,h=function(n){var e,t={},r=n.split(a.dateTimeDelimiter);if(r.length>2)return t;if(/:/.test(r[0])?e=r[0]:(t.date=r[0],e=r[1],a.timeZoneDelimiter.test(t.date)&&(t.date=n.split(a.timeZoneDelimiter)[0],e=n.substr(t.date.length,n.length))),e){var o=a.timezone.exec(e);o?(t.time=e.replace(o[1],""),t.timezone=o[1]):t.time=e}return t}(e);if(h.date){var y=function(n,e){var t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=n.match(t);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?o:100*a,restDateString:n.slice((r[1]||r[2]).length)}}(h.date,f);g=function(n,e){if(null===e)return new Date(NaN);var t=n.match(i);if(!t)return new Date(NaN);var r=!!t[4],o=l(t[1]),a=l(t[2])-1,s=l(t[3]),c=l(t[4]),d=l(t[5])-1;if(r)return function(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}(0,c,d)?function(n,e,t){var r=new Date(0);r.setUTCFullYear(n,0,4);var o=7*(e-1)+t+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(e,c,d):new Date(NaN);var m=new Date(0);return function(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(u[e]||(p(n)?29:28))}(e,a,s)&&function(n,e){return e>=1&&e<=(p(n)?366:365)}(e,o)?(m.setUTCFullYear(e,a,Math.max(o,s)),m):new Date(NaN)}(y.restDateString,y.year)}if(!g||isNaN(g.getTime()))return new Date(NaN);var b,v=g.getTime(),k=0;if(h.time&&(k=function(n){var e=n.match(s);if(!e)return NaN;var t=d(e[1]),r=d(e[2]),a=d(e[3]);return function(n,e,t){return 24===n?0===e&&0===t:t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}(t,r,a)?t*o+6e4*r+1e3*a:NaN}(h.time),isNaN(k)))return new Date(NaN);if(!h.timezone){var x=new Date(v+k),w=new Date(0);return w.setFullYear(x.getUTCFullYear(),x.getUTCMonth(),x.getUTCDate()),w.setHours(x.getUTCHours(),x.getUTCMinutes(),x.getUTCSeconds(),x.getUTCMilliseconds()),w}return b=function(n){if("Z"===n)return 0;var e=n.match(c);if(!e)return 0;var t="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(n,e){return e>=0&&e<=59}(0,a)?t*(r*o+6e4*a):NaN}(h.timezone),isNaN(b)?new Date(NaN):new Date(v+k+b)}(e.dueDate);t>=f&&t<=g&&m.push(e)})),m},createProject:n=>!1===(n=>m.includes(n))(n)?(m.push(n),"success"):void 0,allTasks:t,projects:m}})(),f=(()=>{const n=document.getElementById("menu");function e(){n.style.width="0%",n.style.padding="0px",menuToggle.dataset.state="close"}function t(){n.style.width="20%",n.style.padding="16px",menuToggle.dataset.state="open"}return{toggleMenu:()=>{const n=document.getElementById("menuToggle");n.addEventListener("click",(()=>{switch(n.dataset.state){case"open":e();break;case"close":t()}}))}}})(),g=(()=>{document.getElementById("task-container");const n=document.getElementById("taskHeader"),e=document.getElementById("taskList"),t=document.getElementById("projectList"),r=document.getElementById("taskProject"),o=n=>{const t=document.createElement("div"),r=document.createElement("div"),o=document.createElement("input"),a=document.createElement("label"),i=document.createElement("span"),s=document.createElement("span"),c=document.createElement("i"),l=document.createElement("i");a.textContent=n.title,i.textContent=`Due: ${n.dueDate}`,s.textContent=n.priority,t.classList.add("task-item"),c.classList.add("fa","fa-trash-o"),l.classList.add("fa","fa-info-circle"),o.classList.add("task-check"),a.classList.add("task-crossout"),r.classList.add("icons"),s.classList.add(n.priority),o.type="checkbox",o.id="task",c.id="delete-btn",l.id="info-btn",a.setAttribute("for","task"),r.append(i,s,c,l),t.append(o,a,r),e.append(t)},a=n=>{const e=document.createElement("button");e.textContent=n,e.id="project",t.append(e)};return{showAllTasks:()=>{n.textContent="All Tasks",e.innerHTML="",m.allTasks.forEach((n=>o(n)))},showTodayTasks:()=>{const t=m.getTodaysTasks();n.textContent="Today's Tasks",e.innerHTML="",t.forEach((n=>o(n)))},showUpcomingTasks:()=>{const t=m.getUpcomingTasks();n.textContent="Upcoming Tasks",e.innerHTML="",t.forEach((n=>o(n)))},addTaskElement:o,addProjectElement:a,showProjects:()=>{t.innerHTML="",m.projects.forEach((n=>{"None"!=n&&a(n)}))},listProjectOptions:()=>{r.innerHTML="",m.projects.forEach((n=>{const e=document.createElement("option");e.value=n,e.textContent=n,r.append(e)}))},showTaskforProject:t=>{e.innerHTML="",n.textContent=t,m.allTasks.forEach((n=>{n.project===t&&o(n)}))}}})(),h=document.getElementById("allTasks"),y=document.getElementById("todayTasks"),b=document.getElementById("upcomingTasks"),v=document.getElementById("add-icon"),k=document.getElementById("close-icon"),x=document.getElementById("task-form"),w=document.getElementById("task-form-background"),T=document.querySelector(".task-form form"),E=document.getElementById("newProjectBtn"),D=document.getElementById("projectForm"),j=document.getElementById("closeProject"),N=document.querySelector(".project-form form");let C=document.querySelectorAll("#project");const L=(()=>{const n=()=>{x.style.display="none",w.style.display="none"},e=()=>{D.style.display="none",w.style.display="none"};return{addListeners:()=>{h.addEventListener("click",(()=>{g.showAllTasks()})),y.addEventListener("click",(()=>{g.showTodayTasks()})),b.addEventListener("click",(()=>{g.showUpcomingTasks()})),v.addEventListener("click",(()=>{g.listProjectOptions(),x.style.display="block",w.style.display="block"})),k.addEventListener("click",(()=>{n()})),j.addEventListener("click",(()=>{e()})),T.addEventListener("submit",(e=>{e.preventDefault(),(n=>{const e=new FormData(n),t=Object.fromEntries(e);if("success"===m.createTask(t.taskName,t.taskDesc,t.taskDate,t.taskPrio,t.taskProject)){const n=document.getElementById("taskHeader");switch(n.textContent){case"All Tasks":g.showAllTasks();break;case"Today's Tasks":g.showTodayTasks();break;case"Upcoming Tasks":g.showUpcomingTasks();break;default:g.showTaskforProject(n.textContent)}}else window.alert("Task name already taken.")})(T),n(),T.reset()})),N.addEventListener("submit",(n=>{n.preventDefault(),(n=>{const e=new FormData(n),t=Object.fromEntries(e);"success"===m.createProject(t.projectName)?(g.showProjects(),C=document.querySelectorAll("#project"),C.forEach((n=>{n.addEventListener("click",(()=>{g.showTaskforProject(n.textContent)}))}))):(window.alert("Project name already taken."),console.log(m.projects))})(N),e(),N.reset()})),E.addEventListener("click",(()=>{D.style.display="block",w.style.display="block"})),document.addEventListener("click",(n=>{const e=n.target.closest("#delete-btn"),t=n.target.closest("#info-btn");if(e){const n=e.parentElement.parentElement.querySelector(".task-crossout").textContent;e.parentElement.parentElement.remove(),m.deleteTask(n)}else t&&console.log("showing task info")}))}}})();var S=t(379),I=t.n(S),P=t(795),M=t.n(P),F=t(569),z=t.n(F),A=t(565),B=t.n(A),U=t(216),H=t.n(U),O=t(589),Z=t.n(O),q=t(426),$={};$.styleTagTransform=Z(),$.setAttributes=B(),$.insert=z().bind(null,"head"),$.domAPI=M(),$.insertStyleElement=H(),I()(q.Z,$),q.Z&&q.Z.locals&&q.Z.locals,new Date,m.createTask("Task 1","this is a description","2023-07-20","High","None"),m.createTask("Task 2","this is a description","2023-07-21","High","None"),m.createTask("Task 3","this is a description","2023-07-28","High","None"),g.showAllTasks(),g.showProjects(),L.addListeners(),f.toggleMenu()})()})();