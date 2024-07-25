import EventEmitter from "./EventEmitter";
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

export default class Resources extends EventEmitter{
    constructor(sources){
        super()

        //options
        this.sources = sources
        

        //setup
        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()

    }

    setLoaders(){
        this.loaders = {}
        this.loaders.exrLoader = new EXRLoader()
        this.loaders.glftLoader = new GLTFLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()        
        this.loaders.RGBELoader = new RGBELoader()
        this.loaders.RGBELoader.load(
            './envMap/rosendal_plains_2_1k.hdr',
            (file)=>{
                
            }
        )

    }

    startLoading(){
        //Load each source
        for(const source of this.sources){
            if(source.type === 'gltfModel'){
                this.loaders.glftLoader.load(
                    source.path,
                    (file)=>{
                        this.sourceLoaded(source, file)
                    }
                )
            }
            else if(source.type === 'envTexture'){
                this.loaders.exrLoader.load(
                    source.path,
                    (file)=>{
                        file.mapping = THREE.EquirectangularReflectionMapping  
                        this.sourceLoaded(source, file)
                    }
                )
                
            }
            else if(source.type === 'texture'){
                this.loaders.textureLoader.load(
                    source.path,
                    (file) =>{
    
                        this.sourceLoaded(source, file)
                    }
                    
                )

                
            }else if(source.type === 'cubeTexture'){
                this.loaders.cubeTextureLoader.load(
                    source.path,
                    (file) =>{
                        this.sourceLoaded(source, file)
                    }

                )
                
            }else if(source.type === 'HDRTexture'){
                this.loaders.RGBELoader.load(
                    source.path,     
                    (file) =>{    
                        file.mapping = THREE.EquirectangularReflectionMapping  
                        this.sourceLoaded(source, file)
                    }
                )
            }

            
        }
    }

    sourceLoaded(source, file){
        this.items[source.name] = file
        this.loaded++
        if(this.loaded === this.toLoad){
            this.trigger('ready')
        }
    }




}