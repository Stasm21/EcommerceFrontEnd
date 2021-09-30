import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import Products from './components/Products';
import AddProduct from './components/AddProduct';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: [],
            user:[],
            loggedIn: false,
            categories: []
         }
    }

    componentDidMount() {
        this.getAllCategories();
        // const jwt = localStorage.getItem('token');
        // try{
        //     const user = jwtDecode(jwt);
        //     this.setState({
        //         user
        //     });
        // } catch {

        // }
    }
    //USER FUNCTIONS/API Calls

   userLogin = async (login) => {
       try {
           let response = await axios.post('https://localhost:44394/api/authentication/login/',login);
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
   //PRODUCT FUNCTIONS
   //CART FUNCTIONS
   //CATEGORY FUNCTIONS
    getAllCategories = async() => {
        debugger;
        try{
            let response = await axios.get('https://localhost:44394/api/category');
            if (response === undefined){
                this.setState({});
                console.log(response.data)
            }
            else{
                this.setState({
                    categories: response.data
                });
                console.log(this.state.categories)
            }
        }
        catch (err){
            console.log(err);
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
                <Products />
                <AddProduct />
            </div>
        );
    }
}

export default App;
