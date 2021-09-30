import React from 'react';


const ProductTable  = (props) => {
    return (
        <div className = "center">
            <br/><br/>
            <table>
                <thead>
                    <tr>
                    <th>name</th>
                        <th>price</th>
                        <th>description</th>
                        <th>averageRating</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                {props.products.map((product) => {
                    return(
                            <tr key = {product.id}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.averageRating}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>

                                
                                <td><button onClick = {()=> props.delete(product.id)}>Delete product</button></td>
                            </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
 
export default ProductTable;