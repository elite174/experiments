import { Component } from 'inferno'
import './style.css'


const Example = ({ history, route, color, gif }) => {
    return <div className='example gallery__grid__item' style={{ backgroundImage: `url(${gif})`}}
        onClick={() => { history.push(route) }}>
        <div className='example__curtain'>
            <span className='example__curtain__span'>Explore</span>
        </div>
    </div>
}

export default Example  