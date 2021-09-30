import React from "react";

function ShoppingCart(props){
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Shopping Cart
                    </th>
                </tr>
            </thead>
            <tbody className='ShoppingCart'>
                {props.allProducts.map((products) => {
                    return(
                        <tr className='rows' key={products.id}>
                            <td>{products.name}</td>
                            <td>{products.price}</td>
                            <td>{products.description}</td>
                            <td>{products.averageRating}</td>
                            <td><button className='increase' type='button' onClick={() => props.increaseQuantity(products)}> + </button></td> {/* This function increases Cart by 1 */}
                            <td><button className='decrease' type='button' onClick={() => props.decreaseQuantity(products)}> - </button></td> {/* This function decreases Cart by 1 */}
                        </tr>
                    )
                })}

            </tbody>
        </table>
    )
}

export default ShoppingCart;

// These are the functions inside of App.jsx
// Need additional function in App.jsx that Updates the ShoppingCart, but was linked to an axios call in the YoutubeVideoProject

// increaseQuantity = (product) => {
//     console.log("Inside IncreaseQuantity")
//     product.products += 1 
//     let totalShoppingCart = {
//       "increase" : product.increase,
//       "decrease": product.decrease,
//     }
//     this.updateShoppingCart(product.id, totalShoppingCart)
//   }

// decreaseQuantity = (product) => {
//     console.log("Inside DecreaseQuantity")
//     product.products += 1 
//     let totalShoppingCart = {
//         "increase" : product.increase,
//         "decrease": product.decrease,
//     }
//     this.updateShoppingCart(product.id, totalShoppingCart)
//     }