import Experience from '../Experience'
import Cube from './Cube'
import Environment from './environment'
import Floor from './Floor'
import Flowers from './Flowers'




export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources


        //wait for the resources
        this.resources.on('ready',()=>{
            //setup
            this.cube = new Cube()
            this.floor = new Floor()
            this.flowers = new Flowers()
            this.environment = new Environment()
    
        })
    }

    // update(){
    //     if(this.cube){
    //         this.fox.update()
    //     }
        
    // }
    




}