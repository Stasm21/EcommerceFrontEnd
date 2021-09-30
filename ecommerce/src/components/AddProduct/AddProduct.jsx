import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            description: '',
            price: 0,
            rating: 0,
            category: ''   
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    createListing= async() => {
        let price = this.state.price;
        let rating = this.state.rating;
        let priceNum = parseInt(price);
        let ratingNum = parseInt(rating);

        const product = {
            name: this.state.name,
            description: this.state.description,
            price : priceNum,
            rating : ratingNum,
            category: this.state.category
        }
        try{
            console.log(product)
            await axios.post('https://localhost:44394/api/products/', product);
            this.setState({});
            console.log(`${this.state.name} has been added`)
        }catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createListing();
    }

    render() { 
        return ( 
            <div>
            <form onSubmit = {(event) => this.handleSubmit(event)}>
                <table>
                <tr>
                    <td><label>Product Name</label>
                    <input type = 'text' name = 'name' onChange={this.handleChange} value= {this.state.name}/></td>
                    <td><label>Product Description</label>
                    <input type = 'text' name = 'description' onChange={this.handleChange} value= {this.state.description}/>
                    </td>
                </tr>
                <tr><td>   
                    <label>Price</label>
                    <input type = 'text' name = 'price' onChange={this.handleChange} value= {this.state.price}/>
                    </td>
                </tr>
                <tr><td>
                    <label>Rating</label>
                    <input type = 'text' name = 'rating' onChange={this.handleChange} value= {this.state.rating}/>
                    </td><td>
                    <label>Category</label>
                    <input type = 'text' name = 'category' onChange={this.handleChange} value= {this.state.category}/>
                    </td>
                </tr>
                <button type="submit">Create Product Listing</button>
                </table>
            </form>
        </div>
         );
    }
}
 
export default AddProduct;