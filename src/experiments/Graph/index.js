import { Component } from 'inferno'
import './style.css'
import { random, arr, px, Scene } from '../../utils';
import { Circle } from './models';

export default class Graph extends Component {
    radius = 15

    /**
     * computations per frame
     */
    frameFunc = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.strokeStyle = "#000"
        for (let node of this.nodes) {
            node.move()
            node.draw()
        }
        this.drawLines()
    }
    createCircle = () => {
        let circle = new Circle(random(15, this.canvas.width - 15), random(15, this.canvas.height - 15), random(5, 15), random(50, 100), random(0, 360), this.ctx, this.canvas)
        return circle
    }
    getLength = (node1, node2) => {
        let length = Math.sqrt(Math.pow(node1.positionX - node2.positionX, 2) + Math.pow(node1.positionY - node2.positionY, 2))
        return length
    }
    drawLines() {
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = 0; j < this.nodes.length; j++) {
                if (i === j) { continue }
                let l = this.getLength(this.nodes[i], this.nodes[j])
                if (l > 50 && l < 250) {
                    this.ctx.strokeStyle = `rgba(0,0,0,${0.000025 * l ** 2 - 0.0125 * l + 1.5625})`
                    this.ctx.beginPath()
                    this.ctx.moveTo(this.nodes[i].positionX, this.nodes[i].positionY)
                    this.ctx.lineTo(this.nodes[j].positionX, this.nodes[j].positionY)
                    this.ctx.stroke()
                }
            }
        }
    }
    componentDidMount() {

        this.ctx = this.canvas.getContext('2d')
        this.nodes = arr(this.createCircle, 100)
        for (let node of this.nodes) {
            console.log(node)
            node.draw()
        }
        this.scene = Scene(this.frameFunc, 50)
        this.scene.play()
        setTimeout(() => this.scene.pause(), 15000)

    }
    componentWillUnmount() {
        this.scene.destroy()
    }
    render() {
        return <div className='graph' ref={graph => this.graph = graph}>
            <canvas ref={canvas => this.canvas = canvas} className='graph__canvas' width={window.innerWidth} height={window.innerHeight}>

            </canvas>
        </div>
    }
}