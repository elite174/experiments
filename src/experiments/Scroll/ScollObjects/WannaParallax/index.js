import { Component } from 'inferno'
import ScrollComponent from '../ScrollComponent'
import './style.css'

const WannaParallax = ScrollComponent(class extends Component {
    render() {
        return <div className='text-container'>
            <span className='there'>There</span>
            <span className='is'>is</span>
            <span className='a'>a</span>
            <span className='cat'>CAT</span>
        </div>
    }
})

export default WannaParallax