import { Component } from 'inferno'
import './style.css'
import Galaxy from '../../experiments/galaxy';


export default class App extends Component {
    render() {
        return <div className='root'>
            <Galaxy />
        </div>
    }
}