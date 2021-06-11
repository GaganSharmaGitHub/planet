import {Skill,Project, Exp} from './data'
export const skillCard=(skill:Skill):HTMLElement=>{
 const el= document.createElement('div')
 el.className="skillCard"
 el.innerHTML=`
            <img src="${skill.image}" width="50px" alt="">
            <span>${skill.title}</span>
            <span>
          ${'⭐'.repeat(skill.level)}
            </span>
 `
 return el   
}

export const projectCard=(project:Project):HTMLElement=>{
  const el= document.createElement('div')
  el.className="projectCard"
  el.innerHTML=`
            <img src="${project.image}" alt="Amuzic">
            <div>
            <h4>
              ${project.title}
            </h4>
            <p class="allTech">
            ${project.tech.map((e)=>`<span>${e}</span>`)}
            </p>
            <p class="description">
            ${project.description}
            </p>
            <a href="${project.link}">explore</a>
            </div>
  `
  return el   
 }

 
export const expCard=(exp:Exp):HTMLElement=>{
  const el= document.createElement('div')
  el.className="expCard"
  el.innerHTML=`
  <img src="${exp.image}" alt="${exp.company}">
  <div class="textCont">  
    <h3>${exp.company}</h3>
    <h4>${exp.role},</h4> 
    <span class="time">${exp.time}</span>
    <ul class="companypoints">
    ${exp.points.map((p)=>
      `<li>${p}</li>`
      )}
    </ul>
  </div>
  `
  return el   
 }