import axios from 'axios';
import React, { Component } from 'react'




class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Name: '',
            Description: '',
            Price:0,
            AverageRating:0,
            
        }
    }
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value,
                     
        });
     }
 
     handleSubmit = (event) =>{
         event.preventDefault();
        this.addProduct();
     }  

     
     addProduct = async() => {
        const products ={
            name:this.state.Name,
            Description:this.state.Description,
            Price:this.state.Price,
            AverageRating:this.state.AverageRating
        };
        try{

            let response = await axios.post('http://localhost:44394/api/product', products);
            console.log(response);
        }
        catch{
            console.log("product not added")
        }
      
    }  







    render() { 
        return (
            
                <div>
                    <h1>Add New Product</h1>
                    <form onSubmit = {this.handleSubmit}>
                        <label> Name:</label>
                        <input name="Name" onChange={this.handleChange} value={this.state.Name}></input><br/>
                        <label>Price</label>
                        <input type="number" onChange={this.handleChange} value={this.state.Price.value}></input><br/>
                        <label>Description</label>
                        <input name="Description" onChange={this.handleChange} value={this.state.Description}></input><br/>
                        <label>Average rating</label>
                        <input type="number" id="quantity" name="quantity" min="0" max="5" onChange={this.handleChange} value={this.state.AverageRating.value}></input><br/>
                        <button className="newProductButton" type="submit">Add Product</button>
                    </form>
                </div> 
            
         );
    }
}
 
export default AddProduct;


