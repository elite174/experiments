import { Component } from 'inferno'
import ScrollComponent from './ScrollComponent';

class Hello extends ScrollComponent {
    constructor(props) {
        super(props)
        let state = {}
        Object.assign(state, super().state, { length: 1 })
        this.state = state
    }
    animation = [{
        selector: 'scroll-hello',
        property: 'opacity',
        start: '0%',
        end: '100%',
    }]
    computeAnimation = (props) => {
        for (let animObj of this.animation) {
        }
    }
    componentWillReceiveProps(nextProps, prevState) {
        if (nextProps.scrollState >= prevState.start && nextProps.scrollState <= prevState.end) {
            if (!this.state.visible) {
                this.setState({ visible: true })
            } else {
                this.computeAnimation(nextProps)
            }
        }
    }
    render() {
        return <div className='scroll-hello'>Hello</div>
    }
}

export default Hello