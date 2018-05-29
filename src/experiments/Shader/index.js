import { Component } from 'inferno'
import './style.css'
import GlslCanvas from 'glslCanvas'
import qwe from './shader.glsl'
import shader from './shader';

export default class Shader extends Component {
    componentDidMount() {
        let sandbox = new GlslCanvas(this.canvas)
        sandbox.load(shader)
        this.canvas.setAttribute('data-fragment', shader)
    }
    render() {
        return (
            <div className='shader-container'>
                <canvas width={500} height={500} ref={canvas => this.canvas = canvas} className='glslCanvas'></canvas>
            </div>
        )
    }
}