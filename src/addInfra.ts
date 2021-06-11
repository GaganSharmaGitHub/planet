import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export function addInfra(scene:THREE.Scene){
    const gtloader = new GLTFLoader()
    
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
	truck.position.set(7,0.1,29)
	truck.rotateY(3*Math.PI/4)
	scene.add(truck)
	},undefined,console.log)
	// constr house
	gtloader.load('assets/models/cabin/Cabin 2.gltf',
	(gltfmodel)=>{
	const house= gltfmodel.scene
	house.scale.setScalar(0.01)
	house.children[2].visible=false
	house.position.set(-15,0,35)
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

	wpile.position.set(7,-5,22)
	wpile.rotateY(3*Math.PI/4)
	scene.add(wpile)
	},undefined,console.log)
    
	gtloader.load('assets/models/silo/PUSHILIN_silo.gltf',
	(gltfmodel)=>{
	const silo= gltfmodel.scene
    silo.children[2].visible=false
    silo.scale.setScalar(5)
	silo.position.set(14,5,50)
	scene.add(silo)
	},undefined,console.log)
	gtloader.load('assets/models/windm/PUSHILIN_windmill.gltf',
	(gltfmodel)=>{
	const windm= gltfmodel.scene
    windm.scale.setScalar(5)
    windm.children[2].visible=false
    console.log('windm')
    console.log(windm)
	windm.position.set(-13,5,45)
	scene.add(windm)
	},undefined,console.log)
    
	gtloader.load('assets/models/wheat/FieldOfWheat.gltf',
	(gltfmodel)=>{
	const barn= gltfmodel.scene.children[0].children[0].children[0]
    barn.scale.setScalar(0.2)
    //barn.remove(barn.children[2])
    console.log('barn')
    console.log(barn)
    let z=40

    for(;z<60;z+=3){
    for(let x=-20;x<20;x+=3){
        const w2=barn.clone();
        //(w2.children[2] as THREE.DirectionalLight).visible=false;
        w2.position.set(x,0,z)
scene.add(w2)    
    }
}
    
	},undefined,console.log)
}