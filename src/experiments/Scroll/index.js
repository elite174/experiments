import { Component } from 'inferno'
import './style.css'
import { throttle } from '../../utils';
import WannaParallax from './ScollObjects/WannaParallax';
import Slide from './ScollObjects/Slide';

export default class Scroll extends Component {
    state = { scrollState: 0 }
    height = 10000
    scroll = throttle((e, self = this) => {
        self.setState({ scrollState: e.target.scrollTop })
    })
    WPAnim = [{
        selector: 'there',
        properties: [{
            property: 'translateY',
            keyframes: [{
                state: 0,
                value: 50
            }, {
                state: 20,
                value: 0
            }],
            unit: 'px',
            transform: true
        },
        {
            property: 'translateX',
            keyframes: [{
                state: 0,
                value: 50
            }, {
                state: 20,
                value: 0
            }],
            unit: 'px',
            transform: true
        },
        {
            property: 'opacity',
            keyframes: [{
                state: 0,
                value: 0
            }, {
                state: 20,
                value: 1
            }],
            unit: ''
        }]
    },
    {
        selector: 'is',
        properties: [{
            property: 'translateY',
            keyframes: [{
                state: 20,
                value: -100
            }, {
                state: 40,
                value: 0
            }],
            unit: 'px',
            transform: true
        },
        {
            property: 'opacity',
            keyframes: [{
                state: 20,
                value: 0
            }, {
                state: 40,
                value: 1
            }],
            unit: ''
        }]
    },
    {
        selector: 'a',
        properties: [{
            property: 'translateY',
            keyframes: [{
                state: 40,
                value: 150
            }, {
                state: 60,
                value: 0
            }],
            unit: 'px',
            transform: true
        },
        {
            property: 'opacity',
            keyframes: [{
                state: 40,
                value: 0
            }, {
                state: 60,
                value: 1
            }],
            unit: ''
        }]
    },
    {
        selector: 'cat',
        properties: [{
            property: 'translateZ',
            keyframes: [{
                state: 60,
                value: 200
            }, {
                state: 100,
                value: 0
            }],
            unit: 'px',
            transform: true
        },
        {
            property: 'opacity',
            keyframes: [{
                state: 60,
                value: 0
            }, {
                state: 100,
                value: 1
            }],
            unit: ''
        }]
    }]
    SlideAnimation = [{
        selector: 'slide-header',
        properties: [
            {
                property: 'translateX',
                keyframes: [{
                    state: 0,
                    value: -150
                },
                {
                    state: 25,
                    value: 0
                },
                {
                    state: 75,
                    value: 0
                },
                {
                    state: 100,
                    value: -150
                }],
                unit: 'px',
                transform: true
            }
        ]
    },
    {
        selector: 'slide-image',
        properties: [
            {
                property: 'translateY',
                keyframes: [{
                    state: 0,
                    value: 75
                },
                {
                    state: 25,
                    value: 0
                },
                {
                    state: 75,
                    value: 0
                },
                {
                    state: 100,
                    value: 75
                }],
                unit: 'px',
                transform: true
            }
        ]
    },
    {
        selector: 'slide-text',
        properties: [
            {
                property: 'opacity',
                keyframes: [{
                    state: 0,
                    value: 0
                },
                {
                    state: 100,
                    value: 1
                }],
                unit: ''
            }
        ]
    },
    ]
    render() {
        return (
            <div className='scroll-scene' >
                <div className='scroll-container' onScroll={this.scroll}>
                    <div className='scroll-view' style={{ height: this.height }}>

                    </div>
                </div>
                <WannaParallax animation={this.WPAnim} scrollState={this.state.scrollState} start='0%' end='30%'
                    length={this.height} />
                <Slide animation={this.SlideAnimation} scrollState={this.state.scrollState} start='30%' end='60%'
                    length={this.height} />
            </div>
        )
    }
}