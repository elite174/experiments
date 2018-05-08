import { Component } from 'inferno'
import './style.css'
import Hello from './ScollObjects/Hello';

export default class Scroll extends Component {
    render() {
        return (
            <div className='scroll-view'>
                <div className='scroll-scene'>
                    <Hello />
                </div>
            </div>
        )
    }
}