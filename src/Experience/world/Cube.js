import * as THREE from 'three'
import Experience from '../Experience'

export default class Cube {
    constructor() {

        // Setup
        this.experience = new Experience()
        this.resources = this.experience.resources
        this.scene = this.experience.scene

        this.setCubeGeometry()
        this.setCubeTextures()
        this.setCubeMaterials()
        this.setCubeMesh()

    }

    setCubeGeometry() {
        this.geometry = new THREE.BoxGeometry(1, 1, 1, 64, 64, 64); // 增加几何体的细分级别
    }

    setCubeTextures() {
        this.textures = {}
        this.textures.colorMaps = [
            this.resources.items.cubeColorTexture_1,
            this.resources.items.cubeColorTexture_2,
            this.resources.items.cubeColorTexture_3,
            this.resources.items.cubeColorTexture_4,
            this.resources.items.cubeColorTexture_5,
            this.resources.items.cubeColorTexture_6
        ]

        for (let i = 0; i < this.textures.colorMaps.length; i++) {
            this.textures.colorMaps[i].colorSpace = THREE.SRGBColorSpace
        }
    }

    setCubeMaterials() {

        this.materials = this.textures.colorMaps.map(texture => new THREE.MeshStandardMaterial({ map: texture }))
        //Array
        for(let child of this.materials){
            child.envMap = this.resources.items.environmentMapTexture
            child.envMapIntensity = 0.1
        }
   

        // this.materials = new THREE.MeshStandardMaterial({color:'#880000'})
    }

    setCubeMesh() {
        this.mesh = new THREE.Mesh(this.geometry, this.materials)
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }
}



