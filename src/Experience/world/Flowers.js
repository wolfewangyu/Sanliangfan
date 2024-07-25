import Experience from "../Experience";
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default class Flowers {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        //Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('Flower')

        }

        //resource import
        this.resource = this.resources.items.celandine
        this.setModel()
        this.setDebug()




    }

    setModel() {

        {


            this.model = this.resource.scene

            // console.log(this.model.children[0])

            // this.model.scale.set(5, 5, 5)
            this.model.position.set(0, 0, 0)

            //single flower, the file incl. many
            this.flower = this.model.children[0]

            this.flower.material.emissive = new THREE.Color(0x999900); // Add emissive color
            this.flower.material.emissiveIntensity = 0.7; // Adjust emissive 


            this.flower.scale.set(5, 5, 5)
            this.flower.position.set(0, -2, 0)


            //group
            const flowerGroup = new THREE.Group();


            for (let i = 0; i < 80; i++) {
                const flower = this.flower.clone();
                const randomScale = Math.random() * 10


                flower.position.set(
                    Math.random() * 20 - 10, // Random x position between -10 and 10
                    -0.5, // Assuming this is the ground level
                    Math.random() * 20 - 10  // Random z position between -10 and 10
                );
                flower.scale.set(randomScale, randomScale, randomScale);
                flower.traverse((child) => {
                    if (child instanceof THREE.Mesh) {
                        child.castShadow = true;
                    }
                });
                flowerGroup.add(flower);
                // this.flowers.push(flower);
            }

            this.scene.add(flowerGroup);
        }








        // this.scene.add(this.flower)


        // this.scene.add(this.model)

    //     this.model.traverse((child) => {
    //         if (child instanceof THREE.Mesh) {
    //             child.castShadow = true
    //         }
    //     })
    // }

}




//Debug
setDebug(){

    if (this.debug.active) {

        this.debugFolder
            .add(this.flower.position, 'x')
            .name('flowerX')
            .min(-5)
            .max(5)
            .step(0.001)

        this.debugFolder
            .add(this.flower.position, 'y')
            .name('flowerY')
            .min(-5)
            .max(5)
            .step(0.001)

        this.debugFolder
            .add(this.flower.position, 'z')
            .name('flowerZ')
            .min(-5)
            .max(5)
            .step(0.001)

    }


}


   



}