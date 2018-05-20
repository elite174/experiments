import { Component } from 'inferno'
import ScrollComponent from '../ScrollComponent'
import './style.css'

const WannaParallax = ScrollComponent(class extends Component {
    render() {
        return <div className='wanna-parallax' style={{ left: window.innerWidth / 2 }}>Wanna parallax?</div>
    }
})

export default WannaParallax