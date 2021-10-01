import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import jwtDecode from "jwt-decode";
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AddProduct from './components/AddProduct/AddProduct';
import ProductTable from './components/ProductTable/ProductTable';
import ProductSearch from './components/SearchBar/SearchBar';
import NewSearchBar from './components/NewSearchBar/NewSearchBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: [],
            user:[],
            loggedIn: false,
            categories: [],
            registeredUser: [],
            currentUser: [],
            products: [],
         }
    }

    componentDidMount() {
        this.getAllCategories();
        this.getAllProducts();
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
    getAllProducts = async () => {
       try{
           let response = await axios.get('https://localhost:44394/api/product/');
           if (response === undefined){
            this.setState({});
        }
        else{
            this.setState({ 
                products: response.data
             });
             console.log(this.state.products)
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

    filterAllProducts = async (searchTerm) => {
        let results = this.state.products.filter(function(product){
            if(product.name == searchTerm)
            {
                return true;
            }
        })
        this.setState({
            products : results
        })
    }


    render() {
        return (

            <div>
                <h1>Title</h1>
                <div className="Nav"><NavBar /></div>
                <div className= "userfields">
                <NewSearchBar filterProducts = {this.filterAllProducts} />
                <ProductSearch />
                <Registration  userRegister = {this.userRegister} />
                <Login userLogin={this.userLogin}/>
                <Switch>
                    <Route />
                    <Route />
                    <Route />
                </Switch>
                <AddProduct categories = {this.state.categories}/>
                <ProductTable products = {this.state.products} />
               
                </div>
            </div>
        );
    }
}

export default App;
