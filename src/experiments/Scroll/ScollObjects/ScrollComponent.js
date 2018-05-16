import { Component } from 'inferno'
import { cloneVNode } from 'inferno-clone-vnode';
import { setStyles, Animation } from '../utils';

export default function ScrollComponent(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                visible: false,
                start: Number((this.props.length / 100 * parseFloat(this.props.start)).toFixed(2)),
                end: Number((this.props.length / 100 * parseFloat(this.props.end)).toFixed(2))
            }
            this.animation = []
            for (let anim of this.props.animation) {
                this.animation.push(new Animation(anim.selector, anim.properties, this.state.start, this.state.end))
            }
        }
        computeAnimation = (scrollState) => {
            for (let anim of this.animation) {
                let propsToAnimate = []
                for (let property of anim.properties) {
                    if (scrollState >= property.animStart && scrollState <= property.animEnd) {
                        for (let i = 0; i < property.keyframes.length - 1; i++) {
                            if (property.keyframes[i].state <= scrollState && property.keyframes[i + 1].state >= scrollState) {
                                propsToAnimate.push({
                                    property: property.property,
                                    value: property.keyframes[i].value + ((property.keyframes[i + 1].value - property.keyframes[i].value) / (property.keyframes[i + 1].state - property.keyframes[i].state) * (scrollState - property.keyframes[i].state)),
                                    unit: property.unit
                                })
                                break
                            }
                        }
                    }
                }
                setStyles(anim.selector, propsToAnimate)
            }
        }

        componentWillReceiveProps(nextProps, prevState) {
            console.log(nextProps, this.state)
            if (nextProps.scrollState >= this.state.start && nextProps.scrollState <= this.state.end) {
                if (!this.state.visible) {
                    this.setState({ visible: true }, () => this.computeAnimation(nextProps.scrollState))
                } else {
                    this.computeAnimation(nextProps.scrollState)
                }
            } else {
                if (this.state.visible) {
                    this.setState({ visible: false })
                }
            }
        }

        render() {
            return this.state.visible ? <WrappedComponent start={this.state.start} end={this.state.end} /> : null
        }
    }
}