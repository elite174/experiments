import { Component } from 'inferno'
import { cloneVNode } from 'inferno-clone-vnode';

export default class ScrollComponent extends Component {
    constructor(props){
        super(props)
    }
    state = {
        visible: false,
        start: Number((this.props.length / 100 * parseFloat(this.props.start)).toFixed(2)),
        end: Number((this.props.length / 100 * parseFloat(this.props.end)).toFixed(2))
    }

    render() {
        return null
    }
}