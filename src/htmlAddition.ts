import {allSkills,myTools} from './data'
import {skillCard} from './creatEle'
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
	
}