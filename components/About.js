import {Component} from "react";
import { useParams } from "react-router-dom";

class About extends Component {
    constructor (props) {
        super(props);
        console.log('constructor 1 is called');
        this.state = {
            count: 0,
            login_name: '',
            location: ''
        }
    }

    async componentDidMount() {
        const API = await fetch('https://api.github.com/users/zainzafarpro');
        const json = await API.json();

        this.setState({
            login_name: json.name,
            location: this.location ? this.location : 'Pakistan'
        })

    }

    render() {

        console.log('render 1 is called');
        
        let { name } = this.props;
        let {login_name, location} = this.state;

        return (
            <div>
                About us {login_name} + {location}
                <div>Count : {this.state.count}</div>
            </div>
        )
    }
}

export default About;