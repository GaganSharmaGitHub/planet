
import * as THREE from 'three'

export function addFloor(scene:THREE.Scene){

	//floor	
	const floorTexture = new THREE.TextureLoader().load('assets/planet/planet.jpg')
	floorTexture.wrapS= THREE.RepeatWrapping
	floorTexture.wrapT= THREE.RepeatWrapping
	floorTexture.offset.set( 0, 0 )
	floorTexture.repeat.set( 70, 70 )
	const floorNormalTexture = new THREE.TextureLoader().load('assets/planet/NormalMap.png')
	floorNormalTexture.wrapS= THREE.RepeatWrapping
	floorNormalTexture.wrapT= THREE.RepeatWrapping
	floorNormalTexture.offset.set( 0, 0 )
	floorNormalTexture.repeat.set( 70, 70 )
    
	const floorDisplacementTexture = new THREE.TextureLoader().load('assets/planet/DisplacementMap.png')
	floorDisplacementTexture.wrapS= THREE.RepeatWrapping
	floorDisplacementTexture.wrapT= THREE.RepeatWrapping
	floorDisplacementTexture.offset.set( 0, 0 )
	floorDisplacementTexture.repeat.set( 70, 70 )
	const floorAOTexture = new THREE.TextureLoader().load('assets/planet/AmbientOcclusionMap.png')
	floorAOTexture.wrapS= THREE.RepeatWrapping
	floorAOTexture.wrapT= THREE.RepeatWrapping
	floorAOTexture.offset.set( 0, 0 )
	floorAOTexture.repeat.set( 70, 70 )
    
	const meshFloor = new THREE.Mesh(
	new THREE.PlaneGeometry(1000,1000, 10,10),
	new THREE.MeshStandardMaterial({
		map: floorTexture,
        aoMap:floorAOTexture,
		normalMap:floorNormalTexture,
        displacementMap:floorDisplacementTexture,
		displacementScale:1
	})
	)
	meshFloor.rotation.x -= Math.PI / 2 // Rotate the floor 90 degrees
	//TODO
	scene.add(meshFloor)
}