import { Component } from 'inferno'
import { HashRouter, Link, Route } from 'inferno-router'
import './style.css'
import Loadable from '../Loadable';
import GalaxyLoader from '../../loaders/GalaxyLoader';
import Gallery from '../../components/Gallery';

export default class App extends Component {
    render() {
        return <HashRouter>
            <div className='root'>
                <Route exact path={`/`} component={Gallery} />
                <Route path={`/galaxy`}
                    render={() => <Loadable loader={<GalaxyLoader />} toLoad={() => import('../../experiments/Galaxy')} />} />
                <Route path={`/graph`}
                    render={() => <Loadable loader={<div>Loading...</div>} toLoad={() => import('../../experiments/Graph')} />} />
                <Route path={`/scroll`}
                    render={() => <Loadable loader={<div>Loading...</div>} toLoad={() => import('../../experiments/Scroll')} />} />
                <Route path={'/squares'}
                    render={() => <Loadable loader={<div>Loading...</div>} toLoad={() => import('../../experiments/Squares')} />} />
            </div>
        </HashRouter>
    }
}

