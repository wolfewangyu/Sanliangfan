import * as THREE from 'three'
import Experience from '../Experience'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


export default class Camera {
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
        this.setControls()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(35,
            this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
    }

    setControls() {

        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.minPolarAngle = THREE.MathUtils.degToRad(60); // 最小极角，转换为弧度
        this.controls.maxPolarAngle = THREE.MathUtils.degToRad(90); // 最大极角，转换为弧度
        this.controls.minAzimuthAngle = THREE.MathUtils.degToRad(-90); // 最小方位角，转换为弧度
        this.controls.maxAzimuthAngle = THREE.MathUtils.degToRad(90); // 最大方位角，转换为弧度

        // 设置缩放距离限制
        this.controls.minDistance = 2; // 最小缩放距离
        this.controls.maxDistance = 8; // 最大缩放距离

    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        this.controls.update()
    }
}