import { Component } from 'inferno'
import './style.css'
import Example from '../Example';


export default class Gallery extends Component {
    state = { showGallery: false }
    render() {
        return <div className='gallery'>
            {!this.state.showGallery && <div className='gallery__intro'>
                <span className='gallery__welcome'>Welcome to experiments</span>
                <span className='gallery__explore'>Explore</span>
            </div>}
            <Example href={'/galaxy'} />
        </div>
    }
}