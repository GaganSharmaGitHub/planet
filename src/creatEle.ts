import {Skill,Project, Exp, Contact} from './data'
export const skillCard=(skill:Skill):HTMLElement=>{
 const el= document.createElement('div')
 el.className="skillCard"
  el.innerHTML =`
            <div>
            <img src="${skill.image}" width="50px" alt="">
            <span>${skill.title}</span>
            </div>
            <br/>
            <div>
            <span>
          ${'⭐'.repeat(skill.level)}
            </span>
            </div>
 `
 return el   
}

export const projectCard=(project:Project):HTMLElement=>{
  const el= document.createElement('div')
  el.className="projectCard"
  el.innerHTML=`
            <img src="${project.image}" alt="${project.title}">
            <div>
            <h4>
              ${project.title}
            </h4>
            <p class="allTech">
            ${project.tech.map((e)=>`<span>${e}</span> `)}
            </p>
            <p class="description">
            ${project.description}
            </p>
            <a href="${project.link}">
            <button class="b1">
            Explore
            </button></a>
            </div>
  `
  return el   
 }

 
export const expCard=(exp:Exp):HTMLElement=>{
  const el= document.createElement('div')
  el.classList.add("expCard","card")
  el.innerHTML=`
  <img src="${exp.image}" alt="${exp.company}">
  <div class="textCont">  
    <h3>${exp.company}</h3>
    <h4>${exp.role},</h4> 
    <span class="time">${exp.time}</span>
    <br/>
    <br/>
    <ul class="companypoints">
    ${exp.points.map((p)=>
      `<li>✨ ${p}.</li> `
      )}
    </ul>
  </div>
  `
  return el   
 }
 export const contactCard=(contact:Contact):HTMLElement=>{
  const el= document.createElement('li')
  el.classList.add("contact",contact.platform,)
   el.innerHTML =`
  <a href="${contact.link}"><button>
  <span class="platform">${contact.platform}</span>
  <span class="username">${contact.username}</span>
  </button></a>
  `
  return el   
 }