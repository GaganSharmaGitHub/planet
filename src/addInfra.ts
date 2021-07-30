import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export function addInfra(scene:THREE.Scene){
    const gtloader = new GLTFLoader()
    
	gtloader.load('/models/buld/Bulldozer.gltf',
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
	gtloader.load('/models/dumbtruck/Dump_Truck_01.gltf',
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
	gtloader.load('/models/cabin/Cabin 2.gltf',
	(gltfmodel)=>{
	const house= gltfmodel.scene
	house.scale.setScalar(0.01)
	house.children[2].visible=false
	house.position.set(-15,0,35)
	house.rotateY(3*Math.PI/4)
	scene.add(house)
	},undefined,console.log)
	//wood
	gtloader.load('/models/woodpile/model.gltf',
	(gltfmodel)=>{
	const wpile= gltfmodel.scene
	wpile.scale.setScalar(4)
	//g('plants')
	//g(gltfmodel)
	//'wp',wpile)

	wpile.position.set(7,-5,22)
	wpile.rotateY(3*Math.PI/4)
	scene.add(wpile)
	},undefined,console.log)
    
	gtloader.load('/models/silo/PUSHILIN_silo.gltf',
	(gltfmodel)=>{
	const silo= gltfmodel.scene
    silo.children[2].visible=false
    silo.scale.setScalar(5)
	silo.position.set(14,5,50)
	scene.add(silo)
	},undefined,console.log)

	gtloader.load('/models/windm/PUSHILIN_windmill.gltf',
	(gltfmodel)=>{
	const windm= gltfmodel.scene
    windm.scale.setScalar(5)
    windm.children[2].visible=false
    //'windm')
    //windm)
	windm.position.set(-13,5,45)
	scene.add(windm)
	},undefined,console.log)
    
	gtloader.load('/models/wheat/FieldOfWheat.gltf',
	(gltfmodel)=>{
	const barn= gltfmodel.scene.children[0].children[0].children[0]
    barn.scale.setScalar(0.1)
    //barn.remove(barn.children[2])
    //'barn')
    //barn)
    let z=37
    for(;z<56;z+=2){
    for(let x=-20;x<20;x+=2){
        const w2=barn.clone();
        //(w2.children[2] as THREE.DirectionalLight).visible=false;
        w2.position.set(x,0,z)
		scene.add(w2)    
    }
}
},undefined,console.log)
//===== industrial
gtloader.load('/models/skysc/PUSHILIN_skyscraper.gltf',
	(gltfmodel)=>{
	const skyscraper= gltfmodel.scene
    skyscraper.scale.set(4,3,4)
   skyscraper.children[2].visible=false
	skyscraper.position.set(4,6,64)
	skyscraper.rotateY(Math.PI)
	scene.add(skyscraper)
	},undefined,console.log)

	gtloader.load('/models/skysc2/model.gltf',
	(gltfmodel)=>{
	const factory= gltfmodel.scene
    factory.scale.set(7,5,7)
   factory.children[2].visible=false
	factory.position.set(-8,-4,62)
	scene.add(factory)
	},undefined,console.log)
    
	gtloader.load('/models/skyscs/Skycraper_173.gltf',
	(gltfmodel)=>{
	const ssc= gltfmodel.scene
    ssc.scale.setScalar(0.05)
   //factory.children[2].visible=false
	ssc.position.set(15,0,65)
	scene.add(ssc)
	},undefined,console.log)

	gtloader.load('/models/factory/CUPIC_FACTORy.gltf',
	(gltfmodel)=>{
	const factory= gltfmodel.scene
    factory.scale.setScalar(0.02)
   factory.children[2].visible=false
	factory.position.set(-10,0,63)
	scene.add(factory)
	},undefined,console.log)
   gtloader.load('/models/canyon/model.gltf',
	(gltfmodel)=>{
	const canyon= gltfmodel.scene
	//console.log(gltfmodel)
   canyon.scale.setScalar(15)
	canyon.position.set(3,-7.5,85)
	scene.add(canyon)
	},undefined,console.log)
    
}