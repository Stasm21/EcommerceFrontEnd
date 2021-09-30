import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: [],
            user:[],
            loggedIn: false,
            categories: [],
            registeredUser: [],
            currentUser: []
         }
    }

    componentDidMount() {
        this.getAllCategories();
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user});
        } catch {}
    }

    //USER FUNCTIONS/API Calls
    userRegister = async (registeredUser) => {
        console.log(registeredUser);
        let response = await axios.post('https://localhost:44394/api/authentication/', registeredUser);
        console.log(response.data);
        if(response === undefined){
            this.setState({});
        }
        else {
            this.setState({
                registeredUser: response.data,
            });
            console.log(registeredUser)
        }
    }

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

   getCurrentUser = async () => {
       try{
           const jwt= localStorage.getItem('token');
           let response = await axios.get('https://localhost:44394/api/examples/user', {headers: {Authorization: 'Bearer ' + jwt}});
           if (response === undefined){
               this.setState({});
           }
           else{
               this.setState({ 
                   user: response.data
                });
                console.log(this.state.user)
           }
       }
       catch(err) {
           console.log(err);
       }
   };

   //PRODUCT FUNCTIONS
   //GET PRODUCT TABLE (ALL PRODUCTS)
    productTable = async () => {
       try{
           let response = await axios.get('https://localhost:44394/api/products/products/');
           if (response === undefined){
            this.setState({});
        }
        else{
            this.setState({ 
                productTable: response.data
             });
             console.log(this.state.productTable)
            }
        }
        catch(err) {
            console.log(err);
        }
    }
    
    
   //CART FUNCTIONS
   //CATEGORY FUNCTIONS
    getAllCategories = async() => {
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
                <Registration userRegister = {this.userRegister} />
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
