window.addEventListener("load",(function(){setTimeout((function(){document.getElementById("loading-screen").style.opacity="0",document.querySelector(".main").style.display="block",setTimeout((function(){document.getElementById("loading-screen").style.display="none",document.querySelector(".main").style.opacity="1"}),1e3)}),1e3)})),document.addEventListener("DOMContentLoaded",(function(){if(document.getElementById("videoElement")&&document.getElementById("videoElement-user")&&document.getElementById("startButton")){let o;const a=document.getElementById("startButton"),c=document.getElementById("nextButton"),s=document.getElementById("stopButton"),l=document.getElementById("repButton"),i=document.querySelector(".flashlight-btn"),d=document.getElementById("videoElement"),r=document.getElementById("videoElement-user"),u=document.getElementById("backButton"),m=document.getElementById("heart"),y=document.getElementById("content-section"),p=document.querySelector(".left-user-stream"),g=document.querySelector(".controls-container"),f=document.querySelector(".controls-container .logo-stream"),h=document.querySelectorAll(".hide-on-stream"),v=document.querySelector(".chat-stream"),E=document.querySelector(".stream-load");p.style.display="none",c.style.display="none",s.style.display="none",i.style.display="none",m.style.display="none",u.style.display="none",f.style.display="none",l.style.display="none",v.style.display="none",a.addEventListener("click",(function(){o||navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){o=e,d.srcObject=e,r.srcObject=e,a.textContent="Chatting...",g.classList.add("stream"),y.style.display="none",p.style.display="block",h.forEach((e=>{gsap.to(e,{opacity:0,visibility:"hidden",duration:.4,ease:"power2.out"})})),a.style.display="none",c.style.display="flex",s.style.display="flex",i.style.display="flex",u.style.display="flex",m.style.display="flex",f.style.display="flex",l.style.display="flex",v.style.display="flex",gsap.fromTo(c,{opacity:0,y:-20},{opacity:1,y:0,duration:.5}),gsap.fromTo(s,{opacity:0,y:-20},{opacity:1,y:0,duration:.5}),gsap.fromTo(i,{opacity:0,y:20},{opacity:1,y:0,duration:.5}),gsap.fromTo(u,{opacity:0,y:-20},{opacity:1,y:0,duration:.5}),gsap.fromTo(m,{opacity:0,y:20},{opacity:1,y:0,duration:.5}),gsap.fromTo(f,{opacity:0,y:-20},{opacity:1,y:0,duration:.5}),gsap.fromTo(l,{opacity:0,y:-20},{opacity:1,y:0,duration:.5}),gsap.fromTo(v,{opacity:0,y:-20},{opacity:1,y:0,duration:.5})})).catch((function(e){console.error("Error accessing camera: ",e),alert("Unable to access camera.")}))})),s.addEventListener("click",(function(){o&&(o.getTracks().forEach((e=>e.stop())),o=null,d.srcObject=null,a.textContent="Start Chat",a.style.display="block",g.classList.remove("stream"),y.style.display="flex",p.style.display="none",h.forEach((e=>{gsap.to(e,{opacity:1,visibility:"visible",duration:.4,ease:"power2.out"})})),c.style.display="none",s.style.display="none",i.style.display="none",u.style.display="none",m.style.display="none",f.style.display="none",l.style.display="none",v.style.display="none")})),u.addEventListener("click",(function(){gsap.timeline().fromTo(u,{scale:1,y:0},{scale:.8,duration:.1,x:-10,ease:"power2.out"}).to(u,{scale:1,duration:.1,ease:"power2.out"}).to(u,{scale:1.2,duration:.1,x:0,ease:"power2.out"}).to(u,{scale:1,duration:.3,ease:"power2.out"}),gsap.timeline().fromTo("#videoElement-user",{opacity:1,x:0},{opacity:0,x:"100%",duration:1,ease:"power2.out"}).to("#videoElement-user",{opacity:1,x:"-100%",duration:0,ease:"power2.out"}).to("#videoElement-user",{opacity:1,x:0,duration:1,ease:"power2.out"}),gsap.timeline().to(E,{opacity:1,duration:.5,ease:"power2.out"}).to(E,{opacity:0,duration:.5,delay:.6,ease:"power2.out"})})),m.addEventListener("click",(function(){gsap.timeline().fromTo(m,{scale:1},{scale:.8,duration:.1,ease:"power2.out"}).to(m,{scale:1,duration:.1,ease:"power2.out"}).to(m,{scale:1.2,duration:.1,ease:"power2.out"}).to(m,{scale:1,duration:.3,ease:"power2.out"})})),i.addEventListener("click",(function(){gsap.timeline().fromTo(i,{scale:1},{scale:.8,duration:.1,ease:"power2.out"}).to(i,{scale:1,duration:.1,ease:"power2.out"}).to(i,{scale:1.2,duration:.1,ease:"power2.out"}).to(i,{scale:1,duration:.3,ease:"power2.out"})})),c.addEventListener("click",(function(){gsap.timeline().fromTo(c,{scale:1,y:0},{scale:.8,duration:.1,x:10,ease:"power2.out"}).to(c,{scale:1,duration:.1,ease:"power2.out"}).to(c,{scale:1.2,duration:.1,x:0,ease:"power2.out"}).to(c,{scale:1,duration:.3,ease:"power2.out"}),gsap.timeline().fromTo("#videoElement-user",{opacity:1,x:0},{opacity:0,x:"-100%",duration:1,ease:"power2.out"}).to("#videoElement-user",{opacity:1,x:"100%",duration:0,ease:"power2.out"}).to("#videoElement-user",{opacity:1,x:0,duration:1,ease:"power2.out"}),gsap.timeline().to(E,{opacity:1,duration:.5,ease:"power2.out"}).to(E,{opacity:0,duration:.5,delay:.6,ease:"power2.out"})}))}if(document.querySelectorAll(".left .nav-list button")&&document.querySelectorAll("button[data-tab]").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-tab");document.querySelectorAll(".content-left").forEach((e=>e.classList.remove("active"))),document.getElementById("content"+t).classList.add("active"),document.querySelectorAll(".left .nav-list button").forEach((e=>e.classList.remove("active"))),e.classList.add("active"),t>1?document.getElementById("mainSection").classList.add("full-screen"):document.getElementById("mainSection").classList.remove("full-screen"),gsap.timeline().fromTo("#content"+t,{opacity:0,y:500,scale:.7},{opacity:1,y:0,scale:.85,duration:.7,ease:"power4.out"}).to("#content"+t,{scale:1,filter:"blur(0px)",duration:.3,ease:"elastic.out(1, 1)"}).to("#content"+t,{scale:1,duration:.3,ease:"ease.out"})}))})),document.querySelectorAll("[data-popup]")&&(document.querySelectorAll("[data-popup]").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-popup"),n=document.getElementById(t);if(n){n.classList.add("active");const e=n.querySelector(".popup-content");gsap.timeline().fromTo(e,{opacity:0,y:500,scale:.7},{opacity:1,y:"-50%",scale:.85,duration:.5,ease:"power4.out"}).to(e,{scale:1,duration:.5,ease:"elastic.out(1, 1)"}).to(e,{scale:1,duration:.3,ease:"ease.out"})}}))})),document.querySelectorAll(".popup-close").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.closest(".popup");t&&t.classList.remove("active")}))})),document.querySelectorAll(".popup-background").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.closest(".popup");t&&t.classList.remove("active")}))})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&document.querySelectorAll(".popup.active").forEach((e=>{e.classList.remove("active")}))})),document.querySelectorAll(".gender-option").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-value"),n=document.getElementById("genderBtn");document.getElementById("genderInput").value=t,n.textContent=t.charAt(0).toUpperCase()+t.slice(1),document.getElementById("genderPopup").classList.remove("active")}))})),document.querySelectorAll(".report-option").forEach((e=>{e.addEventListener("click",(e=>{document.getElementById("reportPopup").classList.remove("active")}))})),document.querySelectorAll(".country-option").forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-value"),n=document.getElementById("countryBtn");document.getElementById("countryInput").value=t,n.textContent=e.target.textContent,document.getElementById("countryPopup").classList.remove("active")}))}))),document.querySelector(".left")&&function(){const e=document.querySelector(".left");e&&function t(){(function(){const t=document.createElement("div"),n=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("viewBox","0 0 600 500"),n.style.fill="white",o.setAttribute("d","M300,150 C500,10 600,300 300,400 C0,300 100,10 300,150"),n.classList.add("heart"),n.appendChild(o),t.classList.add("bubble"),t.style.background=function(){const e=["linear-gradient(to top right, #fd267a, #ff6036)"];return e[Math.floor(Math.random()*e.length)]}(),t.appendChild(n),e.appendChild(t);let a=Math.random()*e.clientWidth,c=Math.random()*e.clientHeight;t.style.left=`${a}px`,t.style.top=`${c}px`,t.animate([{opacity:0,transform:"translate(-50%, 0%) scale(0)"},{opacity:1,transform:"translate(-50%, -50%) scale(1)"},{opacity:0,transform:"translate(-50%, -100%) scale(1.2)"}],{duration:3e3,easing:"ease-out",fill:"forwards"}),setTimeout((()=>t.remove()),3e3)})(),setTimeout(t,400)}()}(),document.getElementById("theme-switch")){const L=document.getElementById("theme-switch"),I=document.body;"dark"===localStorage.getItem("theme")?(I.classList.add("dark-theme"),L.checked=!0):(I.classList.add("light-theme"),L.checked=!1),L.addEventListener("change",(function(){this.checked?(I.classList.add("dark-theme"),I.classList.remove("light-theme"),localStorage.setItem("theme","dark")):(I.classList.remove("dark-theme"),I.classList.add("light-theme"),localStorage.setItem("theme","light"))}))}if(document.getElementById("hamburger")){const B=document.getElementById("hamburger"),k=document.getElementById("menu");B.addEventListener("click",(function(){B.classList.toggle("open"),k.classList.toggle("open")})),k.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(function(){B.classList.remove("open"),k.classList.remove("open")}))})),document.addEventListener("click",(function(e){k.contains(e.target)||B.contains(e.target)||(B.classList.remove("open"),k.classList.remove("open"))}))}if(document.querySelector(".chat")&&document.querySelectorAll(".chat").forEach((e=>{const t=e.querySelector(".messages-content"),n=e.querySelector(".message-input"),o=e.querySelector(".message-submit"),a=e.querySelector(".chat-title h1").innerText,c=document.querySelector(`.chat-list-item[data-chat="${a}"] .item-lastmess`);let s,l,i=0;function d(){t.scrollTop=t.scrollHeight}function r(){if(s=new Date,l!==s.getMinutes()){l=s.getMinutes();const e=document.createElement("div");e.classList.add("timestamp"),e.innerText=`${s.getHours()}:${l}`,t.lastElementChild.appendChild(e)}}function u(e){c&&(c.innerText=e.length>40?e.substring(0,40)+"...":e)}function m(){const e=n.value.trim();if(""===e)return;const o=document.createElement("div");o.classList.add("message","message-personal"),o.innerText=e,t.appendChild(o),r(),n.value=null,d(),u(e),setTimeout((function(){!function(){if(""!==n.value)return;const e=document.createElement("div");e.classList.add("message","loading","new");const o=document.createElement("figure");o.classList.add("avatar");const a=document.createElement("img");a.src="img/avatar.png",o.appendChild(a),e.appendChild(o),e.innerHTML+="<span></span>",t.appendChild(e),d(),setTimeout((function(){e.remove();const n=document.createElement("div");n.classList.add("message","new");const o=document.createElement("figure");o.classList.add("avatar");const a=document.createElement("img");a.src="img/avatar.png",o.appendChild(a),n.appendChild(o),n.innerHTML+=y[i%y.length],t.appendChild(n),r(),d(),u(y[i%y.length]),i++}),1e3+20*Math.random()*100)}()}),1e3+20*Math.random()*100)}o.addEventListener("click",m),e.addEventListener("keydown",(function(e){13===e.which&&(m(),e.preventDefault())}));const y=["Hi there, I'm Fabio and you?","Nice to meet you","How are you?","Not too bad, thanks","What do you do?","That's awesome","Codepen is a nice place to stay","I think you're a nice person","Why do you think that?","Can you explain?","Anyway I've gotta go now","It was a pleasure chat with you","Time to make a new codepen","Bye",":)"]})),document.querySelectorAll(".left .nav-list button")&&document.querySelectorAll(".left .nav-list button").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-tab");document.querySelectorAll(".content-left").forEach((e=>e.classList.remove("active"))),document.getElementById("content"+t).classList.add("active"),document.querySelectorAll(".left .nav-list button").forEach((e=>e.classList.remove("active"))),e.classList.add("active"),t>1?document.getElementById("mainSection").classList.add("full-screen"):document.getElementById("mainSection").classList.remove("full-screen"),gsap.timeline().fromTo("#content"+t,{opacity:0,y:500,scale:.7},{opacity:1,y:0,scale:.85,duration:.7,ease:"power4.out"}).to("#content"+t,{scale:1,filter:"blur(0px)",duration:.3,ease:"elastic.out(1, 1)"}).to("#content"+t,{scale:1,duration:.3,ease:"ease.out"})}))})),document.querySelectorAll(".chat-list .chat-item")&&document.querySelectorAll(".chat-list .chat-item").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-tab");document.querySelectorAll(".content-left").forEach((e=>e.classList.remove("active"))),document.getElementById("chat-"+t).classList.add("active"),document.querySelectorAll(".chat-list .chat-item").forEach((e=>e.classList.remove("active"))),e.classList.add("active"),gsap.timeline().fromTo("#chat-"+t,{opacity:0,y:500,scale:.7},{opacity:1,y:0,scale:.85,duration:.7,ease:"power4.out"}).to("#chat-"+t,{scale:1,filter:"blur(0px)",duration:.3,ease:"elastic.out(1, 1)"}).to("#chat-"+t,{scale:1,duration:.3,ease:"ease.out"})}))})),document.querySelector(".border-light")){const w=document.querySelector(".border-light"),S=document.getElementById("toggleLight"),b=document.getElementById("flashlightIcon"),q='<path d="M9 18H15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n      <path d="M10 21H14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n      <path d="M16.4999 11.5C17.4997 10.5 17.9765 9.48689 17.9999 8C18.0479 4.95029 16 3 11.9999 3C10.8324 3 9.83119 3.16613 8.99988 3.47724" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n      <path d="M8.99985 15C9 13 8.5 12.5 7.49985 11.5C6.4997 10.5 6.02324 9.48689 5.99985 8C5.99142 7.46458 6.0476 6.96304 6.1676 6.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n      <path d="M3 3L21 21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',x='<path d="M9 18H15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n      <path d="M10 21H14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>\n      <path d="M9.00082 15C9.00098 13 8.50098 12.5 7.50082 11.5C6.50067 10.5 6.02422 9.48689 6.00082 8C5.95284 4.95029 8.00067 3 12.0008 3C16.001 3 18.0488 4.95029 18.0008 8C17.9774 9.48689 17.5007 10.5 16.5008 11.5C15.501 12.5 15.001 13 15.0008 15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>';S.addEventListener("click",(()=>{"none"===w.style.display||""===w.style.display?(w.style.display="block",b.innerHTML=q):(w.style.display="none",b.innerHTML=x)}))}if(document.querySelectorAll(".tab").forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("data-tab");document.querySelectorAll(".form").forEach((e=>e.classList.remove("active"))),document.querySelectorAll(".tab").forEach((e=>e.classList.remove("active"))),document.getElementById(t+"Form").classList.add("active"),e.classList.add("active"),gsap.timeline().fromTo("#"+t+"Form",{opacity:0,x:500,scale:.9},{opacity:1,x:0,scale:1,duration:.5,ease:"power4.out"}).to("#"+t+"Form",{scale:1,duration:.2,ease:"elastic.out(1, 1)"}).to("#"+t+"Form",{scale:1,duration:.2,ease:"ease.out"})}))})),document.getElementById("loginForm")&&(document.getElementById("loginForm").addEventListener("submit",(function(e){e.preventDefault();const t=document.getElementById("loginEmail").value,n=document.getElementById("loginPassword").value;t&&n?alert("Logged in successfully"):document.getElementById("loginError").innerText="Please fill in all fields"})),document.getElementById("registerForm").addEventListener("submit",(function(e){e.preventDefault();const t=document.getElementById("registerName").value,n=document.getElementById("registerEmail").value,o=document.getElementById("registerPassword").value,a=document.getElementById("registerGender").value;t&&n&&o&&""!==a?alert("Account created successfully"):document.getElementById("registerError").innerText="Please fill in all fields"}))),document.getElementById("edit-modal")){const C=document.getElementById("edit-modal"),A=document.getElementById("avatar-img"),T=document.getElementById("avatar-input"),M=document.getElementById("avatar-preview");document.getElementById("edit-profile-btn").addEventListener("click",(()=>{document.getElementById("name-input").value=document.getElementById("profile-name").textContent,document.getElementById("birthday-input").value=document.getElementById("profile-birthday").textContent,document.getElementById("gender-input").value=document.getElementById("profile-gender").textContent,document.getElementById("location-input").value=document.getElementById("profile-location").textContent,M.src=A.src,C.style.display="flex"})),document.getElementById("close-btn").addEventListener("click",(()=>{C.style.display="none"})),T.addEventListener("change",(e=>{const t=e.target.files[0];if(t){const e=new FileReader;e.onload=e=>{M.src=e.target.result},e.readAsDataURL(t)}})),document.getElementById("save-btn").addEventListener("click",(()=>{document.getElementById("profile-name").textContent=document.getElementById("name-input").value,document.getElementById("profile-birthday").textContent=document.getElementById("birthday-input").value,document.getElementById("profile-gender").textContent=document.getElementById("gender-input").value,document.getElementById("profile-location").textContent=document.getElementById("location-input").value,M.src&&(A.src=M.src),C.style.display="none"}))}if(document.querySelectorAll(".chat-list-item")){const H=document.querySelectorAll(".chat-list-item"),j=document.querySelectorAll(".chat");H.forEach(((e,t)=>{e.addEventListener("click",(function(){H.forEach((e=>e.classList.remove("active"))),j.forEach((e=>e.classList.remove("active"))),e.classList.add("active"),j[t].classList.add("active")}))}))}if(document.querySelector(".chat-stream .stream-message-input")){const D=document.querySelector(".chat-stream .stream-message-input"),F=document.querySelector(".chat-stream .stream-send-btn"),P=document.querySelector(".chat-stream .stream-messages");function e(){const e=D.value.trim();if(!e)return;const t=document.createElement("div");t.classList.add("stream-message","stream-personal"),t.innerText=e,P.prepend(t);const n=document.createElement("div");n.classList.add("stream-message","stream-incoming"),n.innerText=e,P.prepend(n),D.value=""}F.addEventListener("click",e),D.addEventListener("keydown",(t=>{"Enter"===t.key&&(e(),t.preventDefault())}))}if(document.getElementById("file-input")&&document.getElementById("file-input").addEventListener("change",(function(e){const t=e.target.files[0];if(t){const e=new FileReader;e.onload=function(e){const t=document.querySelector(".messages-content"),n=document.createElement("div");n.classList.add("message","message-personal","new");const o=document.createElement("img");o.src=e.target.result,o.alt="Attached Image",o.style.maxWidth="250px",o.style.borderRadius="5px",o.style.display="block",n.appendChild(o);const a=document.createElement("div");a.classList.add("timestamp");const c=new Date;a.textContent=c.getHours()+":"+String(c.getMinutes()).padStart(2,"0"),n.appendChild(a),t.appendChild(n),t.scrollTop=t.scrollHeight},e.readAsDataURL(t)}})),document.querySelectorAll(".faq-item")&&document.querySelectorAll(".faq-item").forEach((e=>{const t=e.querySelector(".faq"),n=e.querySelector(".faq-info");gsap.set(n,{height:0,opacity:0,visibility:"hidden",overflow:"hidden"}),t.addEventListener("click",(function(){const e=n.classList.contains("active");t.classList.contains("active"),document.querySelectorAll(".faq-info").forEach((e=>{e!==n&&(gsap.to(e,{height:0,opacity:0,visibility:"hidden",duration:1,ease:"power2.out"}),e.classList.remove("active"))})),document.querySelectorAll(".faq").forEach((e=>{e!==t&&e.classList.remove("active")})),e?(gsap.to(n,{height:n.scrollHeight,duration:0,onComplete:()=>{gsap.to(n,{height:0,opacity:0,visibility:"hidden",duration:1,ease:"power2.out"})}}),n.classList.remove("active"),t.classList.remove("active")):(n.classList.add("active"),t.classList.add("active"),gsap.to(n,{height:"auto",opacity:1,visibility:"visible",duration:1,ease:"power2.out",onComplete:()=>n.style.height=""}))}))})),document.getElementById("tags")){const N=document.getElementById("tags"),U=document.getElementById("tagInput"),R=document.getElementById("addTag");let $=[];function t(){const e=U.value.trim();e&&$.length<3&&($.push(e),n(),U.value="")}function n(){N.innerHTML="",$.forEach(((e,t)=>{const n=document.createElement("div");n.classList.add("tag"),n.textContent=`#${e} `;const o=document.createElement("span");o.textContent="×",o.dataset.index=t,n.appendChild(o),N.appendChild(n)})),R.disabled=$.length>=3}R.addEventListener("click",t),U.addEventListener("keypress",(e=>{"Enter"===e.key&&(e.preventDefault(),t())})),N.addEventListener("click",(function(e){if("SPAN"===e.target.tagName&&void 0!==e.target.dataset.index){const t=e.target.dataset.index;$.splice(t,1),n()}}))}if(document.querySelectorAll(".gender-btn")&&(document.querySelectorAll(".gender-btn").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.getAttribute("data-value");document.getElementById("genderInput").value=t,localStorage.setItem("selectedGender",t),document.getElementById("genderSelectBtn").textContent=t.charAt(0).toUpperCase()+t.slice(1),document.getElementById("genderPopup").classList.remove("active"),console.log("Выбранный пол:",t)}))})),document.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("selectedGender");e&&(document.getElementById("genderInput").value=e,document.getElementById("genderSelectBtn").textContent=e.charAt(0).toUpperCase()+e.slice(1))}))),document.getElementById("heart")){const O=document.getElementById("heart"),W=document.getElementById("friendRequestPopup"),G=document.getElementById("popupMessage");O.addEventListener("click",(function(){W.style.display="block",G.textContent="A new friend just became your hero! 💚",setTimeout((()=>{W.classList.add("active")}),10),setTimeout((()=>{W.classList.remove("active"),setTimeout((()=>{W.style.display="none"}),500)}),2e3)}))}}));