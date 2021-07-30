import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export function addEnv(scene:THREE.Scene){
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
	//===============public
	//fall tree
	gtloader.load('models/falltree/model.gltf',
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
	gtloader.load('models/bouldar/boulder_03.gltf',
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
	gtloader.load('models/cactus/PipeOrganCactus.gltf',
	(gltfmodel)=>{
	const cactus= gltfmodel.scene
	cactus.scale.setScalar(0.3)
	cactus.position.set(0,0,22)
	cactus.children[2].visible=false
	//g('bldr')
		//console.log(cactus);
	let i=0
	while(i<7){
		addrandomonfloor(cactus.clone(),0)
		i++
	}
	})
	//been
	gtloader.load('models/beanstalk/PUSHILIN_Beanstalk.gltf',
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
	gtloader.load('models/bamboo/PUSHILIN_bamboo.gltf',
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
	gtloader.load('models/weepwillow/WeepingWillowTree.gltf',
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
  
	for(let i=0;i<500;i++)addStar(); 

}