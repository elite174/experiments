import { Component } from 'inferno'

export default class Loadable extends Component {
    state = {
        component: null,
        toLoad: null
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.toLoad !== nextProps.toLoad) {
            this.componentDidMount(nextProps)
        }
    }

    async componentDidMount(nextProps) {
        let component = nextProps !== undefined ? await nextProps.toLoad() : await this.props.toLoad()
        this.setState({ component, toLoad: nextProps !== undefined ? nextProps.toLoad : this.props.toLoad })
    }

    render() {
        console.log(this.state.component)
        if (this.state.component === null) {
            return this.props.loader
        } else {
            return <this.state.component.default />
        }
    }
} 