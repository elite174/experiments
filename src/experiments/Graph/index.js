import { Component } from 'inferno'
import './style.css'
import { random, arr, px, Scene } from '../../utils';
import { Circle } from './models';
import GraphIcon from './assets/GraphIcon';

export default class Graph extends Component {
    state = { paused: false }

    /**
     * computations per frame
     */
    frameFunc = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        let grd = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height)
        grd.addColorStop(0, `hsl(${this.backColor},80%, 45%)`)
        grd.addColorStop(1, `hsl(${this.backColor},80%, 25%)`)
        this.ctx.fillStyle = grd
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.drawLines()
        for (let node of this.nodes) {
            node.move()
            node.draw()
        }

    }
    createCircle = () => {
        let circle = new Circle(random(15, this.canvas.width - 15), random(15, this.canvas.height - 15), random(5, 7), random(50, 100), random(0, 360), this.nodeColor, this.ctx, this.canvas)
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
                    let grd = this.ctx.createLinearGradient(this.nodes[i].positionX, this.nodes[i].positionY, this.nodes[j].positionX, this.nodes[j].positionY)
                    grd.addColorStop(0, this.nodes[i].color)
                    grd.addColorStop(1, this.nodes[j].color)
                    //this.ctx.strokeStyle = `rgba(0,0,0,${0.000025 * l ** 2 - 0.0125 * l + 1.5625})`
                    this.ctx.strokeStyle = grd;
                    this.ctx.beginPath()
                    this.ctx.moveTo(this.nodes[i].positionX, this.nodes[i].positionY)
                    this.ctx.lineTo(this.nodes[j].positionX, this.nodes[j].positionY)
                    this.ctx.stroke()
                }
            }
        }
    }
    genColors = () => {

        this.nodeColor = random(0, 260)
        this.backColor = this.nodeColor + 20
    }
    componentDidMount() {
        this.genColors()
        this.ctx = this.canvas.getContext('2d')
        let grd = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height)
        grd.addColorStop(0, `hsl(${this.backColor}, 80%, 45%)`)
        grd.addColorStop(1, `hsl(${this.backColor}, 80%, 25%)`)
        this.ctx.fillStyle = grd
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.nodes = arr(this.createCircle, 100)
        this.drawLines()
        for (let node of this.nodes) {
            node.draw()
        }
        this.scene = Scene(this.frameFunc, 60)
        this.scene.play()
    }
    componentWillUnmount() {
        this.scene.destroy()
    }
    play = () => {
        if (this.state.paused) {
            this.scene.play()
            this.setState({ paused: false })
        } else {
            this.scene.pause()
            this.setState({ paused: true })
        }
    }
    render() {
        return <div className='graph' ref={graph => this.graph = graph}>
            <div className='graph__button__panel'>
                <i className='material-icons graph__icon' onClick={this.play}>{!this.state.paused ? 'pause' : 'play_arrow'}</i>
            </div>
            <div className='graph__flex'>
                <div className='graph__settings' ref={settings => this.settings = settings}>
                    <div className='graph__button' onClick={this.genColors}>GENERATE</div>
                </div>
                <i className='material-icons graph__icon animate' onClick={() => this.settings.classList.toggle('active')}>settings</i>
            </div>
            <canvas ref={canvas => this.canvas = canvas} className='graph__canvas' width={window.innerWidth} height={window.innerHeight}>
            </canvas>
        </div >
    }
}