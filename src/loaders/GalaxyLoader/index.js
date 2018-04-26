import { Component } from 'inferno'
import GalaxyIcon from '../../experiments/Galaxy/assets/icons/GalaxyIcon';
import './style.css'

const GalaxyLoader = () => {
    return <div className='galaxy-loader'>
        <GalaxyIcon className='galaxy-loader__icon' />
        <div className='galaxy-loader__text'>Loading...</div>
    </div>
}

export default GalaxyLoader