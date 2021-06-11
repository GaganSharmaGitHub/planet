import './style.css'
import * as THREE from 'three'
import { headerScroll } from './headScroll'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {allSkills,myTools} from './data'
import { addFloor } from './addFloor'
import { addHTML } from './htmlAddition'
import { addEnv } from './addEnv'
import { addInfra } from './addInfra'
//import { DirectionalLight } from 'three'
const app = document.querySelector<HTMLCanvasElement>('#bg')!
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30)
const renderer = new THREE.WebGLRenderer({
  canvas: app,
})
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
(async()=>{
	addHTML()
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
	ambientLight.intensity=0.5
	scene.add( ambientLight)
	//add floor
	addFloor(scene)
	addEnv(scene)
	mesh.position.y += 3
	mesh.position.z=2
   // Move the mesh up 1 meter

   let znow=16;  	
   scene.add(mesh)
   const gtloader = new GLTFLoader()
   addInfra(scene)
	//skill board 3d model
	await gtloader.load( 'assets/models/construction_barricades/scene.gltf', function ( gltfmodel ) {
		const gltf=gltfmodel.scene
		//.children[0].children[0]
		//g('signs loaded')
		const standboard=gltf.clone()
		const plankboard=gltf.clone()
		console.log('st', standboard,'pl',plankboard)
	for(let i=0;i<standboard.children[0].children[0].children[0].children.length;i++){
		standboard.children[0].children[0].children[0].children[i].visible=i<4
		plankboard.children[0].children[0].children[0].children[i].visible=!(i<4)
		if(i>10){
			plankboard.children[0].children[0].children[0].children[i].visible=false
		}
	}
	standboard.position.set(2,1,15)
	standboard.rotation.y+=Math.PI
	scene.add(standboard)
		for(let i=0;i<allSkills.length;i++){
		   const geometry = new THREE.PlaneGeometry(0.3,0.3)
		   const material = new THREE.MeshStandardMaterial({
			   map:new THREE.TextureLoader().load(allSkills[i].image),
			   transparent:true
			 //  displacementScale:-1
			 })
		   const hoard = new THREE.Mesh(geometry, material)
		   const skillBoard = plankboard.clone()
		   hoard.position.set(0.6,-0.2,0.05)
		   skillBoard.add(hoard)
		   ////g(allSkills[i])
		   znow+= 1.2
		   skillBoard.position.set(2,1,znow)
		   skillBoard.rotation.y+=Math.PI
		   scene.add(skillBoard)
		 }
		 for(let i=0;i<myTools.length;i++){
			const geometry = new THREE.PlaneGeometry(0.3,0.3)
			const material = new THREE.MeshStandardMaterial({
				map:new THREE.TextureLoader().load(myTools[i].image),
				transparent:true
			  //  displacementScale:-1
			  })
			const hoard = new THREE.Mesh(geometry, material)
			const skillBoard = plankboard.clone()
			hoard.position.set(0.6,-0.2,0.05)
			skillBoard.add(hoard)
			znow+= 1.2
			skillBoard.position.set(2,1,znow)
			skillBoard.rotation.y+=Math.PI
			scene.add(skillBoard)
		  }
	}, undefined, function ( error ) {
	console.error( error )
	} )
})()

// function keyDown(event:KeyboardEvent){
// 	keyboard[event.keyCode] = true
// 	if(event.key=='g') console.log(camera.position)
// }

// function keyUp(event:KeyboardEvent){
// 	keyboard[event.keyCode] = false
// }

// window.addEventListener('keydown', keyDown)
// window.addEventListener('keyup', keyUp)
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
	
	// // Keyboard movement inputs
	// if(keyboard[87]){ // W key
	// //	camera.position.x -= Math.sin(camera.rotation.y) * player.speed
	// 	camera.position.z -= -Math.cos(camera.rotation.y) * player.speed
	// }
	// if(keyboard[83]){ // S key
	// //	camera.position.x += Math.sin(camera.rotation.y) * player.speed
	// 	camera.position.z += -Math.cos(camera.rotation.y) * player.speed
	// }
	// if(keyboard[65]){ // A key
	// 	// Redirect motion by 90 degrees
	// 	camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed
	// 	camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed
	// }
	// if(keyboard[68]){ // D key
	// 	camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed
	// 	camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed
	// }
	
	// // Keyboard turn inputs
	// if(keyboard[37]){ // left arrow key
	// 	camera.rotation.y -= player.turnSpeed
	// }
	// if(keyboard[39]){ // right arrow key
	// 	camera.rotation.y += player.turnSpeed
	// }
  renderer.render(scene, camera)
}
animate()