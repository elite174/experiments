import { Component } from 'inferno'
import ScrollComponent from './ScrollComponent';
import { Animation } from '../utils';

const Hello = ScrollComponent(class Hello extends Component {
    render() {
        return <div className='scroll-hello'>Hello</div>
    }
})

export default Hello