import { Component } from 'inferno'
import './style.css'
import { random, arr, px } from '../../utils';

export default class Graph extends Component {
    radius = 15
    createCircle = () => {
        let circle = document.createElement('div')
        circle.classList.add('graph__node')
        circle.style.top = px(random(0, window.innerHeight))
        circle.style.left = px(random(0, window.innerWidth))
        return circle
    }
    componentDidMount() {
        console.log(this.radius)
        let nodes = arr(this.createCircle, 2)
        nodes.map(node => this.graph.appendChild(node))
        let ctx = this.canvas.getContext('2d');
        let p1, p2
        for (let i = 0; i < nodes.length - 1; i++) {
            ctx.beginPath()
            ctx.moveTo(parseInt(nodes[i].style.left) + 15, parseInt(nodes[i].style.top) + 15)
            ctx.lineTo(parseInt(nodes[i + 1].style.left) + this.radius, parseInt(nodes[i + 1].style.top) + this.radius)
            ctx.stroke()
            
        }
    }
    render() {
        return <div className='graph' ref={graph => this.graph = graph}>
            <canvas ref={canvas => this.canvas = canvas} className='graph__canvas' width={window.innerWidth} height={window.innerHeight}>

            </canvas>
        </div>
    }
}