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
        star.style.animationDuration = `${random(200, 1200)}ms`
        this.self.appendChild(star)
    }
    componentDidMount() {
        let starCount = random(400, 500)
        for (let i = 0; i < starCount; i++) {
            this.createStar()
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
        return <div className='galaxy__back' ref={self => this.self = self} 
        onMouseMove={(e) => { window.requestAnimationFrame(() => { this.computeOffset(e) }) }}>
            <audio id='video' style={{left:'150px', position:'absolute', top: 159}}
            controls="controls"
            src="http://storage.mp3cc.org/listen/99278140/cVpnRlpvRVUyQ28wcjJHNXZtL1lOMmtJQWkxdmtTUlBrV1hBS0MrQ2V5SDc4M3RJbm1LL2hmSnRPaUJMYXJ1c0lmTWZPa2pQNUNZSlZVdFhvSVd6TGk1NGJ6RmJRamZFSGxpRytUMEhJcEpaQ0YrY0dCSHlRSldKdXhHWmtZV2E/mass-effect-end-titles-theme-ost_(mp3.cc).mp3" ></audio>
        </div >
    }
}