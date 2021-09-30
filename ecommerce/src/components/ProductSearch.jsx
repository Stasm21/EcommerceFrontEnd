import React, { Component } from 'react';
import axios from 'axios';


class ProductSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            results: [],
            products: props.product,
            submitted: false
         }
    }


    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value         
        });
     }
 
     handleSubmit = (event) =>{
         event.preventDefault();
         this.search4Product();
     }



     componentDidMount(){
        this.getAllProducts();
    }

   
    async getAllProducts(){
        let response = await axios.get('http://localhost:44394/api/product');
        this.setState({
            products: response.data
        });
        console.log(response.data)
    }


    async removeProduct(id){
        let response = await axios.delete('http://localhost:44394/api/product' + id + '/');
        console.log(response);
        this.getAllSongs();

    }




     async search4Product(){

        try{
            const results = this.props.product.filter(products => 
                products.name.toLowerCase().includes(this.state.search.toLowerCase()) || 
                products.price.toLowerCase().includes(this.state.search.toLowerCase()) ||
                products.description.toLowerCase().includes(this.state.search.toLowerCase()) ||
                products.averageRating.toLowerCase().includes(this.state.search.toLowerCase()));
                
            if(results !== ''){
                console.log(results);
                this.state.results = results;
                this.state.submitted = true;
                this.setState({state: this.state});
            }else{
                alert("no results");
            }

        }
        catch{
            console.log("unable to find")
        }

         
     }

    render() { 
        return ( 
            
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>Search:</label>
                    <input name="search" onChange={this.handleChange} value={this.state.search}></input>
                    <button type="submit">Search</button>
                </form>

                {this.state.submitted ? (  
                    <div>
                    <h2>Search Results:</h2>                  
                   <table>
                    <thead>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Average Rating</th>
                    </thead>
                    {this.state.results.map((products)=>{
                        return(
                            <tr>
                            <td>{products.name}</td>
                            <td>{products.description}</td>
                            <td>{products.price}</td>
                            <td>{products.averageRating}</td>
                            
                         
                        </tr>   
                        );
                    })}
                </table>
                </div>
                ):(console.log("Waiting for Search Term"))}
                

            </div>
         );
    }
}
 
export default ProductSearch;