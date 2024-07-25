import * as THREE from 'three'
import Sizes from "./Utils/Size"
import Time from "./Utils/Time"
import Camera from './Utils/Camera'
import Renderer from './Utils/Render'
import World from './world/world'
import Resources from './Utils/Resources'
import sources from './world/sources'
import Debug from './Utils/Debug'


let instance = null

export default class Experience {
    constructor(canvas) {

        //singleton
        if(instance){
            return instance
        }
        instance = this

        //Global access
        window.experience = this

        //option
        this.canvas = canvas

        //setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.sizes = new Sizes()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.resources = new Resources(sources)  
        this.world = new World()
        
        

         
        //resize event
        this.sizes.on('resize', ()=>{
            this.resize()

        })

        //Time tick event
        this.time.on('tick', ()=>{
            this.update()
        })
    
    }


    resize(){
        //do sth，可能是给相关部门发信号一类的
        this.camera.resize()
        this.renderer.resize()
    }


    update(){
        this.camera.update()
        // this.world.update()
        this.renderer.update()
    }

    destroy(){
        this.sizes.off('resize')
        this.time.off('tick')

        //traverse the whole scene
        this.scene.traverse((child)=>{
            if(child instanceof THREE.Mesh){
                child.geometry.dispose()

                for(const key in child.material){
                    const value = child.material[key]
                    if(value && typeof value.dispose === 'function'){
                        value.dispose()
                    }
                
                }
            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()

        if(this.debug.active)
            this.debug.ui.destroy()

    }



}