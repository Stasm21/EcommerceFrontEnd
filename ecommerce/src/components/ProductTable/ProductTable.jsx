
import ProductSearch from './ProductSearch';
import React, { Component } from 'react';


class Products  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products:[],
            "productID": 0,
            "name": "",
            "price": 0,
            "description": "",
            "averageRating": 0,
            "categoryID": 0,
            "category": "",
            "userId": null,
            "user": null
         }
         
    }
    
    
    
          
    
    render() {
        return ( 
            <div>
                
                <table>
                <thead>

                    
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>description</th>
                        <th>averageRating</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map(products =>(
                        <tr key={products.ProductID}>
                            <td>{products.name}</td>
                            <td>{products.price}</td>
                            <td>{products.description}</td>
                            <td>{products.averageRating}</td>
                            <td><button onClick ={()=> this.removeSong(products.ProductID)}>Delete</button></td> 
                        </tr>
                        
                    ))}
                </tbody>

            </table>
            </div>
        );
    }
}

export default Products;