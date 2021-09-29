import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: [],
            user:[],
            loggedIn: false,
         }
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

   userLogin = async (login) => {
       try {
           let response = await axios.post('http://localhost:3000/api/authentication/login/',login);
           if (response === undefined){
               this.setState({});
           }
           else{
               this.setState({
                   token: response.data,
                   loggedIn: !this.state.loggedIn
               });
               localStorage.setItem('token', this.state.token.token);
               console.log(this.state.token.token);
               console.log(this.state.user);
           }
           console.log(response.data)
       } catch(err) {
            console.log(err)
       }
   }


    render() {
        return (

            <div>
                <h1>Title</h1>
                <NavBar />
                <Login userLogin={this.userLogin}/>
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
