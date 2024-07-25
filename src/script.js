import Experience from "./Experience/Experience"
const experience = new Experience(document.querySelector('canvas.webgl'))


// /**
//  * Base
//  */
// // Debug
// const gui = new GUI();

// // Canvas
// const canvas = document.querySelector('canvas.webgl');

// // Scene
// const scene = new THREE.Scene();

// /**
//  * HDR load
//  */
// const exrLoader = new EXRLoader();
// exrLoader.load(
//     './envMap/brown_photostudio_01_1k.exr',
//     (envMap) => {
//         envMap.mapping = THREE.EquirectangularReflectionMapping;
//         // scene.environment = envMap;
//         // scene.environmentIntensity = 0.1;
//     }
// );

// /**
//  * House
//  */
// // Temporary sphere
// const sphere = new THREE.Mesh(
//     new THREE.SphereGeometry(1, 32, 32),
//     new THREE.MeshStandardMaterial({ roughness: 0.7 })
// );
// // scene.add(sphere);

// // 加载纹理
// const loader = new THREE.TextureLoader();


// const textures = [
//     loader.load('/cubic/1.jpg'),
//     loader.load('/cubic/2.jpg'),
//     loader.load('/cubic/3.jpg'),
//     loader.load('/cubic/4.jpg'),
//     loader.load('/cubic/5.jpg'),
//     loader.load('/cubic/6.jpg'),
// ];



// const cubeAoMap = loader.load('./texture/book_textures/book_pattern_arm_1k.jpg');
// const cubeRoughnessMap = loader.load('./texture/book_textures/book_pattern_arm_1k.jpg');
// const cubeMetalnessMap = loader.load('./texture/book_textures/book_pattern_arm_1k.jpg');
// const cubeNormalMap = loader.load('./texture/book_textures/book_pattern_nor_gl_1k.jpg');
// const cubeDisplacementMap = loader.load('./texture/book_textures/book_pattern_disp_1k.jpg');

// for (let i = 0; i < textures.length; i++) {
//     textures[i].colorSpace = THREE.SRGBColorSpace;
// }

// const materials = textures.map(texture => {
//     const material = new THREE.MeshStandardMaterial({
//         map: texture,
//         aoMap: cubeAoMap,
//         roughnessMap: cubeRoughnessMap,
//         metalnessMap: cubeMetalnessMap,
//         normalMap: cubeNormalMap,
//         displacementMap: cubeDisplacementMap
//     });

//     // 设置位移贴图缩放比例
//     material.displacementScale = 0.0001;
//     material.aoMapIntensity = 0.7;

//     return material;
// });

// // 创建立方体
// const geometry = new THREE.BoxGeometry(1, 1, 1, 64, 64, 64); // 增加几何体的细分级别
// const cube = new THREE.Mesh(geometry, materials);

// cube.receiveShadow = true;
// cube.castShadow = true;
// scene.add(cube);

// /**
//  * Floor
//  */
// const floorColorMap = loader.load('./textures/wood_planks_dirt_diff_1k.jpg');
// const floorAoMap = loader.load('./textures/wood_planks_dirt_arm_1k.jpg');
// const floorRoughnessMap = loader.load('./textures/wood_planks_dirt_arm_1k.jpg');
// const floorMetalnessMap = loader.load('./textures/wood_planks_dirt_arm_1k.jpg');
// const floorNormalMap = loader.load('./textures/wood_planks_dirt_nor_gl_1k.jpg');
// const floorDisplacementMap = loader.load('./textures/wood_planks_dirt_disp_1k.jpg');

// const floorGeometry = new THREE.PlaneGeometry(5, 5, 128, 128); // 更新几何体的细分级别
// const floorMaterial = new THREE.MeshStandardMaterial({
//     map: floorColorMap,
//     aoMap: floorAoMap,
//     roughnessMap: floorRoughnessMap,
//     metalnessMap: floorMetalnessMap,
//     normalMap: floorNormalMap,
//     displacementMap: floorDisplacementMap,
// });
// floorMaterial.displacementScale = 0.1;

// const floor = new THREE.Mesh(floorGeometry, floorMaterial);
// floor.rotation.x = -Math.PI * 0.5;
// floor.position.y = -0.58;

// floor.receiveShadow = true;

// scene.add(floor);

// /**
//  * Wall
//  */
// const wallColorMap = loader.load('./concrete/concrete_layers_diff_1k.jpg');
// const wallArmMap = loader.load('./concrete/concrete_layers_arm_1k.jpg');
// const wallNormalMap = loader.load('./concrete/concrete_layers_nor_gl_1k.jpg');
// const wallDisplacementMap = loader.load('./concrete/concrete_layers_disp_1k.jpg');

// const wallGeometry1 = new THREE.PlaneGeometry(10, 10, 64, 64);
// const wallGeometry2 = new THREE.PlaneGeometry(10, 10, 64, 64);
// const wallMaterial = new THREE.MeshStandardMaterial({
//     color: '#FF884A',
//     map: wallColorMap,
//     aoMap: wallArmMap,
//     roughnessMap: wallArmMap,
//     metalnessMap: wallArmMap,
//     normalMap: wallNormalMap,
//     displacementMap: wallDisplacementMap
// });
// wallMaterial.displacementScale = 0.3;

// const wall1 = new THREE.Mesh(wallGeometry1, wallMaterial);
// const wall2 = new THREE.Mesh(wallGeometry2, wallMaterial);
// wall1.position.z = -5;
// wall2.rotation.y = Math.PI * 0.5;
// wall2.position.x = -5;

// wall1.receiveShadow = true;
// wall2.receiveShadow = true;

// scene.add(wall1, wall2);

// /**
//  * Lights
//  */
// // Ambient light
// const ambientLight = new THREE.AmbientLight('#ffffff', 0.5);
// scene.add(ambientLight);
// ambientLight.visible = false

// // Directional light
// const directionalLight = new THREE.DirectionalLight('#ffffff', 0.3);
// directionalLight.position.set(2.68, 5, 5.26); // 调整光源位置以确保它能投射阴影
// scene.add(directionalLight);

// directionalLight.castShadow = true;
// directionalLight.shadow.camera.far = 30;
// directionalLight.shadow.mapSize.set(256, 256);
// directionalLight.shadow.camera.top = 1;
// directionalLight.shadow.camera.bottom = -1;
// directionalLight.shadow.camera.left = -1;
// directionalLight.shadow.camera.right = 1;

// gui.add(directionalLight.position, 'x').min(-50).max(100).step(0.01).name('positionX');
// gui.add(directionalLight.position, 'y').min(-50).max(100).step(0.01).name('positionY');
// gui.add(directionalLight.position, 'z').min(-50).max(100).step(0.01).name('positionZ');
// gui.add(directionalLight,'intensity').min(0).max(10).step(0.01).name('DirIntensity');



// // // Spot light
// const spotLight = new THREE.SpotLight('#ffeeee', 4.5, 10, Math.PI * 0.1, 0.25, 4.5)
// spotLight.position.set(2.28, 4.12, 5.96)
// spotLight.target.position.x = - 0.75
// scene.add(spotLight)
// scene.add(spotLight.target)


// gui.add(spotLight.position, 'x').min(-50).max(100).step(0.01).name('spLightX');
// gui.add(spotLight.position, 'y').min(-50).max(100).step(0.01).name('spLightY');
// gui.add(spotLight.position, 'z').min(-50).max(100).step(0.01).name('spLightZ');
// gui.add(spotLight,'intensity').min(0).max(10).step(0.01).name('spotLightIntensity');



// const spotLight1 = new THREE.SpotLight(0x78ff00, 4.5, 10, Math.PI * 0.1, 0.25, 1)
// spotLight1.position.set(0, 2, 3)
// spotLight1.target.position.x = - 0.75
// scene.add(spotLight1)
// scene.add(spotLight1.target)


// // // Point light
// const pointLight = new THREE.PointLight(0xff9000, 1.5, 0, 1.5)
// pointLight.position.set(0.8, - 0.43, -1)
// scene.add(pointLight)
// gui.add(pointLight.position, 'x').min(-50).max(100).step(0.01).name('poingLightX');
// gui.add(pointLight.position, 'y').min(-50).max(100).step(0.01).name('poingLightY');
// gui.add(pointLight.position, 'z').min(-50).max(100).step(0.01).name('poingLightZ');
// gui.add(pointLight,'intensity').min(0).max(10).step(0.01).name('poingLightIntensity');


// // Helper
// const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(directionalLightCameraHelper);

// directionalLight.shadow.camera.far = 10;

// gui.add(directionalLight.position, 'x').min(-20).max(50).step(0.01).name('dirLightX');
// gui.add(directionalLight.position, 'y').min(-20).max(100).step(0.01).name('dirLightY');
// gui.add(directionalLight.position, 'z').min(-20).max(50).step(0.01).name('dirLightZ');

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// };

// window.addEventListener('resize', () => {
//     // Update sizes
//     sizes.width = window.innerWidth;
//     sizes.height = window.innerHeight;

//     // Update camera
//     camera.aspect = sizes.width / sizes.height;
//     camera.updateProjectionMatrix();

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// });

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
// camera.position.x = 4;
// camera.position.y = 2;
// camera.position.z = 5;
// scene.add(camera);

// // Controls
// const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true;

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
// });
// renderer.setSize(sizes.width, sizes.height);
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFShadowMap;

// /**
//  * Animate
//  */
// const tick = () => {
//     // Update controls
//     controls.update();

//     // Render
//     renderer.render(scene, camera);

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick);
// };

// tick();