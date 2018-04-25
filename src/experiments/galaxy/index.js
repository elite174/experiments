import { Component } from 'inferno'
import './style.css'
import { random, setStyle, chooseFrom, arr } from '../../utils';
import GalaxyIcon from './assets/icons/GalaxyIcon';


export default class Galaxy extends Component {

    state = {
        galaxy: random(1, 5),
        muted: false,
        playing: false
    }

    layers = arr('star', 10)
    speeds = arr(1, 10, 20)

    nextGalaxy = () => {
        this.setState({ galaxy: this.state.galaxy + 1 === 6 ? 1 : this.state.galaxy + 1 })
    }
    setPlaying = (playing) => {
        if (playing) {
            this.player.play()
        } else {
            this.player.pause()
        }
        this.setState({ playing })
    }

    setMuted = (muted) => {
        this.player.muted = muted
        this.setState({ muted })
    }

    createStar = () => {
        let star = document.createElement('div')
        star.classList.add('galaxy__star')
        star.classList.add(chooseFrom(['galaxy__star--1', 'galaxy__star--2']))
        star.classList.add(chooseFrom(this.layers))
        let left = `${random(-5, 105)}%`
        let top = `${random(-5, 105)}%`
        star.style.left = left
        star.style.top = top
        star.style.animationDuration = `${random(200, 1200)}ms`
        let starColor = `hsl(${random(190, 350)}, 62%, 69%)`
        star.style.backgroundColor = starColor
        this.self.appendChild(star)
    }
    componentDidMount() {
        let starCount = random(100, 200)
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
        return <div className='galaxy'>
            <div className='galaxy__button-control'>
                <GalaxyIcon onClick={this.nextGalaxy} />
                <i className='material-icons galaxy__icon' onClick={() => this.setPlaying(!this.state.playing)}>{this.state.playing ? 'pause' : 'play_arrow'}</i>
                <i className='material-icons galaxy__icon' onClick={() => this.setMuted(!this.state.muted)}>{this.state.muted ? 'volume_off' : 'volume_up'}</i>
            </div>
            <div className={`galaxy__back galaxy__back--${this.state.galaxy}`} ref={self => this.self = self}
                onMouseMove={(e) => { window.requestAnimationFrame(() => { this.computeOffset(e) }) }}>

                <audio id='video' style={{ left: '150px', position: 'absolute', top: 159, display: 'none' }}
                    ref={player => this.player = player}
                    controls="controls"
                    src="http://storage.mp3cc.org/listen/99278140/cVpnRlpvRVUyQ28wcjJHNXZtL1lOMmtJQWkxdmtTUlBrV1hBS0MrQ2V5SDc4M3RJbm1LL2hmSnRPaUJMYXJ1c0lmTWZPa2pQNUNZSlZVdFhvSVd6TGk1NGJ6RmJRamZFSGxpRytUMEhJcEpaQ0YrY0dCSHlRSldKdXhHWmtZV2E/mass-effect-end-titles-theme-ost_(mp3.cc).mp3" ></audio>
            </div >
        </div>
    }
}


