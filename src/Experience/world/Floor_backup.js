import * as THREE from 'three'
import Experience from '../Experience'

export default class Floor {
    constructor() {
        // Setup
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene

        this.setFloorGeometry()
        this.setFloorTextures()
        this.setFloorMaterials()
        this.setFloorMesh()
    }


    setFloorGeometry() {
        this.floorGeometry = new THREE.PlaneGeometry(5, 5, 5, 16, 16, 16)
    }
    setFloorTextures() {
        this.textures = {}
        this.textures.colorMap = this.resources.items.floorColorMap
        this.textures.colorMap.colorSpace = THREE.SRGBColorSpace
        

    }
    setFloorMaterials() {
        this.material = new THREE.MeshStandardMaterial({
            // color: '#003300'
            map: this.textures.colorMap
        })

    }
    setFloorMesh() {
        this.mesh = new THREE.Mesh(this.floorGeometry, this.material)
        this.mesh.rotation.x = -Math.PI * 0.5;
        this.mesh.position.y = -0.5;
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)

    }
}