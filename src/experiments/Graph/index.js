import { Component } from 'inferno'
import './style.css'
import { random, arr, px, Scene } from '../../utils';

export default class Graph extends Component {
    radius = 15

    /**
     * computations per frame
     */
    frameFunc = () => {
        this.nodes.map(node => this.moveCircle(node))
        this.drawLines()
    }
    createCircle = () => {
        let circle = document.createElement('div')
        circle.classList.add('graph__node')
        circle.style.top = px(random(0, window.innerHeight))
        circle.style.left = px(random(0, window.innerWidth))
        circle.setAttribute('posX', parseInt(circle.style.left))
        circle.setAttribute('posY', parseInt(circle.style.top))
        circle.style.width = circle.style.height = px(random(20, 40))
        circle.setAttribute('speed', random(30, 40) / 60)
        circle.setAttribute('direction', 2 * random(0, 360) * Math.PI / 360)
        return circle
    }
    getLength = (node1, node2) => {
        if (Math.sqrt((parseInt(node1.style.top) - parseInt(node2.style.top)) ** 2 + (parseInt(node1.style.left) - parseInt(node2.style.left)) ** 2) < 300) {
            return true
        } else {
            return false
        }
    }
    drawLines() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = 0; j < this.nodes.length; j++) {
                if (i === j) { continue }
                if (this.getLength(this.nodes[i], this.nodes[j])) {
                    this.ctx.beginPath()
                    this.ctx.moveTo(parseInt(this.nodes[i].style.left) + 15, parseInt(this.nodes[i].style.top) + 15)
                    this.ctx.lineTo(parseInt(this.nodes[j].style.left) + this.radius, parseInt(this.nodes[j].style.top) + this.radius)
                    this.ctx.stroke()
                }
            }
        }
    }
    moveCircle = (circle) => {
        circle.setAttribute('posX', parseFloat(circle.getAttribute('posX')) + circle.getAttribute('speed') * Math.cos(circle.getAttribute('direction')))
        circle.setAttribute('posY', parseFloat(circle.getAttribute('posY')) + circle.getAttribute('speed') * Math.sin(circle.getAttribute('direction')))
        circle.style.top = px(Math.round(circle.getAttribute('posY')))
        circle.style.left = px(Math.round(circle.getAttribute('posX')))
    }
    componentDidMount() {

        this.nodes = arr(this.createCircle, 40)
        this.nodes.map(node => this.graph.appendChild(node))
        this.scene = Scene(this.frameFunc, 50)
        this.ctx = this.canvas.getContext('2d');

        this.scene.play()
        setTimeout(() => this.scene.pause(), 5000)

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