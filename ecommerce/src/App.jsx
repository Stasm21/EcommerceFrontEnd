import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // componentDidMount() {
    //     const jwt = localStorage.getItem('token');
    //     try{
    //         const user = jwtDecode(jwt);
    //         this.setState({
    //             user
    //         });
    //     } catch {

    //     }
    // }

    render() {
        return (

            <div>
                <h1>Title</h1>
                <NavBar />
                <Switch>
                    <Route />
                    <Route />
                    <Route />
                </Switch>
            </div>
        );
    }
}

export default App;
