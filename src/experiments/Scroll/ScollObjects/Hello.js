import { Component } from 'inferno'
import ScrollComponent from './ScrollComponent';
import { setStyle } from '../../../utils';

function Animation(selector, property, frames, startComponentState, endComponentState) {
    this.selector = selector
    this.property = property
    let newFrames = []
    let time = endComponentState - startComponentState
    for (let frame of frames) {
        newFrames.push({
            ...frame,
            state: Math.round(startComponentState + frame.state * time / 100)
        })
    }
    this.frames = newFrames
    this.animStart = this.frames[0].state
    this.animEnd = this.frames[this.frames.length - 1].state
}
class Hello extends Component {
    state = {
        visible: false,
        start: Number((this.props.length / 100 * parseFloat(this.props.start)).toFixed(2)),
        end: Number((this.props.length / 100 * parseFloat(this.props.end)).toFixed(2))
    }
    animation = [
        new Animation('scroll-hello', 'opacity', [
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
        ], this.state.start, this.state.end),
    ]

    computeAnimation = (scrollState) => {
        for (let anim of this.animation) {
            if (scrollState >= anim.animStart && scrollState <= anim.animEnd) {
                for (let i = 0; i < anim.frames.length - 1; i++) {
                    if (anim.frames[i].state <= scrollState && anim.frames[i + 1].state >= scrollState) {
                        setStyle(anim.selector, anim.property,
                            anim.frames[i].value + ((anim.frames[i + 1].value - anim.frames[i].value) / (anim.frames[i + 1].state - anim.frames[i].state) * (scrollState - anim.frames[i].state)))
                        break
                    }
                }
            }
        }
    }
    componentWillReceiveProps(nextProps, prevState) {
        if (nextProps.scrollState >= this.state.start && nextProps.scrollState <= this.state.end) {
            if (!this.state.visible) {
                this.setState({ visible: true })
            } else {
                this.computeAnimation(nextProps.scrollState)
            }
        }
    }
    render() {
        return <div className='scroll-hello'>Hello</div>
    }
}

export default Hello