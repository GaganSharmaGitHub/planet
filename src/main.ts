import './style.css'
import * as THREE from 'three'
import { headerScroll } from './headScroll'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {allSkills,getImageUrl,myTools} from './data'
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
	new THREE.MeshBasicMaterial({ color: 0x3137fd, wireframe: true })
);
let faceCube:any;
//face cube

//init
(async()=>{
	addHTML()
	    document.getElementById("loading")!.style.display = 'none';
    document.getElementById("app")!.style.display = 'block';

	//configure
	renderer.setPixelRatio(window.devicePixelRatio)
	renderer.setSize(window.innerWidth, window.innerHeight)
	renderer.render(scene, camera)
	//camera
	camera.position.set(0, player.height, -5)
	camera.lookAt(new THREE.Vector3(0,player.height,0))
	
	// bg
	const spaceTexture = new THREE.TextureLoader().load('/nbg.jpg')
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
const faceTexture = new THREE.TextureLoader().load('/my.jpg')
 faceCube = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), new THREE.MeshBasicMaterial({ map: faceTexture }))
faceCube.position.set(-3,1.5,12)
scene.add(faceCube);

   let znow=16;  	
   scene.add(mesh)
   const gtloader = new GLTFLoader()
   addInfra(scene)
	//skill board 3d model
	await gtloader.load( 'models/construction_barricades/scene.gltf', function ( gltfmodel ) {
		const gltf=gltfmodel.scene
		//.children[0].children[0]
		//g('signs loaded')
		const standboard=gltf.clone()
		const plankboard=gltf.clone()
		//console.log('st', standboard,'pl',plankboard)
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
			   map:new THREE.TextureLoader().load(getImageUrl(allSkills[i].image)),
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

const handleScroll=(_e:Event)=>{
	const pos= window.scrollY
    headerScroll(pos)
	camera.position.z = pos/100
}

window.addEventListener('scroll',handleScroll)

animate()
function animate() {
  requestAnimationFrame(animate)

  mesh.rotation.x += 0.01
	mesh.rotation.y += 0.02
	mesh.rotation.z += 0.02
	if(faceCube)faceCube.rotation.y += 0.02
	
 renderer.render(scene, camera)
}
animate()