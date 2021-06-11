import {allSkills,myTools,allProjects,myExp} from './data'
import {skillCard,projectCard,expCard} from './creatEle'

export function addHTML(){
    //skill section elemments
	const skillSec=document.querySelector('#skillList')!
	allSkills.forEach((t)=>{
		skillSec.appendChild(skillCard(t))
	})
	const toolSec=document.querySelector('#toolList')!
	
	myTools.forEach((t)=>{
		toolSec.appendChild(skillCard({...t,level:0}))
	})
	const projectSec=document.querySelector('#projectList')!
	allProjects.forEach(p=>{
        projectSec.appendChild(projectCard(p))
    })
	const expSec=document.querySelector('#expList')!
	myExp.forEach(e=>{
        expSec.appendChild(expCard(e))
    })
}