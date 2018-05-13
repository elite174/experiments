import { Component } from 'inferno'
import { px, random } from '../../utils';
import './style.css'
export default class Squares extends Component {
    matrix = []
    n = 15
    m = 15
    animationDelayStep = 80
    cellSize = 30
    marginSize = 2
    squareSize = this.cellSize - 2 * this.marginSize
    containerWidth = this.cellSize * this.m
    containerHeight = this.cellSize * this.n
    renderSquares() {
        for (let i = 0; i < this.n; i++) {
            for (let j = 0; j < this.m; j++) {
                let square = document.createElement('div')
                square.classList.add('square')
                square.style.width = px(this.squareSize)
                square.style.height = px(this.squareSize)
                square.style.margin = px(this.marginSize)
                square.id = `square-${i}-${j}`
                this.sqContainer.appendChild(square)
            }
        }
    }

    startAnim = (e) => {
        let square = e.target
        try {
            let arr = e.target.id.match(/(?:\w+)\-(\d+)\-(\d+)/)
            let i = Number(arr[1])
            let j = Number(arr[2])
            this.wave(i, j)
        } catch (err) {

        }

    }
    wave = (i, j) => {
        for (let k = 1; k <= Math.max(this.n, this.m); k++) {
            for (let i1 = i - k; i1 <= i + k; i1++) {
                if (i1 < 0 || i1 >= this.n) continue
                if (j - k >= 0) setTimeout(() => {
                    let item = document.getElementById(`square-${i1}-${j - k}`)
                    if (!item.classList.contains('active')) {
                        item.classList.toggle('active')
                        setTimeout(() => item.classList.toggle('active'), 400)
                    }
                }, 100 + k * this.animationDelayStep)
                if (j + k < this.m) setTimeout(() => {
                    let item = document.getElementById(`square-${i1}-${j + k}`)
                    if (!item.classList.contains('active')) {
                        item.classList.toggle('active')
                        setTimeout(() => item.classList.toggle('active'), 400)
                    }
                }, 100 + k * this.animationDelayStep)
            }
            for (let j1 = j - k + 1; j1 <= j + k - 1; j1++) {
                if (j1 < 0 || j1 >= this.m) continue
                if (i - k >= 0) setTimeout(() => {
                    let item = document.getElementById(`square-${i - k}-${j1}`)
                    if (!item.classList.contains('active')) {
                        item.classList.toggle('active')
                        setTimeout(() => item.classList.toggle('active'), 400)
                    }
                }, 100 + k * this.animationDelayStep)
                if (i + k < this.n) setTimeout(() => {
                    let item = document.getElementById(`square-${i + k}-${j1}`)
                    if (!item.classList.contains('active')) {
                        item.classList.toggle('active')
                        setTimeout(() => item.classList.toggle('active'), 400)
                    }
                }, 100 + k * this.animationDelayStep)
            }
        }
    }
    createMatrix = () => {
        let matrix = []
        for (let i = 0; i < this.n; i++) {
            let arr = []
            for (let j = 0; j < this.m; j++) {
                arr.push(0)
            }
            matrix.push(arr)
        }
        this.matrix = matrix
    }
    componentDidMount() {
        this.renderSquares()
        this.createMatrix()
    }
    render() {
        return <div className='squares-container'>
            <div className='squares-layer-container' style={{ width: this.containerWidth, height: this.containerHeight }}>
                <div className='square-group' style={{ width: this.containerWidth, height: this.containerHeight }} ref={sqContainer => this.sqContainer = sqContainer}
                    onClick={this.startAnim}>
                </div>
            </div>
        </div>
    }
}