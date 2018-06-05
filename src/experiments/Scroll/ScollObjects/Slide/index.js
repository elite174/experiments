import { Component } from 'inferno'
import './style.css'
import Cat from '../assets/cat.jpg'

import ScrollComponent from '../ScrollComponent';
const Slide = ScrollComponent(class Slide extends Component {
    render() {
        let { image = Cat, text = 'super loeg wepfomewfpomwf wpef wpf wpef wpef wpef ',
            caption = 'Kill Bill' } = this.props
        return <div className='slide'>
            <div className='slide-header'>{caption}</div>
            <div className='slide-image' style={{ backgroundImage: `url(${image})` }}></div>
            <div className='slide-text'>{text}</div>
        </div>
    }
})

export default Slide