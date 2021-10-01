import React, { Component } from 'react';
import NewSearchBar from '../NewSearchBar/NewSearchBar';
import ProductTable from '../ProductTable/ProductTable';


const Home = (props) => {
    return (
        <div className = "home">
            <br></br> <br></br>
            <NewSearchBar filterProducts = {props.filterAllProducts} />
            <ProductTable products = {props.products} />
        </div>
    );
}

export default Home;
