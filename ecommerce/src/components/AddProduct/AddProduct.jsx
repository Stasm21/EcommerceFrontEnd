import React, { Component } from 'react';
import axios from 'axios';

import { withRouter } from 'react-router-dom';
import './AddProduct.css'


class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            price: 0,
            rating: 0,
            categoryID: '',
            categories: this.props.categories
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    createListing= async() => {
        let price = this.state.price;
        let rating = this.state.rating;
        let categoryID = this.state.categoryID;
        let priceNum = parseInt(price);
        let ratingNum = parseInt(rating);
        let catNum = parseInt(categoryID);
        let categories = this.state.categories;

        const product = {
            name: this.state.name,
            description: this.state.description,
            price : priceNum,
            rating : ratingNum,
            categoryID: catNum,
            categories: this.state.categories
        }
        try{
            console.log(product)
            await axios.post('https://localhost:44394/api/product/', product);
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
            <div className="add">
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
                    <label>Category
                        <select
                        name='categoryID'
                        onChange={this.handleChange}
                        className='form-control'
                        value= {this.state.categoryID}
                        >
                        <option value=''>Select a Category</option>
                        <option value='1'>Performance</option>
                        <option value='2'>Exterior</option>
                        <option value='3'>Interior</option>
                        <option value='4'>Suspension</option>
                        </select>
                    </label>
                    {/* <input type = 'text' name = 'categoryID' onChange={this.handleChange} value= {this.state.categoryID}/> */}
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

/* <label>Category
    <select name='categoryID' id='category'>
        <option value={this.state.categories.categoryID}>{this.state.categories.name}</option>
    </select>
</label>
<input type = 'text' name = 'categoryID' onChange={this.handleChange} value= {this.state.categoryID}/>
</td> */
