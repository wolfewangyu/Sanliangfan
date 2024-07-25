export default [

    //Environment Map
    {
        name: 'environmentMapTexture',
        type: 'envTexture',
        path:'./envMap/nvidiaCanvas-4k.exr'
    },
    {
        name: 'environmentMapTexture_8',
        type: 'cubeTexture',
        path:
        [
            './environmentMap/px.jpg',
            './environmentMap/nx.jpg',
            './environmentMap/py.jpg',
            './environmentMap/ny.jpg',
            './environmentMap/pz.jpg',
            './environmentMap/nz.jpg'
        ]
    },
    {
        name: 'environmentMapTexture_a',
        type: 'HDRTexture',
        path:'./envMap/rosendal_plains_2_1k.hdr'
    },

    //Cube Textures
    {
        name:'cubeColorTexture_1',
        type:'texture',
        path:'./cubic/1.jpg'
        
    },
    {
        name:'cubeColorTexture_2',
        type:'texture',
        path:'./cubic/2.jpg'
        
    },
    {
        name:'cubeColorTexture_3',
        type:'texture',
        path:'./cubic/3.jpg'
        
    },
    {
        name:'cubeColorTexture_4',
        type:'texture',
        path:'./cubic/4.jpg'
        
    },
    {
        name:'cubeColorTexture_5',
        type:'texture',
        path:'./cubic/5.jpg'
        
    },
    {
        name:'cubeColorTexture_6',
        type:'texture',
        path:'./cubic/6.jpg'
        
    },
    
    //Floor Texture & Materials
    {
        name:'floorColorMap',
        type:'texture',
        path:'./textures/wood_planks_dirt_diff_1k.jpg'
        
    },
    {
        name:'grassColorTexture',
        type:'texture',
        path:'/textures/dirt/color.jpg'
    },
    {
        name:'grassNormalTexture',
        type:'texture',
        path:'/textures/dirt/normal.jpg'
    },
    {
        name:'alphaMap',
        type:'texture',
        path:'./floor/alpha.jpg'
    },
//green texture
    {
        name:'celandine',
        type:'gltfModel',
        path:'./models/dandelion_01_1k/dandelion_01_1k.gltf'
    },
   



   
 
]