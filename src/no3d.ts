import './style.css'
import { headerScroll } from './headScroll'
import { addHTML } from './htmlAddition'

//init
(async () => {

	addHTML()
    document.getElementById("loading")!.style.display = 'none';
    document.getElementById("app")!.style.display = 'block';
})()

const handleScroll=(_e:Event)=>{
	const pos= window.scrollY
    headerScroll(pos)
}

window.addEventListener('scroll',handleScroll)
