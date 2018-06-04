import { Component } from 'inferno'
import ScrollComponent from '../ScrollComponent'
import './style.css'

const WannaParallax = ScrollComponent(class extends Component {
    render() {
        return <div className='text-container'>
            <div className='text'>There are several movies I like</div>
        </div>
    }
})

export default WannaParallax