import Experience from "../Experience";
import * as THREE from 'three'

export default class Floor {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }


    setGeometry() {
        this.floorGeometry = new THREE.CircleGeometry(10, 64)
    }

    setTextures() {
        this.textures = {}
        this.textures.color = this.experience.resources.items.grassColorTexture

        this.textures.color.colorSpace = THREE.SRGBColorSpace
        this.textures.color.repeat.set(1.5, 1.5)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.experience.resources.items.grassNormalTexture
        this.textures.normal.repeat.set(1.5, 1.5)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping

        this.textures.alphaMap = this.experience.resources.items.alphaMap
    }
    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            alphaMap: this.textures.alphaMap,
            transparent: true,
            normalMap: this.textures.normal

        })

    }
    setMesh() {

        this.mesh = new THREE.Mesh(this.floorGeometry, this.material)
        this.mesh.position.set(0,-0.5,0)
        this.mesh.rotation.x = -Math.PI * 0.5
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)

    }


}