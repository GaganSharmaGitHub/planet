import './style.css'
import * as THREE from 'three'
import { headerScroll } from './headScroll'
import {skillCard} from './creatEle'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
//import { DirectionalLight } from 'three'
export interface Skill{
	title:string,
	image:string,
	level:0|1|2|3|4|5,
	obj?:any
}
export interface Tool{
	title:string,
	image:string,
}
const allSkills:Skill[]=[
	{image:'assets/logo/Python-logo.png',
	title:'Javascript',
	level:5
    },
	{image:'assets/logo/Python-logo.png',
	title:'Java',
	level:5},
	{
	image:'assets/logo/Python-logo.png',
	title:'Flutter',
	level:5
	},
	{
		image:'assets/logo/Python-logo.png',
		title:'React',
		level:5,
		},
		
	{
		image:'assets/logo/Python-logo.png',
		title:'PYTHON',
		level:3,
	},
		
	{image:'assets/logo/Python-logo.png',
	title:'HTML',
	level:5,
	},
	{
	image:'assets/logo/Python-logo.png',
	title:'Dart',
	level:5,
	},
	
	{
	image:'assests/my.jpg',
	title:'CSS',
	level:5,
	},


]
const tool:Tool[]=allSkills
const app = document.querySelector<HTMLCanvasElement>('#bg')!
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30)
const renderer = new THREE.WebGLRenderer({
  canvas: app,
})
const keyboard:any = {}
const player = { height:1.8, speed:0.2, turnSpeed:Math.PI*0.02 }
//mesh
let mesh = new THREE.Mesh(
	new THREE.OctahedronGeometry(1),
	new THREE.MeshBasicMaterial({color:0xff4444, wireframe:true})
  )

//face cube
const faceTexture = new THREE.TextureLoader().load('assets/my.jpg')

const faceCube = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), new THREE.MeshBasicMaterial({ map: faceTexture }))
faceCube.position.set(-3,1.5,12)
scene.add(faceCube);

//init
(()=>{

	//skill section elemments
	const skillSec=document.querySelector('#skillSection')!
	allSkills.forEach((t)=>{
		skillSec.appendChild(skillCard(t))
	})
	skillSec.append('<br> Tools')
	tool.forEach((t)=>{
		skillSec.appendChild(skillCard({...t,level:0}))
	})
	//configure
	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(window.innerWidth, window.innerHeight)
	renderer.render(scene, camera)
	//camera
	camera.position.set(0, player.height, -5)
	camera.lookAt(new THREE.Vector3(0,player.height,0))
	
	// bg
	const spaceTexture = new THREE.TextureLoader().load('assets/nbg.jpg')
	spaceTexture.repeat
	scene.background = spaceTexture

	// Lights
	const ambientLight = new THREE.AmbientLight(0xffffff)
	scene.add( ambientLight)

	//floor	
	const floorTexture = new THREE.TextureLoader().load('assets/planet.jpg')
	floorTexture.wrapS= THREE.RepeatWrapping
	floorTexture.wrapT= THREE.RepeatWrapping
	floorTexture.offset.set( 0, 0 )
	floorTexture.repeat.set( 70, 70 )
	const floorNormalTexture = new THREE.TextureLoader().load('assets/planetNormal.png')
	floorNormalTexture.wrapS= THREE.RepeatWrapping
	floorNormalTexture.wrapT= THREE.RepeatWrapping
	floorNormalTexture.offset.set( 0, 0 )
	floorNormalTexture.repeat.set( 70, 70 )
	const meshFloor = new THREE.Mesh(
	new THREE.PlaneGeometry(1000,1000, 10,10),
	new THREE.MeshStandardMaterial({
		map: floorTexture,
		normalMap:floorNormalTexture,
		displacementScale:-1
	})
	)
	meshFloor.rotation.x -= Math.PI / 2 // Rotate the floor 90 degrees
	scene.add(meshFloor)	
//============== objects
	//** stars**
	 //star
	 function addStar() {
		const geometry = new THREE.SphereGeometry(0.1, 24, 24)
		const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
		const star = new THREE.Mesh(geometry, material)
		const [x, y, z] =[
		THREE.MathUtils.randFloat(-20,20),
			THREE.MathUtils.randFloat(0,50),
		THREE.MathUtils.randFloat(0,200)
		]
		star.position.set(x, y, z)
		scene.add(star)
	  }
	  
	for(let i=0;i<500;i++)addStar()
	  
	mesh.position.y += 3
	mesh.position.z=2
   // Move the mesh up 1 meter
	scene.add(mesh)
	//skill board 3d model
	const gtloader = new GLTFLoader()
	gtloader.load( 'assets/models/board.json', function ( gltf ) {
		for(let i=0;i<allSkills.length;i++){
		   const geometry = new THREE.PlaneGeometry(0.5,0.5)
		   const material = new THREE.MeshStandardMaterial({
			   map:new THREE.TextureLoader().load(allSkills[i].image),
			   transparent:true
			 //  displacementScale:-1
			 })
		   const hoard = new THREE.Mesh(geometry, material)
		   const skillBoard = gltf.scene.clone()
		   hoard.position.y=1.5
		   hoard.position.z-=0.25
		   hoard.position.x+=0.4
		   skillBoard.add(hoard)
		   skillBoard.castShadow=true
		   skillBoard.position.set(1.5,0,17+i*2)
		   skillBoard.rotation.y+=Math.PI
		   {
			   skillBoard.children[1].visible=false
			   skillBoard.children[2].visible=false
		   }
		   console.log(skillBoard.children)
		   scene.add(skillBoard)
		 }
		   }, undefined, function ( error ) {
			   console.error( error )
		   } )	   
})()

function keyDown(event:KeyboardEvent){
	keyboard[event.keyCode] = true
	if(event.key=='g') console.log(camera.position)
}

function keyUp(event:KeyboardEvent){
	keyboard[event.keyCode] = false
}

window.addEventListener('keydown', keyDown)
window.addEventListener('keyup', keyUp)
//handle scroll
const handleScroll=(_e:Event)=>{
	const pos= window.scrollY
	if(pos<=300)headerScroll(pos)
	camera.position.z = pos/100
}

window.addEventListener('scroll',handleScroll)

animate()
function animate() {
  requestAnimationFrame(animate)

 // moon.rotation.y += 0.005
//  moon.rotation.z += 0.01


  // controls.update()
  mesh.rotation.x += 0.01
	mesh.rotation.y += 0.02
	mesh.rotation.z += 0.02
	faceCube.rotation.y += 0.02
	
	// Keyboard movement inputs
	if(keyboard[87]){ // W key
	//	camera.position.x -= Math.sin(camera.rotation.y) * player.speed
		camera.position.z -= -Math.cos(camera.rotation.y) * player.speed
	}
	if(keyboard[83]){ // S key
	//	camera.position.x += Math.sin(camera.rotation.y) * player.speed
		camera.position.z += -Math.cos(camera.rotation.y) * player.speed
	}
	if(keyboard[65]){ // A key
		// Redirect motion by 90 degrees
		camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed
		camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed
	}
	if(keyboard[68]){ // D key
		camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed
		camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed
	}
	
	// Keyboard turn inputs
	if(keyboard[37]){ // left arrow key
		camera.rotation.y -= player.turnSpeed
	}
	if(keyboard[39]){ // right arrow key
		camera.rotation.y += player.turnSpeed
	}
  renderer.render(scene, camera)
}
animate()