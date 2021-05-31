import {Skill} from './main'
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