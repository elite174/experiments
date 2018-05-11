import { Component } from 'inferno'
import { px } from '../../utils';
import './style.css'
export default class Squares extends Component {

    gcd = (a, b) => {
        if (!b) {
            return a;
        }
        return this.gcd(b, a % b);
    }
    renderSquares(S, width, height) {
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 40; j++) {
                let square = document.createElement('div')
                square.classList.add('square')
                square.id = `square-${i}-${j}`
                this.container.appendChild(square)
            }
        }
    }
    over = (e) => {
        let square = e.target
        let arr = e.target.id.match(/(?:\w+)\-(\d+)\-(\d+)/)
        let i = Number(arr[1])
        let j = Number(arr[2])
        console.log(i, j)
        /* for (let i1 = i - 1; i1 <= i + 1; i1++) {
             if (i1 < 0 || i1 > 20) continue
             for (let j1 = j - 1; j1 <= j + 1; j1++) {
                 if (j1 < 0 || j1 > 40) continue
                 if (i1 !== i || j1 !== j) {
                     document.getElementById(`element-${i1}-${j1}`).style.transform = 'scale(1.4)'
                 } else {
 
                 }
             }
         }*/
    }
    componentDidMount() {
        let container = this.container.getBoundingClientRect()
        let S = container.width * container.height
        this.renderSquares(S, container.width, container.height)
    }
    render() {
        return <div className='squares-container'>
            <div className='square-group' ref={container => this.container = container}
                onMouseOver={this.over}>
            </div>
        </div>
    }
}