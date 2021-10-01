import React from 'react';

function Review(props){
    if (props.reviews === undefined) {
        console.log(props);
        return (
            null
        );
    } else {
        console.log(props);
        let reviews = props.reviews.map((review) => {
            return <tr key={review.reviewID}>
                <td>{review.description}</td>
                <td>{review.rating}</td>
                <td>{review.productID}</td>

            </tr>
        })
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Customer's Review:</th>
                            <th>Customer Rating:</th>
                            <th>Product</th>
     
                        </tr>
                    </thead>
                    <tbody>
                        {reviews}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Review;

