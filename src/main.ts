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
	image:'assets/my.jpg',
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
(async()=>{

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
	ambientLight.intensity=0.5
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
	//TODO
	scene.add(meshFloor)	
	const gtloader = new GLTFLoader()

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
	//===============assets
	//fall tree
	gtloader.load('assets/models/falltree/model.gltf',
	(gltfmodel)=>{
	const tree= gltfmodel.scene
	
	tree.scale.setScalar(1)
	tree.position.set(0,3,22)
	//g(tree)
	tree.children[2].visible=false
	let i=0
	while(i<6){
		addrandomonfloor(tree.clone(),3)
		i++
	}
	})//bldr
	gtloader.load('assets/models/bouldar/boulder_03.gltf',
	(gltfmodel)=>{
	const bldr= gltfmodel.scene
	bldr.scale.setScalar(0.01)
	bldr.position.set(0,0,22)
	bldr.children[2].visible=false
	//g('bldr')
	//g(bldr)
	bldr.rotation.y+=Math.PI/2
	bldr.children[2].visible=false
	let i=0
	while(i<3){
		addrandomonfloor(bldr.clone(),0)
		i++
	}
	})
	//cactus
	gtloader.load('assets/models/cactus/PipeOrganCactus.gltf',
	(gltfmodel)=>{
	const cactus= gltfmodel.scene
	cactus.scale.setScalar(0.3)
	cactus.position.set(0,0,22)
	cactus.children[2].visible=false
	//g('bldr')
	//g(bldr)
	let i=0
	while(i<7){
		addrandomonfloor(cactus.clone(),0)
		i++
	}
	})
	//been
	gtloader.load('assets/models/beanstalk/PUSHILIN_Beanstalk.gltf',
	(gltfmodel)=>{
	const bean= gltfmodel.scene
	bean.scale.setScalar(1)
	bean.position.set(0,0,22)
	bean.children[2].visible=false
	//g('bldr')
	//g(bldr)
	let i=0
	while(i<7){
		addrandomonfloor(bean.clone(),0)
		i++
	}
	})
	//babmm
	gtloader.load('assets/models/bamboo/PUSHILIN_bamboo.gltf',
	(gltfmodel)=>{
	const bamboo= gltfmodel.scene
//	bamboo.scale.setScalar(0.3)
	bamboo.children[2].visible=false
	//g('bldr')
	//g(bldr)
	let i=0

	while(i<7){
		addrandomonfloor(bamboo.clone(),1)
		i++
	}
	})
	//willow
	gtloader.load('assets/models/weepwillow/WeepingWillowTree.gltf',
	(gltfmodel)=>{
	const tree= gltfmodel.scene.children[0]
	tree.scale.setScalar(0.5)
	//g(tree)
	 let i=0
	 while(i<6){
	 	addrandomonfloor(tree.clone())
	 	i++
	 }
	})

	function addrandomonfloor(obj:THREE.Object3D,yoffset?:number) {
		const [x, z] =[
		THREE.MathUtils.randFloat(-30,30),
		THREE.MathUtils.randFloat(0,200)
		]
		obj.position.set(x, yoffset||0, z)
		scene.add(obj)
	  }
  
	let znow=16;  
	for(let i=0;i<500;i++)addStar(); 
	mesh.position.y += 3
	mesh.position.z=2
   // Move the mesh up 1 meter
	scene.add(mesh)
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
	standboard.position.set(1.5,1,15)
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
		   znow+= 1.5
		   skillBoard.position.set(1.5,1,znow)
		   skillBoard.rotation.y+=Math.PI
		   scene.add(skillBoard)
		 }
		 for(let i=0;i<tool.length;i++){
			const geometry = new THREE.PlaneGeometry(0.3,0.3)
			const material = new THREE.MeshStandardMaterial({
				map:new THREE.TextureLoader().load(tool[i].image),
				transparent:true
			  //  displacementScale:-1
			  })
			const hoard = new THREE.Mesh(geometry, material)
			const skillBoard = plankboard.clone()
			hoard.position.set(0.6,-0.2,0.05)
			skillBoard.add(hoard)
			znow+= 1.5
			skillBoard.position.set(1.5,1,znow)
			skillBoard.rotation.y+=Math.PI
			scene.add(skillBoard)
		  }
	}, undefined, function ( error ) {
	console.error( error )
	} )
	gtloader.load('assets/models/buld/Bulldozer.gltf',
	(gltfmodel)=>{
	const bulldozer= gltfmodel.scene
	
	bulldozer.scale.setScalar(0.3)
	bulldozer.position.set(-4,0.1,22)
	//g(bulldozer)
	bulldozer.children[2].visible=false
	bulldozer.rotateY(3*Math.PI/4)
	scene.add(bulldozer)
	})
	//truck
	gtloader.load('assets/models/dumbtruck/Dump_Truck_01.gltf',
	(gltfmodel)=>{
	const truck= gltfmodel.scene
	truck.children[2].visible=false
	truck.scale.setScalar(0.3)
	//g('scaffold')
	truck.position.set(-4,0,30)
	truck.rotateY(3*Math.PI/4)
	scene.add(truck)
	},undefined,console.log)
	// constr house
	gtloader.load('assets/models/cabin/Cabin 2.gltf',
	(gltfmodel)=>{
	const house= gltfmodel.scene
	house.scale.setScalar(0.01)
	//g('scaffold00')
	house.children[2].visible=false

	house.position.set(-15,0,40)
	house.rotateY(3*Math.PI/4)
	scene.add(house)
	},undefined,console.log)
	//wood
	gtloader.load('assets/models/woodpile/model.gltf',
	(gltfmodel)=>{
	const wpile= gltfmodel.scene
	wpile.scale.setScalar(4)
	//g('plants')
	//g(gltfmodel)
	console.log('wp',wpile)

	wpile.position.set(7,-5,30)
	wpile.rotateY(3*Math.PI/4)
	scene.add(wpile)
	},undefined,console.log)
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