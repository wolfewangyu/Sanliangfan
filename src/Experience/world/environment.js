import Experience from "../Experience";
import * as THREE from 'three'

export default class Environment {
    constructor() {
        this.experience = new Experience()
        this.scene = experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug


        //Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('environment')

        }


        this.setAmbientLight()
        this.setSunLight()
        this.setEnvironmentMap()

    }


    setAmbientLight() {
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // 第二个参数是环境光的强度
        this.scene.add(this.ambientLight);

    }

    setSunLight() {
        this.sunLight = new THREE.DirectionalLight('#ffffff', 2)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(3, 3, -2.25)
        this.scene.add(this.sunLight)


        // // Helper
        this.sunLightCameraHelper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(this.sunLightCameraHelper);
        this.sunLight.shadow.camera.far = 10;


        //Debug
        if (this.debug.active) {
            this.debugFolder
                .add(this.sunLight, 'intensity')
                .name('sunLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)

            this.debugFolder
                .add(this.sunLight.position, 'x')
                .name('sunLightX')
                .min(-5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.sunLight.position, 'y')
                .name('sunLightY')
                .min(-5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.sunLight.position, 'z')
                .name('sunLightZ')
                .min(-5)
                .max(5)
                .step(0.001)

                const params = {
                    color: '#ffffff' // Initial color value
                };
                
            this.debugFolder
                .addColor(params, 'color')
                .onChange(()=>{
                    this.sunLight.color.set(params.color)
                })
                .name('Color Picker');
        }

    }

    setEnvironmentMap() {
        this.environmentMap = {}
        this.environmentMap.intensity = 0.2

        this.environmentMap.texture = this.resources.items.environmentMapTexture
        this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace

        this.scene.background = this.environmentMap.texture

        this.environmentMap.updateMaterials = () => {
            this.scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    // console.log(child)
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true       
                }
            })
        }

        this.environmentMap.updateMaterials()



        if (this.debug.active) {
            this.debugFolder
                .add(this.environmentMap, 'intensity')
                .name('envMapIntensity')
                .min(0)
                .max(4)
                .step(0.001)
                .onChange(this.environmentMap.updateMaterials)
        }

    }



}