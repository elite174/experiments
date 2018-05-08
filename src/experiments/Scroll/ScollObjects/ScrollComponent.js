import { Component } from 'inferno'
import { cloneVNode } from 'inferno-clone-vnode';

export default class ScrollComponent extends Component {
    state = {
        visible: false,
        start: this.props.length / 100 * this.props.start,
        end: this.props.length / 100 * this.props.end
    }
    componentWillReceiveProps(nextProps, prevState) {
        if (nextProps.scrollState >= prevState.start && nextProps.scrollState <= prevState.end && !prevState.visible) {
            this.setState({ visible: true })
        }
    }
    render() {
        return null
    }
}