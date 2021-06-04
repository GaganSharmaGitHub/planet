import {Skill,Project} from './data'
export const skillCard=(skill:Skill):HTMLElement=>{
 const el= document.createElement('p')
 el.className="skillToken"
 el.innerHTML=`
 <p class="skillToken">
            <img src="${skill.image}" width="50px" alt="">
            <span>${skill.title}</span>
            <span>
          ${'⭐'.repeat(skill.level)}
            </span>
 `
 return el   
}

export const projectCard=(project:Project):HTMLElement=>{
  const el= document.createElement('p')
  el.className="skillToken"
  el.innerHTML=`
  <div class="projectCard">
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
          </div>
  `
  return el   
 }
/**
  <div class="projectCard">
            <img src="assets/logo/node.png" alt="Amuzic">
            <div>
            <h4>
              Amuzic
            </h4>
            <p class="allTech">
              <span>flutter</span>
              <span>flutter</span>
              <span>flutter</span>
              <span>flutter</span>
            </p>
            <p class="description">
            description:'manage lorenm ispnjnfebuebfbchebhfhmehbdebiufbuebfekjbj',
            </p>
            <a href="link">explore</a>
            </div>
          </div>
 */