import { Component } from 'inferno'
import './style.css'
import { random, setStyle, chooseFrom, arr } from '../../utils';

export default class Galaxy extends Component {

    layers = arr('star', 10)
    speeds = arr(1, 10, 20)

    createStar = () => {
        let star = document.createElement('div')
        star.classList.add('star')
        star.classList.add(chooseFrom(this.layers))
        let left = `${random(-5, 105)}%`
        let top = `${random(-5, 105)}%`
        star.style.left = left
        star.style.top = top
        star.setAttribute('star-left', left)
        star.setAttribute('star-top', top)
        this.self.appendChild(star)
    }
    componentDidMount() {
        let starCount = random(300, 400)
        for (let i = 0; i < starCount; i++) {
            this.createStar()
        }
    }
    diamondSquare(n) {
        let size = Math.pow(2, n) + 1
        let matrix = []
        for (let i = 0; i < size; i++) {
            matrix[i] = arr(0, size, 0)
        }

    }
    computeOffset = (e) => {
        let x = e.pageX;
        let y = e.pageY;
        let windowWidth = window.innerWidth;
        let halfWidth = Math.floor(windowWidth / 2);
        let windowHeight = window.innerHeight;
        let halfHeight = Math.floor(windowHeight / 2);

        let spX = (x - halfWidth) / halfWidth;

        let spY = (y - halfHeight) / halfHeight;

        for (let i in this.layers) {
            setStyle(this.layers[i], 'transform', `translateX(${spX * this.speeds[i]}px) translateY(${spY * this.speeds[i]}px)`)
        }

        setStyle('galaxy__back', 'background-position', spX * 20 + 'px center')

    }
    render() {
        return <div className='galaxy__back' ref={self => this.self = self} onMouseMove={this.computeOffset}>
        </div>
    }
}