import {allSkills,myTools,allProjects} from './data'
import {skillCard,projectCard} from './creatEle'

export function addHTML(){
    //skill section elemments
	const skillSec=document.querySelector('#skillSection')!
	allSkills.forEach((t)=>{
		skillSec.appendChild(skillCard(t))
	})
	skillSec.append('<br> Tools')
	myTools.forEach((t)=>{
		skillSec.appendChild(skillCard({...t,level:0}))
	})
	const projectSec=document.querySelector('#projectSection')!
	allProjects.forEach(p=>{
        projectSec.appendChild(projectCard(p))
    })
}