import { Component } from 'inferno'
import './style.css'
import Example from '../Example';
import { withRouter } from 'inferno-router';
import GalaxyGif from '../../assets/galaxy.gif'
import GraphGif from '../../assets/graph.gif'
import SquaresGif from '../../assets/squares.gif'
import DetroitGif from '../../assets/detroit.gif'
const Gallery = withRouter(class Gallery extends Component {
    constructor() {
        super()
        if (window.localStorage.getItem('seenIntro')) {
            this.state = { showGallery: true }
        } else {
            this.state = { showGallery: false }
        }
    }
    seenIntro = () => {
        this.setState({ showGallery: true })
        window.localStorage.setItem('seenIntro', 'true')
        this.animate()
    }
    appear = (el) => {
        let time0 = performance.now()
        requestAnimationFrame(function animate(time) {
            let timePassed = time - time0
            if (timePassed > 250) {
                timePassed = 250
            }
            el.style.opacity = (timePassed / 250).toFixed(2) ** 2
            if (timePassed < 250) {
                requestAnimationFrame(animate)
            }
        })
    }
    animate = () => {
        let elems = document.getElementsByClassName('gallery__grid__item')
        let delay = 0
        for (let el of elems) {
            setTimeout(() => this.appear(el), delay)
            delay += 400
        }
    }
    componentDidMount() {
        if (window.localStorage.getItem('seenIntro')) {
            this.animate()
        }
    }
    render() {
        return <div className='gallery'>
            {!this.state.showGallery && <div className='gallery__intro'>
                <span className='gallery__welcome'>Welcome to experiments</span>
                <span className='gallery__explore' onClick={this.seenIntro}>Explore</span>
            </div>}
            {this.state.showGallery && <div className="gallery__grid">
                <Example route='/detroit' history={this.props.history} color='123' gif={DetroitGif} />
                <Example route='/squares' history={this.props.history} color='123' gif={SquaresGif} />
                <Example route='/galaxy' history={this.props.history} color='#000' gif={GalaxyGif} />
                <Example route='/graph' history={this.props.history} color='123' gif={GraphGif} />
            </div>}
        </div>
    }
})

export default Gallery