import { Component } from 'inferno'
import './style.css'
import Hello from './ScollObjects/Hello';
import { throttle } from '../../utils';

export default class Scroll extends Component {
    state = { scrollState: 0 }
    height = 2000
    scroll = throttle((e, self = this) => {
        console.log(e.target.scrollTop)
        self.setState({ scrollState: e.target.scrollTop })
    })
    render() {
        return (
            <div className='scroll-scene' >
                <div className='scroll-container' onScroll={this.scroll}>
                    <div className='scroll-view' style={{ height: this.height }}>
                    </div>
                </div>
                <Hello animation={[{
                    selector: 'scroll-hello', properties: [
                        {
                            property: 'opacity',
                            keyframes: [
                                {
                                    state: 0,
                                    value: 0,
                                },
                                {
                                    state: 50,
                                    value: 1
                                },
                                {
                                    state: 100,
                                    value: 0
                                }
                            ],
                            unit: ''
                        },
                        {
                            property: 'top',
                            keyframes: [
                                {
                                    state: 50,
                                    value: 0
                                },
                                {
                                    state: 100,
                                    value: 100
                                }
                            ],
                            unit: 'px'
                        }
                    ]
                }]} scrollState={this.state.scrollState} start='0.0%' end='50.0%' length={this.height} />
            </div>
        )
    }
}