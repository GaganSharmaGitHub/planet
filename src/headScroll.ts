
export const headerScroll=(position: number)=>{
const ship=document.querySelector<HTMLElement>('div#ship')!
//const head=document.querySelector('header')
ship.style.opacity='1'

if(position<50){
    ship.style.backgroundSize=`100vw 100vh`

}else
if(position>=50 && position<250){
    const d100=position*2/500
    const xScale=100+50*d100
    const yScale=100+100*d100
    ship.style.backgroundSize=`${xScale}vw ${yScale}vh`
}else if(position>250){

    ship.style.opacity='0'
}

}