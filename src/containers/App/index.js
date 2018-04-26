import { Component } from 'inferno'
import { HashRouter, Link, Route } from 'inferno-router'
import './style.css'
import Galaxy from '../../experiments/Galaxy';
import Graph from '../../experiments/Graph';
const Menu = () => {
    return <div>
        <ul>
            <li><Link to='/galaxy'>Galaxy</Link></li>
            <li><Link to='/graph'>Graph</Link></li>
        </ul>
    </div>
}

export default class App extends Component {
    render() {
        return <HashRouter>
            <div className='root'>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Menu} />
                <Route path={`${process.env.PUBLIC_URL}/galaxy`} component={Galaxy} />
                <Route path={`${process.env.PUBLIC_URL}/graph`} component={Graph} />
            </div>
        </HashRouter>
    }
}