var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,r=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;const l=e=>{const t=document.querySelector("div#ship");if(e>300)t.style.opacity="0";else if(t.style.opacity="1",e<50)t.style.backgroundSize="100vw 100vh";else if(e>=50&&e<250){const a=2*e/500,n=100+50*a,o=100+100*a;t.style.backgroundSize=`${n}vw ${o}vh`}else e>250&&(t.style.opacity="0")};function s(e){return e}const p=[{image:"logo/js.png",title:"Javascript",level:5},{image:"logo/java.png",title:"Java",level:5},{image:"logo/node.png",title:"NodeJs",level:5},{image:"logo/flutter.png",title:"Flutter",level:5},{image:"logo/react.png",title:"React",level:4},{image:"logo/Dart.png",title:"Dart",level:5},{image:"logo/mongo.png",title:"MongoDB",level:5},{image:"logo/html.png",title:"HTML",level:5},{image:"logo/css.png",title:"CSS",level:5},{image:"logo/Python-logo.png",title:"Python",level:5}],c=[{image:"logo/git.png",title:"Git"},{image:"logo/vscode.png",title:"Visual Studio Code"},{image:"logo/bootstrap.png",title:"Bootstrap"},{image:"logo/firebase.png",title:"Firebase"},{image:"logo/ts.png",title:"Typescript"},{image:"logo/postman.png",title:"Postman"},{image:"logo/sass.png",title:"SCSS"}],m=[{description:"REST API for a Twitter like social media platform",image:"projects/hap.png",link:"https://github.com/GaganSharmaGitHub/happening",tech:["Javascript","NodeJS","MongoDB","Express","Typescript"],title:"Happening"},{description:"the amazing music app powered with flutter",image:"projects/amuzicLogo.png",link:"https://github.com/GaganSharmaGitHub/Amuzic",tech:["Flutter","Firebase","YouTube API"],title:"Amuzic"},{description:"A smart home web app that allows you to monitor your home's temperature, door, and lets you turn devices on or off from any corner of world",image:"projects/smarthomelogo.svg",link:"ok.com",tech:["Javascript","IoT","HTML","CSS"],title:"SmartHome"},{description:"A bat killing game using HTML5 canvas",image:"projects/batslayer.png",link:"ok.com",tech:["Javascript","HTML","CSS"],title:"BatSlayer"},{description:"Classic tic-tac-toe game in react native",image:"projects/Tic_tac_toe.png",link:"ok.com",tech:["Javascript","React Native"],title:"Tic-Tac-Toe"},{description:"Basic Weather App",image:"projects/weather.png",link:"ok.com",tech:["Javascript","React"],title:"Weather Now"}],g=[{company:"India Health Link, Chennai IN",role:"Flutter Developer Intern",points:["Company focusing on preventive healthcare","Worked with a team in developing mobile application","Responsible for implementing various key features of app"],image:"company/ihl.jpg",time:"June 2020 - August 2020"},{company:"Raahee, Delhi IN",role:"Lead Software Developer",points:["A project funded by Cisco Thingqbator, Nasscom"," Worked as a team lead to develop and deploy applications for","Mental Health Professionals."," Built 2 cross platform applications using Flutter framework."," Designed and implemented a realtime chat server in Node.js."],image:"company/raahee.png",time:"November 2020 - Present"},{company:"AviIndia Pvt. Ltd., Delhi IN",role:"Freelance Developer",points:["Developed and delivered loan advice app","Built using Flutter and firebase","Integrated Facebook Audience Network ads"],image:"company/aviin.png",time:"October 2020 - November 2020"},{company:"CrowdSurf, Stanford CA",role:"Lead Software Developer",points:["A social planning app to drive forward real-life interactions for Generation Z.","Building a cross-platform app using the Flutter framework.","Designing and implementing web services in firebase."],image:"company/Crowdsurf.png",time:"June 2020 - August 2020"}],d=[{link:"mailto:gagan3103sharma2000@gmail.com",username:"gagan3103sharma2000@gmail.com",platform:"Mail"},{link:"https://www.linkedin.com/in/gagan-sharma3103/",username:"/in/gagan-sharma3103/",platform:"LinkedIn"},{link:"https://github.com/GaganSharmaGitHub",username:"/GaganSharmaGitHub",platform:"GitHub"},{link:"https://t.me/NevermindGags",username:"/NevermindGags",platform:"Telegram"}],u=e=>{const t=document.createElement("div");return t.className="skillCard",t.innerHTML=`\n            <div>\n            <img src="${e.image}" width="50px" alt="">\n            <span>${e.title}</span>\n            </div>\n            <br/>\n            <div>\n            <span>\n          ${"⭐".repeat(e.level)}\n            </span>\n            </div>\n `,t};function h(){const e=document.querySelector("#skillList");p.forEach((t=>{e.appendChild(u(t))}));const l=document.querySelector("#toolList");c.forEach((e=>{var s;l.appendChild(u((s=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&r(e,a,t[a]);if(n)for(var a of n(t))i.call(t,a)&&r(e,a,t[a]);return e})({},e),t(s,a({level:0})))))}));const s=document.querySelector("#projectList");m.forEach((e=>{s.appendChild((e=>{const t=document.createElement("div");return t.className="projectCard",t.innerHTML=`\n            <img src="${e.image}" alt="${e.title}">\n            <div>\n            <h4>\n              ${e.title}\n            </h4>\n            <p class="allTech">\n            ${e.tech.map((e=>`<span>${e}</span> `))}\n            </p>\n            <p class="description">\n            ${e.description}\n            </p>\n            <a href="${e.link}">\n            <button class="b1">\n            Explore\n            </button></a>\n            </div>\n  `,t})(e))}));const h=document.querySelector("#expList");g.forEach((e=>{h.appendChild((e=>{const t=document.createElement("div");return t.classList.add("expCard","card"),t.innerHTML=`\n  <img src="${e.image}" alt="${e.company}">\n  <div class="textCont">  \n    <h3>${e.company}</h3>\n    <h4>${e.role},</h4> \n    <span class="time">${e.time}</span>\n    <br/>\n    <br/>\n    <ul class="companypoints">\n    ${e.points.map((e=>`<li>✨ ${e}.</li> `))}\n    </ul>\n  </div>\n  `,t})(e))}));const v=document.querySelector("#contactList");d.map((e=>{v.appendChild((e=>{const t=document.createElement("li");return t.classList.add("contact",e.platform),t.innerHTML=`\n  <a href="${e.link}"><button>\n  <span class="platform">${e.platform}</span>\n  <span class="username">${e.username}</span>\n  </button></a>\n  `,t})(e))}))}export{h as a,p as b,s as g,l as h,c as m};
